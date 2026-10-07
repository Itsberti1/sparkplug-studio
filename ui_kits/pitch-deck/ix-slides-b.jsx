/* Interactive slides — Prompts (18), Livestream (79), VIP (80), Demo (81), Why us (82). */
const ixTitle = { fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--type-title-size)', lineHeight:'var(--type-title-lh)', color:'#fff', margin:0 };
const ixLead = { fontFamily:'var(--font-body)', fontWeight:400, fontSize:'var(--type-lead-size)', lineHeight:'var(--type-lead-lh)', color:'#fff', margin:0 };

/* Placeholder race-engineer answers — edit to approved copy. Add qAudio / aAudio (asset paths) when recordings are ready; timings then follow the audio. */
const IX_PROMPTS = [
  { l:111.953, t:83.392, r:7.64, side:'right', text:'Hey Williams, why are you using soft tyres?', a:'Softs give us the most grip over a short window. We want track position right now, so we’ll push hard and box a little earlier.' },
  { l:1434, t:151.735, r:-14.3, side:'left', text:'Hey Williams, what’s the deal with Claude?', a:'Claude is one of our partners — look for it on the livery. Want me to point out where it sits on the car when we reach the garage?' },
  { l:1469.574, t:780, r:16.68, side:'left', text:'Hey Williams, who is the current backup driver?', a:'Our reserve driver is on standby all weekend — in the simulator and ready to step in if the team needs them.' },
  { l:75, t:865.138, r:-7.7, side:'right', text:'Hey Williams, how fast is your average pit stop?', a:'The crew trains for stops in the two-to-three second range. Around twenty people, one car, perfectly in sync.' },
];

function Typer({ text, onDone }) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    setN(0);
    const id = setInterval(() => setN(v => { if (v >= text.length) { clearInterval(id); onDone && onDone(); return v; } return v + 1; }), 22);
    return () => clearInterval(id);
  }, [text]);
  return <span>{text.slice(0, n)}<span className="ix-caret" style={{ opacity: n < text.length ? 1 : 0 }}>▍</span></span>;
}

function Wave({ on }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:3, height:22 }}>
      {Array.from({ length: 5 }).map((_, i) => <span key={i} className={on ? 'ix-bar is-on' : 'ix-bar'} style={{ '--i':i }} />)}
    </div>
  );
}

/* Vision AI POV frames (Figma 116 → 115 → 114): images crossfade; the prompt bubble glides to each frame's spot while its text fades out and back in. */
const IX_VISION = [
  { img:'assets/vision-frame-116.jpg', bg:'100.057% 16.273% / 99.992% 124.205%', l:101, t:410, fs:38, text:'Hey Williams, what are those red and blue streaks on the car?', lines:['Hey Williams, what are those red', 'and blue streaks on the car?'] },
  { img:'assets/vision-frame-115.jpg', bg:'100.009% 19.074% / 100.019% 115.200%', l:796, t:852, fs:44, text:'Hey Williams, what do those covers on the tyres do?', lines:['Hey Williams, what do those', 'covers on the tyres do?'] },
  { img:'assets/vision-frame-114.jpg', bg:'center / cover', l:101, t:645, fs:45, text:'Hey Williams, How many pits do you average a race?', lines:['Hey Williams, How many', 'pits do you average a race?'] },
];
const IX_VIS_S = 0.37;
function VisionCycle({ open }) {
  const [pos, setPos] = React.useState(0);
  const [txt, setTxt] = React.useState(0);
  const [vis, setVis] = React.useState(true);
  React.useEffect(() => {
    if (!open) { const r = setTimeout(() => { setPos(0); setTxt(0); setVis(true); }, 800); return () => clearTimeout(r); }
    const id = setTimeout(() => setPos(p => (p + 1) % IX_VISION.length), 6000);
    return () => clearTimeout(id);
  }, [open, pos]);
  React.useEffect(() => {
    if (pos === txt) return;
    setVis(false);
    const t = setTimeout(() => { setTxt(pos); setVis(true); }, 1500);
    return () => clearTimeout(t);
  }, [pos]);
  const S = IX_VIS_S, FW = 1689, FH = 1813, f = IX_VISION[pos], ft = IX_VISION[txt], z = (v) => +(v * S).toFixed(2);
  const glass = { background:'radial-gradient(50% 50% at 50% 50%, rgba(108,108,108,0.1) 0%, rgba(24,24,20,0.1) 100%)', backdropFilter:`blur(${z(93.397)}px)`, WebkitBackdropFilter:`blur(${z(93.397)}px)`, boxShadow:`inset 0 0 ${z(24.906)}px 0 rgb(255,255,255), inset 0 ${z(-49.812)}px ${z(66.416)}px 0 rgba(255,255,255,0.22), inset 0 ${z(16.604)}px ${z(49.812)}px ${z(-33.208)}px rgba(255,255,255,0.25)`, borderRadius:z(58.114), boxSizing:'border-box', flexShrink:0 };
  return (
    <div style={{ position:'relative', width:z(FW), height:z(FH), borderRadius:'var(--radius-photo)', overflow:'hidden', background:'var(--wr-night-2)', boxShadow:'0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)' }}>
      {IX_VISION.map((v, i) => <div key={v.img} style={{ position:'absolute', inset:0, background:`url(${v.img}) ${v.bg} no-repeat`, opacity: i === pos ? 1 : 0, transition:'opacity 2.2s cubic-bezier(.4,0,.2,1)' }} />)}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', background:'rgba(8,10,16,0.16)' }} />
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', background:`radial-gradient(${z(1081.318)}px ${z(1353.407)}px at 50% 50%, rgba(20,21,23,0) 56.25%, rgba(25,26,28,0.12) 100%)` }} />
      <div style={{ position:'absolute', left:0, top:0, pointerEvents:'none', display:'flex', gap:z(14.528), alignItems:'flex-start', transform:`translate(${z(f.l)}px, ${z(f.t)}px)`, transition:'transform 2.4s cubic-bezier(.65,0,.35,1)' }}>
        <div style={{ ...glass, width:z(112.077), height:z(112.077), display:'flex', alignItems:'center', justifyContent:'center', gap:z(7.45) }}>
          {[34, 61, 34, 61, 34].map((h, i) => <span key={i} style={{ width:z(5), height:z(h), borderRadius:z(3), background:'#fff' }} />)}
        </div>
        <div style={{ ...glass, width:z(666.234), height:z(238.682), padding:`${z(45.661)}px ${z(53.963)}px ${z(47.736)}px`, display:'flex', alignItems:'center' }}>
          <span style={{ width:z(558.308), fontFamily:'"SF Compact", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight:457, fontSize:z(ft.fs), lineHeight:`${z(72.64)}px`, whiteSpace:'nowrap', color:'#fff', WebkitFontSmoothing:'antialiased', opacity: vis ? 1 : 0, filter: vis ? 'none' : 'blur(3px)', transition: vis ? 'opacity 1.1s cubic-bezier(.4,0,.2,1), filter 1.1s cubic-bezier(.4,0,.2,1)' : 'opacity .7s ease, filter .7s ease' }}>{ft.lines[0]}<br />{ft.lines[1]}</span>
        </div>
      </div>
      <div style={{ position:'absolute', left:'50%', bottom:18, transform:'translateX(-50%)', display:'flex', alignItems:'center', gap:12, padding:'5px 6px', borderRadius:999, background:'rgba(8,10,16,0.4)', backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)' }}>
        <button type="button" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setPos(p => (p + IX_VISION.length - 1) % IX_VISION.length); }} style={{ width:30, height:30, borderRadius:'50%', border:0, padding:0, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(255,255,255,0.08)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.22)' }}><svg width="8" height="12" viewBox="0 0 12 18" style={{ display:'block', transform:'none' }}><path d="M8.5 2.5 L2.5 9 L8.5 15.5" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
        <div style={{ display:'flex', gap:10 }}>{IX_VISION.map((v, i) => <span key={v.img} style={{ width:8, height:8, borderRadius:'50%', background: i === pos ? 'rgb(31,199,255)' : 'rgba(255,255,255,0.4)', boxShadow: i === pos ? '0 0 10px rgba(31,199,255,0.9)' : 'none', transition:'background 1.2s ease, box-shadow 1.2s ease' }} />)}</div>
        <button type="button" aria-label="Next" onClick={(e) => { e.stopPropagation(); setPos(p => (p + 1) % IX_VISION.length); }} style={{ width:30, height:30, borderRadius:'50%', border:0, padding:0, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(255,255,255,0.08)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.22)' }}><svg width="8" height="12" viewBox="0 0 12 18" style={{ display:'block', transform:'scaleX(-1)' }}><path d="M8.5 2.5 L2.5 9 L8.5 15.5" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
      </div>
    </div>
  );
}

function IXPromptsSlide({ index }) {
  return (
    <IXSlide index={index} className="ix-white" style={{ background:'var(--wr-night)' }}>
      <PromptsInner />
      <IXDrawer side="left" middle={540} bare width={1689 * IX_VIS_S} eyebrow="VISION AI" content={(open) => <VisionCycle open={open} />} />
    </IXSlide>
  );
}
function PromptsInner() {
  return (
    <React.Fragment>
      <div style={{ position:'absolute', left:-30, top:-18, width:1980, height:1116 }}>
        <B fx="kb" style={{ position:'absolute', inset:0, background:`url(${IXA('photos/glasses-hero-blue.png')}) center / cover no-repeat` }} />
      </div>
      {IX_PROMPTS.map((p, i) => (
        <div key={p.text} style={{ position:'absolute', left:p.l, top:p.t }}>
          <B fx="pop" d={250 + i * 140}>
            <div style={{ '--r':p.r + 'deg' }}>
              <IXDS.GlassPrompt text={p.text} side={p.side} tilt={p.r} />
            </div>
          </B>
        </div>
      ))}
      <B fx="draw-br" d={900} style={{ position:'absolute', left:275, top:252 }}>
        <svg width="96" height="156" viewBox="0 0 96 156" fill="rgba(255,255,255,0.55)" stroke="rgba(255,255,255,0.55)" strokeWidth="0.9" style={{ overflow:'visible', display:'block' }}><path d="M 96 156.25 C 96.138 156.25 96.25 156.138 96.25 156 C 96.25 155.862 96.138 155.75 96 155.75 L 96 156 L 96 156.25 Z M 0 156 L -0.25 156 L -0.25 156.25 L 0 156.25 L 0 156 Z M 0 0 L -1.443 2.5 L 1.443 2.5 L 0 0 Z M 96 156 L 96 155.75 L 0 155.75 L 0 156 L 0 156.25 L 96 156.25 L 96 156 Z M 0 156 L 0.25 156 L 0.25 2.25 L 0 2.25 L -0.25 2.25 L -0.25 156 L 0 156 Z" /></svg>
      </B>
      <B fx="draw-tl" d={1050} style={{ position:'absolute', left:1543, top:414 }}>
        <svg width="138" height="397" viewBox="0 0 138 397" fill="rgba(255,255,255,0.55)" stroke="rgba(255,255,255,0.55)" strokeWidth="0.9" style={{ overflow:'visible', display:'block' }}><path d="M 0 -0.25 C -0.138 -0.25 -0.25 -0.138 -0.25 0 C -0.25 0.138 -0.138 0.25 0 0.25 L 0 0 L 0 -0.25 Z M 138 0 L 138.25 0 L 138.25 -0.25 L 138 -0.25 L 138 0 Z M 138 397 L 139.443 394.5 L 136.557 394.5 L 138 397 Z M 0 0 L 0 0.25 L 138 0.25 L 138 0 L 138 -0.25 L 0 -0.25 L 0 0 Z M 138 0 L 137.75 0 L 137.75 394.75 L 138 394.75 L 138.25 394.75 L 138.25 0 L 138 0 Z" /></svg>
      </B>
      <IXLogo l={855} t={48} d={600} />
    </React.Fragment>
  );
}

/* Livestream — live chat, floating reactions (click the stream to send more), ticking viewers. */
const IX_CHAT = [['silverstone_sam','Silverstone crowd is unreal 🇬🇧'], ['pitwall.pete','That pit lane view 🔥'], ['apex.amy','Box box box 📻'], ['gridwalker','Copse at full send 😮‍💨'], ['lewis_fan44','Mechanics are so fast 🔧⏱️'], ['vroom.vroom','🏁🏁🏁'], ['maggotts.becketts','Front row seats to the garage 👀'], ['paddockpass','Softs or mediums?? 🔴🟡'], ['p1.priya','Come on Williams!! 💙'], ['stowe.corner','Formation lap vibes 🏎️💨']];
const IX_EMO = ['💯','😁','🏁','🏆','🏎','🏅'];
const IX_HEARTS = ['#0068DF', 'rgb(31,199,255)', '#FFFFFF', '#0068DF', '#FFFFFF'];
const IX_HEART_D = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
function IXLivestreamSlide({ index }) {
  return (
    <IXSlide index={index}>
      <LiveInner />
      <IXDrawer side="left" eyebrow="CREATOR TOOLKIT" meta="Meta glasses" title="Your day, edited before you’re home." chips={['Auto-edited reel', 'Ready to post']}>Creators stream hands-free while the AI race engineer feeds them stories to narrate. Behind the scenes, our platform gathers every clip captured that day and turns it into a bespoke, professionally edited Williams highlight reel, formatted for each channel and ready to post before they even get home.</IXDrawer>
    </IXSlide>
  );
}
function LiveInner() {
  const { active } = React.useContext(IXCtx);
  const [emo, setEmo] = React.useState([]);
  const [chat, setChat] = React.useState([{ id:1, name:'Immy Bewes', message:'🏁🏆🏅' }, { id:2, name:'katyboooo', message:'Wish I was there!' }, { id:3, name:'Bertie Kinnings', message:'🏎🏎🏎' }]);
  const idRef = React.useRef(10);
  const combo = React.useRef({ t:0, n:0 });
  const spawn = (count = 1, set = IX_EMO, spread = 0, at = null) => {
    const heart = set === IX_HEARTS;
    const add = Array.from({ length: count }).map(() => { const sz = heart ? 44 + Math.round(Math.random() * 18) : 32; return { id: idRef.current++, heart, e: set[Math.floor(Math.random() * set.length)], sz, x: at ? at[0] - sz / 2 + (Math.random() * 40 - 20) : 444 + Math.random() * 70, y: at ? at[1] - sz / 2 : 930, dx: (Math.random() * 110 - 55).toFixed(0), dur: (2.2 + Math.random() * 1.4).toFixed(2), dl: (spread ? Math.random() * spread : 0).toFixed(2) }; });
    setEmo(v => [...v.slice(-70), ...add]);
  };
  const love = (e, at) => {
    e && e.stopPropagation();
    const now = Date.now(), c = combo.current;
    c.n = now - c.t < 700 ? Math.min(c.n + 1, 6) : 0; c.t = now;
    spawn(4 + c.n * 3, IX_HEARTS, 0.25 + c.n * 0.12, at || [480, 950]);
  };
  const loveAt = (e) => { const r = e.currentTarget.getBoundingClientRect(); love(e, [(e.clientX - r.left) / r.width * SW, (e.clientY - r.top) / r.height * SH]); };
  React.useEffect(() => {
    if (!active) return;
    const r = setInterval(() => spawn(1), 900);
    let k = 0;
    const c = setInterval(() => { const m = IX_CHAT[k++ % IX_CHAT.length]; setChat(v => [...v.slice(-2), { id: idRef.current++, name:m[0], message:m[1] }]); }, 2800);
    return () => { clearInterval(r); clearInterval(c); };
  }, [active]);
  const I = IXDS.Icon;
  const S = 0.8, SW = 554, SH = 1095, BZ = 12;
  return (
    <React.Fragment>
      <IXTextBlock l={164} t={318} w={1000} num="01" kicker="User One: The Creator" title="POV UGC & Livestream by Creators" body="Enable creators to record the Williams race weekend from a true first person perspective while receiving AI powered stories and insights that enrich the content they create.">
        <B fx="up" d={520} style={{ marginTop:56, paddingTop:36, borderTop:'1px solid rgba(255,255,255,0.12)', display:'flex', alignItems:'center', gap:36, maxWidth:900 }}>
          <div style={{ display:'flex', gap:14, flexShrink:0 }}>
            {['instagram', 'tiktok', 'snapchat'].map(n => (
              <div key={n} className="ix-social" style={{ width:68, height:68, borderRadius:20, background:'rgba(255,255,255,0.06)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.16)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <img src={`assets/social-${n}.svg`} alt={n} width="30" height="30" style={{ display:'block' }} />
              </div>
            ))}
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            <span style={{ fontSize:16, fontWeight:500, letterSpacing:'0.16em', color:'rgb(31,199,255)' }}>LIVE ON EVERY CHANNEL</span>
            <span style={{ fontSize:24, fontWeight:300, lineHeight:'34px', color:'rgba(255,255,255,0.85)', textWrap:'pretty' }}>First-person POV is social’s breakout format, with clips pulling in millions of views. Every creator becomes a live Williams broadcast.</span>
          </div>
        </B>
      </IXTextBlock>
      <B fx="fade" d={0} style={{ position:'absolute', left:1180, top:40, width:760, height:1000, zIndex:20, pointerEvents:'none', background:'radial-gradient(50% 50% at 50% 50%, rgba(0,104,223,0.42) 0%, rgba(0,66,255,0.16) 45%, rgba(0,66,255,0) 100%)', filter:'blur(20px)' }} />
      <B fx="up" d={150} style={{ position:'absolute', zIndex:20, left:1560 - (SW * S) / 2 - BZ, top:(1080 - SH * S) / 2 - BZ - 6 }}>
        <div style={{ padding:BZ, borderRadius:68, background:'linear-gradient(160deg, #2a2d36 0%, #121419 45%, #1c1f27 100%)', boxShadow:'inset 0 0 0 1.5px rgba(255,255,255,0.14), 0 0 0 1px rgba(0,0,0,0.6), 0 30px 80px rgba(0,0,0,0.55), 0 0 90px rgba(0,104,223,0.28)' }}>
          <div onClick={loveAt} style={{ position:'relative', width:SW * S, height:SH * S, borderRadius:56, overflow:'hidden', background:'#000', cursor:'pointer' }}>
            <div style={{ position:'absolute', left:0, top:0, width:SW, height:SH, transform:`scale(${S})`, transformOrigin:'0 0' }}>
              <div style={{ position:'absolute', inset:0, background:`url(${IXA('photos/creator-selfie-trackside.png')}) 99.765% 144.222% / 111.092% 99.964% no-repeat` }} />
              <div style={{ position:'absolute', left:0, right:0, top:0, height:200, background:'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0))' }} />
              <div style={{ position:'absolute', left:0, top:52, width:SW, height:SH - 52 }}>
              <IXDS.StreamerHandle handle="lily_andrews" avatarSrc={IXA('photos/avatar-lily.png')} style={{ position:'absolute', left:22, top:16 }} />
              <svg width="9.9" height="9.9" viewBox="0 0 9.9 9.9" style={{ position:'absolute', left:0, top:0, transform:'matrix(0.707,-0.707,0.707,0.707,238,37)', transformOrigin:'0 0', overflow:'visible' }}><path d="M 0 0 L 0 9.9 L 9.9 9.9" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
              <div style={{ position:'absolute', left:320, top:21, display:'flex', alignItems:'center', gap:19 }}>
                <IXDS.LiveBadge /><IXDS.ViewerCount count="140K" />
              </div>
              <IXDS.Icons name="Exit" dark size={28} style={{ position:'absolute', left:507, top:26 }} />
              <div style={{ position:'absolute', left:25, top:757, display:'flex', flexDirection:'column', gap:19, pointerEvents:'none' }}>
                {chat.map(c => <div key={c.id} className="ix-chat"><IXDS.CommentRow name={c.name} message={c.message} /></div>)}
              </div>
              </div>
              {emo.map(e => {
                const st = { position:'absolute', left:e.x, top:e.y, lineHeight:1, pointerEvents:'none', '--dx':e.dx + 'px', '--dur':e.dur + 's', '--dl':e.dl + 's' };
                const end = () => setEmo(v => v.filter(x => x.id !== e.id));
                return e.heart
                  ? <svg key={e.id} className="ix-float" onAnimationEnd={end} width={e.sz} height={e.sz} viewBox="0 0 24 24" style={{ ...st, overflow:'visible', filter: e.e === '#FFFFFF' ? 'drop-shadow(0 0 6px rgba(31,199,255,0.7))' : 'drop-shadow(0 0 8px rgba(31,199,255,0.8))' }}><path d={IX_HEART_D} fill={e.e} /></svg>
                  : <span key={e.id} className="ix-float" onAnimationEnd={end} style={{ ...st, fontSize:e.sz }}>{e.e}</span>;
              })}
            </div>
            <div style={{ position:'absolute', left:'50%', top:9, width:96, height:26, marginLeft:-48, borderRadius:16, background:'#000' }} />
            <div style={{ position:'absolute', left:'50%', bottom:8, width:134, height:5, marginLeft:-67, borderRadius:3, background:'rgba(255,255,255,0.85)' }} />
          </div>
        </div>
      </B>
      <B fx="pop" d={900} style={{ position:'absolute', zIndex:22, right:1920 - 1352, top:150 }}>
        <button type="button" onClick={(e) => love(e)} className="ix-love" style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 18px 10px 12px', border:0, borderRadius:999, cursor:'pointer', background:'linear-gradient(180deg, rgba(44,49,64,0.92), rgba(24,27,38,0.92))', backdropFilter:'var(--glass-blur)', WebkitBackdropFilter:'var(--glass-blur)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.16), 0 12px 32px rgba(0,0,0,0.45)', fontFamily:'var(--font-display)', color:'#fff' }}>
          <span style={{ width:30, height:30, borderRadius:'50%', background:'rgba(31,199,255,0.16)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="16" height="15" viewBox="0 0 24 22" style={{ display:'block' }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="rgb(31,199,255)" style={{ filter:'drop-shadow(0 0 4px rgba(31,199,255,0.8))' }} /></svg>
          </span>
          <span style={{ fontSize:17, fontWeight:500, letterSpacing:'0.04em', whiteSpace:'nowrap' }}>Show Some Love</span>
        </button>
      </B>
    </React.Fragment>
  );
}

/* Refined title + lead block (matches Overview styling): cyan index, rule, medium title, light body. */
function IXTextBlock({ l, t, w, num, kicker, title, body, children }) {
  return (
    <div style={{ position:'absolute', left:l, top:0, bottom:0, width:w, display:'flex', flexDirection:'column', justifyContent:'center', fontFamily:'var(--font-body)' }}>
      {kicker && (() => { const [a, b] = kicker.split(':'); return <B fx="fade" d={40} style={{ marginBottom:14, fontSize:22, fontWeight:400, letterSpacing:'0.04em', color:'rgba(255,255,255,0.86)' }}>{a}{b !== undefined && <React.Fragment>: <span style={{ fontWeight:500, color:'rgb(31,199,255)', textShadow:'0 0 14px rgba(31,199,255,0.65), 0 0 28px rgba(0,104,223,0.5)' }}>{b.trim()}</span></React.Fragment>}</B>; })()}
      <B fx="fade" d={80} style={{ display:'flex', alignItems:'center', gap:18, marginBottom:28 }}>
        <span style={{ fontSize:16, fontWeight:500, letterSpacing:'0.12em', color:'rgb(31,199,255)', fontVariantNumeric:'tabular-nums' }}>{num}</span>
        <span style={{ width:305, height:1.5, background:'var(--wr-rule-gradient)' }} />
      </B>
      <B fx="up" d={180}><h2 style={{ margin:0, fontFamily:'var(--font-display)', fontWeight:500, fontSize:68, lineHeight:'72px', letterSpacing:'-0.015em', color:'#fff', textWrap:'balance' }}>{title}</h2></B>
      <B fx="up" d={340} style={{ marginTop:30 }}><p style={{ margin:0, fontWeight:300, fontSize:29, lineHeight:'44px', color:'rgba(255,255,255,0.72)', textWrap:'pretty', maxWidth:900 }}>{body}</p></B>
      {children}
    </div>
  );
}

function IXVipSlide({ index }) {
  return (
    <IXSlide index={index}>
      <IXDrawer side="left" eyebrow="THE RECAP" meta="Delivered after the event" title="A highlight reel with your brand in it." chips={['Sponsor-branded', 'LinkedIn-ready']}>Our platform gathers every moment each guest captures and produces a professional highlight reel of their day, showcasing the sponsor brand they represent alongside Williams. Polished, on-brand and ready to post on LinkedIn.</IXDrawer>
      <IXTextBlock l={164} t={330} w={960} num="02" kicker="User Two: The Corporates" title="The Ultimate VIP Sponsor Experience" body="Treat your most important guests to an AI powered race weekend by providing Meta glasses for the entire event, allowing them to capture unforgettable moments, take the glasses home as a lasting memento, and receive a professionally edited, LinkedIn ready highlight recap to relive and share the experience." />
      <B fx="edge" d={0} style={{ position:'absolute', left:1363, top:0, width:2, height:1080, background:'#fff', zIndex:21, pointerEvents:'none' }} />
      <B fx="reveal" d={0} style={{ position:'absolute', left:1363, top:0, width:628, height:1116, overflow:'hidden', zIndex:20 }}>
        <PX depth={-10} l={-16} t={-12} style={{ width:660, height:1140 }}>
          <div className="ix-photo" style={{ position:'absolute', inset:0, background:'url(assets/vip-garage-guests.png) center 30% / cover no-repeat' }} />
        </PX>
      </B>
      <B fx="up" d={650} style={{ position:'absolute', left:1150, top:654, zIndex:22 }}>
        <div className="ix-step" style={{ position:'relative' }}>
          <div><div style={{ position:'relative', overflow:'hidden', width:420, height:352, borderRadius:'var(--radius-photo)', background:'url(assets/vip-packaging.png) center / cover no-repeat', boxShadow:'0 0 0 2px var(--wr-blue), 0 30px 70px rgba(0,0,0,0.6)' }}>
            <div style={{ position:'absolute', left:0, right:0, bottom:0, padding:'56px 22px 18px', background:'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.82) 100%)', fontFamily:'var(--font-body)', fontSize:19, fontWeight:400, lineHeight:'26px', color:'#fff' }}>Premium branded packaging, a keepsake to remember the day</div>
          </div></div>
        </div>
      </B>
    </IXSlide>
  );
}

/* Fan experiences carousel: manual prev/next; text on the left swaps with each image. */
const IX_FAN_SLIDES = [
  { img:'assets/creator-pov-fans.png', tag:'Creator POV', sub:'Fans live in the paddock', title:'The paddock, through a creator’s eyes', body:'Fans watch the race weekend through their favourite creator’s eyes, live and in first person. They hear the engines, spot famous faces in the pit lane in real time and see the car up close, moments TV rarely catches, while the creator shares insider stories and fun facts along the way. And they’re part of it, commenting as it happens, closer to the creator and closer to the race.' },
  { img:'assets/time-capsule-vr.png', tag:'Williams Time Capsule', sub:'Fan zone VR experience', title:'The Williams Time Capsule', body:'Step into the Williams Time Capsule, a generative VR experience in the team’s fan zone at every Grand Prix. Narrated by Alex Albon, it carries fans through the eras: stepping inside iconic cars in every Williams livery, reliving legendary races and standing in the team’s defining moments as if they were there. Powered by Claude AI, each journey adapts to the fan and is built bespoke to the host Grand Prix and its history, so no two are ever the same.' },
  { img:'assets/ar-circuit-lapz.png', tag:'AR circuit replica', sub:'Live, captured in-device', title:'The grandstand, at home', body:'Finally, platforms like Lapz have shown how XR has the ability to transform how sports media is consumed. Something like this could be built bespoke to Williams, powered by your data, so fans follow the drivers, gaps and strategy calls in real time. A new way to watch the race, and an opportunity to tap into one of the fastest-growing and most innovative ways fans consume sport.' },
];
function IXDemoSlide({ index }) {
  const [idx, setIdx] = React.useState(0);
  const [info, setInfo] = React.useState(false);
  const n = IX_FAN_SLIDES.length;
  const go = (dir) => (e) => { e.stopPropagation(); setIdx(i => (i + dir + n) % n); };
  const cur = IX_FAN_SLIDES[idx];
  const FW = 860, FH = 483.75;
  const btn = { width:48, height:48, borderRadius:'50%', border:0, padding:0, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(10,12,20,0.55)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.22)' };
  const chev = (flip) => <svg width="12" height="18" viewBox="0 0 12 18" style={{ display:'block', transform: flip ? 'scaleX(-1)' : 'none' }}><path d="M8.5 2.5 L2.5 9 L8.5 15.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return (
    <IXSlide index={index}>
      <B fx="fade" d={0} style={{ position:'absolute', left:1000, top:200, width:900, height:700, pointerEvents:'none', background:'radial-gradient(50% 50% at 50% 55%, rgba(0,104,223,0.3) 0%, rgba(0,66,255,0) 100%)', filter:'blur(20px)' }} />
      <B fx="fade" d={500} style={{ position:'absolute', left:1000, top:(1080 - FH) / 2 - 64, zIndex:30, fontFamily:'var(--font-display)', pointerEvents:'none' }}>
        <button onClick={(e) => { e.stopPropagation(); setInfo(v => !v); }} style={{ pointerEvents:'auto', display:'flex', alignItems:'center', gap:10, height:40, padding:'0 18px 0 14px', borderRadius:999, border:0, cursor:'pointer', fontFamily:'inherit', fontSize:18, fontWeight:500, letterSpacing:'0.04em', color:'#fff', background: info ? 'rgba(0,104,223,0.22)' : 'rgba(255,255,255,0.06)', backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)', boxShadow: info ? 'inset 0 0 0 1px rgba(31,199,255,0.6), 0 0 18px rgba(0,104,223,0.35)' : 'inset 0 0 0 1px rgba(255,255,255,0.2)', transition:'background .4s ease, box-shadow .4s ease' }}>
          <span style={{ width:20, height:20, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:600, color:'rgb(31,199,255)', boxShadow:'inset 0 0 0 1.5px rgb(31,199,255)', transform: info ? 'rotate(45deg)' : 'none', transition:'transform .4s cubic-bezier(.4,0,.2,1)' }}>{info ? '+' : 'i'}</span>
          The Curious?
        </button>
      </B>
      <B fx="right" d={200} style={{ position:'absolute', left:1000, top:(1080 - FH) / 2, width:FW, height:FH, zIndex:20 }}>
        <div style={{ position:'relative', width:'100%', height:'100%', borderRadius:'var(--radius-photo)', overflow:'hidden', boxShadow:'0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)', background:'var(--wr-night-2)' }}>
          {IX_FAN_SLIDES.map((s, i) => (
            <div key={s.tag} className="ix-fan-img" style={{ position:'absolute', inset:0, background: s.img ? `url(${s.img}) center / cover no-repeat` : 'repeating-linear-gradient(135deg, #121725 0 14px, #0e1220 14px 28px)', opacity: i === idx ? 1 : 0, transform: i === idx ? 'scale(1)' : 'scale(1.04)', display:'flex', alignItems:'center', justifyContent:'center' }}>{!s.img && <span style={{ fontFamily:'ui-monospace, Menlo, monospace', fontSize:14, letterSpacing:'0.08em', color:'rgba(255,255,255,0.4)' }}>time capsule image to come</span>}</div>
          ))}
          <div style={{ position:'absolute', inset:0, pointerEvents:'none', background:'radial-gradient(75% 90% at 100% 100%, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 75%)' }} />
          <div key={'c' + idx} className="ix-fan-cap" style={{ position:'absolute', right:30, bottom:26, display:'flex', flexDirection:'column', alignItems:'flex-end', gap:4, fontFamily:'var(--font-display)', textAlign:'right' }}>
            <span style={{ fontSize:15, fontWeight:500, letterSpacing:'0.18em', color:'#fff' }}>{cur.tag.toUpperCase()}</span>
            <span style={{ fontSize:15, fontWeight:400, letterSpacing:'0.04em', color:'rgba(255,255,255,0.7)' }}>{cur.sub}</span>
          </div>
          <div style={{ position:'absolute', left:24, bottom:22, display:'flex', alignItems:'center', gap:10 }}>
            <button type="button" aria-label="Previous" className="ix-fan-btn" onClick={go(-1)} style={btn}>{chev(false)}</button>
            <button type="button" aria-label="Next" className="ix-fan-btn" onClick={go(1)} style={btn}>{chev(true)}</button>
            <span style={{ marginLeft:8, fontFamily:'"Space Grotesk", sans-serif', fontSize:15, fontWeight:500, letterSpacing:'0.08em', color:'#fff', fontVariantNumeric:'tabular-nums' }}>{String(idx + 1).padStart(2, '0')}<span style={{ color:'rgba(255,255,255,0.55)', fontWeight:300 }}> / {String(n).padStart(2, '0')}</span></span>
          </div>
        </div>
      </B>
      <IXDrawer side="left" eyebrow="THE ECOSYSTEM" meta="Circuit to home" title="From the paddock, straight to the fans who couldn’t be there." chips={['Live POV', 'Creator-led', 'Beyond TV']}>It closes the loop. F1 creators livestream their first-person view live from the circuit, straight to the fans watching from home. A new way to tell the story of a race weekend, with the views TV doesn’t show, and a stronger connection between Williams, its creators and the fans who follow them.</IXDrawer>
      <div key={'t' + idx}><IXTextBlock l={164} t={330} w={720} num="03" kicker="User Three: The Curious" title={cur.title} body={cur.body} /></div>
      <div onClick={(e) => { e.stopPropagation(); setInfo(false); }} style={{ position:'absolute', inset:0, zIndex:200, display:'flex', alignItems:'center', justifyContent:'center', pointerEvents: info ? 'auto' : 'none', background:'rgba(4,6,12,0.62)', backdropFilter: info ? 'blur(14px)' : 'blur(0px)', WebkitBackdropFilter: info ? 'blur(14px)' : 'blur(0px)', opacity: info ? 1 : 0, transition:'opacity .6s cubic-bezier(.4,0,.2,1), backdrop-filter .6s ease, -webkit-backdrop-filter .6s ease', fontFamily:'var(--font-display)', cursor:'pointer' }}>
        <div onClick={(e) => e.stopPropagation()} style={{ width:960, borderRadius:'var(--radius-photo)', overflow:'hidden', background:'rgba(10,12,20,0.92)', boxShadow:'0 0 0 2px var(--wr-blue), 0 0 50px rgba(0,104,223,0.5), 0 40px 90px rgba(0,0,0,0.6)', cursor:'default', opacity: info ? 1 : 0, transform: info ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(14px)', transition:'opacity .6s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.2,.8,.2,1)' }}>
          <div style={{ position:'relative', height:420, background:`url(assets/the-curious-fans.png) center 35% / cover no-repeat` }}>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(6,8,14,0.9) 0%, rgba(6,8,14,0.45) 32%, rgba(6,8,14,0) 60%)' }} />
            <div style={{ position:'absolute', left:44, bottom:32, display:'flex', flexDirection:'column', gap:6 }}>
              <span style={{ fontSize:48, fontWeight:500, lineHeight:1, color:'#fff' }}>The Curious</span>
              <span style={{ fontSize:18, fontWeight:400, letterSpacing:'0.08em', color:'rgba(255,255,255,0.78)' }}>Who are they</span>
            </div>
            <button type="button" aria-label="Close" onClick={() => setInfo(false)} style={{ position:'absolute', top:22, right:22, width:44, height:44, borderRadius:'50%', border:0, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(10,12,20,0.55)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.25)' }}><svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 2 L12 12 M12 2 L2 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg></button>
          </div>
          <p style={{ margin:0, padding:'36px 44px 42px', fontSize:26, lineHeight:1.55, fontWeight:400, color:'#fff', textWrap:'pretty' }}>The Curious are Williams’ loyal, invested fanbase, the ones who want to know more, try new things and be part of the journey through ups and downs. They’re deeply invested in the team and its drivers, always curious about what’s next. They open the door to new technologies, embrace new experiences and help Williams evolve, getting ever closer to the brand they love.</p>
        </div>
      </div>
    </IXSlide>
  );
}

const IX_META_USES = [
  ['Live telemetry', 'Speed, tyre wear, gaps and strategy calls float in view as they happen, so guests read the race exactly like the pit wall does, without ever looking down at a screen.'],
  ['Onboard laps', 'Ride a full lap of Silverstone from the cockpit, with the driver’s view, braking points and team radio playing out around you in true scale, as if you were in the seat.'],
  ['3D interactable models', 'Place the car in the room and explore it part by part, from the power unit to the floor, while our AI engineer explains exactly what each piece does and why it matters.'],
  ['Highlight reels', 'Relive the team’s defining moments exactly as the drivers lived them, from lights out to the podium, told in the first person and replayed in full, immersive detail.'],
];
const IX_VISION_STATS = [
  ['$14.4B', 'Projected smart glasses market by 2033, up from $2.5B in 2025'],
  ['110%', 'Year-on-year growth in smart glasses shipments, first half of 2025'],
  ['Big Tech', 'Meta, Google, Apple and Samsung are all building for the category'],
];
/* Stacked glass feature cards: arrows slide the front card out left; back reveals it again. */
function FeatureStack({ reset }) {
  const [k, setK] = React.useState(0);
  React.useEffect(() => { if (!reset) setK(0); }, [reset]);
  const n = IX_META_USES.length, CH = 232;
  const go = (d) => (e) => { e.stopPropagation(); setK(v => Math.max(0, Math.min(n - 1, v + d))); };
  const arrow = (d, off) => (
    <button type="button" aria-label={d < 0 ? 'Previous' : 'Next'} className="ix-lift" disabled={off} onClick={go(d)} style={{ width:46, height:46, borderRadius:'50%', border:0, padding:0, cursor: off ? 'default' : 'pointer', opacity: off ? 0.35 : 1, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(30,34,46,0.55)', backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.22)', transition:'opacity .3s ease' }}>
      <svg width="11" height="17" viewBox="0 0 12 18" style={{ display:'block', transform: d > 0 ? 'scaleX(-1)' : 'none' }}><path d="M8.5 2.5 L2.5 9 L8.5 15.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>
  );
  return (
    <div style={{ marginTop:40 }}>
      <div style={{ position:'relative', height:CH + 3 * 14 }}>
        {IX_META_USES.map(([t, body], i) => {
          const d = i - k, out = d < 0, front = d === 0;
          return (
            <div key={t} style={{ position:'absolute', left:0, top:0, width:'100%', height:CH, boxSizing:'border-box', padding:'26px 32px', borderRadius:20, overflow:'hidden', zIndex:10 - Math.abs(d), background:'linear-gradient(160deg, rgba(247,246,243,0.94) 0%, rgba(230,228,224,0.92) 100%)', backdropFilter:'blur(22px)', WebkitBackdropFilter:'blur(22px)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.7), 0 24px 50px rgba(0,24,72,0.3)',
              transform: out ? 'translateX(-115%) rotate(-5deg)' : `translateY(${d * 14}px) scale(${1 - d * 0.045})`, transformOrigin:'50% 0', opacity: out || d > 2 ? 0 : 1 - d * 0.18, pointerEvents: front && reset ? 'auto' : 'none', transition:'transform .75s cubic-bezier(.2,.8,.2,1), opacity .6s ease' }}>
              <div style={{ position:'relative', display:'flex', flexDirection:'column', gap:12, opacity: front ? 1 : 0, transition:'opacity .4s ease' }}>
                <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                  <span style={{ fontFamily:'var(--font-display)', fontSize:13, fontWeight:600, letterSpacing:'0.2em', color:'#0068DF', fontVariantNumeric:'tabular-nums' }}>FEATURE {String(i + 1).padStart(2, '0')}</span>
                  <span style={{ flex:1, height:1, background:'linear-gradient(90deg, rgba(0,104,223,0.35), rgba(0,104,223,0))' }} />
                </div>
                <span style={{ fontFamily:'var(--font-display)', fontSize:30, fontWeight:500, lineHeight:'34px', color:'#0B1020' }}>{t}</span>
                <span style={{ height:90, overflow:'hidden', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient:'vertical', fontSize:21, fontWeight:400, lineHeight:'30px', color:'rgba(11,16,32,0.72)' }}>{body}</span>
                <div style={{ display:'flex', gap:6 }}>{IX_META_USES.map((_, j) => <span key={j} style={{ width: j === i ? 28 : 12, height:3, borderRadius:2, background: j === i ? '#0068DF' : 'rgba(11,16,32,0.16)' }} />)}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop:20, display:'flex', alignItems:'center', gap:12 }}>
        {arrow(-1, k === 0)}{arrow(1, k === n - 1)}
        <span style={{ marginLeft:8, fontFamily:'var(--font-display)', fontSize:16, fontWeight:500, letterSpacing:'0.08em', color:'#fff', fontVariantNumeric:'tabular-nums' }}>{String(k + 1).padStart(2, '0')}<span style={{ color:'rgba(255,255,255,0.6)', fontWeight:300 }}> / {String(n).padStart(2, '0')}</span></span>
      </div>
    </div>
  );
}

/* Drawer body for Why us: Claude (Williams' thinking partner) vs ... (creative AI partner building on Claude). */
function ClaudeCompare() {
  const row = (name, role, body) => (
    <div style={{ display:'flex', flexDirection:'column', gap:8, paddingTop:22, borderTop:'1px solid rgba(255,255,255,0.12)' }}>
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
        <span style={{ fontFamily:'var(--font-display)', fontSize:30, fontWeight:500, color:'#fff' }}>{name}</span>
        <span style={{ fontSize:15, fontWeight:500, letterSpacing:'0.16em', color:'rgb(31,199,255)' }}>{role}</span>
      </div>
      <p style={{ margin:0, fontSize:23, fontWeight:300, lineHeight:'35px', color:'rgba(255,255,255,0.86)', textWrap:'pretty' }}>{body}</p>
    </div>
  );
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
      {row('Claude', 'THINKING PARTNER', 'Shapes how Williams thinks, plans and performs, from race strategy to car development.')}
      {row('...', 'CREATIVE AI PARTNER', 'Builds on Claude to turn that same intelligence into creative AI experiences for fans and partners.')}
    </div>
  );
}

/* Vision AI: simple market story first; "Tech Updates" slides the glasses in and swaps to the Meta VR Glasses detail. */
function IXMetaSlide({ index }) {
  return (
    <IXSlide index={index}>
      <MetaInner />
    </IXSlide>
  );
}
function MetaInner() {
  const { active } = React.useContext(IXCtx);
  const [tech, setTech] = React.useState(false);
  React.useEffect(() => { if (!active) setTech(false); }, [active]);
  const ease = 'cubic-bezier(.2,.8,.2,1)';
  const eyebrow = (label) => (
    <div style={{ display:'flex', alignItems:'center', gap:18, marginBottom:28 }}>
      <span style={{ fontSize:16, fontWeight:500, letterSpacing:'0.12em', color:'rgb(31,199,255)', fontVariantNumeric:'tabular-nums' }}>04</span>
      <span style={{ width:305, height:1.5, background:'var(--wr-rule-gradient)' }} />
      <span style={{ fontSize:16, fontWeight:500, letterSpacing:'0.16em', color:'rgba(255,255,255,0.72)' }}>{label}</span>
    </div>
  );
  const h2 = { margin:0, fontFamily:'var(--font-display)', fontWeight:500, fontSize:68, lineHeight:'72px', letterSpacing:'-0.015em', color:'#fff', textWrap:'balance' };
  const pill = { display:'flex', alignItems:'center', gap:14, padding:'16px 26px 16px 30px', border:0, borderRadius:999, cursor:'pointer', fontFamily:'var(--font-display)', fontSize:20, fontWeight:500, letterSpacing:'0.06em', color:'#0B1020', background:'#fff', boxShadow:'0 0 0 1px rgba(255,255,255,0.2), 0 12px 36px rgba(0,104,223,0.35)' };
  return (
    <React.Fragment>
      <IXStreaks d={250} />
      <B fx="fade" d={0} style={{ position:'absolute', left:760, top:120, width:1100, height:760, pointerEvents:'none', background:'radial-gradient(50% 50% at 50% 50%, rgba(0,104,223,0.28) 0%, rgba(0,66,255,0) 100%)', filter:'blur(20px)', opacity: tech ? 1 : 0, transition:'opacity .9s ease' }} />
      <div style={{ position:'absolute', left:900, top:160, width:600, height:522, zIndex:20, borderRadius:'var(--radius-photo)', overflow:'hidden', boxShadow:'0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)', background:'url(assets/meta-glasses-puck.png) center / cover no-repeat', opacity: tech ? 1 : 0, transform: tech ? 'none' : 'translateX(160px) scale(.97)', transition: tech ? `opacity .9s ease 0.35s, transform 1.2s ${ease} 0.35s` : 'opacity .4s ease, transform .5s ease', pointerEvents:'none' }}>
        <div style={{ position:'absolute', left:0, right:0, bottom:0, height:150, background:'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.45) 50%, rgba(10,12,20,0.78) 100%)' }} />
        <div style={{ position:'absolute', left:26, bottom:22, display:'flex', flexDirection:'column', gap:4, fontFamily:'var(--font-display)' }}>
          <span style={{ fontSize:15, fontWeight:500, letterSpacing:'0.18em', color:'#fff' }}>META VR GLASSES</span>
          <span style={{ fontSize:15, fontWeight:400, letterSpacing:'0.04em', color:'rgba(255,255,255,0.8)' }}>Glasses with pocket compute puck</span>
        </div>
      </div>
      <div style={{ position:'absolute', left:1340, top:620, width:520, height:293, zIndex:20, borderRadius:'var(--radius-photo)', overflow:'hidden', boxShadow:'0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)', background:'url(assets/meta-glasses-inner.png) center / cover no-repeat', opacity: tech ? 1 : 0, transform: tech ? 'none' : 'translateX(160px) scale(.97)', transition: tech ? `opacity .9s ease 0.6s, transform 1.2s ${ease} 0.6s` : 'opacity .4s ease, transform .5s ease', pointerEvents:'none' }}>
        <div style={{ position:'absolute', left:0, right:0, bottom:0, height:150, background:'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.45) 50%, rgba(10,12,20,0.78) 100%)' }} />
        <div style={{ position:'absolute', left:26, bottom:22, display:'flex', flexDirection:'column', gap:4, fontFamily:'var(--font-display)' }}>
          <span style={{ fontSize:15, fontWeight:500, letterSpacing:'0.18em', color:'#fff' }}>INSIDE THE FRAME</span>
          <span style={{ fontSize:15, fontWeight:400, letterSpacing:'0.04em', color:'rgba(255,255,255,0.8)' }}>Micro-OLED displays with custom-fit lenses</span>
        </div>
      </div>
      <div style={{ position:'absolute', left:164, top:0, bottom:40, width:1180, display:'flex', flexDirection:'column', justifyContent:'center', fontFamily:'var(--font-body)', opacity: tech ? 0 : 1, transform: tech ? 'translateX(-40px)' : 'none', pointerEvents: tech ? 'none' : 'auto', transition: tech ? 'opacity .45s ease, transform .6s ease' : `opacity .8s ease .45s, transform 1s ${ease} .45s` }}>
        <B fx="fade" d={80}>{eyebrow('VISION AI')}</B>
        <B fx="up" d={180}><h2 style={h2}>A New Era For Sports Media</h2></B>
        <B fx="up" d={320} style={{ marginTop:28 }}><p style={{ margin:0, maxWidth:1000, fontWeight:300, fontSize:30, lineHeight:'44px', color:'rgba(255,255,255,0.78)', textWrap:'pretty' }}><span style={{ fontWeight:500, color:'#fff' }}>Why now?</span> XR and vision AI are changing how sport is watched. Fans now consume media hands-free, first-person and in real time, and the brands that build for these formats early will own the next generation of attention.</p></B>
        <div style={{ marginTop:56, display:'grid', gridTemplateColumns:'repeat(3, minmax(0,1fr))', columnGap:40 }}>
          {IX_VISION_STATS.map(([n, t], i) => (
            <B key={n} fx="up" d={460 + i * 120} style={{ display:'flex', flexDirection:'column', gap:10, paddingTop:20, borderTop:'1.5px solid rgba(255,255,255,0.14)' }}>
              <span style={{ fontFamily:'var(--font-display)', fontSize:56, fontWeight:500, lineHeight:'60px', color:'#fff', fontVariantNumeric:'tabular-nums' }}>{n}</span>
              <span style={{ fontSize:21, fontWeight:300, lineHeight:'29px', color:'rgba(255,255,255,0.72)', textWrap:'pretty' }}>{t}</span>
            </B>
          ))}
        </div>
        <B fx="up" d={860} style={{ marginTop:56 }}>
          <button type="button" className="ix-lift" onClick={(e) => { e.stopPropagation(); setTech(true); }} style={pill}>
            Tech Updates
            <svg width="10" height="16" viewBox="0 0 12 18" style={{ display:'block', transform:'scaleX(-1)' }}><path d="M8.5 2.5 L2.5 9 L8.5 15.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </B>
      </div>
      <div style={{ position:'absolute', left:164, top:0, bottom:0, width:620, display:'flex', flexDirection:'column', justifyContent:'center', fontFamily:'var(--font-body)', opacity: tech ? 1 : 0, transform: tech ? 'none' : 'translateY(24px)', pointerEvents: tech ? 'auto' : 'none', transition: tech ? `opacity .8s ease .55s, transform 1s ${ease} .55s` : 'opacity .4s ease, transform .4s ease' }}>
        {eyebrow('TECH UPDATES')}
        <h2 style={h2}>Meta VR Glasses</h2>
        <div style={{ marginTop:20, alignSelf:'flex-start', display:'flex', alignItems:'center', gap:10, padding:'8px 16px', borderRadius:999, background:'rgba(255,255,255,0.14)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.4)', fontFamily:'var(--font-display)', fontSize:16, fontWeight:500, letterSpacing:'0.12em', color:'#fff' }}><span style={{ width:7, height:7, borderRadius:'50%', background:'#fff' }} />RELEASING SPRING 2027</div>
        <p style={{ margin:'26px 0 0', fontWeight:300, fontSize:24, lineHeight:'36px', color:'rgba(255,255,255,0.78)', textWrap:'pretty' }}>Meta designed these glasses around one idea: changing how people experience media. A 5K micro-OLED display in a frame of around 100 grams, powered by a pocket-sized compute puck, turns what you see into the screen. Meta has opened the platform to creators and brands, so the partners who build for it first define what it becomes.</p>
        <div style={{ marginTop:40, display:'flex', gap:12 }}>
          <button type="button" className="ix-lift" onClick={(e) => { e.stopPropagation(); setTech(false); }} style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 18px 10px 14px', border:0, borderRadius:999, background:'rgba(255,255,255,0.14)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.4)', fontFamily:'var(--font-display)', fontSize:16, fontWeight:500, letterSpacing:'0.08em', color:'#fff', cursor:'pointer' }}>
            <svg width="8" height="13" viewBox="0 0 12 18" style={{ display:'block' }}><path d="M8.5 2.5 L2.5 9 L8.5 15.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back
          </button>
          <button type="button" disabled aria-disabled="true" onClick={(e) => e.stopPropagation()} style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 18px 10px 14px', border:0, borderRadius:999, background:'rgba(255,255,255,0.14)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.4)', fontFamily:'var(--font-display)', fontSize:16, fontWeight:500, letterSpacing:'0.08em', color:'#fff', padding:'10px 14px 10px 18px', cursor:'default', opacity:0.4 }}>
            Next
            <svg width="8" height="13" viewBox="0 0 12 18" style={{ display:'block', transform:'scaleX(-1)' }}><path d="M8.5 2.5 L2.5 9 L8.5 15.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

/* Feasibility: built on Claude (Williams' official thinking partner) by Kinnovate. */
const IX_BUILD_FLOW = [
  ['Guest asks', 'Meta glasses pick up a natural question, hands-free'],
  ['Claude reasons', 'Answers from team-approved knowledge and live session context'],
  ['Engineer replies', 'A race-engineer voice responds, straight in the ear'],
  ['Moments captured', 'Footage is cut into a personal highlight reel'],
];
function IXClaudeSlide({ index }) {
  const partners = [
    ['Claude', 'Official thinking partner of Williams Racing', 'Already embedded across the organisation, Claude works alongside engineers and strategists, shaping how the team thinks, plans and performs in race strategy, car development and operations.'],
    ['Kinnovate', 'Creative AI partner', 'We build on Claude to create new experiences for Williams and its fans, showcasing what Claude can do while pushing the Williams brand forward.'],
  ];
  return (
    <IXSlide index={index}>
      <div style={{ position:'absolute', left:164, top:176, width:1592, display:'flex', flexDirection:'column', fontFamily:'var(--font-body)' }}>
        <B fx="fade" d={80} style={{ display:'flex', alignItems:'center', gap:18, marginBottom:28 }}>
          <span style={{ fontSize:16, fontWeight:500, letterSpacing:'0.12em', color:'rgb(31,199,255)', fontVariantNumeric:'tabular-nums' }}>05</span>
          <span style={{ width:305, height:1.5, background:'var(--wr-rule-gradient)' }} />
          <span style={{ fontSize:16, fontWeight:500, letterSpacing:'0.16em', color:'rgba(255,255,255,0.72)' }}>HOW WE BUILD IT</span>
        </B>
        <B fx="up" d={180}><h2 style={{ margin:0, fontFamily:'var(--font-display)', fontWeight:500, fontSize:68, lineHeight:'72px', letterSpacing:'-0.015em', color:'#fff' }}>Built with Williams’ own thinking partner</h2></B>
        <div style={{ marginTop:56, display:'grid', gridTemplateColumns:'repeat(2, minmax(0,1fr))', gap:32 }}>
          {partners.map(([name, role, body], i) => (
            <B key={name} fx="pop" d={340 + i * 140}>
              <div className="ix-panel"><div style={{ boxSizing:'border-box', height:'100%', minHeight:292, borderRadius:'var(--radius-card)', background:'var(--wr-panel)', boxShadow:'var(--shadow-card)', padding:'44px 48px', display:'flex', flexDirection:'column', gap:14 }}>
                <span style={{ fontSize:16, fontWeight:500, letterSpacing:'0.14em', color:'rgb(31,199,255)' }}>{role.toUpperCase()}</span>
                <h3 style={{ margin:0, fontFamily:'var(--font-display)', fontWeight:500, fontSize:44, lineHeight:'48px', color:'#fff' }}>{name}</h3>
                <p style={{ margin:'6px 0 0', fontWeight:300, fontSize:24, lineHeight:'36px', color:'rgba(255,255,255,0.78)', textWrap:'pretty' }}>{body}</p>
              </div></div>
            </B>
          ))}
        </div>
        <B fx="fade" d={700} style={{ marginTop:64, display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
          <span style={{ fontSize:16, fontWeight:500, letterSpacing:'0.16em', color:'rgba(255,255,255,0.72)' }}>HOW IT WORKS</span>
          <span style={{ fontSize:20, fontWeight:300, color:'rgba(255,255,255,0.72)' }}>Built on hardware and models already in use today</span>
        </B>
        <div style={{ marginTop:22, display:'grid', gridTemplateColumns:'repeat(4, minmax(0,1fr))', columnGap:32 }}>
          {IX_BUILD_FLOW.map(([t, b], i) => (
            <B key={t} fx="left" d={800 + i * 140} style={{ display:'flex', flexDirection:'column', gap:10, paddingTop:22, borderTop:'1.5px solid rgba(255,255,255,0.16)' }}>
              <span style={{ fontSize:16, fontWeight:500, letterSpacing:'0.12em', color:'rgb(31,199,255)', fontVariantNumeric:'tabular-nums' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontFamily:'var(--font-display)', fontSize:28, fontWeight:500, lineHeight:'32px', color:'#fff' }}>{t}</span>
              <span style={{ fontSize:22, fontWeight:300, lineHeight:'32px', color:'rgba(255,255,255,0.72)', textWrap:'pretty' }}>{b}</span>
            </B>
          ))}
        </div>
      </div>
    </IXSlide>
  );
}

/* Why-us panel: same ladder as the Overview list — cyan index, medium title, gradient rule, light body. */
function WhyPanel({ num, title, children }) {
  return (
    <div style={{ width:584, height:435, boxSizing:'border-box', borderRadius:'var(--radius-card)', background:'var(--wr-panel)', boxShadow:'var(--shadow-card)', padding:'56px 52px', display:'flex', flexDirection:'column', gap:22, fontFamily:'var(--font-body)' }}>
      <span style={{ fontSize:16, fontWeight:500, letterSpacing:'0.12em', color:'rgb(31,199,255)', fontVariantNumeric:'tabular-nums' }}>{num}</span>
      <h3 style={{ margin:0, fontFamily:'var(--font-display)', fontWeight:500, fontSize:40, lineHeight:'44px', color:'#fff' }}>{title}</h3>
      <span style={{ width:180, height:1.5, background:'var(--wr-rule-gradient)' }} />
      <p style={{ margin:0, fontWeight:300, fontSize:24, lineHeight:'36px', color:'rgba(255,255,255,0.78)', textWrap:'pretty' }}>{children}</p>
    </div>
  );
}

function IXWhyUsSlide({ index }) {
  return (
    <IXSlide index={index}>
      <IXWMark />
      <B fx="up" d={200} style={{ position:'absolute', left:831, top:173 }}><h2 style={{ ...ixTitle, fontSize:'var(--type-display-size)', lineHeight:'var(--type-display-lh)', whiteSpace:'nowrap' }}>Why us</h2></B>
      <PX depth={8} l={346} t={323}>
        <B fx="pop" d={400}><div className="ix-panel"><WhyPanel num="01" title="Bespoke AI software">We design and build the complete Williams experience, including the AI character, paddock journey, sponsor integrations, personalised interactions and automated highlight recap software.</WhyPanel></div></B>
      </PX>
      <PX depth={12} l={991} t={323}>
        <B fx="pop" d={560}><div className="ix-panel"><WhyPanel num="02" title="On site operations">We manage every aspect on site, from device preparation and guest onboarding to hardware logistics, technical support and content delivery, ensuring a seamless experience for every guest.</WhyPanel></div></B>
      </PX>
      <IXLogo l={855} t={974} d={800} />
      <IXDrawer side="right" middle={540} width={720} eyebrow="LEVERAGING CLAUDE" meta="Claude × ..." title="One intelligence, on track and off it." content={<ClaudeCompare />} />
    </IXSlide>
  );
}

Object.assign(window, { IXPromptsSlide, IXLivestreamSlide, IXVipSlide, IXDemoSlide, IXMetaSlide, IXClaudeSlide, IXWhyUsSlide });
