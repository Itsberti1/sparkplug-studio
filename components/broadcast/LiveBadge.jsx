import React from 'react';
/** LIVE pill — magenta→red gradient, from Frame 79 "Live Status". */
export function LiveBadge({ label = 'LIVE', style }) {
  return (
    <div style={{ position:'relative', width:56, height:38.769, flexShrink:0, ...style }}>
      <div style={{ position:'absolute', left:0.718, top:0, width:55.282, height:38.769, borderRadius:'var(--radius-badge)', background:'var(--wr-live-gradient)' }} />
      <span style={{ position:'absolute', left:0.718, top:0, width:55.282, height:38.769, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-ui)', fontWeight:600, fontSize:'var(--type-ui-badge-size)', lineHeight:'100%', color:'var(--wr-white)' }}>{label}</span>
    </div>
  );
}
