/* Interactive slides — Cover (Frame 2), Overview (Frame 3), Journey (Frame 16). Copy verbatim from Figma. */

function IXStreaks({ d = 200 }) {
  return (
    <PX depth={-28} l={0} t={0} style={{ width:1920, height:1080, pointerEvents:'none' }}>
      <B fx="streak" d={d} style={{ position:'absolute', left:0, top:0, width:1920, height:1080 }}>
        <div style={{ position:'absolute', left:0, top:0, width:1536, height:1024, transform:'matrix(-0.997,0.079,-0.079,-0.997,2491.426,1609.770)', transformOrigin:'0 0', background:`url(${IXA('brand/speed-streaks.png')}) center / cover no-repeat` }} />
      </B>
    </PX>
  );
}
function IXWMark({ d = 0 }) {
  return (
    <B fx="fade" d={d} style={{ position:'absolute', left:24, top:188.5, width:1235, height:703.6, background:`url(${IXA('brand/w-mark-dark.png')}) center / contain no-repeat`, pointerEvents:'none' }} />
  );
}

function IXCoverSlide({ index }) {
  return (
    <IXSlide index={index} style={{ background:'var(--wr-night-2)' }}>
      <B fx="push" style={{ position:'absolute', inset:0, background:`url(${IXA('photos/pitlane-hey-williams.png')}) center / cover no-repeat` }} />
      <div aria-hidden="true" style={{ position:'absolute', right:0, top:0, width:620, height:260, background:'radial-gradient(100% 100% at 100% 0%, rgba(10,12,20,0.8) 0%, rgba(10,12,20,0.5) 45%, rgba(10,12,20,0) 100%)', pointerEvents:'none', zIndex:19 }} />
      <div aria-hidden="true" style={{ position:'absolute', left:0, bottom:0, width:1100, height:420, background:'radial-gradient(100% 100% at 0% 100%, rgba(10,12,20,0.78) 0%, rgba(10,12,20,0.4) 45%, rgba(10,12,20,0) 100%)', pointerEvents:'none', zIndex:19 }} />
      <B fx="left" d={1300} style={{ position:'absolute', left:164, bottom:214, zIndex:20, display:'flex', alignItems:'center', gap:26, pointerEvents:'none' }}>
        <div style={{ display:'flex', alignItems:'center', gap:2 }}>
          {[0, 1, 2].map(i => (
            <svg key={i} className="ix-chev" width="16" height="24" viewBox="0 0 16 24" style={{ '--i':i, display:'block' }}><path d="M3 3 L12 12 L3 21" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          ))}
        </div>
        <span style={{ fontFamily:'var(--font-display)', fontSize:26, fontWeight:500, letterSpacing:'0.3em', color:'#fff', textShadow:'0 2px 16px rgba(0,0,0,0.5)' }}>WELCOME TO THE PADDOCK</span>
      </B>
      <div style={{ position:'absolute', left:164, bottom:112, zIndex:20 }}><VoicePlayer className="ix-glass-in" /></div>
      <IXDrawer side="right" eyebrow="VOICE CLONING" meta="Powered by ElevenLabs" title={<React.Fragment>Hear exactly what<br />the drivers hear.</React.Fragment>} chips={['James Urwin', 'Gaëtan Jago']} wave aside={<SilverstoneMap />}>With ElevenLabs voice synthesis and advanced audio processing, we can create fully personalised digital replicas of James Urwin’s and Gaëtan Jago’s voices. Race-engineer-grade audio goes straight into each guest’s ear, so the pit lane sounds as close as it gets to what drivers hear mid-race.</IXDrawer>
    </IXSlide>
  );
}

/* Silverstone outline: centripetal Catmull-Rom through traced anchors (no overshoot), drawn in race direction from the start line. Telemetry: turns, sectors, DRS, speed zones. */
const SILVERSTONE_D = 'M516.6 19.1C562.4 50.7 855.1 276.3 900.6 311.9C910.5 319.7 913.4 321.3 918.6 326.4C923.2 330.9 927.2 335.6 930.4 340.6C933.4 345.3 935.6 350.8 937.4 355.6C938.9 359.8 939.8 362.7 940.7 367.6C942.1 375.3 943.3 386.4 943.4 397.6C943.6 411.7 941.9 426.9 940.3 445.6C938 472.1 929.9 517.9 929.6 541.6C929.4 555.5 930.5 564.2 932.3 574.6C933.9 584.1 936.3 593 939.4 601.6C942.4 610 946.8 618.6 950.6 625.6C953.7 631.3 954.8 633.2 960.1 640.6C977.4 664.9 1064.4 764.3 1080.3 790.6C1085.4 799 1086.9 803.5 1088.1 808.6C1088.9 812 1089.2 814.3 1088.7 817.6C1088.1 821.9 1085.8 828.4 1083.3 832.1C1081.2 835.1 1078.9 836.8 1075.6 838.9C1071 841.8 1065.9 843.6 1057.6 846.6C1040 852.9 986.9 865.1 973.6 871.1C969.1 873.1 967.6 873.8 965.1 876.4C962 879.6 958.5 885.1 957.3 889.6C956.3 893.5 956.8 898 957.6 901.6C958.3 904.9 960 908.1 961.6 910.6C962.9 912.8 963.9 914.1 966 916.1C969.3 919.2 974.2 922.8 980.6 926.3C990.8 931.9 1008.2 939 1022.6 943.6C1037.2 948.2 1053.1 951.6 1067.6 953.9C1081 956.1 1093.9 957.3 1106.6 957.6C1118.8 957.9 1133.9 957.3 1142.6 955.7C1147.7 954.8 1150.7 953.8 1154.6 951.9C1158.8 949.9 1162.6 947 1166.6 943.7C1171.4 939.8 1173.3 937.6 1181 929.6C1217.8 891.5 1409 679.8 1490 590.6C1542.7 532.5 1599 471.9 1620.3 446.6C1627.6 437.9 1630.7 434.1 1634.4 428.6C1637.2 424.3 1639.2 420.7 1641 416.6C1642.8 412.7 1644.2 409.5 1645.3 404.6C1646.9 397.5 1648 385.3 1648 377.6C1648 371.9 1647.3 367.3 1646.4 362.6C1645.6 358.3 1644.6 354.3 1643.3 350.6C1642.1 347.3 1640.8 344.4 1639 341.6C1637.2 338.7 1634.9 335.7 1632.3 333.4C1629.7 331.1 1626.6 329.1 1623.6 327.7C1620.7 326.4 1619.1 326 1614.6 325C1602.1 322.4 1558.6 318.7 1542.6 315.9C1534.6 314.5 1530.5 313.9 1524.6 311.9C1518.5 309.8 1511.3 306.7 1506.6 303.6C1503.1 301.3 1500.9 299 1498.4 296.3C1495.9 293.6 1493.7 290.8 1491.7 287.6C1489.5 284 1487.3 279.4 1485.9 275.6C1484.8 272.4 1484.1 270.3 1483.7 266.6C1483.1 261.1 1483.1 251.1 1483.9 245.6C1484.4 241.9 1485.2 239.8 1486.4 236.6C1487.9 232.8 1490.1 228.2 1492.4 224.6C1494.4 221.4 1496.6 218.6 1499.1 216C1501.6 213.4 1504.4 211.1 1507.6 208.9C1511.2 206.5 1515.3 204 1519.6 202.4C1524.2 200.7 1529.6 199.5 1534.6 199.1C1539.6 198.7 1544.6 199 1549.6 199.7C1554.6 200.4 1558.1 201 1564.6 203.4C1578.6 208.5 1607.4 223.6 1627.6 234.9C1647.4 246 1669.8 260.3 1684.6 270.6C1694.5 277.5 1701.3 282.9 1708.6 289C1715.2 294.5 1719.3 298.3 1726.6 305.6C1739.2 318.3 1763.7 343.8 1776.1 359.6C1784.8 370.7 1790.7 379.6 1796.3 389.6C1801.4 398.6 1805.7 408.8 1808.7 416.6C1810.9 422.2 1812.1 426.3 1813.3 431.6C1814.6 437.3 1815.1 440.8 1816.3 449.6C1819.7 474 1827.7 543.8 1832.3 587.6C1836.5 627.4 1839.6 659.6 1843 701.6C1847.2 753.5 1855.9 842.8 1855.1 875.6C1854.8 888.5 1853.9 894.6 1851.9 902.6C1850.2 909.3 1848.2 914.8 1844.9 920.6C1841.3 926.9 1836.4 932.4 1830.6 938.6C1823.3 946.4 1813.2 955.8 1803.6 963C1794.2 970.1 1784 975.8 1773.6 981.4C1763 987.1 1751.7 992.3 1740.6 996.7C1729.7 1000.9 1719.7 1003.9 1707.6 1007.3C1693.2 1011.3 1677.9 1014.7 1659.6 1018.6C1635.5 1023.8 1597.2 1031.4 1575.6 1034.9C1562.1 1037.1 1556.4 1038 1542.6 1039.3C1519.5 1041.5 1481.3 1043.4 1449.6 1045C1416.4 1046.7 1372.2 1047 1347.6 1049C1333.5 1050.1 1326.2 1050.6 1314.6 1053C1301.3 1055.7 1286.9 1059.4 1272.6 1065.4C1256.1 1072.3 1234.5 1088.4 1221.6 1093.6C1214.3 1096.5 1209.7 1097.5 1203.6 1098.3C1197.6 1099.1 1191.6 1098.9 1185.6 1098.4C1179.6 1097.9 1175.5 1097.4 1167.6 1095.3C1151.5 1091 1113.9 1074.7 1095.6 1068.9C1084.5 1065.4 1077.7 1063.3 1068.6 1061.6C1059.7 1059.9 1049.7 1058.7 1041.6 1058.6C1035 1058.5 1029.6 1059 1023.6 1060.1C1017.5 1061.2 1011.2 1062.9 1005.6 1065.1C1000.3 1067.2 996.6 1069.1 990.6 1072.9C980.4 1079.4 961.7 1096 951.6 1102.7C945.6 1106.6 941.7 1108.9 936.6 1111.1C931.7 1113.2 926.9 1114.6 921.6 1115.6C916 1116.6 907.4 1116.8 904 1116.9C902.6 1117 902.4 1117 901.1 1116.9C898.1 1116.7 891.4 1116.1 886.6 1115C881.6 1113.8 876.2 1112.1 871.6 1110C867.3 1108.1 863.5 1105.8 859.6 1103.1C855.5 1100.3 852.2 1097.8 847.9 1093.3C841.2 1086.3 832.8 1075.3 824.9 1063.6C814.7 1048.5 802.1 1022.5 793.3 1009.6C788 1001.8 784 996.9 779.1 991.7C774.7 987.1 771.4 984 765.6 979.7C756.7 973.1 748.7 968.6 729.6 957.6C661 918.2 338.8 749.5 249.6 700.4C214.8 681.3 205 676.6 177.6 659.7C139.2 636 66.9 588.8 42.6 568.9C32.6 560.7 27.6 555 23.1 549.6C20.3 546.2 19 544.1 17.1 540.6C14.7 536.3 12.3 531.4 10.3 525.6C7.7 518 5 506.3 4.1 498.6C3.4 492.9 3.7 488.6 4 483.6C4.3 478.6 4.6 474.1 6 468.6C7.8 461.4 11.8 451.1 15 444.6C17.4 439.8 19.7 436.5 22.6 432.6C25.6 428.6 28.5 424.8 32.7 420.9C38.2 415.8 44.7 410.7 53.6 405.3C67.1 397.2 92.8 387.4 107.6 379.9C118.2 374.6 124.5 371.5 134.6 365.4C148.5 357 169 342.9 182.6 333C193.1 325.3 198.4 321.1 209.6 311.6C229.6 294.6 265.1 260.1 290.6 237.7C312.7 218.2 343.3 194.5 353.6 184.3C357.3 180.7 358.8 179.4 360.6 176.3C362.5 172.9 364.3 168.8 364.6 164.6C365 160 363.7 153.8 362.1 149.6C360.8 146.1 359.2 144.1 356.7 140.6C352.5 134.9 342.4 126.4 338.3 119.6C335.2 114.5 333.2 109.9 332.4 104.6C331.6 99 332.2 92.1 334 86.6C335.8 81.2 339.3 76.3 343 71.6C347 66.5 352.4 61.8 357.6 57.1C363.2 52.1 370.1 46.5 375.6 42.4C379.9 39.2 383 37.1 387.6 34.3C393.5 30.8 401.8 26.5 408.6 23.3C414.8 20.4 420.3 17.9 426.6 15.6C433.3 13.1 440.8 10.9 447.6 9.1C453.8 7.5 459.8 5.9 465.6 5.1C470.8 4.3 475.4 3.6 480.6 4C486.4 4.4 492.8 5.5 498.6 7.9C504.8 10.4 507 12.5 516.6 19.1Z';
const SS_T = {"turns":[[1,961,321],[2,966,540],[3,1123,798],[4,991,902],[5,1108,922],[6,1680,349],[7,1520,245],[8,1705,241],[9,1876,938],[10,1286,1099],[11,1186,1134],[12,1066,1098],[13,993,1116],[14,882,1151],[15,-32,484],[16,329,163],[17,302,71],[18,438,-26]],"br":[["M1066 829L1063 813L1050 817L1044 820L1037 822L1030 823L1021 826L1014 828L1006 830L998 832L988 835L979 838L971 840L959 845L944 855L933 870L929 882L929 909L939 929L943 936L953 944L962 950L973 956L981 960L988 963L998 967L1006 970L1013 972L1025 975L1036 978L1044 980L1051 982L1054 966",870,862,"LOW SPEED"],["M1576 334L1573 350L1566 349L1556 348L1543 346L1532 345L1521 342L1508 338L1496 332L1488 327L1468 306L1461 294L1459 288L1454 271L1453 256L1454 246L1458 227L1466 211L1475 198L1490 185L1495 181L1513 173L1530 170L1540 169L1550 170L1567 173L1580 177L1590 182L1601 187L1610 191L1618 195L1628 201L1620 215",1418,205,"LOW SPEED"],["M1398 1033L1397 1017L1378 1017L1359 1018L1337 1020L1317 1022L1297 1026L1277 1032L1253 1041L1235 1052L1219 1061L1211 1066L1198 1069L1187 1069L1171 1065L1155 1059L1137 1052L1119 1046L1101 1039L1076 1032L1057 1030L1026 1030L1009 1033L984 1042L963 1056L949 1067L934 1079L921 1085L917 1086L904 1087L886 1084L878 1080L869 1093",1153,1011,"HIGH SPEED"]],"drs":[["M1164 921L1175 910L1188 895L1200 883L1213 869L1228 853L1243 835L1260 817L1269 807L1287 788L1296 777L1315 757L1324 746L1343 725L1353 715L1372 694L1381 684L1399 664L1408 654L1425 635L1442 617L1449 609L1464 593L1481 574L1496 557L1508 544L1524 527L1539 510L1550 498L1567 479L1579 466",1351,675,"DRS 1"],["M781 1023L767 1005L749 990L728 978L709 967L684 953L664 942L642 930L617 917L591 903L577 895L548 880L534 872L504 857L474 841L459 833L429 817L414 809L385 794L357 779L344 772L319 758L295 746L265 729L241 716L218 703L194 690L170 676L149 663L126 649L107 636",446,857,"DRS 2"]],"sec":[[1474,631,1451,610],[826,1034,798,1049]],"trap":[62,584,37,612],"sf":[535,52,554,26],"sfl":[521,71],"sl":[["S1",1150,560],["S2",1650,700],["S3",520,720]]};
function SilverstoneMap({ l = 140, t = 110, w = 1000 }) {
  const k = w / 1872, h = 1133 * k, P = (v) => (v + 6) * k;
  const lab = { position:'absolute', transform:'translate(-50%,-50%)', whiteSpace:'nowrap', fontFamily:'var(--font-display)', pointerEvents:'none' };
  const vs = { vectorEffect:'non-scaling-stroke', fill:'none' };
  return (
    <div style={{ position:'absolute', left:l, top:t, width:w, height:h }}>
      <svg width={w} height={h} viewBox="-6 -6 1872 1133" style={{ display:'block', overflow:'visible' }}>
        <g className="ix-ss-t" style={{ '--d':'.9s' }}>
          {SS_T.br.map(([d]) => <path key={d} d={d} stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinejoin="round" style={vs} />)}
          {SS_T.drs.map(([d]) => <path key={d} d={d} stroke="rgba(31,199,255,0.45)" strokeWidth="1.3" strokeDasharray="2 5" strokeLinecap="round" style={vs} />)}
        </g>
        <path d={SILVERSTONE_D} pathLength="1000" fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="3.2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        <path d={SILVERSTONE_D} pathLength="1000" fill="none" stroke="rgba(0,104,223,0.55)" strokeWidth="3.2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="ix-ss-glow" />
        <g className="ix-ss-t" style={{ '--d':'.7s' }}>
          {SS_T.sec.map((s, i) => <line key={i} x1={s[0]} y1={s[1]} x2={s[2]} y2={s[3]} stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" style={vs} />)}
          <line x1={SS_T.sf[0]} y1={SS_T.sf[1]} x2={SS_T.sf[2]} y2={SS_T.sf[3]} stroke="#fff" strokeWidth="2" style={vs} />
          <circle cx={SS_T.trap[0]} cy={SS_T.trap[1]} r="9" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" style={{ ...vs, fill:'var(--wr-night)' }} />
        </g>
        <path d={SILVERSTONE_D} pathLength="1000" fill="none" stroke="rgb(31,199,255)" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="ix-ss-pulse" />
        <path d={SILVERSTONE_D} pathLength="1000" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="ix-ss-pulse is-core" />
      </svg>
      <div className="ix-ss-t" style={{ '--d':'.8s', position:'absolute', inset:0 }}>
        {SS_T.turns.map(([n, x, y]) => <span key={n} style={{ ...lab, left:P(x), top:P(y), fontSize:13, fontWeight:500, color:'rgba(255,255,255,0.55)', fontVariantNumeric:'tabular-nums' }}>{n}</span>)}
        {SS_T.br.map(([d, x, y, s]) => <span key={d} style={{ ...lab, left:P(x), top:P(y), fontSize:11, fontWeight:500, letterSpacing:'0.2em', color:'rgba(255,255,255,0.4)' }}>{s}</span>)}
        {SS_T.drs.map(([d, x, y, s]) => <span key={d} style={{ ...lab, left:P(x), top:P(y), fontSize:11, fontWeight:500, letterSpacing:'0.2em', color:'rgba(31,199,255,0.75)' }}>{s}</span>)}
        {SS_T.sl.map(([s, x, y], i) => (
          <div key={s} style={{ ...lab, left:P(x), top:P(y), display:'flex', flexDirection:'column', alignItems:'center', gap:2 }}>
            <span style={{ fontSize:22, fontWeight:500, color:'rgba(255,255,255,0.42)' }}>{s}</span>
            <span style={{ fontSize:10, fontWeight:500, letterSpacing:'0.2em', color:'rgba(255,255,255,0.3)' }}>SECTOR {i + 1}</span>
          </div>
        ))}
        <span style={{ ...lab, left:P(SS_T.trap[2]), top:P(SS_T.trap[3]), transform:'translate(-100%,-50%)', fontSize:11, fontWeight:500, letterSpacing:'0.2em', color:'rgba(255,255,255,0.5)' }}>SPEED TRAP</span>
        <span style={{ ...lab, left:P(SS_T.sfl[0]), top:P(SS_T.sfl[1]), fontSize:10, fontWeight:500, letterSpacing:'0.2em', color:'rgba(255,255,255,0.5)' }}>START / FINISH</span>
      </div>
      <div style={{ position:'absolute', left:w * 0.262, top:h * 0.41, transform:'translate(-50%,-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:14, textAlign:'center' }}>
        <img src="assets/silverstone-logo.png" alt="Silverstone" style={{ display:'block', height:20, width:'auto' }} />
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6, fontFamily:'var(--font-display)' }}>
          <span style={{ fontSize:17, fontWeight:500, letterSpacing:'0.22em', color:'#fff' }}>SILVERSTONE CIRCUIT</span>
          <span style={{ fontSize:15, fontWeight:400, letterSpacing:'0.06em', color:'rgba(255,255,255,0.62)' }}>Home of the British Grand Prix</span>
          <span className="ix-ss-t" style={{ '--d':'1s', marginTop:8, display:'flex', gap:14, fontSize:11, fontWeight:500, letterSpacing:'0.18em', color:'rgba(255,255,255,0.42)', fontVariantNumeric:'tabular-nums' }}><span>5.891 KM</span><span>·</span><span>18 TURNS</span><span>·</span><span>52 LAPS</span></span>
        </div>
      </div>
    </div>
  );
}

/* Glass audio pill — plays assets/audio/race-engineer.mp3 */
function VoicePlayer({ src = IXA('audio/race-engineer.mp3'), className = '' }) {
  const ref = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [prog, setProg] = React.useState(0);
  const [err, setErr] = React.useState(false);
  const { active } = React.useContext(IXCtx);
  React.useEffect(() => { const a = ref.current; if (!active && a && !a.paused) { a.pause(); setPlaying(false); } }, [active]);
  const toggle = (e) => {
    e.stopPropagation();
    const a = ref.current; if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => setErr(true)); else { a.pause(); setPlaying(false); }
  };
  return (
    <div onClick={toggle} className={`ix-player ${className}`} style={{ display:'flex', alignItems:'center', gap:16, padding:'10px 22px 10px 10px', borderRadius:999, background:'var(--glass-fill)', backdropFilter:'var(--glass-blur)', WebkitBackdropFilter:'var(--glass-blur)', boxShadow:'var(--glass-shadow)', cursor:'pointer', userSelect:'none' }}>
      <audio ref={ref} src={src} preload="auto" onTimeUpdate={e => setProg(e.target.duration ? e.target.currentTime / e.target.duration : 0)} onEnded={() => { setPlaying(false); setProg(0); }} onError={() => setErr(true)} />
      <div style={{ width:52, height:52, borderRadius:'50%', background:'rgba(255,255,255,0.14)', boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.35)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
        {playing
          ? <div style={{ display:'flex', gap:5 }}><span style={{ width:4, height:16, background:'#fff', borderRadius:1 }} /><span style={{ width:4, height:16, background:'#fff', borderRadius:1 }} /></div>
          : <div style={{ width:0, height:0, marginLeft:4, borderTop:'9px solid transparent', borderBottom:'9px solid transparent', borderLeft:'14px solid #fff' }} />}
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:8, width:150 }}>
        <span style={{ fontFamily:'var(--font-display)', fontSize:13, fontWeight:600, letterSpacing:'0.16em', color:'#fff' }}>{err ? 'AUDIO MISSING' : 'RACE ENGINEER'}</span>
        <div style={{ height:3, borderRadius:3, background:'rgba(255,255,255,0.18)', overflow:'hidden' }}>
          <div style={{ height:'100%', width:`${prog * 100}%`, background:'linear-gradient(90deg,#0042FF,rgb(31,199,255))' }} />
        </div>
      </div>
    </div>
  );
}

function IXOverviewSlide({ index }) {
  const items = [
    ['Immersive AI experience –', ' A bespoke AI powered experience that immerses VIP guests and partners in the heart of the Williams Racing team during paddock and pit lane walks.'],
    ['Your own synthetic race engineer –', ' Receive live engineering insights, team heritage, sponsor stories and behind the scenes context, while asking questions naturally at any time. Every word lands straight in your ear, just as a driver hears their race engineer.'],
    ['Stay present, relive every moment –', ' Experience the day without reaching for your phone while AI captures every unforgettable moment to revisit long after the event.'],
  ];
  return (
    <IXSlide index={index}>
      <IXWMark />
      <PX depth={-10} l={1143} t={-20} style={{ width:797, height:1120 }}>
        <B fx="right" d={150} className="ix-photo" style={{ position:'absolute', inset:0, borderLeft:'2px solid #fff', background:`url(${IXA('photos/glasses-case-blue.png')}) center / cover no-repeat` }} />
      </PX>
      <IXStreaks d={350} />
      <IXLogo l={164} t={257} d={380} />
      <B fx="wipe" d={520} style={{ position:'absolute', left:163.987, top:335.25, width:305.026, height:1.5, background:'var(--wr-rule-gradient)' }} />
      <div style={{ position:'absolute', left:164, top:376, width:800, display:'flex', flexDirection:'column', gap:30, fontFamily:'var(--font-body)' }}>
        {items.map(([b, r], i) => (
          <B key={b} fx="left" d={640 + i * 160} style={{ display:'grid', gridTemplateColumns:'44px 1fr', columnGap:18, paddingTop: i ? 30 : 0, borderTop: i ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
            <span style={{ fontSize:16, fontWeight:500, letterSpacing:'0.12em', color:'rgb(31,199,255)', paddingTop:8, fontVariantNumeric:'tabular-nums' }}>{String(i + 1).padStart(2, '0')}</span>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              <span style={{ fontSize:28, fontWeight:500, lineHeight:'34px', color:'#fff' }}>{b.replace(/\s*–\s*$/, '')}</span>
              <span style={{ fontSize:22, fontWeight:300, lineHeight:'32px', color:'rgba(255,255,255,0.72)', textWrap:'pretty' }}>{r.trim()}</span>
            </div>
          </B>
        ))}
      </div>
    </IXSlide>
  );
}

/* Journey: → / click reveals each step in order; the newest step carries a blue focus glow. */
function IXJourneySlide({ index }) {
  const steps = [
    { l:89, t:94, img:'paddock-glasses-handover', cap:'Head to the paddock and receive your smart glasses from a hospitality host' },
    { l:730, t:129, img:'pitlane-glasses-on', cap:"Experience begins with the race engineer's voice welcoming you to the pit lane", arrow:[578, 222, 'rotate(180deg)'] },
    { l:1355, t:94, img:'pitlane-hey-williams', cap:'Guided through the pit lane with exclusive insights and fun facts about the team', arrow:[1214, 200, 'scaleX(-1) rotate(-12deg) scale(.86)'] },
    { l:408, t:589, img:'pitlane-group-glasses', cap:'Stay in the moment while our glasses capture your every move, even live stream to your instagram' },
    { l:1051, t:589, img:'grandstand-radio', cap:"Feel like you're at the wheel, with real time driver to team radio in your ear, and updates from your very own AI engineer", arrow:[896, 700, 'rotate(160deg)'] },
  ];
  return (
    <IXSlide index={index}>
      <JourneyInner steps={steps} />
      <IXDrawer side="left" bottom={196} handleLift={28} width={720} eyebrow="HOW IT WORKS" meta="Meta glasses · Williams Smart App" title="Box Box" chips={['Hey Williams', 'Vision AI', 'Hands-free capture']} content={<p style={{ margin:0, fontSize:23, fontWeight:300, lineHeight:'36px', color:'rgba(255,255,255,0.82)', textWrap:'pretty' }}>Put the glasses on and your very own AI race engineer guides you through the pit lane and paddock. Curious about something? Just say “Hey Williams”. Vision AI and deep learning read what you’re looking at, send it to the Williams Smart App, and your engineer answers straight into your ear. He’ll even cue you to capture photos and video through the glasses, so your phone stays in your pocket and you stay in the moment.</p>} />
    </IXSlide>
  );
}
function JourneyInner({ steps }) {
  return (
    <React.Fragment>
      <IXWMark />
      <IXStreaks d={250} />
      {steps.map((s, i) => {
        const d = 300 + i * 420;
        return (
          <div key={s.img} style={{ position:'absolute', left:s.l, top:s.t }}>
            <B fx="up" d={d}>
              <div className="ix-step">
                <IXDS.StepCard imageSrc={IXA(`photos/${s.img}.png`)} caption={s.cap} />
              </div>
            </B>
          </div>
        );
      })}
      {steps.map((s, i) => s.arrow && (
        <div key={'a' + i} style={{ position:'absolute', left:s.arrow[0], top:s.arrow[1], zIndex:10, pointerEvents:'none' }}>
          <B fx="draw" d={300 + i * 420 - 260} style={{ width:131.589, height:68.25 }}>
            <svg width="131.589" height="68.25" viewBox="0 0 131.589 68.25" style={{ display:'block', overflow:'visible', transform:s.arrow[2], filter:'drop-shadow(0 2px 6px rgba(0,0,0,0.6))' }}>
              <defs><linearGradient id={`fa${i}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="131.589" y2="68.25"><stop offset="0" stopColor="#fff" /><stop offset="0.55" stopColor="#fff" stopOpacity="0.85" /><stop offset="1" stopColor="#fff" stopOpacity="0.15" /></linearGradient></defs>
              <path fill={`url(#fa${i})`} d="M 0 0 L 6.596 5.612 L 8.158 -2.906 L 0 0 Z M 6.63 1.216 L 6.477 1.95 C 24.731 5.762 37.146 12.399 46.622 20.034 C 56.119 27.684 62.68 36.342 69.262 44.296 C 75.825 52.229 82.41 59.462 91.897 64.019 C 101.397 68.582 113.718 70.423 131.698 67.785 L 131.589 67.043 L 131.481 66.301 C 113.698 68.91 101.701 67.064 92.546 62.666 C 83.377 58.262 76.969 51.258 70.417 43.34 C 63.884 35.444 57.208 26.636 47.563 18.866 C 37.898 11.079 25.265 4.341 6.784 0.482 L 6.63 1.216 Z" />
            </svg>
          </B>
        </div>
      ))}
    </React.Fragment>
  );
}

Object.assign(window, { IXCoverSlide, IXOverviewSlide, IXJourneySlide, IXWMark, IXStreaks });
