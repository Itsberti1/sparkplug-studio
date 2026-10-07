/* The 3 Users: flip cards. Front = portrait + title; back = commercial value. Long backs grow downward after the flip and close before flipping back. */
const IX_USERS = [
  { n:'01', name:'The Creator', img:IXA('photos/creator-selfie-trackside.png'), bg:'-299px -377px / 740px 1314px no-repeat',
    head:'Earned reach, at creator scale',
    body:'Every creator becomes a live Williams broadcast. Their first-person content puts the team in front of millions of highly engaged followers, building community and generating user-generated content and earned reach at a fraction of the cost of paid media.',
    tags:['UGC', 'Reach', 'Community'] },
  { n:'02', name:'The Corporates', img:'assets/vip-garage-guests.png', bg:'-227px -220px / 667px 1187px no-repeat',
    head:'Deeper partnerships, new ones opened',
    body:'A premium, personalised hospitality experience that strengthens relationships with existing sponsors and gives Williams a distinctive platform to open conversations with prospective partners. Every guest leaves with branded content that keeps the partnership visible long after race day.',
    tags:['Sponsor retention', 'New partners'] },
  { n:'03', name:'The Curious', img:'assets/curious-fan.png', bg:'-24px -88px / 540px 959px no-repeat',
    head:'Closer to the sport, from anywhere',
    body:'Williams is committed to bringing F1’s evolving fanbase closer to the sport through pioneering technologies and new media formats. Whether following their favourite F1 creator through first-person views of the paddock and pit lane, or trying new mediums like the AR experience, this fan isn’t at the circuit, but can feel like they are. It’s how we grow a younger demographic: a new generation of supporters who embrace wide-ranging, cross-cultural interests beyond racing.',
    tags:['Next-gen fans', 'New media'] },
];
const IXU_S = 440;
const ixuGlow = '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)';

function IXUserCard({ u }) {
  const { active } = React.useContext(IXCtx);
  const [flip, setFlip] = React.useState(false);
  const [h, setH] = React.useState(IXU_S);
  const [txt, setTxt] = React.useState(false);
  const inner = React.useRef(null), tm = React.useRef([]), busy = React.useRef(false);
  const later = (fn, ms) => tm.current.push(setTimeout(fn, ms));
  const clear = () => { tm.current.forEach(clearTimeout); tm.current = []; };
  React.useEffect(() => { if (!active) { clear(); setFlip(false); setH(IXU_S); setTxt(false); busy.current = false; } }, [active]);
  React.useEffect(() => clear, []);
  const toggle = (e) => {
    e.stopPropagation();
    if (busy.current) return;
    busy.current = true; clear();
    if (!flip) {
      const need = Math.max(IXU_S, inner.current ? inner.current.offsetHeight : IXU_S);
      setFlip(true);
      if (need > IXU_S) { later(() => setH(need), 760); later(() => setTxt(true), 1000); later(() => { busy.current = false; }, 1400); }
      else { later(() => setTxt(true), 520); later(() => { busy.current = false; }, 900); }
    } else {
      const grown = h > IXU_S;
      setTxt(false);
      if (grown) later(() => setH(IXU_S), 260);
      later(() => setFlip(false), grown ? 820 : 280);
      later(() => { busy.current = false; }, grown ? 1700 : 1150);
    }
  };
  const face = { position:'absolute', inset:0, borderRadius:'var(--radius-photo)', overflow:'hidden', backfaceVisibility:'hidden', WebkitBackfaceVisibility:'hidden', boxShadow:ixuGlow };
  const plus = (turn) => (
    <span style={{ position:'absolute', right:18, top:18, width:38, height:38, borderRadius:'50%', background:'rgba(10,12,20,0.5)', backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.22)', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <svg width="14" height="14" viewBox="0 0 14 14" style={{ display:'block', transform:`rotate(${turn ? 45 : 0}deg)` }}><path d="M7 1V13M1 7H13" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /></svg>
    </span>
  );
  return (
    <div className="ix-user" onClick={toggle} style={{ width:IXU_S, perspective:1800, cursor:'pointer' }}>
      <div style={{ position:'relative', width:IXU_S, height:h, transformStyle:'preserve-3d', transform:`rotateY(${flip ? 180 : 0}deg)`, transition:'transform .8s cubic-bezier(.45,.05,.2,1), height .55s cubic-bezier(.3,.7,.2,1)' }}>
        <div style={{ ...face, background: u.img ? `url(${u.img}) ${u.bg}` : 'repeating-linear-gradient(135deg, #121725 0 14px, #0e1220 14px 28px)' }}>
          {!u.img && <span style={{ position:'absolute', left:0, right:0, top:'42%', textAlign:'center', fontFamily:'ui-monospace, Menlo, monospace', fontSize:14, letterSpacing:'0.08em', color:'rgba(255,255,255,0.4)' }}>{u.ph || 'portrait to come'}</span>}
          <div style={{ position:'absolute', left:0, right:0, bottom:0, height: u.sub ? 260 : 200, background:'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.6) 45%, rgba(10,12,20,0.92) 100%)' }} />
          <div style={{ position:'absolute', left:30, right:30, bottom:26, display:'flex', flexDirection:'column', gap:4, fontFamily:'var(--font-display)' }}>
            <span style={{ fontSize:15, fontWeight:500, letterSpacing:'0.16em', color:'rgb(31,199,255)', fontVariantNumeric:'tabular-nums' }}>{u.eyebrow || `USER ${u.n}`}</span>
            <span style={{ fontSize:36, fontWeight:500, lineHeight:'40px', color:'#fff' }}>{u.name}</span>
            {u.sub && <span style={{ marginTop:4, fontFamily:'var(--font-body)', fontSize:20, fontWeight:300, lineHeight:'28px', color:'rgba(255,255,255,0.82)', textWrap:'pretty' }}>{u.sub}</span>}
          </div>
          {plus(false)}
        </div>
        <div style={{ ...face, transform:'rotateY(180deg)', background:'linear-gradient(160deg, #161c2d 0%, #0c0f1a 100%)' }}>
          <div ref={inner} style={{ position:'absolute', left:0, right:0, top:0, boxSizing:'border-box', padding:'36px 36px 34px', display:'flex', flexDirection:'column', gap:14, fontFamily:'var(--font-body)', opacity: txt ? 1 : 0, transform: txt ? 'none' : 'translateY(8px)', transition:'opacity .4s ease, transform .5s cubic-bezier(.2,.7,.2,1)' }}>
            <span style={{ fontSize:14, fontWeight:500, letterSpacing:'0.16em', color:'rgb(31,199,255)' }}>{u.backLabel || `${u.name.toUpperCase()} · COMMERCIAL VALUE`}</span>
            <h3 style={{ margin:0, paddingRight:40, fontFamily:'var(--font-display)', fontWeight:500, fontSize:30, lineHeight:'34px', color:'#fff', textWrap:'balance' }}>{u.head}</h3>
            <span style={{ width:120, height:1.5, background:'var(--wr-rule-gradient)' }} />
            <p style={{ margin:0, fontWeight:300, fontSize:20, lineHeight:'29px', color:'rgba(255,255,255,0.84)', textWrap:'pretty' }}>{u.body}</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop:4 }}>
              {u.tags.map(t => <span key={t} style={{ padding:'6px 14px', borderRadius:999, background:'rgba(255,255,255,0.07)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.14)', fontSize:15, fontWeight:500, color:'#fff' }}>{t}</span>)}
            </div>
          </div>
          {plus(true)}
        </div>
      </div>
    </div>
  );
}

function IXUsersSlide({ index }) {
  return (
    <IXSlide index={index}>
      <IXWMark />
      <div style={{ position:'absolute', left:0, right:0, top:150, display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', fontFamily:'var(--font-body)' }}>
        <B fx="wipe" d={80} style={{ width:305, height:1.5, marginBottom:30, background:'linear-gradient(90deg, rgba(0,104,223,0) 0%, #0068DF 50%, rgba(0,104,223,0) 100%)' }} />
        <B fx="up" d={160}><h2 style={{ margin:0, fontFamily:'var(--font-display)', fontWeight:500, fontSize:68, lineHeight:'72px', letterSpacing:'-0.015em', color:'#fff' }}>The 3 Users</h2></B>
        <B fx="up" d={300} style={{ marginTop:16 }}><p style={{ margin:0, fontWeight:300, fontSize:28, lineHeight:'38px', color:'rgba(255,255,255,0.72)' }}>And the commercial value our AI experiences bring to them, for Williams and Formula 1</p></B>
      </div>
      <div style={{ position:'absolute', left:0, right:0, top:360, display:'flex', justifyContent:'center', alignItems:'flex-start', gap:44, zIndex:5 }}>
        {IX_USERS.map((u, i) => <B key={u.n} fx="pop" d={450 + i * 150}><IXUserCard u={u} /></B>)}
      </div>
    </IXSlide>
  );
}

/* Portal: one card per idea deck. Cards flip for detail; play buttons are placeholders until the decks are linked. Laid out 3-up so Time Capsule wraps to sit below SparkPlug Studio and Ideation Studio reads second. */
const IX_DECKS = [
  { n:'01', eyebrow:'DECK 01', name:'SparkPlug Studio', href:'../../sparkplug/index.html', img:'assets/sparkplug-studio.png', bg:'12% 0% / auto 100% no-repeat', ph:'creator studio image to come', sub:'SparkPlug Studio turns raw Williams race data into cinematic, stylised animations',
    backLabel:'THE WILLIAMS SPARKPLUG STUDIO', head:'Every race, a cinematic recap',
    body:'After every race, the Williams SparkPlug Studio turns race data, footage and media into a cinematic, high-energy animation, made with Higgsfield in a style tailored to each fan. A bespoke summary of the team’s day, built for Williams’ channels.',
    tags:['Race data', 'Higgsfield', 'Stylised'] },
  { n:'02', eyebrow:'DECK 02', name:'Ideation Studio', img:'assets/ideation-studio.png', bg:'center 38% / cover no-repeat', sub:'Ideation Studio gives Williams creative teams a streamlined way to ideate concepts and activations',
    backLabel:'THE WILLIAMS IDEATION STUDIO', head:'From blank page to pitch-ready, in minutes',
    body:'A streamlined AI studio that helps Williams creative teams rapidly ideate, shape and pressure-test new concepts and activations, turning a rough brief into a pitch-ready direction in a fraction of the usual time.',
    tags:['Ideation', 'Concepts', 'Activations'] },
  { n:'03', eyebrow:'DECK 03', name:'AI Glasses', go:1, img:'assets/ai-engineer-glasses-v3.png', bg:'center / cover no-repeat', ph:'ai engineer image to come', sub:'AI Glasses give VIP guests an immersive AI experience through the paddock and pit lane',
    backLabel:'THE WILLIAMS AI ENGINEER', head:'Your own race engineer, in your ear',
    body:'A bespoke AI experience that places VIP guests and partners at the heart of the team during paddock and pit lane walks. A synthetic race engineer delivers live insights, heritage and sponsor stories on demand, while smart glasses capture every moment to relive long after the day.',
    tags:['Paddock', 'Pit lane', 'Smart glasses'] },
  { n:'04', eyebrow:'DECK 04', name:'Time Capsule', img:'assets/time-capsule-vr.png', bg:'59% 0% / auto 100% no-repeat', ph:'time capsule image to come', sub:'Time Capsule takes fans on a generative VR journey through Williams history, powered by SparkPlug’s visuals',
    backLabel:'THE WILLIAMS TIME CAPSULE', head:'Step inside the Williams story',
    body:'A generative VR experience in the Williams fan zone at every Grand Prix. Narrated by Alex Albon, fans travel through the eras, step inside iconic cars in every Williams livery and relive legendary races, brought to life using SparkPlug Studio’s generated visuals. Powered by Claude AI and bespoke to each Grand Prix, no two journeys are the same.',
    tags:['Fan zone', 'VR', 'Claude AI'] },
];
const IXD_S = 330;
function IXDeckCard({ u }) {
  return (
    <div className="ix-user" style={{ position:'relative', width:IXD_S, height:IXD_S, borderRadius:'var(--radius-photo)', overflow:'hidden', boxShadow:ixuGlow, background: u.img ? `url(${u.img}) ${u.bg}` : (u.grey ? 'var(--wr-grey-200)' : 'repeating-linear-gradient(135deg, #121725 0 14px, #0e1220 14px 28px)') }}>
      {!u.img && <span style={{ position:'absolute', left:0, right:0, top:'30%', textAlign:'center', fontFamily:'ui-monospace, Menlo, monospace', fontSize:11, letterSpacing:'0.08em', color: u.grey ? 'rgba(10,12,20,0.4)' : 'rgba(255,255,255,0.4)' }}>{u.ph}</span>}
      <div style={{ position:'absolute', left:0, right:0, bottom:0, height:200, background:'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.65) 40%, rgba(10,12,20,0.94) 100%)' }} />
      <div style={{ position:'absolute', left:20, right:20, bottom:18, display:'flex', flexDirection:'column', alignItems:'flex-start', gap:4, fontFamily:'var(--font-display)' }}>
        <span style={{ fontSize:11, fontWeight:500, letterSpacing:'0.16em', color:'rgb(31,199,255)', fontVariantNumeric:'tabular-nums' }}>{u.eyebrow}</span>
        <span style={{ fontSize:19, fontWeight:500, lineHeight:'22px', color:'#fff', whiteSpace:'nowrap' }}>{u.name}</span>
        <span style={{ fontFamily:'var(--font-body)', fontSize:13, fontWeight:300, lineHeight:'18px', color:'rgba(255,255,255,0.82)', textWrap:'pretty' }}>{u.sub}</span>
        <button type="button" aria-label={'Open ' + u.name} className={u.href || u.go != null ? 'ix-lift' : ''} disabled={!(u.href || u.go != null)} onClick={(e) => { e.stopPropagation(); if (u.href) { window.location.href = u.href; } else if (u.go != null) { const d = document.querySelector('deck-stage'); d && d.goTo(u.go); } }} style={{ marginTop:10, height:34, padding:'0 18px 0 14px', gap:9, borderRadius:999, border:0, cursor: u.href || u.go != null ? 'pointer' : 'default', opacity: u.href || u.go != null ? 1 : 0.4, display:'flex', alignItems:'center', fontFamily:'var(--font-display)', fontSize:13, fontWeight:600, letterSpacing:'0.1em', color:'#fff', background:'rgb(24,170,245)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.35)' }}>
          <div style={{ width:0, height:0, borderTop:'6px solid transparent', borderBottom:'6px solid transparent', borderLeft:'10px solid #fff' }} />
          START
        </button>
      </div>
    </div>
  );
}
function IXPortalSlide({ index }) {
  return (
    <IXSlide index={index} hud={false} home={false}>
      <IXWMark />
      <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:48 }}>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', fontFamily:'var(--font-body)' }}>
          <B fx="fade" d={40}><IXDS.WilliamsLogo src={IXA('logo/williams-wordmark-white.png')} width={190} /></B>
          <B fx="wipe" d={120} style={{ width:305, height:1.5, margin:'30px 0', background:'linear-gradient(90deg, rgba(0,104,223,0) 0%, #0068DF 50%, rgba(0,104,223,0) 100%)' }} />
          <B fx="up" d={200}><h2 style={{ margin:0, fontFamily:'var(--font-display)', fontWeight:500, fontSize:68, lineHeight:'72px', letterSpacing:'-0.015em', color:'#fff' }}>The Concepts</h2></B>
          <B fx="up" d={320} style={{ marginTop:16 }}><p style={{ margin:0, fontWeight:300, fontSize:28, lineHeight:'38px', color:'rgba(255,255,255,0.72)' }}>Four concepts exploring how creative AI could shape the future of the Williams brand</p></B>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:`repeat(3, ${IXD_S}px)`, gridAutoRows:`${IXD_S}px`, columnGap:28, rowGap:28, zIndex:5 }}>
          {IX_DECKS.map((u, i) => (
            <B key={u.n} fx="pop" d={450 + i * 150}><IXDeckCard u={u} /></B>
          ))}
        </div>
      </div>
    </IXSlide>
  );
}

/* Finale: the Why-us logo carries over and glides up; the line reveals word by word; the lap bar runs to the flag. */
const IX_LIGHTS_WORDS = ['It’s', 'lights', 'out', 'and', 'away', 'we', 'go'];
function IXLightsSlide({ index }) {
  return <IXSlide index={index} field={false} hudFinal style={{ background:'#07080d' }}><LightsInner /></IXSlide>;
}
function LightsInner() {
  const { nonce, active } = React.useContext(IXCtx);
  return (
    <React.Fragment>
      <div key={'l' + nonce} className="ix-logo-rise" style={{ position:'absolute', left:855, top:977 }}>
        <IXDS.WilliamsLogo src={IXA('logo/williams-wordmark-white.png')} width={210} />
      </div>
      <h2 key={'t' + nonce} aria-label="It’s lights out and away we go" style={{ position:'absolute', left:0, right:0, top:539, margin:0, display:'flex', justifyContent:'center', gap:'0 16px', fontFamily:'var(--font-display)', fontWeight:400, fontSize:64, lineHeight:'72px', letterSpacing:'-0.01em', color:'#fff' }}>
        {IX_LIGHTS_WORDS.map((w, i) => (
          <span key={i} style={{ display:'inline-block', overflow:'hidden', paddingBottom:6 }}>
            <span className="ix-word" style={{ display:'inline-block', '--d': (1500 + i * 110) + 'ms' }}>{w}</span>
          </span>
        ))}
      </h2>
    </React.Fragment>
  );
}

Object.assign(window, { IXUsersSlide, IXPortalSlide, IXUserCard, IXLightsSlide });
