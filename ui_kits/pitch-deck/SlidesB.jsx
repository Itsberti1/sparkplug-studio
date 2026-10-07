const DSb = window.WilliamsRacingAIExperienceDesignSystem_1388e9;
const fr = window.wrFrame, ab = window.wrAbs, As = window.wrA, LogoB = window.WRLogo;
const title = { fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--type-title-size)', lineHeight:'var(--type-title-lh)', color:'#fff', margin:0 };
const lead = { fontFamily:'var(--font-body)', fontWeight:400, fontSize:'var(--type-lead-size)', lineHeight:'var(--type-lead-lh)', color:'#fff', margin:0 };

/* Frame 18 — glass voice prompts over hero product shot */
function PromptsSlide() {
  const prompts = [
    { l:111.953, t:83.392, r:7.64, side:'right', text:'Hey Williams, why are you using soft tyres?' },
    { l:75, t:865.138, r:-7.7, side:'right', text:'Hey Williams, how fast is your average pit stop?' },
    { l:1469.574, t:780, r:16.68, side:'left', text:'Hey Williams, who is the current backup driver?' },
    { l:1434, t:151.735, r:-14.3, side:'left', text:'Hey Williams, what’s the deal with Claude?' },
  ];
  return (
    <div style={{ ...fr, background:`url(${As('photos/glasses-hero-blue.png')}) center / cover no-repeat` }}>
      {prompts.map(p => (
        <DSb.GlassPrompt key={p.text} text={p.text} side={p.side} tilt={p.r} style={ab(p.l, p.t)} />
      ))}
      <svg width="96" height="156" viewBox="0 0 96 156" fill="rgba(255,255,255,0.45)" style={{ ...ab(275, 252), overflow:'visible' }}><path d="M 96 156.25 C 96.138 156.25 96.25 156.138 96.25 156 C 96.25 155.862 96.138 155.75 96 155.75 L 96 156 L 96 156.25 Z M 0 156 L -0.25 156 L -0.25 156.25 L 0 156.25 L 0 156 Z M 0 0 L -1.443 2.5 L 1.443 2.5 L 0 0 Z M 96 156 L 96 155.75 L 0 155.75 L 0 156 L 0 156.25 L 96 156.25 L 96 156 Z M 0 156 L 0.25 156 L 0.25 2.25 L 0 2.25 L -0.25 2.25 L -0.25 156 L 0 156 Z" /></svg>
      <svg width="138" height="397" viewBox="0 0 138 397" fill="rgba(255,255,255,0.45)" style={{ ...ab(1543, 414), overflow:'visible' }}><path d="M 0 -0.25 C -0.138 -0.25 -0.25 -0.138 -0.25 0 C -0.25 0.138 -0.138 0.25 0 0.25 L 0 0 L 0 -0.25 Z M 138 0 L 138.25 0 L 138.25 -0.25 L 138 -0.25 L 138 0 Z M 138 397 L 139.443 394.5 L 136.557 394.5 L 138 397 Z M 0 0 L 0 0.25 L 138 0.25 L 138 0 L 138 -0.25 L 0 -0.25 L 0 0 Z M 138 0 L 137.75 0 L 137.75 394.75 L 138 394.75 L 138.25 394.75 L 138.25 0 L 138 0 Z" /></svg>
      <LogoB l={855} t={968} />
    </div>
  );
}

/* Frame 79 — creator livestream overlay */
function LivestreamSlide() {
  const comments = [
    { name:'Immy Bewes', message:'🏁🏆🏅' },
    { name:'katyboooo', message:'Wish I was there!' },
    { name:'Bertie Kinnings', message:'🏎🏎🏎' },
  ];
  const [views, setViews] = React.useState(140);
  React.useEffect(() => { const t = setInterval(() => setViews(v => v + 1), 2600); return () => clearInterval(t); }, []);
  const I = DSb.Icon;
  return (
    <div style={fr}>
      <div style={{ ...ab(143, 393), width:1064, display:'flex', flexDirection:'column', gap:38 }}>
        <h2 style={{ ...title, whiteSpace:'nowrap' }}>POV UGC &amp; Livestream by Creators</h2>
        <p style={lead}>Enable creators to record the Williams race weekend from a true first person perspective while receiving AI powered stories and insights that enrich the content they create.</p>
      </div>
      <div style={{ ...ab(1366, 0), width:554, height:1095, borderLeft:'2px solid #fff', boxSizing:'border-box', background:`url(${As('photos/creator-selfie-trackside.png')}) 99.765% 144.222% / 111.092% 99.964% no-repeat` }} />
      <DSb.StreamerHandle handle="lily_andrews" avatarSrc={As('photos/avatar-lily.png')} style={ab(1388, 16)} />
      <svg width="9.9" height="9.9" viewBox="0 0 9.9 9.9" style={{ ...ab(0, 0), transform:'matrix(0.707,-0.707,0.707,0.707,1604,37)', transformOrigin:'0 0', overflow:'visible' }}><path d="M 0 0 L 0 9.9 L 9.9 9.9" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
      <div style={{ ...ab(1686, 21), display:'flex', alignItems:'center', gap:19 }}>
        <DSb.LiveBadge /><DSb.ViewerCount count={`${views}K`} />
      </div>
      <DSb.Icons name="Exit" dark size={28} style={ab(1873, 26)} />
      <div style={{ ...ab(1870, 83), width:37.409, display:'flex', flexDirection:'column', gap:28.7764892578125, color:'#fff' }}>
        <I name="Picture24" size={33.573} /><I name="Mic" size={33.573} /><I name="Video" size={37.409} />
        <img src={As('svg/change-camera.svg')} alt="" style={{ width:31.653, height:31.077 }} />
      </div>
      <div style={{ ...ab(1391, 757), display:'flex', flexDirection:'column', gap:19 }}>
        {comments.map((c, i) => <DSb.CommentRow key={c.name + i} name={c.name} message={c.message} />)}
      </div>
      {[['💯', 1866, 887], ['😁', 1831, 915], ['😁', 1850, 928]].map(([e, l, t], i) => (
        <span key={i} style={{ ...ab(l, t), fontSize:32, lineHeight:1 }}>{e}</span>
      ))}
    </div>
  );
}

/* Frame 80 — title + lead + portrait photo right */
function VipSlide() {
  return (
    <div style={fr}>
      <h2 style={{ ...title, ...ab(128, 339), width:1025 }}>The Ultimate VIP Sponsor Experience</h2>
      <p style={{ ...lead, ...ab(128, 430), width:1139, fontSize:'var(--type-lead-alt-size)', lineHeight:'var(--type-lead-alt-lh)' }}>Treat your most important guests to an AI powered race weekend by providing Meta glasses for the entire event, allowing them to capture unforgettable moments, take the glasses home as a lasting memento, and receive a professionally edited, LinkedIn ready highlight recap to relive and share the experience.</p>
      <div style={{ ...ab(1363, 0), width:628, height:1116, background:`url(${As('photos/paddock-guests-portrait.png')}) center / cover no-repeat` }} />
    </div>
  );
}

/* Frame 81 — text-only statement */
function DemoSlide() {
  return (
    <div style={fr}>
      <h2 style={{ ...title, ...ab(143, 382), width:1025 }}>30 Minute Guest Demo</h2>
      <p style={{ ...lead, ...ab(143, 469), width:1064 }}>Offer any Williams guest the opportunity to experience a 30 minute AI powered paddock tour. Team members can simply invite guests to "try the Meta glasses experience", turning a standard hospitality moment into a memorable showcase of Williams' innovation.</p>
    </div>
  );
}

/* Frame 82 — "Why us" with two PanelCards over the W */
function WhyUsSlide() {
  return (
    <div style={fr}>
      <DSb.WMark src={As('brand/w-mark-blue.png')} style={ab(34, 198)} />
      <h2 style={{ ...title, ...ab(831, 173), fontSize:'var(--type-display-size)', lineHeight:'var(--type-display-lh)', whiteSpace:'nowrap' }}>Why us</h2>
      <DSb.PanelCard title="Bespoke AI software" style={{ ...ab(346, 323), padding:'80px 41px' }}>We design and build the complete Williams experience, including the AI character, paddock journey, sponsor integrations, personalised interactions and automated highlight recap software.</DSb.PanelCard>
      <DSb.PanelCard title="On site operations" style={{ ...ab(991, 323), padding:'70px 32px' }}>We manage every aspect on site, from device preparation and guest onboarding to hardware logistics, technical support and content delivery, ensuring a seamless experience for every guest.</DSb.PanelCard>
      <LogoB l={855} t={974} />
    </div>
  );
}

Object.assign(window, { PromptsSlide, LivestreamSlide, VipSlide, DemoSlide, WhyUsSlide });
