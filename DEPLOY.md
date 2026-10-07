# Deploy: Williams Creative AI Concepts → GitHub Pages

Paste the prompt below into Claude Code, run from inside this unzipped folder.

---

Publish this folder as a static site on GitHub Pages. Do not modify, rebuild or bundle any site files — ship them as-is.

1. Check `gh` (GitHub CLI) is installed and authenticated (`gh auth status`). If not, install it and run `gh auth login`, then wait for me.
2. Delete these folders (not needed on the site): `uploads`, `scratch`, `exports`, `guidelines`, `ui_kits/pitch-deck-saved-2026-09-25`, `ui_kits/pitch-deck-saved-2026-09-29`.
3. Add an empty `.nojekyll` file at the root (so Pages serves files/folders starting with `_`, e.g. `_ds_bundle.js`).
4. `git init`, commit everything, then `gh repo create sparkplug-studio --public --source=. --push`.
   - If my account has GitHub Pro/Team, use `--private` instead.
5. Enable Pages from `main` / root: `gh api -X POST repos/{owner}/sparkplug-studio/pages -f "source[branch]=main" -f "source[path]=/"`.
6. Poll `gh api repos/{owner}/sparkplug-studio/pages` until status is `built`, then print the live URL (`https://<user>.github.io/sparkplug-studio/`).
7. Open the URL and confirm: `/` redirects to `ui_kits/pitch-deck/Interactive%20Deck.html`, slide 1 shows "The Concepts", and `/sparkplug/index.html` loads. Report any 404s.

Site structure (keep exactly): `index.html`, `styles.css`, `_ds_bundle.js`, `tokens/`, `assets/`, `components/`, `ui_kits/pitch-deck/`, `sparkplug/`.

To update later: develop on the `concepts` or `sparkplug` branch (see `readme.md` for the branch map), then open a PR into `main` and merge — `main` is what Pages serves, so it should only move via reviewed merges, never direct pushes of in-progress work.
