import React from 'react';
const glass = { background:'var(--glass-fill)', backdropFilter:'var(--glass-blur)', WebkitBackdropFilter:'var(--glass-blur)', boxShadow:'var(--glass-shadow)', borderRadius:'var(--radius-glass)', boxSizing:'border-box', flexShrink:0 };
/** Voice button: 58.267 glass disc with a five-bar waveform (short · tall · mid · tall · short). */
const BARS = [16, 28, 22, 28, 19];
export function GlassVoiceButton({ style }) {
  return (
    <div style={{ ...glass, width:58.267, height:58.267, display:'flex', alignItems:'center', justifyContent:'center', ...style }}>
      <div style={{ display:'flex', alignItems:'center', gap:6.474062919616699, height:28 }}>
        {BARS.map((h, i) => <span key={i} style={{ width:2.6, height:h, background:'var(--wr-white)', borderRadius:1.3, flexShrink:0 }} />)}
      </div>
    </div>
  );
}
/** Liquid-glass voice prompt ("Hey Williams, …") from Frame 18. */
export function GlassPrompt({ text = 'Hey Williams, why are you using soft tyres?', side = 'right', tilt = 0, style }) {
  const bubble = (
    <div style={{ ...glass, width:346.362, height:124.086, padding:'23.738px 28.054px 24.817px 28.054px', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <span style={{ width:290.254, fontFamily:'var(--font-ui-compact)', fontWeight:457, fontSize:'var(--type-prompt-size)', lineHeight:'var(--type-prompt-lh)', color:'var(--wr-white)' }}>{text}</span>
    </div>
  );
  return (
    <div style={{ display:'flex', alignItems:'flex-start', gap:'var(--space-glass-gap)', transform: tilt ? `rotate(${tilt}deg)` : undefined, transformOrigin:'0 0', ...style }}>
      {side === 'left' && <GlassVoiceButton />}
      {bubble}
      {side === 'right' && <GlassVoiceButton />}
    </div>
  );
}
