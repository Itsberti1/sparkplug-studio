import React from 'react';
/** Photo tile + centered caption, from Frame 16 "Frame 18" (journey steps). */
export function StepCard({ imageSrc, caption = 'Head to the paddock and receive your smart glasses from a hospitality host', bold = false, style }) {
  return (
    <div style={{ width:474.617, display:'flex', flexDirection:'column', alignItems:'center', gap:'var(--space-caption-gap)', ...style }}>
      <div style={{ alignSelf:'stretch', height:266.566, borderRadius:'var(--radius-photo)', boxShadow:'var(--shadow-photo)', background: imageSrc ? `url(${imageSrc}) 50% 50% / cover no-repeat` : 'var(--wr-panel)' }} />
      <span style={{ width:361, fontFamily:'var(--font-body)', fontWeight: bold ? 700 : 400, fontSize:'var(--type-caption-size)', lineHeight:'var(--type-caption-lh)', textAlign:'center', color:'var(--wr-white)', textWrap:'pretty' }}>{caption}</span>
    </div>
  );
}
