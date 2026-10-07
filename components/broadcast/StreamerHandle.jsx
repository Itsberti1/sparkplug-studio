import React from 'react';
const STAR = "M 10.383 0.305 C 10.669 -0.102 11.272 -0.102 11.558 0.305 L 12.858 2.149 C 13.058 2.433 13.432 2.534 13.747 2.388 L 15.795 1.44 C 16.246 1.231 16.768 1.532 16.813 2.028 L 17.016 4.275 C 17.047 4.621 17.321 4.895 17.667 4.926 L 19.914 5.129 C 20.409 5.174 20.71 5.695 20.501 6.147 L 19.554 8.194 C 19.408 8.509 19.508 8.884 19.792 9.084 L 21.637 10.383 C 22.043 10.669 22.043 11.272 21.637 11.558 L 19.792 12.858 C 19.508 13.058 19.408 13.432 19.554 13.747 L 20.501 15.795 C 20.71 16.246 20.409 16.768 19.914 16.813 L 17.667 17.016 C 17.321 17.047 17.047 17.321 17.016 17.667 L 16.813 19.914 C 16.768 20.409 16.246 20.71 15.795 20.501 L 13.747 19.554 C 13.432 19.408 13.058 19.508 12.858 19.792 L 11.558 21.637 C 11.272 22.043 10.669 22.043 10.383 21.637 L 9.084 19.792 C 8.884 19.508 8.509 19.408 8.194 19.554 L 6.147 20.501 C 5.695 20.71 5.174 20.409 5.129 19.914 L 4.926 17.667 C 4.895 17.321 4.621 17.047 4.275 17.016 L 2.028 16.813 C 1.532 16.768 1.231 16.246 1.44 15.795 L 2.388 13.747 C 2.534 13.432 2.433 13.058 2.149 12.858 L 0.305 11.558 C -0.102 11.272 -0.102 10.669 0.305 10.383 L 2.149 9.084 C 2.433 8.884 2.534 8.509 2.388 8.194 L 1.44 6.147 C 1.231 5.695 1.532 5.174 2.028 5.129 L 4.275 4.926 C 4.621 4.895 4.895 4.621 4.926 4.275 L 5.129 2.028 C 5.174 1.532 5.695 1.231 6.147 1.44 L 8.194 2.388 C 8.509 2.534 8.884 2.433 9.084 2.149 L 10.383 0.305 Z";
/** Avatar + handle + verified badge, from Frame 79 header. */
export function StreamerHandle({ handle = 'lily_andrews', avatarSrc, verified = true, style }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:16, height:48, ...style }}>
      <div style={{ width:48, height:48, borderRadius:'50%', flexShrink:0, background: avatarSrc ? `url(${avatarSrc}) 0% -0.891% / 120.833% 181.856% no-repeat` : 'var(--wr-grey-200)' }} />
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <span style={{ fontFamily:'var(--font-ui)', fontWeight:590, fontSize:18, lineHeight:1, color:'var(--wr-white)', whiteSpace:'nowrap' }}>{handle}</span>
        {verified && (
          <div style={{ position:'relative', width:23, height:23, overflow:'hidden', borderRadius:2.3, flexShrink:0 }}>
            <svg width="21.941" height="21.941" viewBox="0 0 21.941 21.941" style={{ position:'absolute', left:0, top:0, transform:'matrix(0.961,-0.276,0.276,0.961,-2.070,3.978)', transformOrigin:'0 0', color:'var(--wr-white)' }}><path d={STAR} fill="currentColor" /></svg>
            <svg width="9.641" height="7.275" viewBox="0 0 9.641 7.275" style={{ position:'absolute', left:6.679, top:8.118 }}><path d="M 9.641 1.016 L 3.383 7.275 L 0 3.891 L 1.016 2.875 L 3.383 5.242 L 8.625 0 L 9.641 1.016 Z" fill="rgba(0,0,0,0.5)" fillRule="evenodd" /></svg>
          </div>
        )}
      </div>
    </div>
  );
}
