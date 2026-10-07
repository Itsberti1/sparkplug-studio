const DS = window.WilliamsRacingAIExperienceDesignSystem_1388e9;
const A = (p) => (window.WR_ASSETS || '../../assets/') + p;
const frame = { position:'relative', width:1920, height:1080, overflow:'hidden', background:'var(--wr-night)', color:'#fff' };
const abs = (l, t, extra) => ({ position:'absolute', left:l, top:t, ...extra });

function Streaks({ style }) {
  return <div aria-hidden="true" style={{ position:'absolute', left:0, top:0, width:1536, height:1024, transform:'matrix(-0.997,0.079,-0.079,-0.997,2491.426,1609.770)', transformOrigin:'0 0', background:`url(${A('brand/speed-streaks.png')}) center / cover no-repeat`, pointerEvents:'none', ...style }} />;
}
function Logo({ l, t }) {
  return <DS.WilliamsLogo src={A('logo/williams-wordmark-white.png')} width={210} style={abs(l, t + 3)} />;
}

/* Frame 2 — full-bleed photo cover */
function CoverSlide() {
  return (
    <div style={{ ...frame, background:'var(--wr-night-2)' }}>
      <div style={{ position:'absolute', inset:0, background:`url(${A('photos/pitlane-hey-williams.png')}) center / cover no-repeat` }} />
    </div>
  );
}

/* Frame 3 — W mark + logo + rule + bullet overview */
function OverviewSlide() {
  const items = [
    ['Immersive AI experience –', ' A bespoke AI powered experience that immerses VIP guests and partners in the heart of the Williams Racing team during paddock and pit lane walks.'],
    ['Your own synthetic race engineer –', ' Receive live engineering insights, team heritage, sponsor stories and behind the scenes context, while asking questions naturally at any time.'],
    ['Stay present, relive every moment –', ' Experience the day without reaching for your phone while AI captures every unforgettable moment to revisit long after the event.'],
  ];
  return (
    <div style={frame}>
      <DS.WMark src={A('brand/w-mark-blue.png')} style={abs(34, 198)} />
      <div style={{ ...abs(1143, 0), width:777, height:1080, borderLeft:'2px solid #fff', boxSizing:'border-box', background:`url(${A('photos/glasses-case-blue.png')}) center / cover no-repeat` }} />
      <Logo l={164} t={327} />
      <div style={{ ...abs(163.987, 405.25), width:305.026, height:1.5, background:'var(--wr-rule-gradient)' }} />
      <ul style={{ ...abs(164, 433), width:831, margin:0, paddingLeft:33, fontFamily:'var(--font-body)', fontSize:22, lineHeight:'40px' }}>
        {items.map(([b, r]) => <li key={b}><b style={{ fontWeight:700 }}>{b}</b>{r}</li>)}
      </ul>
    </div>
  );
}

/* Frame 16 — journey of five StepCards linked by arrows */
function JourneySlide() {
  const steps = [
    { l:89, t:94, img:'paddock-glasses-handover', cap:'Head to the paddock and receive your smart glasses from a hospitality host' },
    { l:730, t:129, img:'pitlane-glasses-on', cap:"Experience begins with the race engineer's voice welcoming you to the pit lane" },
    { l:1355, t:94, img:'pitlane-hey-williams', cap:'Guided through the pit lane with exclusive insights and fun facts about the team' },
    { l:408, t:589, img:'pitlane-group-glasses', cap:'Stay in the moment while our glasses capture your every move, even live stream to your instagram', bold:true },
    { l:1051, t:589, img:'grandstand-radio', cap:"Feel like you're at the wheel, with real time driver to team radio in your ear" },
  ];
  const arrow = (l, t, r) => <img src={A('svg/flow-arrow.svg')} alt="" style={{ ...abs(l, t), width:131.589, height:68.25, transform:`rotate(${r}deg)` }} />;
  return (
    <div style={frame}>
      <DS.WMark src={A('brand/w-mark-blue.png')} style={abs(34, 198)} />
      <Streaks />
      {steps.map(s => <DS.StepCard key={s.img} imageSrc={A(`photos/${s.img}.png`)} caption={s.cap} bold={s.bold} style={abs(s.l, s.t)} />)}
      {arrow(578, 222, 0)}
      {arrow(1224, 212, -58)}
      {arrow(896, 695, -16)}
      <Logo l={50} t={1003} />
    </div>
  );
}

Object.assign(window, { CoverSlide, OverviewSlide, JourneySlide, WRStreaks: Streaks, WRLogo: Logo, wrFrame: frame, wrAbs: abs, wrA: A });
