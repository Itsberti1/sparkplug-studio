import React from 'react';
const EYE = "M 8.281 3.313 C 8.189 3.572 8.139 3.85 8.139 4.139 C 8.139 5.511 9.251 6.622 10.623 6.622 C 11.347 6.622 11.999 6.312 12.453 5.817 C 12.869 6.542 13.106 7.382 13.106 8.278 C 13.106 11.021 10.882 13.245 8.139 13.245 C 5.396 13.245 3.173 11.021 3.173 8.278 C 3.173 5.633 5.24 3.471 7.847 3.32 L 8.139 3.311 C 8.187 3.311 8.234 3.312 8.281 3.313 Z M 8.139 0 C 11.59 0 14.689 1.937 16.235 4.933 L 16.406 5.284 L 14.904 5.979 C 13.693 3.365 11.071 1.656 8.139 1.656 C 5.417 1.656 2.958 3.128 1.65 5.442 L 1.479 5.763 L 0 5.019 C 1.535 1.968 4.661 0 8.139 0 Z";
/** Translucent chip with eye glyph + count, from Frame 79. */
export function ViewerCount({ count = '140K', style }) {
  return (
    <div style={{ width:94, height:39, boxSizing:'border-box', borderRadius:'var(--radius-chip)', background:'var(--wr-chip)', padding:'8px 15px 9px 15px', display:'flex', alignItems:'center', gap:5, ...style }}>
      <svg width="16.406" height="13.244" viewBox="0 0 16.406 13.244" style={{ flexShrink:0, color:'var(--wr-white)' }}><path d={EYE} fill="currentColor" fillRule="evenodd" /></svg>
      <span style={{ fontFamily:'var(--font-ui)', fontWeight:400, fontSize:'var(--type-ui-count-size)', lineHeight:'100%', color:'var(--wr-white)', whiteSpace:'nowrap' }}>{count}</span>
    </div>
  );
}
