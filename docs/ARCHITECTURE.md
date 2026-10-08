# SparkPlug Studio — Platform Architecture

Status: **planning only, nothing in this doc is built yet.** This is the reference for the pipeline before any production code is written, per the brief given 2026-10-08. Update it as decisions change — it should stay the source of truth, not a one-time snapshot.

---

## 0. Read this first: where this actually has to live

Before anything else, one decision gates everything below.

**The current `sparkplug-studio` repo is a static GitHub Pages site.** No server, no database, no secrets, no auth — every file in it is public and world-readable the moment it's pushed. That's correct and fine for the Concepts hub and for front-end-only prototypes like the current SparkPlug walkthrough demo and the Ideation Studio placeholder.

It is **not** compatible with anything in this document. Section 16 (Security) is non-negotiable on points like "never expose provider API keys in the browser" and "no public asset access" — Williams car/driver/sponsor imagery is exactly the kind of asset that cannot sit in a public repo. A real backend (database, job queue, object storage, server-side API keys, authenticated users) cannot run on GitHub Pages at all, full stop.

**Recommendation:** the real SparkPlug Studio product is a separate, private, properly-hosted application (Vercel + Supabase, detailed below) in its own repo. The public `sparkplug-studio` GitHub Pages site stays exactly what it's good at being — the external-facing Concepts showcase and a place for quick, no-backend, nothing-confidential front-end prototypes (like the current demos). The two can link to each other, but the real product's code, data, and secrets never touch the public repo.

This is a change from how we talked about "where does a new tool live" a few messages ago — that answer (new folder, same repo) was correct for a throwaway front-end placeholder. It stops being correct the moment a tool touches real Williams assets, a database, or an API key. Treat that as the dividing line for every future tool: **no backend/secrets/real assets → public repo is fine. Any of those → it belongs in the private product.**

Nothing below gets built until you decide on this split and (if you agree) a new private repo gets created. Everything else in this doc assumes that split.

---

## 1. System architecture

```
                         ┌─────────────────────────┐
                         │   SparkPlug Studio Web   │   Next.js (App Router), Vercel
                         │   (auth-gated, private)  │
                         └────────────┬─────────────┘
                                      │ tRPC/REST (server-side only)
                         ┌────────────▼─────────────┐
                         │      API / Orchestration   │   Next.js API routes +
                         │           Layer             │   server actions
                         └──┬──────────┬──────────┬──┘
                            │          │          │
              ┌─────────────▼┐  ┌──────▼─────┐  ┌─▼───────────────┐
              │  Postgres     │  │  Job Queue  │  │  Object Storage │
              │  (Supabase)   │  │ (Trigger.dev│  │ (Supabase/R2)   │
              │  + pgvector   │  │  workers)   │  │  signed URLs     │
              └───────────────┘  └──────┬──────┘  └─────────────────┘
                                         │
                            ┌────────────▼────────────┐
                            │   Provider Abstraction    │
                            │        Layer               │
                            └──┬───────────┬────────────┘
                                │           │
                        ┌───────▼──┐   ┌────▼───────┐
                        │Higgsfield │   │  Runway     │  ...future providers
                        └───────────┘   └────────────┘
```

Why this shape:
- **Web app stays thin.** It never talks to a provider directly and never waits on a generation. It creates a job and polls/subscribes for state.
- **Orchestration is server-side only**, so provider keys, brand rules, and raw asset data never reach the browser.
- **Job queue is a separate system from the web app's request/response cycle** — this is what makes "click generate → see generating state → result appears later" possible without the web app's serverless functions timing out on a 90-second video job.
- **Provider abstraction sits behind the queue**, not in front of it, so swapping/adding a provider never touches the web app or the queue — only one adapter.

## 2. Database schema

Postgres (Supabase). Core tables — not exhaustive, but the shape everything else hangs off:

```sql
users (
  id uuid pk, email text unique, name text,
  role text,              -- 'admin' | 'creative' | 'viewer'
  created_at timestamptz
)

projects (
  id uuid pk, name text, created_by uuid references users,
  created_at timestamptz
)

project_members (
  project_id uuid references projects,
  user_id uuid references users,
  role text,               -- per-project override of global role
  primary key (project_id, user_id)
)

briefs (
  id uuid pk, project_id uuid references projects,
  user_id uuid references users,
  raw_transcript text,                 -- null if typed, not spoken
  structured jsonb,                    -- {objective, audience, location, driver,
                                        --  car, sponsor, mood, visual_style, format,
                                        --  platform, concept_count, media_type}
  confirmed_at timestamptz,            -- null until user confirms the extracted brief
  created_at timestamptz
)

assets (
  id uuid pk, project_id uuid references projects,   -- null = shared library asset
  category text,            -- 'car' | 'driver' | 'sponsor' | 'brand' | 'generated' | ...
  subcategory text,         -- e.g. 'livery-detail', 'helmet', 'logo-variant'
  storage_path text,        -- object storage key, never a public URL
  thumbnail_path text,
  description text,         -- auto-generated (vision model) + human-editable
  embedding vector(1536),   -- pgvector, text-embedding of description + tags
  tags text[],
  approved_for_generation boolean default false,   -- gates retrieval, see §3
  metadata jsonb,           -- season, source, rights/usage notes, resolution, etc.
  created_by uuid references users,
  created_at timestamptz
)

generations (
  id uuid pk, project_id uuid references projects,
  brief_id uuid references briefs,
  user_id uuid references users,
  type text,                -- 'image' | 'video'
  mode text,                -- 'fast' | 'quality' | 'final'
  prompt text,               -- final constructed prompt sent to the provider
  provider text, model text,
  input_asset_ids uuid[],    -- references into assets, the reference conditioning used
  settings jsonb,            -- aspect ratio, duration, variation count, etc.
  status text,               -- see §4 lifecycle
  attempt int default 1,
  parent_generation_id uuid, -- set when this is an auto-retry of a failed attempt
  estimated_cost numeric, actual_cost numeric,
  created_at timestamptz, completed_at timestamptz
)

generation_outputs (
  id uuid pk, generation_id uuid references generations,
  storage_path text, thumbnail_path text,
  quality_scores jsonb,       -- {williams_accuracy, brand_consistency,
                               --  sponsor_integrity, visual_quality} each 0-100
  quality_pass boolean,
  quality_notes text,         -- judge's written rationale, for audit/debugging
  selected boolean default false,  -- user's chosen output(s)
  created_at timestamptz
)

jobs (
  id uuid pk, generation_id uuid references generations,
  provider_job_id text,       -- Trigger.dev run id / provider's own job id
  status text, attempts int, last_error text,
  created_at timestamptz, updated_at timestamptz
)

cost_ledger (
  id uuid pk, generation_id uuid references generations,
  provider text, amount numeric, currency text default 'GBP',
  created_at timestamptz
)

audit_log (
  id uuid pk, user_id uuid references users,
  action text, resource_type text, resource_id uuid,
  metadata jsonb, created_at timestamptz
)
```

`project_id` nullable on `assets` is deliberate: the Williams reference library (cars, drivers, sponsors, brand) is shared across all projects; generated outputs and project-specific uploads are scoped to one project.

## 3. Asset/data architecture

Four tiers, kept strictly separate — this is the part of the brief I'd push back least on, it's the right call:

| Tier | What it is | Where it lives | Used how |
|---|---|---|---|
| **A. Reference assets** | Curated car/driver/sponsor/brand imagery, approved for generation | `assets` table + object storage | Sent directly to the provider as conditioning images |
| **B. Retrieved creative context** | Dynamic, per-request subset of (A) + relevant brand rules, chosen by relevance | pgvector similarity search over `assets.embedding`, + a static brand-rules doc (C) | Assembled per-generation, not pre-baked |
| **C. Prompt/system context** | Non-negotiable brand constitution — colour hex values, logo clear-space rules, "never do X" list | A versioned markdown/JSON doc, loaded into every prompt regardless of retrieval | Always-on constraints, independent of what's retrieved |
| **D. Fine-tuned/custom models** | Not in V1 | — | Revisit once (A) has enough approved, tagged volume per category (e.g. 50+ clean car studio shots) to make a LoRA worth the cost of training and maintaining |

Retrieval (B) only ever searches `assets` where `approved_for_generation = true` — this is the governance lever: an asset can be uploaded and tagged without being usable in a generation until someone with the right role flips that flag. New assets never silently become generation inputs.

## 4. Generation job lifecycle

```
queued → context_retrieval → prompt_construction → dispatched
  → provider_processing → quality_check
      → passed  → completed
      → failed  → retry (new generation row, parent_generation_id set,
                          different provider/workflow) up to N attempts
                → exhausted → flagged_for_review (surfaced to user, not hidden)
```

- Every transition is a row update on `generations.status` + a `jobs` row for the provider-facing leg, so the full history is queryable, not just the final state.
- `quality_check` always runs, even in modes where the threshold is lenient — scores are stored regardless of pass/fail, so quality trends are visible later even if nothing auto-retried.
- Retries change something (provider, reference set, or prompt strategy) — a bare retry of the identical request against a model that already failed the brand check is pointless.
- Provider completion is **webhook-first**: Trigger.dev receives the provider's webhook and updates state; polling is the fallback for providers without webhooks, not the default.

## 5. Model/provider abstraction design

```ts
interface GenerationProvider {
  id: string;
  capabilities: {
    image: boolean; video: boolean; imageToVideo: boolean;
    maxReferenceImages: number; maxDurationSec?: number;
    supportsInpainting?: boolean; supportsMask?: boolean;
  };
  estimateCost(req: NormalizedGenerationRequest): number;
  generate(req: NormalizedGenerationRequest): Promise<ProviderJobHandle>;
  checkStatus(jobId: string): Promise<JobStatus>;
}
```

- `NormalizedGenerationRequest` is the same shape regardless of provider — the adapter is responsible for translating it into that provider's actual API call. The orchestration layer never special-cases a provider by name outside its adapter.
- A **selector service** picks the provider per request, scoring candidates by: capability match (can it even do image-to-video with 3 reference images?), `mode` (fast/quality/final), current queue depth per provider, and that provider's rolling average quality score for this generation type (fed back from §10's QC scores — this is the feedback loop that makes the router actually get smarter over time, not just a static if/else).
- Adding a provider = write one adapter implementing the interface + register it. No changes anywhere else.
- **Practical accelerant:** this Claude Code environment already has Higgsfield-style generation tools connected as MCP tools (image/video generation, motion control, etc.). Worth using those directly to prototype and sanity-check actual generation quality/prompting for Williams-specific subjects *before* writing the real provider adapter — cheaper to learn what works by generating a few test images through the tool directly than to build the integration first and discover the prompting doesn't work.

## 6. Williams asset ingestion pipeline

```
Upload (UI or bulk import)
  → format/size validation
  → human tagging: category, subcategory, season, usage rights note
  → auto-description (vision model) + auto-embedding
  → stored in `assets`, approved_for_generation = false by default
  → review step (creative-team admin) → approve → now eligible for retrieval
```

Everything lands in a holding state first. Nothing a creative team member uploads becomes generation-eligible until a second, deliberate approval step — this is the practical version of "don't assume everything should be used."

## 7. Image-generation pipeline

```
confirmed brief
  → context retrieval (top-k reference assets + brand rules, §3)
  → prompt construction (structured: subject, environment, style,
     hard brand constraints, negative constraints)
  → provider selection (§5)
  → dispatch with reference images as conditioning
  → provider_processing (async, webhook)
  → quality check (§10) against: car, livery, driver identity, sponsor
     logos/placement, brand colours, graphic language, environment
     accuracy, visual quality, hallucination
  → pass → store, surface to user
  → fail → auto-retry with adjusted workflow (different provider, stronger
     reference conditioning, explicit negative prompt) up to N attempts
```

Default to generating the requested concept count (e.g. 4) as **parallel jobs**, not a sequential loop — see §13.

## 8. Video-generation pipeline

```
confirmed brief
  → prefer: start from an already-QC'd, approved still image (image-to-video)
     rather than pure text-to-video — anchors car/livery/driver accuracy to a
     frame that's already been verified correct
  → motion generation (provider)
  → sampled-frame quality check (start/mid/end, not every frame — cheap,
     catches most consistency failures) for car/livery/driver/sponsor stability
     and obvious temporal artefacts
  → pass → store
  → fail → retry with a different reference frame, shorter duration, or a
     provider better suited to the subject (per the router's rolling quality
     scores for video)
```

Explicitly not assuming a generic "type a prompt into a video model" is sufficient — image-conditioned video, sampled QC, and provider-specific routing are the brand-accuracy levers for video specifically, since pure prompting has the least control of any of the three.

## 9. Voice / ideation pipeline

```
mic capture (browser, pushed to server as audio blob)
  → STT (Whisper)
  → raw transcript
  → structured extraction (Claude, JSON schema matching §2's `briefs.structured`)
  → editable brief card shown to user — confirm or correct any field
  → on confirm: briefs.confirmed_at set, this is what feeds §7/§8
```

The confirm step is not optional — a generation never kicks off from an unconfirmed brief. Speech-to-text and LLM extraction will occasionally mishear or mis-extract ("Monaco" as "Monako", wrong driver), and letting a wrong brief silently drive four expensive generations is a worse experience than one extra click to confirm.

## 10. Quality control pipeline

```
generated output + the reference assets actually used + the brand-rules doc
  → vision-LLM-as-judge (Claude, multimodal)
  → structured scores: williams_accuracy, brand_consistency,
     sponsor_integrity, visual_quality (0-100 each)
  → hard pass/fail flags: logo_correct, car_correct, livery_correct,
     sponsor_undistorted, driver_identity_correct, hallucination_detected
  → threshold (default 80, configurable per project/mode) decides
     auto-pass / auto-retry / flagged_for_review
  → scores + judge's written rationale stored on generation_outputs, always,
     pass or fail — this is the data that makes the provider router (§5)
     and the "which workflows actually work for Williams subjects" question
     answerable over time, not just a pass/fail gate
```

A human can always override a QC verdict in either direction — the score is a strong signal, not a hard veto on what a person can see is fine (or isn't).

## 11. Security model

- Auth: Supabase Auth, invite-only (email allowlist), SSO/SAML added later if Williams IT requires it — not needed to start with 10-15 known users.
- RBAC: `users.role` (admin/creative/viewer) + `project_members.role` override; enforced via Postgres Row Level Security, not just application-layer checks, so a bug in a UI component can't leak another project's assets.
- All asset access via short-lived signed URLs — buckets are private, full stop.
- Provider API keys live only in server-side environment variables (Vercel/Trigger.dev secret stores) — never shipped to the client bundle, never in a `NEXT_PUBLIC_*` env var.
- `audit_log` on every generation, every asset approval, every project membership change.
- No generation history, asset, or brief is ever accessible without being authenticated and a member of that project.

## 12. Cost-tracking model

- Every completed `generations` row writes a `cost_ledger` entry (actual cost from the provider's response where available, else estimated from a per-unit pricing config table kept current manually).
- Monthly aggregation (by user, by project, by provider) powers a simple internal dashboard — this is a read-only view over `cost_ledger`, not a separate system.
- `mode` (fast/quality/final) is the user-facing cost lever: each mode maps to specific provider+model combinations with known price points, so cost stays predictable without the user ever seeing a price list.
- Later: a soft per-project or per-month budget with a warning (not a hard block) once usage data exists to set sane defaults.

## 13. Scalability plan

| Users | What changes |
|---|---|
| **5 concurrent** | Nothing — default Vercel + Supabase + Trigger.dev free/starter tiers handle this without tuning. |
| **15 concurrent** (initial target) | Still the same architecture. The two things to actually configure: per-provider concurrency caps in Trigger.dev (protect against hitting Higgsfield/Runway rate limits when several people generate at once) and Postgres connection pooling (Supabase's pooler, or Prisma with pooling) so 15 people's dashboard queries don't exhaust direct connections. |
| **50 concurrent** (future) | Add a cache layer in front of the gallery/asset-browsing views (read-heavy, low-change data), move to a higher Supabase tier or a read replica for history/dashboard queries, consider splitting the retrieval (pgvector search) into its own service if embedding volume grows large, add per-user/project rate limiting to protect shared provider quotas fairly. Still no rewrite — every piece here scales by tier upgrade, not by replacing the architecture. |

## 14. Recommended services

| Component | Recommendation | Why |
|---|---|---|
| Frontend | Next.js (App Router) + TypeScript | Matches the brief's direction; server actions fit the "thin client, server-side orchestration" requirement natively |
| Hosting | Vercel | Pairs with Next.js, trivial preview deployments per PR |
| Database | Postgres via Supabase | Gets auth, storage, and pgvector in one vendor — fewer moving parts for a 10-15 user internal tool than wiring up separate services for each |
| Vector/retrieval | pgvector (inside Supabase) | No separate vector DB needed at this scale; revisit only if embedding volume gets large |
| Object storage | Supabase Storage (S3-compatible) | Same vendor as DB/auth for V1; Cloudflare R2 is a drop-in swap later if video storage volume makes egress cost matter |
| Auth | Supabase Auth, invite-only | Simplest thing that's actually secure for a known 10-15 person team; SSO later if required |
| Job queue/orchestration | **Trigger.dev** | Purpose-built for exactly this — long-running AI job orchestration with retries, concurrency control, and webhook handling, which is most of §4-5's hard part |
| Speech-to-text | Whisper API | Fast, accurate, cheap |
| Brief extraction / QC judge | Claude (Anthropic), multimodal | Structured extraction via tool use/JSON mode for briefs; vision for QC scoring against reference assets |
| Image/video generation | Higgsfield + Runway behind the abstraction layer | As specified; note Higgsfield tooling is already reachable from this Claude Code environment for fast manual prototyping before building the adapter |
| Embeddings | OpenAI text-embedding-3 (or Voyage AI) | For asset description embeddings feeding pgvector retrieval |

## 15. Phased roadmap

**Phase 0 — Foundations.** New private repo, Next.js scaffold on Vercel, Supabase project (DB + auth + storage) with the schema from §2, login-gated shell, a trivial Trigger.dev "hello world" async job proven end to end (job created → queued → webhook → status updates in the UI). No AI providers yet — this phase proves the plumbing.

**Phase 1 — Vertical slice: "SparkPlug Ideation".** The exact flow from the brief's §19: mic → transcript → confirmed brief → context retrieval against a manually-seeded starter library (~50-100 curated, approved reference images across car/driver/brand/sponsor) → single provider integration (pick one of Higgsfield/Runway to start) → 4 parallel image generations → manual/basic QC (full automated scoring can wait) → gallery → export. Goal: one real workflow, working well, end to end.

**Phase 2 — Harden.** Automated QC scoring (§10) live, second provider added + real router logic (§5), project organization (§2's `projects`/`project_members`), cost dashboard (§12), expanded asset library, video pipeline (§8).

**Phase 3 — Suite expansion.** Additional tools (image variation, campaign concepts, storyboards, environment generation, asset transformation) built on top of the now-proven context/orchestration/QC core — this is where the "modular platform" investment from Phase 0-2 pays for itself, since each new tool is mostly a new UI + a new prompt-construction strategy, not new plumbing.

**Phase 4 — Scale and polish.** SSO if required, 50-user hardening per §13, fine-tuning exploration (§3 tier D) if approved-asset volume justifies it by then.

---

## Open decisions (need your call before Phase 0 starts)

1. **New private repo** — confirm, and I'll set it up separately from `sparkplug-studio`.
2. **Which provider first** — Higgsfield or Runway for the Phase 1 slice. Starting with one keeps Phase 1 smaller; the abstraction layer means the second is additive, not a rework.
3. **Starter asset library** — who sources/approves the initial ~50-100 reference images, and is there an existing Williams DAM (digital asset management system) worth pulling from rather than starting cold?
4. **Default QC threshold** (80% suggested above) — arbitrary until there's real output to calibrate against; treat the first number as a placeholder to revisit after Phase 1 generates real data.
