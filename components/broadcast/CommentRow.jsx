import React from 'react';
/** Live-chat comment: 50px avatar disc + name + message, from Frame 79 "Frame 100". */
export function CommentRow({ name = 'Immy Bewes', message = '🏁🏆🏅', avatarSrc, style }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-start', gap:12, width:214, height:50, ...style }}>
      <div style={{ width:50, height:50, borderRadius:'50%', flexShrink:0, background: avatarSrc ? `url(${avatarSrc}) center / cover` : 'var(--wr-grey-200)' }} />
      <div style={{ display:'flex', flexDirection:'column', gap:4, minWidth:0 }}>
        <span style={{ fontFamily:'var(--font-ui)', fontWeight:500, fontSize:'var(--type-ui-name-size)', lineHeight:'100%', color:'var(--wr-white)', whiteSpace:'nowrap' }}>{name}</span>
        <span style={{ fontFamily:'var(--font-ui)', fontWeight:500, fontSize:18, lineHeight:'100%', color:'var(--wr-white)', whiteSpace:'nowrap' }}>{message}</span>
      </div>
    </div>
  );
}
