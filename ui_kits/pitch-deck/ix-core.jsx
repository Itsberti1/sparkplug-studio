/* Interactive deck core: slide context, presenter build steps, parallax, lap HUD. */
const IXDS = window.WilliamsRacingAIExperienceDesignSystem_1388e9;
const IXA = (p) => (window.WR_ASSETS || '../../assets/') + p;
const IXCtx = React.createContext({ active:false, index:0, prev:0, total:11, step:0 });

window.__wrIX = window.__wrIX || { current:0, prev:0, handlers:{} };
const IX = window.__wrIX;

if (!IX.bound) {
  IX.bound = true;
  const deck = () => document.querySelector('deck-stage');
  const syncFromDom = () => {
    const secs = [...document.querySelectorAll('deck-stage > section')];
    const i = secs.findIndex(s => s.hasAttribute('data-deck-active'));
    return i < 0 ? 0 : i;
  };
  document.addEventListener('slidechange', (e) => {
    IX.prev = e.detail.previousIndex ?? IX.current;
    IX.current = e.detail.index;
    Object.values(IX.handlers).forEach(h => h.onChange && h.onChange(IX.current, IX.prev));
  });
  IX.initial = syncFromDom;
  window.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    const h = IX.handlers[IX.current];
    if (!h) return;
    const fwd = ['ArrowRight', 'PageDown', ' ', 'Spacebar', 'ArrowDown'].includes(e.key);
    const back = ['ArrowLeft', 'PageUp', 'ArrowUp'].includes(e.key);
    if ((fwd && h.next && h.next()) || (back && h.back && h.back())) {
      e.preventDefault(); e.stopImmediatePropagation();
    }
  }, true);
  window.addEventListener('beforeprint', () => Object.values(IX.handlers).forEach(h => h.finish && h.finish()));
}

if (!IX.barBound) {
  IX.barBound = true;
  /* Lap bar: animated synchronously on slidechange (before paint) and from the bar's live width, so fast or repeated navigation never flashes or jumps. */
  const runBar = (idx, pv) => {
    const secs = [...document.querySelectorAll('deck-stage > section')];
    const el = secs[idx] && secs[idx].querySelector('.ix-lapbar');
    const last = IX.bar;
    let from = null;
    if (last && last.anim && last.anim.playState === 'running') from = getComputedStyle(last.el).width;
    if (last && last.anim) last.anim.cancel();
    IX.bar = null;
    if (!el || !el.animate) return;
    const laps = secs.length - 1;
    const to = el.style.width || (Math.max(0, idx) / laps * 100) + '%';
    if (!from) from = (Math.max(0, pv) / laps * 100) + '%';
    if (pv === idx && !last) return;
    IX.bar = { el, anim: el.animate([{ width: from }, { width: to }], { duration:1400, easing:'cubic-bezier(.22,.8,.2,1)', fill:'backwards' }) };
  };
  document.addEventListener('slidechange', (e) => runBar(e.detail.index, e.detail.previousIndex ?? e.detail.index));
}

/* Wraps one slide: tracks active state, build steps, and pointer parallax (--mx/--my). */
function IXSlide({ index, total = 11, steps = 0, onStep, children, style, className = '', hud = true, field = true, hudFinal = false }) {
  const [active, setActive] = React.useState(false);
  const [prev, setPrev] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const [nonce, setNonce] = React.useState(0);
  const ref = React.useRef(null);
  const stepRef = React.useRef(0); stepRef.current = step;

  React.useEffect(() => {
    const apply = (cur, pv) => {
      const isA = cur === index;
      setActive(isA); setPrev(pv);
      if (isA) { setStep(pv > index ? steps : 0); setNonce(n => n + 1); }
    };
    IX.handlers[index] = {
      onChange: apply,
      next: () => { if (stepRef.current < steps) { setStep(s => s + 1); return true; } return false; },
      back: () => { if (stepRef.current > 0) { setStep(s => s - 1); return true; } return false; },
      finish: () => setStep(steps),
    };
    const init = IX.initial ? IX.initial() : 0;
    IX.current = init; apply(init, init);
    return () => { delete IX.handlers[index]; };
  }, [index, steps]);

  React.useEffect(() => { onStep && onStep(step); }, [step]);

  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    el.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  };
  const onLeave = () => { const el = ref.current; if (el) { el.style.setProperty('--mx', 0); el.style.setProperty('--my', 0); } };

  return (
    <IXCtx.Provider value={{ active, index, prev, total, step, setStep, nonce }}>
      <div ref={ref} className={`ix-slide ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}
        style={{ position:'relative', width:1920, height:1080, overflow:'hidden', background:'var(--wr-night)', color:'#fff', '--mx':0, '--my':0, ...style }}>
        {field && <CrossField />}
        {children}
        {hud && <LapHUD final={hudFinal} />}
      </div>
    </IXCtx.Provider>
  );
}

/* Decorative + / × lattice (Williams brand pattern): four arms with an open centre. Hover rotates 45°, un-hover returns. */
const CROSS_ARMS = 'M17 0V12.6M17 21.4V34M0 17H12.6M21.4 17H34';
function CrossField({ gap = 240, size = 34 }) {
  const [rot, setRot] = React.useState({});
  const marks = [];
  for (let y = gap / 2, r = 0; y < 1080; y += gap / 2, r++) {
    for (let x = (r % 2 ? gap : gap / 2); x < 1920; x += gap) marks.push({ x, y, plus: r % 2 === 1 });
  }
  return (
    <div aria-hidden="true" style={{ position:'absolute', inset:0, zIndex:0 }}>
      {marks.map((m, i) => {
        const turned = !!rot[i];
        return (
          <div key={i} className="ix-cross" onMouseEnter={() => setRot(s => ({ ...s, [i]: true }))} onMouseLeave={() => setRot(s => ({ ...s, [i]: false }))}
            style={{ position:'absolute', left:m.x - size, top:m.y - size, width:size * 2, height:size * 2, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width={size} height={size} viewBox="0 0 34 34" style={{ display:'block', transform:`rotate(${(m.plus ? 0 : 45) + (turned ? 45 : 0)}deg)`, transition:'transform .7s cubic-bezier(.2,.8,.2,1)' }}>
              <path d={CROSS_ARMS} stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

/* Parallax layer: depth in px at the viewport edge. Negative = moves against pointer. */
function PX({ depth = 12, l = 0, t = 0, style, children }) {
  return <div className="ix-px" style={{ position:'absolute', left:l, top:t, '--depth':depth + 'px', ...style }}>{children}</div>;
}

/* Build-in wrapper — animation plays whenever the slide becomes active (keyed by nonce). */
function B({ fx = 'up', d = 0, show = true, style, className = '', children, ...rest }) {
  const { nonce } = React.useContext(IXCtx);
  return (
    <div key={nonce} className={`ix ix-${fx} ${show ? '' : 'ix-hidden'} ${className}`} style={{ '--d':d + 'ms', ...style }} {...rest}>{children}</div>
  );
}

/* Lap-style progress: sector track across the bottom edge + LAP nn / nn. */
function LapHUD({ final = false }) {
  const { active, index, prev, total } = React.useContext(IXCtx);
  const barRef = React.useRef(null);
  const OFF = 1, laps = total - OFF;
  const pct = (i) => Math.max(0, (i - OFF + 1) / laps) * 100;
  const n = (v) => String(v).padStart(2, '0');
  return (
    <div aria-hidden="true" className="ix-hud" style={{ position:'absolute', left:0, right:0, bottom:0, height:64, visibility:'visible', pointerEvents:'none', zIndex:50 }}>
      <div className={final ? 'ix-hud-out' : ''} style={{ position:'absolute', inset:0 }}><div style={{ position:'absolute', right:0, bottom:0, width:420, height:150, background:'radial-gradient(100% 100% at 100% 100%, rgba(10,12,20,0.85) 0%, rgba(10,12,20,0.55) 45%, rgba(10,12,20,0) 100%)' }} />
      <div style={{ position:'absolute', right:48, bottom:22, display:'flex', alignItems:'baseline', gap:10, fontFamily:'"Space Grotesk", sans-serif', color:'#fff', textShadow:'0 1px 12px rgba(0,0,0,0.6)' }}>
        <span style={{ fontSize:13, fontWeight:500, letterSpacing:'0.18em', color:'rgba(255,255,255,0.7)' }}>LAP</span>
        <span style={{ fontSize:24, fontWeight:500, letterSpacing:'0.02em', fontVariantNumeric:'tabular-nums' }}>{n(index + 1 - OFF)}</span>
        <span style={{ fontSize:16, fontWeight:300, color:'rgba(255,255,255,0.7)', fontVariantNumeric:'tabular-nums' }}>/ {n(laps)}</span>
      </div>
      </div>
      <div style={{ position:'absolute', left:0, right:0, bottom:0, height:5, background:'rgba(255,255,255,0.1)' }}>
        <div ref={barRef} className={final ? 'ix-lapbar is-final' : 'ix-lapbar'} style={{ position:'absolute', left:0, top:0, bottom:0, width:`${pct(index)}%`, background:'linear-gradient(90deg, rgba(0,66,255,0) 0%, #0042FF 35%, #0068DF 70%, rgb(31,199,255) 100%)', boxShadow:'0 0 18px rgba(31,199,255,0.7), 0 0 6px rgba(0,104,223,1)', borderRadius:'0 5px 5px 0' }}>
          <div className="ix-lapwhite" style={{ position:'absolute', inset:0, borderRadius:'inherit', opacity:0, background:'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, #fff 100%)' }} />
          <div className="ix-carglow" style={{ position:'absolute', right:-2, bottom:9, width:62, height:13, filter:'drop-shadow(0 0 4px rgba(31,199,255,0.95)) drop-shadow(0 0 10px rgba(0,104,223,0.8))' }}>
            <div className="ix-car" style={{ width:'100%', height:'100%', background:'rgb(31,199,255)', WebkitMask:`url(assets/f1-car.png) center / contain no-repeat`, mask:`url(assets/f1-car.png) center / contain no-repeat` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Pull-out drawer: an F1-style tab peeks from the frame edge (right or left); click slides a glass card out. */
function IXDrawer({ side = 'right', top = 120, width = 580, eyebrow, meta, title, chips = [], wave = false, aside, locked = false, content, middle, bottom, handleLift = 84, bare = false, children }) {
  const { active } = React.useContext(IXCtx);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { if (!active) setOpen(false); }, [active]);
  const W = width + 40, R = side === 'right';
  if (locked) return (
    <div style={{ position:'absolute', [side]:0, top, zIndex:30, display:'flex' }}>
      <button type="button" aria-label={eyebrow} aria-disabled="true" onClick={(e) => e.stopPropagation()} className={`ix-handle ${R ? 'is-r' : 'is-l'} is-peek`}
        style={{ marginTop:36, height:136, border:0, padding:0, cursor:'pointer', borderRadius: R ? '14px 0 0 14px' : '0 14px 14px 0', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16, flexShrink:0 }}>
        <svg width="14" height="22" viewBox="0 0 14 22" style={{ display:'block', transform:`rotate(${R ? 0 : 180}deg)` }}><path d="M10 3 L3 11 L10 19" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <div style={{ display:'flex', flexDirection:'column', gap:5 }}>{[0, 1, 2].map(i => <span key={i} className="ix-hstripe" style={{ '--i':i }} />)}</div>
      </button>
    </div>
  );
  const edge = R ? '24px 0 0 24px' : '0 24px 24px 0';
  return (
    <React.Fragment>
    <div aria-hidden="true" onClick={(e) => { e.stopPropagation(); setOpen(false); }} style={{ position:'absolute', inset:0, zIndex:18, background:'rgba(6,8,14,0.46)', backdropFilter:'blur(4px)', WebkitBackdropFilter:'blur(4px)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition:'opacity .7s cubic-bezier(.3,.7,.3,1)' }} />
    {aside && <div aria-hidden="true" className={open ? 'is-open' : ''} style={{ position:'absolute', inset:0, zIndex:25, pointerEvents:'none', opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(10px)', transition: open ? 'opacity 1s ease .3s, transform 1.1s cubic-bezier(.2,.8,.2,1) .3s' : 'opacity .5s ease, transform .5s ease' }}>{aside}</div>}
    <div onClick={(e) => e.stopPropagation()} style={{ position:'absolute', [side]:0, ...(bottom != null ? { bottom } : { top: middle ?? top }), zIndex:30, display:'flex', flexDirection: R ? 'row' : 'row-reverse', alignItems: bottom != null ? 'flex-end' : middle != null ? 'center' : 'flex-start', transform:`translateX(${open ? 0 : (R ? W : -W)}px)${middle != null ? ' translateY(-50%)' : ''}`, transition:'transform .8s cubic-bezier(.2,.85,.2,1)' }}>
      <button type="button" aria-expanded={open} aria-label={eyebrow} onClick={() => setOpen(o => !o)} className={`ix-handle ${R ? 'is-r' : 'is-l'} ${open ? '' : 'is-peek'}`}
        style={{ marginTop: middle != null || bottom != null ? 0 : 36, marginBottom: bottom != null ? handleLift : 0, height:136, border:0, padding:0, cursor:'pointer', borderRadius: R ? '14px 0 0 14px' : '0 14px 14px 0', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16, flexShrink:0 }}>
        <svg width="14" height="22" viewBox="0 0 14 22" style={{ display:'block', transform:`rotate(${(open ? 180 : 0) + (R ? 0 : 180)}deg)`, transition:'transform .6s cubic-bezier(.2,.85,.2,1)' }}><path d="M10 3 L3 11 L10 19" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <div style={{ display:'flex', flexDirection:'column', gap:5 }}>{[0, 1, 2].map(i => <span key={i} className="ix-hstripe" style={{ '--i':i }} />)}</div>
      </button>
      {bare ? <div style={{ width:W, boxSizing:'border-box', padding: R ? '0 22px 0 0' : '0 0 0 22px', flexShrink:0 }}><div style={{ padding:9, borderRadius:'calc(var(--radius-photo) + 9px)', background:'linear-gradient(180deg,rgba(44,49,64,.88),rgba(24,27,38,.88))', backdropFilter:'var(--glass-blur)', WebkitBackdropFilter:'var(--glass-blur)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,.12), 0 30px 70px rgba(0,0,0,.45)' }}>{typeof content === 'function' ? content(open) : content}</div></div> :
      <div style={{ width:W, boxSizing:'border-box', padding:'54px 60px 46px', borderRadius:edge, background:'rgba(10,12,20,0.74)', backdropFilter:'blur(24px) saturate(1.2)', WebkitBackdropFilter:'blur(24px) saturate(1.2)', boxShadow:`inset ${R ? 1 : -1}px 0 0 rgba(255,255,255,0.18), inset 0 1px 0 rgba(255,255,255,0.1), ${R ? -24 : 24}px 30px 80px rgba(0,0,0,0.5)`, fontFamily:'var(--font-body)', color:'#fff', display:'flex', flexDirection:'column', gap:0 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontSize:16, fontWeight:500, letterSpacing:'0.16em', color:'rgb(31,199,255)' }}>{eyebrow}</span>
          <span style={{ fontSize:16, fontWeight:400, letterSpacing:'0.04em', color:'rgba(255,255,255,0.7)' }}>{meta}</span>
        </div>
        <h3 style={{ margin:'26px 0 0', fontFamily:'var(--font-display)', fontWeight:500, fontSize:46, lineHeight:'52px', letterSpacing:'-0.015em', textWrap:'balance' }}>{title}</h3>
        <span style={{ display:'block', width:120, height:1.5, margin:'26px 0 26px', background:'var(--wr-rule-gradient)' }} />
        {content || <p style={{ margin:0, fontSize:24, fontWeight:300, lineHeight:'37px', color:'rgba(255,255,255,0.86)', textWrap:'pretty' }}>{children}</p>}
        <div style={{ display:'flex', alignItems:'center', gap:10, marginTop:36, paddingTop:26, borderTop:'1px solid rgba(255,255,255,0.1)' }}>
          {chips.map(n => (
            <div key={n} style={{ display:'flex', alignItems:'center', gap:12, padding: wave ? '10px 18px 10px 14px' : '10px 18px', borderRadius:999, background:'rgba(255,255,255,0.07)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.14)' }}>
              {wave && <div style={{ display:'flex', alignItems:'center', gap:3, height:20 }}>{[0, 1, 2, 3].map(i => <span key={i} className={open ? 'ix-bar is-on' : 'ix-bar'} style={{ '--i':i, width:2.5, background:'rgb(31,199,255)' }} />)}</div>}
              <span style={{ fontSize:18, fontWeight:500, whiteSpace:'nowrap' }}>{n}</span>
            </div>
          ))}
          <img src={IXA('logo/williams-wordmark-white.png')} alt="Williams Racing" style={{ marginLeft:'auto', height:18, width:'auto', opacity:0.34, display:'block' }} />
        </div>
      </div>}
    </div>
    </React.Fragment>
  );
}

function IXLogo({ l, t, d = 0 }) {
  return <B fx="fade" d={d} style={{ position:'absolute', left:l, top:t + 3 }}><IXDS.WilliamsLogo src={IXA('logo/williams-wordmark-white.png')} width={210} /></B>;
}

Object.assign(window, { IXDrawer, CrossField, IXCtx, IXSlide, PX, B, LapHUD, IXLogo, IXA, IXDS });
