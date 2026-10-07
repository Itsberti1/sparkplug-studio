import React from 'react';
/** Raised dark panel with centered heading + body, from Frame 82 "Why us". */
export function PanelCard({ title = 'Bespoke AI software', children = 'We design and build the complete Williams experience, including the AI character, paddock journey, sponsor integrations, personalised interactions and automated highlight recap software.', width = 584, height = 435, style }) {
  return (
    <div style={{ width, height, boxSizing:'border-box', borderRadius:'var(--radius-card)', background:'var(--wr-panel)', boxShadow:'var(--shadow-card)', padding:'70px 40px', display:'flex', flexDirection:'column', alignItems:'center', ...style }}>
      <p style={{ margin:0, fontFamily:'var(--font-body)', fontWeight:400, fontSize:'var(--type-card-size)', lineHeight:'var(--type-card-lh)', textAlign:'center', color:'var(--wr-white)', textWrap:'pretty' }}>
        {title}<br /><br />{children}
      </p>
    </div>
  );
}
