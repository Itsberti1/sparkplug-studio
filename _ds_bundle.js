/* @ds-bundle: {"format":4,"namespace":"WilliamsRacingAIExperienceDesignSystem_1388e9","components":[{"name":"WilliamsLogo","sourcePath":"components/brand/WilliamsLogo.jsx"},{"name":"WMark","sourcePath":"components/brand/WilliamsLogo.jsx"},{"name":"CommentRow","sourcePath":"components/broadcast/CommentRow.jsx"},{"name":"LiveBadge","sourcePath":"components/broadcast/LiveBadge.jsx"},{"name":"StreamerHandle","sourcePath":"components/broadcast/StreamerHandle.jsx"},{"name":"ViewerCount","sourcePath":"components/broadcast/ViewerCount.jsx"},{"name":"PanelCard","sourcePath":"components/cards/PanelCard.jsx"},{"name":"StepCard","sourcePath":"components/cards/StepCard.jsx"},{"name":"GlassVoiceButton","sourcePath":"components/glass/GlassPrompt.jsx"},{"name":"GlassPrompt","sourcePath":"components/glass/GlassPrompt.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Icons","sourcePath":"components/icons/Icons.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icons.jsx"}],"sourceHashes":{"components/brand/WilliamsLogo.jsx":"67baa49054e3","components/broadcast/CommentRow.jsx":"55ed5dbbb451","components/broadcast/LiveBadge.jsx":"ed594ec7f718","components/broadcast/StreamerHandle.jsx":"60a53e3b7244","components/broadcast/ViewerCount.jsx":"2faabdb5256a","components/cards/PanelCard.jsx":"1ac4efc137a4","components/cards/StepCard.jsx":"432014537351","components/glass/GlassPrompt.jsx":"25577039f622","components/icons/Icon.jsx":"41cf0c04459b","components/icons/Icons.jsx":"8efeb0f8ad1b","components/icons/icon-data.js":"9ea7381fba3f","ui_kits/pitch-deck-saved-2026-09-25/deck-stage.js":"f3d3d0a662c0","ui_kits/pitch-deck-saved-2026-09-25/ix-core.jsx":"aa28fc17d890","ui_kits/pitch-deck-saved-2026-09-25/ix-slides-a.jsx":"797d1b58fc51","ui_kits/pitch-deck-saved-2026-09-25/ix-slides-b.jsx":"6afc1123e0f8","ui_kits/pitch-deck-saved-2026-09-25/ix-slides-c.jsx":"a6ba899a1e66","ui_kits/pitch-deck-saved-2026-09-29/deck-stage.js":"f3d3d0a662c0","ui_kits/pitch-deck-saved-2026-09-29/ix-core.jsx":"b9cf4110531e","ui_kits/pitch-deck-saved-2026-09-29/ix-slides-a.jsx":"797d1b58fc51","ui_kits/pitch-deck-saved-2026-09-29/ix-slides-b.jsx":"54baec065e0d","ui_kits/pitch-deck-saved-2026-09-29/ix-slides-c.jsx":"4addc320517a","ui_kits/pitch-deck/SlidesA.jsx":"ad0cd6d482a5","ui_kits/pitch-deck/SlidesB.jsx":"06b1c570902c","ui_kits/pitch-deck/deck-stage.js":"f3d3d0a662c0","ui_kits/pitch-deck/ix-core.jsx":"b9cf4110531e","ui_kits/pitch-deck/ix-slides-a.jsx":"797d1b58fc51","ui_kits/pitch-deck/ix-slides-b.jsx":"f5a19d3920d6","ui_kits/pitch-deck/ix-slides-c.jsx":"feee6bb92227"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WilliamsRacingAIExperienceDesignSystem_1388e9 = window.WilliamsRacingAIExperienceDesignSystem_1388e9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/WilliamsLogo.jsx
try { (() => {
/** Williams F1 Team lockup. Pass the asset path for your page depth; renders the real PNG, never a redraw. */
function WilliamsLogo({
  src = 'assets/logo/williams-wordmark-white.png',
  width = 210,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Williams F1 Team",
    style: {
      display: 'block',
      width,
      height: 'auto',
      ...style
    }
  });
}
/** The oversized blue "W" graphic that bleeds behind slide content. */
function WMark({
  src = 'assets/brand/w-mark-blue.png',
  width = 1215,
  height = 683.438,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width,
      height,
      background: `url(${src}) center / cover no-repeat`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { WilliamsLogo, WMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WilliamsLogo.jsx", error: String((e && e.message) || e) }); }

// components/broadcast/CommentRow.jsx
try { (() => {
/** Live-chat comment: 50px avatar disc + name + message, from Frame 79 "Frame 100". */
function CommentRow({
  name = 'Immy Bewes',
  message = '🏁🏆🏅',
  avatarSrc,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 214,
      height: 50,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: '50%',
      flexShrink: 0,
      background: avatarSrc ? `url(${avatarSrc}) center / cover` : 'var(--wr-grey-200)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 'var(--type-ui-name-size)',
      lineHeight: '100%',
      color: 'var(--wr-white)',
      whiteSpace: 'nowrap'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: '100%',
      color: 'var(--wr-white)',
      whiteSpace: 'nowrap'
    }
  }, message)));
}
Object.assign(__ds_scope, { CommentRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/broadcast/CommentRow.jsx", error: String((e && e.message) || e) }); }

// components/broadcast/LiveBadge.jsx
try { (() => {
/** LIVE pill — magenta→red gradient, from Frame 79 "Live Status". */
function LiveBadge({
  label = 'LIVE',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 56,
      height: 38.769,
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0.718,
      top: 0,
      width: 55.282,
      height: 38.769,
      borderRadius: 'var(--radius-badge)',
      background: 'var(--wr-live-gradient)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0.718,
      top: 0,
      width: 55.282,
      height: 38.769,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 'var(--type-ui-badge-size)',
      lineHeight: '100%',
      color: 'var(--wr-white)'
    }
  }, label));
}
Object.assign(__ds_scope, { LiveBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/broadcast/LiveBadge.jsx", error: String((e && e.message) || e) }); }

// components/broadcast/StreamerHandle.jsx
try { (() => {
const STAR = "M 10.383 0.305 C 10.669 -0.102 11.272 -0.102 11.558 0.305 L 12.858 2.149 C 13.058 2.433 13.432 2.534 13.747 2.388 L 15.795 1.44 C 16.246 1.231 16.768 1.532 16.813 2.028 L 17.016 4.275 C 17.047 4.621 17.321 4.895 17.667 4.926 L 19.914 5.129 C 20.409 5.174 20.71 5.695 20.501 6.147 L 19.554 8.194 C 19.408 8.509 19.508 8.884 19.792 9.084 L 21.637 10.383 C 22.043 10.669 22.043 11.272 21.637 11.558 L 19.792 12.858 C 19.508 13.058 19.408 13.432 19.554 13.747 L 20.501 15.795 C 20.71 16.246 20.409 16.768 19.914 16.813 L 17.667 17.016 C 17.321 17.047 17.047 17.321 17.016 17.667 L 16.813 19.914 C 16.768 20.409 16.246 20.71 15.795 20.501 L 13.747 19.554 C 13.432 19.408 13.058 19.508 12.858 19.792 L 11.558 21.637 C 11.272 22.043 10.669 22.043 10.383 21.637 L 9.084 19.792 C 8.884 19.508 8.509 19.408 8.194 19.554 L 6.147 20.501 C 5.695 20.71 5.174 20.409 5.129 19.914 L 4.926 17.667 C 4.895 17.321 4.621 17.047 4.275 17.016 L 2.028 16.813 C 1.532 16.768 1.231 16.246 1.44 15.795 L 2.388 13.747 C 2.534 13.432 2.433 13.058 2.149 12.858 L 0.305 11.558 C -0.102 11.272 -0.102 10.669 0.305 10.383 L 2.149 9.084 C 2.433 8.884 2.534 8.509 2.388 8.194 L 1.44 6.147 C 1.231 5.695 1.532 5.174 2.028 5.129 L 4.275 4.926 C 4.621 4.895 4.895 4.621 4.926 4.275 L 5.129 2.028 C 5.174 1.532 5.695 1.231 6.147 1.44 L 8.194 2.388 C 8.509 2.534 8.884 2.433 9.084 2.149 L 10.383 0.305 Z";
/** Avatar + handle + verified badge, from Frame 79 header. */
function StreamerHandle({
  handle = 'lily_andrews',
  avatarSrc,
  verified = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      height: 48,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      flexShrink: 0,
      background: avatarSrc ? `url(${avatarSrc}) 0% -0.891% / 120.833% 181.856% no-repeat` : 'var(--wr-grey-200)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 590,
      fontSize: 18,
      lineHeight: 1,
      color: 'var(--wr-white)',
      whiteSpace: 'nowrap'
    }
  }, handle), verified && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 23,
      height: 23,
      overflow: 'hidden',
      borderRadius: 2.3,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "21.941",
    height: "21.941",
    viewBox: "0 0 21.941 21.941",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      transform: 'matrix(0.961,-0.276,0.276,0.961,-2.070,3.978)',
      transformOrigin: '0 0',
      color: 'var(--wr-white)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: STAR,
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "9.641",
    height: "7.275",
    viewBox: "0 0 9.641 7.275",
    style: {
      position: 'absolute',
      left: 6.679,
      top: 8.118
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.641 1.016 L 3.383 7.275 L 0 3.891 L 1.016 2.875 L 3.383 5.242 L 8.625 0 L 9.641 1.016 Z",
    fill: "rgba(0,0,0,0.5)",
    fillRule: "evenodd"
  })))));
}
Object.assign(__ds_scope, { StreamerHandle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/broadcast/StreamerHandle.jsx", error: String((e && e.message) || e) }); }

// components/broadcast/ViewerCount.jsx
try { (() => {
const EYE = "M 8.281 3.313 C 8.189 3.572 8.139 3.85 8.139 4.139 C 8.139 5.511 9.251 6.622 10.623 6.622 C 11.347 6.622 11.999 6.312 12.453 5.817 C 12.869 6.542 13.106 7.382 13.106 8.278 C 13.106 11.021 10.882 13.245 8.139 13.245 C 5.396 13.245 3.173 11.021 3.173 8.278 C 3.173 5.633 5.24 3.471 7.847 3.32 L 8.139 3.311 C 8.187 3.311 8.234 3.312 8.281 3.313 Z M 8.139 0 C 11.59 0 14.689 1.937 16.235 4.933 L 16.406 5.284 L 14.904 5.979 C 13.693 3.365 11.071 1.656 8.139 1.656 C 5.417 1.656 2.958 3.128 1.65 5.442 L 1.479 5.763 L 0 5.019 C 1.535 1.968 4.661 0 8.139 0 Z";
/** Translucent chip with eye glyph + count, from Frame 79. */
function ViewerCount({
  count = '140K',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 94,
      height: 39,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-chip)',
      background: 'var(--wr-chip)',
      padding: '8px 15px 9px 15px',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16.406",
    height: "13.244",
    viewBox: "0 0 16.406 13.244",
    style: {
      flexShrink: 0,
      color: 'var(--wr-white)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: EYE,
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 400,
      fontSize: 'var(--type-ui-count-size)',
      lineHeight: '100%',
      color: 'var(--wr-white)',
      whiteSpace: 'nowrap'
    }
  }, count));
}
Object.assign(__ds_scope, { ViewerCount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/broadcast/ViewerCount.jsx", error: String((e && e.message) || e) }); }

// components/cards/PanelCard.jsx
try { (() => {
/** Raised dark panel with centered heading + body, from Frame 82 "Why us". */
function PanelCard({
  title = 'Bespoke AI software',
  children = 'We design and build the complete Williams experience, including the AI character, paddock journey, sponsor integrations, personalised interactions and automated highlight recap software.',
  width = 584,
  height = 435,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-card)',
      background: 'var(--wr-panel)',
      boxShadow: 'var(--shadow-card)',
      padding: '70px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--type-card-size)',
      lineHeight: 'var(--type-card-lh)',
      textAlign: 'center',
      color: 'var(--wr-white)',
      textWrap: 'pretty'
    }
  }, title, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), children));
}
Object.assign(__ds_scope, { PanelCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PanelCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StepCard.jsx
try { (() => {
/** Photo tile + centered caption, from Frame 16 "Frame 18" (journey steps). */
function StepCard({
  imageSrc,
  caption = 'Head to the paddock and receive your smart glasses from a hospitality host',
  bold = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 474.617,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-caption-gap)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      height: 266.566,
      borderRadius: 'var(--radius-photo)',
      boxShadow: 'var(--shadow-photo)',
      background: imageSrc ? `url(${imageSrc}) 50% 50% / cover no-repeat` : 'var(--wr-panel)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 361,
      fontFamily: 'var(--font-body)',
      fontWeight: bold ? 700 : 400,
      fontSize: 'var(--type-caption-size)',
      lineHeight: 'var(--type-caption-lh)',
      textAlign: 'center',
      color: 'var(--wr-white)',
      textWrap: 'pretty'
    }
  }, caption));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/glass/GlassPrompt.jsx
try { (() => {
const glass = {
  background: 'var(--glass-fill)',
  backdropFilter: 'var(--glass-blur)',
  WebkitBackdropFilter: 'var(--glass-blur)',
  boxShadow: 'var(--glass-shadow)',
  borderRadius: 'var(--radius-glass)',
  boxSizing: 'border-box',
  flexShrink: 0
};
/** Voice button: 58.267 glass disc with a five-bar waveform (short · tall · mid · tall · short). */
const BARS = [16, 28, 22, 28, 19];
function GlassVoiceButton({
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...glass,
      width: 58.267,
      height: 58.267,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6.474062919616699,
      height: 28
    }
  }, BARS.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 2.6,
      height: h,
      background: 'var(--wr-white)',
      borderRadius: 1.3,
      flexShrink: 0
    }
  }))));
}
/** Liquid-glass voice prompt ("Hey Williams, …") from Frame 18. */
function GlassPrompt({
  text = 'Hey Williams, why are you using soft tyres?',
  side = 'right',
  tilt = 0,
  style
}) {
  const bubble = /*#__PURE__*/React.createElement("div", {
    style: {
      ...glass,
      width: 346.362,
      height: 124.086,
      padding: '23.738px 28.054px 24.817px 28.054px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 290.254,
      fontFamily: 'var(--font-ui-compact)',
      fontWeight: 457,
      fontSize: 'var(--type-prompt-size)',
      lineHeight: 'var(--type-prompt-lh)',
      color: 'var(--wr-white)'
    }
  }, text));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-glass-gap)',
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      transformOrigin: '0 0',
      ...style
    }
  }, side === 'left' && /*#__PURE__*/React.createElement(GlassVoiceButton, null), bubble, side === 'right' && /*#__PURE__*/React.createElement(GlassVoiceButton, null));
}
Object.assign(__ds_scope, { GlassVoiceButton, GlassPrompt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/glass/GlassPrompt.jsx", error: String((e && e.message) || e) }); }

// components/icons/icon-data.js
try { (() => {
// Generated by fig_materialize (moduleFormat: 'icon-data') — 79 icon(s)
// as { viewBox, body } SVG-markup entries. Render via the sibling Icon.jsx
// (<Icon name="Bolt" />), or consume the path data directly.
let __ds_default_components_icons_icon_data_12stud1;
try {
  __ds_default_components_icons_icon_data_12stud1 = {
    "Bolt": {
      viewBox: "0 0 16 16",
      body: "<path d=\"M 2.664 12 L 1.997 12 L 2.664 7.333 L 0.331 7.333 C -0.056 7.333 -0.049 7.12 0.077 6.893 C 0.204 6.667 0.111 6.84 0.124 6.813 C 0.984 5.293 2.277 3.027 3.997 0 L 4.664 0 L 3.997 4.667 L 6.331 4.667 C 6.657 4.667 6.704 4.887 6.644 5.007 L 6.597 5.107 C 3.971 9.7 2.664 12 2.664 12 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4.669 2)\"/>"
    },
    "Eco": {
      viewBox: "0 0 16 16",
      body: "<path d=\"M 1.367 2.675 C -0.453 4.495 -0.453 7.442 1.353 9.262 C 2.333 6.995 4.08 5.102 6.26 3.975 C 4.413 5.535 3.12 7.715 2.667 10.188 C 4.4 11.008 6.533 10.708 7.967 9.275 C 9.96 7.282 10.52 1.848 10.64 0.355 C 10.653 0.148 10.487 -0.018 10.287 0.002 C 8.793 0.122 3.36 0.682 1.367 2.675 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.667 2.692)\"/>"
    },
    "IconsNameAddStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5 0 L 5 0.9 L 15 0.9 L 15 0 L 15 -0.9 L 5 -0.9 L 5 0 Z M 20 5 L 19.1 5 L 19.1 15 L 20 15 L 20.9 15 L 20.9 5 L 20 5 Z M 15 20 L 15 19.1 L 5 19.1 L 5 20 L 5 20.9 L 15 20.9 L 15 20 Z M 0 15 L 0.9 15 L 0.9 5 L 0 5 L -0.9 5 L -0.9 15 L 0 15 Z M 5 20 L 5 19.1 C 2.736 19.1 0.9 17.264 0.9 15 L 0 15 L -0.9 15 C -0.9 18.258 1.742 20.9 5 20.9 L 5 20 Z M 20 15 L 19.1 15 C 19.1 17.264 17.264 19.1 15 19.1 L 15 20 L 15 20.9 C 18.258 20.9 20.9 18.258 20.9 15 L 20 15 Z M 15 0 L 15 0.9 C 17.264 0.9 19.1 2.736 19.1 5 L 20 5 L 20.9 5 C 20.9 1.742 18.258 -0.9 15 -0.9 L 15 0 Z M 5 0 L 5 -0.9 C 1.742 -0.9 -0.9 1.742 -0.9 5 L 0 5 L 0.9 5 C 0.9 2.736 2.736 0.9 5 0.9 L 5 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/><path d=\"M 0.9 -1.8 C 0.403 -1.8 0 -1.397 0 -0.9 C 0 -0.403 0.403 0 0.9 0 L 0.9 -0.9 L 0.9 -1.8 Z M 11.1 0 C 11.597 0 12 -0.403 12 -0.9 C 12 -1.397 11.597 -1.8 11.1 -1.8 L 11.1 -0.9 L 11.1 0 Z M 0.9 -0.9 L 0.9 0 L 11.1 0 L 11.1 -0.9 L 11.1 -1.8 L 0.9 -1.8 L 0.9 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0 1 -1 0 11.200 6)\"/><path d=\"M 0.9 -1.8 C 0.403 -1.8 0 -1.397 0 -0.9 C 0 -0.403 0.403 0 0.9 0 L 0.9 -0.9 L 0.9 -1.8 Z M 11.1 0 C 11.597 0 12 -0.403 12 -0.9 C 12 -1.397 11.597 -1.8 11.1 -1.8 L 11.1 -0.9 L 11.1 0 Z M 0.9 -0.9 L 0.9 0 L 11.1 0 L 11.1 -0.9 L 11.1 -1.8 L 0.9 -1.8 L 0.9 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 6 12.700)\"/>"
    },
    "IconsNameAddStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5 0 L 5 0.9 L 15 0.9 L 15 0 L 15 -0.9 L 5 -0.9 L 5 0 Z M 20 5 L 19.1 5 L 19.1 15 L 20 15 L 20.9 15 L 20.9 5 L 20 5 Z M 15 20 L 15 19.1 L 5 19.1 L 5 20 L 5 20.9 L 15 20.9 L 15 20 Z M 0 15 L 0.9 15 L 0.9 5 L 0 5 L -0.9 5 L -0.9 15 L 0 15 Z M 5 20 L 5 19.1 C 2.736 19.1 0.9 17.264 0.9 15 L 0 15 L -0.9 15 C -0.9 18.258 1.742 20.9 5 20.9 L 5 20 Z M 20 15 L 19.1 15 C 19.1 17.264 17.264 19.1 15 19.1 L 15 20 L 15 20.9 C 18.258 20.9 20.9 18.258 20.9 15 L 20 15 Z M 15 0 L 15 0.9 C 17.264 0.9 19.1 2.736 19.1 5 L 20 5 L 20.9 5 C 20.9 1.742 18.258 -0.9 15 -0.9 L 15 0 Z M 5 0 L 5 -0.9 C 1.742 -0.9 -0.9 1.742 -0.9 5 L 0 5 L 0.9 5 C 0.9 2.736 2.736 0.9 5 0.9 L 5 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/><path d=\"M 0.9 -1.8 C 0.403 -1.8 0 -1.397 0 -0.9 C 0 -0.403 0.403 0 0.9 0 L 0.9 -0.9 L 0.9 -1.8 Z M 11.1 0 C 11.597 0 12 -0.403 12 -0.9 C 12 -1.397 11.597 -1.8 11.1 -1.8 L 11.1 -0.9 L 11.1 0 Z M 0.9 -0.9 L 0.9 0 L 11.1 0 L 11.1 -0.9 L 11.1 -1.8 L 0.9 -1.8 L 0.9 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0 1 -1 0 11.200 6)\"/><path d=\"M 0.9 -1.8 C 0.403 -1.8 0 -1.397 0 -0.9 C 0 -0.403 0.403 0 0.9 0 L 0.9 -0.9 L 0.9 -1.8 Z M 11.1 0 C 11.597 0 12 -0.403 12 -0.9 C 12 -1.397 11.597 -1.8 11.1 -1.8 L 11.1 -0.9 L 11.1 0 Z M 0.9 -0.9 L 0.9 0 L 11.1 0 L 11.1 -0.9 L 11.1 -1.8 L 0.9 -1.8 L 0.9 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 6 12.700)\"/>"
    },
    "IconsNameAddStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5 0 L 5 0.9 L 15 0.9 L 15 0 L 15 -0.9 L 5 -0.9 L 5 0 Z M 20 5 L 19.1 5 L 19.1 15 L 20 15 L 20.9 15 L 20.9 5 L 20 5 Z M 15 20 L 15 19.1 L 5 19.1 L 5 20 L 5 20.9 L 15 20.9 L 15 20 Z M 0 15 L 0.9 15 L 0.9 5 L 0 5 L -0.9 5 L -0.9 15 L 0 15 Z M 5 20 L 5 19.1 C 2.736 19.1 0.9 17.264 0.9 15 L 0 15 L -0.9 15 C -0.9 18.258 1.742 20.9 5 20.9 L 5 20 Z M 20 15 L 19.1 15 C 19.1 17.264 17.264 19.1 15 19.1 L 15 20 L 15 20.9 C 18.258 20.9 20.9 18.258 20.9 15 L 20 15 Z M 15 0 L 15 0.9 C 17.264 0.9 19.1 2.736 19.1 5 L 20 5 L 20.9 5 C 20.9 1.742 18.258 -0.9 15 -0.9 L 15 0 Z M 5 0 L 5 -0.9 C 1.742 -0.9 -0.9 1.742 -0.9 5 L 0 5 L 0.9 5 C 0.9 2.736 2.736 0.9 5 0.9 L 5 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/><path d=\"M 0.9 -1.8 C 0.403 -1.8 0 -1.397 0 -0.9 C 0 -0.403 0.403 0 0.9 0 L 0.9 -0.9 L 0.9 -1.8 Z M 11.1 0 C 11.597 0 12 -0.403 12 -0.9 C 12 -1.397 11.597 -1.8 11.1 -1.8 L 11.1 -0.9 L 11.1 0 Z M 0.9 -0.9 L 0.9 0 L 11.1 0 L 11.1 -0.9 L 11.1 -1.8 L 0.9 -1.8 L 0.9 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0 1 -1 0 11.200 6)\"/><path d=\"M 0.9 -1.8 C 0.403 -1.8 0 -1.397 0 -0.9 C 0 -0.403 0.403 0 0.9 0 L 0.9 -0.9 L 0.9 -1.8 Z M 11.1 0 C 11.597 0 12 -0.403 12 -0.9 C 12 -1.397 11.597 -1.8 11.1 -1.8 L 11.1 -0.9 L 11.1 0 Z M 0.9 -0.9 L 0.9 0 L 11.1 0 L 11.1 -0.9 L 11.1 -1.8 L 0.9 -1.8 L 0.9 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 6 12.700)\"/>"
    },
    "IconsNameArrowDownStateDefault": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M 0 9.9 L -1 9.9 C -1 10.452 -0.552 10.9 0 10.9 L 0 9.9 Z M 9.9 10.9 C 10.452 10.9 10.9 10.452 10.9 9.9 C 10.9 9.347 10.452 8.9 9.9 8.9 L 9.9 9.9 L 9.9 10.9 Z M 0 0 L -1 0 L -1 9.9 L 0 9.9 L 1 9.9 L 1 0 L 0 0 Z M 0 9.9 L 0 10.9 L 9.9 10.9 L 9.9 9.9 L 9.9 8.9 L 0 8.9 L 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 -0.707 0.707 0.707 5 15)\"/>"
    },
    "IconsNameArrowDownStateDefault2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M 0 9.9 L -1 9.9 C -1 10.452 -0.552 10.9 0 10.9 L 0 9.9 Z M 9.9 10.9 C 10.452 10.9 10.9 10.452 10.9 9.9 C 10.9 9.347 10.452 8.9 9.9 8.9 L 9.9 9.9 L 9.9 10.9 Z M 0 0 L -1 0 L -1 9.9 L 0 9.9 L 1 9.9 L 1 0 L 0 0 Z M 0 9.9 L 0 10.9 L 9.9 10.9 L 9.9 9.9 L 9.9 8.9 L 0 8.9 L 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 -0.707 0.707 0.707 5 15)\"/>"
    },
    "IconsNameArrowDownStateUnselected": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M 0 9.9 L -1 9.9 C -1 10.452 -0.552 10.9 0 10.9 L 0 9.9 Z M 9.9 10.9 C 10.452 10.9 10.9 10.452 10.9 9.9 C 10.9 9.347 10.452 8.9 9.9 8.9 L 9.9 9.9 L 9.9 10.9 Z M 0 0 L -1 0 L -1 9.9 L 0 9.9 L 1 9.9 L 1 0 L 0 0 Z M 0 9.9 L 0 10.9 L 9.9 10.9 L 9.9 9.9 L 9.9 8.9 L 0 8.9 L 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 -0.707 0.707 0.707 5 15)\"/>"
    },
    "IconsNameArrowLeftStateDefault": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M 0 9.9 L -1 9.9 C -1 10.452 -0.552 10.9 0 10.9 L 0 9.9 Z M 9.9 10.9 C 10.452 10.9 10.9 10.452 10.9 9.9 C 10.9 9.347 10.452 8.9 9.9 8.9 L 9.9 9.9 L 9.9 10.9 Z M 0 0 L -1 0 L -1 9.9 L 0 9.9 L 1 9.9 L 1 0 L 0 0 Z M 0 9.9 L 0 10.9 L 9.9 10.9 L 9.9 9.9 L 9.9 8.9 L 0 8.9 L 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 0.707 -0.707 0.707 8 5)\"/>"
    },
    "IconsNameArrowLeftStateDefault2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M 0 9.9 L -1 9.9 C -1 10.452 -0.552 10.9 0 10.9 L 0 9.9 Z M 9.9 10.9 C 10.452 10.9 10.9 10.452 10.9 9.9 C 10.9 9.347 10.452 8.9 9.9 8.9 L 9.9 9.9 L 9.9 10.9 Z M 0 0 L -1 0 L -1 9.9 L 0 9.9 L 1 9.9 L 1 0 L 0 0 Z M 0 9.9 L 0 10.9 L 9.9 10.9 L 9.9 9.9 L 9.9 8.9 L 0 8.9 L 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 0.707 -0.707 0.707 8 5)\"/>"
    },
    "IconsNameArrowLeftStateUnselected": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M 0 9.9 L -1 9.9 C -1 10.452 -0.552 10.9 0 10.9 L 0 9.9 Z M 9.9 10.9 C 10.452 10.9 10.9 10.452 10.9 9.9 C 10.9 9.347 10.452 8.9 9.9 8.9 L 9.9 9.9 L 9.9 10.9 Z M 0 0 L -1 0 L -1 9.9 L 0 9.9 L 1 9.9 L 1 0 L 0 0 Z M 0 9.9 L 0 10.9 L 9.9 10.9 L 9.9 9.9 L 9.9 8.9 L 0 8.9 L 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 0.707 -0.707 0.707 8 5)\"/>"
    },
    "IconsNameArrowRightStateDefault": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M 0 9.9 L -1 9.9 C -1 10.452 -0.552 10.9 0 10.9 L 0 9.9 Z M 9.9 10.9 C 10.452 10.9 10.9 10.452 10.9 9.9 C 10.9 9.347 10.452 8.9 9.9 8.9 L 9.9 9.9 L 9.9 10.9 Z M 0 0 L -1 0 L -1 9.9 L 0 9.9 L 1 9.9 L 1 0 L 0 0 Z M 0 9.9 L 0 10.9 L 9.9 10.9 L 9.9 9.9 L 9.9 8.9 L 0 8.9 L 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(-0.707 -0.707 0.707 -0.707 15 19.000)\"/>"
    },
    "IconsNameArrowRightStateDefault2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M 0 9.9 L -1 9.9 C -1 10.452 -0.552 10.9 0 10.9 L 0 9.9 Z M 9.9 10.9 C 10.452 10.9 10.9 10.452 10.9 9.9 C 10.9 9.347 10.452 8.9 9.9 8.9 L 9.9 9.9 L 9.9 10.9 Z M 0 0 L -1 0 L -1 9.9 L 0 9.9 L 1 9.9 L 1 0 L 0 0 Z M 0 9.9 L 0 10.9 L 9.9 10.9 L 9.9 9.9 L 9.9 8.9 L 0 8.9 L 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(-0.707 -0.707 0.707 -0.707 15 19.000)\"/>"
    },
    "IconsNameArrowRightStateUnselected": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M 0 9.9 L -1 9.9 C -1 10.452 -0.552 10.9 0 10.9 L 0 9.9 Z M 9.9 10.9 C 10.452 10.9 10.9 10.452 10.9 9.9 C 10.9 9.347 10.452 8.9 9.9 8.9 L 9.9 9.9 L 9.9 10.9 Z M 0 0 L -1 0 L -1 9.9 L 0 9.9 L 1 9.9 L 1 0 L 0 0 Z M 0 9.9 L 0 10.9 L 9.9 10.9 L 9.9 9.9 L 9.9 8.9 L 0 8.9 L 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(-0.707 -0.707 0.707 -0.707 15 19.000)\"/>"
    },
    "IconsNameArrowUpStateDefault": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M 0 9.9 L -1 9.9 C -1 10.452 -0.552 10.9 0 10.9 L 0 9.9 Z M 9.9 10.9 C 10.452 10.9 10.9 10.452 10.9 9.9 C 10.9 9.347 10.452 8.9 9.9 8.9 L 9.9 9.9 L 9.9 10.9 Z M 0 0 L -1 0 L -1 9.9 L 0 9.9 L 1 9.9 L 1 0 L 0 0 Z M 0 9.9 L 0 10.9 L 9.9 10.9 L 9.9 9.9 L 9.9 8.9 L 0 8.9 L 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(-0.707 0.707 -0.707 -0.707 19 9.000)\"/>"
    },
    "IconsNameArrowUpStateDefault2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M 0 9.9 L -1 9.9 C -1 10.452 -0.552 10.9 0 10.9 L 0 9.9 Z M 9.9 10.9 C 10.452 10.9 10.9 10.452 10.9 9.9 C 10.9 9.347 10.452 8.9 9.9 8.9 L 9.9 9.9 L 9.9 10.9 Z M 0 0 L -1 0 L -1 9.9 L 0 9.9 L 1 9.9 L 1 0 L 0 0 Z M 0 9.9 L 0 10.9 L 9.9 10.9 L 9.9 9.9 L 9.9 8.9 L 0 8.9 L 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(-0.707 0.707 -0.707 -0.707 19 9.000)\"/>"
    },
    "IconsNameArrowUpStateUnselected": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M 0 9.9 L -1 9.9 C -1 10.452 -0.552 10.9 0 10.9 L 0 9.9 Z M 9.9 10.9 C 10.452 10.9 10.9 10.452 10.9 9.9 C 10.9 9.347 10.452 8.9 9.9 8.9 L 9.9 9.9 L 9.9 10.9 Z M 0 0 L -1 0 L -1 9.9 L 0 9.9 L 1 9.9 L 1 0 L 0 0 Z M 0 9.9 L 0 10.9 L 9.9 10.9 L 9.9 9.9 L 9.9 8.9 L 0 8.9 L 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(-0.707 0.707 -0.707 -0.707 19 9.000)\"/>"
    },
    "IconsNameBookmarkStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 0 L 0 -1.8 C -0.994 -1.8 -1.8 -0.994 -1.8 0 L 0 0 Z M 18 0 L 19.8 0 C 19.8 -0.994 18.994 -1.8 18 -1.8 L 18 0 Z M 9 14.5 L 10.152 13.117 C 9.485 12.561 8.515 12.561 7.848 13.117 L 9 14.5 Z M 0.82 21.317 L 1.972 22.699 L 0.82 21.317 Z M 17.18 21.317 L 16.028 22.699 L 17.18 21.317 Z M 0 0 L 0 1.8 L 18 1.8 L 18 0 L 18 -1.8 L 0 -1.8 L 0 0 Z M 18 0 L 16.2 0 L 16.2 20.932 L 18 20.932 L 19.8 20.932 L 19.8 0 L 18 0 Z M 0 20.932 L 1.8 20.932 L 1.8 0 L 0 0 L -1.8 0 L -1.8 20.932 L 0 20.932 Z M 17.18 21.317 L 18.332 19.934 L 10.152 13.117 L 9 14.5 L 7.848 15.883 L 16.028 22.699 L 17.18 21.317 Z M 9 14.5 L 7.848 13.117 L -0.332 19.934 L 0.82 21.317 L 1.972 22.699 L 10.152 15.883 L 9 14.5 Z M 0 20.932 L -1.8 20.932 C -1.8 22.883 0.474 23.948 1.972 22.699 L 0.82 21.317 L -0.332 19.934 C 0.514 19.228 1.8 19.83 1.8 20.932 L 0 20.932 Z M 18 20.932 L 16.2 20.932 C 16.2 19.83 17.486 19.228 18.332 19.934 L 17.18 21.317 L 16.028 22.699 C 17.526 23.948 19.8 22.883 19.8 20.932 L 18 20.932 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 1)\"/>"
    },
    "IconsNameBookmarkStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 0 L 0 -1.8 C -0.994 -1.8 -1.8 -0.994 -1.8 0 L 0 0 Z M 18 0 L 19.8 0 C 19.8 -0.994 18.994 -1.8 18 -1.8 L 18 0 Z M 9 14.5 L 10.152 13.117 C 9.485 12.561 8.515 12.561 7.848 13.117 L 9 14.5 Z M 0.82 21.317 L 1.972 22.699 L 0.82 21.317 Z M 17.18 21.317 L 16.028 22.699 L 17.18 21.317 Z M 0 0 L 0 1.8 L 18 1.8 L 18 0 L 18 -1.8 L 0 -1.8 L 0 0 Z M 18 0 L 16.2 0 L 16.2 20.932 L 18 20.932 L 19.8 20.932 L 19.8 0 L 18 0 Z M 0 20.932 L 1.8 20.932 L 1.8 0 L 0 0 L -1.8 0 L -1.8 20.932 L 0 20.932 Z M 17.18 21.317 L 18.332 19.934 L 10.152 13.117 L 9 14.5 L 7.848 15.883 L 16.028 22.699 L 17.18 21.317 Z M 9 14.5 L 7.848 13.117 L -0.332 19.934 L 0.82 21.317 L 1.972 22.699 L 10.152 15.883 L 9 14.5 Z M 0 20.932 L -1.8 20.932 C -1.8 22.883 0.474 23.948 1.972 22.699 L 0.82 21.317 L -0.332 19.934 C 0.514 19.228 1.8 19.83 1.8 20.932 L 0 20.932 Z M 18 20.932 L 16.2 20.932 C 16.2 19.83 17.486 19.228 18.332 19.934 L 17.18 21.317 L 16.028 22.699 C 17.526 23.948 19.8 22.883 19.8 20.932 L 18 20.932 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 1)\"/>"
    },
    "IconsNameBookmarkStateSelectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 0 L 18 0 L 18 20.932 C 18 21.356 17.506 21.588 17.18 21.317 L 9 14.5 L 0.82 21.317 C 0.494 21.588 0 21.356 0 20.932 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 1)\"/><path d=\"M 0 0 L 0 -1.8 C -0.994 -1.8 -1.8 -0.994 -1.8 0 L 0 0 Z M 18 0 L 19.8 0 C 19.8 -0.994 18.994 -1.8 18 -1.8 L 18 0 Z M 9 14.5 L 10.152 13.117 C 9.485 12.561 8.515 12.561 7.848 13.117 L 9 14.5 Z M 0.82 21.317 L 1.972 22.699 L 0.82 21.317 Z M 17.18 21.317 L 16.028 22.699 L 17.18 21.317 Z M 0 0 L 0 1.8 L 18 1.8 L 18 0 L 18 -1.8 L 0 -1.8 L 0 0 Z M 18 0 L 16.2 0 L 16.2 20.932 L 18 20.932 L 19.8 20.932 L 19.8 0 L 18 0 Z M 0 20.932 L 1.8 20.932 L 1.8 0 L 0 0 L -1.8 0 L -1.8 20.932 L 0 20.932 Z M 17.18 21.317 L 18.332 19.934 L 10.152 13.117 L 9 14.5 L 7.848 15.883 L 16.028 22.699 L 17.18 21.317 Z M 9 14.5 L 7.848 13.117 L -0.332 19.934 L 0.82 21.317 L 1.972 22.699 L 10.152 15.883 L 9 14.5 Z M 0 20.932 L -1.8 20.932 C -1.8 22.883 0.474 23.948 1.972 22.699 L 0.82 21.317 L -0.332 19.934 C 0.514 19.228 1.8 19.83 1.8 20.932 L 0 20.932 Z M 18 20.932 L 16.2 20.932 C 16.2 19.83 17.486 19.228 18.332 19.934 L 17.18 21.317 L 16.028 22.699 C 17.526 23.948 19.8 22.883 19.8 20.932 L 18 20.932 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 1)\"/>"
    },
    "IconsNameBookmarkStateSelectedDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 0 L 18 0 L 18 20.932 C 18 21.356 17.506 21.588 17.18 21.317 L 9 14.5 L 0.82 21.317 C 0.494 21.588 0 21.356 0 20.932 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 1)\"/><path d=\"M 0 0 L 0 -1.8 C -0.994 -1.8 -1.8 -0.994 -1.8 0 L 0 0 Z M 18 0 L 19.8 0 C 19.8 -0.994 18.994 -1.8 18 -1.8 L 18 0 Z M 9 14.5 L 10.152 13.117 C 9.485 12.561 8.515 12.561 7.848 13.117 L 9 14.5 Z M 0.82 21.317 L 1.972 22.699 L 0.82 21.317 Z M 17.18 21.317 L 16.028 22.699 L 17.18 21.317 Z M 0 0 L 0 1.8 L 18 1.8 L 18 0 L 18 -1.8 L 0 -1.8 L 0 0 Z M 18 0 L 16.2 0 L 16.2 20.932 L 18 20.932 L 19.8 20.932 L 19.8 0 L 18 0 Z M 0 20.932 L 1.8 20.932 L 1.8 0 L 0 0 L -1.8 0 L -1.8 20.932 L 0 20.932 Z M 17.18 21.317 L 18.332 19.934 L 10.152 13.117 L 9 14.5 L 7.848 15.883 L 16.028 22.699 L 17.18 21.317 Z M 9 14.5 L 7.848 13.117 L -0.332 19.934 L 0.82 21.317 L 1.972 22.699 L 10.152 15.883 L 9 14.5 Z M 0 20.932 L -1.8 20.932 C -1.8 22.883 0.474 23.948 1.972 22.699 L 0.82 21.317 L -0.332 19.934 C 0.514 19.228 1.8 19.83 1.8 20.932 L 0 20.932 Z M 18 20.932 L 16.2 20.932 C 16.2 19.83 17.486 19.228 18.332 19.934 L 17.18 21.317 L 16.028 22.699 C 17.526 23.948 19.8 22.883 19.8 20.932 L 18 20.932 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 1)\"/>"
    },
    "IconsNameBookmarkStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 0 L 0 -1.8 C -0.994 -1.8 -1.8 -0.994 -1.8 0 L 0 0 Z M 18 0 L 19.8 0 C 19.8 -0.994 18.994 -1.8 18 -1.8 L 18 0 Z M 9 14.5 L 10.152 13.117 C 9.485 12.561 8.515 12.561 7.848 13.117 L 9 14.5 Z M 0.82 21.317 L 1.972 22.699 L 0.82 21.317 Z M 17.18 21.317 L 16.028 22.699 L 17.18 21.317 Z M 0 0 L 0 1.8 L 18 1.8 L 18 0 L 18 -1.8 L 0 -1.8 L 0 0 Z M 18 0 L 16.2 0 L 16.2 20.932 L 18 20.932 L 19.8 20.932 L 19.8 0 L 18 0 Z M 0 20.932 L 1.8 20.932 L 1.8 0 L 0 0 L -1.8 0 L -1.8 20.932 L 0 20.932 Z M 17.18 21.317 L 18.332 19.934 L 10.152 13.117 L 9 14.5 L 7.848 15.883 L 16.028 22.699 L 17.18 21.317 Z M 9 14.5 L 7.848 13.117 L -0.332 19.934 L 0.82 21.317 L 1.972 22.699 L 10.152 15.883 L 9 14.5 Z M 0 20.932 L -1.8 20.932 C -1.8 22.883 0.474 23.948 1.972 22.699 L 0.82 21.317 L -0.332 19.934 C 0.514 19.228 1.8 19.83 1.8 20.932 L 0 20.932 Z M 18 20.932 L 16.2 20.932 C 16.2 19.83 17.486 19.228 18.332 19.934 L 17.18 21.317 L 16.028 22.699 C 17.526 23.948 19.8 22.883 19.8 20.932 L 18 20.932 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 1)\"/>"
    },
    "IconsNameBurgerMenuStateDefault": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 -0.9 L 0 0 L 20 0 L 20 -0.9 L 20 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 6)\"/><path d=\"M 0 -0.9 L 0 0 L 20 0 L 20 -0.9 L 20 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 6) matrix(1 0 0 1 0 7)\"/><path d=\"M 0 -0.9 L 0 0 L 20 0 L 20 -0.9 L 20 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 6) matrix(1 0 0 1 0 14)\"/>"
    },
    "IconsNameBurgerMenuStateDefault2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 -0.9 L 0 0 L 20 0 L 20 -0.9 L 20 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 6)\"/><path d=\"M 0 -0.9 L 0 0 L 20 0 L 20 -0.9 L 20 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 6) matrix(1 0 0 1 0 7)\"/><path d=\"M 0 -0.9 L 0 0 L 20 0 L 20 -0.9 L 20 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 6) matrix(1 0 0 1 0 14)\"/>"
    },
    "IconsNameBurgerMenuStateUnselected": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 -0.9 L 0 0 L 20 0 L 20 -0.9 L 20 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 6)\"/><path d=\"M 0 -0.9 L 0 0 L 20 0 L 20 -0.9 L 20 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 6) matrix(1 0 0 1 0 7)\"/><path d=\"M 0 -0.9 L 0 0 L 20 0 L 20 -0.9 L 20 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 6) matrix(1 0 0 1 0 14)\"/>"
    },
    "IconsNameCommentStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 20.45 16.628 L 18.905 15.705 C 18.655 16.123 18.586 16.624 18.712 17.094 L 20.45 16.628 Z M 21.848 21.841 L 21.382 23.579 C 22.003 23.746 22.666 23.568 23.12 23.114 C 23.575 22.659 23.753 21.996 23.586 21.375 L 21.848 21.841 Z M 16.638 20.444 L 17.104 18.706 C 16.633 18.58 16.132 18.65 15.714 18.9 L 16.638 20.444 Z M 11 0 L 11 1.8 C 16.081 1.8 20.2 5.919 20.2 11 L 22 11 L 23.8 11 C 23.8 3.931 18.069 -1.8 11 -1.8 L 11 0 Z M 22 11 L 20.2 11 C 20.2 12.722 19.726 14.328 18.905 15.705 L 20.45 16.628 L 21.996 17.55 C 23.14 15.634 23.8 13.392 23.8 11 L 22 11 Z M 20.45 16.628 L 18.712 17.094 L 20.109 22.307 L 21.848 21.841 L 23.586 21.375 L 22.189 16.162 L 20.45 16.628 Z M 21.848 21.841 L 22.314 20.102 L 17.104 18.706 L 16.638 20.444 L 16.172 22.183 L 21.382 23.579 L 21.848 21.841 Z M 16.638 20.444 L 15.714 18.9 C 14.335 19.725 12.725 20.2 11 20.2 L 11 22 L 11 23.8 C 13.397 23.8 15.643 23.137 17.562 21.989 L 16.638 20.444 Z M 11 22 L 11 20.2 C 5.919 20.2 1.8 16.081 1.8 11 L 0 11 L -1.8 11 C -1.8 18.069 3.931 23.8 11 23.8 L 11 22 Z M 0 11 L 1.8 11 C 1.8 5.919 5.919 1.8 11 1.8 L 11 0 L 11 -1.8 C 3.931 -1.8 -1.8 3.931 -1.8 11 L 0 11 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/>"
    },
    "IconsNameCommentStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 20.45 16.628 L 18.905 15.705 C 18.655 16.123 18.586 16.624 18.712 17.094 L 20.45 16.628 Z M 21.848 21.841 L 21.382 23.579 C 22.003 23.746 22.666 23.568 23.12 23.114 C 23.575 22.659 23.753 21.996 23.586 21.375 L 21.848 21.841 Z M 16.638 20.444 L 17.104 18.706 C 16.633 18.58 16.132 18.65 15.714 18.9 L 16.638 20.444 Z M 11 0 L 11 1.8 C 16.081 1.8 20.2 5.919 20.2 11 L 22 11 L 23.8 11 C 23.8 3.931 18.069 -1.8 11 -1.8 L 11 0 Z M 22 11 L 20.2 11 C 20.2 12.722 19.726 14.328 18.905 15.705 L 20.45 16.628 L 21.996 17.55 C 23.14 15.634 23.8 13.392 23.8 11 L 22 11 Z M 20.45 16.628 L 18.712 17.094 L 20.109 22.307 L 21.848 21.841 L 23.586 21.375 L 22.189 16.162 L 20.45 16.628 Z M 21.848 21.841 L 22.314 20.102 L 17.104 18.706 L 16.638 20.444 L 16.172 22.183 L 21.382 23.579 L 21.848 21.841 Z M 16.638 20.444 L 15.714 18.9 C 14.335 19.725 12.725 20.2 11 20.2 L 11 22 L 11 23.8 C 13.397 23.8 15.643 23.137 17.562 21.989 L 16.638 20.444 Z M 11 22 L 11 20.2 C 5.919 20.2 1.8 16.081 1.8 11 L 0 11 L -1.8 11 C -1.8 18.069 3.931 23.8 11 23.8 L 11 22 Z M 0 11 L 1.8 11 C 1.8 5.919 5.919 1.8 11 1.8 L 11 0 L 11 -1.8 C 3.931 -1.8 -1.8 3.931 -1.8 11 L 0 11 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/>"
    },
    "IconsNameCommentStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 20.45 16.628 L 18.905 15.705 C 18.655 16.123 18.586 16.624 18.712 17.094 L 20.45 16.628 Z M 21.848 21.841 L 21.382 23.579 C 22.003 23.746 22.666 23.568 23.12 23.114 C 23.575 22.659 23.753 21.996 23.586 21.375 L 21.848 21.841 Z M 16.638 20.444 L 17.104 18.706 C 16.633 18.58 16.132 18.65 15.714 18.9 L 16.638 20.444 Z M 11 0 L 11 1.8 C 16.081 1.8 20.2 5.919 20.2 11 L 22 11 L 23.8 11 C 23.8 3.931 18.069 -1.8 11 -1.8 L 11 0 Z M 22 11 L 20.2 11 C 20.2 12.722 19.726 14.328 18.905 15.705 L 20.45 16.628 L 21.996 17.55 C 23.14 15.634 23.8 13.392 23.8 11 L 22 11 Z M 20.45 16.628 L 18.712 17.094 L 20.109 22.307 L 21.848 21.841 L 23.586 21.375 L 22.189 16.162 L 20.45 16.628 Z M 21.848 21.841 L 22.314 20.102 L 17.104 18.706 L 16.638 20.444 L 16.172 22.183 L 21.382 23.579 L 21.848 21.841 Z M 16.638 20.444 L 15.714 18.9 C 14.335 19.725 12.725 20.2 11 20.2 L 11 22 L 11 23.8 C 13.397 23.8 15.643 23.137 17.562 21.989 L 16.638 20.444 Z M 11 22 L 11 20.2 C 5.919 20.2 1.8 16.081 1.8 11 L 0 11 L -1.8 11 C -1.8 18.069 3.931 23.8 11 23.8 L 11 22 Z M 0 11 L 1.8 11 C 1.8 5.919 5.919 1.8 11 1.8 L 11 0 L 11 -1.8 C 3.931 -1.8 -1.8 3.931 -1.8 11 L 0 11 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/>"
    },
    "IconsNameExitStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 -0.9 L 0 0 L 28 0 L 28 -0.9 L 28 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 0.707 -0.707 0.707 12.500 -7.500) matrix(0 1 -1 0 12.727 0)\"/><path d=\"M 0 -0.9 L 0 0 L 28 0 L 28 -0.9 L 28 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 0.707 -0.707 0.707 12.500 -7.500) matrix(1 0 0 1 0 15.273)\"/>"
    },
    "IconsNameExitStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 -0.9 L 0 0 L 28 0 L 28 -0.9 L 28 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 0.707 -0.707 0.707 12.500 -7.500) matrix(0 1 -1 0 12.727 0)\"/><path d=\"M 0 -0.9 L 0 0 L 28 0 L 28 -0.9 L 28 -1.8 L 0 -1.8 L 0 -0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 0.707 -0.707 0.707 12.500 -7.500) matrix(1 0 0 1 0 15.273)\"/>"
    },
    "IconsNameFavoriteStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10 0 L 10.807 -0.398 C 10.655 -0.706 10.343 -0.9 10 -0.9 C 9.657 -0.9 9.345 -0.706 9.193 -0.398 L 10 0 Z M 12.939 5.955 L 12.132 6.353 C 12.263 6.619 12.516 6.803 12.81 6.846 L 12.939 5.955 Z M 19.511 6.91 L 20.139 7.554 C 20.384 7.315 20.472 6.958 20.367 6.632 C 20.261 6.306 19.979 6.068 19.64 6.019 L 19.511 6.91 Z M 14.755 11.545 L 14.127 10.901 C 13.915 11.107 13.818 11.405 13.868 11.697 L 14.755 11.545 Z M 15.878 18.09 L 15.459 18.887 C 15.762 19.046 16.13 19.02 16.407 18.818 C 16.684 18.617 16.823 18.276 16.765 17.938 L 15.878 18.09 Z M 10 15 L 10.419 14.203 C 10.157 14.066 9.843 14.066 9.581 14.203 L 10 15 Z M 4.122 18.09 L 3.235 17.938 C 3.177 18.276 3.316 18.617 3.593 18.818 C 3.87 19.02 4.238 19.046 4.541 18.887 L 4.122 18.09 Z M 5.245 11.545 L 6.132 11.697 C 6.182 11.405 6.085 11.107 5.873 10.901 L 5.245 11.545 Z M 0.489 6.91 L 0.36 6.019 C 0.021 6.068 -0.261 6.306 -0.367 6.632 C -0.472 6.958 -0.384 7.315 -0.139 7.554 L 0.489 6.91 Z M 7.061 5.955 L 7.19 6.846 C 7.484 6.803 7.737 6.619 7.868 6.353 L 7.061 5.955 Z M 10 0 L 9.193 0.398 L 12.132 6.353 L 12.939 5.955 L 13.746 5.557 L 10.807 -0.398 L 10 0 Z M 12.939 5.955 L 12.81 6.846 L 19.381 7.8 L 19.511 6.91 L 19.64 6.019 L 13.068 5.064 L 12.939 5.955 Z M 19.511 6.91 L 18.882 6.265 L 14.127 10.901 L 14.755 11.545 L 15.383 12.19 L 20.139 7.554 L 19.511 6.91 Z M 14.755 11.545 L 13.868 11.697 L 14.991 18.242 L 15.878 18.09 L 16.765 17.938 L 15.642 11.393 L 14.755 11.545 Z M 15.878 18.09 L 16.297 17.294 L 10.419 14.203 L 10 15 L 9.581 15.797 L 15.459 18.887 L 15.878 18.09 Z M 10 15 L 9.581 14.203 L 3.703 17.294 L 4.122 18.09 L 4.541 18.887 L 10.419 15.797 L 10 15 Z M 4.122 18.09 L 5.009 18.242 L 6.132 11.697 L 5.245 11.545 L 4.358 11.393 L 3.235 17.938 L 4.122 18.09 Z M 5.245 11.545 L 5.873 10.901 L 1.118 6.265 L 0.489 6.91 L -0.139 7.554 L 4.617 12.19 L 5.245 11.545 Z M 0.489 6.91 L 0.619 7.8 L 7.19 6.846 L 7.061 5.955 L 6.932 5.064 L 0.36 6.019 L 0.489 6.91 Z M 7.061 5.955 L 7.868 6.353 L 10.807 0.398 L 10 0 L 9.193 -0.398 L 6.254 5.557 L 7.061 5.955 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2.700)\"/>"
    },
    "IconsNameFavoriteStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10 0 L 10.807 -0.398 C 10.655 -0.706 10.343 -0.9 10 -0.9 C 9.657 -0.9 9.345 -0.706 9.193 -0.398 L 10 0 Z M 12.939 5.955 L 12.132 6.353 C 12.263 6.619 12.516 6.803 12.81 6.846 L 12.939 5.955 Z M 19.511 6.91 L 20.139 7.554 C 20.384 7.315 20.472 6.958 20.367 6.632 C 20.261 6.306 19.979 6.068 19.64 6.019 L 19.511 6.91 Z M 14.755 11.545 L 14.127 10.901 C 13.915 11.107 13.818 11.405 13.868 11.697 L 14.755 11.545 Z M 15.878 18.09 L 15.459 18.887 C 15.762 19.046 16.13 19.02 16.407 18.818 C 16.684 18.617 16.823 18.276 16.765 17.938 L 15.878 18.09 Z M 10 15 L 10.419 14.203 C 10.157 14.066 9.843 14.066 9.581 14.203 L 10 15 Z M 4.122 18.09 L 3.235 17.938 C 3.177 18.276 3.316 18.617 3.593 18.818 C 3.87 19.02 4.238 19.046 4.541 18.887 L 4.122 18.09 Z M 5.245 11.545 L 6.132 11.697 C 6.182 11.405 6.085 11.107 5.873 10.901 L 5.245 11.545 Z M 0.489 6.91 L 0.36 6.019 C 0.021 6.068 -0.261 6.306 -0.367 6.632 C -0.472 6.958 -0.384 7.315 -0.139 7.554 L 0.489 6.91 Z M 7.061 5.955 L 7.19 6.846 C 7.484 6.803 7.737 6.619 7.868 6.353 L 7.061 5.955 Z M 10 0 L 9.193 0.398 L 12.132 6.353 L 12.939 5.955 L 13.746 5.557 L 10.807 -0.398 L 10 0 Z M 12.939 5.955 L 12.81 6.846 L 19.381 7.8 L 19.511 6.91 L 19.64 6.019 L 13.068 5.064 L 12.939 5.955 Z M 19.511 6.91 L 18.882 6.265 L 14.127 10.901 L 14.755 11.545 L 15.383 12.19 L 20.139 7.554 L 19.511 6.91 Z M 14.755 11.545 L 13.868 11.697 L 14.991 18.242 L 15.878 18.09 L 16.765 17.938 L 15.642 11.393 L 14.755 11.545 Z M 15.878 18.09 L 16.297 17.294 L 10.419 14.203 L 10 15 L 9.581 15.797 L 15.459 18.887 L 15.878 18.09 Z M 10 15 L 9.581 14.203 L 3.703 17.294 L 4.122 18.09 L 4.541 18.887 L 10.419 15.797 L 10 15 Z M 4.122 18.09 L 5.009 18.242 L 6.132 11.697 L 5.245 11.545 L 4.358 11.393 L 3.235 17.938 L 4.122 18.09 Z M 5.245 11.545 L 5.873 10.901 L 1.118 6.265 L 0.489 6.91 L -0.139 7.554 L 4.617 12.19 L 5.245 11.545 Z M 0.489 6.91 L 0.619 7.8 L 7.19 6.846 L 7.061 5.955 L 6.932 5.064 L 0.36 6.019 L 0.489 6.91 Z M 7.061 5.955 L 7.868 6.353 L 10.807 0.398 L 10 0 L 9.193 -0.398 L 6.254 5.557 L 7.061 5.955 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2.700)\"/>"
    },
    "IconsNameFavoriteStateSelectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10 0 L 12.939 5.955 L 19.511 6.91 L 14.755 11.545 L 15.878 18.09 L 10 15 L 4.122 18.09 L 5.245 11.545 L 0.489 6.91 L 7.061 5.955 L 10 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2.700)\"/><path d=\"M 10 0 L 10.807 -0.398 C 10.655 -0.706 10.343 -0.9 10 -0.9 C 9.657 -0.9 9.345 -0.706 9.193 -0.398 L 10 0 Z M 12.939 5.955 L 12.132 6.353 C 12.263 6.619 12.516 6.803 12.81 6.846 L 12.939 5.955 Z M 19.511 6.91 L 20.139 7.554 C 20.384 7.315 20.472 6.958 20.367 6.632 C 20.261 6.306 19.979 6.068 19.64 6.019 L 19.511 6.91 Z M 14.755 11.545 L 14.127 10.901 C 13.915 11.107 13.818 11.405 13.868 11.697 L 14.755 11.545 Z M 15.878 18.09 L 15.459 18.887 C 15.762 19.046 16.13 19.02 16.407 18.818 C 16.684 18.617 16.823 18.276 16.765 17.938 L 15.878 18.09 Z M 10 15 L 10.419 14.203 C 10.157 14.066 9.843 14.066 9.581 14.203 L 10 15 Z M 4.122 18.09 L 3.235 17.938 C 3.177 18.276 3.316 18.617 3.593 18.818 C 3.87 19.02 4.238 19.046 4.541 18.887 L 4.122 18.09 Z M 5.245 11.545 L 6.132 11.697 C 6.182 11.405 6.085 11.107 5.873 10.901 L 5.245 11.545 Z M 0.489 6.91 L 0.36 6.019 C 0.021 6.068 -0.261 6.306 -0.367 6.632 C -0.472 6.958 -0.384 7.315 -0.139 7.554 L 0.489 6.91 Z M 7.061 5.955 L 7.19 6.846 C 7.484 6.803 7.737 6.619 7.868 6.353 L 7.061 5.955 Z M 10 0 L 9.193 0.398 L 12.132 6.353 L 12.939 5.955 L 13.746 5.557 L 10.807 -0.398 L 10 0 Z M 12.939 5.955 L 12.81 6.846 L 19.381 7.8 L 19.511 6.91 L 19.64 6.019 L 13.068 5.064 L 12.939 5.955 Z M 19.511 6.91 L 18.882 6.265 L 14.127 10.901 L 14.755 11.545 L 15.383 12.19 L 20.139 7.554 L 19.511 6.91 Z M 14.755 11.545 L 13.868 11.697 L 14.991 18.242 L 15.878 18.09 L 16.765 17.938 L 15.642 11.393 L 14.755 11.545 Z M 15.878 18.09 L 16.297 17.294 L 10.419 14.203 L 10 15 L 9.581 15.797 L 15.459 18.887 L 15.878 18.09 Z M 10 15 L 9.581 14.203 L 3.703 17.294 L 4.122 18.09 L 4.541 18.887 L 10.419 15.797 L 10 15 Z M 4.122 18.09 L 5.009 18.242 L 6.132 11.697 L 5.245 11.545 L 4.358 11.393 L 3.235 17.938 L 4.122 18.09 Z M 5.245 11.545 L 5.873 10.901 L 1.118 6.265 L 0.489 6.91 L -0.139 7.554 L 4.617 12.19 L 5.245 11.545 Z M 0.489 6.91 L 0.619 7.8 L 7.19 6.846 L 7.061 5.955 L 6.932 5.064 L 0.36 6.019 L 0.489 6.91 Z M 7.061 5.955 L 7.868 6.353 L 10.807 0.398 L 10 0 L 9.193 -0.398 L 6.254 5.557 L 7.061 5.955 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2.700)\"/>"
    },
    "IconsNameFavoriteStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10 0 L 10.807 -0.398 C 10.655 -0.706 10.343 -0.9 10 -0.9 C 9.657 -0.9 9.345 -0.706 9.193 -0.398 L 10 0 Z M 12.939 5.955 L 12.132 6.353 C 12.263 6.619 12.516 6.803 12.81 6.846 L 12.939 5.955 Z M 19.511 6.91 L 20.139 7.554 C 20.384 7.315 20.472 6.958 20.367 6.632 C 20.261 6.306 19.979 6.068 19.64 6.019 L 19.511 6.91 Z M 14.755 11.545 L 14.127 10.901 C 13.915 11.107 13.818 11.405 13.868 11.697 L 14.755 11.545 Z M 15.878 18.09 L 15.459 18.887 C 15.762 19.046 16.13 19.02 16.407 18.818 C 16.684 18.617 16.823 18.276 16.765 17.938 L 15.878 18.09 Z M 10 15 L 10.419 14.203 C 10.157 14.066 9.843 14.066 9.581 14.203 L 10 15 Z M 4.122 18.09 L 3.235 17.938 C 3.177 18.276 3.316 18.617 3.593 18.818 C 3.87 19.02 4.238 19.046 4.541 18.887 L 4.122 18.09 Z M 5.245 11.545 L 6.132 11.697 C 6.182 11.405 6.085 11.107 5.873 10.901 L 5.245 11.545 Z M 0.489 6.91 L 0.36 6.019 C 0.021 6.068 -0.261 6.306 -0.367 6.632 C -0.472 6.958 -0.384 7.315 -0.139 7.554 L 0.489 6.91 Z M 7.061 5.955 L 7.19 6.846 C 7.484 6.803 7.737 6.619 7.868 6.353 L 7.061 5.955 Z M 10 0 L 9.193 0.398 L 12.132 6.353 L 12.939 5.955 L 13.746 5.557 L 10.807 -0.398 L 10 0 Z M 12.939 5.955 L 12.81 6.846 L 19.381 7.8 L 19.511 6.91 L 19.64 6.019 L 13.068 5.064 L 12.939 5.955 Z M 19.511 6.91 L 18.882 6.265 L 14.127 10.901 L 14.755 11.545 L 15.383 12.19 L 20.139 7.554 L 19.511 6.91 Z M 14.755 11.545 L 13.868 11.697 L 14.991 18.242 L 15.878 18.09 L 16.765 17.938 L 15.642 11.393 L 14.755 11.545 Z M 15.878 18.09 L 16.297 17.294 L 10.419 14.203 L 10 15 L 9.581 15.797 L 15.459 18.887 L 15.878 18.09 Z M 10 15 L 9.581 14.203 L 3.703 17.294 L 4.122 18.09 L 4.541 18.887 L 10.419 15.797 L 10 15 Z M 4.122 18.09 L 5.009 18.242 L 6.132 11.697 L 5.245 11.545 L 4.358 11.393 L 3.235 17.938 L 4.122 18.09 Z M 5.245 11.545 L 5.873 10.901 L 1.118 6.265 L 0.489 6.91 L -0.139 7.554 L 4.617 12.19 L 5.245 11.545 Z M 0.489 6.91 L 0.619 7.8 L 7.19 6.846 L 7.061 5.955 L 6.932 5.064 L 0.36 6.019 L 0.489 6.91 Z M 7.061 5.955 L 7.868 6.353 L 10.807 0.398 L 10 0 L 9.193 -0.398 L 6.254 5.557 L 7.061 5.955 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2.700)\"/>"
    },
    "IconsNameGridStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 0 L 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 Z M 16 0 L 16.9 0 C 16.9 -0.497 16.497 -0.9 16 -0.9 L 16 0 Z M 16 16 L 16 16.9 C 16.497 16.9 16.9 16.497 16.9 16 L 16 16 Z M 0 16 L -0.9 16 C -0.9 16.497 -0.497 16.9 0 16.9 L 0 16 Z M 0 0 L 0 0.9 L 16 0.9 L 16 0 L 16 -0.9 L 0 -0.9 L 0 0 Z M 16 0 L 15.1 0 L 15.1 16 L 16 16 L 16.9 16 L 16.9 0 L 16 0 Z M 16 16 L 16 15.1 L 0 15.1 L 0 16 L 0 16.9 L 16 16.9 L 16 16 Z M 0 16 L 0.9 16 L 0.9 0 L 0 0 L -0.9 0 L -0.9 16 L 0 16 Z M 5.448 0 L 4.548 0 L 4.548 16 L 5.448 16 L 6.348 16 L 6.348 0 L 5.448 0 Z M 0.19 10.552 L 0.19 11.452 L 16.19 11.452 L 16.19 10.552 L 16.19 9.652 L 0.19 9.652 L 0.19 10.552 Z M 10.4 0 L 9.5 0 L 9.5 16 L 10.4 16 L 11.3 16 L 11.3 0 L 10.4 0 Z M 0.19 5.6 L 0.19 6.5 L 16.19 6.5 L 16.19 5.6 L 16.19 4.7 L 0.19 4.7 L 0.19 5.6 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 4)\"/>"
    },
    "IconsNameGridStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 0 L 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 Z M 16 0 L 16.9 0 C 16.9 -0.497 16.497 -0.9 16 -0.9 L 16 0 Z M 16 16 L 16 16.9 C 16.497 16.9 16.9 16.497 16.9 16 L 16 16 Z M 0 16 L -0.9 16 C -0.9 16.497 -0.497 16.9 0 16.9 L 0 16 Z M 0 0 L 0 0.9 L 16 0.9 L 16 0 L 16 -0.9 L 0 -0.9 L 0 0 Z M 16 0 L 15.1 0 L 15.1 16 L 16 16 L 16.9 16 L 16.9 0 L 16 0 Z M 16 16 L 16 15.1 L 0 15.1 L 0 16 L 0 16.9 L 16 16.9 L 16 16 Z M 0 16 L 0.9 16 L 0.9 0 L 0 0 L -0.9 0 L -0.9 16 L 0 16 Z M 5.448 0 L 4.548 0 L 4.548 16 L 5.448 16 L 6.348 16 L 6.348 0 L 5.448 0 Z M 0.19 10.552 L 0.19 11.452 L 16.19 11.452 L 16.19 10.552 L 16.19 9.652 L 0.19 9.652 L 0.19 10.552 Z M 10.4 0 L 9.5 0 L 9.5 16 L 10.4 16 L 11.3 16 L 11.3 0 L 10.4 0 Z M 0.19 5.6 L 0.19 6.5 L 16.19 6.5 L 16.19 5.6 L 16.19 4.7 L 0.19 4.7 L 0.19 5.6 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 4)\"/>"
    },
    "IconsNameGridStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 0 L 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 Z M 16 0 L 16.9 0 C 16.9 -0.497 16.497 -0.9 16 -0.9 L 16 0 Z M 16 16 L 16 16.9 C 16.497 16.9 16.9 16.497 16.9 16 L 16 16 Z M 0 16 L -0.9 16 C -0.9 16.497 -0.497 16.9 0 16.9 L 0 16 Z M 0 0 L 0 0.9 L 16 0.9 L 16 0 L 16 -0.9 L 0 -0.9 L 0 0 Z M 16 0 L 15.1 0 L 15.1 16 L 16 16 L 16.9 16 L 16.9 0 L 16 0 Z M 16 16 L 16 15.1 L 0 15.1 L 0 16 L 0 16.9 L 16 16.9 L 16 16 Z M 0 16 L 0.9 16 L 0.9 0 L 0 0 L -0.9 0 L -0.9 16 L 0 16 Z M 5.448 0 L 4.548 0 L 4.548 16 L 5.448 16 L 6.348 16 L 6.348 0 L 5.448 0 Z M 0.19 10.552 L 0.19 11.452 L 16.19 11.452 L 16.19 10.552 L 16.19 9.652 L 0.19 9.652 L 0.19 10.552 Z M 10.4 0 L 9.5 0 L 9.5 16 L 10.4 16 L 11.3 16 L 11.3 0 L 10.4 0 Z M 0.19 5.6 L 0.19 6.5 L 16.19 6.5 L 16.19 5.6 L 16.19 4.7 L 0.19 4.7 L 0.19 5.6 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 4)\"/>"
    },
    "IconsNameHomeStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.347 0.19 C 10.694 -0.082 11.196 -0.062 11.521 0.249 L 21.521 9.785 C 21.699 9.955 21.801 10.19 21.801 10.436 L 21.801 20.9 C 21.801 21.397 21.397 21.8 20.9 21.8 L 13.9 21.8 L 13.9 20.9 L 13.898 20.9 L 13.898 15.798 C 13.898 14.143 12.556 12.801 10.9 12.8 C 9.244 12.8 7.902 14.143 7.902 15.798 L 7.902 20.9 L 7.9 20.9 L 7.9 21.8 L 0.9 21.8 C 0.403 21.8 0 21.397 0 20.9 L 0 10.436 C 0 10.19 0.101 9.955 0.279 9.785 L 10.279 0.249 L 10.347 0.19 Z M 1.801 10.821 L 1.801 20 L 6.102 20 L 6.102 15.798 C 6.102 13.148 8.25 11 10.9 11 C 13.55 11 15.699 13.149 15.699 15.798 L 15.699 20 L 20 20 L 20 10.821 L 10.9 2.143 L 1.801 10.821 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.100 1.100)\"/>"
    },
    "IconsNameHomeStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.347 0.19 C 10.694 -0.082 11.196 -0.062 11.521 0.249 L 21.521 9.785 C 21.699 9.955 21.801 10.19 21.801 10.436 L 21.801 20.9 C 21.801 21.397 21.397 21.8 20.9 21.8 L 13.9 21.8 L 13.9 20.9 L 13.898 20.9 L 13.898 15.798 C 13.898 14.143 12.556 12.801 10.9 12.8 C 9.244 12.8 7.902 14.143 7.902 15.798 L 7.902 20.9 L 7.9 20.9 L 7.9 21.8 L 0.9 21.8 C 0.403 21.8 0 21.397 0 20.9 L 0 10.436 C 0 10.19 0.101 9.955 0.279 9.785 L 10.279 0.249 L 10.347 0.19 Z M 1.801 10.821 L 1.801 20 L 6.102 20 L 6.102 15.798 C 6.102 13.148 8.25 11 10.9 11 C 13.55 11 15.699 13.149 15.699 15.798 L 15.699 20 L 20 20 L 20 10.821 L 10.9 2.143 L 1.801 10.821 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.100 1.100)\"/>"
    },
    "IconsNameHomeStateSelectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 20 9.536 L 20 20 L 14 20 L 14 15 C 14 12.791 12.209 11 10 11 C 7.791 11 6 12.791 6 15 L 6 20 L 0 20 L 0 9.536 L 10 0 L 20 9.536 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2 2)\"/><path d=\"M 20 20 L 20 20.5 L 20.5 20.5 L 20.5 20 L 20 20 Z M 20 9.536 L 20.5 9.536 L 20.5 9.322 L 20.345 9.174 L 20 9.536 Z M 14 20 L 13.5 20 L 13.5 20.5 L 14 20.5 L 14 20 Z M 6 20 L 6 20.5 L 6.5 20.5 L 6.5 20 L 6 20 Z M 0 20 L -0.5 20 L -0.5 20.5 L 0 20.5 L 0 20 Z M 0 9.536 L -0.345 9.174 L -0.5 9.322 L -0.5 9.536 L 0 9.536 Z M 10 0 L 10.345 -0.362 L 10 -0.691 L 9.655 -0.362 L 10 0 Z M 20 20 L 20.5 20 L 20.5 9.536 L 20 9.536 L 19.5 9.536 L 19.5 20 L 20 20 Z M 14 20 L 14 20.5 L 20 20.5 L 20 20 L 20 19.5 L 14 19.5 L 14 20 Z M 14 20 L 14.5 20 L 14.5 15 L 14 15 L 13.5 15 L 13.5 20 L 14 20 Z M 14 15 L 14.5 15 C 14.5 12.515 12.485 10.5 10 10.5 L 10 11 L 10 11.5 C 11.933 11.5 13.5 13.067 13.5 15 L 14 15 Z M 10 11 L 10 10.5 C 7.515 10.5 5.5 12.515 5.5 15 L 6 15 L 6.5 15 C 6.5 13.067 8.067 11.5 10 11.5 L 10 11 Z M 6 15 L 5.5 15 L 5.5 20 L 6 20 L 6.5 20 L 6.5 15 L 6 15 Z M 0 20 L 0 20.5 L 6 20.5 L 6 20 L 6 19.5 L 0 19.5 L 0 20 Z M 0 9.536 L -0.5 9.536 L -0.5 20 L 0 20 L 0.5 20 L 0.5 9.536 L 0 9.536 Z M 10 0 L 9.655 -0.362 L -0.345 9.174 L 0 9.536 L 0.345 9.898 L 10.345 0.362 L 10 0 Z M 20 9.536 L 20.345 9.174 L 10.345 -0.362 L 10 0 L 9.655 0.362 L 19.655 9.898 L 20 9.536 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/>"
    },
    "IconsNameHomeStateSelectedDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 20 9.536 L 20 20 L 14 20 L 14 15 C 14 12.791 12.209 11 10 11 C 7.791 11 6 12.791 6 15 L 6 20 L 0 20 L 0 9.536 L 10 0 L 20 9.536 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2 2)\"/><path d=\"M 20 20 L 20 20.5 L 20.5 20.5 L 20.5 20 L 20 20 Z M 20 9.536 L 20.5 9.536 L 20.5 9.322 L 20.345 9.174 L 20 9.536 Z M 14 20 L 13.5 20 L 13.5 20.5 L 14 20.5 L 14 20 Z M 6 20 L 6 20.5 L 6.5 20.5 L 6.5 20 L 6 20 Z M 0 20 L -0.5 20 L -0.5 20.5 L 0 20.5 L 0 20 Z M 0 9.536 L -0.345 9.174 L -0.5 9.322 L -0.5 9.536 L 0 9.536 Z M 10 0 L 10.345 -0.362 L 10 -0.691 L 9.655 -0.362 L 10 0 Z M 20 20 L 20.5 20 L 20.5 9.536 L 20 9.536 L 19.5 9.536 L 19.5 20 L 20 20 Z M 14 20 L 14 20.5 L 20 20.5 L 20 20 L 20 19.5 L 14 19.5 L 14 20 Z M 14 20 L 14.5 20 L 14.5 15 L 14 15 L 13.5 15 L 13.5 20 L 14 20 Z M 14 15 L 14.5 15 C 14.5 12.515 12.485 10.5 10 10.5 L 10 11 L 10 11.5 C 11.933 11.5 13.5 13.067 13.5 15 L 14 15 Z M 10 11 L 10 10.5 C 7.515 10.5 5.5 12.515 5.5 15 L 6 15 L 6.5 15 C 6.5 13.067 8.067 11.5 10 11.5 L 10 11 Z M 6 15 L 5.5 15 L 5.5 20 L 6 20 L 6.5 20 L 6.5 15 L 6 15 Z M 0 20 L 0 20.5 L 6 20.5 L 6 20 L 6 19.5 L 0 19.5 L 0 20 Z M 0 9.536 L -0.5 9.536 L -0.5 20 L 0 20 L 0.5 20 L 0.5 9.536 L 0 9.536 Z M 10 0 L 9.655 -0.362 L -0.345 9.174 L 0 9.536 L 0.345 9.898 L 10.345 0.362 L 10 0 Z M 20 9.536 L 20.345 9.174 L 10.345 -0.362 L 10 0 L 9.655 0.362 L 19.655 9.898 L 20 9.536 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/>"
    },
    "IconsNameHomeStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.347 0.19 C 10.694 -0.082 11.196 -0.062 11.521 0.249 L 21.521 9.785 C 21.699 9.955 21.801 10.19 21.801 10.436 L 21.801 20.9 C 21.801 21.397 21.397 21.8 20.9 21.8 L 13.9 21.8 L 13.9 20.9 L 13.898 20.9 L 13.898 15.798 C 13.898 14.143 12.556 12.801 10.9 12.8 C 9.244 12.8 7.902 14.143 7.902 15.798 L 7.902 20.9 L 7.9 20.9 L 7.9 21.8 L 0.9 21.8 C 0.403 21.8 0 21.397 0 20.9 L 0 10.436 C 0 10.19 0.101 9.955 0.279 9.785 L 10.279 0.249 L 10.347 0.19 Z M 1.801 10.821 L 1.801 20 L 6.102 20 L 6.102 15.798 C 6.102 13.148 8.25 11 10.9 11 C 13.55 11 15.699 13.149 15.699 15.798 L 15.699 20 L 20 20 L 20 10.821 L 10.9 2.143 L 1.801 10.821 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.100 1.100)\"/>"
    },
    "IconsNameLikeHeartStateDefault": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 11.291 2.907 C 11.66 2.522 12.005 2.117 12.397 1.761 C 14.512 -0.163 17.356 -0.544 19.564 0.784 C 21.839 2.153 22.983 5.031 22.306 7.756 C 21.692 10.231 20.198 12.184 18.511 14.009 C 16.449 16.24 14.066 18.102 11.616 19.879 C 11.463 19.991 11.119 20.046 10.992 19.954 C 7.626 17.503 4.349 14.947 1.938 11.479 C 0.858 9.927 0.04 8.252 0.001 6.306 C -0.049 3.741 1.398 1.394 3.576 0.454 C 5.762 -0.49 8.403 0.088 10.271 1.919 C 10.591 2.233 10.915 2.543 11.291 2.907 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1.999)\"/><path d=\"M 11.291 2.907 L 10.037 4.199 L 11.337 5.46 L 12.59 4.153 L 11.291 2.907 Z M 12.397 1.761 L 13.607 3.093 L 13.608 3.093 L 12.397 1.761 Z M 19.564 0.784 L 20.492 -0.759 L 20.492 -0.759 L 19.564 0.784 Z M 22.306 7.756 L 20.559 7.322 L 20.559 7.323 L 22.306 7.756 Z M 18.511 14.009 L 17.189 12.787 L 17.189 12.787 L 18.511 14.009 Z M 11.616 19.879 L 10.559 18.423 L 10.559 18.423 L 11.616 19.879 Z M 10.992 19.954 L 9.932 21.409 L 9.932 21.409 L 10.992 19.954 Z M 1.938 11.479 L 3.416 10.451 L 3.415 10.45 L 1.938 11.479 Z M 0.001 6.306 L 1.801 6.271 L 1.801 6.271 L 0.001 6.306 Z M 3.576 0.454 L 4.289 2.107 L 4.29 2.106 L 3.576 0.454 Z M 10.271 1.919 L 11.532 0.634 L 11.531 0.633 L 10.271 1.919 Z M 11.291 2.907 L 12.59 4.153 C 13.062 3.661 13.273 3.397 13.607 3.093 L 12.397 1.761 L 11.187 0.429 C 10.737 0.837 10.258 1.383 9.991 1.662 L 11.291 2.907 Z M 12.397 1.761 L 13.608 3.093 C 15.218 1.628 17.201 1.463 18.636 2.326 L 19.564 0.784 L 20.492 -0.759 C 17.51 -2.552 13.806 -1.953 11.186 0.429 L 12.397 1.761 Z M 19.564 0.784 L 18.636 2.326 C 20.191 3.262 21.058 5.314 20.559 7.322 L 22.306 7.756 L 24.053 8.19 C 24.908 4.748 23.487 1.044 20.492 -0.759 L 19.564 0.784 Z M 22.306 7.756 L 20.559 7.323 C 20.057 9.344 18.821 11.022 17.189 12.787 L 18.511 14.009 L 19.833 15.231 C 21.575 13.346 23.326 11.118 24.053 8.19 L 22.306 7.756 Z M 18.511 14.009 L 17.189 12.787 C 15.25 14.885 12.984 16.663 10.559 18.423 L 11.616 19.879 L 12.673 21.336 C 15.148 19.541 17.647 17.595 19.833 15.231 L 18.511 14.009 Z M 11.616 19.879 L 10.559 18.423 C 10.705 18.316 10.827 18.269 10.88 18.251 C 10.943 18.229 11 18.216 11.055 18.209 C 11.105 18.202 11.199 18.194 11.329 18.209 C 11.428 18.22 11.73 18.265 12.051 18.498 L 10.992 19.954 L 9.932 21.409 C 10.317 21.689 10.71 21.761 10.914 21.785 C 11.148 21.812 11.362 21.8 11.533 21.777 C 11.828 21.738 12.272 21.627 12.673 21.336 L 11.616 19.879 Z M 10.992 19.954 L 12.051 18.498 C 8.691 16.052 5.638 13.648 3.416 10.451 L 1.938 11.479 L 0.46 12.506 C 3.059 16.245 6.56 18.954 9.932 21.409 L 10.992 19.954 Z M 1.938 11.479 L 3.415 10.45 C 2.429 9.034 1.829 7.709 1.801 6.271 L 0.001 6.306 L -1.798 6.341 C -1.75 8.795 -0.714 10.82 0.46 12.507 L 1.938 11.479 Z M 0.001 6.306 L 1.801 6.271 C 1.763 4.372 2.84 2.732 4.289 2.107 L 3.576 0.454 L 2.863 -1.199 C -0.045 0.056 -1.862 3.111 -1.798 6.342 L 0.001 6.306 Z M 3.576 0.454 L 4.29 2.106 C 5.722 1.488 7.598 1.82 9.012 3.205 L 10.271 1.919 L 11.531 0.633 C 9.207 -1.644 5.802 -2.468 2.863 -1.199 L 3.576 0.454 Z M 10.271 1.919 L 9.011 3.204 C 9.335 3.522 9.674 3.846 10.037 4.199 L 11.291 2.907 L 12.544 1.616 C 12.157 1.24 11.848 0.944 11.532 0.634 L 10.271 1.919 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1.999)\"/>"
    },
    "IconsNameLikeStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 11.291 2.907 L 10.037 4.199 L 11.337 5.46 L 12.59 4.153 L 11.291 2.907 Z M 12.397 1.761 L 13.607 3.093 L 13.608 3.093 L 12.397 1.761 Z M 19.564 0.784 L 20.492 -0.759 L 20.492 -0.759 L 19.564 0.784 Z M 22.306 7.756 L 20.559 7.322 L 20.559 7.323 L 22.306 7.756 Z M 18.511 14.009 L 17.189 12.787 L 17.189 12.787 L 18.511 14.009 Z M 11.616 19.879 L 10.559 18.423 L 10.559 18.423 L 11.616 19.879 Z M 10.992 19.954 L 9.932 21.409 L 9.932 21.409 L 10.992 19.954 Z M 1.938 11.479 L 3.416 10.451 L 3.415 10.45 L 1.938 11.479 Z M 0.001 6.306 L 1.801 6.271 L 1.801 6.271 L 0.001 6.306 Z M 3.576 0.454 L 4.289 2.107 L 4.29 2.106 L 3.576 0.454 Z M 10.271 1.919 L 11.532 0.634 L 11.531 0.633 L 10.271 1.919 Z M 11.291 2.907 L 12.59 4.153 C 13.062 3.661 13.273 3.397 13.607 3.093 L 12.397 1.761 L 11.187 0.429 C 10.737 0.837 10.258 1.383 9.991 1.662 L 11.291 2.907 Z M 12.397 1.761 L 13.608 3.093 C 15.218 1.628 17.201 1.463 18.636 2.326 L 19.564 0.784 L 20.492 -0.759 C 17.51 -2.552 13.806 -1.953 11.186 0.429 L 12.397 1.761 Z M 19.564 0.784 L 18.636 2.326 C 20.191 3.262 21.058 5.314 20.559 7.322 L 22.306 7.756 L 24.053 8.19 C 24.908 4.748 23.487 1.044 20.492 -0.759 L 19.564 0.784 Z M 22.306 7.756 L 20.559 7.323 C 20.057 9.344 18.821 11.022 17.189 12.787 L 18.511 14.009 L 19.833 15.231 C 21.575 13.346 23.326 11.118 24.053 8.19 L 22.306 7.756 Z M 18.511 14.009 L 17.189 12.787 C 15.25 14.885 12.984 16.663 10.559 18.423 L 11.616 19.879 L 12.673 21.336 C 15.148 19.541 17.647 17.595 19.833 15.231 L 18.511 14.009 Z M 11.616 19.879 L 10.559 18.423 C 10.705 18.316 10.827 18.269 10.88 18.251 C 10.943 18.229 11 18.216 11.055 18.209 C 11.105 18.202 11.199 18.194 11.329 18.209 C 11.428 18.22 11.73 18.265 12.051 18.498 L 10.992 19.954 L 9.932 21.409 C 10.317 21.689 10.71 21.761 10.914 21.785 C 11.148 21.812 11.362 21.8 11.533 21.777 C 11.828 21.738 12.272 21.627 12.673 21.336 L 11.616 19.879 Z M 10.992 19.954 L 12.051 18.498 C 8.691 16.052 5.638 13.648 3.416 10.451 L 1.938 11.479 L 0.46 12.506 C 3.059 16.245 6.56 18.954 9.932 21.409 L 10.992 19.954 Z M 1.938 11.479 L 3.415 10.45 C 2.429 9.034 1.829 7.709 1.801 6.271 L 0.001 6.306 L -1.798 6.341 C -1.75 8.795 -0.714 10.82 0.46 12.507 L 1.938 11.479 Z M 0.001 6.306 L 1.801 6.271 C 1.763 4.372 2.84 2.732 4.289 2.107 L 3.576 0.454 L 2.863 -1.199 C -0.045 0.056 -1.862 3.111 -1.798 6.342 L 0.001 6.306 Z M 3.576 0.454 L 4.29 2.106 C 5.722 1.488 7.598 1.82 9.012 3.205 L 10.271 1.919 L 11.531 0.633 C 9.207 -1.644 5.802 -2.468 2.863 -1.199 L 3.576 0.454 Z M 10.271 1.919 L 9.011 3.204 C 9.335 3.522 9.674 3.846 10.037 4.199 L 11.291 2.907 L 12.544 1.616 C 12.157 1.24 11.848 0.944 11.532 0.634 L 10.271 1.919 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1.999)\"/>"
    },
    "IconsNameLikeStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 11.291 2.907 L 10.037 4.199 L 11.337 5.46 L 12.59 4.153 L 11.291 2.907 Z M 12.397 1.761 L 13.607 3.093 L 13.608 3.093 L 12.397 1.761 Z M 19.564 0.784 L 20.492 -0.759 L 20.492 -0.759 L 19.564 0.784 Z M 22.306 7.756 L 20.559 7.322 L 20.559 7.323 L 22.306 7.756 Z M 18.511 14.009 L 17.189 12.787 L 17.189 12.787 L 18.511 14.009 Z M 11.616 19.879 L 10.559 18.423 L 10.559 18.423 L 11.616 19.879 Z M 10.992 19.954 L 9.932 21.409 L 9.932 21.409 L 10.992 19.954 Z M 1.938 11.479 L 3.416 10.451 L 3.415 10.45 L 1.938 11.479 Z M 0.001 6.306 L 1.801 6.271 L 1.801 6.271 L 0.001 6.306 Z M 3.576 0.454 L 4.289 2.107 L 4.29 2.106 L 3.576 0.454 Z M 10.271 1.919 L 11.532 0.634 L 11.531 0.633 L 10.271 1.919 Z M 11.291 2.907 L 12.59 4.153 C 13.062 3.661 13.273 3.397 13.607 3.093 L 12.397 1.761 L 11.187 0.429 C 10.737 0.837 10.258 1.383 9.991 1.662 L 11.291 2.907 Z M 12.397 1.761 L 13.608 3.093 C 15.218 1.628 17.201 1.463 18.636 2.326 L 19.564 0.784 L 20.492 -0.759 C 17.51 -2.552 13.806 -1.953 11.186 0.429 L 12.397 1.761 Z M 19.564 0.784 L 18.636 2.326 C 20.191 3.262 21.058 5.314 20.559 7.322 L 22.306 7.756 L 24.053 8.19 C 24.908 4.748 23.487 1.044 20.492 -0.759 L 19.564 0.784 Z M 22.306 7.756 L 20.559 7.323 C 20.057 9.344 18.821 11.022 17.189 12.787 L 18.511 14.009 L 19.833 15.231 C 21.575 13.346 23.326 11.118 24.053 8.19 L 22.306 7.756 Z M 18.511 14.009 L 17.189 12.787 C 15.25 14.885 12.984 16.663 10.559 18.423 L 11.616 19.879 L 12.673 21.336 C 15.148 19.541 17.647 17.595 19.833 15.231 L 18.511 14.009 Z M 11.616 19.879 L 10.559 18.423 C 10.705 18.316 10.827 18.269 10.88 18.251 C 10.943 18.229 11 18.216 11.055 18.209 C 11.105 18.202 11.199 18.194 11.329 18.209 C 11.428 18.22 11.73 18.265 12.051 18.498 L 10.992 19.954 L 9.932 21.409 C 10.317 21.689 10.71 21.761 10.914 21.785 C 11.148 21.812 11.362 21.8 11.533 21.777 C 11.828 21.738 12.272 21.627 12.673 21.336 L 11.616 19.879 Z M 10.992 19.954 L 12.051 18.498 C 8.691 16.052 5.638 13.648 3.416 10.451 L 1.938 11.479 L 0.46 12.506 C 3.059 16.245 6.56 18.954 9.932 21.409 L 10.992 19.954 Z M 1.938 11.479 L 3.415 10.45 C 2.429 9.034 1.829 7.709 1.801 6.271 L 0.001 6.306 L -1.798 6.341 C -1.75 8.795 -0.714 10.82 0.46 12.507 L 1.938 11.479 Z M 0.001 6.306 L 1.801 6.271 C 1.763 4.372 2.84 2.732 4.289 2.107 L 3.576 0.454 L 2.863 -1.199 C -0.045 0.056 -1.862 3.111 -1.798 6.342 L 0.001 6.306 Z M 3.576 0.454 L 4.29 2.106 C 5.722 1.488 7.598 1.82 9.012 3.205 L 10.271 1.919 L 11.531 0.633 C 9.207 -1.644 5.802 -2.468 2.863 -1.199 L 3.576 0.454 Z M 10.271 1.919 L 9.011 3.204 C 9.335 3.522 9.674 3.846 10.037 4.199 L 11.291 2.907 L 12.544 1.616 C 12.157 1.24 11.848 0.944 11.532 0.634 L 10.271 1.919 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1.999)\"/>"
    },
    "IconsNameLikeStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 11.291 2.907 L 10.037 4.199 L 11.337 5.46 L 12.59 4.153 L 11.291 2.907 Z M 12.397 1.761 L 13.607 3.093 L 13.608 3.093 L 12.397 1.761 Z M 19.564 0.784 L 20.492 -0.759 L 20.492 -0.759 L 19.564 0.784 Z M 22.306 7.756 L 20.559 7.322 L 20.559 7.323 L 22.306 7.756 Z M 18.511 14.009 L 17.189 12.787 L 17.189 12.787 L 18.511 14.009 Z M 11.616 19.879 L 10.559 18.423 L 10.559 18.423 L 11.616 19.879 Z M 10.992 19.954 L 9.932 21.409 L 9.932 21.409 L 10.992 19.954 Z M 1.938 11.479 L 3.416 10.451 L 3.415 10.45 L 1.938 11.479 Z M 0.001 6.306 L 1.801 6.271 L 1.801 6.271 L 0.001 6.306 Z M 3.576 0.454 L 4.289 2.107 L 4.29 2.106 L 3.576 0.454 Z M 10.271 1.919 L 11.532 0.634 L 11.531 0.633 L 10.271 1.919 Z M 11.291 2.907 L 12.59 4.153 C 13.062 3.661 13.273 3.397 13.607 3.093 L 12.397 1.761 L 11.187 0.429 C 10.737 0.837 10.258 1.383 9.991 1.662 L 11.291 2.907 Z M 12.397 1.761 L 13.608 3.093 C 15.218 1.628 17.201 1.463 18.636 2.326 L 19.564 0.784 L 20.492 -0.759 C 17.51 -2.552 13.806 -1.953 11.186 0.429 L 12.397 1.761 Z M 19.564 0.784 L 18.636 2.326 C 20.191 3.262 21.058 5.314 20.559 7.322 L 22.306 7.756 L 24.053 8.19 C 24.908 4.748 23.487 1.044 20.492 -0.759 L 19.564 0.784 Z M 22.306 7.756 L 20.559 7.323 C 20.057 9.344 18.821 11.022 17.189 12.787 L 18.511 14.009 L 19.833 15.231 C 21.575 13.346 23.326 11.118 24.053 8.19 L 22.306 7.756 Z M 18.511 14.009 L 17.189 12.787 C 15.25 14.885 12.984 16.663 10.559 18.423 L 11.616 19.879 L 12.673 21.336 C 15.148 19.541 17.647 17.595 19.833 15.231 L 18.511 14.009 Z M 11.616 19.879 L 10.559 18.423 C 10.705 18.316 10.827 18.269 10.88 18.251 C 10.943 18.229 11 18.216 11.055 18.209 C 11.105 18.202 11.199 18.194 11.329 18.209 C 11.428 18.22 11.73 18.265 12.051 18.498 L 10.992 19.954 L 9.932 21.409 C 10.317 21.689 10.71 21.761 10.914 21.785 C 11.148 21.812 11.362 21.8 11.533 21.777 C 11.828 21.738 12.272 21.627 12.673 21.336 L 11.616 19.879 Z M 10.992 19.954 L 12.051 18.498 C 8.691 16.052 5.638 13.648 3.416 10.451 L 1.938 11.479 L 0.46 12.506 C 3.059 16.245 6.56 18.954 9.932 21.409 L 10.992 19.954 Z M 1.938 11.479 L 3.415 10.45 C 2.429 9.034 1.829 7.709 1.801 6.271 L 0.001 6.306 L -1.798 6.341 C -1.75 8.795 -0.714 10.82 0.46 12.507 L 1.938 11.479 Z M 0.001 6.306 L 1.801 6.271 C 1.763 4.372 2.84 2.732 4.289 2.107 L 3.576 0.454 L 2.863 -1.199 C -0.045 0.056 -1.862 3.111 -1.798 6.342 L 0.001 6.306 Z M 3.576 0.454 L 4.29 2.106 C 5.722 1.488 7.598 1.82 9.012 3.205 L 10.271 1.919 L 11.531 0.633 C 9.207 -1.644 5.802 -2.468 2.863 -1.199 L 3.576 0.454 Z M 10.271 1.919 L 9.011 3.204 C 9.335 3.522 9.674 3.846 10.037 4.199 L 11.291 2.907 L 12.544 1.616 C 12.157 1.24 11.848 0.944 11.532 0.634 L 10.271 1.919 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1.999)\"/>"
    },
    "IconsNameMentionsStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.784 0.092 L 9.489 -1.158 L 9.487 -1.156 L 10.784 0.092 Z M 11.216 0.092 L 12.513 -1.156 L 12.511 -1.158 L 11.216 0.092 Z M 13.886 2.867 L 12.589 4.115 C 12.928 4.468 13.396 4.667 13.886 4.667 L 13.886 2.867 Z M 22 4.867 L 23.8 4.867 L 23.8 4.867 L 22 4.867 Z M 20 21.867 L 20 23.667 L 20 23.667 L 20 21.867 Z M 0 4.867 L -1.8 4.867 L -1.8 4.867 L 0 4.867 Z M 2 2.867 L 2 1.067 L 2 1.067 L 2 2.867 Z M 8.114 2.867 L 8.114 4.667 C 8.604 4.667 9.072 4.468 9.411 4.115 L 8.114 2.867 Z M 10.784 0.092 L 12.08 1.341 C 11.49 1.953 10.51 1.953 9.92 1.341 L 11.216 0.092 L 12.511 -1.158 C 11.686 -2.014 10.314 -2.014 9.489 -1.158 L 10.784 0.092 Z M 11.216 0.092 L 9.919 1.34 L 12.589 4.115 L 13.886 2.867 L 15.183 1.619 L 12.513 -1.156 L 11.216 0.092 Z M 13.886 2.867 L 13.886 4.667 L 20 4.667 L 20 2.867 L 20 1.067 L 13.886 1.067 L 13.886 2.867 Z M 20 2.867 L 20 4.667 C 20.11 4.667 20.2 4.757 20.2 4.867 L 22 4.867 L 23.8 4.867 C 23.8 2.769 22.099 1.067 20 1.067 L 20 2.867 Z M 22 4.867 L 20.2 4.867 L 20.2 19.867 L 22 19.867 L 23.8 19.867 L 23.8 4.867 L 22 4.867 Z M 22 19.867 L 20.2 19.867 C 20.2 19.978 20.11 20.067 20 20.067 L 20 21.867 L 20 23.667 C 22.099 23.667 23.8 21.966 23.8 19.867 L 22 19.867 Z M 20 21.867 L 20 20.067 L 2 20.067 L 2 21.867 L 2 23.667 L 20 23.667 L 20 21.867 Z M 2 21.867 L 2 20.067 C 1.89 20.067 1.8 19.978 1.8 19.867 L 0 19.867 L -1.8 19.867 C -1.8 21.966 -0.099 23.667 2 23.667 L 2 21.867 Z M 0 19.867 L 1.8 19.867 L 1.8 4.867 L 0 4.867 L -1.8 4.867 L -1.8 19.867 L 0 19.867 Z M 0 4.867 L 1.8 4.867 C 1.8 4.757 1.89 4.667 2 4.667 L 2 2.867 L 2 1.067 C -0.099 1.067 -1.8 2.769 -1.8 4.867 L 0 4.867 Z M 2 2.867 L 2 4.667 L 8.114 4.667 L 8.114 2.867 L 8.114 1.067 L 2 1.067 L 2 2.867 Z M 8.114 2.867 L 9.411 4.115 L 12.081 1.34 L 10.784 0.092 L 9.487 -1.156 L 6.817 1.619 L 8.114 2.867 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1.133)\"/><path d=\"M 8 4 L 6.2 4 C 6.2 5.215 5.215 6.2 4 6.2 L 4 8 L 4 9.8 C 7.203 9.8 9.8 7.203 9.8 4 L 8 4 Z M 4 8 L 4 6.2 C 2.785 6.2 1.8 5.215 1.8 4 L 0 4 L -1.8 4 C -1.8 7.203 0.797 9.8 4 9.8 L 4 8 Z M 0 4 L 1.8 4 C 1.8 2.785 2.785 1.8 4 1.8 L 4 0 L 4 -1.8 C 0.797 -1.8 -1.8 0.797 -1.8 4 L 0 4 Z M 4 0 L 4 1.8 C 5.215 1.8 6.2 2.785 6.2 4 L 8 4 L 9.8 4 C 9.8 0.797 7.203 -1.8 4 -1.8 L 4 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 8 8)\"/><path d=\"M 4 0 L 4 0.9 L 10 0.9 L 10 0 L 10 -0.9 L 4 -0.9 L 4 0 Z M 10 0 L 10 0.9 C 11.712 0.9 13.1 2.288 13.1 4 L 14 4 L 14.9 4 C 14.9 1.294 12.706 -0.9 10 -0.9 L 10 0 Z M 0 4 L 0.9 4 C 0.9 2.288 2.288 0.9 4 0.9 L 4 0 L 4 -0.9 C 1.294 -0.9 -0.9 1.294 -0.9 4 L 0 4 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 18)\"/>"
    },
    "IconsNameMentionsStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.784 0.092 L 9.489 -1.158 L 9.487 -1.156 L 10.784 0.092 Z M 11.216 0.092 L 12.513 -1.156 L 12.511 -1.158 L 11.216 0.092 Z M 13.886 2.867 L 12.589 4.115 C 12.928 4.468 13.396 4.667 13.886 4.667 L 13.886 2.867 Z M 22 4.867 L 23.8 4.867 L 23.8 4.867 L 22 4.867 Z M 20 21.867 L 20 23.667 L 20 23.667 L 20 21.867 Z M 0 4.867 L -1.8 4.867 L -1.8 4.867 L 0 4.867 Z M 2 2.867 L 2 1.067 L 2 1.067 L 2 2.867 Z M 8.114 2.867 L 8.114 4.667 C 8.604 4.667 9.072 4.468 9.411 4.115 L 8.114 2.867 Z M 10.784 0.092 L 12.08 1.341 C 11.49 1.953 10.51 1.953 9.92 1.341 L 11.216 0.092 L 12.511 -1.158 C 11.686 -2.014 10.314 -2.014 9.489 -1.158 L 10.784 0.092 Z M 11.216 0.092 L 9.919 1.34 L 12.589 4.115 L 13.886 2.867 L 15.183 1.619 L 12.513 -1.156 L 11.216 0.092 Z M 13.886 2.867 L 13.886 4.667 L 20 4.667 L 20 2.867 L 20 1.067 L 13.886 1.067 L 13.886 2.867 Z M 20 2.867 L 20 4.667 C 20.11 4.667 20.2 4.757 20.2 4.867 L 22 4.867 L 23.8 4.867 C 23.8 2.769 22.099 1.067 20 1.067 L 20 2.867 Z M 22 4.867 L 20.2 4.867 L 20.2 19.867 L 22 19.867 L 23.8 19.867 L 23.8 4.867 L 22 4.867 Z M 22 19.867 L 20.2 19.867 C 20.2 19.978 20.11 20.067 20 20.067 L 20 21.867 L 20 23.667 C 22.099 23.667 23.8 21.966 23.8 19.867 L 22 19.867 Z M 20 21.867 L 20 20.067 L 2 20.067 L 2 21.867 L 2 23.667 L 20 23.667 L 20 21.867 Z M 2 21.867 L 2 20.067 C 1.89 20.067 1.8 19.978 1.8 19.867 L 0 19.867 L -1.8 19.867 C -1.8 21.966 -0.099 23.667 2 23.667 L 2 21.867 Z M 0 19.867 L 1.8 19.867 L 1.8 4.867 L 0 4.867 L -1.8 4.867 L -1.8 19.867 L 0 19.867 Z M 0 4.867 L 1.8 4.867 C 1.8 4.757 1.89 4.667 2 4.667 L 2 2.867 L 2 1.067 C -0.099 1.067 -1.8 2.769 -1.8 4.867 L 0 4.867 Z M 2 2.867 L 2 4.667 L 8.114 4.667 L 8.114 2.867 L 8.114 1.067 L 2 1.067 L 2 2.867 Z M 8.114 2.867 L 9.411 4.115 L 12.081 1.34 L 10.784 0.092 L 9.487 -1.156 L 6.817 1.619 L 8.114 2.867 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1.133)\"/><path d=\"M 8 4 L 6.2 4 C 6.2 5.215 5.215 6.2 4 6.2 L 4 8 L 4 9.8 C 7.203 9.8 9.8 7.203 9.8 4 L 8 4 Z M 4 8 L 4 6.2 C 2.785 6.2 1.8 5.215 1.8 4 L 0 4 L -1.8 4 C -1.8 7.203 0.797 9.8 4 9.8 L 4 8 Z M 0 4 L 1.8 4 C 1.8 2.785 2.785 1.8 4 1.8 L 4 0 L 4 -1.8 C 0.797 -1.8 -1.8 0.797 -1.8 4 L 0 4 Z M 4 0 L 4 1.8 C 5.215 1.8 6.2 2.785 6.2 4 L 8 4 L 9.8 4 C 9.8 0.797 7.203 -1.8 4 -1.8 L 4 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 8 8)\"/><path d=\"M 4 0 L 4 0.9 L 10 0.9 L 10 0 L 10 -0.9 L 4 -0.9 L 4 0 Z M 10 0 L 10 0.9 C 11.712 0.9 13.1 2.288 13.1 4 L 14 4 L 14.9 4 C 14.9 1.294 12.706 -0.9 10 -0.9 L 10 0 Z M 0 4 L 0.9 4 C 0.9 2.288 2.288 0.9 4 0.9 L 4 0 L 4 -0.9 C 1.294 -0.9 -0.9 1.294 -0.9 4 L 0 4 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 18)\"/>"
    },
    "IconsNameMentionsStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.784 0.092 L 9.489 -1.158 L 9.487 -1.156 L 10.784 0.092 Z M 11.216 0.092 L 12.513 -1.156 L 12.511 -1.158 L 11.216 0.092 Z M 13.886 2.867 L 12.589 4.115 C 12.928 4.468 13.396 4.667 13.886 4.667 L 13.886 2.867 Z M 22 4.867 L 23.8 4.867 L 23.8 4.867 L 22 4.867 Z M 20 21.867 L 20 23.667 L 20 23.667 L 20 21.867 Z M 0 4.867 L -1.8 4.867 L -1.8 4.867 L 0 4.867 Z M 2 2.867 L 2 1.067 L 2 1.067 L 2 2.867 Z M 8.114 2.867 L 8.114 4.667 C 8.604 4.667 9.072 4.468 9.411 4.115 L 8.114 2.867 Z M 10.784 0.092 L 12.08 1.341 C 11.49 1.953 10.51 1.953 9.92 1.341 L 11.216 0.092 L 12.511 -1.158 C 11.686 -2.014 10.314 -2.014 9.489 -1.158 L 10.784 0.092 Z M 11.216 0.092 L 9.919 1.34 L 12.589 4.115 L 13.886 2.867 L 15.183 1.619 L 12.513 -1.156 L 11.216 0.092 Z M 13.886 2.867 L 13.886 4.667 L 20 4.667 L 20 2.867 L 20 1.067 L 13.886 1.067 L 13.886 2.867 Z M 20 2.867 L 20 4.667 C 20.11 4.667 20.2 4.757 20.2 4.867 L 22 4.867 L 23.8 4.867 C 23.8 2.769 22.099 1.067 20 1.067 L 20 2.867 Z M 22 4.867 L 20.2 4.867 L 20.2 19.867 L 22 19.867 L 23.8 19.867 L 23.8 4.867 L 22 4.867 Z M 22 19.867 L 20.2 19.867 C 20.2 19.978 20.11 20.067 20 20.067 L 20 21.867 L 20 23.667 C 22.099 23.667 23.8 21.966 23.8 19.867 L 22 19.867 Z M 20 21.867 L 20 20.067 L 2 20.067 L 2 21.867 L 2 23.667 L 20 23.667 L 20 21.867 Z M 2 21.867 L 2 20.067 C 1.89 20.067 1.8 19.978 1.8 19.867 L 0 19.867 L -1.8 19.867 C -1.8 21.966 -0.099 23.667 2 23.667 L 2 21.867 Z M 0 19.867 L 1.8 19.867 L 1.8 4.867 L 0 4.867 L -1.8 4.867 L -1.8 19.867 L 0 19.867 Z M 0 4.867 L 1.8 4.867 C 1.8 4.757 1.89 4.667 2 4.667 L 2 2.867 L 2 1.067 C -0.099 1.067 -1.8 2.769 -1.8 4.867 L 0 4.867 Z M 2 2.867 L 2 4.667 L 8.114 4.667 L 8.114 2.867 L 8.114 1.067 L 2 1.067 L 2 2.867 Z M 8.114 2.867 L 9.411 4.115 L 12.081 1.34 L 10.784 0.092 L 9.487 -1.156 L 6.817 1.619 L 8.114 2.867 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1.133)\"/><path d=\"M 8 4 L 6.2 4 C 6.2 5.215 5.215 6.2 4 6.2 L 4 8 L 4 9.8 C 7.203 9.8 9.8 7.203 9.8 4 L 8 4 Z M 4 8 L 4 6.2 C 2.785 6.2 1.8 5.215 1.8 4 L 0 4 L -1.8 4 C -1.8 7.203 0.797 9.8 4 9.8 L 4 8 Z M 0 4 L 1.8 4 C 1.8 2.785 2.785 1.8 4 1.8 L 4 0 L 4 -1.8 C 0.797 -1.8 -1.8 0.797 -1.8 4 L 0 4 Z M 4 0 L 4 1.8 C 5.215 1.8 6.2 2.785 6.2 4 L 8 4 L 9.8 4 C 9.8 0.797 7.203 -1.8 4 -1.8 L 4 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 8 8)\"/><path d=\"M 4 0 L 4 0.9 L 10 0.9 L 10 0 L 10 -0.9 L 4 -0.9 L 4 0 Z M 10 0 L 10 0.9 C 11.712 0.9 13.1 2.288 13.1 4 L 14 4 L 14.9 4 C 14.9 1.294 12.706 -0.9 10 -0.9 L 10 0 Z M 0 4 L 0.9 4 C 0.9 2.288 2.288 0.9 4 0.9 L 4 0 L 4 -0.9 C 1.294 -0.9 -0.9 1.294 -0.9 4 L 0 4 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 18)\"/>"
    },
    "IconsNameMessengerStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.913 18.683 L 5.708 18.813 C 5.751 18.225 5.503 17.654 5.045 17.283 L 3.913 18.683 Z M 3.725 21.268 L 5.52 21.399 L 5.52 21.398 L 3.725 21.268 Z M 4.618 21.961 L 4.047 20.254 C 4.034 20.258 4.022 20.262 4.01 20.267 L 4.618 21.961 Z M 8.096 20.798 L 8.558 19.058 C 8.218 18.967 7.859 18.979 7.525 19.09 L 8.096 20.798 Z M 11.01 0 L 11.01 -1.8 C 3.995 -1.8 -1.8 3.688 -1.8 10.587 L 0 10.587 L 1.8 10.587 C 1.8 5.806 5.852 1.8 11.01 1.8 L 11.01 0 Z M 0 10.587 L -1.8 10.587 C -1.8 14.419 -0.011 17.824 2.781 20.082 L 3.913 18.683 L 5.045 17.283 C 3.043 15.664 1.8 13.264 1.8 10.587 L 0 10.587 Z M 3.913 18.683 L 2.117 18.552 L 1.929 21.137 L 3.725 21.268 L 5.52 21.398 L 5.708 18.813 L 3.913 18.683 Z M 3.725 21.268 L 1.93 21.136 C 1.804 22.848 3.478 24.282 5.226 23.655 L 4.618 21.961 L 4.01 20.267 C 4.841 19.968 5.575 20.651 5.52 21.399 L 3.725 21.268 Z M 4.618 21.961 L 5.189 23.668 L 8.667 22.505 L 8.096 20.798 L 7.525 19.09 L 4.047 20.254 L 4.618 21.961 Z M 8.096 20.798 L 7.633 22.537 C 8.712 22.824 9.831 22.974 10.998 22.974 L 10.998 21.174 L 10.998 19.374 C 10.144 19.374 9.336 19.265 8.558 19.058 L 8.096 20.798 Z M 10.998 21.174 L 10.998 22.974 C 18 22.974 23.808 17.486 23.808 10.587 L 22.008 10.587 L 20.208 10.587 C 20.208 15.367 16.146 19.374 10.998 19.374 L 10.998 21.174 Z M 22.008 10.587 L 23.808 10.587 C 23.808 3.69 18.014 -1.8 11.01 -1.8 L 11.01 0 L 11.01 1.8 C 16.155 1.8 20.208 5.804 20.208 10.587 L 22.008 10.587 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/><path d=\"M 5.025 0.462 C 5.097 0.472 5.157 0.483 5.23 0.493 C 6.303 0.723 7.4 1.703 8.244 2.287 C 8.715 2.621 9.112 2.589 9.583 2.276 C 10.584 1.588 11.621 0.931 12.645 0.253 C 12.923 0.066 13.212 -0.132 13.55 0.118 C 13.924 0.389 13.695 0.681 13.502 0.952 C 12.489 2.349 11.488 3.747 10.463 5.134 C 9.764 6.093 8.775 6.229 7.714 5.551 C 6.978 5.071 6.219 4.623 5.495 4.122 C 5.013 3.789 4.615 3.83 4.157 4.143 C 3.144 4.831 2.119 5.488 1.094 6.166 C 0.817 6.354 0.527 6.552 0.19 6.291 C -0.148 6.041 0.033 5.76 0.214 5.499 C 1.263 4.06 2.3 2.621 3.349 1.182 C 3.698 0.691 4.35 0.399 5.025 0.462 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5.125 8.333)\"/>"
    },
    "IconsNameMessengerStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.913 18.683 L 5.708 18.813 C 5.751 18.225 5.503 17.654 5.045 17.283 L 3.913 18.683 Z M 3.725 21.268 L 5.52 21.399 L 5.52 21.398 L 3.725 21.268 Z M 4.618 21.961 L 4.047 20.254 C 4.034 20.258 4.022 20.262 4.01 20.267 L 4.618 21.961 Z M 8.096 20.798 L 8.558 19.058 C 8.218 18.967 7.859 18.979 7.525 19.09 L 8.096 20.798 Z M 11.01 0 L 11.01 -1.8 C 3.995 -1.8 -1.8 3.688 -1.8 10.587 L 0 10.587 L 1.8 10.587 C 1.8 5.806 5.852 1.8 11.01 1.8 L 11.01 0 Z M 0 10.587 L -1.8 10.587 C -1.8 14.419 -0.011 17.824 2.781 20.082 L 3.913 18.683 L 5.045 17.283 C 3.043 15.664 1.8 13.264 1.8 10.587 L 0 10.587 Z M 3.913 18.683 L 2.117 18.552 L 1.929 21.137 L 3.725 21.268 L 5.52 21.398 L 5.708 18.813 L 3.913 18.683 Z M 3.725 21.268 L 1.93 21.136 C 1.804 22.848 3.478 24.282 5.226 23.655 L 4.618 21.961 L 4.01 20.267 C 4.841 19.968 5.575 20.651 5.52 21.399 L 3.725 21.268 Z M 4.618 21.961 L 5.189 23.668 L 8.667 22.505 L 8.096 20.798 L 7.525 19.09 L 4.047 20.254 L 4.618 21.961 Z M 8.096 20.798 L 7.633 22.537 C 8.712 22.824 9.831 22.974 10.998 22.974 L 10.998 21.174 L 10.998 19.374 C 10.144 19.374 9.336 19.265 8.558 19.058 L 8.096 20.798 Z M 10.998 21.174 L 10.998 22.974 C 18 22.974 23.808 17.486 23.808 10.587 L 22.008 10.587 L 20.208 10.587 C 20.208 15.367 16.146 19.374 10.998 19.374 L 10.998 21.174 Z M 22.008 10.587 L 23.808 10.587 C 23.808 3.69 18.014 -1.8 11.01 -1.8 L 11.01 0 L 11.01 1.8 C 16.155 1.8 20.208 5.804 20.208 10.587 L 22.008 10.587 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/><path d=\"M 5.025 0.462 C 5.097 0.472 5.157 0.483 5.23 0.493 C 6.303 0.723 7.4 1.703 8.244 2.287 C 8.715 2.621 9.112 2.589 9.583 2.276 C 10.584 1.588 11.621 0.931 12.645 0.253 C 12.923 0.066 13.212 -0.132 13.55 0.118 C 13.924 0.389 13.695 0.681 13.502 0.952 C 12.489 2.349 11.488 3.747 10.463 5.134 C 9.764 6.093 8.775 6.229 7.714 5.551 C 6.978 5.071 6.219 4.623 5.495 4.122 C 5.013 3.789 4.615 3.83 4.157 4.143 C 3.144 4.831 2.119 5.488 1.094 6.166 C 0.817 6.354 0.527 6.552 0.19 6.291 C -0.148 6.041 0.033 5.76 0.214 5.499 C 1.263 4.06 2.3 2.621 3.349 1.182 C 3.698 0.691 4.35 0.399 5.025 0.462 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5.125 8.333)\"/>"
    },
    "IconsNameMessengerStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.913 18.683 L 5.708 18.813 C 5.751 18.225 5.503 17.654 5.045 17.283 L 3.913 18.683 Z M 3.725 21.268 L 5.52 21.399 L 5.52 21.398 L 3.725 21.268 Z M 4.618 21.961 L 4.047 20.254 C 4.034 20.258 4.022 20.262 4.01 20.267 L 4.618 21.961 Z M 8.096 20.798 L 8.558 19.058 C 8.218 18.967 7.859 18.979 7.525 19.09 L 8.096 20.798 Z M 11.01 0 L 11.01 -1.8 C 3.995 -1.8 -1.8 3.688 -1.8 10.587 L 0 10.587 L 1.8 10.587 C 1.8 5.806 5.852 1.8 11.01 1.8 L 11.01 0 Z M 0 10.587 L -1.8 10.587 C -1.8 14.419 -0.011 17.824 2.781 20.082 L 3.913 18.683 L 5.045 17.283 C 3.043 15.664 1.8 13.264 1.8 10.587 L 0 10.587 Z M 3.913 18.683 L 2.117 18.552 L 1.929 21.137 L 3.725 21.268 L 5.52 21.398 L 5.708 18.813 L 3.913 18.683 Z M 3.725 21.268 L 1.93 21.136 C 1.804 22.848 3.478 24.282 5.226 23.655 L 4.618 21.961 L 4.01 20.267 C 4.841 19.968 5.575 20.651 5.52 21.399 L 3.725 21.268 Z M 4.618 21.961 L 5.189 23.668 L 8.667 22.505 L 8.096 20.798 L 7.525 19.09 L 4.047 20.254 L 4.618 21.961 Z M 8.096 20.798 L 7.633 22.537 C 8.712 22.824 9.831 22.974 10.998 22.974 L 10.998 21.174 L 10.998 19.374 C 10.144 19.374 9.336 19.265 8.558 19.058 L 8.096 20.798 Z M 10.998 21.174 L 10.998 22.974 C 18 22.974 23.808 17.486 23.808 10.587 L 22.008 10.587 L 20.208 10.587 C 20.208 15.367 16.146 19.374 10.998 19.374 L 10.998 21.174 Z M 22.008 10.587 L 23.808 10.587 C 23.808 3.69 18.014 -1.8 11.01 -1.8 L 11.01 0 L 11.01 1.8 C 16.155 1.8 20.208 5.804 20.208 10.587 L 22.008 10.587 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/><path d=\"M 5.025 0.462 C 5.097 0.472 5.157 0.483 5.23 0.493 C 6.303 0.723 7.4 1.703 8.244 2.287 C 8.715 2.621 9.112 2.589 9.583 2.276 C 10.584 1.588 11.621 0.931 12.645 0.253 C 12.923 0.066 13.212 -0.132 13.55 0.118 C 13.924 0.389 13.695 0.681 13.502 0.952 C 12.489 2.349 11.488 3.747 10.463 5.134 C 9.764 6.093 8.775 6.229 7.714 5.551 C 6.978 5.071 6.219 4.623 5.495 4.122 C 5.013 3.789 4.615 3.83 4.157 4.143 C 3.144 4.831 2.119 5.488 1.094 6.166 C 0.817 6.354 0.527 6.552 0.19 6.291 C -0.148 6.041 0.033 5.76 0.214 5.499 C 1.263 4.06 2.3 2.621 3.349 1.182 C 3.698 0.691 4.35 0.399 5.025 0.462 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5.125 8.333)\"/>"
    },
    "IconsNameMoreStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 10)\"/><path d=\"M 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 10) matrix(1 0 0 1 5.500 0)\"/><path d=\"M 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 10) matrix(1 0 0 1 11 0)\"/>"
    },
    "IconsNameMoreStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 10)\"/><path d=\"M 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 10) matrix(1 0 0 1 5.500 0)\"/><path d=\"M 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 10) matrix(1 0 0 1 11 0)\"/>"
    },
    "IconsNameMoreStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 10)\"/><path d=\"M 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 10) matrix(1 0 0 1 5.500 0)\"/><path d=\"M 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 10) matrix(1 0 0 1 11 0)\"/>"
    },
    "IconsNameNotificationsStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.5 3.597 L 2.736 3.122 L 2.736 3.122 L 3.5 3.597 Z M 0 17 L -0.223 16.128 C -0.662 16.24 -0.95 16.662 -0.893 17.112 C -0.836 17.562 -0.454 17.9 0 17.9 L 0 17 Z M 11 0.023 L 11.08 -0.873 C 10.124 -0.959 8.617 -0.856 7.07 -0.299 C 5.512 0.262 3.867 1.302 2.736 3.122 L 3.5 3.597 L 4.264 4.072 C 5.133 2.676 6.405 1.854 7.68 1.395 C 8.967 0.931 10.21 0.856 10.92 0.919 L 11 0.023 Z M 3.5 3.597 L 2.736 3.122 C 2.008 4.292 1.675 5.73 1.498 7.15 C 1.32 8.572 1.287 10.094 1.226 11.43 C 1.163 12.811 1.07 13.973 0.81 14.834 C 0.556 15.678 0.213 16.017 -0.223 16.128 L 0 17 L 0.223 17.872 C 1.537 17.536 2.194 16.479 2.534 15.354 C 2.867 14.247 2.962 12.868 3.024 11.512 C 3.088 10.112 3.118 8.703 3.284 7.374 C 3.45 6.043 3.742 4.913 4.264 4.072 L 3.5 3.597 Z M 0 17 L 0 17.9 L 11 17.9 L 11 17 L 11 16.1 L 0 16.1 L 0 17 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.500 3)\"/><path d=\"M 3.5 3.597 L 2.736 3.122 L 2.736 3.122 L 3.5 3.597 Z M 0 17 L -0.223 16.128 C -0.662 16.24 -0.95 16.662 -0.893 17.112 C -0.836 17.562 -0.454 17.9 0 17.9 L 0 17 Z M 11 0.023 L 11.08 -0.873 C 10.124 -0.959 8.617 -0.856 7.07 -0.299 C 5.512 0.262 3.867 1.302 2.736 3.122 L 3.5 3.597 L 4.264 4.072 C 5.133 2.676 6.405 1.854 7.68 1.395 C 8.967 0.931 10.21 0.856 10.92 0.919 L 11 0.023 Z M 3.5 3.597 L 2.736 3.122 C 2.008 4.292 1.675 5.73 1.498 7.15 C 1.32 8.572 1.287 10.094 1.226 11.43 C 1.163 12.811 1.07 13.973 0.81 14.834 C 0.556 15.678 0.213 16.017 -0.223 16.128 L 0 17 L 0.223 17.872 C 1.537 17.536 2.194 16.479 2.534 15.354 C 2.867 14.247 2.962 12.868 3.024 11.512 C 3.088 10.112 3.118 8.703 3.284 7.374 C 3.45 6.043 3.742 4.913 4.264 4.072 L 3.5 3.597 Z M 0 17 L 0 17.9 L 11 17.9 L 11 17 L 11 16.1 L 0 16.1 L 0 17 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.500 3) matrix(-1 0 0 1 21 0)\"/><path d=\"M 0 0 C 0.505 1.177 1.658 2 3 2 C 4.342 2 5.495 1.177 6 0 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 9 22)\"/><path d=\"M 2 0 C 3.105 0 4 0.895 4 2 C 4 2.364 3.903 2.706 3.732 3 L 0.268 3 C 0.097 2.706 0 2.364 0 2 C 0 0.895 0.895 0 2 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 10 0)\"/>"
    },
    "IconsNameNotificationsStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.5 3.597 L 2.736 3.122 L 2.736 3.122 L 3.5 3.597 Z M 0 17 L -0.223 16.128 C -0.662 16.24 -0.95 16.662 -0.893 17.112 C -0.836 17.562 -0.454 17.9 0 17.9 L 0 17 Z M 11 0.023 L 11.08 -0.873 C 10.124 -0.959 8.617 -0.856 7.07 -0.299 C 5.512 0.262 3.867 1.302 2.736 3.122 L 3.5 3.597 L 4.264 4.072 C 5.133 2.676 6.405 1.854 7.68 1.395 C 8.967 0.931 10.21 0.856 10.92 0.919 L 11 0.023 Z M 3.5 3.597 L 2.736 3.122 C 2.008 4.292 1.675 5.73 1.498 7.15 C 1.32 8.572 1.287 10.094 1.226 11.43 C 1.163 12.811 1.07 13.973 0.81 14.834 C 0.556 15.678 0.213 16.017 -0.223 16.128 L 0 17 L 0.223 17.872 C 1.537 17.536 2.194 16.479 2.534 15.354 C 2.867 14.247 2.962 12.868 3.024 11.512 C 3.088 10.112 3.118 8.703 3.284 7.374 C 3.45 6.043 3.742 4.913 4.264 4.072 L 3.5 3.597 Z M 0 17 L 0 17.9 L 11 17.9 L 11 17 L 11 16.1 L 0 16.1 L 0 17 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.500 3)\"/><path d=\"M 3.5 3.597 L 2.736 3.122 L 2.736 3.122 L 3.5 3.597 Z M 0 17 L -0.223 16.128 C -0.662 16.24 -0.95 16.662 -0.893 17.112 C -0.836 17.562 -0.454 17.9 0 17.9 L 0 17 Z M 11 0.023 L 11.08 -0.873 C 10.124 -0.959 8.617 -0.856 7.07 -0.299 C 5.512 0.262 3.867 1.302 2.736 3.122 L 3.5 3.597 L 4.264 4.072 C 5.133 2.676 6.405 1.854 7.68 1.395 C 8.967 0.931 10.21 0.856 10.92 0.919 L 11 0.023 Z M 3.5 3.597 L 2.736 3.122 C 2.008 4.292 1.675 5.73 1.498 7.15 C 1.32 8.572 1.287 10.094 1.226 11.43 C 1.163 12.811 1.07 13.973 0.81 14.834 C 0.556 15.678 0.213 16.017 -0.223 16.128 L 0 17 L 0.223 17.872 C 1.537 17.536 2.194 16.479 2.534 15.354 C 2.867 14.247 2.962 12.868 3.024 11.512 C 3.088 10.112 3.118 8.703 3.284 7.374 C 3.45 6.043 3.742 4.913 4.264 4.072 L 3.5 3.597 Z M 0 17 L 0 17.9 L 11 17.9 L 11 17 L 11 16.1 L 0 16.1 L 0 17 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.500 3) matrix(-1 0 0 1 21 0)\"/><path d=\"M 0 0 C 0.505 1.177 1.658 2 3 2 C 4.342 2 5.495 1.177 6 0 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 9 22)\"/><path d=\"M 2 0 C 3.105 0 4 0.895 4 2 C 4 2.364 3.903 2.706 3.732 3 L 0.268 3 C 0.097 2.706 0 2.364 0 2 C 0 0.895 0.895 0 2 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 10 0)\"/>"
    },
    "IconsNameNotificationsStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.5 3.597 L 2.736 3.122 L 2.736 3.122 L 3.5 3.597 Z M 0 17 L -0.223 16.128 C -0.662 16.24 -0.95 16.662 -0.893 17.112 C -0.836 17.562 -0.454 17.9 0 17.9 L 0 17 Z M 11 0.023 L 11.08 -0.873 C 10.124 -0.959 8.617 -0.856 7.07 -0.299 C 5.512 0.262 3.867 1.302 2.736 3.122 L 3.5 3.597 L 4.264 4.072 C 5.133 2.676 6.405 1.854 7.68 1.395 C 8.967 0.931 10.21 0.856 10.92 0.919 L 11 0.023 Z M 3.5 3.597 L 2.736 3.122 C 2.008 4.292 1.675 5.73 1.498 7.15 C 1.32 8.572 1.287 10.094 1.226 11.43 C 1.163 12.811 1.07 13.973 0.81 14.834 C 0.556 15.678 0.213 16.017 -0.223 16.128 L 0 17 L 0.223 17.872 C 1.537 17.536 2.194 16.479 2.534 15.354 C 2.867 14.247 2.962 12.868 3.024 11.512 C 3.088 10.112 3.118 8.703 3.284 7.374 C 3.45 6.043 3.742 4.913 4.264 4.072 L 3.5 3.597 Z M 0 17 L 0 17.9 L 11 17.9 L 11 17 L 11 16.1 L 0 16.1 L 0 17 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.500 3)\"/><path d=\"M 3.5 3.597 L 2.736 3.122 L 2.736 3.122 L 3.5 3.597 Z M 0 17 L -0.223 16.128 C -0.662 16.24 -0.95 16.662 -0.893 17.112 C -0.836 17.562 -0.454 17.9 0 17.9 L 0 17 Z M 11 0.023 L 11.08 -0.873 C 10.124 -0.959 8.617 -0.856 7.07 -0.299 C 5.512 0.262 3.867 1.302 2.736 3.122 L 3.5 3.597 L 4.264 4.072 C 5.133 2.676 6.405 1.854 7.68 1.395 C 8.967 0.931 10.21 0.856 10.92 0.919 L 11 0.023 Z M 3.5 3.597 L 2.736 3.122 C 2.008 4.292 1.675 5.73 1.498 7.15 C 1.32 8.572 1.287 10.094 1.226 11.43 C 1.163 12.811 1.07 13.973 0.81 14.834 C 0.556 15.678 0.213 16.017 -0.223 16.128 L 0 17 L 0.223 17.872 C 1.537 17.536 2.194 16.479 2.534 15.354 C 2.867 14.247 2.962 12.868 3.024 11.512 C 3.088 10.112 3.118 8.703 3.284 7.374 C 3.45 6.043 3.742 4.913 4.264 4.072 L 3.5 3.597 Z M 0 17 L 0 17.9 L 11 17.9 L 11 17 L 11 16.1 L 0 16.1 L 0 17 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.500 3) matrix(-1 0 0 1 21 0)\"/><path d=\"M 0 0 C 0.505 1.177 1.658 2 3 2 C 4.342 2 5.495 1.177 6 0 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 9 22)\"/><path d=\"M 2 0 C 3.105 0 4 0.895 4 2 C 4 2.364 3.903 2.706 3.732 3 L 0.268 3 C 0.097 2.706 0 2.364 0 2 C 0 0.895 0.895 0 2 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 10 0)\"/>"
    },
    "IconsNameReelsStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.327 0.26 C 3.533 -0.087 4.05 -0.087 4.257 0.26 L 7.511 5.72 C 7.717 6.067 7.459 6.5 7.046 6.5 L 0.538 6.5 C 0.124 6.5 -0.134 6.067 0.073 5.72 L 3.327 0.26 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0 1 -1 0 15.500 11)\"/><path d=\"M 0 0 L -0.749 0.499 L 3.251 6.499 L 4 6 L 4.749 5.501 L 0.749 -0.499 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 6 2)\"/><path d=\"M 0 0 L -0.749 0.499 L 3.251 6.499 L 4 6 L 4.749 5.501 L 0.749 -0.499 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 13 2)\"/><path d=\"M 6 0 L 6 1.8 L 16 1.8 L 16 0 L 16 -1.8 L 6 -1.8 L 6 0 Z M 22 6 L 20.2 6 L 20.2 16 L 22 16 L 23.8 16 L 23.8 6 L 22 6 Z M 16 22 L 16 20.2 L 6 20.2 L 6 22 L 6 23.8 L 16 23.8 L 16 22 Z M 0 16 L 1.8 16 L 1.8 6 L 0 6 L -1.8 6 L -1.8 16 L 0 16 Z M 6 22 L 6 20.2 C 3.68 20.2 1.8 18.32 1.8 16 L 0 16 L -1.8 16 C -1.8 20.308 1.692 23.8 6 23.8 L 6 22 Z M 22 16 L 20.2 16 C 20.2 18.32 18.32 20.2 16 20.2 L 16 22 L 16 23.8 C 20.308 23.8 23.8 20.308 23.8 16 L 22 16 Z M 16 0 L 16 1.8 C 18.32 1.8 20.2 3.68 20.2 6 L 22 6 L 23.8 6 C 23.8 1.692 20.308 -1.8 16 -1.8 L 16 0 Z M 6 0 L 6 -1.8 C 1.692 -1.8 -1.8 1.692 -1.8 6 L 0 6 L 1.8 6 C 1.8 3.68 3.68 1.8 6 1.8 L 6 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/><path d=\"M 0 0 L 0 0.9 L 20 0.9 L 20 0 L 20 -0.9 L 0 -0.9 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 8)\"/>"
    },
    "IconsNameReelsStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 21 15 C 21 18.314 18.314 21 15 21 L 6 21 C 2.686 21 0 18.314 0 15 L 0 7.541 L 21 7.541 L 21 15 Z M 8.381 9.615 C 8.05 9.418 7.637 9.664 7.637 10.059 L 7.637 16.271 C 7.637 16.665 8.05 16.912 8.381 16.715 L 13.593 13.608 C 13.924 13.411 13.924 12.918 13.593 12.721 L 8.381 9.615 Z M 0 6 L 0 5.822 L 0.005 5.822 C 0.003 5.881 0 5.941 0 6 Z M 21 5.822 L 21 6 C 21 5.941 20.997 5.881 20.995 5.822 L 21 5.822 Z M 9.786 0 L 13.668 5.822 L 9.05 5.822 L 5.204 0.054 C 5.465 0.019 5.73 0 6 0 L 9.786 0 Z M 6.985 5.822 L 0.005 5.822 C 0.073 3.487 1.474 1.487 3.475 0.557 L 6.985 5.822 Z M 3.812 0.413 C 3.718 0.45 3.625 0.489 3.533 0.53 C 3.625 0.489 3.718 0.45 3.812 0.413 Z M 3.812 0.413 C 3.84 0.402 3.869 0.39 3.897 0.379 C 3.869 0.39 3.84 0.402 3.812 0.413 Z M 4.032 0.331 C 4.065 0.32 4.098 0.309 4.131 0.298 C 4.098 0.309 4.065 0.32 4.032 0.331 Z M 4.718 0.139 C 4.518 0.182 4.322 0.235 4.131 0.298 C 4.322 0.235 4.518 0.182 4.718 0.139 Z M 4.718 0.139 C 4.73 0.136 4.743 0.133 4.756 0.13 C 4.743 0.133 4.73 0.136 4.718 0.139 Z M 4.896 0.103 C 4.934 0.095 4.972 0.088 5.011 0.082 C 4.972 0.088 4.934 0.095 4.896 0.103 Z M 15 0 C 18.254 0 20.901 2.591 20.995 5.822 L 15.733 5.822 L 11.851 0 L 15 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.500 1.500)\"/>"
    },
    "IconsNameReelsStateSelectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 21 15 C 21 18.314 18.314 21 15 21 L 6 21 C 2.686 21 0 18.314 0 15 L 0 7.541 L 21 7.541 L 21 15 Z M 8.381 9.615 C 8.05 9.418 7.637 9.664 7.637 10.059 L 7.637 16.271 C 7.637 16.665 8.05 16.912 8.381 16.715 L 13.593 13.608 C 13.924 13.411 13.924 12.918 13.593 12.721 L 8.381 9.615 Z M 0 6 L 0 5.822 L 0.005 5.822 C 0.003 5.881 0 5.941 0 6 Z M 21 5.822 L 21 6 C 21 5.941 20.997 5.881 20.995 5.822 L 21 5.822 Z M 9.786 0 L 13.668 5.822 L 9.05 5.822 L 5.204 0.054 C 5.465 0.019 5.73 0 6 0 L 9.786 0 Z M 6.985 5.822 L 0.005 5.822 C 0.073 3.487 1.474 1.487 3.475 0.557 L 6.985 5.822 Z M 3.812 0.413 C 3.718 0.45 3.625 0.489 3.533 0.53 C 3.625 0.489 3.718 0.45 3.812 0.413 Z M 3.812 0.413 C 3.84 0.402 3.869 0.39 3.897 0.379 C 3.869 0.39 3.84 0.402 3.812 0.413 Z M 4.032 0.331 C 4.065 0.32 4.098 0.309 4.131 0.298 C 4.098 0.309 4.065 0.32 4.032 0.331 Z M 4.718 0.139 C 4.518 0.182 4.322 0.235 4.131 0.298 C 4.322 0.235 4.518 0.182 4.718 0.139 Z M 4.718 0.139 C 4.73 0.136 4.743 0.133 4.756 0.13 C 4.743 0.133 4.73 0.136 4.718 0.139 Z M 4.896 0.103 C 4.934 0.095 4.972 0.088 5.011 0.082 C 4.972 0.088 4.934 0.095 4.896 0.103 Z M 15 0 C 18.254 0 20.901 2.591 20.995 5.822 L 15.733 5.822 L 11.851 0 L 15 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.500 1.500)\"/>"
    },
    "IconsNameReelsStateSelectedDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 21 15 C 21 18.314 18.314 21 15 21 L 6 21 C 2.686 21 0 18.314 0 15 L 0 7.541 L 21 7.541 L 21 15 Z M 8.381 9.615 C 8.05 9.418 7.637 9.664 7.637 10.059 L 7.637 16.271 C 7.637 16.665 8.05 16.912 8.381 16.715 L 13.593 13.608 C 13.924 13.411 13.924 12.918 13.593 12.721 L 8.381 9.615 Z M 0 6 L 0 5.822 L 0.005 5.822 C 0.003 5.881 0 5.941 0 6 Z M 21 5.822 L 21 6 C 21 5.941 20.997 5.881 20.995 5.822 L 21 5.822 Z M 9.786 0 L 13.668 5.822 L 9.05 5.822 L 5.204 0.054 C 5.465 0.019 5.73 0 6 0 L 9.786 0 Z M 6.985 5.822 L 0.005 5.822 C 0.073 3.487 1.474 1.487 3.475 0.557 L 6.985 5.822 Z M 3.812 0.413 C 3.718 0.45 3.625 0.489 3.533 0.53 C 3.625 0.489 3.718 0.45 3.812 0.413 Z M 3.812 0.413 C 3.84 0.402 3.869 0.39 3.897 0.379 C 3.869 0.39 3.84 0.402 3.812 0.413 Z M 4.032 0.331 C 4.065 0.32 4.098 0.309 4.131 0.298 C 4.098 0.309 4.065 0.32 4.032 0.331 Z M 4.718 0.139 C 4.518 0.182 4.322 0.235 4.131 0.298 C 4.322 0.235 4.518 0.182 4.718 0.139 Z M 4.718 0.139 C 4.73 0.136 4.743 0.133 4.756 0.13 C 4.743 0.133 4.73 0.136 4.718 0.139 Z M 4.896 0.103 C 4.934 0.095 4.972 0.088 5.011 0.082 C 4.972 0.088 4.934 0.095 4.896 0.103 Z M 15 0 C 18.254 0 20.901 2.591 20.995 5.822 L 15.733 5.822 L 11.851 0 L 15 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.500 1.500)\"/>"
    },
    "IconsNameReelsStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.327 0.26 C 3.533 -0.087 4.05 -0.087 4.257 0.26 L 7.511 5.72 C 7.717 6.067 7.459 6.5 7.046 6.5 L 0.538 6.5 C 0.124 6.5 -0.134 6.067 0.073 5.72 L 3.327 0.26 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0 1 -1 0 15.500 11)\"/><path d=\"M 0 0 L -0.749 0.499 L 3.251 6.499 L 4 6 L 4.749 5.501 L 0.749 -0.499 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 6 2)\"/><path d=\"M 0 0 L -0.749 0.499 L 3.251 6.499 L 4 6 L 4.749 5.501 L 0.749 -0.499 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 13 2)\"/><path d=\"M 6 0 L 6 1.8 L 16 1.8 L 16 0 L 16 -1.8 L 6 -1.8 L 6 0 Z M 22 6 L 20.2 6 L 20.2 16 L 22 16 L 23.8 16 L 23.8 6 L 22 6 Z M 16 22 L 16 20.2 L 6 20.2 L 6 22 L 6 23.8 L 16 23.8 L 16 22 Z M 0 16 L 1.8 16 L 1.8 6 L 0 6 L -1.8 6 L -1.8 16 L 0 16 Z M 6 22 L 6 20.2 C 3.68 20.2 1.8 18.32 1.8 16 L 0 16 L -1.8 16 C -1.8 20.308 1.692 23.8 6 23.8 L 6 22 Z M 22 16 L 20.2 16 C 20.2 18.32 18.32 20.2 16 20.2 L 16 22 L 16 23.8 C 20.308 23.8 23.8 20.308 23.8 16 L 22 16 Z M 16 0 L 16 1.8 C 18.32 1.8 20.2 3.68 20.2 6 L 22 6 L 23.8 6 C 23.8 1.692 20.308 -1.8 16 -1.8 L 16 0 Z M 6 0 L 6 -1.8 C 1.692 -1.8 -1.8 1.692 -1.8 6 L 0 6 L 1.8 6 C 1.8 3.68 3.68 1.8 6 1.8 L 6 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/><path d=\"M 0 0 L 0 0.9 L 20 0.9 L 20 0 L 20 -0.9 L 0 -0.9 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 8)\"/>"
    },
    "IconsNameSearchStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 18 9 L 16.2 9 C 16.2 12.976 12.976 16.2 9 16.2 L 9 18 L 9 19.8 C 14.965 19.8 19.8 14.965 19.8 9 L 18 9 Z M 9 18 L 9 16.2 C 5.024 16.2 1.8 12.976 1.8 9 L 0 9 L -1.8 9 C -1.8 14.965 3.035 19.8 9 19.8 L 9 18 Z M 0 9 L 1.8 9 C 1.8 5.024 5.024 1.8 9 1.8 L 9 0 L 9 -1.8 C 3.035 -1.8 -1.8 3.035 -1.8 9 L 0 9 Z M 9 0 L 9 1.8 C 12.976 1.8 16.2 5.024 16.2 9 L 18 9 L 19.8 9 C 19.8 3.035 14.965 -1.8 9 -1.8 L 9 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/><path d=\"M 8.485 0.9 C 8.982 0.9 9.385 0.497 9.385 0 C 9.385 -0.497 8.982 -0.9 8.485 -0.9 L 8.485 0 L 8.485 0.9 Z M 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 C -0.9 0.497 -0.497 0.9 0 0.9 L 0 0 L 0 -0.9 Z M 0 0 L 0 0.9 L 8.485 0.9 L 8.485 0 L 8.485 -0.9 L 0 -0.9 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 0.707 -0.707 0.707 16 16)\"/>"
    },
    "IconsNameSearchStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 18 9 L 16.2 9 C 16.2 12.976 12.976 16.2 9 16.2 L 9 18 L 9 19.8 C 14.965 19.8 19.8 14.965 19.8 9 L 18 9 Z M 9 18 L 9 16.2 C 5.024 16.2 1.8 12.976 1.8 9 L 0 9 L -1.8 9 C -1.8 14.965 3.035 19.8 9 19.8 L 9 18 Z M 0 9 L 1.8 9 C 1.8 5.024 5.024 1.8 9 1.8 L 9 0 L 9 -1.8 C 3.035 -1.8 -1.8 3.035 -1.8 9 L 0 9 Z M 9 0 L 9 1.8 C 12.976 1.8 16.2 5.024 16.2 9 L 18 9 L 19.8 9 C 19.8 3.035 14.965 -1.8 9 -1.8 L 9 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/><path d=\"M 8.485 0.9 C 8.982 0.9 9.385 0.497 9.385 0 C 9.385 -0.497 8.982 -0.9 8.485 -0.9 L 8.485 0 L 8.485 0.9 Z M 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 C -0.9 0.497 -0.497 0.9 0 0.9 L 0 0 L 0 -0.9 Z M 0 0 L 0 0.9 L 8.485 0.9 L 8.485 0 L 8.485 -0.9 L 0 -0.9 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 0.707 -0.707 0.707 16 16)\"/>"
    },
    "IconsNameSearchStateSelectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 18 9 L 15.5 9 C 15.5 12.59 12.59 15.5 9 15.5 L 9 18 L 9 20.5 C 15.351 20.5 20.5 15.351 20.5 9 L 18 9 Z M 9 18 L 9 15.5 C 5.41 15.5 2.5 12.59 2.5 9 L 0 9 L -2.5 9 C -2.5 15.351 2.649 20.5 9 20.5 L 9 18 Z M 0 9 L 2.5 9 C 2.5 5.41 5.41 2.5 9 2.5 L 9 0 L 9 -2.5 C 2.649 -2.5 -2.5 2.649 -2.5 9 L 0 9 Z M 9 0 L 9 2.5 C 12.59 2.5 15.5 5.41 15.5 9 L 18 9 L 20.5 9 C 20.5 2.649 15.351 -2.5 9 -2.5 L 9 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/><path d=\"M 8.485 1.25 C 9.176 1.25 9.735 0.69 9.735 0 C 9.735 -0.69 9.176 -1.25 8.485 -1.25 L 8.485 0 L 8.485 1.25 Z M 0 -1.25 C -0.69 -1.25 -1.25 -0.69 -1.25 0 C -1.25 0.69 -0.69 1.25 0 1.25 L 0 0 L 0 -1.25 Z M 0 0 L 0 1.25 L 8.485 1.25 L 8.485 0 L 8.485 -1.25 L 0 -1.25 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 0.707 -0.707 0.707 16 16)\"/>"
    },
    "IconsNameSearchStateSelectedDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 18 9 L 15.5 9 C 15.5 12.59 12.59 15.5 9 15.5 L 9 18 L 9 20.5 C 15.351 20.5 20.5 15.351 20.5 9 L 18 9 Z M 9 18 L 9 15.5 C 5.41 15.5 2.5 12.59 2.5 9 L 0 9 L -2.5 9 C -2.5 15.351 2.649 20.5 9 20.5 L 9 18 Z M 0 9 L 2.5 9 C 2.5 5.41 5.41 2.5 9 2.5 L 9 0 L 9 -2.5 C 2.649 -2.5 -2.5 2.649 -2.5 9 L 0 9 Z M 9 0 L 9 2.5 C 12.59 2.5 15.5 5.41 15.5 9 L 18 9 L 20.5 9 C 20.5 2.649 15.351 -2.5 9 -2.5 L 9 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/><path d=\"M 8.485 1.25 C 9.176 1.25 9.735 0.69 9.735 0 C 9.735 -0.69 9.176 -1.25 8.485 -1.25 L 8.485 0 L 8.485 1.25 Z M 0 -1.25 C -0.69 -1.25 -1.25 -0.69 -1.25 0 C -1.25 0.69 -0.69 1.25 0 1.25 L 0 0 L 0 -1.25 Z M 0 0 L 0 1.25 L 8.485 1.25 L 8.485 0 L 8.485 -1.25 L 0 -1.25 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 0.707 -0.707 0.707 16 16)\"/>"
    },
    "IconsNameSearchStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 18 9 L 16.2 9 C 16.2 12.976 12.976 16.2 9 16.2 L 9 18 L 9 19.8 C 14.965 19.8 19.8 14.965 19.8 9 L 18 9 Z M 9 18 L 9 16.2 C 5.024 16.2 1.8 12.976 1.8 9 L 0 9 L -1.8 9 C -1.8 14.965 3.035 19.8 9 19.8 L 9 18 Z M 0 9 L 1.8 9 C 1.8 5.024 5.024 1.8 9 1.8 L 9 0 L 9 -1.8 C 3.035 -1.8 -1.8 3.035 -1.8 9 L 0 9 Z M 9 0 L 9 1.8 C 12.976 1.8 16.2 5.024 16.2 9 L 18 9 L 19.8 9 C 19.8 3.035 14.965 -1.8 9 -1.8 L 9 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1)\"/><path d=\"M 8.485 0.9 C 8.982 0.9 9.385 0.497 9.385 0 C 9.385 -0.497 8.982 -0.9 8.485 -0.9 L 8.485 0 L 8.485 0.9 Z M 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 C -0.9 0.497 -0.497 0.9 0 0.9 L 0 0 L 0 -0.9 Z M 0 0 L 0 0.9 L 8.485 0.9 L 8.485 0 L 8.485 -0.9 L 0 -0.9 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.707 0.707 -0.707 0.707 16 16)\"/>"
    },
    "IconsNameShareStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 11.262 16.894 L 12.162 16.894 L 12.158 0 L 11.258 0 L 10.358 0 L 10.362 16.894 L 11.262 16.894 Z M 11.258 0 L 12.817 -0.9 C 12.496 -1.457 11.901 -1.8 11.258 -1.8 C 10.615 -1.8 10.021 -1.457 9.699 -0.9 L 11.258 0 Z M 11.262 16.894 L 11.668 15.141 C 11.401 15.079 11.123 15.079 10.856 15.141 L 11.262 16.894 Z M 0.345 18.902 L -1.214 18.002 L 0.345 18.902 Z M 0.673 19.344 L 0.267 17.591 L 0.673 19.344 Z M 22.171 18.902 L 20.613 19.802 L 22.171 18.902 Z M 21.844 19.344 L 21.438 21.098 L 21.844 19.344 Z M 11.258 0 L 9.699 0.9 L 20.613 19.802 L 22.171 18.902 L 23.73 18.002 L 12.817 -0.9 L 11.258 0 Z M 0.345 18.902 L 1.904 19.802 L 12.817 0.9 L 11.258 0 L 9.699 -0.9 L -1.214 18.002 L 0.345 18.902 Z M 21.844 19.344 L 22.25 17.591 L 11.668 15.141 L 11.262 16.894 L 10.856 18.648 L 21.438 21.098 L 21.844 19.344 Z M 11.262 16.894 L 10.856 15.141 L 0.267 17.591 L 0.673 19.344 L 1.078 21.098 L 11.667 18.648 L 11.262 16.894 Z M 0.345 18.902 L -1.214 18.002 C -2.132 19.592 -0.711 21.512 1.078 21.098 L 0.673 19.344 L 0.267 17.591 C 1.545 17.295 2.56 18.666 1.904 19.802 L 0.345 18.902 Z M 22.171 18.902 L 20.613 19.802 C 19.957 18.666 20.972 17.295 22.25 17.591 L 21.844 19.344 L 21.438 21.098 C 23.227 21.512 24.648 19.592 23.73 18.002 L 22.171 18.902 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.500 0.866 -0.866 0.500 17.500 -6.700)\"/>"
    },
    "IconsNameShareStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 11.262 16.894 L 12.162 16.894 L 12.158 0 L 11.258 0 L 10.358 0 L 10.362 16.894 L 11.262 16.894 Z M 11.258 0 L 12.817 -0.9 C 12.496 -1.457 11.901 -1.8 11.258 -1.8 C 10.615 -1.8 10.021 -1.457 9.699 -0.9 L 11.258 0 Z M 11.262 16.894 L 11.668 15.141 C 11.401 15.079 11.123 15.079 10.856 15.141 L 11.262 16.894 Z M 0.345 18.902 L -1.214 18.002 L 0.345 18.902 Z M 0.673 19.344 L 0.267 17.591 L 0.673 19.344 Z M 22.171 18.902 L 20.613 19.802 L 22.171 18.902 Z M 21.844 19.344 L 21.438 21.098 L 21.844 19.344 Z M 11.258 0 L 9.699 0.9 L 20.613 19.802 L 22.171 18.902 L 23.73 18.002 L 12.817 -0.9 L 11.258 0 Z M 0.345 18.902 L 1.904 19.802 L 12.817 0.9 L 11.258 0 L 9.699 -0.9 L -1.214 18.002 L 0.345 18.902 Z M 21.844 19.344 L 22.25 17.591 L 11.668 15.141 L 11.262 16.894 L 10.856 18.648 L 21.438 21.098 L 21.844 19.344 Z M 11.262 16.894 L 10.856 15.141 L 0.267 17.591 L 0.673 19.344 L 1.078 21.098 L 11.667 18.648 L 11.262 16.894 Z M 0.345 18.902 L -1.214 18.002 C -2.132 19.592 -0.711 21.512 1.078 21.098 L 0.673 19.344 L 0.267 17.591 C 1.545 17.295 2.56 18.666 1.904 19.802 L 0.345 18.902 Z M 22.171 18.902 L 20.613 19.802 C 19.957 18.666 20.972 17.295 22.25 17.591 L 21.844 19.344 L 21.438 21.098 C 23.227 21.512 24.648 19.592 23.73 18.002 L 22.171 18.902 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.500 0.866 -0.866 0.500 17.500 -6.700)\"/>"
    },
    "IconsNameShareStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 11.262 16.894 L 12.162 16.888 L 12.05 0.081 L 11.15 0.087 L 10.25 0.093 L 10.362 16.9 L 11.262 16.894 Z M 11.262 16.894 L 11.668 15.141 C 11.401 15.079 11.123 15.079 10.856 15.141 L 11.262 16.894 Z M 0.345 18.902 L -1.214 18.002 L 0.345 18.902 Z M 0.673 19.344 L 0.267 17.591 L 0.673 19.344 Z M 22.171 18.902 L 20.613 19.802 L 22.171 18.902 Z M 21.844 19.344 L 21.438 21.098 L 21.844 19.344 Z M 11.518 0.45 L 13.077 -0.45 L 11.518 0.45 Z M 10.999 0.45 L 9.44 -0.45 L 10.999 0.45 Z M 11.518 0.45 L 9.959 1.35 L 20.613 19.802 L 22.171 18.902 L 23.73 18.002 L 13.077 -0.45 L 11.518 0.45 Z M 0.345 18.902 L 1.904 19.802 L 12.557 1.35 L 10.999 0.45 L 9.44 -0.45 L -1.214 18.002 L 0.345 18.902 Z M 21.844 19.344 L 22.25 17.591 L 11.668 15.141 L 11.262 16.894 L 10.856 18.648 L 21.438 21.098 L 21.844 19.344 Z M 11.262 16.894 L 10.856 15.141 L 0.267 17.591 L 0.673 19.344 L 1.078 21.098 L 11.667 18.648 L 11.262 16.894 Z M 0.345 18.902 L -1.214 18.002 C -2.132 19.592 -0.711 21.512 1.078 21.098 L 0.673 19.344 L 0.267 17.591 C 1.545 17.295 2.56 18.666 1.904 19.802 L 0.345 18.902 Z M 22.171 18.902 L 20.613 19.802 C 19.957 18.666 20.972 17.295 22.25 17.591 L 21.844 19.344 L 21.438 21.098 C 23.227 21.512 24.648 19.592 23.73 18.002 L 22.171 18.902 Z M 11.518 0.45 L 13.077 -0.45 C 12.269 -1.85 10.248 -1.85 9.44 -0.45 L 10.999 0.45 L 12.557 1.35 C 11.98 2.35 10.537 2.35 9.959 1.35 L 11.518 0.45 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0.500 0.866 -0.866 0.500 17.500 -6.700)\"/>"
    },
    "IconsNameShopStateDefaultDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 21.017 1.875 L 19.221 1.988 L 21.017 1.875 Z M 2.979 0 L 2.979 1.8 L 19.021 1.8 L 19.021 0 L 19.021 -1.8 L 2.979 -1.8 L 2.979 0 Z M 21.017 1.875 L 19.221 1.988 L 19.938 13.463 L 21.734 13.35 L 23.531 13.238 L 22.814 1.763 L 21.017 1.875 Z M 17.742 17.6 L 17.742 15.8 L 4.258 15.8 L 4.258 17.6 L 4.258 19.4 L 17.742 19.4 L 17.742 17.6 Z M 0.266 13.35 L 2.062 13.463 L 2.779 1.988 L 0.983 1.875 L -0.814 1.763 L -1.531 13.238 L 0.266 13.35 Z M 4.258 17.6 L 4.258 15.8 C 2.989 15.8 1.983 14.729 2.062 13.463 L 0.266 13.35 L -1.531 13.238 C -1.74 16.577 0.912 19.4 4.258 19.4 L 4.258 17.6 Z M 21.734 13.35 L 19.938 13.463 C 20.017 14.729 19.011 15.8 17.742 15.8 L 17.742 17.6 L 17.742 19.4 C 21.088 19.4 23.74 16.577 23.531 13.238 L 21.734 13.35 Z M 19.021 0 L 19.021 1.8 C 19.127 1.8 19.214 1.882 19.221 1.988 L 21.017 1.875 L 22.814 1.763 C 22.689 -0.24 21.028 -1.8 19.021 -1.8 L 19.021 0 Z M 2.979 0 L 2.979 -1.8 C 0.972 -1.8 -0.689 -0.24 -0.814 1.763 L 0.983 1.875 L 2.779 1.988 C 2.786 1.882 2.873 1.8 2.979 1.8 L 2.979 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 1 0 4.400)\"/><path d=\"M 7.5 0 C 7.5 -0.497 7.097 -0.9 6.6 -0.9 C 6.103 -0.9 5.7 -0.497 5.7 0 L 6.6 0 L 7.5 0 Z M 0.9 0 C 0.9 -0.497 0.497 -0.9 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 L 0.9 0 Z M 6.6 0 L 5.7 0 C 5.7 1.325 4.625 2.4 3.3 2.4 L 3.3 3.3 L 3.3 4.2 C 5.62 4.2 7.5 2.32 7.5 0 L 6.6 0 Z M 3.3 3.3 L 3.3 2.4 C 1.975 2.4 0.9 1.325 0.9 0 L 0 0 L -0.9 0 C -0.9 2.32 0.98 4.2 3.3 4.2 L 3.3 3.3 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 1 7.700 8.900)\"/><path d=\"M 7.5 0 C 7.5 -0.497 7.097 -0.9 6.6 -0.9 C 6.103 -0.9 5.7 -0.497 5.7 0 L 6.6 0 L 7.5 0 Z M 0.9 0 C 0.9 -0.497 0.497 -0.9 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 L 0.9 0 Z M 6.6 1.65 L 5.7 1.65 C 5.7 2.975 4.625 4.05 3.3 4.05 L 3.3 4.95 L 3.3 5.85 C 5.62 5.85 7.5 3.97 7.5 1.65 L 6.6 1.65 Z M 3.3 4.95 L 3.3 4.05 C 1.975 4.05 0.9 2.975 0.9 1.65 L 0 1.65 L -0.9 1.65 C -0.9 3.97 0.98 5.85 3.3 5.85 L 3.3 4.95 Z M 6.6 1.65 L 7.5 1.65 L 7.5 0 L 6.6 0 L 5.7 0 L 5.7 1.65 L 6.6 1.65 Z M 0 1.65 L 0.9 1.65 L 0.9 0 L 0 0 L -0.9 0 L -0.9 1.65 L 0 1.65 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 -1 7.700 4.950)\"/>"
    },
    "IconsNameShopStateDefaultDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 21.017 1.875 L 19.221 1.988 L 21.017 1.875 Z M 2.979 0 L 2.979 1.8 L 19.021 1.8 L 19.021 0 L 19.021 -1.8 L 2.979 -1.8 L 2.979 0 Z M 21.017 1.875 L 19.221 1.988 L 19.938 13.463 L 21.734 13.35 L 23.531 13.238 L 22.814 1.763 L 21.017 1.875 Z M 17.742 17.6 L 17.742 15.8 L 4.258 15.8 L 4.258 17.6 L 4.258 19.4 L 17.742 19.4 L 17.742 17.6 Z M 0.266 13.35 L 2.062 13.463 L 2.779 1.988 L 0.983 1.875 L -0.814 1.763 L -1.531 13.238 L 0.266 13.35 Z M 4.258 17.6 L 4.258 15.8 C 2.989 15.8 1.983 14.729 2.062 13.463 L 0.266 13.35 L -1.531 13.238 C -1.74 16.577 0.912 19.4 4.258 19.4 L 4.258 17.6 Z M 21.734 13.35 L 19.938 13.463 C 20.017 14.729 19.011 15.8 17.742 15.8 L 17.742 17.6 L 17.742 19.4 C 21.088 19.4 23.74 16.577 23.531 13.238 L 21.734 13.35 Z M 19.021 0 L 19.021 1.8 C 19.127 1.8 19.214 1.882 19.221 1.988 L 21.017 1.875 L 22.814 1.763 C 22.689 -0.24 21.028 -1.8 19.021 -1.8 L 19.021 0 Z M 2.979 0 L 2.979 -1.8 C 0.972 -1.8 -0.689 -0.24 -0.814 1.763 L 0.983 1.875 L 2.779 1.988 C 2.786 1.882 2.873 1.8 2.979 1.8 L 2.979 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 1 0 4.400)\"/><path d=\"M 7.5 0 C 7.5 -0.497 7.097 -0.9 6.6 -0.9 C 6.103 -0.9 5.7 -0.497 5.7 0 L 6.6 0 L 7.5 0 Z M 0.9 0 C 0.9 -0.497 0.497 -0.9 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 L 0.9 0 Z M 6.6 0 L 5.7 0 C 5.7 1.325 4.625 2.4 3.3 2.4 L 3.3 3.3 L 3.3 4.2 C 5.62 4.2 7.5 2.32 7.5 0 L 6.6 0 Z M 3.3 3.3 L 3.3 2.4 C 1.975 2.4 0.9 1.325 0.9 0 L 0 0 L -0.9 0 C -0.9 2.32 0.98 4.2 3.3 4.2 L 3.3 3.3 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 1 7.700 8.900)\"/><path d=\"M 7.5 0 C 7.5 -0.497 7.097 -0.9 6.6 -0.9 C 6.103 -0.9 5.7 -0.497 5.7 0 L 6.6 0 L 7.5 0 Z M 0.9 0 C 0.9 -0.497 0.497 -0.9 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 L 0.9 0 Z M 6.6 1.65 L 5.7 1.65 C 5.7 2.975 4.625 4.05 3.3 4.05 L 3.3 4.95 L 3.3 5.85 C 5.62 5.85 7.5 3.97 7.5 1.65 L 6.6 1.65 Z M 3.3 4.95 L 3.3 4.05 C 1.975 4.05 0.9 2.975 0.9 1.65 L 0 1.65 L -0.9 1.65 C -0.9 3.97 0.98 5.85 3.3 5.85 L 3.3 4.95 Z M 6.6 1.65 L 7.5 1.65 L 7.5 0 L 6.6 0 L 5.7 0 L 5.7 1.65 L 6.6 1.65 Z M 0 1.65 L 0.9 1.65 L 0.9 0 L 0 0 L -0.9 0 L -0.9 1.65 L 0 1.65 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 -1 7.700 4.950)\"/>"
    },
    "IconsNameShopStateSelectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.983 1.875 C 1.049 0.821 1.923 0 2.979 0 L 19.021 0 C 20.077 0 20.951 0.821 21.017 1.875 L 21.734 13.35 C 21.878 15.653 20.049 17.6 17.742 17.6 L 4.258 17.6 C 1.951 17.6 0.122 15.653 0.266 13.35 L 0.983 1.875 Z\" fill=\"rgb(0,0,0)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 1 0 4.400)\"/><path d=\"M 21.017 1.875 L 19.221 1.988 L 21.017 1.875 Z M 2.979 0 L 2.979 1.8 L 19.021 1.8 L 19.021 0 L 19.021 -1.8 L 2.979 -1.8 L 2.979 0 Z M 21.017 1.875 L 19.221 1.988 L 19.938 13.463 L 21.734 13.35 L 23.531 13.238 L 22.814 1.763 L 21.017 1.875 Z M 17.742 17.6 L 17.742 15.8 L 4.258 15.8 L 4.258 17.6 L 4.258 19.4 L 17.742 19.4 L 17.742 17.6 Z M 0.266 13.35 L 2.062 13.463 L 2.779 1.988 L 0.983 1.875 L -0.814 1.763 L -1.531 13.238 L 0.266 13.35 Z M 4.258 17.6 L 4.258 15.8 C 2.989 15.8 1.983 14.729 2.062 13.463 L 0.266 13.35 L -1.531 13.238 C -1.74 16.577 0.912 19.4 4.258 19.4 L 4.258 17.6 Z M 21.734 13.35 L 19.938 13.463 C 20.017 14.729 19.011 15.8 17.742 15.8 L 17.742 17.6 L 17.742 19.4 C 21.088 19.4 23.74 16.577 23.531 13.238 L 21.734 13.35 Z M 19.021 0 L 19.021 1.8 C 19.127 1.8 19.214 1.882 19.221 1.988 L 21.017 1.875 L 22.814 1.763 C 22.689 -0.24 21.028 -1.8 19.021 -1.8 L 19.021 0 Z M 2.979 0 L 2.979 -1.8 C 0.972 -1.8 -0.689 -0.24 -0.814 1.763 L 0.983 1.875 L 2.779 1.988 C 2.786 1.882 2.873 1.8 2.979 1.8 L 2.979 0 Z\" fill=\"rgb(0,0,0)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 1 0 4.400)\"/><path d=\"M 7.5 0 C 7.5 -0.497 7.097 -0.9 6.6 -0.9 C 6.103 -0.9 5.7 -0.497 5.7 0 L 6.6 0 L 7.5 0 Z M 0.9 0 C 0.9 -0.497 0.497 -0.9 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 L 0.9 0 Z M 6.6 0 L 5.7 0 C 5.7 1.325 4.625 2.4 3.3 2.4 L 3.3 3.3 L 3.3 4.2 C 5.62 4.2 7.5 2.32 7.5 0 L 6.6 0 Z M 3.3 3.3 L 3.3 2.4 C 1.975 2.4 0.9 1.325 0.9 0 L 0 0 L -0.9 0 C -0.9 2.32 0.98 4.2 3.3 4.2 L 3.3 3.3 Z\" fill=\"rgb(255,255,255)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 1 7.700 8.900)\"/><path d=\"M 7.5 0 C 7.5 -0.497 7.097 -0.9 6.6 -0.9 C 6.103 -0.9 5.7 -0.497 5.7 0 L 6.6 0 L 7.5 0 Z M 0.9 0 C 0.9 -0.497 0.497 -0.9 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 L 0.9 0 Z M 6.6 1.65 L 5.7 1.65 C 5.7 2.975 4.625 4.05 3.3 4.05 L 3.3 4.95 L 3.3 5.85 C 5.62 5.85 7.5 3.97 7.5 1.65 L 6.6 1.65 Z M 3.3 4.95 L 3.3 4.05 C 1.975 4.05 0.9 2.975 0.9 1.65 L 0 1.65 L -0.9 1.65 C -0.9 3.97 0.98 5.85 3.3 5.85 L 3.3 4.95 Z M 6.6 1.65 L 7.5 1.65 L 7.5 0 L 6.6 0 L 5.7 0 L 5.7 1.65 L 6.6 1.65 Z M 0 1.65 L 0.9 1.65 L 0.9 0 L 0 0 L -0.9 0 L -0.9 1.65 L 0 1.65 Z\" fill=\"rgb(0,0,0)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 -1 7.700 4.950)\"/>"
    },
    "IconsNameShopStateSelectedDark2": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.983 1.875 C 1.049 0.821 1.923 0 2.979 0 L 19.021 0 C 20.077 0 20.951 0.821 21.017 1.875 L 21.734 13.35 C 21.878 15.653 20.049 17.6 17.742 17.6 L 4.258 17.6 C 1.951 17.6 0.122 15.653 0.266 13.35 L 0.983 1.875 Z\" fill=\"rgb(255,255,255)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 1 0 4.400)\"/><path d=\"M 21.017 1.875 L 19.221 1.988 L 21.017 1.875 Z M 2.979 0 L 2.979 1.8 L 19.021 1.8 L 19.021 0 L 19.021 -1.8 L 2.979 -1.8 L 2.979 0 Z M 21.017 1.875 L 19.221 1.988 L 19.938 13.463 L 21.734 13.35 L 23.531 13.238 L 22.814 1.763 L 21.017 1.875 Z M 17.742 17.6 L 17.742 15.8 L 4.258 15.8 L 4.258 17.6 L 4.258 19.4 L 17.742 19.4 L 17.742 17.6 Z M 0.266 13.35 L 2.062 13.463 L 2.779 1.988 L 0.983 1.875 L -0.814 1.763 L -1.531 13.238 L 0.266 13.35 Z M 4.258 17.6 L 4.258 15.8 C 2.989 15.8 1.983 14.729 2.062 13.463 L 0.266 13.35 L -1.531 13.238 C -1.74 16.577 0.912 19.4 4.258 19.4 L 4.258 17.6 Z M 21.734 13.35 L 19.938 13.463 C 20.017 14.729 19.011 15.8 17.742 15.8 L 17.742 17.6 L 17.742 19.4 C 21.088 19.4 23.74 16.577 23.531 13.238 L 21.734 13.35 Z M 19.021 0 L 19.021 1.8 C 19.127 1.8 19.214 1.882 19.221 1.988 L 21.017 1.875 L 22.814 1.763 C 22.689 -0.24 21.028 -1.8 19.021 -1.8 L 19.021 0 Z M 2.979 0 L 2.979 -1.8 C 0.972 -1.8 -0.689 -0.24 -0.814 1.763 L 0.983 1.875 L 2.779 1.988 C 2.786 1.882 2.873 1.8 2.979 1.8 L 2.979 0 Z\" fill=\"rgb(255,255,255)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 1 0 4.400)\"/><path d=\"M 7.5 0 C 7.5 -0.497 7.097 -0.9 6.6 -0.9 C 6.103 -0.9 5.7 -0.497 5.7 0 L 6.6 0 L 7.5 0 Z M 0.9 0 C 0.9 -0.497 0.497 -0.9 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 L 0.9 0 Z M 6.6 0 L 5.7 0 C 5.7 1.325 4.625 2.4 3.3 2.4 L 3.3 3.3 L 3.3 4.2 C 5.62 4.2 7.5 2.32 7.5 0 L 6.6 0 Z M 3.3 3.3 L 3.3 2.4 C 1.975 2.4 0.9 1.325 0.9 0 L 0 0 L -0.9 0 C -0.9 2.32 0.98 4.2 3.3 4.2 L 3.3 3.3 Z\" fill=\"rgb(0,0,0)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 1 7.700 8.900)\"/><path d=\"M 7.5 0 C 7.5 -0.497 7.097 -0.9 6.6 -0.9 C 6.103 -0.9 5.7 -0.497 5.7 0 L 6.6 0 L 7.5 0 Z M 0.9 0 C 0.9 -0.497 0.497 -0.9 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 L 0.9 0 Z M 6.6 1.65 L 5.7 1.65 C 5.7 2.975 4.625 4.05 3.3 4.05 L 3.3 4.95 L 3.3 5.85 C 5.62 5.85 7.5 3.97 7.5 1.65 L 6.6 1.65 Z M 3.3 4.95 L 3.3 4.05 C 1.975 4.05 0.9 2.975 0.9 1.65 L 0 1.65 L -0.9 1.65 C -0.9 3.97 0.98 5.85 3.3 5.85 L 3.3 4.95 Z M 6.6 1.65 L 7.5 1.65 L 7.5 0 L 6.6 0 L 5.7 0 L 5.7 1.65 L 6.6 1.65 Z M 0 1.65 L 0.9 1.65 L 0.9 0 L 0 0 L -0.9 0 L -0.9 1.65 L 0 1.65 Z\" fill=\"rgb(255,255,255)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 -1 7.700 4.950)\"/>"
    },
    "IconsNameShopStateUnselectedDark": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 21.017 1.875 L 19.221 1.988 L 21.017 1.875 Z M 2.979 0 L 2.979 1.8 L 19.021 1.8 L 19.021 0 L 19.021 -1.8 L 2.979 -1.8 L 2.979 0 Z M 21.017 1.875 L 19.221 1.988 L 19.938 13.463 L 21.734 13.35 L 23.531 13.238 L 22.814 1.763 L 21.017 1.875 Z M 17.742 17.6 L 17.742 15.8 L 4.258 15.8 L 4.258 17.6 L 4.258 19.4 L 17.742 19.4 L 17.742 17.6 Z M 0.266 13.35 L 2.062 13.463 L 2.779 1.988 L 0.983 1.875 L -0.814 1.763 L -1.531 13.238 L 0.266 13.35 Z M 4.258 17.6 L 4.258 15.8 C 2.989 15.8 1.983 14.729 2.062 13.463 L 0.266 13.35 L -1.531 13.238 C -1.74 16.577 0.912 19.4 4.258 19.4 L 4.258 17.6 Z M 21.734 13.35 L 19.938 13.463 C 20.017 14.729 19.011 15.8 17.742 15.8 L 17.742 17.6 L 17.742 19.4 C 21.088 19.4 23.74 16.577 23.531 13.238 L 21.734 13.35 Z M 19.021 0 L 19.021 1.8 C 19.127 1.8 19.214 1.882 19.221 1.988 L 21.017 1.875 L 22.814 1.763 C 22.689 -0.24 21.028 -1.8 19.021 -1.8 L 19.021 0 Z M 2.979 0 L 2.979 -1.8 C 0.972 -1.8 -0.689 -0.24 -0.814 1.763 L 0.983 1.875 L 2.779 1.988 C 2.786 1.882 2.873 1.8 2.979 1.8 L 2.979 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 1 0 4.400)\"/><path d=\"M 7.5 0 C 7.5 -0.497 7.097 -0.9 6.6 -0.9 C 6.103 -0.9 5.7 -0.497 5.7 0 L 6.6 0 L 7.5 0 Z M 0.9 0 C 0.9 -0.497 0.497 -0.9 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 L 0.9 0 Z M 6.6 0 L 5.7 0 C 5.7 1.325 4.625 2.4 3.3 2.4 L 3.3 3.3 L 3.3 4.2 C 5.62 4.2 7.5 2.32 7.5 0 L 6.6 0 Z M 3.3 3.3 L 3.3 2.4 C 1.975 2.4 0.9 1.325 0.9 0 L 0 0 L -0.9 0 C -0.9 2.32 0.98 4.2 3.3 4.2 L 3.3 3.3 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 1 7.700 8.900)\"/><path d=\"M 7.5 0 C 7.5 -0.497 7.097 -0.9 6.6 -0.9 C 6.103 -0.9 5.7 -0.497 5.7 0 L 6.6 0 L 7.5 0 Z M 0.9 0 C 0.9 -0.497 0.497 -0.9 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 L 0.9 0 Z M 6.6 1.65 L 5.7 1.65 C 5.7 2.975 4.625 4.05 3.3 4.05 L 3.3 4.95 L 3.3 5.85 C 5.62 5.85 7.5 3.97 7.5 1.65 L 6.6 1.65 Z M 3.3 4.95 L 3.3 4.05 C 1.975 4.05 0.9 2.975 0.9 1.65 L 0 1.65 L -0.9 1.65 C -0.9 3.97 0.98 5.85 3.3 5.85 L 3.3 4.95 Z M 6.6 1.65 L 7.5 1.65 L 7.5 0 L 6.6 0 L 5.7 0 L 5.7 1.65 L 6.6 1.65 Z M 0 1.65 L 0.9 1.65 L 0.9 0 L 0 0 L -0.9 0 L -0.9 1.65 L 0 1.65 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 1) matrix(1 0 0 -1 7.700 4.950)\"/>"
    },
    "Mic": {
      viewBox: "0 0 48 48",
      body: "<path d=\"M 14 0 C 12.409 0 10.883 0.632 9.757 1.757 C 8.632 2.883 8 4.409 8 6 L 8 22 C 8 23.591 8.632 25.117 9.757 26.243 C 10.883 27.368 12.409 28 14 28 C 15.591 28 17.117 27.368 18.243 26.243 C 19.368 25.117 20 23.591 20 22 L 20 6 C 20 4.409 19.368 2.883 18.243 1.757 C 17.117 0.632 15.591 0 14 0 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 10 2)\"/><path d=\"M 28 18 L 28 22 C 28 25.713 26.525 29.274 23.899 31.899 C 21.274 34.525 17.713 36 14 36 C 10.287 36 6.726 34.525 4.101 31.899 C 1.475 29.274 0 25.713 0 22 L 0 18 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 10 2)\"/>"
    },
    "Picture24": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 12.604 0 L 7.396 0 M 15.314 0.06 C 14.594 0 13.706 0 12.604 0 M 17.305 0.563 C 16.705 0.251 16.055 0.121 15.314 0.06 M 19.437 2.695 C 18.963 1.782 18.218 1.037 17.305 0.563 M 19.94 4.686 C 19.879 3.945 19.749 3.295 19.437 2.695 M 20 7.396 C 20 6.294 20 5.406 19.94 4.686 M 20 12.604 L 20 7.396 M 19.94 15.314 C 20 14.594 20 13.706 20 12.604 M 19.437 17.305 C 19.749 16.705 19.879 16.055 19.94 15.314 M 17.305 19.437 C 18.218 18.963 18.963 18.218 19.437 17.305 M 15.314 19.94 C 16.055 19.879 16.705 19.749 17.305 19.437 M 12.604 20 C 13.706 20 14.594 20 15.314 19.94 M 7.396 20 L 12.604 20 M 4.686 19.94 C 5.406 20 6.294 20 7.396 20 M 2.695 19.437 C 3.295 19.749 3.945 19.879 4.686 19.94 M 0.563 17.305 C 1.037 18.218 1.782 18.963 2.695 19.437 M 0.06 15.314 C 0.121 16.055 0.251 16.705 0.563 17.305 M 0 12.604 C 0 13.706 0 14.594 0.06 15.314 M 0 7.396 L 0 12.604 M 0.06 4.686 C 0 5.406 0 6.294 0 7.396 M 0.563 2.695 C 0.251 3.295 0.121 3.945 0.06 4.686 M 2.695 0.563 C 1.782 1.037 1.037 1.782 0.563 2.695 M 4.686 0.06 C 3.945 0.121 3.295 0.251 2.695 0.563 M 7.396 0 C 6.294 0 5.406 0 4.686 0.06 Z M 3.617 2.338 C 3.884 2.199 4.237 2.104 4.852 2.053 M 2.338 3.617 C 2.622 3.069 3.069 2.622 3.617 2.338 M 2.053 4.852 C 2.104 4.237 2.199 3.884 2.338 3.617 M 2 7.44 C 2 6.284 2.001 5.479 2.053 4.852 M 2 12.56 L 2 7.44 M 2.053 15.148 C 2.001 14.521 2 13.716 2 12.56 M 2.338 16.383 C 2.199 16.116 2.104 15.763 2.053 15.148 M 3.617 17.662 C 3.069 17.378 2.622 16.931 2.338 16.383 M 4.852 17.947 C 4.237 17.896 3.884 17.801 3.617 17.662 M 7.44 18 C 6.284 18 5.479 17.999 4.852 17.947 M 12.56 18 L 7.44 18 M 15.148 17.947 C 14.521 17.999 13.716 18 12.56 18 M 16.383 17.662 C 16.116 17.801 15.763 17.896 15.148 17.947 M 17.662 16.383 C 17.378 16.931 16.931 17.378 16.383 17.662 M 17.947 15.148 C 17.896 15.763 17.801 16.116 17.662 16.383 M 18 12.56 C 18 13.716 17.999 14.521 17.947 15.148 M 18 7.44 L 18 12.56 M 17.947 4.852 C 17.999 5.479 18 6.284 18 7.44 M 17.662 3.617 C 17.801 3.884 17.896 4.237 17.947 4.852 M 16.383 2.338 C 16.931 2.622 17.378 3.069 17.662 3.617 M 15.148 2.053 C 15.763 2.104 16.116 2.199 16.383 2.338 M 12.56 2 C 13.716 2 14.521 2.001 15.148 2.053 M 7.44 2 L 12.56 2 M 4.852 2.053 C 5.479 2.001 6.284 2 7.44 2 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/><path d=\"M 15.707 9.293 C 15.52 9.105 15.265 9 15 9 M 19.914 13.5 L 15.707 9.293 M 18.5 14.914 L 19.914 13.5 M 15 11.414 L 18.5 14.914 M 9.707 16.707 L 15 11.414 M 8.967 16.999 C 9.243 17.009 9.511 16.903 9.707 16.707 M 8.247 16.659 C 8.43 16.867 8.69 16.99 8.967 16.999 M 5.458 13.471 L 8.247 16.659 M 2.007 16.993 L 5.458 13.471 M 0.593 17.007 C 0.987 17.394 1.621 17.387 2.007 16.993 M 0.579 15.593 C 0.192 15.987 0.199 16.621 0.593 17.007 M 4.786 11.3 L 0.579 15.593 M 5.528 11 C 5.25 10.993 4.981 11.101 4.786 11.3 M 6.253 11.341 C 6.069 11.132 5.807 11.008 5.528 11 M 9.049 14.537 L 6.253 11.341 M 14.293 9.293 L 9.049 14.537 M 15 9 C 14.735 9 14.481 9.105 14.293 9.293 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/><path d=\"M 7 5.5 C 7 6.328 6.328 7 5.5 7 C 4.672 7 4 6.328 4 5.5 C 4 4.672 4.672 4 5.5 4 C 6.328 4 7 4.672 7 5.5 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2 2)\"/>"
    },
    "Video": {
      viewBox: "0 0 48 48",
      body: "<path d=\"M 44 4 L 30 14 L 44 24 L 44 4 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2 10)\"/><path d=\"M 4 0 L 26 0 M 0 4 C 0 1.791 1.791 0 4 0 M 0 24 L 0 4 M 4 28 C 1.791 28 0 26.209 0 24 M 26 28 L 4 28 M 30 24 C 30 26.209 28.209 28 26 28 M 30 4 L 30 24 M 26 0 C 28.209 0 30 1.791 30 4 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2 10)\"/>"
    }
  };
} catch {}
Object.assign(__ds_scope, { __ds_default_components_icons_icon_data_12stud1 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/icon-data.js", error: String((e && e.message) || e) }); }

__ds_scope.__ds_default_components_icons_icon_data_12stud1$1nb03e1 = __ds_scope.__ds_default_components_icons_icon_data_12stud1;

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 24,
  ...rest
}) {
  const d = __ds_scope.__ds_default_components_icons_icon_data_12stud1$1nb03e1[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none"
    // body strings are emitter-controlled <path> markup — geometry,
    // numeric fills and transforms only; no .fig-authored text reaches them.
    ,
    dangerouslySetInnerHTML: {
      __html: d.body
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon, __ds_default_components_icons_Icon_fio49a: Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

__ds_scope.__ds_default_components_icons_icon_data_12stud1$1lqvwv0 = __ds_scope.__ds_default_components_icons_icon_data_12stud1;

// components/icons/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pascal = s => s.replace(/(^|[\s-])(\w)/g, (_, __, c) => c.toUpperCase()).replace(/\s/g, '');
/**
 * Figma component set "Icons" (Name × State × Dark). Resolves the variant to the icon-data key.
 * Dark=yes variants carry a "2" suffix in the data map.
 */
function Icons({
  name = 'Exit',
  state = 'default',
  dark = false,
  size = 24,
  color,
  style,
  ...rest
}) {
  const base = 'IconsName' + pascal(name) + 'State' + pascal(state);
  const cands = dark ? [base + 'Dark2', base + '2', base + 'Dark', base] : [base + 'Dark', base, base + 'Dark2', base + '2'];
  const key = cands.find(k => __ds_scope.__ds_default_components_icons_icon_data_12stud1$1lqvwv0[k]);
  if (!key) return null;
  return /*#__PURE__*/React.createElement(__ds_scope.Icon, _extends({
    name: key,
    size: size,
    style: {
      color: color ?? (dark ? 'var(--wr-white)' : 'var(--colors-icons)'),
      flexShrink: 0,
      ...style
    }
  }, rest));
}
const ICON_NAMES = ['Add', 'Arrow Down', 'Arrow Left', 'Arrow Right', 'Arrow Up', 'Bookmark', 'Burger Menu', 'Comment', 'Exit', 'Favorite', 'Grid', 'Home', 'Like', 'Like Heart', 'Mentions', 'Messenger', 'More', 'Notifications', 'Reels', 'Search', 'Share', 'Shop'];
Object.assign(__ds_scope, { Icons, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck-saved-2026-09-25/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→ and ↑/↓, PgUp/PgDn, Space, Home/End,
 *      number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on
 *      idle; hovering or focusing its controls pins it visible until the
 *      pointer/focus leaves. While presenting it is pointer-summoned only:
 *      mouse movement (or hover/focus) shows it, slide changes never do.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate — the clicked slide becomes the
 *      selected (highlighted) slide; shift-click selects a range and
 *      cmd/ctrl-click toggles slides in and out of the selection
 *      (Escape collapses it back to the current slide); ↑/↓ with a
 *      thumbnail focused to step between slides; Delete/Backspace with a
 *      thumbnail focused to delete the selection (one confirm dialog,
 *      one undoable operation); drag to reorder (dragging collapses a
 *      multi-selection); right-click for
 *      Skip / Move up / Move down / Duplicate / Delete — over a
 *      multi-selection the menu offers "Delete N slides". Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      They also carry no rail number and are excluded from the overlay's
 *      slide count: the remaining slides are numbered contiguously
 *      (Keynote-style), and a skipped CURRENT slide (reachable by rail
 *      click or deep link, never by prev/next) shows '–' as its position.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *  (h) typographic defaults — a zero-specificity stylesheet injected into
 *      the document gives headings `text-wrap: balance` and body text
 *      (p, li, blockquote, figcaption) `text-wrap: pretty`, so slides
 *      avoid widowed/orphaned words by default. Any text-wrap declaration
 *      you author on those elements wins over these defaults.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
      /* Slide edge on the black stage. Dark decks override the canvas
       * fill toward the stage's own black, leaving nothing to mark where
       * the slide ends — the faint white ring keeps the boundary legible
       * there while disappearing into the white of light decks. A
       * box-shadow, not outline/border: it follows any canvas rounding
       * and adds no layout size. */
      box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.12);
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-selected] .num { color: #fff; }
    .thumb[data-selected] .frame {
      outline-color: rgba(217,119,87,0.65);
      box-shadow: 0 0 0 4px rgba(217,119,87,0.18);
    }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame {
      outline-color: #D97757;
      box-shadow: 0 0 0 4px rgba(217,119,87,0.25);
    }
    /* While dragging, the thumb itself is the drag visual (the native drag
       image is suppressed in dragstart so the snapshot can't wander off the
       rail horizontally): elevate it rather than dim it, and let hit-testing
       ignore it so dragover reaches the sibling thumb under the pointer
       instead of the moving element itself. */
    .thumb[data-dragging] { opacity: 0.9; z-index: 30; pointer-events: none; }
    .thumb[data-dragging] .frame {
      outline-color: rgba(255,255,255,0.5);
      box-shadow: 0 6px 24px rgba(0,0,0,0.5);
    }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        /* Size containment: slotted content that overflows the design box
         * (an image-slot's aspect-ratio-derived width, say) must not count
         * toward Chromium's print document width — without this, an
         * abs-positioned child past the page edge shrinks the whole PDF
         * to fit (~75%). Containment is safe here because the definite
         * width/height above size the slide regardless of content.
         * (Absorbed from PR #2619 with its owner's agreement.) */
        contain: size !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      // Explicit multi-selection (slide elements). Empty means the
      // selection is implicitly the current slide, so Delete always has
      // a well-defined target while the rail has focus.
      this._selected = new Set();
      this._selAnchor = null;
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      // Overlay pinning: while the pointer is over the controls toolbar or
      // a control has keyboard focus, the idle-hide timeout must not
      // dismiss it (a pointer parked ON the controls doesn't generate
      // mousemove, so without the pin the toolbar vanishes under the
      // user's cursor after OVERLAY_HIDE_MS). Read by _flashOverlay's
      // hide timeout; cleared by mouseleave/focusout, which resume the
      // normal idle fade.
      this._overlayHover = false;
      this._overlayFocus = false;
      // Capability marker for the host's injected guest bundle. Copies
      // WITHOUT _navArrowsUpDown are frozen per-project builds that
      // predate native ArrowUp/ArrowDown slide nav — the bundle translates
      // Up/Down to Right/Left for those (installDeckArrowKeyTranslator in
      // apps/web/src/guest/edit-mode.ts) and must stand down here or every
      // press would advance twice. A marker, not a version number, so a
      // future capability can add its own independent probe.
      this._navArrowsUpDown = true;
      // Same contract for rail Delete/Backspace: copies WITHOUT
      // _railDeleteKey predate the thumbs' own Delete/Backspace binding,
      // and the bundle opens the delete confirm for them
      // (installDeckRailDeleteFallback in apps/web/src/guest/edit-mode.ts).
      // Current builds consume the key at the thumb (stopPropagation), so
      // the marker is belt-and-braces — it keeps the fallback standing
      // down even if a future build lets the key bubble past the thumb.
      this._railDeleteKey = true;
      // Same contract for skip-aware numbering: copies WITHOUT
      // _railSkipNumbers number every thumb 1..N and count skipped slides
      // in the overlay total — the bundle rewrites both for those
      // (installDeckSkipNumberingFallback in apps/web/src/guest/edit-mode.ts).
      // Here the component renumbers natively, so the fallback stands down.
      this._railSkipNumbers = true;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      this._ensurePrintSizingMeta();
      this._ensureTextWrapDefaults();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        // Self-heal: a departed doc-page may have removed the page-global
        // print-sizing meta this deck deferred to at connect time.
        this._ensurePrintSizingMeta();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (three per view — cur/prev/next).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast. Also ignore data-dc-tpl /
      // data-om-slide-id — host-reserved bookkeeping stamps (the host's
      // ATTR_RESERVED guard bounds them the same way) that structural
      // edits renumber/re-mint on slides whose content didn't change;
      // re-cloning on that churn is what made a slide move flash its
      // thumbnails.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-(validate|slide-id)$|dc-tpl$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            this._renumberRail();
            this._syncCount();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      // Stylesheets that finish loading AFTER the snapshot below never
      // reach the thumbs on their own: a still-pending <link> contributes
      // nothing to document.styleSheets, and nothing re-reads it on load,
      // so the live slides restyle while every clone keeps the stale
      // sheet. dc-runtime's helmet mounts design-system <link>s at render
      // time, so a deck-stage that connects first snapshots before that
      // CSS exists. Funnel late arrivals into the same debounced resync:
      // hook load/error on every current <link>, and watch <head> for
      // links and styles mounted or rewritten later. Deliberately not
      // rAF- or fonts.ready-driven — rAF is throttled/suspended in hidden
      // iframes (thumbnail/presenter contexts), and a font-file load
      // doesn't change cssRules, so it needs no resync.
      this._hookedLinks = [];
      this._hookSheetLoad = el => {
        if (!el.matches || !el.matches('link[rel~="stylesheet" i]')) return;
        if (this._hookedLinks.indexOf(el) !== -1) return;
        this._hookedLinks.push(el);
        el.addEventListener('load', this._onTweakChange);
        el.addEventListener('error', this._onTweakChange);
      };
      document.querySelectorAll('link[rel~="stylesheet" i]').forEach(this._hookSheetLoad);
      this._headObserver = new MutationObserver(records => {
        let resync = false;
        for (const r of records) {
          if (r.type === 'characterData') {
            // Only <style> text is CSS — a ticking <title> shouldn't
            // wake the resync forever.
            const p = r.target.parentNode;
            if (p && p.nodeName === 'STYLE') resync = true;
            continue;
          }
          if (r.type === 'attributes') {
            // A late rel/href rewrite turns an inert <link> into a
            // stylesheet (hook it; its load fires even on cache hits);
            // a media/disabled flip changes effective rules with no
            // event. Resync only if this link is or ever was a
            // stylesheet — favicon/preload/canonical href churn isn't
            // a resync.
            if (r.target.nodeName === 'LINK') {
              this._hookSheetLoad(r.target);
              if (this._hookedLinks.indexOf(r.target) !== -1) resync = true;
            } else if (r.target.nodeName === 'STYLE') resync = true;
            continue;
          }
          // childList: only links and styles carry CSS. A new <link> has
          // no rules until it loads — hook it rather than resync now; a
          // <style> mount/unmount or text-node swap takes effect
          // immediately. _freezeStyle (our beforeprint helper) is skipped
          // on add only — no removal-side guard: _onAfterPrint nulls the
          // ref before the observer fires, so that check would be dead;
          // the one debounced no-op resync per print is harmless.
          if (r.target.nodeName === 'STYLE') resync = true;
          for (const n of r.addedNodes) {
            if (n.nodeName === 'LINK') this._hookSheetLoad(n);else if (n.nodeName === 'STYLE' && n !== this._freezeStyle) resync = true;
          }
          for (const n of r.removedNodes) {
            if (n.nodeName === 'LINK') {
              const hi = this._hookedLinks.indexOf(n);
              if (hi !== -1) {
                this._hookedLinks.splice(hi, 1);
                n.removeEventListener('load', this._onTweakChange);
                n.removeEventListener('error', this._onTweakChange);
                resync = true;
              }
            } else if (n.nodeName === 'STYLE') resync = true;
          }
        }
        if (resync) this._onTweakChange();
      });
      this._headObserver.observe(document.head, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['rel', 'href', 'media', 'disabled']
      });
      this._snapshotAuthorCss();
      // Re-snapshot once any still-loading stylesheet settles — it throws on
      // .cssRules above and silently contributes '' → unstyled thumbs on a
      // cold mount. {once:true}; routed through the debounced handler.
      document.querySelectorAll('link[rel~="stylesheet"]').forEach(l => {
        try {
          if (l.sheet && l.sheet.cssRules) return;
        } catch (e) {}
        l.addEventListener('load', this._onTweakChange, {
          once: true
        });
        l.addEventListener('error', this._onTweakChange, {
          once: true
        });
      });
      if (document.fonts) document.fonts.ready.then(this._onTweakChange, this._onTweakChange);
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      // A disconnect mid-drag never gets a dragend, so the document-level
      // drag tracker must be torn down here like every other global hook.
      this._stopDragTrack();
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._headObserver) this._headObserver.disconnect();
      (this._hookedLinks || []).forEach(l => {
        l.removeEventListener('load', this._onTweakChange);
        l.removeEventListener('error', this._onTweakChange);
      });
      this._hookedLinks = [];
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
      // Drop the text-wrap defaults when the last deck-stage leaves, so a
      // deleted deck's typography can't restyle whatever replaces it.
      // (#deck-stage-print-page keeps its existing keep-forever lifecycle.)
      if (!document.querySelector('deck-stage')) {
        const tw = document.getElementById('deck-stage-text-wrap');
        if (tw) tw.remove();
        const ps = document.getElementById('deck-stage-print-sizing');
        if (ps) ps.remove();
      }
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Pin the controls while the user is interacting with them —
      // hovering, or keyboard focus on a control. The hidden overlay is
      // pointer-events:none, so these only ever engage while it's already
      // visible. 'pointer' source: these are user-interaction paths, so
      // they may show/refresh the overlay even while presenting (see
      // _flashOverlay).
      overlay.addEventListener('mouseenter', () => {
        this._overlayHover = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('mouseleave', () => {
        const hadPin = this._overlayHover;
        this._overlayHover = false;
        // Resume the idle fade — never summon. Without the guard, a
        // mouseleave that fires because the overlay was force-hidden
        // (presenting entry flips it to pointer-events:none under the
        // cursor) would pop the controls right back up.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusin', e => {
        // Keyboard-origin focus only (:focus-visible): a mouse click also
        // focuses the clicked button, and pinning on that would hold the
        // controls open indefinitely after a single click — the hover pin
        // already covers the mouse case. Engines without :focus-visible
        // fall back to pinning on any focus (the safe direction).
        var kb = true;
        try {
          var t = e.target;
          kb = !(t && t.matches && !t.matches(':focus-visible'));
        } catch (err) {
          kb = true;
        }
        if (!kb) return;
        this._overlayFocus = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusout', e => {
        // Only unpin when focus truly left the toolbar — tabbing between
        // its buttons stays pinned. relatedTarget is null when focus
        // leaves the document entirely; treat that as leaving.
        if (e.relatedTarget && overlay.contains(e.relatedTarget)) return;
        const hadPin = this._overlayFocus;
        this._overlayFocus = false;
        // Resume-the-fade only (see mouseleave): a click-focused button
        // losing focus to a later stage click must not summon the
        // controls mid-presentation.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        const list = this._menuIndices;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(list && list.length ? list : [i]);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) {
          this._closeConfirm();
          this._focusCurrentThumb();
        }
      });
      confirm.querySelector('.cancel').addEventListener('click', () => {
        this._closeConfirm();
        this._focusCurrentThumb();
      });
      confirm.querySelector('.danger').addEventListener('click', () => {
        // Re-resolve at click time — the elements are the user's actual
        // selection; their indices may have shifted since confirm-open.
        const list = (this._confirmEls || []).map(el => this._slides.indexOf(el)).filter(i => i >= 0);
        this._closeConfirm();
        this._deleteSlides(list);
        this._focusCurrentThumb();
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Announces the deck's print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] content "default-landscape" — a
     *  deck prints one slide per page on the user's paper size, landscape.
     *  The export path probes the meta to decide what true paper size to
     *  inject at print time (the @page px rule above stays as the
     *  standalone-print fallback; an injected later rule overrides it).
     *  Never overrides an authored meta or another component's; removed
     *  when the last deck-stage leaves. data-omelette-injected keeps it
     *  out of serialized source. */
    _ensurePrintSizingMeta() {
      if (document.querySelector('meta[name="omelette-print-sizing"]')) return;
      const tag = document.createElement('meta');
      tag.id = 'deck-stage-print-sizing';
      tag.name = 'omelette-print-sizing';
      tag.content = 'default-landscape';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** Typographic defaults for slide text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins. Lives in the document,
     *  not the shadow root, for two reasons: document rules reach the
     *  slotted (light DOM) slides, and _snapshotAuthorCss copies document
     *  stylesheets into each thumbnail's shadow root, so the thumbs wrap
     *  the same way — a deck-stage-scoped selector would match nothing
     *  there. data-omelette-injected marks the tag for the host editor
     *  to strip at serialize, so it is never written back as authored
     *  source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('deck-stage-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'deck-stage-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
      // The deck just changed under any open rail surface — an open
      // confirm or menu is a question about the OLD deck (its labels and
      // counts may now lie), so close them rather than let a stale
      // answer fire. The element-held selection re-resolves, but the
      // user should re-read what they're deleting.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        this._closeConfirm();
        // The dialog held focus (danger button); hand it back to the rail.
        this._focusCurrentThumb(true);
      }
      if (this._menu && this._menu.hasAttribute('data-open')) this._closeMenu();
      // Editor-mode deletes rebuild the rail through here; a confirmed
      // delete that started from the keyboard still owes focus to the
      // (new) current thumb.
      if (this._pendingRailRefocus) this._focusCurrentThumb(true);
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      // Selection is element-keyed: drop entries whose slide is gone
      // (deleted, or replaced wholesale by a host re-render).
      if (this._selected && this._selected.size) {
        this._selected.forEach(s => {
          if (!this._slideSet.has(s)) this._selected.delete(s);
        });
      }
      if (this._selAnchor && !this._slideSet.has(this._selAnchor)) this._selAnchor = null;
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._syncCount();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      this._syncCount();
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay(source) {
      // Host posts __omelette_presenting while in fullscreen/tab
      // presentation mode. While presenting, the overlay is
      // pointer-summoned only: it appears on mouse movement and while the
      // user hovers/focuses the controls (source 'pointer'), but never
      // flashes on slide changes or nav-key presses (the default 'auto'
      // source) — a keyboard-driven advance must not blink chrome at the
      // audience. Outside presenting, both sources flash as before.
      if (!this._overlay) return;
      if (this._presenting && source !== 'pointer') return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        // Pinned by hover or focus on the controls — keep them up. The
        // matching mouseleave/focusout re-flashes, so the idle fade
        // resumes from that moment.
        if (this._overlayHover || this._overlayFocus) return;
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle. 'pointer'
      // source: mouse movement summons the controls even while presenting.
      this._flashOverlay('pointer');
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        // Unchanged value → idempotent re-delivery (the guest bundle
        // re-posts when a deck mounts mid-presentation, and host + bundle
        // can both deliver at entry). Skip the resets: re-running the
        // entry work on every delivery would dismiss the pointer-summoned
        // overlay under a hovering cursor and close menus on every slide
        // change. Mirrors the preview_mode branch's unchanged-value guard
        // below.
        if (d.__omelette_presenting !== !!this._presenting) {
          this._presenting = d.__omelette_presenting;
          // A presenting transition invalidates interaction pins: carried
          // across the flip, a stale pin would hold the first summoned
          // overlay open with no pointer anywhere near it. Hide on BOTH
          // transitions: entry cleans the audience's screen, and on exit a
          // pin-skipped hide timeout may have left data-visible set with
          // no timer armed — without this, the footer would linger in the
          // editor until the next mousemove. The next interaction
          // re-summons it either way.
          this._overlayHover = false;
          this._overlayFocus = false;
          if (this._overlay) {
            this._overlay.removeAttribute('data-visible');
            if (this._hideTimer) clearTimeout(this._hideTimer);
          }
          this._syncRailHidden();
          this._closeMenu();
          this._closeConfirm();
          this._fit();
          this._scaleThumbs();
        }
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
        // A refused op never re-renders, so slotchange won't restore the
        // keyboard flow's focus — do it here. (Applied ops refocus in
        // _onSlotChange, after the rail has been rebuilt.)
        if (d.applied === false && this._pendingRailRefocus) {
          this._focusCurrentThumb(true);
        }
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing. composedPath()[0], not e.target: a
      // window-level keydown retargets e.target to the shadow host, which
      // would miss an <input> or contenteditable inside a web component on
      // a slide (same reason _onTap uses composedPath).
      const t = e.composedPath ? e.composedPath()[0] : e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          this._focusCurrentThumb();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.key === 'Escape' && this._selected.size) {
        // Collapse the multi-selection back to the current slide (the
        // implicit selection), not to nothing.
        this._clearSelection();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'ArrowDown' && !e.defaultPrevented) {
        // ↓/↑ page slides like →/← (Keynote/PowerPoint parity). Window
        // level only: rail thumbs keep their own ↑/↓ walk (their handler
        // stops propagation before this one), and the typing guard above
        // already covers inputs and contenteditable slide content.
        // Deliberate tradeoff: like Space/PageDown before them, these are
        // scroll keys — slide content that wants keyboard scrolling claims
        // them with preventDefault, which this branch honors (checked here
        // and not for the long-standing keys above, so ←/→/Space behavior
        // is unchanged and ↑/↓ behave identically on frozen copies, whose
        // translator in the guest bundle applies the same guard).
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowUp' && !e.defaultPrevented) {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      // User-initiated navigation collapses a multi-selection down to
      // the (implicit) current slide, like Keynote's arrow keys. 'click'
      // handles its own selection; programmatic reasons leave it alone.
      if (reason === 'keyboard' || reason === 'tap') this._clearSelection();
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
      this._thumbs = next;
      this._renumberRail();
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          // The live-dragged thumb is positioned by the drag tracker; a
          // FLIP transform+transition here would clobber it mid-drag.
          if (thumb === this._dragThumb) return;
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', e => {
        const i = idx();
        const slide = this._slides[i];
        // WebKit doesn't focus a plain element on click — focus
        // explicitly so Delete/Backspace works right after selecting a
        // slide by mouse. preventScroll: _syncRail owns the rail's
        // scroll position.
        thumb.focus({
          preventScroll: true
        });
        if (e.shiftKey || e.metaKey || e.ctrlKey) {
          // Multi-select gestures adjust the selection without
          // navigating (Keynote/Figma convention).
          e.preventDefault();
          if (e.shiftKey) {
            // Range from the anchor (last plain/cmd-clicked slide;
            // falls back to the current slide) to here, replacing any
            // previous range.
            let a = this._selAnchor ? this._slides.indexOf(this._selAnchor) : -1;
            if (a < 0) {
              a = this._index;
              this._selAnchor = this._slides[a] || null;
            }
            this._selected.clear();
            for (let j = Math.min(a, i); j <= Math.max(a, i); j++) {
              this._selected.add(this._slides[j]);
            }
          } else if (slide) {
            // Toggle. An empty explicit selection implicitly holds the
            // current slide — materialize it first so cmd-clicking a
            // second slide selects both.
            if (!this._selected.size && i !== this._index && this._slides[this._index]) {
              this._selected.add(this._slides[this._index]);
            }
            if (this._selected.has(slide)) this._selected.delete(slide);else {
              this._selected.add(slide);
              this._selAnchor = slide;
            }
          }
          this._syncSelection();
          return;
        }
        this._clearSelection();
        this._selAnchor = slide || null;
        this._go(i, 'click');
      });
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        // Delete/Backspace with the rail focused deletes this thumb's
        // slide through the same confirm dialog as the menu item.
        // Listening on the thumb (never window-level) is what keeps
        // typing in the notes panel / slide inputs from ever landing
        // here; the target check is belt-and-braces for anything
        // focusable that ends up inside a thumb.
        if ((e.key === 'Delete' || e.key === 'Backspace') && !e.metaKey && !e.ctrlKey && !e.altKey) {
          const t = e.target;
          if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
          e.preventDefault();
          e.stopPropagation();
          // Same refusals as the menu item: never every slide, never
          // while a prior structural op is waiting on its ack. The
          // whole-deck refusal is announced (the menu greys its item
          // out; a silently dead key reads as breakage). The rail-lock
          // refusal stays silent: it lasts one ack round-trip and
          // matches the existing single-delete behavior.
          if (this._railLock) return;
          // Explicit selection wins; otherwise the focused thumb (which
          // plain click and ↑/↓ keep equal to the current slide).
          const sel = this._selected.size ? this._selectionIndices() : [idx()];
          if (sel.length >= this._slides.length) {
            this._showNotice(sel.length === 1 ? 'The last slide can’t be deleted.' : 'At least one slide has to stay — the whole deck can’t be deleted.');
            return;
          }
          this._openConfirm(sel);
          return;
        }
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        // v1: dragging moves ONE slide, so a multi-selection would lie
        // about what's about to move — collapse it. (Group drag would
        // instead keep it and emit a batched move.)
        this._clearSelection();
        this._dragFrom = idx();
        // Deferred to the next frame: the [data-dragging] rule sets
        // pointer-events:none on the drag SOURCE, and applying that
        // synchronously inside dragstart makes Chromium (and WebKit) cancel
        // the drag — dragstart then an immediate dragend, no dragover or
        // drop, so thumbnails could not be reordered by dragging at all.
        // One frame is invisible and lands before the first dragover needs
        // the source to be hit-test-transparent. Guarded twice so the
        // attribute can never strand on a thumb that is no longer being
        // dragged (pointer-events:none would leave it unclickable for the
        // session): the pending frame is cancelled in dragend
        // (_cancelDragAttr), and the callback itself re-checks that THIS
        // thumb is still the live drag source (a new drag on another thumb
        // re-points the drag state). Deliberately NOT cancelled in
        // _stopDragTrack — _startDragTrack calls it at the start of every
        // drag, which would kill the mark this dragstart just scheduled
        // (see _cancelDragAttr).
        this._dragAttrRaf = requestAnimationFrame(() => {
          this._dragAttrRaf = null;
          if (this._dragFrom != null && this._dragThumb === thumb) {
            thumb.setAttribute('data-dragging', '');
          }
        });
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
        // Constrain the drag visual to the rail's vertical axis. The
        // browser's default drag image is a free-floating snapshot that
        // follows the OS cursor in BOTH axes and the DnD API offers no way
        // to constrain it — so swap it for a transparent stand-in and move
        // the thumb itself along Y instead (_startDragTrack). The drop
        // logic below always read only clientY; this makes the visual
        // match it.
        try {
          e.dataTransfer.setDragImage(this._dragBlank(), 0, 0);
        } catch (err) {}
        this._startDragTrack(thumb, e.clientY);
      });
      thumb.addEventListener('dragend', () => {
        this._cancelDragAttr();
        thumb.removeAttribute('data-dragging');
        this._stopDragTrack();
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      // The clone participates in the document's flat tree, so the
      // templates' position-based CSS page counters (.slide
      // { counter-increment: page }) would count every materialized
      // thumb before the real slides — folios print offset by the
      // thumb count (slide 2 reading "7" on a five-slide deck).
      // Neutralize the counter on the clone and drop its folio pill:
      // a thumbnail's own page number is unreadable at thumb scale
      // anyway, and the real slides' numbers stay truthful.
      clone.style.counterIncrement = 'none';
      clone.querySelectorAll('.page-foot').forEach(pf => pf.remove());
      // Canvas bitmaps don't clone — swap each cloned canvas for an <img>
      // of the live pixels. Best-effort: tainted canvases throw (left
      // as-is); zero-size are skipped; WebGL without preserveDrawingBuffer
      // reads back blank and the thumb gets a blank img (same as before).
      const liveCanvases = entry.slide.querySelectorAll('canvas');
      const cloneCanvases = clone.querySelectorAll('canvas');
      cloneCanvases.forEach((cv, i) => {
        const live = liveCanvases[i];
        if (!live || !live.width || !live.height) return;
        try {
          const img = document.createElement('img');
          img.src = live.toDataURL();
          img.alt = '';
          img.style.cssText = cv.style.cssText;
          img.className = cv.className;
          img.width = live.width;
          img.height = live.height;
          // Author CSS that sized the <canvas> via tag selector won't match
          // the <img> — pin the live canvas's laid-out box on the snapshot.
          if (live.clientWidth) {
            img.style.width = live.clientWidth + 'px';
            img.style.height = live.clientHeight + 'px';
          }
          cv.replaceWith(img);
        } catch (e) {}
      });
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      // Parity with _inertify: transient top-layer UI never belongs in a
      // static thumb.
      clone.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes (_neuter) so a component-heavy deck doesn't run
      // N copies of each component's mount logic in the rail. Children
      // are preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content, and a shadow tree cloned along
      // via attachShadow({clonable:true}) (e.g. <image-slot>) moves onto
      // the box so the thumb shows the component's rendered content. The
      // querySelectorAll NodeList is static, so nested custom elements in
      // the moved subtree are still visited on later iterations.
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = this._neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
      // Strip ids only now: a defined custom element upgrades synchronously
      // during cloneNode and re-renders on attribute callbacks, so removing
      // 'id' any earlier resets components (e.g. <image-slot> falls back to
      // its author src). Post-neuter, only inert boxes and plain elements
      // remain, where the strip is just the usual duplicate-id hygiene.
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      // Clones are display-only: inert removes anything focusable inside
      // them from the tab order, so the rail's Delete/Backspace handler
      // can never see a (retargeted) key press from cloned content.
      host.inert = true;
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Replace a cloned custom element with an inert box (see the comment
     *  in _materialize). A shadow tree cloned along via {clonable:true}
     *  moves onto the box, so the thumb shows the component's real content
     *  with zero component logic; :host rules in the moved <style> match
     *  the box, and the preserved data-* attrs keep :host([data-…])
     *  selectors working. */
    _neuter(el) {
      // Adopt the shadow only when the cloned root carries renderable
      // content. A constructor-attach / connectedCallback-render component
      // clones into an empty (or style-only) slotless root — adopting that
      // would hide the light children the box is about to receive and drop
      // the placeholder chrome. Such components fall back to the plain box.
      let sr = el.shadowRoot;
      if (sr) {
        let renderable = false;
        for (let n = sr.firstElementChild; n; n = n.nextElementSibling) {
          const t = n.tagName;
          if (t !== 'STYLE' && t !== 'LINK') {
            renderable = true;
            break;
          }
        }
        if (!renderable) sr = null;
      }
      const box = document.createElement('div');
      box.style.cssText = (el.getAttribute('style') || '') + (sr ? '' : ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);');
      box.className = el.className;
      // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
      // descendant selectors still match the neutered root — but not
      // pointer-interaction transients (a mid-reframe/mid-drag re-clone
      // would render the interaction chrome statically in the thumb).
      for (const a of el.attributes) {
        const n = a.name;
        if (n === 'data-reframe' || n === 'data-panning' || n === 'data-over') continue;
        if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
          box.setAttribute(n, a.value);
        }
      }
      while (el.firstChild) box.appendChild(el.firstChild);
      if (sr) this._adoptShadow(box, sr);
      return box;
    }

    /** Move a cloned shadow tree onto a neutered thumbnail box: attach an
     *  open root on the box, carry adoptedStyleSheets, move the children,
     *  then make the content inert. */
    _adoptShadow(box, sr) {
      let root;
      try {
        root = box.attachShadow({
          mode: 'open'
        });
      } catch (e) {
        return;
      }
      // Engine-cloned shadow roots never carry adoptedStyleSheets, but a
      // defined component's clone is upgrade-rebuilt (constructor runs
      // during cloneNode), so sheets it adopts there are present and
      // shared by reference — carry them.
      if (sr.adoptedStyleSheets && sr.adoptedStyleSheets.length) {
        try {
          root.adoptedStyleSheets = Array.prototype.slice.call(sr.adoptedStyleSheets);
        } catch (e) {}
      }
      // Clone rather than move: moving preserves listeners an upgraded
      // clone's constructor attached inside its shadow; cloning sheds
      // them, keeping thumbs free of component logic categorically.
      for (let n = sr.firstChild; n; n = n.nextSibling) {
        root.appendChild(n.cloneNode(true));
      }
      this._inertify(root);
    }

    /** Strip anything executable from copied shadow content and apply the
     *  same custom-element/media/img policy as the light-DOM clone.
     *  (Canvases inside copied shadow content stay blank — there is no
     *  live↔clone pairing across shadow boundaries to snapshot from.) */
    _inertify(root) {
      root.querySelectorAll('script').forEach(s => s.remove());
      // Transient top-layer UI can never belong in a static thumb. (A
      // cloned [popover] is display:none anyway — open state doesn't
      // clone — this just makes it categorical.)
      root.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      // Same heavy-media policy as the light-DOM clone above.
      root.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      root.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      root.querySelectorAll('*').forEach(el => {
        for (let i = el.attributes.length - 1; i >= 0; i--) {
          if (/^on/i.test(el.attributes[i].name)) {
            el.removeAttribute(el.attributes[i].name);
          }
        }
      });
      root.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Nested custom elements inside copied shadow content would upgrade
      // on append — same treatment as the light DOM. querySelectorAll is
      // static, so boxes created mid-walk don't re-enter this loop.
      root.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }

    /** 1×1 transparent stand-in for setDragImage. Kept attached (offscreen
     *  in the shadow root) because some engines ignore a drag image that
     *  isn't in a rendered tree. Created lazily, reused for every drag. */
    _dragBlank() {
      if (!this._dragBlankEl) {
        const c = document.createElement('canvas');
        c.width = 1;
        c.height = 1;
        c.style.cssText = 'position:fixed;left:-9999px;top:0;width:1px;height:1px;';
        this._root.appendChild(c);
        this._dragBlankEl = c;
      }
      return this._dragBlankEl;
    }

    /** Vertical-only drag tracking: translate the dragged thumb along Y to
     *  follow the pointer, clamped to the rail, ignoring X entirely. A
     *  document-level capture listener is used because native dragover
     *  fires wherever the pointer is — so the thumb keeps tracking even
     *  while the pointer wanders over the stage — and it is removed the
     *  moment the drag ends. getBoundingClientRect already reflects the
     *  current transform, so the layout position is recovered by
     *  subtracting the translation applied so far (rail auto-scroll moves
     *  the layout position mid-drag; see the rail dragover handler). */
    _startDragTrack(thumb, startY) {
      // A lost dragend (the dragged thumb removed mid-drag by a remote
      // edit's re-render — browsers fire no dragend on a disconnected
      // source) would otherwise leave the previous listener installed
      // forever once this overwrite lands.
      this._stopDragTrack();
      this._dragThumb = thumb;
      // The FLIP reorder animation drives transform through a transition;
      // the live drag must not inherit one, or the thumb rubber-bands.
      // Killed BEFORE the grab-offset read: mid-FLIP the rect includes the
      // interpolated transform, which would bake a constant offset into
      // the whole drag.
      thumb.style.transition = 'none';
      this._dragGrab = startY - thumb.getBoundingClientRect().top;
      this._dragTy = 0;
      this._onDragTrack = e => {
        const t = this._dragThumb;
        if (!t) return;
        const rail = this._rail.getBoundingClientRect();
        const r = t.getBoundingClientRect();
        // A transformed ancestor (author wraps the deck in a CSS scale;
        // canvas-mode pan/zoom) scales viewport deltas: translateY(N)
        // moves the rect by s·N. Measure s from the thumb itself (rect is
        // scaled, offsetHeight is layout px) so the feedback loop stays
        // exact instead of oscillating at s ≥ 2. offsetHeight is 0 only
        // when unrendered — nothing to track then, treat as unscaled.
        const s = t.offsetHeight ? r.height / t.offsetHeight : 1;
        const layoutTop = r.top - s * this._dragTy;
        let want = e.clientY - this._dragGrab;
        want = Math.max(rail.top, Math.min(want, rail.bottom - r.height));
        this._dragTy = (want - layoutTop) / s;
        t.style.transform = 'translateY(' + this._dragTy + 'px)';
      };
      document.addEventListener('dragover', this._onDragTrack, true);
    }

    /** Cancel the thumb's deferred data-dragging mark if its frame has not
     *  fired yet — see the dragstart deferral. Called from dragend only:
     *  _stopDragTrack is the wrong home for it, because _startDragTrack
     *  defensively calls _stopDragTrack at the START of every drag (its
     *  lost-dragend reset), so a cancel there kills the mark the same
     *  dragstart just scheduled. The strand that matters — pointer-
     *  events:none left on a CONNECTED thumb that is no longer being
     *  dragged — is closed two ways: dragend cancels the pending frame
     *  here, and the frame callback re-checks that THIS thumb is still the
     *  live drag source (_dragFrom and _dragThumb, both cleared/re-pointed
     *  by dragend or by a new drag). The remaining lost-dragend case — the
     *  source slide removed mid-drag, so no dragend fires — ends with that
     *  thumb discarded by the rail reconcile (thumbs are keyed by slide
     *  element and a removed slide's thumb is not reused), so a mark landing
     *  on it is on a discarded node. The risk this defer adds over the old
     *  synchronous set is therefore the narrow rAF-after-dragend window,
     *  which the dragend cancel covers. */
    _cancelDragAttr() {
      if (this._dragAttrRaf != null) {
        cancelAnimationFrame(this._dragAttrRaf);
        this._dragAttrRaf = null;
      }
    }
    _stopDragTrack() {
      if (this._onDragTrack) {
        document.removeEventListener('dragover', this._onDragTrack, true);
        this._onDragTrack = null;
      }
      const t = this._dragThumb;
      if (t) {
        t.style.transform = '';
        t.style.transition = '';
      }
      this._dragThumb = null;
      this._dragTy = 0;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      // Right-clicking a thumb OUTSIDE the selection collapses the
      // selection to that thumb (platform convention) — the menu then
      // always targets exactly what's highlighted.
      if (this._selected.size && slide && !this._selected.has(slide)) {
        this._selected.clear();
        this._selected.add(slide);
        this._selAnchor = slide;
        this._syncSelection();
      }
      const sel = this._selectionIndices();
      const bulk = sel.length > 1;
      this._menuIndices = bulk ? sel : [i];
      // Bulk mode offers only the one batched op that exists (delete);
      // the single-slide items address one index and stay hidden.
      this._menu.querySelectorAll('[data-act="skip"], [data-act="up"], [data-act="down"], [data-act="duplicate"], hr').forEach(el => {
        el.style.display = bulk ? 'none' : '';
      });
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      const del = this._menu.querySelector('[data-act="delete"]');
      del.textContent = bulk ? 'Delete ' + sel.length + ' slides' : 'Delete slide';
      del.disabled = bulk ? sel.length >= this._slides.length : this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
      this._menuIndices = null;
    }
    _openConfirm(sel) {
      if (!this._confirm) return;
      const list = Array.isArray(sel) ? sel : [sel];
      // Hold the slide ELEMENTS: the deck can re-render while the dialog
      // is open (collaborator/agent edit), and a frozen index list would
      // then address the wrong slides — a same-count reorder even passes
      // the host's witness guard. Elements re-resolve at danger-click.
      this._confirmEls = list.map(i => this._slides[i]).filter(Boolean);
      // Title uses the rail's skip-aware label, so the confirm names the
      // number the user right-clicked (a raw index would disagree with the
      // rail whenever a skipped slide precedes the target).
      const lbl = list.length === 1 ? this._slideLabel(list[0]) : '';
      this._confirm.querySelector('.title').textContent = list.length === 1 ? lbl ? 'Delete slide ' + lbl + '?' : 'Delete skipped slide?' : 'Delete ' + list.length + ' slides?';
      this._confirm.querySelector('.msg').textContent = list.length === 1 ? 'This slide will be removed from the deck.' : 'These slides will be removed from the deck.';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmEls = null;
    }

    /** Return focus to the current slide's thumb so the keyboard flow
     *  (Delete → Enter → Delete …) survives the confirm dialog closing.
     *  Without 'force', skipped while a structural op is in flight
     *  (_railLock): _index is then an optimistic post-op value that
     *  doesn't address the pre-op thumb list — _pendingRailRefocus stays
     *  armed and the ack/slotchange paths call back with force once the
     *  rail reflects the op. Skipped (and disarmed) while the rail is
     *  inert (hidden / presenting). */
    _focusCurrentThumb(force) {
      if (!force && this._railLock) return;
      this._pendingRailRefocus = false;
      // Never yank focus from content the user reached meanwhile (e.g.
      // an input inside a slide during the ack round-trip) — only
      // reclaim it from the rail's own surfaces, or from nowhere.
      const ae = this._root && this._root.activeElement;
      const ours = !ae || this._rail && this._rail.contains(ae) || this._confirm && this._confirm.contains(ae) || this._menu && this._menu.contains(ae);
      const lightAe = document.activeElement;
      const lightOk = !lightAe || lightAe === document.body || lightAe === this;
      if (!ours || !lightOk) return;
      const cur = this._thumbs && this._thumbs[this._index];
      if (cur && this._rail && !this._rail.inert) cur.thumb.focus({
        preventScroll: true
      });
    }

    /** Selection as sorted slide indices. An empty explicit selection
     *  means the current slide (the rail's implicit selection). */
    _selectionIndices() {
      const out = [];
      this._slides.forEach((s, i) => {
        if (this._selected.has(s)) out.push(i);
      });
      if (!out.length && this._slides[this._index]) out.push(this._index);
      return out;
    }
    _clearSelection() {
      // Re-anchor before the early return: a plain click followed by
      // arrow/tap navigation leaves _selected empty but the anchor
      // pointing at the old slide, and a later shift-click would range
      // from there instead of the current slide.
      this._selAnchor = null;
      if (!this._selected.size) return;
      this._selected.clear();
      this._syncSelection();
    }
    _syncSelection() {
      (this._thumbs || []).forEach(t => {
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    /** True when the page's DC runtime reports a live template stream for
     *  any component here (newer support.js bundles only — older bundles
     *  lack the signal and the HOST-side gate covers those decks). Rail
     *  mutations are refused for the duration: a mid-stream op addresses
     *  slide indices the stream is rewriting underneath the click. */
    _streamActive() {
      try {
        return !!window.__dcUpdate && typeof window.__dcStreaming === 'function' && window.__dcStreaming();
      } catch (e) {
        return false;
      }
    }

    /** Transient in-stage notice for a refused mid-stream rail op. */
    _showStreamNotice() {
      this._showNotice('Claude is still updating this deck — try again when it finishes.');
    }

    /** Transient bottom-center toast for a refused rail gesture. */
    _showNotice(text) {
      if (!this._root) return;
      let n = this._streamNotice;
      if (!n) {
        n = document.createElement('div');
        n.className = 'export-hidden';
        n.setAttribute('data-omelette-chrome', '');
        n.setAttribute('role', 'status');
        n.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);' + 'background:rgba(22,22,22,.94);color:#fff;' + 'font:500 13px/1.4 system-ui,sans-serif;padding:8px 14px;' + 'border-radius:8px;z-index:2147483646;pointer-events:none;' + 'opacity:0;transition:opacity .15s ease';
        this._root.append(n);
        this._streamNotice = n;
      }
      n.textContent = text;
      n.style.opacity = '1';
      if (this._streamNoticeTimer) clearTimeout(this._streamNoticeTimer);
      this._streamNoticeTimer = setTimeout(() => {
        n.style.opacity = '0';
      }, 2600);
    }
    _emitDcOp(op, slide, lock, newIndex) {
      // Mid-stream guard: refuse the gesture outright — no lock, no
      // optimistic index change, no emit, no self-mutation (returning
      // true short-circuits every caller). The host applies the same
      // gate for decks whose committed support.js predates the signal.
      if (this._streamActive()) {
        this._showStreamNotice();
        return true;
      }
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }

    /** Delete a set of slides (pre-op indices). One slide delegates to
     *  _deleteSlide — the plain 'remove' op — so single deletes keep
     *  working against hosts that predate 'removeMany'. A bulk delete is
     *  ONE op: one host write, one undo snapshot, and indices that all
     *  address the same pre-op deck (N acked single ops would each need
     *  a fresh witness). */
    _deleteSlides(list) {
      if (this._railLock || !list) return;
      const indices = [...new Set(list)].filter(i => this._slides[i]).sort((a, b) => a - b);
      if (!indices.length || indices.length >= this._slides.length) return;
      if (indices.length === 1) {
        this._deleteSlide(indices[0]);
        return;
      }
      // Mirrors _duplicateSlide: check the stream gate before doing any
      // work (_emitDcOp re-checks).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const els = indices.map(i => this._slides[i]);
      const del = new Set(indices);
      const cur = this._index;
      // New current index in post-op space: shift the kept slide left by
      // the deletions below it; if the current slide itself is deleted,
      // land on the nearest survivor (after, else before).
      const below = n => indices.reduce((k, x) => k + (x < n ? 1 : 0), 0);
      let ni;
      if (!del.has(cur)) {
        ni = cur - below(cur);
      } else {
        let s = -1;
        for (let j = cur + 1; j < this._slides.length; j++) {
          if (!del.has(j)) {
            s = j;
            break;
          }
        }
        if (s === -1) {
          for (let j = cur - 1; j >= 0; j--) {
            if (!del.has(j)) {
              s = j;
              break;
            }
          }
        }
        ni = s < 0 ? 0 : s - below(s);
      }
      // Emit-path deletes can't refocus until the host re-renders; arm
      // the flag at emit time (never on a refused/no-op path) so
      // ack/slotchange can finish the keyboard flow's focus hand-back.
      // The local path clears it via the caller's _focusCurrentThumb().
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'removeMany',
        indices
      }, els[0], true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      els.forEach(el => el.remove());
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      // Mint ids + copy component state BEFORE emitting, so the op can
      // carry the id map — but never mint for an op the stream gate is
      // about to refuse (_emitDcOp re-checks; this avoids orphaned keys).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      const ids = this._remintDuplicateIds(copy);
      const op = {
        op: 'duplicate'
      };
      if (ids) op.ids = ids;
      if (this._emitDcOp(op, slide, true, i + 1)) return;
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }

    /** Duplicate id policy. Plain ids are stripped — two live slides must
     *  not share one id. But a component that KEYS persistent state by id
     *  (image-slot's sidecar photo) would silently lose that state with
     *  its id. Such a component opts out of the strip by exposing a
     *  static cloneSlot(fromId, isFree) that copies its stored state
     *  under a fresh id of its choosing and returns that id. The old→new
     *  map is returned (or null) and rides the dc-op so the host writes
     *  the SAME ids into source — without that, the copy's state would
     *  revert on reload (docs/dc-ops.md). */
    _remintDuplicateIds(copy) {
      const ids = {};
      let found = false;
      const used = new Set();
      const idOk = /^[A-Za-z][\w-]{0,63}$/;
      const isFree = id => idOk.test(id) && !used.has(id) && !document.getElementById(id);
      copy.querySelectorAll('[id]').forEach(el => {
        const tag = el.tagName.toLowerCase();
        const cls = tag.indexOf('-') >= 0 && customElements.get(tag);
        let next = null;
        if (el.id && cls && typeof cls.cloneSlot === 'function') {
          try {
            next = cls.cloneSlot(el.id, isFree);
          } catch (e) {}
        }
        // Re-checked here so a misbehaving static can't smuggle a dupe
        // or an unsafe value into the document / the emitted op.
        if (typeof next === 'string' && isFree(next)) {
          ids[el.id] = next;
          used.add(next);
          el.id = next;
          found = true;
        } else {
          el.removeAttribute('id');
        }
      });
      return found ? ids : null;
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }

    /** Rail numbering, skip-aware: a skipped slide shows no number and the
     *  rest stay contiguous (1..visible), so the labels match the positions
     *  the overlay counter reports. Cheap (text writes are diffed), safe to
     *  call after any reconcile or skip toggle. */
    _renumberRail() {
      let v = 0;
      (this._thumbs || []).forEach(t => {
        const label = t.slide.hasAttribute('data-deck-skip') ? '' : String(++v);
        if (t.num.textContent !== label) t.num.textContent = label;
      });
    }

    /** Skip-aware label for slide i — the same numbering _renumberRail
     *  paints: '' for a skipped slide, else its 1-based position among
     *  non-skipped slides. Display surfaces (e.g. the delete confirm)
     *  use this so they never name a number the rail doesn't show. */
    _slideLabel(i) {
      const s = this._slides[i];
      if (!s || s.hasAttribute('data-deck-skip')) return '';
      let v = 0;
      for (let k = 0; k <= i; k++) {
        if (!this._slides[k].hasAttribute('data-deck-skip')) v++;
      }
      return String(v);
    }

    /** Overlay counter, skip-aware: position among non-skipped slides over
     *  the non-skipped total. A skipped CURRENT slide (reachable by rail
     *  click or deep link, never by _advance) shows '–' — its number is
     *  gone from the rail, so any digit here would lie. */
    _syncCount() {
      if (!this._countEl || !this._totalEl) return;
      // Empty deck: keep the overlay's initial "1 / 1" (it has nothing to
      // count and isn't visible without slides) — the guest fallback for
      // frozen copies leaves empty decks alone for the same rendering.
      if (!this._slides.length) {
        this._countEl.textContent = '1';
        this._totalEl.textContent = '1';
        return;
      }
      let pos = 0,
        total = 0;
      this._slides.forEach((s, i) => {
        if (!s.hasAttribute('data-deck-skip')) {
          total++;
          if (i <= this._index) pos = total;
        }
      });
      const cur = this._slides[this._index];
      const curSkipped = !cur || cur.hasAttribute('data-deck-skip');
      this._countEl.textContent = curSkipped ? '–' : String(pos);
      this._totalEl.textContent = String(total);
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck-saved-2026-09-25/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck-saved-2026-09-25/ix-core.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Interactive deck core: slide context, presenter build steps, parallax, lap HUD. */
const IXDS = window.WilliamsRacingAIExperienceDesignSystem_1388e9;
const IXA = p => (window.WR_ASSETS || '../../assets/') + p;
const IXCtx = React.createContext({
  active: false,
  index: 0,
  prev: 0,
  total: 12,
  step: 0
});
window.__wrIX = window.__wrIX || {
  current: 0,
  prev: 0,
  handlers: {}
};
const IX = window.__wrIX;
if (!IX.bound) {
  IX.bound = true;
  const deck = () => document.querySelector('deck-stage');
  const syncFromDom = () => {
    const secs = [...document.querySelectorAll('deck-stage > section')];
    const i = secs.findIndex(s => s.hasAttribute('data-deck-active'));
    return i < 0 ? 0 : i;
  };
  document.addEventListener('slidechange', e => {
    IX.prev = e.detail.previousIndex ?? IX.current;
    IX.current = e.detail.index;
    Object.values(IX.handlers).forEach(h => h.onChange && h.onChange(IX.current, IX.prev));
  });
  IX.initial = syncFromDom;
  window.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    const h = IX.handlers[IX.current];
    if (!h) return;
    const fwd = ['ArrowRight', 'PageDown', ' ', 'Spacebar', 'ArrowDown'].includes(e.key);
    const back = ['ArrowLeft', 'PageUp', 'ArrowUp'].includes(e.key);
    if (fwd && h.next && h.next() || back && h.back && h.back()) {
      e.preventDefault();
      e.stopImmediatePropagation();
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
    const to = el.style.width || Math.max(0, idx) / laps * 100 + '%';
    if (!from) from = Math.max(0, pv) / laps * 100 + '%';
    if (pv === idx && !last) return;
    IX.bar = {
      el,
      anim: el.animate([{
        width: from
      }, {
        width: to
      }], {
        duration: 1400,
        easing: 'cubic-bezier(.22,.8,.2,1)',
        fill: 'backwards'
      })
    };
  };
  document.addEventListener('slidechange', e => runBar(e.detail.index, e.detail.previousIndex ?? e.detail.index));
}

/* Wraps one slide: tracks active state, build steps, and pointer parallax (--mx/--my). */
function IXSlide({
  index,
  total = 12,
  steps = 0,
  onStep,
  children,
  style,
  className = '',
  hud = true,
  field = true,
  hudFinal = false
}) {
  const [active, setActive] = React.useState(false);
  const [prev, setPrev] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const [nonce, setNonce] = React.useState(0);
  const ref = React.useRef(null);
  const stepRef = React.useRef(0);
  stepRef.current = step;
  React.useEffect(() => {
    const apply = (cur, pv) => {
      const isA = cur === index;
      setActive(isA);
      setPrev(pv);
      if (isA) {
        setStep(pv > index ? steps : 0);
        setNonce(n => n + 1);
      }
    };
    IX.handlers[index] = {
      onChange: apply,
      next: () => {
        if (stepRef.current < steps) {
          setStep(s => s + 1);
          return true;
        }
        return false;
      },
      back: () => {
        if (stepRef.current > 0) {
          setStep(s => s - 1);
          return true;
        }
        return false;
      },
      finish: () => setStep(steps)
    };
    const init = IX.initial ? IX.initial() : 0;
    IX.current = init;
    apply(init, init);
    return () => {
      delete IX.handlers[index];
    };
  }, [index, steps]);
  React.useEffect(() => {
    onStep && onStep(step);
  }, [step]);
  const onMove = e => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 2 - 1).toFixed(3));
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 2 - 1).toFixed(3));
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) {
      el.style.setProperty('--mx', 0);
      el.style.setProperty('--my', 0);
    }
  };
  return /*#__PURE__*/React.createElement(IXCtx.Provider, {
    value: {
      active,
      index,
      prev,
      total,
      step,
      setStep,
      nonce
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `ix-slide ${className}`,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: {
      position: 'relative',
      width: 1920,
      height: 1080,
      overflow: 'hidden',
      background: 'var(--wr-night)',
      color: '#fff',
      '--mx': 0,
      '--my': 0,
      ...style
    }
  }, field && /*#__PURE__*/React.createElement(CrossField, null), children, hud && /*#__PURE__*/React.createElement(LapHUD, {
    final: hudFinal
  })));
}

/* Decorative + / × lattice (Williams brand pattern): four arms with an open centre. Hover rotates 45°, un-hover returns. */
const CROSS_ARMS = 'M17 0V12.6M17 21.4V34M0 17H12.6M21.4 17H34';
function CrossField({
  gap = 240,
  size = 34
}) {
  const [rot, setRot] = React.useState({});
  const marks = [];
  for (let y = gap / 2, r = 0; y < 1080; y += gap / 2, r++) {
    for (let x = r % 2 ? gap : gap / 2; x < 1920; x += gap) marks.push({
      x,
      y,
      plus: r % 2 === 1
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, marks.map((m, i) => {
    const turned = !!rot[i];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "ix-cross",
      onMouseEnter: () => setRot(s => ({
        ...s,
        [i]: true
      })),
      onMouseLeave: () => setRot(s => ({
        ...s,
        [i]: false
      })),
      style: {
        position: 'absolute',
        left: m.x - size,
        top: m.y - size,
        width: size * 2,
        height: size * 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 34 34",
      style: {
        display: 'block',
        transform: `rotate(${(m.plus ? 0 : 45) + (turned ? 45 : 0)}deg)`,
        transition: 'transform .7s cubic-bezier(.2,.8,.2,1)'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: CROSS_ARMS,
      stroke: "currentColor",
      strokeWidth: "1.1",
      strokeLinecap: "round",
      fill: "none"
    })));
  }));
}

/* Parallax layer: depth in px at the viewport edge. Negative = moves against pointer. */
function PX({
  depth = 12,
  l = 0,
  t = 0,
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ix-px",
    style: {
      position: 'absolute',
      left: l,
      top: t,
      '--depth': depth + 'px',
      ...style
    }
  }, children);
}

/* Build-in wrapper — animation plays whenever the slide becomes active (keyed by nonce). */
function B({
  fx = 'up',
  d = 0,
  show = true,
  style,
  className = '',
  children,
  ...rest
}) {
  const {
    nonce
  } = React.useContext(IXCtx);
  return /*#__PURE__*/React.createElement("div", _extends({
    key: nonce,
    className: `ix ix-${fx} ${show ? '' : 'ix-hidden'} ${className}`,
    style: {
      '--d': d + 'ms',
      ...style
    }
  }, rest), children);
}

/* Lap-style progress: sector track across the bottom edge + LAP nn / nn. */
function LapHUD({
  final = false
}) {
  const {
    active,
    index,
    prev,
    total
  } = React.useContext(IXCtx);
  const barRef = React.useRef(null);
  const OFF = 1,
    laps = total - OFF;
  const pct = i => Math.max(0, (i - OFF + 1) / laps) * 100;
  const n = v => String(v).padStart(2, '0');
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "ix-hud",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 64,
      visibility: 'visible',
      pointerEvents: 'none',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: final ? 'ix-hud-out' : '',
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: 420,
      height: 150,
      background: 'radial-gradient(100% 100% at 100% 100%, rgba(10,12,20,0.85) 0%, rgba(10,12,20,0.55) 45%, rgba(10,12,20,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 48,
      bottom: 22,
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      fontFamily: '"Space Grotesk", sans-serif',
      color: '#fff',
      textShadow: '0 1px 12px rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, "LAP"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: '0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, n(index + 1 - OFF)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.7)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "/ ", n(laps)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 5,
      background: 'rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: barRef,
    className: final ? 'ix-lapbar is-final' : 'ix-lapbar',
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: `${pct(index)}%`,
      background: 'linear-gradient(90deg, rgba(0,66,255,0) 0%, #0042FF 35%, #0068DF 70%, rgb(31,199,255) 100%)',
      boxShadow: '0 0 18px rgba(31,199,255,0.7), 0 0 6px rgba(0,104,223,1)',
      borderRadius: '0 5px 5px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-lapwhite",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      opacity: 0,
      background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, #fff 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ix-carglow",
    style: {
      position: 'absolute',
      right: -2,
      bottom: 9,
      width: 62,
      height: 13,
      filter: 'drop-shadow(0 0 4px rgba(31,199,255,0.95)) drop-shadow(0 0 10px rgba(0,104,223,0.8))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-car",
    style: {
      width: '100%',
      height: '100%',
      background: 'rgb(31,199,255)',
      WebkitMask: `url(assets/f1-car.png) center / contain no-repeat`,
      mask: `url(assets/f1-car.png) center / contain no-repeat`
    }
  })))));
}

/* Pull-out drawer: an F1-style tab peeks from the frame edge (right or left); click slides a glass card out. */
function IXDrawer({
  side = 'right',
  top = 120,
  width = 580,
  eyebrow,
  meta,
  title,
  chips = [],
  wave = false,
  aside,
  locked = false,
  content,
  middle,
  bottom,
  handleLift = 84,
  children
}) {
  const {
    active
  } = React.useContext(IXCtx);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!active) setOpen(false);
  }, [active]);
  const W = width + 40,
    R = side === 'right';
  if (locked) return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [side]: 0,
      top,
      zIndex: 30,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": eyebrow,
    "aria-disabled": "true",
    onClick: e => e.stopPropagation(),
    className: `ix-handle ${R ? 'is-r' : 'is-l'} is-peek`,
    style: {
      marginTop: 36,
      height: 136,
      border: 0,
      padding: 0,
      cursor: 'pointer',
      borderRadius: R ? '14px 0 0 14px' : '0 14px 14px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "22",
    viewBox: "0 0 14 22",
    style: {
      display: 'block',
      transform: `rotate(${R ? 0 : 180}deg)`
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 3 L3 11 L10 19",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ix-hstripe",
    style: {
      '--i': i
    }
  })))));
  const edge = R ? '24px 0 0 24px' : '0 24px 24px 0';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    onClick: e => {
      e.stopPropagation();
      setOpen(false);
    },
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 18,
      background: 'rgba(6,8,14,0.46)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity .7s cubic-bezier(.3,.7,.3,1)'
    }
  }), aside && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: open ? 'is-open' : '',
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 25,
      pointerEvents: 'none',
      opacity: open ? 1 : 0,
      transform: open ? 'none' : 'translateY(10px)',
      transition: open ? 'opacity 1s ease .3s, transform 1.1s cubic-bezier(.2,.8,.2,1) .3s' : 'opacity .5s ease, transform .5s ease'
    }
  }, aside), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      [side]: 0,
      ...(bottom != null ? {
        bottom
      } : {
        top: middle ?? top
      }),
      zIndex: 30,
      display: 'flex',
      flexDirection: R ? 'row' : 'row-reverse',
      alignItems: bottom != null ? 'flex-end' : middle != null ? 'center' : 'flex-start',
      transform: `translateX(${open ? 0 : R ? W : -W}px)${middle != null ? ' translateY(-50%)' : ''}`,
      transition: 'transform .8s cubic-bezier(.2,.85,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": open,
    "aria-label": eyebrow,
    onClick: () => setOpen(o => !o),
    className: `ix-handle ${R ? 'is-r' : 'is-l'} ${open ? '' : 'is-peek'}`,
    style: {
      marginTop: middle != null || bottom != null ? 0 : 36,
      marginBottom: bottom != null ? handleLift : 0,
      height: 136,
      border: 0,
      padding: 0,
      cursor: 'pointer',
      borderRadius: R ? '14px 0 0 14px' : '0 14px 14px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "22",
    viewBox: "0 0 14 22",
    style: {
      display: 'block',
      transform: `rotate(${(open ? 180 : 0) + (R ? 0 : 180)}deg)`,
      transition: 'transform .6s cubic-bezier(.2,.85,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 3 L3 11 L10 19",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ix-hstripe",
    style: {
      '--i': i
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      boxSizing: 'border-box',
      padding: '54px 60px 46px',
      borderRadius: edge,
      background: 'rgba(10,12,20,0.74)',
      backdropFilter: 'blur(24px) saturate(1.2)',
      WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
      boxShadow: `inset ${R ? 1 : -1}px 0 0 rgba(255,255,255,0.18), inset 0 1px 0 rgba(255,255,255,0.1), ${R ? -24 : 24}px 30px 80px rgba(0,0,0,0.5)`,
      fontFamily: 'var(--font-body)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, meta)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '26px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 46,
      lineHeight: '52px',
      letterSpacing: '-0.015em',
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 120,
      height: 1.5,
      margin: '26px 0 26px',
      background: 'var(--wr-rule-gradient)'
    }
  }), content || /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 300,
      lineHeight: '37px',
      color: 'rgba(255,255,255,0.86)',
      textWrap: 'pretty'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 36,
      paddingTop: 26,
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, chips.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: wave ? '10px 18px 10px 14px' : '10px 18px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.07)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.14)'
    }
  }, wave && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      height: 20
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: open ? 'ix-bar is-on' : 'ix-bar',
    style: {
      '--i': i,
      width: 2.5,
      background: 'rgb(31,199,255)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      whiteSpace: 'nowrap'
    }
  }, n))), /*#__PURE__*/React.createElement("img", {
    src: IXA('logo/williams-wordmark-white.png'),
    alt: "Williams Racing",
    style: {
      marginLeft: 'auto',
      height: 18,
      width: 'auto',
      opacity: 0.34,
      display: 'block'
    }
  })))));
}
function IXLogo({
  l,
  t,
  d = 0
}) {
  return /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: d,
    style: {
      position: 'absolute',
      left: l,
      top: t + 3
    }
  }, /*#__PURE__*/React.createElement(IXDS.WilliamsLogo, {
    src: IXA('logo/williams-wordmark-white.png'),
    width: 210
  }));
}
Object.assign(window, {
  IXDrawer,
  CrossField,
  IXCtx,
  IXSlide,
  PX,
  B,
  LapHUD,
  IXLogo,
  IXA,
  IXDS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck-saved-2026-09-25/ix-core.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck-saved-2026-09-25/ix-slides-a.jsx
try { (() => {
/* Interactive slides — Cover (Frame 2), Overview (Frame 3), Journey (Frame 16). Copy verbatim from Figma. */

function IXStreaks({
  d = 200
}) {
  return /*#__PURE__*/React.createElement(PX, {
    depth: -28,
    l: 0,
    t: 0,
    style: {
      width: 1920,
      height: 1080,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "streak",
    d: d,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 1920,
      height: 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 1536,
      height: 1024,
      transform: 'matrix(-0.997,0.079,-0.079,-0.997,2491.426,1609.770)',
      transformOrigin: '0 0',
      background: `url(${IXA('brand/speed-streaks.png')}) center / cover no-repeat`
    }
  })));
}
function IXWMark({
  d = 0
}) {
  return /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: d,
    style: {
      position: 'absolute',
      left: 24,
      top: 188.5,
      width: 1235,
      height: 703.6,
      background: `url(${IXA('brand/w-mark-dark.png')}) center / contain no-repeat`,
      pointerEvents: 'none'
    }
  });
}
function IXCoverSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index,
    style: {
      background: 'var(--wr-night-2)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "push",
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${IXA('photos/pitlane-hey-williams.png')}) center / cover no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: 620,
      height: 260,
      background: 'radial-gradient(100% 100% at 100% 0%, rgba(10,12,20,0.8) 0%, rgba(10,12,20,0.5) 45%, rgba(10,12,20,0) 100%)',
      pointerEvents: 'none',
      zIndex: 19
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 1100,
      height: 420,
      background: 'radial-gradient(100% 100% at 0% 100%, rgba(10,12,20,0.78) 0%, rgba(10,12,20,0.4) 45%, rgba(10,12,20,0) 100%)',
      pointerEvents: 'none',
      zIndex: 19
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "left",
    d: 1300,
    style: {
      position: 'absolute',
      left: 164,
      bottom: 214,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("svg", {
    key: i,
    className: "ix-chev",
    width: "16",
    height: "24",
    viewBox: "0 0 16 24",
    style: {
      '--i': i,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3 L12 12 L3 21",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: '0.3em',
      color: '#fff',
      textShadow: '0 2px 16px rgba(0,0,0,0.5)'
    }
  }, "WELCOME TO THE PADDOCK")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      bottom: 112,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(VoicePlayer, {
    className: "ix-glass-in"
  })), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "right",
    eyebrow: "VOICE CLONING",
    meta: "Powered by ElevenLabs",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Hear exactly what", /*#__PURE__*/React.createElement("br", null), "the drivers hear."),
    chips: ['James Urwin', 'Gaëtan Jago'],
    wave: true,
    aside: /*#__PURE__*/React.createElement(SilverstoneMap, null)
  }, "With ElevenLabs voice synthesis and advanced audio processing, we can create fully personalised digital replicas of James Urwin\u2019s and Ga\xEBtan Jago\u2019s voices. Race-engineer-grade audio goes straight into each guest\u2019s ear, so the pit lane sounds as close as it gets to what drivers hear mid-race."));
}

/* Silverstone outline: centripetal Catmull-Rom through traced anchors (no overshoot), drawn in race direction from the start line. Telemetry: turns, sectors, DRS, speed zones. */
const SILVERSTONE_D = 'M516.6 19.1C562.4 50.7 855.1 276.3 900.6 311.9C910.5 319.7 913.4 321.3 918.6 326.4C923.2 330.9 927.2 335.6 930.4 340.6C933.4 345.3 935.6 350.8 937.4 355.6C938.9 359.8 939.8 362.7 940.7 367.6C942.1 375.3 943.3 386.4 943.4 397.6C943.6 411.7 941.9 426.9 940.3 445.6C938 472.1 929.9 517.9 929.6 541.6C929.4 555.5 930.5 564.2 932.3 574.6C933.9 584.1 936.3 593 939.4 601.6C942.4 610 946.8 618.6 950.6 625.6C953.7 631.3 954.8 633.2 960.1 640.6C977.4 664.9 1064.4 764.3 1080.3 790.6C1085.4 799 1086.9 803.5 1088.1 808.6C1088.9 812 1089.2 814.3 1088.7 817.6C1088.1 821.9 1085.8 828.4 1083.3 832.1C1081.2 835.1 1078.9 836.8 1075.6 838.9C1071 841.8 1065.9 843.6 1057.6 846.6C1040 852.9 986.9 865.1 973.6 871.1C969.1 873.1 967.6 873.8 965.1 876.4C962 879.6 958.5 885.1 957.3 889.6C956.3 893.5 956.8 898 957.6 901.6C958.3 904.9 960 908.1 961.6 910.6C962.9 912.8 963.9 914.1 966 916.1C969.3 919.2 974.2 922.8 980.6 926.3C990.8 931.9 1008.2 939 1022.6 943.6C1037.2 948.2 1053.1 951.6 1067.6 953.9C1081 956.1 1093.9 957.3 1106.6 957.6C1118.8 957.9 1133.9 957.3 1142.6 955.7C1147.7 954.8 1150.7 953.8 1154.6 951.9C1158.8 949.9 1162.6 947 1166.6 943.7C1171.4 939.8 1173.3 937.6 1181 929.6C1217.8 891.5 1409 679.8 1490 590.6C1542.7 532.5 1599 471.9 1620.3 446.6C1627.6 437.9 1630.7 434.1 1634.4 428.6C1637.2 424.3 1639.2 420.7 1641 416.6C1642.8 412.7 1644.2 409.5 1645.3 404.6C1646.9 397.5 1648 385.3 1648 377.6C1648 371.9 1647.3 367.3 1646.4 362.6C1645.6 358.3 1644.6 354.3 1643.3 350.6C1642.1 347.3 1640.8 344.4 1639 341.6C1637.2 338.7 1634.9 335.7 1632.3 333.4C1629.7 331.1 1626.6 329.1 1623.6 327.7C1620.7 326.4 1619.1 326 1614.6 325C1602.1 322.4 1558.6 318.7 1542.6 315.9C1534.6 314.5 1530.5 313.9 1524.6 311.9C1518.5 309.8 1511.3 306.7 1506.6 303.6C1503.1 301.3 1500.9 299 1498.4 296.3C1495.9 293.6 1493.7 290.8 1491.7 287.6C1489.5 284 1487.3 279.4 1485.9 275.6C1484.8 272.4 1484.1 270.3 1483.7 266.6C1483.1 261.1 1483.1 251.1 1483.9 245.6C1484.4 241.9 1485.2 239.8 1486.4 236.6C1487.9 232.8 1490.1 228.2 1492.4 224.6C1494.4 221.4 1496.6 218.6 1499.1 216C1501.6 213.4 1504.4 211.1 1507.6 208.9C1511.2 206.5 1515.3 204 1519.6 202.4C1524.2 200.7 1529.6 199.5 1534.6 199.1C1539.6 198.7 1544.6 199 1549.6 199.7C1554.6 200.4 1558.1 201 1564.6 203.4C1578.6 208.5 1607.4 223.6 1627.6 234.9C1647.4 246 1669.8 260.3 1684.6 270.6C1694.5 277.5 1701.3 282.9 1708.6 289C1715.2 294.5 1719.3 298.3 1726.6 305.6C1739.2 318.3 1763.7 343.8 1776.1 359.6C1784.8 370.7 1790.7 379.6 1796.3 389.6C1801.4 398.6 1805.7 408.8 1808.7 416.6C1810.9 422.2 1812.1 426.3 1813.3 431.6C1814.6 437.3 1815.1 440.8 1816.3 449.6C1819.7 474 1827.7 543.8 1832.3 587.6C1836.5 627.4 1839.6 659.6 1843 701.6C1847.2 753.5 1855.9 842.8 1855.1 875.6C1854.8 888.5 1853.9 894.6 1851.9 902.6C1850.2 909.3 1848.2 914.8 1844.9 920.6C1841.3 926.9 1836.4 932.4 1830.6 938.6C1823.3 946.4 1813.2 955.8 1803.6 963C1794.2 970.1 1784 975.8 1773.6 981.4C1763 987.1 1751.7 992.3 1740.6 996.7C1729.7 1000.9 1719.7 1003.9 1707.6 1007.3C1693.2 1011.3 1677.9 1014.7 1659.6 1018.6C1635.5 1023.8 1597.2 1031.4 1575.6 1034.9C1562.1 1037.1 1556.4 1038 1542.6 1039.3C1519.5 1041.5 1481.3 1043.4 1449.6 1045C1416.4 1046.7 1372.2 1047 1347.6 1049C1333.5 1050.1 1326.2 1050.6 1314.6 1053C1301.3 1055.7 1286.9 1059.4 1272.6 1065.4C1256.1 1072.3 1234.5 1088.4 1221.6 1093.6C1214.3 1096.5 1209.7 1097.5 1203.6 1098.3C1197.6 1099.1 1191.6 1098.9 1185.6 1098.4C1179.6 1097.9 1175.5 1097.4 1167.6 1095.3C1151.5 1091 1113.9 1074.7 1095.6 1068.9C1084.5 1065.4 1077.7 1063.3 1068.6 1061.6C1059.7 1059.9 1049.7 1058.7 1041.6 1058.6C1035 1058.5 1029.6 1059 1023.6 1060.1C1017.5 1061.2 1011.2 1062.9 1005.6 1065.1C1000.3 1067.2 996.6 1069.1 990.6 1072.9C980.4 1079.4 961.7 1096 951.6 1102.7C945.6 1106.6 941.7 1108.9 936.6 1111.1C931.7 1113.2 926.9 1114.6 921.6 1115.6C916 1116.6 907.4 1116.8 904 1116.9C902.6 1117 902.4 1117 901.1 1116.9C898.1 1116.7 891.4 1116.1 886.6 1115C881.6 1113.8 876.2 1112.1 871.6 1110C867.3 1108.1 863.5 1105.8 859.6 1103.1C855.5 1100.3 852.2 1097.8 847.9 1093.3C841.2 1086.3 832.8 1075.3 824.9 1063.6C814.7 1048.5 802.1 1022.5 793.3 1009.6C788 1001.8 784 996.9 779.1 991.7C774.7 987.1 771.4 984 765.6 979.7C756.7 973.1 748.7 968.6 729.6 957.6C661 918.2 338.8 749.5 249.6 700.4C214.8 681.3 205 676.6 177.6 659.7C139.2 636 66.9 588.8 42.6 568.9C32.6 560.7 27.6 555 23.1 549.6C20.3 546.2 19 544.1 17.1 540.6C14.7 536.3 12.3 531.4 10.3 525.6C7.7 518 5 506.3 4.1 498.6C3.4 492.9 3.7 488.6 4 483.6C4.3 478.6 4.6 474.1 6 468.6C7.8 461.4 11.8 451.1 15 444.6C17.4 439.8 19.7 436.5 22.6 432.6C25.6 428.6 28.5 424.8 32.7 420.9C38.2 415.8 44.7 410.7 53.6 405.3C67.1 397.2 92.8 387.4 107.6 379.9C118.2 374.6 124.5 371.5 134.6 365.4C148.5 357 169 342.9 182.6 333C193.1 325.3 198.4 321.1 209.6 311.6C229.6 294.6 265.1 260.1 290.6 237.7C312.7 218.2 343.3 194.5 353.6 184.3C357.3 180.7 358.8 179.4 360.6 176.3C362.5 172.9 364.3 168.8 364.6 164.6C365 160 363.7 153.8 362.1 149.6C360.8 146.1 359.2 144.1 356.7 140.6C352.5 134.9 342.4 126.4 338.3 119.6C335.2 114.5 333.2 109.9 332.4 104.6C331.6 99 332.2 92.1 334 86.6C335.8 81.2 339.3 76.3 343 71.6C347 66.5 352.4 61.8 357.6 57.1C363.2 52.1 370.1 46.5 375.6 42.4C379.9 39.2 383 37.1 387.6 34.3C393.5 30.8 401.8 26.5 408.6 23.3C414.8 20.4 420.3 17.9 426.6 15.6C433.3 13.1 440.8 10.9 447.6 9.1C453.8 7.5 459.8 5.9 465.6 5.1C470.8 4.3 475.4 3.6 480.6 4C486.4 4.4 492.8 5.5 498.6 7.9C504.8 10.4 507 12.5 516.6 19.1Z';
const SS_T = {
  "turns": [[1, 961, 321], [2, 966, 540], [3, 1123, 798], [4, 991, 902], [5, 1108, 922], [6, 1680, 349], [7, 1520, 245], [8, 1705, 241], [9, 1876, 938], [10, 1286, 1099], [11, 1186, 1134], [12, 1066, 1098], [13, 993, 1116], [14, 882, 1151], [15, -32, 484], [16, 329, 163], [17, 302, 71], [18, 438, -26]],
  "br": [["M1066 829L1063 813L1050 817L1044 820L1037 822L1030 823L1021 826L1014 828L1006 830L998 832L988 835L979 838L971 840L959 845L944 855L933 870L929 882L929 909L939 929L943 936L953 944L962 950L973 956L981 960L988 963L998 967L1006 970L1013 972L1025 975L1036 978L1044 980L1051 982L1054 966", 870, 862, "LOW SPEED"], ["M1576 334L1573 350L1566 349L1556 348L1543 346L1532 345L1521 342L1508 338L1496 332L1488 327L1468 306L1461 294L1459 288L1454 271L1453 256L1454 246L1458 227L1466 211L1475 198L1490 185L1495 181L1513 173L1530 170L1540 169L1550 170L1567 173L1580 177L1590 182L1601 187L1610 191L1618 195L1628 201L1620 215", 1418, 205, "LOW SPEED"], ["M1398 1033L1397 1017L1378 1017L1359 1018L1337 1020L1317 1022L1297 1026L1277 1032L1253 1041L1235 1052L1219 1061L1211 1066L1198 1069L1187 1069L1171 1065L1155 1059L1137 1052L1119 1046L1101 1039L1076 1032L1057 1030L1026 1030L1009 1033L984 1042L963 1056L949 1067L934 1079L921 1085L917 1086L904 1087L886 1084L878 1080L869 1093", 1153, 1011, "HIGH SPEED"]],
  "drs": [["M1164 921L1175 910L1188 895L1200 883L1213 869L1228 853L1243 835L1260 817L1269 807L1287 788L1296 777L1315 757L1324 746L1343 725L1353 715L1372 694L1381 684L1399 664L1408 654L1425 635L1442 617L1449 609L1464 593L1481 574L1496 557L1508 544L1524 527L1539 510L1550 498L1567 479L1579 466", 1351, 675, "DRS 1"], ["M781 1023L767 1005L749 990L728 978L709 967L684 953L664 942L642 930L617 917L591 903L577 895L548 880L534 872L504 857L474 841L459 833L429 817L414 809L385 794L357 779L344 772L319 758L295 746L265 729L241 716L218 703L194 690L170 676L149 663L126 649L107 636", 446, 857, "DRS 2"]],
  "sec": [[1474, 631, 1451, 610], [826, 1034, 798, 1049]],
  "trap": [62, 584, 37, 612],
  "sf": [535, 52, 554, 26],
  "sfl": [521, 71],
  "sl": [["S1", 1150, 560], ["S2", 1650, 700], ["S3", 520, 720]]
};
function SilverstoneMap({
  l = 140,
  t = 110,
  w = 1000
}) {
  const k = w / 1872,
    h = 1133 * k,
    P = v => (v + 6) * k;
  const lab = {
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-display)',
    pointerEvents: 'none'
  };
  const vs = {
    vectorEffect: 'non-scaling-stroke',
    fill: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: l,
      top: t,
      width: w,
      height: h
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: "-6 -6 1872 1133",
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("g", {
    className: "ix-ss-t",
    style: {
      '--d': '.9s'
    }
  }, SS_T.br.map(([d]) => /*#__PURE__*/React.createElement("path", {
    key: d,
    d: d,
    stroke: "rgba(255,255,255,0.2)",
    strokeWidth: "1.2",
    strokeLinejoin: "round",
    style: vs
  })), SS_T.drs.map(([d]) => /*#__PURE__*/React.createElement("path", {
    key: d,
    d: d,
    stroke: "rgba(31,199,255,0.45)",
    strokeWidth: "1.3",
    strokeDasharray: "2 5",
    strokeLinecap: "round",
    style: vs
  }))), /*#__PURE__*/React.createElement("path", {
    d: SILVERSTONE_D,
    pathLength: "1000",
    fill: "none",
    stroke: "rgba(255,255,255,0.32)",
    strokeWidth: "3.2",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("path", {
    d: SILVERSTONE_D,
    pathLength: "1000",
    fill: "none",
    stroke: "rgba(0,104,223,0.55)",
    strokeWidth: "3.2",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    className: "ix-ss-glow"
  }), /*#__PURE__*/React.createElement("g", {
    className: "ix-ss-t",
    style: {
      '--d': '.7s'
    }
  }, SS_T.sec.map((s, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: s[0],
    y1: s[1],
    x2: s[2],
    y2: s[3],
    stroke: "rgba(255,255,255,0.55)",
    strokeWidth: "1.2",
    style: vs
  })), /*#__PURE__*/React.createElement("line", {
    x1: SS_T.sf[0],
    y1: SS_T.sf[1],
    x2: SS_T.sf[2],
    y2: SS_T.sf[3],
    stroke: "#fff",
    strokeWidth: "2",
    style: vs
  }), /*#__PURE__*/React.createElement("circle", {
    cx: SS_T.trap[0],
    cy: SS_T.trap[1],
    r: "9",
    stroke: "rgba(255,255,255,0.7)",
    strokeWidth: "1.2",
    style: {
      ...vs,
      fill: 'var(--wr-night)'
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: SILVERSTONE_D,
    pathLength: "1000",
    fill: "none",
    stroke: "rgb(31,199,255)",
    strokeWidth: "3.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    className: "ix-ss-pulse"
  }), /*#__PURE__*/React.createElement("path", {
    d: SILVERSTONE_D,
    pathLength: "1000",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    className: "ix-ss-pulse is-core"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ix-ss-t",
    style: {
      '--d': '.8s',
      position: 'absolute',
      inset: 0
    }
  }, SS_T.turns.map(([n, x, y]) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      ...lab,
      left: P(x),
      top: P(y),
      fontSize: 13,
      fontWeight: 500,
      color: 'rgba(255,255,255,0.55)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, n)), SS_T.br.map(([d, x, y, s]) => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      ...lab,
      left: P(x),
      top: P(y),
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, s)), SS_T.drs.map(([d, x, y, s]) => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      ...lab,
      left: P(x),
      top: P(y),
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(31,199,255,0.75)'
    }
  }, s)), SS_T.sl.map(([s, x, y], i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      ...lab,
      left: P(x),
      top: P(y),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      color: 'rgba(255,255,255,0.42)'
    }
  }, s), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.3)'
    }
  }, "SECTOR ", i + 1))), /*#__PURE__*/React.createElement("span", {
    style: {
      ...lab,
      left: P(SS_T.trap[2]),
      top: P(SS_T.trap[3]),
      transform: 'translate(-100%,-50%)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "SPEED TRAP"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...lab,
      left: P(SS_T.sfl[0]),
      top: P(SS_T.sfl[1]),
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "START / FINISH")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: w * 0.262,
      top: h * 0.41,
      transform: 'translate(-50%,-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/silverstone-logo.png",
    alt: "Silverstone",
    style: {
      display: 'block',
      height: 20,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      letterSpacing: '0.22em',
      color: '#fff'
    }
  }, "SILVERSTONE CIRCUIT"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.06em',
      color: 'rgba(255,255,255,0.62)'
    }
  }, "Home of the British Grand Prix"), /*#__PURE__*/React.createElement("span", {
    className: "ix-ss-t",
    style: {
      '--d': '1s',
      marginTop: 8,
      display: 'flex',
      gap: 14,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(255,255,255,0.42)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("span", null, "5.891 KM"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "18 TURNS"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "52 LAPS")))));
}

/* Glass audio pill — plays assets/audio/race-engineer.mp3 */
function VoicePlayer({
  src = IXA('audio/race-engineer.mp3'),
  className = ''
}) {
  const ref = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [prog, setProg] = React.useState(0);
  const [err, setErr] = React.useState(false);
  const {
    active
  } = React.useContext(IXCtx);
  React.useEffect(() => {
    const a = ref.current;
    if (!active && a && !a.paused) {
      a.pause();
      setPlaying(false);
    }
  }, [active]);
  const toggle = e => {
    e.stopPropagation();
    const a = ref.current;
    if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => setErr(true));else {
      a.pause();
      setPlaying(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: toggle,
    className: `ix-player ${className}`,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '10px 22px 10px 10px',
      borderRadius: 999,
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--glass-shadow)',
      cursor: 'pointer',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("audio", {
    ref: ref,
    src: src,
    preload: "auto",
    onTimeUpdate: e => setProg(e.target.duration ? e.target.currentTime / e.target.duration : 0),
    onEnded: () => {
      setPlaying(false);
      setProg(0);
    },
    onError: () => setErr(true)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, playing ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 16,
      background: '#fff',
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 16,
      background: '#fff',
      borderRadius: 1
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      marginLeft: 4,
      borderTop: '9px solid transparent',
      borderBottom: '9px solid transparent',
      borderLeft: '14px solid #fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: 150
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.16em',
      color: '#fff'
    }
  }, err ? 'AUDIO MISSING' : 'RACE ENGINEER'), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      borderRadius: 3,
      background: 'rgba(255,255,255,0.18)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${prog * 100}%`,
      background: 'linear-gradient(90deg,#0042FF,rgb(31,199,255))'
    }
  }))));
}
function IXOverviewSlide({
  index
}) {
  const items = [['Immersive AI experience –', ' A bespoke AI powered experience that immerses VIP guests and partners in the heart of the Williams Racing team during paddock and pit lane walks.'], ['Your own synthetic race engineer –', ' Receive live engineering insights, team heritage, sponsor stories and behind the scenes context, while asking questions naturally at any time. Every word lands straight in your ear, just as a driver hears their race engineer.'], ['Stay present, relive every moment –', ' Experience the day without reaching for your phone while AI captures every unforgettable moment to revisit long after the event.']];
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement(PX, {
    depth: -10,
    l: 1143,
    t: -20,
    style: {
      width: 797,
      height: 1120
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "right",
    d: 150,
    className: "ix-photo",
    style: {
      position: 'absolute',
      inset: 0,
      borderLeft: '2px solid #fff',
      background: `url(${IXA('photos/glasses-case-blue.png')}) center / cover no-repeat`
    }
  })), /*#__PURE__*/React.createElement(IXStreaks, {
    d: 350
  }), /*#__PURE__*/React.createElement(IXLogo, {
    l: 164,
    t: 257,
    d: 380
  }), /*#__PURE__*/React.createElement(B, {
    fx: "wipe",
    d: 520,
    style: {
      position: 'absolute',
      left: 163.987,
      top: 335.25,
      width: 305.026,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      top: 376,
      width: 800,
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      fontFamily: 'var(--font-body)'
    }
  }, items.map(([b, r], i) => /*#__PURE__*/React.createElement(B, {
    key: b,
    fx: "left",
    d: 640 + i * 160,
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr',
      columnGap: 18,
      paddingTop: i ? 30 : 0,
      borderTop: i ? '1px solid rgba(255,255,255,0.1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      paddingTop: 8,
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      lineHeight: '34px',
      color: '#fff'
    }
  }, b.replace(/\s*–\s*$/, '')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 300,
      lineHeight: '32px',
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty'
    }
  }, r.trim()))))));
}

/* Journey: → / click reveals each step in order; the newest step carries a blue focus glow. */
function IXJourneySlide({
  index
}) {
  const steps = [{
    l: 89,
    t: 94,
    img: 'paddock-glasses-handover',
    cap: 'Head to the paddock and receive your smart glasses from a hospitality host'
  }, {
    l: 730,
    t: 129,
    img: 'pitlane-glasses-on',
    cap: "Experience begins with the race engineer's voice welcoming you to the pit lane",
    arrow: [578, 222, 'rotate(180deg)']
  }, {
    l: 1355,
    t: 94,
    img: 'pitlane-hey-williams',
    cap: 'Guided through the pit lane with exclusive insights and fun facts about the team',
    arrow: [1214, 200, 'scaleX(-1) rotate(-12deg) scale(.86)']
  }, {
    l: 408,
    t: 589,
    img: 'pitlane-group-glasses',
    cap: 'Stay in the moment while our glasses capture your every move, even live stream to your instagram'
  }, {
    l: 1051,
    t: 589,
    img: 'grandstand-radio',
    cap: "Feel like you're at the wheel, with real time driver to team radio in your ear, and updates from your very own AI engineer",
    arrow: [896, 700, 'rotate(160deg)']
  }];
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(JourneyInner, {
    steps: steps
  }), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    bottom: 196,
    handleLift: 28,
    width: 720,
    eyebrow: "HOW IT WORKS",
    meta: "Meta glasses \xB7 Williams Smart App",
    title: "Box Box",
    chips: ['Hey Williams', 'Vision AI', 'Hands-free capture'],
    content: /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 23,
        fontWeight: 300,
        lineHeight: '36px',
        color: 'rgba(255,255,255,0.82)',
        textWrap: 'pretty'
      }
    }, "Put the glasses on and your very own AI race engineer guides you through the pit lane and paddock. Curious about something? Just say \u201CHey Williams\u201D. Vision AI and deep learning read what you\u2019re looking at, send it to the Williams Smart App, and your engineer answers straight into your ear. He\u2019ll even cue you to capture photos and video through the glasses, so your phone stays in your pocket and you stay in the moment.")
  }));
}
function JourneyInner({
  steps
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement(IXStreaks, {
    d: 250
  }), steps.map((s, i) => {
    const d = 300 + i * 420;
    return /*#__PURE__*/React.createElement("div", {
      key: s.img,
      style: {
        position: 'absolute',
        left: s.l,
        top: s.t
      }
    }, /*#__PURE__*/React.createElement(B, {
      fx: "up",
      d: d
    }, /*#__PURE__*/React.createElement("div", {
      className: "ix-step"
    }, /*#__PURE__*/React.createElement(IXDS.StepCard, {
      imageSrc: IXA(`photos/${s.img}.png`),
      caption: s.cap
    }))));
  }), steps.map((s, i) => s.arrow && /*#__PURE__*/React.createElement("div", {
    key: 'a' + i,
    style: {
      position: 'absolute',
      left: s.arrow[0],
      top: s.arrow[1],
      zIndex: 10,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "draw",
    d: 300 + i * 420 - 260,
    style: {
      width: 131.589,
      height: 68.25
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "131.589",
    height: "68.25",
    viewBox: "0 0 131.589 68.25",
    style: {
      display: 'block',
      overflow: 'visible',
      transform: s.arrow[2],
      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `fa${i}`,
    gradientUnits: "userSpaceOnUse",
    x1: "0",
    y1: "0",
    x2: "131.589",
    y2: "68.25"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.55",
    stopColor: "#fff",
    stopOpacity: "0.85"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#fff",
    stopOpacity: "0.15"
  }))), /*#__PURE__*/React.createElement("path", {
    fill: `url(#fa${i})`,
    d: "M 0 0 L 6.596 5.612 L 8.158 -2.906 L 0 0 Z M 6.63 1.216 L 6.477 1.95 C 24.731 5.762 37.146 12.399 46.622 20.034 C 56.119 27.684 62.68 36.342 69.262 44.296 C 75.825 52.229 82.41 59.462 91.897 64.019 C 101.397 68.582 113.718 70.423 131.698 67.785 L 131.589 67.043 L 131.481 66.301 C 113.698 68.91 101.701 67.064 92.546 62.666 C 83.377 58.262 76.969 51.258 70.417 43.34 C 63.884 35.444 57.208 26.636 47.563 18.866 C 37.898 11.079 25.265 4.341 6.784 0.482 L 6.63 1.216 Z"
  }))))));
}
Object.assign(window, {
  IXCoverSlide,
  IXOverviewSlide,
  IXJourneySlide,
  IXWMark,
  IXStreaks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck-saved-2026-09-25/ix-slides-a.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck-saved-2026-09-25/ix-slides-b.jsx
try { (() => {
/* Interactive slides — Prompts (18), Livestream (79), VIP (80), Demo (81), Why us (82). */
const ixTitle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 'var(--type-title-size)',
  lineHeight: 'var(--type-title-lh)',
  color: '#fff',
  margin: 0
};
const ixLead = {
  fontFamily: 'var(--font-body)',
  fontWeight: 400,
  fontSize: 'var(--type-lead-size)',
  lineHeight: 'var(--type-lead-lh)',
  color: '#fff',
  margin: 0
};

/* Placeholder race-engineer answers — edit to approved copy. Add qAudio / aAudio (asset paths) when recordings are ready; timings then follow the audio. */
const IX_PROMPTS = [{
  l: 111.953,
  t: 83.392,
  r: 7.64,
  side: 'right',
  text: 'Hey Williams, why are you using soft tyres?',
  a: 'Softs give us the most grip over a short window. We want track position right now, so we’ll push hard and box a little earlier.',
  aAudio: 'audio/answer-soft-tyres.mp3'
}, {
  l: 1434,
  t: 151.735,
  r: -14.3,
  side: 'left',
  text: 'Hey Williams, what’s the deal with Claude?',
  a: 'Claude is one of our partners — look for it on the livery. Want me to point out where it sits on the car when we reach the garage?'
}, {
  l: 1469.574,
  t: 780,
  r: 16.68,
  side: 'left',
  text: 'Hey Williams, who is the current backup driver?',
  a: 'Our reserve driver is on standby all weekend — in the simulator and ready to step in if the team needs them.'
}, {
  l: 75,
  t: 865.138,
  r: -7.7,
  side: 'right',
  text: 'Hey Williams, how fast is your average pit stop?',
  a: 'The crew trains for stops in the two-to-three second range. Around twenty people, one car, perfectly in sync.'
}];
function Typer({
  text,
  onDone
}) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    setN(0);
    const id = setInterval(() => setN(v => {
      if (v >= text.length) {
        clearInterval(id);
        onDone && onDone();
        return v;
      }
      return v + 1;
    }), 22);
    return () => clearInterval(id);
  }, [text]);
  return /*#__PURE__*/React.createElement("span", null, text.slice(0, n), /*#__PURE__*/React.createElement("span", {
    className: "ix-caret",
    style: {
      opacity: n < text.length ? 1 : 0
    }
  }, "\u258D"));
}
function Wave({
  on
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      height: 22
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: on ? 'ix-bar is-on' : 'ix-bar',
    style: {
      '--i': i
    }
  })));
}
function IXPromptsSlide({
  index
}) {
  const [sel, setSel] = React.useState(-1);
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index,
    className: "ix-white",
    steps: IX_PROMPTS.length,
    onStep: s => setSel(s - 1),
    style: {
      background: 'var(--wr-night)'
    }
  }, /*#__PURE__*/React.createElement(PromptsInner, {
    sel: sel
  }));
}
function PromptsInner({
  sel
}) {
  const {
    setStep
  } = React.useContext(IXCtx);
  const [phase, setPhase] = React.useState('idle');
  const [ansMs, setAnsMs] = React.useState(0);
  React.useEffect(() => {
    if (sel < 0) {
      setPhase('idle');
      return;
    }
    const p = IX_PROMPTS[sel];
    let alive = true,
      timer = 0,
      audio = null;
    const stop = () => {
      clearTimeout(timer);
      if (audio) {
        audio.pause();
        audio.onended = null;
        audio = null;
      }
    };
    const play = (src, fallback, onStart, done) => {
      stop();
      if (!src) {
        onStart(fallback);
        timer = setTimeout(() => alive && done(), fallback);
        return;
      }
      audio = new Audio(IXA(src));
      audio.onended = () => alive && done();
      audio.onloadedmetadata = () => alive && onStart(audio.duration * 1000);
      audio.play().catch(() => {
        audio = null;
        onStart(fallback);
        timer = setTimeout(() => alive && done(), fallback);
      });
    };
    const askMs = Math.min(10000, Math.max(5000, p.text.length * 140));
    const answer = () => play(p.aAudio, Math.max(2500, p.a.length * 45), ms => {
      setAnsMs(ms);
      setPhase('answer');
    }, () => setPhase('idle'));
    setPhase('ask');
    play(p.qAudio, askMs, () => {}, answer);
    return () => {
      alive = false;
      stop();
    };
  }, [sel]);
  const speaking = phase === 'answer';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -30,
      top: -18,
      width: 1980,
      height: 1116
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "kb",
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${IXA('photos/glasses-hero-blue.png')}) center / cover no-repeat`
    }
  })), IX_PROMPTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.text,
    style: {
      position: 'absolute',
      left: p.l,
      top: p.t
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "pop",
    d: 250 + i * 140
  }, /*#__PURE__*/React.createElement("div", {
    className: `ix-prompt ${sel === i ? 'is-on' : ''} ${sel === i && phase === 'ask' ? 'is-asking' : ''} ${sel >= 0 && sel !== i ? 'is-dim' : ''}`,
    onClick: () => setStep(i + 1),
    style: {
      '--r': p.r + 'deg'
    }
  }, /*#__PURE__*/React.createElement(IXDS.GlassPrompt, {
    text: p.text,
    side: p.side,
    tilt: p.r
  }))))), /*#__PURE__*/React.createElement(B, {
    fx: "draw-br",
    d: 900,
    style: {
      position: 'absolute',
      left: 275,
      top: 252
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "96",
    height: "156",
    viewBox: "0 0 96 156",
    fill: "rgba(255,255,255,0.55)",
    stroke: "rgba(255,255,255,0.55)",
    strokeWidth: "0.9",
    style: {
      overflow: 'visible',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 96 156.25 C 96.138 156.25 96.25 156.138 96.25 156 C 96.25 155.862 96.138 155.75 96 155.75 L 96 156 L 96 156.25 Z M 0 156 L -0.25 156 L -0.25 156.25 L 0 156.25 L 0 156 Z M 0 0 L -1.443 2.5 L 1.443 2.5 L 0 0 Z M 96 156 L 96 155.75 L 0 155.75 L 0 156 L 0 156.25 L 96 156.25 L 96 156 Z M 0 156 L 0.25 156 L 0.25 2.25 L 0 2.25 L -0.25 2.25 L -0.25 156 L 0 156 Z"
  }))), /*#__PURE__*/React.createElement(B, {
    fx: "draw-tl",
    d: 1050,
    style: {
      position: 'absolute',
      left: 1543,
      top: 414
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "138",
    height: "397",
    viewBox: "0 0 138 397",
    fill: "rgba(255,255,255,0.55)",
    stroke: "rgba(255,255,255,0.55)",
    strokeWidth: "0.9",
    style: {
      overflow: 'visible',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.25 C -0.138 -0.25 -0.25 -0.138 -0.25 0 C -0.25 0.138 -0.138 0.25 0 0.25 L 0 0 L 0 -0.25 Z M 138 0 L 138.25 0 L 138.25 -0.25 L 138 -0.25 L 138 0 Z M 138 397 L 139.443 394.5 L 136.557 394.5 L 138 397 Z M 0 0 L 0 0.25 L 138 0.25 L 138 0 L 138 -0.25 L 0 -0.25 L 0 0 Z M 138 0 L 137.75 0 L 137.75 394.75 L 138 394.75 L 138.25 394.75 L 138.25 0 L 138 0 Z"
  }))), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 700,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 912,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 5,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '10px 26px 10px 10px',
      maxWidth: 760,
      borderRadius: 999,
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--glass-shadow)',
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Wave, {
    on: speaking
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 150
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.16em',
      color: '#fff'
    }
  }, "RACE ENGINEER"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      width: 150,
      borderRadius: 3,
      background: 'rgba(255,255,255,0.18)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: sel + phase,
    className: speaking ? 'ix-talk' : '',
    style: {
      height: '100%',
      width: speaking ? '100%' : '0%',
      background: 'linear-gradient(90deg,#0042FF,rgb(31,199,255))',
      '--talk': ansMs + 'ms'
    }
  }))))), /*#__PURE__*/React.createElement(IXLogo, {
    l: 855,
    t: 48,
    d: 600
  }));
}

/* Livestream — live chat, floating reactions (click the stream to send more), ticking viewers. */
const IX_CHAT = [['silverstone_sam', 'Silverstone crowd is unreal 🇬🇧'], ['pitwall.pete', 'That pit lane view 🔥'], ['apex.amy', 'Box box box 📻'], ['gridwalker', 'Copse at full send 😮‍💨'], ['lewis_fan44', 'Mechanics are so fast 🔧⏱️'], ['vroom.vroom', '🏁🏁🏁'], ['maggotts.becketts', 'Front row seats to the garage 👀'], ['paddockpass', 'Softs or mediums?? 🔴🟡'], ['p1.priya', 'Come on Williams!! 💙'], ['stowe.corner', 'Formation lap vibes 🏎️💨']];
const IX_EMO = ['💯', '😁', '🏁', '🏆', '🏎', '🏅'];
const IX_HEARTS = ['#0068DF', 'rgb(31,199,255)', '#FFFFFF', '#0068DF', '#FFFFFF'];
const IX_HEART_D = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
function IXLivestreamSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(LiveInner, null), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    eyebrow: "CREATOR TOOLKIT",
    meta: "Meta glasses",
    title: "Your day, edited before you\u2019re home.",
    chips: ['Auto-edited reel', 'Ready to post']
  }, "Creators stream hands-free while the AI race engineer feeds them stories to narrate. Behind the scenes, our platform gathers every clip captured that day and turns it into a bespoke, professionally edited Williams highlight reel, formatted for each channel and ready to post before they even get home."));
}
function LiveInner() {
  const {
    active
  } = React.useContext(IXCtx);
  const [emo, setEmo] = React.useState([]);
  const [chat, setChat] = React.useState([{
    id: 1,
    name: 'Immy Bewes',
    message: '🏁🏆🏅'
  }, {
    id: 2,
    name: 'katyboooo',
    message: 'Wish I was there!'
  }, {
    id: 3,
    name: 'Bertie Kinnings',
    message: '🏎🏎🏎'
  }]);
  const idRef = React.useRef(10);
  const combo = React.useRef({
    t: 0,
    n: 0
  });
  const spawn = (count = 1, set = IX_EMO, spread = 0, at = null) => {
    const heart = set === IX_HEARTS;
    const add = Array.from({
      length: count
    }).map(() => {
      const sz = heart ? 44 + Math.round(Math.random() * 18) : 32;
      return {
        id: idRef.current++,
        heart,
        e: set[Math.floor(Math.random() * set.length)],
        sz,
        x: at ? at[0] - sz / 2 + (Math.random() * 40 - 20) : 444 + Math.random() * 70,
        y: at ? at[1] - sz / 2 : 930,
        dx: (Math.random() * 110 - 55).toFixed(0),
        dur: (2.2 + Math.random() * 1.4).toFixed(2),
        dl: (spread ? Math.random() * spread : 0).toFixed(2)
      };
    });
    setEmo(v => [...v.slice(-70), ...add]);
  };
  const love = (e, at) => {
    e && e.stopPropagation();
    const now = Date.now(),
      c = combo.current;
    c.n = now - c.t < 700 ? Math.min(c.n + 1, 6) : 0;
    c.t = now;
    spawn(4 + c.n * 3, IX_HEARTS, 0.25 + c.n * 0.12, at || [480, 950]);
  };
  const loveAt = e => {
    const r = e.currentTarget.getBoundingClientRect();
    love(e, [(e.clientX - r.left) / r.width * SW, (e.clientY - r.top) / r.height * SH]);
  };
  React.useEffect(() => {
    if (!active) return;
    const r = setInterval(() => spawn(1), 900);
    let k = 0;
    const c = setInterval(() => {
      const m = IX_CHAT[k++ % IX_CHAT.length];
      setChat(v => [...v.slice(-2), {
        id: idRef.current++,
        name: m[0],
        message: m[1]
      }]);
    }, 2800);
    return () => {
      clearInterval(r);
      clearInterval(c);
    };
  }, [active]);
  const I = IXDS.Icon;
  const S = 0.8,
    SW = 554,
    SH = 1095,
    BZ = 12;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IXTextBlock, {
    l: 164,
    t: 318,
    w: 1000,
    num: "01",
    kicker: "User One: The Creator",
    title: "POV UGC & Livestream by Creators",
    body: "Enable creators to record the Williams race weekend from a true first person perspective while receiving AI powered stories and insights that enrich the content they create."
  }, /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 520,
    style: {
      marginTop: 56,
      paddingTop: 36,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      alignItems: 'center',
      gap: 36,
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexShrink: 0
    }
  }, ['instagram', 'tiktok', 'snapchat'].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "ix-social",
    style: {
      width: 68,
      height: 68,
      borderRadius: 20,
      background: 'rgba(255,255,255,0.06)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.16)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `assets/social-${n}.svg`,
    alt: n,
    width: "30",
    height: "30",
    style: {
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)'
    }
  }, "LIVE ON EVERY CHANNEL"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 300,
      lineHeight: '34px',
      color: 'rgba(255,255,255,0.85)',
      textWrap: 'pretty'
    }
  }, "First-person POV is social\u2019s breakout format, with clips pulling in millions of views. Every creator becomes a live Williams broadcast.")))), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 0,
    style: {
      position: 'absolute',
      left: 1180,
      top: 40,
      width: 760,
      height: 1000,
      zIndex: 20,
      pointerEvents: 'none',
      background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,104,223,0.42) 0%, rgba(0,66,255,0.16) 45%, rgba(0,66,255,0) 100%)',
      filter: 'blur(20px)'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 150,
    style: {
      position: 'absolute',
      zIndex: 20,
      left: 1560 - SW * S / 2 - BZ,
      top: (1080 - SH * S) / 2 - BZ - 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: BZ,
      borderRadius: 68,
      background: 'linear-gradient(160deg, #2a2d36 0%, #121419 45%, #1c1f27 100%)',
      boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.14), 0 0 0 1px rgba(0,0,0,0.6), 0 30px 80px rgba(0,0,0,0.55), 0 0 90px rgba(0,104,223,0.28)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: loveAt,
    style: {
      position: 'relative',
      width: SW * S,
      height: SH * S,
      borderRadius: 56,
      overflow: 'hidden',
      background: '#000',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: SW,
      height: SH,
      transform: `scale(${S})`,
      transformOrigin: '0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${IXA('photos/creator-selfie-trackside.png')}) 99.765% 144.222% / 111.092% 99.964% no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 200,
      background: 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 52,
      width: SW,
      height: SH - 52
    }
  }, /*#__PURE__*/React.createElement(IXDS.StreamerHandle, {
    handle: "lily_andrews",
    avatarSrc: IXA('photos/avatar-lily.png'),
    style: {
      position: 'absolute',
      left: 22,
      top: 16
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: "9.9",
    height: "9.9",
    viewBox: "0 0 9.9 9.9",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      transform: 'matrix(0.707,-0.707,0.707,0.707,238,37)',
      transformOrigin: '0 0',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 9.9 L 9.9 9.9",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 320,
      top: 21,
      display: 'flex',
      alignItems: 'center',
      gap: 19
    }
  }, /*#__PURE__*/React.createElement(IXDS.LiveBadge, null), /*#__PURE__*/React.createElement(IXDS.ViewerCount, {
    count: "140K"
  })), /*#__PURE__*/React.createElement(IXDS.Icons, {
    name: "Exit",
    dark: true,
    size: 28,
    style: {
      position: 'absolute',
      left: 507,
      top: 26
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 25,
      top: 757,
      display: 'flex',
      flexDirection: 'column',
      gap: 19,
      pointerEvents: 'none'
    }
  }, chat.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: "ix-chat"
  }, /*#__PURE__*/React.createElement(IXDS.CommentRow, {
    name: c.name,
    message: c.message
  }))))), emo.map(e => {
    const st = {
      position: 'absolute',
      left: e.x,
      top: e.y,
      lineHeight: 1,
      pointerEvents: 'none',
      '--dx': e.dx + 'px',
      '--dur': e.dur + 's',
      '--dl': e.dl + 's'
    };
    const end = () => setEmo(v => v.filter(x => x.id !== e.id));
    return e.heart ? /*#__PURE__*/React.createElement("svg", {
      key: e.id,
      className: "ix-float",
      onAnimationEnd: end,
      width: e.sz,
      height: e.sz,
      viewBox: "0 0 24 24",
      style: {
        ...st,
        overflow: 'visible',
        filter: e.e === '#FFFFFF' ? 'drop-shadow(0 0 6px rgba(31,199,255,0.7))' : 'drop-shadow(0 0 8px rgba(31,199,255,0.8))'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: IX_HEART_D,
      fill: e.e
    })) : /*#__PURE__*/React.createElement("span", {
      key: e.id,
      className: "ix-float",
      onAnimationEnd: end,
      style: {
        ...st,
        fontSize: e.sz
      }
    }, e.e);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 9,
      width: 96,
      height: 26,
      marginLeft: -48,
      borderRadius: 16,
      background: '#000'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 8,
      width: 134,
      height: 5,
      marginLeft: -67,
      borderRadius: 3,
      background: 'rgba(255,255,255,0.85)'
    }
  })))), /*#__PURE__*/React.createElement(B, {
    fx: "pop",
    d: 900,
    style: {
      position: 'absolute',
      zIndex: 22,
      right: 1920 - 1352,
      top: 150
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => love(e),
    className: "ix-love",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px 10px 12px',
      border: 0,
      borderRadius: 999,
      cursor: 'pointer',
      background: 'linear-gradient(180deg, rgba(44,49,64,0.92), rgba(24,27,38,0.92))',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.16), 0 12px 32px rgba(0,0,0,0.45)',
      fontFamily: 'var(--font-display)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'rgba(31,199,255,0.16)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "15",
    viewBox: "0 0 24 22",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    fill: "rgb(31,199,255)",
    style: {
      filter: 'drop-shadow(0 0 4px rgba(31,199,255,0.8))'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      letterSpacing: '0.04em',
      whiteSpace: 'nowrap'
    }
  }, "Show Some Love"))));
}

/* Refined title + lead block (matches Overview styling): cyan index, rule, medium title, light body. */
function IXTextBlock({
  l,
  t,
  w,
  num,
  kicker,
  title,
  body,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: l,
      top: 0,
      bottom: 40,
      width: w,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, kicker && (() => {
    const [a, b] = kicker.split(':');
    return /*#__PURE__*/React.createElement(B, {
      fx: "fade",
      d: 40,
      style: {
        marginBottom: 14,
        fontSize: 22,
        fontWeight: 400,
        letterSpacing: '0.04em',
        color: 'rgba(255,255,255,0.86)'
      }
    }, a, b !== undefined && /*#__PURE__*/React.createElement(React.Fragment, null, ": ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: 'rgb(31,199,255)',
        textShadow: '0 0 14px rgba(31,199,255,0.65), 0 0 28px rgba(0,104,223,0.5)'
      }
    }, b.trim())));
  })(), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 80,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 305,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  })), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 180
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-0.015em',
      color: '#fff',
      textWrap: 'balance'
    }
  }, title)), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 340,
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 29,
      lineHeight: '44px',
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty',
      maxWidth: 900
    }
  }, body)), children);
}
function IXVipSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    eyebrow: "THE RECAP",
    meta: "Delivered after the event",
    title: "A highlight reel with your brand in it.",
    chips: ['Sponsor-branded', 'LinkedIn-ready']
  }, "Our platform gathers every moment each guest captures and produces a professional highlight reel of their day, showcasing the sponsor brand they represent alongside Williams. Polished, on-brand and ready to post on LinkedIn."), /*#__PURE__*/React.createElement(IXTextBlock, {
    l: 164,
    t: 330,
    w: 960,
    num: "02",
    kicker: "User Two: The Corporates",
    title: "The Ultimate VIP Sponsor Experience",
    body: "Treat your most important guests to an AI powered race weekend by providing Meta glasses for the entire event, allowing them to capture unforgettable moments, take the glasses home as a lasting memento, and receive a professionally edited, LinkedIn ready highlight recap to relive and share the experience."
  }), /*#__PURE__*/React.createElement(B, {
    fx: "edge",
    d: 0,
    style: {
      position: 'absolute',
      left: 1363,
      top: 0,
      width: 2,
      height: 1080,
      background: '#fff',
      zIndex: 21,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "reveal",
    d: 0,
    style: {
      position: 'absolute',
      left: 1363,
      top: 0,
      width: 628,
      height: 1116,
      overflow: 'hidden',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(PX, {
    depth: -10,
    l: -16,
    t: -12,
    style: {
      width: 660,
      height: 1140
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-photo",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'url(assets/vip-garage-guests.png) center 30% / cover no-repeat'
    }
  }))), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 650,
    style: {
      position: 'absolute',
      left: 1150,
      top: 654,
      zIndex: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-step",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      width: 420,
      height: 352,
      borderRadius: 'var(--radius-photo)',
      background: 'url(assets/vip-packaging.png) center / cover no-repeat',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 30px 70px rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '56px 22px 18px',
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.82) 100%)',
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      fontWeight: 400,
      lineHeight: '26px',
      color: '#fff'
    }
  }, "Premium branded packaging, a keepsake to remember the day"))))));
}

/* Fan experiences carousel: manual prev/next; text on the left swaps with each image. */
const IX_FAN_SLIDES = [{
  img: IXA('photos/williams-2026-car.jpg'),
  tag: 'Creator POV',
  sub: 'Placeholder image',
  title: 'The paddock, through a creator’s eyes',
  body: 'Fans at home watch the race weekend through their favourite creator’s eyes, live and in first person. They hear the engines, spot famous faces in the pit lane in real time and see the car up close, moments TV rarely catches. And they’re part of it, commenting as it happens, closer to the creator and closer to the race.'
}, {
  img: null,
  tag: 'Williams Time Capsule',
  sub: 'Fan zone VR · Image to come',
  title: 'The Williams Time Capsule',
  body: 'Step into the Williams Time Capsule, a generative VR experience in the team’s fan zone at every Grand Prix. Narrated by Alex Albon, it carries fans through the eras: stepping inside iconic cars in every Williams livery, reliving legendary races and standing in the team’s defining moments as if they were there. Powered by Claude AI, each journey adapts to the fan and is built bespoke to the host Grand Prix and its history, so no two are ever the same.'
}, {
  img: 'assets/ar-circuit-replica.png',
  tag: 'AR circuit replica',
  sub: 'Live, captured in-device',
  title: 'The race, rebuilt on your table',
  body: 'Platforms like Lapz have shown what a live, augmented-reality replica of a circuit can do. We can build one bespoke to Williams, powered by your own data, so fans follow every car, gap and strategy call in real time. A new way to watch the race, and a way into one of the fastest-growing and most innovative ways fans consume sport.'
}];
function IXDemoSlide({
  index
}) {
  const [idx, setIdx] = React.useState(0);
  const n = IX_FAN_SLIDES.length;
  const go = dir => e => {
    e.stopPropagation();
    setIdx(i => (i + dir + n) % n);
  };
  const cur = IX_FAN_SLIDES[idx];
  const FW = 860,
    FH = 483.75;
  const btn = {
    width: 48,
    height: 48,
    borderRadius: '50%',
    border: 0,
    padding: 0,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(10,12,20,0.55)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)'
  };
  const chev = flip => /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "18",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: flip ? 'scaleX(-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 0,
    style: {
      position: 'absolute',
      left: 1000,
      top: 200,
      width: 900,
      height: 700,
      pointerEvents: 'none',
      background: 'radial-gradient(50% 50% at 50% 55%, rgba(0,104,223,0.3) 0%, rgba(0,66,255,0) 100%)',
      filter: 'blur(20px)'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 500,
    style: {
      position: 'absolute',
      left: 1000,
      top: (1080 - FH) / 2 - 52,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      zIndex: 20,
      fontFamily: 'var(--font-display)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ix-ss-dot",
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'rgb(31,199,255)',
      animation: 'ix-pulse-blue 1.8s ease-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "The Curious opens the door to a wider world of immersive technology")), /*#__PURE__*/React.createElement(B, {
    fx: "right",
    d: 200,
    style: {
      position: 'absolute',
      left: 1000,
      top: (1080 - FH) / 2,
      width: FW,
      height: FH,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)',
      background: 'var(--wr-night-2)'
    }
  }, IX_FAN_SLIDES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.tag,
    className: "ix-fan-img",
    style: {
      position: 'absolute',
      inset: 0,
      background: s.img ? `url(${s.img}) center / cover no-repeat` : 'repeating-linear-gradient(135deg, #121725 0 14px, #0e1220 14px 28px)',
      opacity: i === idx ? 1 : 0,
      transform: i === idx ? 'scale(1)' : 'scale(1.04)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, !s.img && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 14,
      letterSpacing: '0.08em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, "time capsule image to come"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(75% 90% at 100% 100%, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 75%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    key: 'c' + idx,
    className: "ix-fan-cap",
    style: {
      position: 'absolute',
      right: 30,
      bottom: 26,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4,
      fontFamily: 'var(--font-display)',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: '#fff'
    }
  }, cur.tag.toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, cur.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: 22,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous",
    className: "ix-fan-btn",
    onClick: go(-1),
    style: btn
  }, chev(false)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next",
    className: "ix-fan-btn",
    onClick: go(1),
    style: btn
  }, chev(true)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#fff',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(idx + 1).padStart(2, '0'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.55)',
      fontWeight: 300
    }
  }, " / ", String(n).padStart(2, '0')))))), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    eyebrow: "THE ECOSYSTEM",
    meta: "Circuit to home",
    title: "From the paddock, straight to the fans who couldn\u2019t be there.",
    chips: ['Live POV', 'Creator-led', 'Beyond TV']
  }, "It closes the loop. F1 creators livestream their first-person view live from the circuit, straight to the fans watching from home. A new way to tell the story of a race weekend, with the views TV doesn\u2019t show, and a stronger connection between Williams, its creators and the fans who follow them."), /*#__PURE__*/React.createElement("div", {
    key: 't' + idx
  }, /*#__PURE__*/React.createElement(IXTextBlock, {
    l: 164,
    t: 330,
    w: 720,
    num: "03",
    kicker: "User Three: The Curious",
    title: cur.title,
    body: cur.body
  })));
}
const IX_META_USES = [['Live telemetry', 'Speed, tyre wear, gaps and strategy calls float in view as they happen, so guests read the race exactly like the pit wall does, without ever looking down at a screen.'], ['Onboard laps', 'Ride a full lap of Silverstone from the cockpit, with the driver’s view, braking points and team radio playing out around you in true scale, as if you were in the seat.'], ['3D interactable models', 'Place the car in the room and explore it part by part, from the power unit to the floor, while our AI engineer explains exactly what each piece does and why it matters.'], ['Highlight reels', 'Relive the team’s defining moments exactly as the drivers lived them, from lights out to the podium, told in the first person and replayed in full, immersive detail.']];
const IX_VISION_STATS = [['$14.4B', 'Projected smart glasses market by 2033, up from $2.5B in 2025'], ['110%', 'Year-on-year growth in smart glasses shipments, first half of 2025'], ['Big Tech', 'Meta, Google, Apple and Samsung are all building for the category']];
/* Stacked glass feature cards: arrows slide the front card out left; back reveals it again. */
function FeatureStack({
  reset
}) {
  const [k, setK] = React.useState(0);
  React.useEffect(() => {
    if (!reset) setK(0);
  }, [reset]);
  const n = IX_META_USES.length,
    CH = 232;
  const go = d => e => {
    e.stopPropagation();
    setK(v => Math.max(0, Math.min(n - 1, v + d)));
  };
  const arrow = (d, off) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": d < 0 ? 'Previous' : 'Next',
    className: "ix-lift",
    disabled: off,
    onClick: go(d),
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      border: 0,
      padding: 0,
      cursor: off ? 'default' : 'pointer',
      opacity: off ? 0.35 : 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(30,34,46,0.55)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)',
      transition: 'opacity .3s ease'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "17",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: d > 0 ? 'scaleX(-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: CH + 3 * 14
    }
  }, IX_META_USES.map(([t, body], i) => {
    const d = i - k,
      out = d < 0,
      front = d === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: CH,
        boxSizing: 'border-box',
        padding: '26px 32px',
        borderRadius: 20,
        overflow: 'hidden',
        zIndex: 10 - Math.abs(d),
        background: 'linear-gradient(160deg, rgba(247,246,243,0.94) 0%, rgba(230,228,224,0.92) 100%)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.7), 0 24px 50px rgba(0,24,72,0.3)',
        transform: out ? 'translateX(-115%) rotate(-5deg)' : `translateY(${d * 14}px) scale(${1 - d * 0.045})`,
        transformOrigin: '50% 0',
        opacity: out || d > 2 ? 0 : 1 - d * 0.18,
        pointerEvents: front && reset ? 'auto' : 'none',
        transition: 'transform .75s cubic-bezier(.2,.8,.2,1), opacity .6s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        opacity: front ? 1 : 0,
        transition: 'opacity .4s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.2em',
        color: '#0068DF',
        fontVariantNumeric: 'tabular-nums'
      }
    }, "FEATURE ", String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'linear-gradient(90deg, rgba(0,104,223,0.35), rgba(0,104,223,0))'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 500,
        lineHeight: '34px',
        color: '#0B1020'
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 90,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        fontSize: 21,
        fontWeight: 400,
        lineHeight: '30px',
        color: 'rgba(11,16,32,0.72)'
      }
    }, body), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, IX_META_USES.map((_, j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        width: j === i ? 28 : 12,
        height: 3,
        borderRadius: 2,
        background: j === i ? '#0068DF' : 'rgba(11,16,32,0.16)'
      }
    })))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, arrow(-1, k === 0), arrow(1, k === n - 1), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#fff',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(k + 1).padStart(2, '0'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontWeight: 300
    }
  }, " / ", String(n).padStart(2, '0')))));
}

/* Drawer body for Why us: Claude (Williams' thinking partner) vs ... (creative AI partner building on Claude). */
function ClaudeCompare() {
  const row = (name, role, body) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 500,
      color: '#fff'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)'
    }
  }, role)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 23,
      fontWeight: 300,
      lineHeight: '35px',
      color: 'rgba(255,255,255,0.86)',
      textWrap: 'pretty'
    }
  }, body));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, row('Claude', 'THINKING PARTNER', 'Shapes how Williams thinks, plans and performs, from race strategy to car development.'), row('...', 'CREATIVE AI PARTNER', 'Builds on Claude to turn that same intelligence into creative AI experiences for fans and partners.'));
}

/* Vision AI: simple market story first; "Tech Updates" slides the glasses in and swaps to the Meta VR Glasses detail. */
function IXMetaSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(MetaInner, null));
}
function MetaInner() {
  const {
    active
  } = React.useContext(IXCtx);
  const [tech, setTech] = React.useState(false);
  React.useEffect(() => {
    if (!active) setTech(false);
  }, [active]);
  const ease = 'cubic-bezier(.2,.8,.2,1)';
  const eyebrow = label => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "04"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 305,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.72)'
    }
  }, label));
  const h2 = {
    margin: 0,
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: 68,
    lineHeight: '72px',
    letterSpacing: '-0.015em',
    color: '#fff',
    textWrap: 'balance'
  };
  const pill = {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '16px 26px 16px 30px',
    border: 0,
    borderRadius: 999,
    cursor: 'pointer',
    fontFamily: 'var(--font-display)',
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: '0.06em',
    color: '#0B1020',
    background: '#fff',
    boxShadow: '0 0 0 1px rgba(255,255,255,0.2), 0 12px 36px rgba(0,104,223,0.35)'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IXStreaks, {
    d: 250
  }), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 0,
    style: {
      position: 'absolute',
      left: 760,
      top: 120,
      width: 1100,
      height: 760,
      pointerEvents: 'none',
      background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,104,223,0.28) 0%, rgba(0,66,255,0) 100%)',
      filter: 'blur(20px)',
      opacity: tech ? 1 : 0,
      transition: 'opacity .9s ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 900,
      top: 160,
      width: 600,
      height: 522,
      zIndex: 20,
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)',
      background: 'url(assets/meta-glasses-puck.png) center / cover no-repeat',
      opacity: tech ? 1 : 0,
      transform: tech ? 'none' : 'translateX(160px) scale(.97)',
      transition: tech ? `opacity .9s ease 0.35s, transform 1.2s ${ease} 0.35s` : 'opacity .4s ease, transform .5s ease',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 150,
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.45) 50%, rgba(10,12,20,0.78) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 26,
      bottom: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: '#fff'
    }
  }, "META VR GLASSES"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.8)'
    }
  }, "Glasses with pocket compute puck"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 1340,
      top: 620,
      width: 520,
      height: 293,
      zIndex: 20,
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)',
      background: 'url(assets/meta-glasses-inner.png) center / cover no-repeat',
      opacity: tech ? 1 : 0,
      transform: tech ? 'none' : 'translateX(160px) scale(.97)',
      transition: tech ? `opacity .9s ease 0.6s, transform 1.2s ${ease} 0.6s` : 'opacity .4s ease, transform .5s ease',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 150,
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.45) 50%, rgba(10,12,20,0.78) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 26,
      bottom: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: '#fff'
    }
  }, "INSIDE THE FRAME"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.8)'
    }
  }, "Micro-OLED displays with custom-fit lenses"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      top: 0,
      bottom: 40,
      width: 1180,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      opacity: tech ? 0 : 1,
      transform: tech ? 'translateX(-40px)' : 'none',
      pointerEvents: tech ? 'none' : 'auto',
      transition: tech ? 'opacity .45s ease, transform .6s ease' : `opacity .8s ease .45s, transform 1s ${ease} .45s`
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 80
  }, eyebrow('VISION AI')), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 180
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "A New Era For Sports Media")), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 320,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 1000,
      fontWeight: 300,
      fontSize: 30,
      lineHeight: '44px',
      color: 'rgba(255,255,255,0.78)',
      textWrap: 'pretty'
    }
  }, "XR and vision AI are changing how sport is watched. Fans now consume media hands-free, first-person and in real time, and the brands that build for these formats early will own the next generation of attention.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      columnGap: 40
    }
  }, IX_VISION_STATS.map(([n, t], i) => /*#__PURE__*/React.createElement(B, {
    key: n,
    fx: "up",
    d: 460 + i * 120,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 20,
      borderTop: '1.5px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 500,
      lineHeight: '60px',
      color: '#fff',
      fontVariantNumeric: 'tabular-nums'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 21,
      fontWeight: 300,
      lineHeight: '29px',
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty'
    }
  }, t)))), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 860,
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ix-lift",
    onClick: e => {
      e.stopPropagation();
      setTech(true);
    },
    style: pill
  }, "Tech Updates", /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "16",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: 'scaleX(-1)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      top: 0,
      bottom: 0,
      width: 620,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      opacity: tech ? 1 : 0,
      transform: tech ? 'none' : 'translateY(24px)',
      pointerEvents: tech ? 'auto' : 'none',
      transition: tech ? `opacity .8s ease .55s, transform 1s ${ease} .55s` : 'opacity .4s ease, transform .4s ease'
    }
  }, eyebrow('TECH UPDATES'), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Meta VR Glasses"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      alignSelf: 'flex-start',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 16px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.4)',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#fff'
    }
  }), "RELEASING SPRING 2027"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      fontWeight: 300,
      fontSize: 24,
      lineHeight: '36px',
      color: 'rgba(255,255,255,0.78)',
      textWrap: 'pretty'
    }
  }, "Meta designed these glasses around one idea: changing how people experience media. A 5K micro-OLED display in a frame of around 100 grams, powered by a pocket-sized compute puck, turns what you see into the screen. Meta has opened the platform to creators and brands, so the partners who build for it first define what it becomes."), /*#__PURE__*/React.createElement(FeatureStack, {
    reset: tech
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ix-lift",
    onClick: e => {
      e.stopPropagation();
      setTech(false);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px 10px 14px',
      border: 0,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.4)',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "13",
    viewBox: "0 0 12 18",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Back"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: true,
    "aria-disabled": "true",
    onClick: e => e.stopPropagation(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px 10px 14px',
      border: 0,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.4)',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#fff',
      padding: '10px 14px 10px 18px',
      cursor: 'default',
      opacity: 0.4
    }
  }, "Next", /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "13",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: 'scaleX(-1)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))));
}

/* Feasibility: built on Claude (Williams' official thinking partner) by Kinnovate. */
const IX_BUILD_FLOW = [['Guest asks', 'Meta glasses pick up a natural question, hands-free'], ['Claude reasons', 'Answers from team-approved knowledge and live session context'], ['Engineer replies', 'A race-engineer voice responds, straight in the ear'], ['Moments captured', 'Footage is cut into a personal highlight reel']];
function IXClaudeSlide({
  index
}) {
  const partners = [['Claude', 'Official thinking partner of Williams Racing', 'Already embedded across the organisation, Claude works alongside engineers and strategists, shaping how the team thinks, plans and performs in race strategy, car development and operations.'], ['Kinnovate', 'Creative AI partner', 'We build on Claude to create new experiences for Williams and its fans, showcasing what Claude can do while pushing the Williams brand forward.']];
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      top: 176,
      width: 1592,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 80,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "05"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 305,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "HOW WE BUILD IT")), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 180
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-0.015em',
      color: '#fff'
    }
  }, "Built with Williams\u2019 own thinking partner")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 32
    }
  }, partners.map(([name, role, body], i) => /*#__PURE__*/React.createElement(B, {
    key: name,
    fx: "pop",
    d: 340 + i * 140
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-panel"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      height: '100%',
      minHeight: 292,
      borderRadius: 'var(--radius-card)',
      background: 'var(--wr-panel)',
      boxShadow: 'var(--shadow-card)',
      padding: '44px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.14em',
      color: 'rgb(31,199,255)'
    }
  }, role.toUpperCase()), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 44,
      lineHeight: '48px',
      color: '#fff'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontWeight: 300,
      fontSize: 24,
      lineHeight: '36px',
      color: 'rgba(255,255,255,0.78)',
      textWrap: 'pretty'
    }
  }, body)))))), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 700,
    style: {
      marginTop: 64,
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "HOW IT WORKS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.72)'
    }
  }, "Built on hardware and models already in use today")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      columnGap: 32
    }
  }, IX_BUILD_FLOW.map(([t, b], i) => /*#__PURE__*/React.createElement(B, {
    key: t,
    fx: "left",
    d: 800 + i * 140,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 22,
      borderTop: '1.5px solid rgba(255,255,255,0.16)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 500,
      lineHeight: '32px',
      color: '#fff'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 300,
      lineHeight: '32px',
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty'
    }
  }, b))))));
}

/* Why-us panel: same ladder as the Overview list — cyan index, medium title, gradient rule, light body. */
function WhyPanel({
  num,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 584,
      height: 435,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-card)',
      background: 'var(--wr-panel)',
      boxShadow: 'var(--shadow-card)',
      padding: '56px 52px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, num), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 40,
      lineHeight: '44px',
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 180,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 24,
      lineHeight: '36px',
      color: 'rgba(255,255,255,0.78)',
      textWrap: 'pretty'
    }
  }, children));
}
function IXWhyUsSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 200,
    style: {
      position: 'absolute',
      left: 831,
      top: 173
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...ixTitle,
      fontSize: 'var(--type-display-size)',
      lineHeight: 'var(--type-display-lh)',
      whiteSpace: 'nowrap'
    }
  }, "Why us")), /*#__PURE__*/React.createElement(PX, {
    depth: 8,
    l: 346,
    t: 323
  }, /*#__PURE__*/React.createElement(B, {
    fx: "pop",
    d: 400
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-panel"
  }, /*#__PURE__*/React.createElement(WhyPanel, {
    num: "01",
    title: "Bespoke AI software"
  }, "We design and build the complete Williams experience, including the AI character, paddock journey, sponsor integrations, personalised interactions and automated highlight recap software.")))), /*#__PURE__*/React.createElement(PX, {
    depth: 12,
    l: 991,
    t: 323
  }, /*#__PURE__*/React.createElement(B, {
    fx: "pop",
    d: 560
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-panel"
  }, /*#__PURE__*/React.createElement(WhyPanel, {
    num: "02",
    title: "On site operations"
  }, "We manage every aspect on site, from device preparation and guest onboarding to hardware logistics, technical support and content delivery, ensuring a seamless experience for every guest.")))), /*#__PURE__*/React.createElement(IXLogo, {
    l: 855,
    t: 974,
    d: 800
  }), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "right",
    middle: 540,
    width: 720,
    eyebrow: "LEVERAGING CLAUDE",
    meta: "Claude \xD7 ...",
    title: "One intelligence, on track and off it.",
    content: /*#__PURE__*/React.createElement(ClaudeCompare, null)
  }));
}
Object.assign(window, {
  IXPromptsSlide,
  IXLivestreamSlide,
  IXVipSlide,
  IXDemoSlide,
  IXMetaSlide,
  IXClaudeSlide,
  IXWhyUsSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck-saved-2026-09-25/ix-slides-b.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck-saved-2026-09-25/ix-slides-c.jsx
try { (() => {
/* The 3 Users: flip cards. Front = portrait + title; back = commercial value. Long backs grow downward after the flip and close before flipping back. */
const IX_USERS = [{
  n: '01',
  name: 'The Creator',
  img: IXA('photos/creator-selfie-trackside.png'),
  bg: '-299px -377px / 740px 1314px no-repeat',
  head: 'Earned reach, at creator scale',
  body: 'Every creator becomes a live Williams broadcast. Their first-person content puts the team in front of millions of highly engaged followers, building community and generating user-generated content and earned reach at a fraction of the cost of paid media.',
  tags: ['UGC', 'Reach', 'Community']
}, {
  n: '02',
  name: 'The Corporates',
  img: 'assets/vip-garage-guests.png',
  bg: '-227px -220px / 667px 1187px no-repeat',
  head: 'Deeper partnerships, new ones opened',
  body: 'A premium, personalised hospitality experience that strengthens relationships with existing sponsors and gives Williams a distinctive platform to open conversations with prospective partners. Every guest leaves with branded content that keeps the partnership visible long after race day.',
  tags: ['Sponsor retention', 'New partners']
}, {
  n: '03',
  name: 'The Curious',
  img: null,
  head: 'Closer to the sport, from anywhere',
  body: 'Williams is committed to bringing F1’s evolving fanbase closer to the sport through pioneering technologies and new media formats. Whether following their favourite F1 creator through first-person views of the paddock and pit lane, or trying new mediums like the AR experience, this fan isn’t at the circuit, but can feel like they are. It’s how we grow a younger demographic: a new generation of supporters who embrace wide-ranging, cross-cultural interests beyond racing.',
  tags: ['Next-gen fans', 'New media']
}];
const IXU_S = 440;
const ixuGlow = '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)';
function IXUserCard({
  u
}) {
  const {
    active
  } = React.useContext(IXCtx);
  const [flip, setFlip] = React.useState(false);
  const [h, setH] = React.useState(IXU_S);
  const [txt, setTxt] = React.useState(false);
  const inner = React.useRef(null),
    tm = React.useRef([]),
    busy = React.useRef(false);
  const later = (fn, ms) => tm.current.push(setTimeout(fn, ms));
  const clear = () => {
    tm.current.forEach(clearTimeout);
    tm.current = [];
  };
  React.useEffect(() => {
    if (!active) {
      clear();
      setFlip(false);
      setH(IXU_S);
      setTxt(false);
      busy.current = false;
    }
  }, [active]);
  React.useEffect(() => clear, []);
  const toggle = e => {
    e.stopPropagation();
    if (busy.current) return;
    busy.current = true;
    clear();
    if (!flip) {
      const need = Math.max(IXU_S, inner.current ? inner.current.offsetHeight : IXU_S);
      setFlip(true);
      if (need > IXU_S) {
        later(() => setH(need), 760);
        later(() => setTxt(true), 1000);
        later(() => {
          busy.current = false;
        }, 1400);
      } else {
        later(() => setTxt(true), 520);
        later(() => {
          busy.current = false;
        }, 900);
      }
    } else {
      const grown = h > IXU_S;
      setTxt(false);
      if (grown) later(() => setH(IXU_S), 260);
      later(() => setFlip(false), grown ? 820 : 280);
      later(() => {
        busy.current = false;
      }, grown ? 1700 : 1150);
    }
  };
  const face = {
    position: 'absolute',
    inset: 0,
    borderRadius: 'var(--radius-photo)',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    boxShadow: ixuGlow
  };
  const plus = turn => /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 18,
      top: 18,
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'rgba(10,12,20,0.5)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    style: {
      display: 'block',
      transform: `rotate(${turn ? 45 : 0}deg)`
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1V13M1 7H13",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "ix-user",
    onClick: toggle,
    style: {
      width: IXU_S,
      perspective: 1800,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: IXU_S,
      height: h,
      transformStyle: 'preserve-3d',
      transform: `rotateY(${flip ? 180 : 0}deg)`,
      transition: 'transform .8s cubic-bezier(.45,.05,.2,1), height .55s cubic-bezier(.3,.7,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...face,
      background: u.img ? `url(${u.img}) ${u.bg}` : 'repeating-linear-gradient(135deg, #121725 0 14px, #0e1220 14px 28px)'
    }
  }, !u.img && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '42%',
      textAlign: 'center',
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 14,
      letterSpacing: '0.08em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, u.ph || 'portrait to come'), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: u.sub ? 260 : 200,
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.6) 45%, rgba(10,12,20,0.92) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 30,
      right: 30,
      bottom: 26,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, u.eyebrow || `USER ${u.n}`), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: '40px',
      color: '#fff'
    }
  }, u.name), u.sub && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      fontWeight: 300,
      lineHeight: '28px',
      color: 'rgba(255,255,255,0.82)',
      textWrap: 'pretty'
    }
  }, u.sub)), plus(false)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...face,
      transform: 'rotateY(180deg)',
      background: 'linear-gradient(160deg, #161c2d 0%, #0c0f1a 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: inner,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      boxSizing: 'border-box',
      padding: '36px 36px 34px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontFamily: 'var(--font-body)',
      opacity: txt ? 1 : 0,
      transform: txt ? 'none' : 'translateY(8px)',
      transition: 'opacity .4s ease, transform .5s cubic-bezier(.2,.7,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)'
    }
  }, u.backLabel || `${u.name.toUpperCase()} · COMMERCIAL VALUE`), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      paddingRight: 40,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 30,
      lineHeight: '34px',
      color: '#fff',
      textWrap: 'balance'
    }
  }, u.head), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 120,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 20,
      lineHeight: '29px',
      color: 'rgba(255,255,255,0.84)',
      textWrap: 'pretty'
    }
  }, u.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 4
    }
  }, u.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '6px 14px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.07)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.14)',
      fontSize: 15,
      fontWeight: 500,
      color: '#fff'
    }
  }, t)))), plus(true))));
}
function IXUsersSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 150,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "wipe",
    d: 80,
    style: {
      width: 305,
      height: 1.5,
      marginBottom: 30,
      background: 'linear-gradient(90deg, rgba(0,104,223,0) 0%, #0068DF 50%, rgba(0,104,223,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 160
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-0.015em',
      color: '#fff'
    }
  }, "The 3 Users")), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 300,
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 28,
      lineHeight: '38px',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "And the commercial value our AI experiences bring through each, for Williams and Formula 1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 360,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 44,
      zIndex: 5
    }
  }, IX_USERS.map((u, i) => /*#__PURE__*/React.createElement(B, {
    key: u.n,
    fx: "pop",
    d: 450 + i * 150
  }, /*#__PURE__*/React.createElement(IXUserCard, {
    u: u
  })))));
}

/* Portal: one card per idea deck. Cards flip for detail; play buttons are placeholders until the decks are linked. */
const IX_DECKS = [{
  n: '01',
  eyebrow: 'DECK 01',
  name: 'The Williams AI Engineer',
  img: null,
  ph: 'ai engineer image to come',
  sub: 'An immersive AI experience for guests in the paddock and pit lane',
  backLabel: 'THE WILLIAMS AI ENGINEER',
  head: 'Your own race engineer, in your ear',
  body: 'A bespoke AI experience that places VIP guests and partners at the heart of the team during paddock and pit lane walks. A synthetic race engineer delivers live insights, heritage and sponsor stories on demand, while smart glasses capture every moment to relive long after the day.',
  tags: ['Paddock', 'Pit lane', 'Smart glasses']
}, {
  n: '02',
  eyebrow: 'DECK 02',
  name: 'The Williams Time Capsule',
  img: null,
  ph: 'time capsule image to come',
  sub: 'A generative VR journey through Williams history',
  backLabel: 'THE WILLIAMS TIME CAPSULE',
  head: 'Step inside the Williams story',
  body: 'A generative VR experience in the Williams fan zone at every Grand Prix. Narrated by Alex Albon, fans travel through the eras, step inside iconic cars in every Williams livery and relive legendary races. Powered by Claude AI and bespoke to each Grand Prix, no two journeys are the same.',
  tags: ['Fan zone', 'VR', 'Claude AI']
}, {
  n: '03',
  eyebrow: 'DECK 03',
  name: 'The Williams AI Creator Studio',
  img: null,
  ph: 'creator studio image to come',
  sub: 'A cinematic race recap, generated every Grand Prix',
  backLabel: 'THE WILLIAMS AI CREATOR STUDIO',
  head: 'Every race, a cinematic recap',
  body: 'After every race, the Williams AI Creator Studio ingests race data, footage and media to generate a cinematic, high-energy video in a bespoke comic-style aesthetic, made with Higgsfield. A stylised summary of the team’s day, built for Williams’ channels.',
  tags: ['Race data', 'Higgsfield', 'Comic style']
}];
function IXDeckCard({
  u
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ix-user",
    style: {
      position: 'relative',
      width: IXU_S,
      height: IXU_S,
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: ixuGlow,
      background: u.img ? `url(${u.img}) ${u.bg}` : 'repeating-linear-gradient(135deg, #121725 0 14px, #0e1220 14px 28px)'
    }
  }, !u.img && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '30%',
      textAlign: 'center',
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 14,
      letterSpacing: '0.08em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, u.ph), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 300,
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.65) 40%, rgba(10,12,20,0.94) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 30,
      right: 30,
      bottom: 28,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 6,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, u.eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      lineHeight: '32px',
      color: '#fff',
      whiteSpace: 'nowrap'
    }
  }, u.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      fontWeight: 300,
      lineHeight: '28px',
      color: 'rgba(255,255,255,0.82)',
      textWrap: 'pretty'
    }
  }, u.sub), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": 'Open ' + u.name,
    className: "ix-lift",
    onClick: e => e.stopPropagation(),
    style: {
      marginTop: 14,
      height: 46,
      padding: '0 22px 0 18px',
      gap: 12,
      borderRadius: 999,
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: '#fff',
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3), 0 0 24px rgba(0,104,223,0.35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      borderTop: '7px solid transparent',
      borderBottom: '7px solid transparent',
      borderLeft: '11px solid #fff'
    }
  }), "START")));
}
function IXPortalSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index,
    hud: false
  }, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 130,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 40
  }, /*#__PURE__*/React.createElement(IXDS.WilliamsLogo, {
    src: IXA('logo/williams-wordmark-white.png'),
    width: 190
  })), /*#__PURE__*/React.createElement(B, {
    fx: "wipe",
    d: 120,
    style: {
      width: 305,
      height: 1.5,
      margin: '30px 0',
      background: 'linear-gradient(90deg, rgba(0,104,223,0) 0%, #0068DF 50%, rgba(0,104,223,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 200
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-0.015em',
      color: '#fff'
    }
  }, "The Concepts")), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 320,
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 28,
      lineHeight: '38px',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "Three concepts exploring how creative AI can shape the future of the Williams brand"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 420,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 44,
      zIndex: 5
    }
  }, IX_DECKS.map((u, i) => /*#__PURE__*/React.createElement(B, {
    key: u.n,
    fx: "pop",
    d: 450 + i * 150
  }, /*#__PURE__*/React.createElement(IXDeckCard, {
    u: u
  })))));
}

/* Finale: the Why-us logo carries over and glides up; the line reveals word by word; the lap bar runs to the flag. */
const IX_LIGHTS_WORDS = ['It’s', 'lights', 'out', 'and', 'away', 'we', 'go'];
function IXLightsSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index,
    field: false,
    hudFinal: true,
    style: {
      background: '#07080d'
    }
  }, /*#__PURE__*/React.createElement(LightsInner, null));
}
function LightsInner() {
  const {
    nonce
  } = React.useContext(IXCtx);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    key: 'l' + nonce,
    className: "ix-logo-rise",
    style: {
      position: 'absolute',
      left: 855,
      top: 977
    }
  }, /*#__PURE__*/React.createElement(IXDS.WilliamsLogo, {
    src: IXA('logo/williams-wordmark-white.png'),
    width: 210
  })), /*#__PURE__*/React.createElement("h2", {
    key: 't' + nonce,
    "aria-label": "It\u2019s lights out and away we go",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 542,
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: '0 16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 64,
      lineHeight: '72px',
      letterSpacing: '-0.01em',
      color: '#fff'
    }
  }, IX_LIGHTS_WORDS.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-block',
      overflow: 'hidden',
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ix-word",
    style: {
      display: 'inline-block',
      '--d': 1500 + i * 110 + 'ms'
    }
  }, w)))));
}
Object.assign(window, {
  IXUsersSlide,
  IXPortalSlide,
  IXUserCard,
  IXLightsSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck-saved-2026-09-25/ix-slides-c.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck-saved-2026-09-29/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→ and ↑/↓, PgUp/PgDn, Space, Home/End,
 *      number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on
 *      idle; hovering or focusing its controls pins it visible until the
 *      pointer/focus leaves. While presenting it is pointer-summoned only:
 *      mouse movement (or hover/focus) shows it, slide changes never do.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate — the clicked slide becomes the
 *      selected (highlighted) slide; shift-click selects a range and
 *      cmd/ctrl-click toggles slides in and out of the selection
 *      (Escape collapses it back to the current slide); ↑/↓ with a
 *      thumbnail focused to step between slides; Delete/Backspace with a
 *      thumbnail focused to delete the selection (one confirm dialog,
 *      one undoable operation); drag to reorder (dragging collapses a
 *      multi-selection); right-click for
 *      Skip / Move up / Move down / Duplicate / Delete — over a
 *      multi-selection the menu offers "Delete N slides". Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      They also carry no rail number and are excluded from the overlay's
 *      slide count: the remaining slides are numbered contiguously
 *      (Keynote-style), and a skipped CURRENT slide (reachable by rail
 *      click or deep link, never by prev/next) shows '–' as its position.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *  (h) typographic defaults — a zero-specificity stylesheet injected into
 *      the document gives headings `text-wrap: balance` and body text
 *      (p, li, blockquote, figcaption) `text-wrap: pretty`, so slides
 *      avoid widowed/orphaned words by default. Any text-wrap declaration
 *      you author on those elements wins over these defaults.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
      /* Slide edge on the black stage. Dark decks override the canvas
       * fill toward the stage's own black, leaving nothing to mark where
       * the slide ends — the faint white ring keeps the boundary legible
       * there while disappearing into the white of light decks. A
       * box-shadow, not outline/border: it follows any canvas rounding
       * and adds no layout size. */
      box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.12);
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-selected] .num { color: #fff; }
    .thumb[data-selected] .frame {
      outline-color: rgba(217,119,87,0.65);
      box-shadow: 0 0 0 4px rgba(217,119,87,0.18);
    }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame {
      outline-color: #D97757;
      box-shadow: 0 0 0 4px rgba(217,119,87,0.25);
    }
    /* While dragging, the thumb itself is the drag visual (the native drag
       image is suppressed in dragstart so the snapshot can't wander off the
       rail horizontally): elevate it rather than dim it, and let hit-testing
       ignore it so dragover reaches the sibling thumb under the pointer
       instead of the moving element itself. */
    .thumb[data-dragging] { opacity: 0.9; z-index: 30; pointer-events: none; }
    .thumb[data-dragging] .frame {
      outline-color: rgba(255,255,255,0.5);
      box-shadow: 0 6px 24px rgba(0,0,0,0.5);
    }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        /* Size containment: slotted content that overflows the design box
         * (an image-slot's aspect-ratio-derived width, say) must not count
         * toward Chromium's print document width — without this, an
         * abs-positioned child past the page edge shrinks the whole PDF
         * to fit (~75%). Containment is safe here because the definite
         * width/height above size the slide regardless of content.
         * (Absorbed from PR #2619 with its owner's agreement.) */
        contain: size !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      // Explicit multi-selection (slide elements). Empty means the
      // selection is implicitly the current slide, so Delete always has
      // a well-defined target while the rail has focus.
      this._selected = new Set();
      this._selAnchor = null;
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      // Overlay pinning: while the pointer is over the controls toolbar or
      // a control has keyboard focus, the idle-hide timeout must not
      // dismiss it (a pointer parked ON the controls doesn't generate
      // mousemove, so without the pin the toolbar vanishes under the
      // user's cursor after OVERLAY_HIDE_MS). Read by _flashOverlay's
      // hide timeout; cleared by mouseleave/focusout, which resume the
      // normal idle fade.
      this._overlayHover = false;
      this._overlayFocus = false;
      // Capability marker for the host's injected guest bundle. Copies
      // WITHOUT _navArrowsUpDown are frozen per-project builds that
      // predate native ArrowUp/ArrowDown slide nav — the bundle translates
      // Up/Down to Right/Left for those (installDeckArrowKeyTranslator in
      // apps/web/src/guest/edit-mode.ts) and must stand down here or every
      // press would advance twice. A marker, not a version number, so a
      // future capability can add its own independent probe.
      this._navArrowsUpDown = true;
      // Same contract for rail Delete/Backspace: copies WITHOUT
      // _railDeleteKey predate the thumbs' own Delete/Backspace binding,
      // and the bundle opens the delete confirm for them
      // (installDeckRailDeleteFallback in apps/web/src/guest/edit-mode.ts).
      // Current builds consume the key at the thumb (stopPropagation), so
      // the marker is belt-and-braces — it keeps the fallback standing
      // down even if a future build lets the key bubble past the thumb.
      this._railDeleteKey = true;
      // Same contract for skip-aware numbering: copies WITHOUT
      // _railSkipNumbers number every thumb 1..N and count skipped slides
      // in the overlay total — the bundle rewrites both for those
      // (installDeckSkipNumberingFallback in apps/web/src/guest/edit-mode.ts).
      // Here the component renumbers natively, so the fallback stands down.
      this._railSkipNumbers = true;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      this._ensurePrintSizingMeta();
      this._ensureTextWrapDefaults();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        // Self-heal: a departed doc-page may have removed the page-global
        // print-sizing meta this deck deferred to at connect time.
        this._ensurePrintSizingMeta();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (three per view — cur/prev/next).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast. Also ignore data-dc-tpl /
      // data-om-slide-id — host-reserved bookkeeping stamps (the host's
      // ATTR_RESERVED guard bounds them the same way) that structural
      // edits renumber/re-mint on slides whose content didn't change;
      // re-cloning on that churn is what made a slide move flash its
      // thumbnails.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-(validate|slide-id)$|dc-tpl$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            this._renumberRail();
            this._syncCount();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      // Stylesheets that finish loading AFTER the snapshot below never
      // reach the thumbs on their own: a still-pending <link> contributes
      // nothing to document.styleSheets, and nothing re-reads it on load,
      // so the live slides restyle while every clone keeps the stale
      // sheet. dc-runtime's helmet mounts design-system <link>s at render
      // time, so a deck-stage that connects first snapshots before that
      // CSS exists. Funnel late arrivals into the same debounced resync:
      // hook load/error on every current <link>, and watch <head> for
      // links and styles mounted or rewritten later. Deliberately not
      // rAF- or fonts.ready-driven — rAF is throttled/suspended in hidden
      // iframes (thumbnail/presenter contexts), and a font-file load
      // doesn't change cssRules, so it needs no resync.
      this._hookedLinks = [];
      this._hookSheetLoad = el => {
        if (!el.matches || !el.matches('link[rel~="stylesheet" i]')) return;
        if (this._hookedLinks.indexOf(el) !== -1) return;
        this._hookedLinks.push(el);
        el.addEventListener('load', this._onTweakChange);
        el.addEventListener('error', this._onTweakChange);
      };
      document.querySelectorAll('link[rel~="stylesheet" i]').forEach(this._hookSheetLoad);
      this._headObserver = new MutationObserver(records => {
        let resync = false;
        for (const r of records) {
          if (r.type === 'characterData') {
            // Only <style> text is CSS — a ticking <title> shouldn't
            // wake the resync forever.
            const p = r.target.parentNode;
            if (p && p.nodeName === 'STYLE') resync = true;
            continue;
          }
          if (r.type === 'attributes') {
            // A late rel/href rewrite turns an inert <link> into a
            // stylesheet (hook it; its load fires even on cache hits);
            // a media/disabled flip changes effective rules with no
            // event. Resync only if this link is or ever was a
            // stylesheet — favicon/preload/canonical href churn isn't
            // a resync.
            if (r.target.nodeName === 'LINK') {
              this._hookSheetLoad(r.target);
              if (this._hookedLinks.indexOf(r.target) !== -1) resync = true;
            } else if (r.target.nodeName === 'STYLE') resync = true;
            continue;
          }
          // childList: only links and styles carry CSS. A new <link> has
          // no rules until it loads — hook it rather than resync now; a
          // <style> mount/unmount or text-node swap takes effect
          // immediately. _freezeStyle (our beforeprint helper) is skipped
          // on add only — no removal-side guard: _onAfterPrint nulls the
          // ref before the observer fires, so that check would be dead;
          // the one debounced no-op resync per print is harmless.
          if (r.target.nodeName === 'STYLE') resync = true;
          for (const n of r.addedNodes) {
            if (n.nodeName === 'LINK') this._hookSheetLoad(n);else if (n.nodeName === 'STYLE' && n !== this._freezeStyle) resync = true;
          }
          for (const n of r.removedNodes) {
            if (n.nodeName === 'LINK') {
              const hi = this._hookedLinks.indexOf(n);
              if (hi !== -1) {
                this._hookedLinks.splice(hi, 1);
                n.removeEventListener('load', this._onTweakChange);
                n.removeEventListener('error', this._onTweakChange);
                resync = true;
              }
            } else if (n.nodeName === 'STYLE') resync = true;
          }
        }
        if (resync) this._onTweakChange();
      });
      this._headObserver.observe(document.head, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['rel', 'href', 'media', 'disabled']
      });
      this._snapshotAuthorCss();
      // Re-snapshot once any still-loading stylesheet settles — it throws on
      // .cssRules above and silently contributes '' → unstyled thumbs on a
      // cold mount. {once:true}; routed through the debounced handler.
      document.querySelectorAll('link[rel~="stylesheet"]').forEach(l => {
        try {
          if (l.sheet && l.sheet.cssRules) return;
        } catch (e) {}
        l.addEventListener('load', this._onTweakChange, {
          once: true
        });
        l.addEventListener('error', this._onTweakChange, {
          once: true
        });
      });
      if (document.fonts) document.fonts.ready.then(this._onTweakChange, this._onTweakChange);
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      // A disconnect mid-drag never gets a dragend, so the document-level
      // drag tracker must be torn down here like every other global hook.
      this._stopDragTrack();
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._headObserver) this._headObserver.disconnect();
      (this._hookedLinks || []).forEach(l => {
        l.removeEventListener('load', this._onTweakChange);
        l.removeEventListener('error', this._onTweakChange);
      });
      this._hookedLinks = [];
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
      // Drop the text-wrap defaults when the last deck-stage leaves, so a
      // deleted deck's typography can't restyle whatever replaces it.
      // (#deck-stage-print-page keeps its existing keep-forever lifecycle.)
      if (!document.querySelector('deck-stage')) {
        const tw = document.getElementById('deck-stage-text-wrap');
        if (tw) tw.remove();
        const ps = document.getElementById('deck-stage-print-sizing');
        if (ps) ps.remove();
      }
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Pin the controls while the user is interacting with them —
      // hovering, or keyboard focus on a control. The hidden overlay is
      // pointer-events:none, so these only ever engage while it's already
      // visible. 'pointer' source: these are user-interaction paths, so
      // they may show/refresh the overlay even while presenting (see
      // _flashOverlay).
      overlay.addEventListener('mouseenter', () => {
        this._overlayHover = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('mouseleave', () => {
        const hadPin = this._overlayHover;
        this._overlayHover = false;
        // Resume the idle fade — never summon. Without the guard, a
        // mouseleave that fires because the overlay was force-hidden
        // (presenting entry flips it to pointer-events:none under the
        // cursor) would pop the controls right back up.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusin', e => {
        // Keyboard-origin focus only (:focus-visible): a mouse click also
        // focuses the clicked button, and pinning on that would hold the
        // controls open indefinitely after a single click — the hover pin
        // already covers the mouse case. Engines without :focus-visible
        // fall back to pinning on any focus (the safe direction).
        var kb = true;
        try {
          var t = e.target;
          kb = !(t && t.matches && !t.matches(':focus-visible'));
        } catch (err) {
          kb = true;
        }
        if (!kb) return;
        this._overlayFocus = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusout', e => {
        // Only unpin when focus truly left the toolbar — tabbing between
        // its buttons stays pinned. relatedTarget is null when focus
        // leaves the document entirely; treat that as leaving.
        if (e.relatedTarget && overlay.contains(e.relatedTarget)) return;
        const hadPin = this._overlayFocus;
        this._overlayFocus = false;
        // Resume-the-fade only (see mouseleave): a click-focused button
        // losing focus to a later stage click must not summon the
        // controls mid-presentation.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        const list = this._menuIndices;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(list && list.length ? list : [i]);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) {
          this._closeConfirm();
          this._focusCurrentThumb();
        }
      });
      confirm.querySelector('.cancel').addEventListener('click', () => {
        this._closeConfirm();
        this._focusCurrentThumb();
      });
      confirm.querySelector('.danger').addEventListener('click', () => {
        // Re-resolve at click time — the elements are the user's actual
        // selection; their indices may have shifted since confirm-open.
        const list = (this._confirmEls || []).map(el => this._slides.indexOf(el)).filter(i => i >= 0);
        this._closeConfirm();
        this._deleteSlides(list);
        this._focusCurrentThumb();
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Announces the deck's print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] content "default-landscape" — a
     *  deck prints one slide per page on the user's paper size, landscape.
     *  The export path probes the meta to decide what true paper size to
     *  inject at print time (the @page px rule above stays as the
     *  standalone-print fallback; an injected later rule overrides it).
     *  Never overrides an authored meta or another component's; removed
     *  when the last deck-stage leaves. data-omelette-injected keeps it
     *  out of serialized source. */
    _ensurePrintSizingMeta() {
      if (document.querySelector('meta[name="omelette-print-sizing"]')) return;
      const tag = document.createElement('meta');
      tag.id = 'deck-stage-print-sizing';
      tag.name = 'omelette-print-sizing';
      tag.content = 'default-landscape';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** Typographic defaults for slide text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins. Lives in the document,
     *  not the shadow root, for two reasons: document rules reach the
     *  slotted (light DOM) slides, and _snapshotAuthorCss copies document
     *  stylesheets into each thumbnail's shadow root, so the thumbs wrap
     *  the same way — a deck-stage-scoped selector would match nothing
     *  there. data-omelette-injected marks the tag for the host editor
     *  to strip at serialize, so it is never written back as authored
     *  source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('deck-stage-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'deck-stage-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
      // The deck just changed under any open rail surface — an open
      // confirm or menu is a question about the OLD deck (its labels and
      // counts may now lie), so close them rather than let a stale
      // answer fire. The element-held selection re-resolves, but the
      // user should re-read what they're deleting.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        this._closeConfirm();
        // The dialog held focus (danger button); hand it back to the rail.
        this._focusCurrentThumb(true);
      }
      if (this._menu && this._menu.hasAttribute('data-open')) this._closeMenu();
      // Editor-mode deletes rebuild the rail through here; a confirmed
      // delete that started from the keyboard still owes focus to the
      // (new) current thumb.
      if (this._pendingRailRefocus) this._focusCurrentThumb(true);
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      // Selection is element-keyed: drop entries whose slide is gone
      // (deleted, or replaced wholesale by a host re-render).
      if (this._selected && this._selected.size) {
        this._selected.forEach(s => {
          if (!this._slideSet.has(s)) this._selected.delete(s);
        });
      }
      if (this._selAnchor && !this._slideSet.has(this._selAnchor)) this._selAnchor = null;
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._syncCount();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      this._syncCount();
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay(source) {
      // Host posts __omelette_presenting while in fullscreen/tab
      // presentation mode. While presenting, the overlay is
      // pointer-summoned only: it appears on mouse movement and while the
      // user hovers/focuses the controls (source 'pointer'), but never
      // flashes on slide changes or nav-key presses (the default 'auto'
      // source) — a keyboard-driven advance must not blink chrome at the
      // audience. Outside presenting, both sources flash as before.
      if (!this._overlay) return;
      if (this._presenting && source !== 'pointer') return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        // Pinned by hover or focus on the controls — keep them up. The
        // matching mouseleave/focusout re-flashes, so the idle fade
        // resumes from that moment.
        if (this._overlayHover || this._overlayFocus) return;
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle. 'pointer'
      // source: mouse movement summons the controls even while presenting.
      this._flashOverlay('pointer');
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        // Unchanged value → idempotent re-delivery (the guest bundle
        // re-posts when a deck mounts mid-presentation, and host + bundle
        // can both deliver at entry). Skip the resets: re-running the
        // entry work on every delivery would dismiss the pointer-summoned
        // overlay under a hovering cursor and close menus on every slide
        // change. Mirrors the preview_mode branch's unchanged-value guard
        // below.
        if (d.__omelette_presenting !== !!this._presenting) {
          this._presenting = d.__omelette_presenting;
          // A presenting transition invalidates interaction pins: carried
          // across the flip, a stale pin would hold the first summoned
          // overlay open with no pointer anywhere near it. Hide on BOTH
          // transitions: entry cleans the audience's screen, and on exit a
          // pin-skipped hide timeout may have left data-visible set with
          // no timer armed — without this, the footer would linger in the
          // editor until the next mousemove. The next interaction
          // re-summons it either way.
          this._overlayHover = false;
          this._overlayFocus = false;
          if (this._overlay) {
            this._overlay.removeAttribute('data-visible');
            if (this._hideTimer) clearTimeout(this._hideTimer);
          }
          this._syncRailHidden();
          this._closeMenu();
          this._closeConfirm();
          this._fit();
          this._scaleThumbs();
        }
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
        // A refused op never re-renders, so slotchange won't restore the
        // keyboard flow's focus — do it here. (Applied ops refocus in
        // _onSlotChange, after the rail has been rebuilt.)
        if (d.applied === false && this._pendingRailRefocus) {
          this._focusCurrentThumb(true);
        }
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing. composedPath()[0], not e.target: a
      // window-level keydown retargets e.target to the shadow host, which
      // would miss an <input> or contenteditable inside a web component on
      // a slide (same reason _onTap uses composedPath).
      const t = e.composedPath ? e.composedPath()[0] : e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          this._focusCurrentThumb();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.key === 'Escape' && this._selected.size) {
        // Collapse the multi-selection back to the current slide (the
        // implicit selection), not to nothing.
        this._clearSelection();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'ArrowDown' && !e.defaultPrevented) {
        // ↓/↑ page slides like →/← (Keynote/PowerPoint parity). Window
        // level only: rail thumbs keep their own ↑/↓ walk (their handler
        // stops propagation before this one), and the typing guard above
        // already covers inputs and contenteditable slide content.
        // Deliberate tradeoff: like Space/PageDown before them, these are
        // scroll keys — slide content that wants keyboard scrolling claims
        // them with preventDefault, which this branch honors (checked here
        // and not for the long-standing keys above, so ←/→/Space behavior
        // is unchanged and ↑/↓ behave identically on frozen copies, whose
        // translator in the guest bundle applies the same guard).
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowUp' && !e.defaultPrevented) {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      // User-initiated navigation collapses a multi-selection down to
      // the (implicit) current slide, like Keynote's arrow keys. 'click'
      // handles its own selection; programmatic reasons leave it alone.
      if (reason === 'keyboard' || reason === 'tap') this._clearSelection();
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
      this._thumbs = next;
      this._renumberRail();
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          // The live-dragged thumb is positioned by the drag tracker; a
          // FLIP transform+transition here would clobber it mid-drag.
          if (thumb === this._dragThumb) return;
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', e => {
        const i = idx();
        const slide = this._slides[i];
        // WebKit doesn't focus a plain element on click — focus
        // explicitly so Delete/Backspace works right after selecting a
        // slide by mouse. preventScroll: _syncRail owns the rail's
        // scroll position.
        thumb.focus({
          preventScroll: true
        });
        if (e.shiftKey || e.metaKey || e.ctrlKey) {
          // Multi-select gestures adjust the selection without
          // navigating (Keynote/Figma convention).
          e.preventDefault();
          if (e.shiftKey) {
            // Range from the anchor (last plain/cmd-clicked slide;
            // falls back to the current slide) to here, replacing any
            // previous range.
            let a = this._selAnchor ? this._slides.indexOf(this._selAnchor) : -1;
            if (a < 0) {
              a = this._index;
              this._selAnchor = this._slides[a] || null;
            }
            this._selected.clear();
            for (let j = Math.min(a, i); j <= Math.max(a, i); j++) {
              this._selected.add(this._slides[j]);
            }
          } else if (slide) {
            // Toggle. An empty explicit selection implicitly holds the
            // current slide — materialize it first so cmd-clicking a
            // second slide selects both.
            if (!this._selected.size && i !== this._index && this._slides[this._index]) {
              this._selected.add(this._slides[this._index]);
            }
            if (this._selected.has(slide)) this._selected.delete(slide);else {
              this._selected.add(slide);
              this._selAnchor = slide;
            }
          }
          this._syncSelection();
          return;
        }
        this._clearSelection();
        this._selAnchor = slide || null;
        this._go(i, 'click');
      });
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        // Delete/Backspace with the rail focused deletes this thumb's
        // slide through the same confirm dialog as the menu item.
        // Listening on the thumb (never window-level) is what keeps
        // typing in the notes panel / slide inputs from ever landing
        // here; the target check is belt-and-braces for anything
        // focusable that ends up inside a thumb.
        if ((e.key === 'Delete' || e.key === 'Backspace') && !e.metaKey && !e.ctrlKey && !e.altKey) {
          const t = e.target;
          if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
          e.preventDefault();
          e.stopPropagation();
          // Same refusals as the menu item: never every slide, never
          // while a prior structural op is waiting on its ack. The
          // whole-deck refusal is announced (the menu greys its item
          // out; a silently dead key reads as breakage). The rail-lock
          // refusal stays silent: it lasts one ack round-trip and
          // matches the existing single-delete behavior.
          if (this._railLock) return;
          // Explicit selection wins; otherwise the focused thumb (which
          // plain click and ↑/↓ keep equal to the current slide).
          const sel = this._selected.size ? this._selectionIndices() : [idx()];
          if (sel.length >= this._slides.length) {
            this._showNotice(sel.length === 1 ? 'The last slide can’t be deleted.' : 'At least one slide has to stay — the whole deck can’t be deleted.');
            return;
          }
          this._openConfirm(sel);
          return;
        }
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        // v1: dragging moves ONE slide, so a multi-selection would lie
        // about what's about to move — collapse it. (Group drag would
        // instead keep it and emit a batched move.)
        this._clearSelection();
        this._dragFrom = idx();
        // Deferred to the next frame: the [data-dragging] rule sets
        // pointer-events:none on the drag SOURCE, and applying that
        // synchronously inside dragstart makes Chromium (and WebKit) cancel
        // the drag — dragstart then an immediate dragend, no dragover or
        // drop, so thumbnails could not be reordered by dragging at all.
        // One frame is invisible and lands before the first dragover needs
        // the source to be hit-test-transparent. Guarded twice so the
        // attribute can never strand on a thumb that is no longer being
        // dragged (pointer-events:none would leave it unclickable for the
        // session): the pending frame is cancelled in dragend
        // (_cancelDragAttr), and the callback itself re-checks that THIS
        // thumb is still the live drag source (a new drag on another thumb
        // re-points the drag state). Deliberately NOT cancelled in
        // _stopDragTrack — _startDragTrack calls it at the start of every
        // drag, which would kill the mark this dragstart just scheduled
        // (see _cancelDragAttr).
        this._dragAttrRaf = requestAnimationFrame(() => {
          this._dragAttrRaf = null;
          if (this._dragFrom != null && this._dragThumb === thumb) {
            thumb.setAttribute('data-dragging', '');
          }
        });
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
        // Constrain the drag visual to the rail's vertical axis. The
        // browser's default drag image is a free-floating snapshot that
        // follows the OS cursor in BOTH axes and the DnD API offers no way
        // to constrain it — so swap it for a transparent stand-in and move
        // the thumb itself along Y instead (_startDragTrack). The drop
        // logic below always read only clientY; this makes the visual
        // match it.
        try {
          e.dataTransfer.setDragImage(this._dragBlank(), 0, 0);
        } catch (err) {}
        this._startDragTrack(thumb, e.clientY);
      });
      thumb.addEventListener('dragend', () => {
        this._cancelDragAttr();
        thumb.removeAttribute('data-dragging');
        this._stopDragTrack();
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      // The clone participates in the document's flat tree, so the
      // templates' position-based CSS page counters (.slide
      // { counter-increment: page }) would count every materialized
      // thumb before the real slides — folios print offset by the
      // thumb count (slide 2 reading "7" on a five-slide deck).
      // Neutralize the counter on the clone and drop its folio pill:
      // a thumbnail's own page number is unreadable at thumb scale
      // anyway, and the real slides' numbers stay truthful.
      clone.style.counterIncrement = 'none';
      clone.querySelectorAll('.page-foot').forEach(pf => pf.remove());
      // Canvas bitmaps don't clone — swap each cloned canvas for an <img>
      // of the live pixels. Best-effort: tainted canvases throw (left
      // as-is); zero-size are skipped; WebGL without preserveDrawingBuffer
      // reads back blank and the thumb gets a blank img (same as before).
      const liveCanvases = entry.slide.querySelectorAll('canvas');
      const cloneCanvases = clone.querySelectorAll('canvas');
      cloneCanvases.forEach((cv, i) => {
        const live = liveCanvases[i];
        if (!live || !live.width || !live.height) return;
        try {
          const img = document.createElement('img');
          img.src = live.toDataURL();
          img.alt = '';
          img.style.cssText = cv.style.cssText;
          img.className = cv.className;
          img.width = live.width;
          img.height = live.height;
          // Author CSS that sized the <canvas> via tag selector won't match
          // the <img> — pin the live canvas's laid-out box on the snapshot.
          if (live.clientWidth) {
            img.style.width = live.clientWidth + 'px';
            img.style.height = live.clientHeight + 'px';
          }
          cv.replaceWith(img);
        } catch (e) {}
      });
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      // Parity with _inertify: transient top-layer UI never belongs in a
      // static thumb.
      clone.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes (_neuter) so a component-heavy deck doesn't run
      // N copies of each component's mount logic in the rail. Children
      // are preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content, and a shadow tree cloned along
      // via attachShadow({clonable:true}) (e.g. <image-slot>) moves onto
      // the box so the thumb shows the component's rendered content. The
      // querySelectorAll NodeList is static, so nested custom elements in
      // the moved subtree are still visited on later iterations.
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = this._neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
      // Strip ids only now: a defined custom element upgrades synchronously
      // during cloneNode and re-renders on attribute callbacks, so removing
      // 'id' any earlier resets components (e.g. <image-slot> falls back to
      // its author src). Post-neuter, only inert boxes and plain elements
      // remain, where the strip is just the usual duplicate-id hygiene.
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      // Clones are display-only: inert removes anything focusable inside
      // them from the tab order, so the rail's Delete/Backspace handler
      // can never see a (retargeted) key press from cloned content.
      host.inert = true;
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Replace a cloned custom element with an inert box (see the comment
     *  in _materialize). A shadow tree cloned along via {clonable:true}
     *  moves onto the box, so the thumb shows the component's real content
     *  with zero component logic; :host rules in the moved <style> match
     *  the box, and the preserved data-* attrs keep :host([data-…])
     *  selectors working. */
    _neuter(el) {
      // Adopt the shadow only when the cloned root carries renderable
      // content. A constructor-attach / connectedCallback-render component
      // clones into an empty (or style-only) slotless root — adopting that
      // would hide the light children the box is about to receive and drop
      // the placeholder chrome. Such components fall back to the plain box.
      let sr = el.shadowRoot;
      if (sr) {
        let renderable = false;
        for (let n = sr.firstElementChild; n; n = n.nextElementSibling) {
          const t = n.tagName;
          if (t !== 'STYLE' && t !== 'LINK') {
            renderable = true;
            break;
          }
        }
        if (!renderable) sr = null;
      }
      const box = document.createElement('div');
      box.style.cssText = (el.getAttribute('style') || '') + (sr ? '' : ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);');
      box.className = el.className;
      // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
      // descendant selectors still match the neutered root — but not
      // pointer-interaction transients (a mid-reframe/mid-drag re-clone
      // would render the interaction chrome statically in the thumb).
      for (const a of el.attributes) {
        const n = a.name;
        if (n === 'data-reframe' || n === 'data-panning' || n === 'data-over') continue;
        if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
          box.setAttribute(n, a.value);
        }
      }
      while (el.firstChild) box.appendChild(el.firstChild);
      if (sr) this._adoptShadow(box, sr);
      return box;
    }

    /** Move a cloned shadow tree onto a neutered thumbnail box: attach an
     *  open root on the box, carry adoptedStyleSheets, move the children,
     *  then make the content inert. */
    _adoptShadow(box, sr) {
      let root;
      try {
        root = box.attachShadow({
          mode: 'open'
        });
      } catch (e) {
        return;
      }
      // Engine-cloned shadow roots never carry adoptedStyleSheets, but a
      // defined component's clone is upgrade-rebuilt (constructor runs
      // during cloneNode), so sheets it adopts there are present and
      // shared by reference — carry them.
      if (sr.adoptedStyleSheets && sr.adoptedStyleSheets.length) {
        try {
          root.adoptedStyleSheets = Array.prototype.slice.call(sr.adoptedStyleSheets);
        } catch (e) {}
      }
      // Clone rather than move: moving preserves listeners an upgraded
      // clone's constructor attached inside its shadow; cloning sheds
      // them, keeping thumbs free of component logic categorically.
      for (let n = sr.firstChild; n; n = n.nextSibling) {
        root.appendChild(n.cloneNode(true));
      }
      this._inertify(root);
    }

    /** Strip anything executable from copied shadow content and apply the
     *  same custom-element/media/img policy as the light-DOM clone.
     *  (Canvases inside copied shadow content stay blank — there is no
     *  live↔clone pairing across shadow boundaries to snapshot from.) */
    _inertify(root) {
      root.querySelectorAll('script').forEach(s => s.remove());
      // Transient top-layer UI can never belong in a static thumb. (A
      // cloned [popover] is display:none anyway — open state doesn't
      // clone — this just makes it categorical.)
      root.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      // Same heavy-media policy as the light-DOM clone above.
      root.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      root.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      root.querySelectorAll('*').forEach(el => {
        for (let i = el.attributes.length - 1; i >= 0; i--) {
          if (/^on/i.test(el.attributes[i].name)) {
            el.removeAttribute(el.attributes[i].name);
          }
        }
      });
      root.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Nested custom elements inside copied shadow content would upgrade
      // on append — same treatment as the light DOM. querySelectorAll is
      // static, so boxes created mid-walk don't re-enter this loop.
      root.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }

    /** 1×1 transparent stand-in for setDragImage. Kept attached (offscreen
     *  in the shadow root) because some engines ignore a drag image that
     *  isn't in a rendered tree. Created lazily, reused for every drag. */
    _dragBlank() {
      if (!this._dragBlankEl) {
        const c = document.createElement('canvas');
        c.width = 1;
        c.height = 1;
        c.style.cssText = 'position:fixed;left:-9999px;top:0;width:1px;height:1px;';
        this._root.appendChild(c);
        this._dragBlankEl = c;
      }
      return this._dragBlankEl;
    }

    /** Vertical-only drag tracking: translate the dragged thumb along Y to
     *  follow the pointer, clamped to the rail, ignoring X entirely. A
     *  document-level capture listener is used because native dragover
     *  fires wherever the pointer is — so the thumb keeps tracking even
     *  while the pointer wanders over the stage — and it is removed the
     *  moment the drag ends. getBoundingClientRect already reflects the
     *  current transform, so the layout position is recovered by
     *  subtracting the translation applied so far (rail auto-scroll moves
     *  the layout position mid-drag; see the rail dragover handler). */
    _startDragTrack(thumb, startY) {
      // A lost dragend (the dragged thumb removed mid-drag by a remote
      // edit's re-render — browsers fire no dragend on a disconnected
      // source) would otherwise leave the previous listener installed
      // forever once this overwrite lands.
      this._stopDragTrack();
      this._dragThumb = thumb;
      // The FLIP reorder animation drives transform through a transition;
      // the live drag must not inherit one, or the thumb rubber-bands.
      // Killed BEFORE the grab-offset read: mid-FLIP the rect includes the
      // interpolated transform, which would bake a constant offset into
      // the whole drag.
      thumb.style.transition = 'none';
      this._dragGrab = startY - thumb.getBoundingClientRect().top;
      this._dragTy = 0;
      this._onDragTrack = e => {
        const t = this._dragThumb;
        if (!t) return;
        const rail = this._rail.getBoundingClientRect();
        const r = t.getBoundingClientRect();
        // A transformed ancestor (author wraps the deck in a CSS scale;
        // canvas-mode pan/zoom) scales viewport deltas: translateY(N)
        // moves the rect by s·N. Measure s from the thumb itself (rect is
        // scaled, offsetHeight is layout px) so the feedback loop stays
        // exact instead of oscillating at s ≥ 2. offsetHeight is 0 only
        // when unrendered — nothing to track then, treat as unscaled.
        const s = t.offsetHeight ? r.height / t.offsetHeight : 1;
        const layoutTop = r.top - s * this._dragTy;
        let want = e.clientY - this._dragGrab;
        want = Math.max(rail.top, Math.min(want, rail.bottom - r.height));
        this._dragTy = (want - layoutTop) / s;
        t.style.transform = 'translateY(' + this._dragTy + 'px)';
      };
      document.addEventListener('dragover', this._onDragTrack, true);
    }

    /** Cancel the thumb's deferred data-dragging mark if its frame has not
     *  fired yet — see the dragstart deferral. Called from dragend only:
     *  _stopDragTrack is the wrong home for it, because _startDragTrack
     *  defensively calls _stopDragTrack at the START of every drag (its
     *  lost-dragend reset), so a cancel there kills the mark the same
     *  dragstart just scheduled. The strand that matters — pointer-
     *  events:none left on a CONNECTED thumb that is no longer being
     *  dragged — is closed two ways: dragend cancels the pending frame
     *  here, and the frame callback re-checks that THIS thumb is still the
     *  live drag source (_dragFrom and _dragThumb, both cleared/re-pointed
     *  by dragend or by a new drag). The remaining lost-dragend case — the
     *  source slide removed mid-drag, so no dragend fires — ends with that
     *  thumb discarded by the rail reconcile (thumbs are keyed by slide
     *  element and a removed slide's thumb is not reused), so a mark landing
     *  on it is on a discarded node. The risk this defer adds over the old
     *  synchronous set is therefore the narrow rAF-after-dragend window,
     *  which the dragend cancel covers. */
    _cancelDragAttr() {
      if (this._dragAttrRaf != null) {
        cancelAnimationFrame(this._dragAttrRaf);
        this._dragAttrRaf = null;
      }
    }
    _stopDragTrack() {
      if (this._onDragTrack) {
        document.removeEventListener('dragover', this._onDragTrack, true);
        this._onDragTrack = null;
      }
      const t = this._dragThumb;
      if (t) {
        t.style.transform = '';
        t.style.transition = '';
      }
      this._dragThumb = null;
      this._dragTy = 0;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      // Right-clicking a thumb OUTSIDE the selection collapses the
      // selection to that thumb (platform convention) — the menu then
      // always targets exactly what's highlighted.
      if (this._selected.size && slide && !this._selected.has(slide)) {
        this._selected.clear();
        this._selected.add(slide);
        this._selAnchor = slide;
        this._syncSelection();
      }
      const sel = this._selectionIndices();
      const bulk = sel.length > 1;
      this._menuIndices = bulk ? sel : [i];
      // Bulk mode offers only the one batched op that exists (delete);
      // the single-slide items address one index and stay hidden.
      this._menu.querySelectorAll('[data-act="skip"], [data-act="up"], [data-act="down"], [data-act="duplicate"], hr').forEach(el => {
        el.style.display = bulk ? 'none' : '';
      });
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      const del = this._menu.querySelector('[data-act="delete"]');
      del.textContent = bulk ? 'Delete ' + sel.length + ' slides' : 'Delete slide';
      del.disabled = bulk ? sel.length >= this._slides.length : this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
      this._menuIndices = null;
    }
    _openConfirm(sel) {
      if (!this._confirm) return;
      const list = Array.isArray(sel) ? sel : [sel];
      // Hold the slide ELEMENTS: the deck can re-render while the dialog
      // is open (collaborator/agent edit), and a frozen index list would
      // then address the wrong slides — a same-count reorder even passes
      // the host's witness guard. Elements re-resolve at danger-click.
      this._confirmEls = list.map(i => this._slides[i]).filter(Boolean);
      // Title uses the rail's skip-aware label, so the confirm names the
      // number the user right-clicked (a raw index would disagree with the
      // rail whenever a skipped slide precedes the target).
      const lbl = list.length === 1 ? this._slideLabel(list[0]) : '';
      this._confirm.querySelector('.title').textContent = list.length === 1 ? lbl ? 'Delete slide ' + lbl + '?' : 'Delete skipped slide?' : 'Delete ' + list.length + ' slides?';
      this._confirm.querySelector('.msg').textContent = list.length === 1 ? 'This slide will be removed from the deck.' : 'These slides will be removed from the deck.';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmEls = null;
    }

    /** Return focus to the current slide's thumb so the keyboard flow
     *  (Delete → Enter → Delete …) survives the confirm dialog closing.
     *  Without 'force', skipped while a structural op is in flight
     *  (_railLock): _index is then an optimistic post-op value that
     *  doesn't address the pre-op thumb list — _pendingRailRefocus stays
     *  armed and the ack/slotchange paths call back with force once the
     *  rail reflects the op. Skipped (and disarmed) while the rail is
     *  inert (hidden / presenting). */
    _focusCurrentThumb(force) {
      if (!force && this._railLock) return;
      this._pendingRailRefocus = false;
      // Never yank focus from content the user reached meanwhile (e.g.
      // an input inside a slide during the ack round-trip) — only
      // reclaim it from the rail's own surfaces, or from nowhere.
      const ae = this._root && this._root.activeElement;
      const ours = !ae || this._rail && this._rail.contains(ae) || this._confirm && this._confirm.contains(ae) || this._menu && this._menu.contains(ae);
      const lightAe = document.activeElement;
      const lightOk = !lightAe || lightAe === document.body || lightAe === this;
      if (!ours || !lightOk) return;
      const cur = this._thumbs && this._thumbs[this._index];
      if (cur && this._rail && !this._rail.inert) cur.thumb.focus({
        preventScroll: true
      });
    }

    /** Selection as sorted slide indices. An empty explicit selection
     *  means the current slide (the rail's implicit selection). */
    _selectionIndices() {
      const out = [];
      this._slides.forEach((s, i) => {
        if (this._selected.has(s)) out.push(i);
      });
      if (!out.length && this._slides[this._index]) out.push(this._index);
      return out;
    }
    _clearSelection() {
      // Re-anchor before the early return: a plain click followed by
      // arrow/tap navigation leaves _selected empty but the anchor
      // pointing at the old slide, and a later shift-click would range
      // from there instead of the current slide.
      this._selAnchor = null;
      if (!this._selected.size) return;
      this._selected.clear();
      this._syncSelection();
    }
    _syncSelection() {
      (this._thumbs || []).forEach(t => {
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    /** True when the page's DC runtime reports a live template stream for
     *  any component here (newer support.js bundles only — older bundles
     *  lack the signal and the HOST-side gate covers those decks). Rail
     *  mutations are refused for the duration: a mid-stream op addresses
     *  slide indices the stream is rewriting underneath the click. */
    _streamActive() {
      try {
        return !!window.__dcUpdate && typeof window.__dcStreaming === 'function' && window.__dcStreaming();
      } catch (e) {
        return false;
      }
    }

    /** Transient in-stage notice for a refused mid-stream rail op. */
    _showStreamNotice() {
      this._showNotice('Claude is still updating this deck — try again when it finishes.');
    }

    /** Transient bottom-center toast for a refused rail gesture. */
    _showNotice(text) {
      if (!this._root) return;
      let n = this._streamNotice;
      if (!n) {
        n = document.createElement('div');
        n.className = 'export-hidden';
        n.setAttribute('data-omelette-chrome', '');
        n.setAttribute('role', 'status');
        n.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);' + 'background:rgba(22,22,22,.94);color:#fff;' + 'font:500 13px/1.4 system-ui,sans-serif;padding:8px 14px;' + 'border-radius:8px;z-index:2147483646;pointer-events:none;' + 'opacity:0;transition:opacity .15s ease';
        this._root.append(n);
        this._streamNotice = n;
      }
      n.textContent = text;
      n.style.opacity = '1';
      if (this._streamNoticeTimer) clearTimeout(this._streamNoticeTimer);
      this._streamNoticeTimer = setTimeout(() => {
        n.style.opacity = '0';
      }, 2600);
    }
    _emitDcOp(op, slide, lock, newIndex) {
      // Mid-stream guard: refuse the gesture outright — no lock, no
      // optimistic index change, no emit, no self-mutation (returning
      // true short-circuits every caller). The host applies the same
      // gate for decks whose committed support.js predates the signal.
      if (this._streamActive()) {
        this._showStreamNotice();
        return true;
      }
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }

    /** Delete a set of slides (pre-op indices). One slide delegates to
     *  _deleteSlide — the plain 'remove' op — so single deletes keep
     *  working against hosts that predate 'removeMany'. A bulk delete is
     *  ONE op: one host write, one undo snapshot, and indices that all
     *  address the same pre-op deck (N acked single ops would each need
     *  a fresh witness). */
    _deleteSlides(list) {
      if (this._railLock || !list) return;
      const indices = [...new Set(list)].filter(i => this._slides[i]).sort((a, b) => a - b);
      if (!indices.length || indices.length >= this._slides.length) return;
      if (indices.length === 1) {
        this._deleteSlide(indices[0]);
        return;
      }
      // Mirrors _duplicateSlide: check the stream gate before doing any
      // work (_emitDcOp re-checks).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const els = indices.map(i => this._slides[i]);
      const del = new Set(indices);
      const cur = this._index;
      // New current index in post-op space: shift the kept slide left by
      // the deletions below it; if the current slide itself is deleted,
      // land on the nearest survivor (after, else before).
      const below = n => indices.reduce((k, x) => k + (x < n ? 1 : 0), 0);
      let ni;
      if (!del.has(cur)) {
        ni = cur - below(cur);
      } else {
        let s = -1;
        for (let j = cur + 1; j < this._slides.length; j++) {
          if (!del.has(j)) {
            s = j;
            break;
          }
        }
        if (s === -1) {
          for (let j = cur - 1; j >= 0; j--) {
            if (!del.has(j)) {
              s = j;
              break;
            }
          }
        }
        ni = s < 0 ? 0 : s - below(s);
      }
      // Emit-path deletes can't refocus until the host re-renders; arm
      // the flag at emit time (never on a refused/no-op path) so
      // ack/slotchange can finish the keyboard flow's focus hand-back.
      // The local path clears it via the caller's _focusCurrentThumb().
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'removeMany',
        indices
      }, els[0], true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      els.forEach(el => el.remove());
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      // Mint ids + copy component state BEFORE emitting, so the op can
      // carry the id map — but never mint for an op the stream gate is
      // about to refuse (_emitDcOp re-checks; this avoids orphaned keys).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      const ids = this._remintDuplicateIds(copy);
      const op = {
        op: 'duplicate'
      };
      if (ids) op.ids = ids;
      if (this._emitDcOp(op, slide, true, i + 1)) return;
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }

    /** Duplicate id policy. Plain ids are stripped — two live slides must
     *  not share one id. But a component that KEYS persistent state by id
     *  (image-slot's sidecar photo) would silently lose that state with
     *  its id. Such a component opts out of the strip by exposing a
     *  static cloneSlot(fromId, isFree) that copies its stored state
     *  under a fresh id of its choosing and returns that id. The old→new
     *  map is returned (or null) and rides the dc-op so the host writes
     *  the SAME ids into source — without that, the copy's state would
     *  revert on reload (docs/dc-ops.md). */
    _remintDuplicateIds(copy) {
      const ids = {};
      let found = false;
      const used = new Set();
      const idOk = /^[A-Za-z][\w-]{0,63}$/;
      const isFree = id => idOk.test(id) && !used.has(id) && !document.getElementById(id);
      copy.querySelectorAll('[id]').forEach(el => {
        const tag = el.tagName.toLowerCase();
        const cls = tag.indexOf('-') >= 0 && customElements.get(tag);
        let next = null;
        if (el.id && cls && typeof cls.cloneSlot === 'function') {
          try {
            next = cls.cloneSlot(el.id, isFree);
          } catch (e) {}
        }
        // Re-checked here so a misbehaving static can't smuggle a dupe
        // or an unsafe value into the document / the emitted op.
        if (typeof next === 'string' && isFree(next)) {
          ids[el.id] = next;
          used.add(next);
          el.id = next;
          found = true;
        } else {
          el.removeAttribute('id');
        }
      });
      return found ? ids : null;
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }

    /** Rail numbering, skip-aware: a skipped slide shows no number and the
     *  rest stay contiguous (1..visible), so the labels match the positions
     *  the overlay counter reports. Cheap (text writes are diffed), safe to
     *  call after any reconcile or skip toggle. */
    _renumberRail() {
      let v = 0;
      (this._thumbs || []).forEach(t => {
        const label = t.slide.hasAttribute('data-deck-skip') ? '' : String(++v);
        if (t.num.textContent !== label) t.num.textContent = label;
      });
    }

    /** Skip-aware label for slide i — the same numbering _renumberRail
     *  paints: '' for a skipped slide, else its 1-based position among
     *  non-skipped slides. Display surfaces (e.g. the delete confirm)
     *  use this so they never name a number the rail doesn't show. */
    _slideLabel(i) {
      const s = this._slides[i];
      if (!s || s.hasAttribute('data-deck-skip')) return '';
      let v = 0;
      for (let k = 0; k <= i; k++) {
        if (!this._slides[k].hasAttribute('data-deck-skip')) v++;
      }
      return String(v);
    }

    /** Overlay counter, skip-aware: position among non-skipped slides over
     *  the non-skipped total. A skipped CURRENT slide (reachable by rail
     *  click or deep link, never by _advance) shows '–' — its number is
     *  gone from the rail, so any digit here would lie. */
    _syncCount() {
      if (!this._countEl || !this._totalEl) return;
      // Empty deck: keep the overlay's initial "1 / 1" (it has nothing to
      // count and isn't visible without slides) — the guest fallback for
      // frozen copies leaves empty decks alone for the same rendering.
      if (!this._slides.length) {
        this._countEl.textContent = '1';
        this._totalEl.textContent = '1';
        return;
      }
      let pos = 0,
        total = 0;
      this._slides.forEach((s, i) => {
        if (!s.hasAttribute('data-deck-skip')) {
          total++;
          if (i <= this._index) pos = total;
        }
      });
      const cur = this._slides[this._index];
      const curSkipped = !cur || cur.hasAttribute('data-deck-skip');
      this._countEl.textContent = curSkipped ? '–' : String(pos);
      this._totalEl.textContent = String(total);
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck-saved-2026-09-29/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck-saved-2026-09-29/ix-core.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Interactive deck core: slide context, presenter build steps, parallax, lap HUD. */
const IXDS = window.WilliamsRacingAIExperienceDesignSystem_1388e9;
const IXA = p => (window.WR_ASSETS || '../../assets/') + p;
const IXCtx = React.createContext({
  active: false,
  index: 0,
  prev: 0,
  total: 11,
  step: 0
});
window.__wrIX = window.__wrIX || {
  current: 0,
  prev: 0,
  handlers: {}
};
const IX = window.__wrIX;
if (!IX.bound) {
  IX.bound = true;
  const deck = () => document.querySelector('deck-stage');
  const syncFromDom = () => {
    const secs = [...document.querySelectorAll('deck-stage > section')];
    const i = secs.findIndex(s => s.hasAttribute('data-deck-active'));
    return i < 0 ? 0 : i;
  };
  document.addEventListener('slidechange', e => {
    IX.prev = e.detail.previousIndex ?? IX.current;
    IX.current = e.detail.index;
    Object.values(IX.handlers).forEach(h => h.onChange && h.onChange(IX.current, IX.prev));
  });
  IX.initial = syncFromDom;
  window.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    const h = IX.handlers[IX.current];
    if (!h) return;
    const fwd = ['ArrowRight', 'PageDown', ' ', 'Spacebar', 'ArrowDown'].includes(e.key);
    const back = ['ArrowLeft', 'PageUp', 'ArrowUp'].includes(e.key);
    if (fwd && h.next && h.next() || back && h.back && h.back()) {
      e.preventDefault();
      e.stopImmediatePropagation();
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
    const to = el.style.width || Math.max(0, idx) / laps * 100 + '%';
    if (!from) from = Math.max(0, pv) / laps * 100 + '%';
    if (pv === idx && !last) return;
    IX.bar = {
      el,
      anim: el.animate([{
        width: from
      }, {
        width: to
      }], {
        duration: 1400,
        easing: 'cubic-bezier(.22,.8,.2,1)',
        fill: 'backwards'
      })
    };
  };
  document.addEventListener('slidechange', e => runBar(e.detail.index, e.detail.previousIndex ?? e.detail.index));
}

/* Wraps one slide: tracks active state, build steps, and pointer parallax (--mx/--my). */
function IXSlide({
  index,
  total = 11,
  steps = 0,
  onStep,
  children,
  style,
  className = '',
  hud = true,
  field = true,
  hudFinal = false
}) {
  const [active, setActive] = React.useState(false);
  const [prev, setPrev] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const [nonce, setNonce] = React.useState(0);
  const ref = React.useRef(null);
  const stepRef = React.useRef(0);
  stepRef.current = step;
  React.useEffect(() => {
    const apply = (cur, pv) => {
      const isA = cur === index;
      setActive(isA);
      setPrev(pv);
      if (isA) {
        setStep(pv > index ? steps : 0);
        setNonce(n => n + 1);
      }
    };
    IX.handlers[index] = {
      onChange: apply,
      next: () => {
        if (stepRef.current < steps) {
          setStep(s => s + 1);
          return true;
        }
        return false;
      },
      back: () => {
        if (stepRef.current > 0) {
          setStep(s => s - 1);
          return true;
        }
        return false;
      },
      finish: () => setStep(steps)
    };
    const init = IX.initial ? IX.initial() : 0;
    IX.current = init;
    apply(init, init);
    return () => {
      delete IX.handlers[index];
    };
  }, [index, steps]);
  React.useEffect(() => {
    onStep && onStep(step);
  }, [step]);
  const onMove = e => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 2 - 1).toFixed(3));
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 2 - 1).toFixed(3));
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) {
      el.style.setProperty('--mx', 0);
      el.style.setProperty('--my', 0);
    }
  };
  return /*#__PURE__*/React.createElement(IXCtx.Provider, {
    value: {
      active,
      index,
      prev,
      total,
      step,
      setStep,
      nonce
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `ix-slide ${className}`,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: {
      position: 'relative',
      width: 1920,
      height: 1080,
      overflow: 'hidden',
      background: 'var(--wr-night)',
      color: '#fff',
      '--mx': 0,
      '--my': 0,
      ...style
    }
  }, field && /*#__PURE__*/React.createElement(CrossField, null), children, hud && /*#__PURE__*/React.createElement(LapHUD, {
    final: hudFinal
  })));
}

/* Decorative + / × lattice (Williams brand pattern): four arms with an open centre. Hover rotates 45°, un-hover returns. */
const CROSS_ARMS = 'M17 0V12.6M17 21.4V34M0 17H12.6M21.4 17H34';
function CrossField({
  gap = 240,
  size = 34
}) {
  const [rot, setRot] = React.useState({});
  const marks = [];
  for (let y = gap / 2, r = 0; y < 1080; y += gap / 2, r++) {
    for (let x = r % 2 ? gap : gap / 2; x < 1920; x += gap) marks.push({
      x,
      y,
      plus: r % 2 === 1
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, marks.map((m, i) => {
    const turned = !!rot[i];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "ix-cross",
      onMouseEnter: () => setRot(s => ({
        ...s,
        [i]: true
      })),
      onMouseLeave: () => setRot(s => ({
        ...s,
        [i]: false
      })),
      style: {
        position: 'absolute',
        left: m.x - size,
        top: m.y - size,
        width: size * 2,
        height: size * 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 34 34",
      style: {
        display: 'block',
        transform: `rotate(${(m.plus ? 0 : 45) + (turned ? 45 : 0)}deg)`,
        transition: 'transform .7s cubic-bezier(.2,.8,.2,1)'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: CROSS_ARMS,
      stroke: "currentColor",
      strokeWidth: "1.1",
      strokeLinecap: "round",
      fill: "none"
    })));
  }));
}

/* Parallax layer: depth in px at the viewport edge. Negative = moves against pointer. */
function PX({
  depth = 12,
  l = 0,
  t = 0,
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ix-px",
    style: {
      position: 'absolute',
      left: l,
      top: t,
      '--depth': depth + 'px',
      ...style
    }
  }, children);
}

/* Build-in wrapper — animation plays whenever the slide becomes active (keyed by nonce). */
function B({
  fx = 'up',
  d = 0,
  show = true,
  style,
  className = '',
  children,
  ...rest
}) {
  const {
    nonce
  } = React.useContext(IXCtx);
  return /*#__PURE__*/React.createElement("div", _extends({
    key: nonce,
    className: `ix ix-${fx} ${show ? '' : 'ix-hidden'} ${className}`,
    style: {
      '--d': d + 'ms',
      ...style
    }
  }, rest), children);
}

/* Lap-style progress: sector track across the bottom edge + LAP nn / nn. */
function LapHUD({
  final = false
}) {
  const {
    active,
    index,
    prev,
    total
  } = React.useContext(IXCtx);
  const barRef = React.useRef(null);
  const OFF = 1,
    laps = total - OFF;
  const pct = i => Math.max(0, (i - OFF + 1) / laps) * 100;
  const n = v => String(v).padStart(2, '0');
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "ix-hud",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 64,
      visibility: 'visible',
      pointerEvents: 'none',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: final ? 'ix-hud-out' : '',
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: 420,
      height: 150,
      background: 'radial-gradient(100% 100% at 100% 100%, rgba(10,12,20,0.85) 0%, rgba(10,12,20,0.55) 45%, rgba(10,12,20,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 48,
      bottom: 22,
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      fontFamily: '"Space Grotesk", sans-serif',
      color: '#fff',
      textShadow: '0 1px 12px rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, "LAP"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: '0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, n(index + 1 - OFF)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.7)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "/ ", n(laps)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 5,
      background: 'rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: barRef,
    className: final ? 'ix-lapbar is-final' : 'ix-lapbar',
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: `${pct(index)}%`,
      background: 'linear-gradient(90deg, rgba(0,66,255,0) 0%, #0042FF 35%, #0068DF 70%, rgb(31,199,255) 100%)',
      boxShadow: '0 0 18px rgba(31,199,255,0.7), 0 0 6px rgba(0,104,223,1)',
      borderRadius: '0 5px 5px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-lapwhite",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      opacity: 0,
      background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, #fff 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ix-carglow",
    style: {
      position: 'absolute',
      right: -2,
      bottom: 9,
      width: 62,
      height: 13,
      filter: 'drop-shadow(0 0 4px rgba(31,199,255,0.95)) drop-shadow(0 0 10px rgba(0,104,223,0.8))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-car",
    style: {
      width: '100%',
      height: '100%',
      background: 'rgb(31,199,255)',
      WebkitMask: `url(assets/f1-car.png) center / contain no-repeat`,
      mask: `url(assets/f1-car.png) center / contain no-repeat`
    }
  })))));
}

/* Pull-out drawer: an F1-style tab peeks from the frame edge (right or left); click slides a glass card out. */
function IXDrawer({
  side = 'right',
  top = 120,
  width = 580,
  eyebrow,
  meta,
  title,
  chips = [],
  wave = false,
  aside,
  locked = false,
  content,
  middle,
  bottom,
  handleLift = 84,
  bare = false,
  children
}) {
  const {
    active
  } = React.useContext(IXCtx);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!active) setOpen(false);
  }, [active]);
  const W = width + 40,
    R = side === 'right';
  if (locked) return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [side]: 0,
      top,
      zIndex: 30,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": eyebrow,
    "aria-disabled": "true",
    onClick: e => e.stopPropagation(),
    className: `ix-handle ${R ? 'is-r' : 'is-l'} is-peek`,
    style: {
      marginTop: 36,
      height: 136,
      border: 0,
      padding: 0,
      cursor: 'pointer',
      borderRadius: R ? '14px 0 0 14px' : '0 14px 14px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "22",
    viewBox: "0 0 14 22",
    style: {
      display: 'block',
      transform: `rotate(${R ? 0 : 180}deg)`
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 3 L3 11 L10 19",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ix-hstripe",
    style: {
      '--i': i
    }
  })))));
  const edge = R ? '24px 0 0 24px' : '0 24px 24px 0';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    onClick: e => {
      e.stopPropagation();
      setOpen(false);
    },
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 18,
      background: 'rgba(6,8,14,0.46)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity .7s cubic-bezier(.3,.7,.3,1)'
    }
  }), aside && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: open ? 'is-open' : '',
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 25,
      pointerEvents: 'none',
      opacity: open ? 1 : 0,
      transform: open ? 'none' : 'translateY(10px)',
      transition: open ? 'opacity 1s ease .3s, transform 1.1s cubic-bezier(.2,.8,.2,1) .3s' : 'opacity .5s ease, transform .5s ease'
    }
  }, aside), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      [side]: 0,
      ...(bottom != null ? {
        bottom
      } : {
        top: middle ?? top
      }),
      zIndex: 30,
      display: 'flex',
      flexDirection: R ? 'row' : 'row-reverse',
      alignItems: bottom != null ? 'flex-end' : middle != null ? 'center' : 'flex-start',
      transform: `translateX(${open ? 0 : R ? W : -W}px)${middle != null ? ' translateY(-50%)' : ''}`,
      transition: 'transform .8s cubic-bezier(.2,.85,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": open,
    "aria-label": eyebrow,
    onClick: () => setOpen(o => !o),
    className: `ix-handle ${R ? 'is-r' : 'is-l'} ${open ? '' : 'is-peek'}`,
    style: {
      marginTop: middle != null || bottom != null ? 0 : 36,
      marginBottom: bottom != null ? handleLift : 0,
      height: 136,
      border: 0,
      padding: 0,
      cursor: 'pointer',
      borderRadius: R ? '14px 0 0 14px' : '0 14px 14px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "22",
    viewBox: "0 0 14 22",
    style: {
      display: 'block',
      transform: `rotate(${(open ? 180 : 0) + (R ? 0 : 180)}deg)`,
      transition: 'transform .6s cubic-bezier(.2,.85,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 3 L3 11 L10 19",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ix-hstripe",
    style: {
      '--i': i
    }
  })))), bare ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      boxSizing: 'border-box',
      padding: R ? '0 22px 0 0' : '0 0 0 22px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 9,
      borderRadius: 'calc(var(--radius-photo) + 9px)',
      background: 'linear-gradient(180deg,rgba(44,49,64,.88),rgba(24,27,38,.88))',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.12), 0 30px 70px rgba(0,0,0,.45)'
    }
  }, typeof content === 'function' ? content(open) : content)) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      boxSizing: 'border-box',
      padding: '54px 60px 46px',
      borderRadius: edge,
      background: 'rgba(10,12,20,0.74)',
      backdropFilter: 'blur(24px) saturate(1.2)',
      WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
      boxShadow: `inset ${R ? 1 : -1}px 0 0 rgba(255,255,255,0.18), inset 0 1px 0 rgba(255,255,255,0.1), ${R ? -24 : 24}px 30px 80px rgba(0,0,0,0.5)`,
      fontFamily: 'var(--font-body)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, meta)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '26px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 46,
      lineHeight: '52px',
      letterSpacing: '-0.015em',
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 120,
      height: 1.5,
      margin: '26px 0 26px',
      background: 'var(--wr-rule-gradient)'
    }
  }), content || /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 300,
      lineHeight: '37px',
      color: 'rgba(255,255,255,0.86)',
      textWrap: 'pretty'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 36,
      paddingTop: 26,
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, chips.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: wave ? '10px 18px 10px 14px' : '10px 18px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.07)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.14)'
    }
  }, wave && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      height: 20
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: open ? 'ix-bar is-on' : 'ix-bar',
    style: {
      '--i': i,
      width: 2.5,
      background: 'rgb(31,199,255)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      whiteSpace: 'nowrap'
    }
  }, n))), /*#__PURE__*/React.createElement("img", {
    src: IXA('logo/williams-wordmark-white.png'),
    alt: "Williams Racing",
    style: {
      marginLeft: 'auto',
      height: 18,
      width: 'auto',
      opacity: 0.34,
      display: 'block'
    }
  })))));
}
function IXLogo({
  l,
  t,
  d = 0
}) {
  return /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: d,
    style: {
      position: 'absolute',
      left: l,
      top: t + 3
    }
  }, /*#__PURE__*/React.createElement(IXDS.WilliamsLogo, {
    src: IXA('logo/williams-wordmark-white.png'),
    width: 210
  }));
}
Object.assign(window, {
  IXDrawer,
  CrossField,
  IXCtx,
  IXSlide,
  PX,
  B,
  LapHUD,
  IXLogo,
  IXA,
  IXDS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck-saved-2026-09-29/ix-core.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck-saved-2026-09-29/ix-slides-a.jsx
try { (() => {
/* Interactive slides — Cover (Frame 2), Overview (Frame 3), Journey (Frame 16). Copy verbatim from Figma. */

function IXStreaks({
  d = 200
}) {
  return /*#__PURE__*/React.createElement(PX, {
    depth: -28,
    l: 0,
    t: 0,
    style: {
      width: 1920,
      height: 1080,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "streak",
    d: d,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 1920,
      height: 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 1536,
      height: 1024,
      transform: 'matrix(-0.997,0.079,-0.079,-0.997,2491.426,1609.770)',
      transformOrigin: '0 0',
      background: `url(${IXA('brand/speed-streaks.png')}) center / cover no-repeat`
    }
  })));
}
function IXWMark({
  d = 0
}) {
  return /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: d,
    style: {
      position: 'absolute',
      left: 24,
      top: 188.5,
      width: 1235,
      height: 703.6,
      background: `url(${IXA('brand/w-mark-dark.png')}) center / contain no-repeat`,
      pointerEvents: 'none'
    }
  });
}
function IXCoverSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index,
    style: {
      background: 'var(--wr-night-2)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "push",
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${IXA('photos/pitlane-hey-williams.png')}) center / cover no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: 620,
      height: 260,
      background: 'radial-gradient(100% 100% at 100% 0%, rgba(10,12,20,0.8) 0%, rgba(10,12,20,0.5) 45%, rgba(10,12,20,0) 100%)',
      pointerEvents: 'none',
      zIndex: 19
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 1100,
      height: 420,
      background: 'radial-gradient(100% 100% at 0% 100%, rgba(10,12,20,0.78) 0%, rgba(10,12,20,0.4) 45%, rgba(10,12,20,0) 100%)',
      pointerEvents: 'none',
      zIndex: 19
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "left",
    d: 1300,
    style: {
      position: 'absolute',
      left: 164,
      bottom: 214,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("svg", {
    key: i,
    className: "ix-chev",
    width: "16",
    height: "24",
    viewBox: "0 0 16 24",
    style: {
      '--i': i,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3 L12 12 L3 21",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: '0.3em',
      color: '#fff',
      textShadow: '0 2px 16px rgba(0,0,0,0.5)'
    }
  }, "WELCOME TO THE PADDOCK")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      bottom: 112,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(VoicePlayer, {
    className: "ix-glass-in"
  })), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "right",
    eyebrow: "VOICE CLONING",
    meta: "Powered by ElevenLabs",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Hear exactly what", /*#__PURE__*/React.createElement("br", null), "the drivers hear."),
    chips: ['James Urwin', 'Gaëtan Jago'],
    wave: true,
    aside: /*#__PURE__*/React.createElement(SilverstoneMap, null)
  }, "With ElevenLabs voice synthesis and advanced audio processing, we can create fully personalised digital replicas of James Urwin\u2019s and Ga\xEBtan Jago\u2019s voices. Race-engineer-grade audio goes straight into each guest\u2019s ear, so the pit lane sounds as close as it gets to what drivers hear mid-race."));
}

/* Silverstone outline: centripetal Catmull-Rom through traced anchors (no overshoot), drawn in race direction from the start line. Telemetry: turns, sectors, DRS, speed zones. */
const SILVERSTONE_D = 'M516.6 19.1C562.4 50.7 855.1 276.3 900.6 311.9C910.5 319.7 913.4 321.3 918.6 326.4C923.2 330.9 927.2 335.6 930.4 340.6C933.4 345.3 935.6 350.8 937.4 355.6C938.9 359.8 939.8 362.7 940.7 367.6C942.1 375.3 943.3 386.4 943.4 397.6C943.6 411.7 941.9 426.9 940.3 445.6C938 472.1 929.9 517.9 929.6 541.6C929.4 555.5 930.5 564.2 932.3 574.6C933.9 584.1 936.3 593 939.4 601.6C942.4 610 946.8 618.6 950.6 625.6C953.7 631.3 954.8 633.2 960.1 640.6C977.4 664.9 1064.4 764.3 1080.3 790.6C1085.4 799 1086.9 803.5 1088.1 808.6C1088.9 812 1089.2 814.3 1088.7 817.6C1088.1 821.9 1085.8 828.4 1083.3 832.1C1081.2 835.1 1078.9 836.8 1075.6 838.9C1071 841.8 1065.9 843.6 1057.6 846.6C1040 852.9 986.9 865.1 973.6 871.1C969.1 873.1 967.6 873.8 965.1 876.4C962 879.6 958.5 885.1 957.3 889.6C956.3 893.5 956.8 898 957.6 901.6C958.3 904.9 960 908.1 961.6 910.6C962.9 912.8 963.9 914.1 966 916.1C969.3 919.2 974.2 922.8 980.6 926.3C990.8 931.9 1008.2 939 1022.6 943.6C1037.2 948.2 1053.1 951.6 1067.6 953.9C1081 956.1 1093.9 957.3 1106.6 957.6C1118.8 957.9 1133.9 957.3 1142.6 955.7C1147.7 954.8 1150.7 953.8 1154.6 951.9C1158.8 949.9 1162.6 947 1166.6 943.7C1171.4 939.8 1173.3 937.6 1181 929.6C1217.8 891.5 1409 679.8 1490 590.6C1542.7 532.5 1599 471.9 1620.3 446.6C1627.6 437.9 1630.7 434.1 1634.4 428.6C1637.2 424.3 1639.2 420.7 1641 416.6C1642.8 412.7 1644.2 409.5 1645.3 404.6C1646.9 397.5 1648 385.3 1648 377.6C1648 371.9 1647.3 367.3 1646.4 362.6C1645.6 358.3 1644.6 354.3 1643.3 350.6C1642.1 347.3 1640.8 344.4 1639 341.6C1637.2 338.7 1634.9 335.7 1632.3 333.4C1629.7 331.1 1626.6 329.1 1623.6 327.7C1620.7 326.4 1619.1 326 1614.6 325C1602.1 322.4 1558.6 318.7 1542.6 315.9C1534.6 314.5 1530.5 313.9 1524.6 311.9C1518.5 309.8 1511.3 306.7 1506.6 303.6C1503.1 301.3 1500.9 299 1498.4 296.3C1495.9 293.6 1493.7 290.8 1491.7 287.6C1489.5 284 1487.3 279.4 1485.9 275.6C1484.8 272.4 1484.1 270.3 1483.7 266.6C1483.1 261.1 1483.1 251.1 1483.9 245.6C1484.4 241.9 1485.2 239.8 1486.4 236.6C1487.9 232.8 1490.1 228.2 1492.4 224.6C1494.4 221.4 1496.6 218.6 1499.1 216C1501.6 213.4 1504.4 211.1 1507.6 208.9C1511.2 206.5 1515.3 204 1519.6 202.4C1524.2 200.7 1529.6 199.5 1534.6 199.1C1539.6 198.7 1544.6 199 1549.6 199.7C1554.6 200.4 1558.1 201 1564.6 203.4C1578.6 208.5 1607.4 223.6 1627.6 234.9C1647.4 246 1669.8 260.3 1684.6 270.6C1694.5 277.5 1701.3 282.9 1708.6 289C1715.2 294.5 1719.3 298.3 1726.6 305.6C1739.2 318.3 1763.7 343.8 1776.1 359.6C1784.8 370.7 1790.7 379.6 1796.3 389.6C1801.4 398.6 1805.7 408.8 1808.7 416.6C1810.9 422.2 1812.1 426.3 1813.3 431.6C1814.6 437.3 1815.1 440.8 1816.3 449.6C1819.7 474 1827.7 543.8 1832.3 587.6C1836.5 627.4 1839.6 659.6 1843 701.6C1847.2 753.5 1855.9 842.8 1855.1 875.6C1854.8 888.5 1853.9 894.6 1851.9 902.6C1850.2 909.3 1848.2 914.8 1844.9 920.6C1841.3 926.9 1836.4 932.4 1830.6 938.6C1823.3 946.4 1813.2 955.8 1803.6 963C1794.2 970.1 1784 975.8 1773.6 981.4C1763 987.1 1751.7 992.3 1740.6 996.7C1729.7 1000.9 1719.7 1003.9 1707.6 1007.3C1693.2 1011.3 1677.9 1014.7 1659.6 1018.6C1635.5 1023.8 1597.2 1031.4 1575.6 1034.9C1562.1 1037.1 1556.4 1038 1542.6 1039.3C1519.5 1041.5 1481.3 1043.4 1449.6 1045C1416.4 1046.7 1372.2 1047 1347.6 1049C1333.5 1050.1 1326.2 1050.6 1314.6 1053C1301.3 1055.7 1286.9 1059.4 1272.6 1065.4C1256.1 1072.3 1234.5 1088.4 1221.6 1093.6C1214.3 1096.5 1209.7 1097.5 1203.6 1098.3C1197.6 1099.1 1191.6 1098.9 1185.6 1098.4C1179.6 1097.9 1175.5 1097.4 1167.6 1095.3C1151.5 1091 1113.9 1074.7 1095.6 1068.9C1084.5 1065.4 1077.7 1063.3 1068.6 1061.6C1059.7 1059.9 1049.7 1058.7 1041.6 1058.6C1035 1058.5 1029.6 1059 1023.6 1060.1C1017.5 1061.2 1011.2 1062.9 1005.6 1065.1C1000.3 1067.2 996.6 1069.1 990.6 1072.9C980.4 1079.4 961.7 1096 951.6 1102.7C945.6 1106.6 941.7 1108.9 936.6 1111.1C931.7 1113.2 926.9 1114.6 921.6 1115.6C916 1116.6 907.4 1116.8 904 1116.9C902.6 1117 902.4 1117 901.1 1116.9C898.1 1116.7 891.4 1116.1 886.6 1115C881.6 1113.8 876.2 1112.1 871.6 1110C867.3 1108.1 863.5 1105.8 859.6 1103.1C855.5 1100.3 852.2 1097.8 847.9 1093.3C841.2 1086.3 832.8 1075.3 824.9 1063.6C814.7 1048.5 802.1 1022.5 793.3 1009.6C788 1001.8 784 996.9 779.1 991.7C774.7 987.1 771.4 984 765.6 979.7C756.7 973.1 748.7 968.6 729.6 957.6C661 918.2 338.8 749.5 249.6 700.4C214.8 681.3 205 676.6 177.6 659.7C139.2 636 66.9 588.8 42.6 568.9C32.6 560.7 27.6 555 23.1 549.6C20.3 546.2 19 544.1 17.1 540.6C14.7 536.3 12.3 531.4 10.3 525.6C7.7 518 5 506.3 4.1 498.6C3.4 492.9 3.7 488.6 4 483.6C4.3 478.6 4.6 474.1 6 468.6C7.8 461.4 11.8 451.1 15 444.6C17.4 439.8 19.7 436.5 22.6 432.6C25.6 428.6 28.5 424.8 32.7 420.9C38.2 415.8 44.7 410.7 53.6 405.3C67.1 397.2 92.8 387.4 107.6 379.9C118.2 374.6 124.5 371.5 134.6 365.4C148.5 357 169 342.9 182.6 333C193.1 325.3 198.4 321.1 209.6 311.6C229.6 294.6 265.1 260.1 290.6 237.7C312.7 218.2 343.3 194.5 353.6 184.3C357.3 180.7 358.8 179.4 360.6 176.3C362.5 172.9 364.3 168.8 364.6 164.6C365 160 363.7 153.8 362.1 149.6C360.8 146.1 359.2 144.1 356.7 140.6C352.5 134.9 342.4 126.4 338.3 119.6C335.2 114.5 333.2 109.9 332.4 104.6C331.6 99 332.2 92.1 334 86.6C335.8 81.2 339.3 76.3 343 71.6C347 66.5 352.4 61.8 357.6 57.1C363.2 52.1 370.1 46.5 375.6 42.4C379.9 39.2 383 37.1 387.6 34.3C393.5 30.8 401.8 26.5 408.6 23.3C414.8 20.4 420.3 17.9 426.6 15.6C433.3 13.1 440.8 10.9 447.6 9.1C453.8 7.5 459.8 5.9 465.6 5.1C470.8 4.3 475.4 3.6 480.6 4C486.4 4.4 492.8 5.5 498.6 7.9C504.8 10.4 507 12.5 516.6 19.1Z';
const SS_T = {
  "turns": [[1, 961, 321], [2, 966, 540], [3, 1123, 798], [4, 991, 902], [5, 1108, 922], [6, 1680, 349], [7, 1520, 245], [8, 1705, 241], [9, 1876, 938], [10, 1286, 1099], [11, 1186, 1134], [12, 1066, 1098], [13, 993, 1116], [14, 882, 1151], [15, -32, 484], [16, 329, 163], [17, 302, 71], [18, 438, -26]],
  "br": [["M1066 829L1063 813L1050 817L1044 820L1037 822L1030 823L1021 826L1014 828L1006 830L998 832L988 835L979 838L971 840L959 845L944 855L933 870L929 882L929 909L939 929L943 936L953 944L962 950L973 956L981 960L988 963L998 967L1006 970L1013 972L1025 975L1036 978L1044 980L1051 982L1054 966", 870, 862, "LOW SPEED"], ["M1576 334L1573 350L1566 349L1556 348L1543 346L1532 345L1521 342L1508 338L1496 332L1488 327L1468 306L1461 294L1459 288L1454 271L1453 256L1454 246L1458 227L1466 211L1475 198L1490 185L1495 181L1513 173L1530 170L1540 169L1550 170L1567 173L1580 177L1590 182L1601 187L1610 191L1618 195L1628 201L1620 215", 1418, 205, "LOW SPEED"], ["M1398 1033L1397 1017L1378 1017L1359 1018L1337 1020L1317 1022L1297 1026L1277 1032L1253 1041L1235 1052L1219 1061L1211 1066L1198 1069L1187 1069L1171 1065L1155 1059L1137 1052L1119 1046L1101 1039L1076 1032L1057 1030L1026 1030L1009 1033L984 1042L963 1056L949 1067L934 1079L921 1085L917 1086L904 1087L886 1084L878 1080L869 1093", 1153, 1011, "HIGH SPEED"]],
  "drs": [["M1164 921L1175 910L1188 895L1200 883L1213 869L1228 853L1243 835L1260 817L1269 807L1287 788L1296 777L1315 757L1324 746L1343 725L1353 715L1372 694L1381 684L1399 664L1408 654L1425 635L1442 617L1449 609L1464 593L1481 574L1496 557L1508 544L1524 527L1539 510L1550 498L1567 479L1579 466", 1351, 675, "DRS 1"], ["M781 1023L767 1005L749 990L728 978L709 967L684 953L664 942L642 930L617 917L591 903L577 895L548 880L534 872L504 857L474 841L459 833L429 817L414 809L385 794L357 779L344 772L319 758L295 746L265 729L241 716L218 703L194 690L170 676L149 663L126 649L107 636", 446, 857, "DRS 2"]],
  "sec": [[1474, 631, 1451, 610], [826, 1034, 798, 1049]],
  "trap": [62, 584, 37, 612],
  "sf": [535, 52, 554, 26],
  "sfl": [521, 71],
  "sl": [["S1", 1150, 560], ["S2", 1650, 700], ["S3", 520, 720]]
};
function SilverstoneMap({
  l = 140,
  t = 110,
  w = 1000
}) {
  const k = w / 1872,
    h = 1133 * k,
    P = v => (v + 6) * k;
  const lab = {
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-display)',
    pointerEvents: 'none'
  };
  const vs = {
    vectorEffect: 'non-scaling-stroke',
    fill: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: l,
      top: t,
      width: w,
      height: h
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: "-6 -6 1872 1133",
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("g", {
    className: "ix-ss-t",
    style: {
      '--d': '.9s'
    }
  }, SS_T.br.map(([d]) => /*#__PURE__*/React.createElement("path", {
    key: d,
    d: d,
    stroke: "rgba(255,255,255,0.2)",
    strokeWidth: "1.2",
    strokeLinejoin: "round",
    style: vs
  })), SS_T.drs.map(([d]) => /*#__PURE__*/React.createElement("path", {
    key: d,
    d: d,
    stroke: "rgba(31,199,255,0.45)",
    strokeWidth: "1.3",
    strokeDasharray: "2 5",
    strokeLinecap: "round",
    style: vs
  }))), /*#__PURE__*/React.createElement("path", {
    d: SILVERSTONE_D,
    pathLength: "1000",
    fill: "none",
    stroke: "rgba(255,255,255,0.32)",
    strokeWidth: "3.2",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("path", {
    d: SILVERSTONE_D,
    pathLength: "1000",
    fill: "none",
    stroke: "rgba(0,104,223,0.55)",
    strokeWidth: "3.2",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    className: "ix-ss-glow"
  }), /*#__PURE__*/React.createElement("g", {
    className: "ix-ss-t",
    style: {
      '--d': '.7s'
    }
  }, SS_T.sec.map((s, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: s[0],
    y1: s[1],
    x2: s[2],
    y2: s[3],
    stroke: "rgba(255,255,255,0.55)",
    strokeWidth: "1.2",
    style: vs
  })), /*#__PURE__*/React.createElement("line", {
    x1: SS_T.sf[0],
    y1: SS_T.sf[1],
    x2: SS_T.sf[2],
    y2: SS_T.sf[3],
    stroke: "#fff",
    strokeWidth: "2",
    style: vs
  }), /*#__PURE__*/React.createElement("circle", {
    cx: SS_T.trap[0],
    cy: SS_T.trap[1],
    r: "9",
    stroke: "rgba(255,255,255,0.7)",
    strokeWidth: "1.2",
    style: {
      ...vs,
      fill: 'var(--wr-night)'
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: SILVERSTONE_D,
    pathLength: "1000",
    fill: "none",
    stroke: "rgb(31,199,255)",
    strokeWidth: "3.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    className: "ix-ss-pulse"
  }), /*#__PURE__*/React.createElement("path", {
    d: SILVERSTONE_D,
    pathLength: "1000",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    className: "ix-ss-pulse is-core"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ix-ss-t",
    style: {
      '--d': '.8s',
      position: 'absolute',
      inset: 0
    }
  }, SS_T.turns.map(([n, x, y]) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      ...lab,
      left: P(x),
      top: P(y),
      fontSize: 13,
      fontWeight: 500,
      color: 'rgba(255,255,255,0.55)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, n)), SS_T.br.map(([d, x, y, s]) => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      ...lab,
      left: P(x),
      top: P(y),
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, s)), SS_T.drs.map(([d, x, y, s]) => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      ...lab,
      left: P(x),
      top: P(y),
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(31,199,255,0.75)'
    }
  }, s)), SS_T.sl.map(([s, x, y], i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      ...lab,
      left: P(x),
      top: P(y),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      color: 'rgba(255,255,255,0.42)'
    }
  }, s), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.3)'
    }
  }, "SECTOR ", i + 1))), /*#__PURE__*/React.createElement("span", {
    style: {
      ...lab,
      left: P(SS_T.trap[2]),
      top: P(SS_T.trap[3]),
      transform: 'translate(-100%,-50%)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "SPEED TRAP"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...lab,
      left: P(SS_T.sfl[0]),
      top: P(SS_T.sfl[1]),
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "START / FINISH")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: w * 0.262,
      top: h * 0.41,
      transform: 'translate(-50%,-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/silverstone-logo.png",
    alt: "Silverstone",
    style: {
      display: 'block',
      height: 20,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      letterSpacing: '0.22em',
      color: '#fff'
    }
  }, "SILVERSTONE CIRCUIT"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.06em',
      color: 'rgba(255,255,255,0.62)'
    }
  }, "Home of the British Grand Prix"), /*#__PURE__*/React.createElement("span", {
    className: "ix-ss-t",
    style: {
      '--d': '1s',
      marginTop: 8,
      display: 'flex',
      gap: 14,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(255,255,255,0.42)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("span", null, "5.891 KM"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "18 TURNS"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "52 LAPS")))));
}

/* Glass audio pill — plays assets/audio/race-engineer.mp3 */
function VoicePlayer({
  src = IXA('audio/race-engineer.mp3'),
  className = ''
}) {
  const ref = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [prog, setProg] = React.useState(0);
  const [err, setErr] = React.useState(false);
  const {
    active
  } = React.useContext(IXCtx);
  React.useEffect(() => {
    const a = ref.current;
    if (!active && a && !a.paused) {
      a.pause();
      setPlaying(false);
    }
  }, [active]);
  const toggle = e => {
    e.stopPropagation();
    const a = ref.current;
    if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => setErr(true));else {
      a.pause();
      setPlaying(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: toggle,
    className: `ix-player ${className}`,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '10px 22px 10px 10px',
      borderRadius: 999,
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--glass-shadow)',
      cursor: 'pointer',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("audio", {
    ref: ref,
    src: src,
    preload: "auto",
    onTimeUpdate: e => setProg(e.target.duration ? e.target.currentTime / e.target.duration : 0),
    onEnded: () => {
      setPlaying(false);
      setProg(0);
    },
    onError: () => setErr(true)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, playing ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 16,
      background: '#fff',
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 16,
      background: '#fff',
      borderRadius: 1
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      marginLeft: 4,
      borderTop: '9px solid transparent',
      borderBottom: '9px solid transparent',
      borderLeft: '14px solid #fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: 150
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.16em',
      color: '#fff'
    }
  }, err ? 'AUDIO MISSING' : 'RACE ENGINEER'), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      borderRadius: 3,
      background: 'rgba(255,255,255,0.18)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${prog * 100}%`,
      background: 'linear-gradient(90deg,#0042FF,rgb(31,199,255))'
    }
  }))));
}
function IXOverviewSlide({
  index
}) {
  const items = [['Immersive AI experience –', ' A bespoke AI powered experience that immerses VIP guests and partners in the heart of the Williams Racing team during paddock and pit lane walks.'], ['Your own synthetic race engineer –', ' Receive live engineering insights, team heritage, sponsor stories and behind the scenes context, while asking questions naturally at any time. Every word lands straight in your ear, just as a driver hears their race engineer.'], ['Stay present, relive every moment –', ' Experience the day without reaching for your phone while AI captures every unforgettable moment to revisit long after the event.']];
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement(PX, {
    depth: -10,
    l: 1143,
    t: -20,
    style: {
      width: 797,
      height: 1120
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "right",
    d: 150,
    className: "ix-photo",
    style: {
      position: 'absolute',
      inset: 0,
      borderLeft: '2px solid #fff',
      background: `url(${IXA('photos/glasses-case-blue.png')}) center / cover no-repeat`
    }
  })), /*#__PURE__*/React.createElement(IXStreaks, {
    d: 350
  }), /*#__PURE__*/React.createElement(IXLogo, {
    l: 164,
    t: 257,
    d: 380
  }), /*#__PURE__*/React.createElement(B, {
    fx: "wipe",
    d: 520,
    style: {
      position: 'absolute',
      left: 163.987,
      top: 335.25,
      width: 305.026,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      top: 376,
      width: 800,
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      fontFamily: 'var(--font-body)'
    }
  }, items.map(([b, r], i) => /*#__PURE__*/React.createElement(B, {
    key: b,
    fx: "left",
    d: 640 + i * 160,
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr',
      columnGap: 18,
      paddingTop: i ? 30 : 0,
      borderTop: i ? '1px solid rgba(255,255,255,0.1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      paddingTop: 8,
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      lineHeight: '34px',
      color: '#fff'
    }
  }, b.replace(/\s*–\s*$/, '')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 300,
      lineHeight: '32px',
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty'
    }
  }, r.trim()))))));
}

/* Journey: → / click reveals each step in order; the newest step carries a blue focus glow. */
function IXJourneySlide({
  index
}) {
  const steps = [{
    l: 89,
    t: 94,
    img: 'paddock-glasses-handover',
    cap: 'Head to the paddock and receive your smart glasses from a hospitality host'
  }, {
    l: 730,
    t: 129,
    img: 'pitlane-glasses-on',
    cap: "Experience begins with the race engineer's voice welcoming you to the pit lane",
    arrow: [578, 222, 'rotate(180deg)']
  }, {
    l: 1355,
    t: 94,
    img: 'pitlane-hey-williams',
    cap: 'Guided through the pit lane with exclusive insights and fun facts about the team',
    arrow: [1214, 200, 'scaleX(-1) rotate(-12deg) scale(.86)']
  }, {
    l: 408,
    t: 589,
    img: 'pitlane-group-glasses',
    cap: 'Stay in the moment while our glasses capture your every move, even live stream to your instagram'
  }, {
    l: 1051,
    t: 589,
    img: 'grandstand-radio',
    cap: "Feel like you're at the wheel, with real time driver to team radio in your ear, and updates from your very own AI engineer",
    arrow: [896, 700, 'rotate(160deg)']
  }];
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(JourneyInner, {
    steps: steps
  }), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    bottom: 196,
    handleLift: 28,
    width: 720,
    eyebrow: "HOW IT WORKS",
    meta: "Meta glasses \xB7 Williams Smart App",
    title: "Box Box",
    chips: ['Hey Williams', 'Vision AI', 'Hands-free capture'],
    content: /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 23,
        fontWeight: 300,
        lineHeight: '36px',
        color: 'rgba(255,255,255,0.82)',
        textWrap: 'pretty'
      }
    }, "Put the glasses on and your very own AI race engineer guides you through the pit lane and paddock. Curious about something? Just say \u201CHey Williams\u201D. Vision AI and deep learning read what you\u2019re looking at, send it to the Williams Smart App, and your engineer answers straight into your ear. He\u2019ll even cue you to capture photos and video through the glasses, so your phone stays in your pocket and you stay in the moment.")
  }));
}
function JourneyInner({
  steps
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement(IXStreaks, {
    d: 250
  }), steps.map((s, i) => {
    const d = 300 + i * 420;
    return /*#__PURE__*/React.createElement("div", {
      key: s.img,
      style: {
        position: 'absolute',
        left: s.l,
        top: s.t
      }
    }, /*#__PURE__*/React.createElement(B, {
      fx: "up",
      d: d
    }, /*#__PURE__*/React.createElement("div", {
      className: "ix-step"
    }, /*#__PURE__*/React.createElement(IXDS.StepCard, {
      imageSrc: IXA(`photos/${s.img}.png`),
      caption: s.cap
    }))));
  }), steps.map((s, i) => s.arrow && /*#__PURE__*/React.createElement("div", {
    key: 'a' + i,
    style: {
      position: 'absolute',
      left: s.arrow[0],
      top: s.arrow[1],
      zIndex: 10,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "draw",
    d: 300 + i * 420 - 260,
    style: {
      width: 131.589,
      height: 68.25
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "131.589",
    height: "68.25",
    viewBox: "0 0 131.589 68.25",
    style: {
      display: 'block',
      overflow: 'visible',
      transform: s.arrow[2],
      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `fa${i}`,
    gradientUnits: "userSpaceOnUse",
    x1: "0",
    y1: "0",
    x2: "131.589",
    y2: "68.25"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.55",
    stopColor: "#fff",
    stopOpacity: "0.85"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#fff",
    stopOpacity: "0.15"
  }))), /*#__PURE__*/React.createElement("path", {
    fill: `url(#fa${i})`,
    d: "M 0 0 L 6.596 5.612 L 8.158 -2.906 L 0 0 Z M 6.63 1.216 L 6.477 1.95 C 24.731 5.762 37.146 12.399 46.622 20.034 C 56.119 27.684 62.68 36.342 69.262 44.296 C 75.825 52.229 82.41 59.462 91.897 64.019 C 101.397 68.582 113.718 70.423 131.698 67.785 L 131.589 67.043 L 131.481 66.301 C 113.698 68.91 101.701 67.064 92.546 62.666 C 83.377 58.262 76.969 51.258 70.417 43.34 C 63.884 35.444 57.208 26.636 47.563 18.866 C 37.898 11.079 25.265 4.341 6.784 0.482 L 6.63 1.216 Z"
  }))))));
}
Object.assign(window, {
  IXCoverSlide,
  IXOverviewSlide,
  IXJourneySlide,
  IXWMark,
  IXStreaks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck-saved-2026-09-29/ix-slides-a.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck-saved-2026-09-29/ix-slides-b.jsx
try { (() => {
/* Interactive slides — Prompts (18), Livestream (79), VIP (80), Demo (81), Why us (82). */
const ixTitle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 'var(--type-title-size)',
  lineHeight: 'var(--type-title-lh)',
  color: '#fff',
  margin: 0
};
const ixLead = {
  fontFamily: 'var(--font-body)',
  fontWeight: 400,
  fontSize: 'var(--type-lead-size)',
  lineHeight: 'var(--type-lead-lh)',
  color: '#fff',
  margin: 0
};

/* Placeholder race-engineer answers — edit to approved copy. Add qAudio / aAudio (asset paths) when recordings are ready; timings then follow the audio. */
const IX_PROMPTS = [{
  l: 111.953,
  t: 83.392,
  r: 7.64,
  side: 'right',
  text: 'Hey Williams, why are you using soft tyres?',
  a: 'Softs give us the most grip over a short window. We want track position right now, so we’ll push hard and box a little earlier.',
  aAudio: 'audio/answer-soft-tyres.mp3'
}, {
  l: 1434,
  t: 151.735,
  r: -14.3,
  side: 'left',
  text: 'Hey Williams, what’s the deal with Claude?',
  a: 'Claude is one of our partners — look for it on the livery. Want me to point out where it sits on the car when we reach the garage?'
}, {
  l: 1469.574,
  t: 780,
  r: 16.68,
  side: 'left',
  text: 'Hey Williams, who is the current backup driver?',
  a: 'Our reserve driver is on standby all weekend — in the simulator and ready to step in if the team needs them.'
}, {
  l: 75,
  t: 865.138,
  r: -7.7,
  side: 'right',
  text: 'Hey Williams, how fast is your average pit stop?',
  a: 'The crew trains for stops in the two-to-three second range. Around twenty people, one car, perfectly in sync.'
}];
function Typer({
  text,
  onDone
}) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    setN(0);
    const id = setInterval(() => setN(v => {
      if (v >= text.length) {
        clearInterval(id);
        onDone && onDone();
        return v;
      }
      return v + 1;
    }), 22);
    return () => clearInterval(id);
  }, [text]);
  return /*#__PURE__*/React.createElement("span", null, text.slice(0, n), /*#__PURE__*/React.createElement("span", {
    className: "ix-caret",
    style: {
      opacity: n < text.length ? 1 : 0
    }
  }, "\u258D"));
}
function Wave({
  on
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      height: 22
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: on ? 'ix-bar is-on' : 'ix-bar',
    style: {
      '--i': i
    }
  })));
}

/* Vision AI POV frames (Figma 116 → 115 → 114): images crossfade; the prompt bubble glides to each frame's spot while its text fades out and back in. */
const IX_VISION = [{
  img: 'assets/vision-frame-116.jpg',
  bg: '100.057% 16.273% / 99.992% 124.205%',
  l: 101,
  t: 410,
  fs: 38,
  text: 'Hey Williams, what are those red and blue streaks on the car?',
  lines: ['Hey Williams, what are those red', 'and blue streaks on the car?']
}, {
  img: 'assets/vision-frame-115.jpg',
  bg: '100.009% 19.074% / 100.019% 115.200%',
  l: 796,
  t: 852,
  fs: 44,
  text: 'Hey Williams, what do those covers on the tyres do?',
  lines: ['Hey Williams, what do those', 'covers on the tyres do?']
}, {
  img: 'assets/vision-frame-114.jpg',
  bg: 'center / cover',
  l: 101,
  t: 645,
  fs: 45,
  text: 'Hey Williams, How many pits do you average a race?',
  lines: ['Hey Williams, How many', 'pits do you average a race?']
}];
const IX_VIS_S = 0.37;
function VisionCycle({
  open
}) {
  const [pos, setPos] = React.useState(0);
  const [txt, setTxt] = React.useState(0);
  const [vis, setVis] = React.useState(true);
  React.useEffect(() => {
    if (!open) {
      const r = setTimeout(() => {
        setPos(0);
        setTxt(0);
        setVis(true);
      }, 800);
      return () => clearTimeout(r);
    }
    const id = setTimeout(() => setPos(p => (p + 1) % IX_VISION.length), 6000);
    return () => clearTimeout(id);
  }, [open, pos]);
  React.useEffect(() => {
    if (pos === txt) return;
    setVis(false);
    const t = setTimeout(() => {
      setTxt(pos);
      setVis(true);
    }, 1500);
    return () => clearTimeout(t);
  }, [pos]);
  const S = IX_VIS_S,
    FW = 1689,
    FH = 1813,
    f = IX_VISION[pos],
    ft = IX_VISION[txt],
    z = v => +(v * S).toFixed(2);
  const glass = {
    background: 'radial-gradient(50% 50% at 50% 50%, rgba(108,108,108,0.1) 0%, rgba(24,24,20,0.1) 100%)',
    backdropFilter: `blur(${z(93.397)}px)`,
    WebkitBackdropFilter: `blur(${z(93.397)}px)`,
    boxShadow: `inset 0 0 ${z(24.906)}px 0 rgb(255,255,255), inset 0 ${z(-49.812)}px ${z(66.416)}px 0 rgba(255,255,255,0.22), inset 0 ${z(16.604)}px ${z(49.812)}px ${z(-33.208)}px rgba(255,255,255,0.25)`,
    borderRadius: z(58.114),
    boxSizing: 'border-box',
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: z(FW),
      height: z(FH),
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      background: 'var(--wr-night-2)',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)'
    }
  }, IX_VISION.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v.img,
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${v.img}) ${v.bg} no-repeat`,
      opacity: i === pos ? 1 : 0,
      transition: 'opacity 2.2s cubic-bezier(.4,0,.2,1)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'rgba(8,10,16,0.16)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: `radial-gradient(${z(1081.318)}px ${z(1353.407)}px at 50% 50%, rgba(20,21,23,0) 56.25%, rgba(25,26,28,0.12) 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      pointerEvents: 'none',
      display: 'flex',
      gap: z(14.528),
      alignItems: 'flex-start',
      transform: `translate(${z(f.l)}px, ${z(f.t)}px)`,
      transition: 'transform 2.4s cubic-bezier(.65,0,.35,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...glass,
      width: z(112.077),
      height: z(112.077),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: z(7.45)
    }
  }, [34, 61, 34, 61, 34].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: z(5),
      height: z(h),
      borderRadius: z(3),
      background: '#fff'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...glass,
      width: z(666.234),
      height: z(238.682),
      padding: `${z(45.661)}px ${z(53.963)}px ${z(47.736)}px`,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: z(558.308),
      fontFamily: '"SF Compact", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontWeight: 457,
      fontSize: z(ft.fs),
      lineHeight: `${z(72.64)}px`,
      whiteSpace: 'nowrap',
      color: '#fff',
      WebkitFontSmoothing: 'antialiased',
      opacity: vis ? 1 : 0,
      filter: vis ? 'none' : 'blur(3px)',
      transition: vis ? 'opacity 1.1s cubic-bezier(.4,0,.2,1), filter 1.1s cubic-bezier(.4,0,.2,1)' : 'opacity .7s ease, filter .7s ease'
    }
  }, ft.lines[0], /*#__PURE__*/React.createElement("br", null), ft.lines[1]))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 18,
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '5px 6px',
      borderRadius: 999,
      background: 'rgba(8,10,16,0.4)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous",
    onClick: e => {
      e.stopPropagation();
      setPos(p => (p + IX_VISION.length - 1) % IX_VISION.length);
    },
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.08)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "12",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, IX_VISION.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: v.img,
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: i === pos ? 'rgb(31,199,255)' : 'rgba(255,255,255,0.4)',
      boxShadow: i === pos ? '0 0 10px rgba(31,199,255,0.9)' : 'none',
      transition: 'background 1.2s ease, box-shadow 1.2s ease'
    }
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next",
    onClick: e => {
      e.stopPropagation();
      setPos(p => (p + 1) % IX_VISION.length);
    },
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.08)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "12",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: 'scaleX(-1)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))));
}
function IXPromptsSlide({
  index
}) {
  const [sel, setSel] = React.useState(-1);
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index,
    className: "ix-white",
    steps: IX_PROMPTS.length,
    onStep: s => setSel(s - 1),
    style: {
      background: 'var(--wr-night)'
    }
  }, /*#__PURE__*/React.createElement(PromptsInner, {
    sel: sel
  }), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    middle: 540,
    bare: true,
    width: 1689 * IX_VIS_S,
    eyebrow: "VISION AI",
    content: open => /*#__PURE__*/React.createElement(VisionCycle, {
      open: open
    })
  }));
}
function PromptsInner({
  sel
}) {
  const {
    setStep
  } = React.useContext(IXCtx);
  const [phase, setPhase] = React.useState('idle');
  const [ansMs, setAnsMs] = React.useState(0);
  React.useEffect(() => {
    if (sel < 0) {
      setPhase('idle');
      return;
    }
    const p = IX_PROMPTS[sel];
    let alive = true,
      timer = 0,
      audio = null;
    const stop = () => {
      clearTimeout(timer);
      if (audio) {
        audio.pause();
        audio.onended = null;
        audio = null;
      }
    };
    const play = (src, fallback, onStart, done) => {
      stop();
      if (!src) {
        onStart(fallback);
        timer = setTimeout(() => alive && done(), fallback);
        return;
      }
      audio = new Audio(IXA(src));
      audio.onended = () => alive && done();
      audio.onloadedmetadata = () => alive && onStart(audio.duration * 1000);
      audio.play().catch(() => {
        audio = null;
        onStart(fallback);
        timer = setTimeout(() => alive && done(), fallback);
      });
    };
    const askMs = Math.min(10000, Math.max(5000, p.text.length * 140));
    const answer = () => play(p.aAudio, Math.max(2500, p.a.length * 45), ms => {
      setAnsMs(ms);
      setPhase('answer');
    }, () => setPhase('idle'));
    setPhase('ask');
    play(p.qAudio, askMs, () => {}, answer);
    return () => {
      alive = false;
      stop();
    };
  }, [sel]);
  const speaking = phase === 'answer';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -30,
      top: -18,
      width: 1980,
      height: 1116
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "kb",
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${IXA('photos/glasses-hero-blue.png')}) center / cover no-repeat`
    }
  })), IX_PROMPTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.text,
    style: {
      position: 'absolute',
      left: p.l,
      top: p.t
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "pop",
    d: 250 + i * 140
  }, /*#__PURE__*/React.createElement("div", {
    className: `ix-prompt ${sel === i ? 'is-on' : ''} ${sel === i && phase === 'ask' ? 'is-asking' : ''} ${sel >= 0 && sel !== i ? 'is-dim' : ''}`,
    onClick: () => setStep(i + 1),
    style: {
      '--r': p.r + 'deg'
    }
  }, /*#__PURE__*/React.createElement(IXDS.GlassPrompt, {
    text: p.text,
    side: p.side,
    tilt: p.r
  }))))), /*#__PURE__*/React.createElement(B, {
    fx: "draw-br",
    d: 900,
    style: {
      position: 'absolute',
      left: 275,
      top: 252
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "96",
    height: "156",
    viewBox: "0 0 96 156",
    fill: "rgba(255,255,255,0.55)",
    stroke: "rgba(255,255,255,0.55)",
    strokeWidth: "0.9",
    style: {
      overflow: 'visible',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 96 156.25 C 96.138 156.25 96.25 156.138 96.25 156 C 96.25 155.862 96.138 155.75 96 155.75 L 96 156 L 96 156.25 Z M 0 156 L -0.25 156 L -0.25 156.25 L 0 156.25 L 0 156 Z M 0 0 L -1.443 2.5 L 1.443 2.5 L 0 0 Z M 96 156 L 96 155.75 L 0 155.75 L 0 156 L 0 156.25 L 96 156.25 L 96 156 Z M 0 156 L 0.25 156 L 0.25 2.25 L 0 2.25 L -0.25 2.25 L -0.25 156 L 0 156 Z"
  }))), /*#__PURE__*/React.createElement(B, {
    fx: "draw-tl",
    d: 1050,
    style: {
      position: 'absolute',
      left: 1543,
      top: 414
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "138",
    height: "397",
    viewBox: "0 0 138 397",
    fill: "rgba(255,255,255,0.55)",
    stroke: "rgba(255,255,255,0.55)",
    strokeWidth: "0.9",
    style: {
      overflow: 'visible',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.25 C -0.138 -0.25 -0.25 -0.138 -0.25 0 C -0.25 0.138 -0.138 0.25 0 0.25 L 0 0 L 0 -0.25 Z M 138 0 L 138.25 0 L 138.25 -0.25 L 138 -0.25 L 138 0 Z M 138 397 L 139.443 394.5 L 136.557 394.5 L 138 397 Z M 0 0 L 0 0.25 L 138 0.25 L 138 0 L 138 -0.25 L 0 -0.25 L 0 0 Z M 138 0 L 137.75 0 L 137.75 394.75 L 138 394.75 L 138.25 394.75 L 138.25 0 L 138 0 Z"
  }))), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 700,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 912,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 5,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '10px 26px 10px 10px',
      maxWidth: 760,
      borderRadius: 999,
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--glass-shadow)',
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Wave, {
    on: speaking
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 150
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.16em',
      color: '#fff'
    }
  }, "RACE ENGINEER"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      width: 150,
      borderRadius: 3,
      background: 'rgba(255,255,255,0.18)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: sel + phase,
    className: speaking ? 'ix-talk' : '',
    style: {
      height: '100%',
      width: speaking ? '100%' : '0%',
      background: 'linear-gradient(90deg,#0042FF,rgb(31,199,255))',
      '--talk': ansMs + 'ms'
    }
  }))))), /*#__PURE__*/React.createElement(IXLogo, {
    l: 855,
    t: 48,
    d: 600
  }));
}

/* Livestream — live chat, floating reactions (click the stream to send more), ticking viewers. */
const IX_CHAT = [['silverstone_sam', 'Silverstone crowd is unreal 🇬🇧'], ['pitwall.pete', 'That pit lane view 🔥'], ['apex.amy', 'Box box box 📻'], ['gridwalker', 'Copse at full send 😮‍💨'], ['lewis_fan44', 'Mechanics are so fast 🔧⏱️'], ['vroom.vroom', '🏁🏁🏁'], ['maggotts.becketts', 'Front row seats to the garage 👀'], ['paddockpass', 'Softs or mediums?? 🔴🟡'], ['p1.priya', 'Come on Williams!! 💙'], ['stowe.corner', 'Formation lap vibes 🏎️💨']];
const IX_EMO = ['💯', '😁', '🏁', '🏆', '🏎', '🏅'];
const IX_HEARTS = ['#0068DF', 'rgb(31,199,255)', '#FFFFFF', '#0068DF', '#FFFFFF'];
const IX_HEART_D = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
function IXLivestreamSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(LiveInner, null), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    eyebrow: "CREATOR TOOLKIT",
    meta: "Meta glasses",
    title: "Your day, edited before you\u2019re home.",
    chips: ['Auto-edited reel', 'Ready to post']
  }, "Creators stream hands-free while the AI race engineer feeds them stories to narrate. Behind the scenes, our platform gathers every clip captured that day and turns it into a bespoke, professionally edited Williams highlight reel, formatted for each channel and ready to post before they even get home."));
}
function LiveInner() {
  const {
    active
  } = React.useContext(IXCtx);
  const [emo, setEmo] = React.useState([]);
  const [chat, setChat] = React.useState([{
    id: 1,
    name: 'Immy Bewes',
    message: '🏁🏆🏅'
  }, {
    id: 2,
    name: 'katyboooo',
    message: 'Wish I was there!'
  }, {
    id: 3,
    name: 'Bertie Kinnings',
    message: '🏎🏎🏎'
  }]);
  const idRef = React.useRef(10);
  const combo = React.useRef({
    t: 0,
    n: 0
  });
  const spawn = (count = 1, set = IX_EMO, spread = 0, at = null) => {
    const heart = set === IX_HEARTS;
    const add = Array.from({
      length: count
    }).map(() => {
      const sz = heart ? 44 + Math.round(Math.random() * 18) : 32;
      return {
        id: idRef.current++,
        heart,
        e: set[Math.floor(Math.random() * set.length)],
        sz,
        x: at ? at[0] - sz / 2 + (Math.random() * 40 - 20) : 444 + Math.random() * 70,
        y: at ? at[1] - sz / 2 : 930,
        dx: (Math.random() * 110 - 55).toFixed(0),
        dur: (2.2 + Math.random() * 1.4).toFixed(2),
        dl: (spread ? Math.random() * spread : 0).toFixed(2)
      };
    });
    setEmo(v => [...v.slice(-70), ...add]);
  };
  const love = (e, at) => {
    e && e.stopPropagation();
    const now = Date.now(),
      c = combo.current;
    c.n = now - c.t < 700 ? Math.min(c.n + 1, 6) : 0;
    c.t = now;
    spawn(4 + c.n * 3, IX_HEARTS, 0.25 + c.n * 0.12, at || [480, 950]);
  };
  const loveAt = e => {
    const r = e.currentTarget.getBoundingClientRect();
    love(e, [(e.clientX - r.left) / r.width * SW, (e.clientY - r.top) / r.height * SH]);
  };
  React.useEffect(() => {
    if (!active) return;
    const r = setInterval(() => spawn(1), 900);
    let k = 0;
    const c = setInterval(() => {
      const m = IX_CHAT[k++ % IX_CHAT.length];
      setChat(v => [...v.slice(-2), {
        id: idRef.current++,
        name: m[0],
        message: m[1]
      }]);
    }, 2800);
    return () => {
      clearInterval(r);
      clearInterval(c);
    };
  }, [active]);
  const I = IXDS.Icon;
  const S = 0.8,
    SW = 554,
    SH = 1095,
    BZ = 12;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IXTextBlock, {
    l: 164,
    t: 318,
    w: 1000,
    num: "01",
    kicker: "User One: The Creator",
    title: "POV UGC & Livestream by Creators",
    body: "Enable creators to record the Williams race weekend from a true first person perspective while receiving AI powered stories and insights that enrich the content they create."
  }, /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 520,
    style: {
      marginTop: 56,
      paddingTop: 36,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      alignItems: 'center',
      gap: 36,
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexShrink: 0
    }
  }, ['instagram', 'tiktok', 'snapchat'].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "ix-social",
    style: {
      width: 68,
      height: 68,
      borderRadius: 20,
      background: 'rgba(255,255,255,0.06)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.16)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `assets/social-${n}.svg`,
    alt: n,
    width: "30",
    height: "30",
    style: {
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)'
    }
  }, "LIVE ON EVERY CHANNEL"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 300,
      lineHeight: '34px',
      color: 'rgba(255,255,255,0.85)',
      textWrap: 'pretty'
    }
  }, "First-person POV is social\u2019s breakout format, with clips pulling in millions of views. Every creator becomes a live Williams broadcast.")))), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 0,
    style: {
      position: 'absolute',
      left: 1180,
      top: 40,
      width: 760,
      height: 1000,
      zIndex: 20,
      pointerEvents: 'none',
      background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,104,223,0.42) 0%, rgba(0,66,255,0.16) 45%, rgba(0,66,255,0) 100%)',
      filter: 'blur(20px)'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 150,
    style: {
      position: 'absolute',
      zIndex: 20,
      left: 1560 - SW * S / 2 - BZ,
      top: (1080 - SH * S) / 2 - BZ - 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: BZ,
      borderRadius: 68,
      background: 'linear-gradient(160deg, #2a2d36 0%, #121419 45%, #1c1f27 100%)',
      boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.14), 0 0 0 1px rgba(0,0,0,0.6), 0 30px 80px rgba(0,0,0,0.55), 0 0 90px rgba(0,104,223,0.28)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: loveAt,
    style: {
      position: 'relative',
      width: SW * S,
      height: SH * S,
      borderRadius: 56,
      overflow: 'hidden',
      background: '#000',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: SW,
      height: SH,
      transform: `scale(${S})`,
      transformOrigin: '0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${IXA('photos/creator-selfie-trackside.png')}) 99.765% 144.222% / 111.092% 99.964% no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 200,
      background: 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 52,
      width: SW,
      height: SH - 52
    }
  }, /*#__PURE__*/React.createElement(IXDS.StreamerHandle, {
    handle: "lily_andrews",
    avatarSrc: IXA('photos/avatar-lily.png'),
    style: {
      position: 'absolute',
      left: 22,
      top: 16
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: "9.9",
    height: "9.9",
    viewBox: "0 0 9.9 9.9",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      transform: 'matrix(0.707,-0.707,0.707,0.707,238,37)',
      transformOrigin: '0 0',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 9.9 L 9.9 9.9",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 320,
      top: 21,
      display: 'flex',
      alignItems: 'center',
      gap: 19
    }
  }, /*#__PURE__*/React.createElement(IXDS.LiveBadge, null), /*#__PURE__*/React.createElement(IXDS.ViewerCount, {
    count: "140K"
  })), /*#__PURE__*/React.createElement(IXDS.Icons, {
    name: "Exit",
    dark: true,
    size: 28,
    style: {
      position: 'absolute',
      left: 507,
      top: 26
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 25,
      top: 757,
      display: 'flex',
      flexDirection: 'column',
      gap: 19,
      pointerEvents: 'none'
    }
  }, chat.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: "ix-chat"
  }, /*#__PURE__*/React.createElement(IXDS.CommentRow, {
    name: c.name,
    message: c.message
  }))))), emo.map(e => {
    const st = {
      position: 'absolute',
      left: e.x,
      top: e.y,
      lineHeight: 1,
      pointerEvents: 'none',
      '--dx': e.dx + 'px',
      '--dur': e.dur + 's',
      '--dl': e.dl + 's'
    };
    const end = () => setEmo(v => v.filter(x => x.id !== e.id));
    return e.heart ? /*#__PURE__*/React.createElement("svg", {
      key: e.id,
      className: "ix-float",
      onAnimationEnd: end,
      width: e.sz,
      height: e.sz,
      viewBox: "0 0 24 24",
      style: {
        ...st,
        overflow: 'visible',
        filter: e.e === '#FFFFFF' ? 'drop-shadow(0 0 6px rgba(31,199,255,0.7))' : 'drop-shadow(0 0 8px rgba(31,199,255,0.8))'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: IX_HEART_D,
      fill: e.e
    })) : /*#__PURE__*/React.createElement("span", {
      key: e.id,
      className: "ix-float",
      onAnimationEnd: end,
      style: {
        ...st,
        fontSize: e.sz
      }
    }, e.e);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 9,
      width: 96,
      height: 26,
      marginLeft: -48,
      borderRadius: 16,
      background: '#000'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 8,
      width: 134,
      height: 5,
      marginLeft: -67,
      borderRadius: 3,
      background: 'rgba(255,255,255,0.85)'
    }
  })))), /*#__PURE__*/React.createElement(B, {
    fx: "pop",
    d: 900,
    style: {
      position: 'absolute',
      zIndex: 22,
      right: 1920 - 1352,
      top: 150
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => love(e),
    className: "ix-love",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px 10px 12px',
      border: 0,
      borderRadius: 999,
      cursor: 'pointer',
      background: 'linear-gradient(180deg, rgba(44,49,64,0.92), rgba(24,27,38,0.92))',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.16), 0 12px 32px rgba(0,0,0,0.45)',
      fontFamily: 'var(--font-display)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'rgba(31,199,255,0.16)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "15",
    viewBox: "0 0 24 22",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    fill: "rgb(31,199,255)",
    style: {
      filter: 'drop-shadow(0 0 4px rgba(31,199,255,0.8))'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      letterSpacing: '0.04em',
      whiteSpace: 'nowrap'
    }
  }, "Show Some Love"))));
}

/* Refined title + lead block (matches Overview styling): cyan index, rule, medium title, light body. */
function IXTextBlock({
  l,
  t,
  w,
  num,
  kicker,
  title,
  body,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: l,
      top: 0,
      bottom: 0,
      width: w,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, kicker && (() => {
    const [a, b] = kicker.split(':');
    return /*#__PURE__*/React.createElement(B, {
      fx: "fade",
      d: 40,
      style: {
        marginBottom: 14,
        fontSize: 22,
        fontWeight: 400,
        letterSpacing: '0.04em',
        color: 'rgba(255,255,255,0.86)'
      }
    }, a, b !== undefined && /*#__PURE__*/React.createElement(React.Fragment, null, ": ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: 'rgb(31,199,255)',
        textShadow: '0 0 14px rgba(31,199,255,0.65), 0 0 28px rgba(0,104,223,0.5)'
      }
    }, b.trim())));
  })(), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 80,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 305,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  })), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 180
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-0.015em',
      color: '#fff',
      textWrap: 'balance'
    }
  }, title)), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 340,
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 29,
      lineHeight: '44px',
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty',
      maxWidth: 900
    }
  }, body)), children);
}
function IXVipSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    eyebrow: "THE RECAP",
    meta: "Delivered after the event",
    title: "A highlight reel with your brand in it.",
    chips: ['Sponsor-branded', 'LinkedIn-ready']
  }, "Our platform gathers every moment each guest captures and produces a professional highlight reel of their day, showcasing the sponsor brand they represent alongside Williams. Polished, on-brand and ready to post on LinkedIn."), /*#__PURE__*/React.createElement(IXTextBlock, {
    l: 164,
    t: 330,
    w: 960,
    num: "02",
    kicker: "User Two: The Corporates",
    title: "The Ultimate VIP Sponsor Experience",
    body: "Treat your most important guests to an AI powered race weekend by providing Meta glasses for the entire event, allowing them to capture unforgettable moments, take the glasses home as a lasting memento, and receive a professionally edited, LinkedIn ready highlight recap to relive and share the experience."
  }), /*#__PURE__*/React.createElement(B, {
    fx: "edge",
    d: 0,
    style: {
      position: 'absolute',
      left: 1363,
      top: 0,
      width: 2,
      height: 1080,
      background: '#fff',
      zIndex: 21,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "reveal",
    d: 0,
    style: {
      position: 'absolute',
      left: 1363,
      top: 0,
      width: 628,
      height: 1116,
      overflow: 'hidden',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(PX, {
    depth: -10,
    l: -16,
    t: -12,
    style: {
      width: 660,
      height: 1140
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-photo",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'url(assets/vip-garage-guests.png) center 30% / cover no-repeat'
    }
  }))), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 650,
    style: {
      position: 'absolute',
      left: 1150,
      top: 654,
      zIndex: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-step",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      width: 420,
      height: 352,
      borderRadius: 'var(--radius-photo)',
      background: 'url(assets/vip-packaging.png) center / cover no-repeat',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 30px 70px rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '56px 22px 18px',
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.82) 100%)',
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      fontWeight: 400,
      lineHeight: '26px',
      color: '#fff'
    }
  }, "Premium branded packaging, a keepsake to remember the day"))))));
}

/* Fan experiences carousel: manual prev/next; text on the left swaps with each image. */
const IX_FAN_SLIDES = [{
  img: 'assets/creator-pov-fans.png',
  tag: 'Creator POV',
  sub: 'Fans live in the paddock',
  title: 'The paddock, through a creator’s eyes',
  body: 'Fans watch the race weekend through their favourite creator’s eyes, live and in first person. They hear the engines, spot famous faces in the pit lane in real time and see the car up close, moments TV rarely catches, while the creator shares insider stories and fun facts along the way. And they’re part of it, commenting as it happens, closer to the creator and closer to the race.'
}, {
  img: 'assets/time-capsule-vr.png',
  tag: 'Williams Time Capsule',
  sub: 'Fan zone VR experience',
  title: 'The Williams Time Capsule',
  body: 'Step into the Williams Time Capsule, a generative VR experience in the team’s fan zone at every Grand Prix. Narrated by Alex Albon, it carries fans through the eras: stepping inside iconic cars in every Williams livery, reliving legendary races and standing in the team’s defining moments as if they were there. Powered by Claude AI, each journey adapts to the fan and is built bespoke to the host Grand Prix and its history, so no two are ever the same.'
}, {
  img: 'assets/ar-circuit-lapz.png',
  tag: 'AR circuit replica',
  sub: 'Live, captured in-device',
  title: 'The grandstand, at home',
  body: 'Finally, platforms like Lapz have shown how XR has the ability to transform how sports media is consumed. Something like this could be built bespoke to Williams, powered by your data, so fans follow the drivers, gaps and strategy calls in real time. A new way to watch the race, and an opportunity to tap into one of the fastest-growing and most innovative ways fans consume sport.'
}];
function IXDemoSlide({
  index
}) {
  const [idx, setIdx] = React.useState(0);
  const [info, setInfo] = React.useState(false);
  const n = IX_FAN_SLIDES.length;
  const go = dir => e => {
    e.stopPropagation();
    setIdx(i => (i + dir + n) % n);
  };
  const cur = IX_FAN_SLIDES[idx];
  const FW = 860,
    FH = 483.75;
  const btn = {
    width: 48,
    height: 48,
    borderRadius: '50%',
    border: 0,
    padding: 0,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(10,12,20,0.55)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)'
  };
  const chev = flip => /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "18",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: flip ? 'scaleX(-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 0,
    style: {
      position: 'absolute',
      left: 1000,
      top: 200,
      width: 900,
      height: 700,
      pointerEvents: 'none',
      background: 'radial-gradient(50% 50% at 50% 55%, rgba(0,104,223,0.3) 0%, rgba(0,66,255,0) 100%)',
      filter: 'blur(20px)'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 500,
    style: {
      position: 'absolute',
      left: 1000,
      top: (1080 - FH) / 2 - 64,
      zIndex: 30,
      fontFamily: 'var(--font-display)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setInfo(v => !v);
    },
    style: {
      pointerEvents: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 40,
      padding: '0 18px 0 14px',
      borderRadius: 999,
      border: 0,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: '0.04em',
      color: '#fff',
      background: info ? 'rgba(0,104,223,0.22)' : 'rgba(255,255,255,0.06)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      boxShadow: info ? 'inset 0 0 0 1px rgba(31,199,255,0.6), 0 0 18px rgba(0,104,223,0.35)' : 'inset 0 0 0 1px rgba(255,255,255,0.2)',
      transition: 'background .4s ease, box-shadow .4s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 600,
      color: 'rgb(31,199,255)',
      boxShadow: 'inset 0 0 0 1.5px rgb(31,199,255)',
      transform: info ? 'rotate(45deg)' : 'none',
      transition: 'transform .4s cubic-bezier(.4,0,.2,1)'
    }
  }, info ? '+' : 'i'), "The Curious?")), /*#__PURE__*/React.createElement(B, {
    fx: "right",
    d: 200,
    style: {
      position: 'absolute',
      left: 1000,
      top: (1080 - FH) / 2,
      width: FW,
      height: FH,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)',
      background: 'var(--wr-night-2)'
    }
  }, IX_FAN_SLIDES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.tag,
    className: "ix-fan-img",
    style: {
      position: 'absolute',
      inset: 0,
      background: s.img ? `url(${s.img}) center / cover no-repeat` : 'repeating-linear-gradient(135deg, #121725 0 14px, #0e1220 14px 28px)',
      opacity: i === idx ? 1 : 0,
      transform: i === idx ? 'scale(1)' : 'scale(1.04)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, !s.img && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 14,
      letterSpacing: '0.08em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, "time capsule image to come"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(75% 90% at 100% 100%, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 75%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    key: 'c' + idx,
    className: "ix-fan-cap",
    style: {
      position: 'absolute',
      right: 30,
      bottom: 26,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4,
      fontFamily: 'var(--font-display)',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: '#fff'
    }
  }, cur.tag.toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, cur.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: 22,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous",
    className: "ix-fan-btn",
    onClick: go(-1),
    style: btn
  }, chev(false)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next",
    className: "ix-fan-btn",
    onClick: go(1),
    style: btn
  }, chev(true)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#fff',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(idx + 1).padStart(2, '0'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.55)',
      fontWeight: 300
    }
  }, " / ", String(n).padStart(2, '0')))))), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    eyebrow: "THE ECOSYSTEM",
    meta: "Circuit to home",
    title: "From the paddock, straight to the fans who couldn\u2019t be there.",
    chips: ['Live POV', 'Creator-led', 'Beyond TV']
  }, "It closes the loop. F1 creators livestream their first-person view live from the circuit, straight to the fans watching from home. A new way to tell the story of a race weekend, with the views TV doesn\u2019t show, and a stronger connection between Williams, its creators and the fans who follow them."), /*#__PURE__*/React.createElement("div", {
    key: 't' + idx
  }, /*#__PURE__*/React.createElement(IXTextBlock, {
    l: 164,
    t: 330,
    w: 720,
    num: "03",
    kicker: "User Three: The Curious",
    title: cur.title,
    body: cur.body
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      e.stopPropagation();
      setInfo(false);
    },
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: info ? 'auto' : 'none',
      background: 'rgba(4,6,12,0.62)',
      backdropFilter: info ? 'blur(14px)' : 'blur(0px)',
      WebkitBackdropFilter: info ? 'blur(14px)' : 'blur(0px)',
      opacity: info ? 1 : 0,
      transition: 'opacity .6s cubic-bezier(.4,0,.2,1), backdrop-filter .6s ease, -webkit-backdrop-filter .6s ease',
      fontFamily: 'var(--font-display)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 960,
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      background: 'rgba(10,12,20,0.92)',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 50px rgba(0,104,223,0.5), 0 40px 90px rgba(0,0,0,0.6)',
      cursor: 'default',
      opacity: info ? 1 : 0,
      transform: info ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(14px)',
      transition: 'opacity .6s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.2,.8,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 420,
      background: `url(assets/the-curious-fans.png) center 35% / cover no-repeat`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(6,8,14,0.9) 0%, rgba(6,8,14,0.45) 32%, rgba(6,8,14,0) 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 44,
      bottom: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 48,
      fontWeight: 500,
      lineHeight: 1,
      color: '#fff'
    }
  }, "The Curious"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: '0.08em',
      color: 'rgba(255,255,255,0.78)'
    }
  }, "Who are they")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: () => setInfo(false),
    style: {
      position: 'absolute',
      top: 22,
      right: 22,
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(10,12,20,0.55)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.25)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2 L12 12 M12 2 L2 12",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '36px 44px 42px',
      fontSize: 26,
      lineHeight: 1.55,
      fontWeight: 400,
      color: '#fff',
      textWrap: 'pretty'
    }
  }, "The Curious are Williams\u2019 loyal, invested fanbase, the ones who want to know more, try new things and be part of the journey through ups and downs. They\u2019re deeply invested in the team and its drivers, always curious about what\u2019s next. They open the door to new technologies, embrace new experiences and help Williams evolve, getting ever closer to the brand they love."))));
}
const IX_META_USES = [['Live telemetry', 'Speed, tyre wear, gaps and strategy calls float in view as they happen, so guests read the race exactly like the pit wall does, without ever looking down at a screen.'], ['Onboard laps', 'Ride a full lap of Silverstone from the cockpit, with the driver’s view, braking points and team radio playing out around you in true scale, as if you were in the seat.'], ['3D interactable models', 'Place the car in the room and explore it part by part, from the power unit to the floor, while our AI engineer explains exactly what each piece does and why it matters.'], ['Highlight reels', 'Relive the team’s defining moments exactly as the drivers lived them, from lights out to the podium, told in the first person and replayed in full, immersive detail.']];
const IX_VISION_STATS = [['$14.4B', 'Projected smart glasses market by 2033, up from $2.5B in 2025'], ['110%', 'Year-on-year growth in smart glasses shipments, first half of 2025'], ['Big Tech', 'Meta, Google, Apple and Samsung are all building for the category']];
/* Stacked glass feature cards: arrows slide the front card out left; back reveals it again. */
function FeatureStack({
  reset
}) {
  const [k, setK] = React.useState(0);
  React.useEffect(() => {
    if (!reset) setK(0);
  }, [reset]);
  const n = IX_META_USES.length,
    CH = 232;
  const go = d => e => {
    e.stopPropagation();
    setK(v => Math.max(0, Math.min(n - 1, v + d)));
  };
  const arrow = (d, off) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": d < 0 ? 'Previous' : 'Next',
    className: "ix-lift",
    disabled: off,
    onClick: go(d),
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      border: 0,
      padding: 0,
      cursor: off ? 'default' : 'pointer',
      opacity: off ? 0.35 : 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(30,34,46,0.55)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)',
      transition: 'opacity .3s ease'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "17",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: d > 0 ? 'scaleX(-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: CH + 3 * 14
    }
  }, IX_META_USES.map(([t, body], i) => {
    const d = i - k,
      out = d < 0,
      front = d === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: CH,
        boxSizing: 'border-box',
        padding: '26px 32px',
        borderRadius: 20,
        overflow: 'hidden',
        zIndex: 10 - Math.abs(d),
        background: 'linear-gradient(160deg, rgba(247,246,243,0.94) 0%, rgba(230,228,224,0.92) 100%)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.7), 0 24px 50px rgba(0,24,72,0.3)',
        transform: out ? 'translateX(-115%) rotate(-5deg)' : `translateY(${d * 14}px) scale(${1 - d * 0.045})`,
        transformOrigin: '50% 0',
        opacity: out || d > 2 ? 0 : 1 - d * 0.18,
        pointerEvents: front && reset ? 'auto' : 'none',
        transition: 'transform .75s cubic-bezier(.2,.8,.2,1), opacity .6s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        opacity: front ? 1 : 0,
        transition: 'opacity .4s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.2em',
        color: '#0068DF',
        fontVariantNumeric: 'tabular-nums'
      }
    }, "FEATURE ", String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'linear-gradient(90deg, rgba(0,104,223,0.35), rgba(0,104,223,0))'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 500,
        lineHeight: '34px',
        color: '#0B1020'
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 90,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        fontSize: 21,
        fontWeight: 400,
        lineHeight: '30px',
        color: 'rgba(11,16,32,0.72)'
      }
    }, body), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, IX_META_USES.map((_, j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        width: j === i ? 28 : 12,
        height: 3,
        borderRadius: 2,
        background: j === i ? '#0068DF' : 'rgba(11,16,32,0.16)'
      }
    })))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, arrow(-1, k === 0), arrow(1, k === n - 1), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#fff',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(k + 1).padStart(2, '0'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontWeight: 300
    }
  }, " / ", String(n).padStart(2, '0')))));
}

/* Drawer body for Why us: Claude (Williams' thinking partner) vs ... (creative AI partner building on Claude). */
function ClaudeCompare() {
  const row = (name, role, body) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 500,
      color: '#fff'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)'
    }
  }, role)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 23,
      fontWeight: 300,
      lineHeight: '35px',
      color: 'rgba(255,255,255,0.86)',
      textWrap: 'pretty'
    }
  }, body));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, row('Claude', 'THINKING PARTNER', 'Shapes how Williams thinks, plans and performs, from race strategy to car development.'), row('...', 'CREATIVE AI PARTNER', 'Builds on Claude to turn that same intelligence into creative AI experiences for fans and partners.'));
}

/* Vision AI: simple market story first; "Tech Updates" slides the glasses in and swaps to the Meta VR Glasses detail. */
function IXMetaSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(MetaInner, null));
}
function MetaInner() {
  const {
    active
  } = React.useContext(IXCtx);
  const [tech, setTech] = React.useState(false);
  React.useEffect(() => {
    if (!active) setTech(false);
  }, [active]);
  const ease = 'cubic-bezier(.2,.8,.2,1)';
  const eyebrow = label => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "04"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 305,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.72)'
    }
  }, label));
  const h2 = {
    margin: 0,
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: 68,
    lineHeight: '72px',
    letterSpacing: '-0.015em',
    color: '#fff',
    textWrap: 'balance'
  };
  const pill = {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '16px 26px 16px 30px',
    border: 0,
    borderRadius: 999,
    cursor: 'pointer',
    fontFamily: 'var(--font-display)',
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: '0.06em',
    color: '#0B1020',
    background: '#fff',
    boxShadow: '0 0 0 1px rgba(255,255,255,0.2), 0 12px 36px rgba(0,104,223,0.35)'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IXStreaks, {
    d: 250
  }), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 0,
    style: {
      position: 'absolute',
      left: 760,
      top: 120,
      width: 1100,
      height: 760,
      pointerEvents: 'none',
      background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,104,223,0.28) 0%, rgba(0,66,255,0) 100%)',
      filter: 'blur(20px)',
      opacity: tech ? 1 : 0,
      transition: 'opacity .9s ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 900,
      top: 160,
      width: 600,
      height: 522,
      zIndex: 20,
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)',
      background: 'url(assets/meta-glasses-puck.png) center / cover no-repeat',
      opacity: tech ? 1 : 0,
      transform: tech ? 'none' : 'translateX(160px) scale(.97)',
      transition: tech ? `opacity .9s ease 0.35s, transform 1.2s ${ease} 0.35s` : 'opacity .4s ease, transform .5s ease',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 150,
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.45) 50%, rgba(10,12,20,0.78) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 26,
      bottom: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: '#fff'
    }
  }, "META VR GLASSES"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.8)'
    }
  }, "Glasses with pocket compute puck"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 1340,
      top: 620,
      width: 520,
      height: 293,
      zIndex: 20,
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)',
      background: 'url(assets/meta-glasses-inner.png) center / cover no-repeat',
      opacity: tech ? 1 : 0,
      transform: tech ? 'none' : 'translateX(160px) scale(.97)',
      transition: tech ? `opacity .9s ease 0.6s, transform 1.2s ${ease} 0.6s` : 'opacity .4s ease, transform .5s ease',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 150,
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.45) 50%, rgba(10,12,20,0.78) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 26,
      bottom: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: '#fff'
    }
  }, "INSIDE THE FRAME"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.8)'
    }
  }, "Micro-OLED displays with custom-fit lenses"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      top: 0,
      bottom: 40,
      width: 1180,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      opacity: tech ? 0 : 1,
      transform: tech ? 'translateX(-40px)' : 'none',
      pointerEvents: tech ? 'none' : 'auto',
      transition: tech ? 'opacity .45s ease, transform .6s ease' : `opacity .8s ease .45s, transform 1s ${ease} .45s`
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 80
  }, eyebrow('VISION AI')), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 180
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "A New Era For Sports Media")), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 320,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 1000,
      fontWeight: 300,
      fontSize: 30,
      lineHeight: '44px',
      color: 'rgba(255,255,255,0.78)',
      textWrap: 'pretty'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: '#fff'
    }
  }, "Why now?"), " XR and vision AI are changing how sport is watched. Fans now consume media hands-free, first-person and in real time, and the brands that build for these formats early will own the next generation of attention.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      columnGap: 40
    }
  }, IX_VISION_STATS.map(([n, t], i) => /*#__PURE__*/React.createElement(B, {
    key: n,
    fx: "up",
    d: 460 + i * 120,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 20,
      borderTop: '1.5px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 500,
      lineHeight: '60px',
      color: '#fff',
      fontVariantNumeric: 'tabular-nums'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 21,
      fontWeight: 300,
      lineHeight: '29px',
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty'
    }
  }, t)))), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 860,
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ix-lift",
    onClick: e => {
      e.stopPropagation();
      setTech(true);
    },
    style: pill
  }, "Tech Updates", /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "16",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: 'scaleX(-1)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      top: 0,
      bottom: 0,
      width: 620,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      opacity: tech ? 1 : 0,
      transform: tech ? 'none' : 'translateY(24px)',
      pointerEvents: tech ? 'auto' : 'none',
      transition: tech ? `opacity .8s ease .55s, transform 1s ${ease} .55s` : 'opacity .4s ease, transform .4s ease'
    }
  }, eyebrow('TECH UPDATES'), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Meta VR Glasses"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      alignSelf: 'flex-start',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 16px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.4)',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#fff'
    }
  }), "RELEASING SPRING 2027"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      fontWeight: 300,
      fontSize: 24,
      lineHeight: '36px',
      color: 'rgba(255,255,255,0.78)',
      textWrap: 'pretty'
    }
  }, "Meta designed these glasses around one idea: changing how people experience media. A 5K micro-OLED display in a frame of around 100 grams, powered by a pocket-sized compute puck, turns what you see into the screen. Meta has opened the platform to creators and brands, so the partners who build for it first define what it becomes."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ix-lift",
    onClick: e => {
      e.stopPropagation();
      setTech(false);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px 10px 14px',
      border: 0,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.4)',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "13",
    viewBox: "0 0 12 18",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Back"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: true,
    "aria-disabled": "true",
    onClick: e => e.stopPropagation(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px 10px 14px',
      border: 0,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.4)',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#fff',
      padding: '10px 14px 10px 18px',
      cursor: 'default',
      opacity: 0.4
    }
  }, "Next", /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "13",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: 'scaleX(-1)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))));
}

/* Feasibility: built on Claude (Williams' official thinking partner) by Kinnovate. */
const IX_BUILD_FLOW = [['Guest asks', 'Meta glasses pick up a natural question, hands-free'], ['Claude reasons', 'Answers from team-approved knowledge and live session context'], ['Engineer replies', 'A race-engineer voice responds, straight in the ear'], ['Moments captured', 'Footage is cut into a personal highlight reel']];
function IXClaudeSlide({
  index
}) {
  const partners = [['Claude', 'Official thinking partner of Williams Racing', 'Already embedded across the organisation, Claude works alongside engineers and strategists, shaping how the team thinks, plans and performs in race strategy, car development and operations.'], ['Kinnovate', 'Creative AI partner', 'We build on Claude to create new experiences for Williams and its fans, showcasing what Claude can do while pushing the Williams brand forward.']];
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      top: 176,
      width: 1592,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 80,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "05"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 305,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "HOW WE BUILD IT")), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 180
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-0.015em',
      color: '#fff'
    }
  }, "Built with Williams\u2019 own thinking partner")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 32
    }
  }, partners.map(([name, role, body], i) => /*#__PURE__*/React.createElement(B, {
    key: name,
    fx: "pop",
    d: 340 + i * 140
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-panel"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      height: '100%',
      minHeight: 292,
      borderRadius: 'var(--radius-card)',
      background: 'var(--wr-panel)',
      boxShadow: 'var(--shadow-card)',
      padding: '44px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.14em',
      color: 'rgb(31,199,255)'
    }
  }, role.toUpperCase()), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 44,
      lineHeight: '48px',
      color: '#fff'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontWeight: 300,
      fontSize: 24,
      lineHeight: '36px',
      color: 'rgba(255,255,255,0.78)',
      textWrap: 'pretty'
    }
  }, body)))))), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 700,
    style: {
      marginTop: 64,
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "HOW IT WORKS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.72)'
    }
  }, "Built on hardware and models already in use today")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      columnGap: 32
    }
  }, IX_BUILD_FLOW.map(([t, b], i) => /*#__PURE__*/React.createElement(B, {
    key: t,
    fx: "left",
    d: 800 + i * 140,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 22,
      borderTop: '1.5px solid rgba(255,255,255,0.16)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 500,
      lineHeight: '32px',
      color: '#fff'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 300,
      lineHeight: '32px',
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty'
    }
  }, b))))));
}

/* Why-us panel: same ladder as the Overview list — cyan index, medium title, gradient rule, light body. */
function WhyPanel({
  num,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 584,
      height: 435,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-card)',
      background: 'var(--wr-panel)',
      boxShadow: 'var(--shadow-card)',
      padding: '56px 52px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, num), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 40,
      lineHeight: '44px',
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 180,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 24,
      lineHeight: '36px',
      color: 'rgba(255,255,255,0.78)',
      textWrap: 'pretty'
    }
  }, children));
}
function IXWhyUsSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 200,
    style: {
      position: 'absolute',
      left: 831,
      top: 173
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...ixTitle,
      fontSize: 'var(--type-display-size)',
      lineHeight: 'var(--type-display-lh)',
      whiteSpace: 'nowrap'
    }
  }, "Why us")), /*#__PURE__*/React.createElement(PX, {
    depth: 8,
    l: 346,
    t: 323
  }, /*#__PURE__*/React.createElement(B, {
    fx: "pop",
    d: 400
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-panel"
  }, /*#__PURE__*/React.createElement(WhyPanel, {
    num: "01",
    title: "Bespoke AI software"
  }, "We design and build the complete Williams experience, including the AI character, paddock journey, sponsor integrations, personalised interactions and automated highlight recap software.")))), /*#__PURE__*/React.createElement(PX, {
    depth: 12,
    l: 991,
    t: 323
  }, /*#__PURE__*/React.createElement(B, {
    fx: "pop",
    d: 560
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-panel"
  }, /*#__PURE__*/React.createElement(WhyPanel, {
    num: "02",
    title: "On site operations"
  }, "We manage every aspect on site, from device preparation and guest onboarding to hardware logistics, technical support and content delivery, ensuring a seamless experience for every guest.")))), /*#__PURE__*/React.createElement(IXLogo, {
    l: 855,
    t: 974,
    d: 800
  }), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "right",
    middle: 540,
    width: 720,
    eyebrow: "LEVERAGING CLAUDE",
    meta: "Claude \xD7 ...",
    title: "One intelligence, on track and off it.",
    content: /*#__PURE__*/React.createElement(ClaudeCompare, null)
  }));
}
Object.assign(window, {
  IXPromptsSlide,
  IXLivestreamSlide,
  IXVipSlide,
  IXDemoSlide,
  IXMetaSlide,
  IXClaudeSlide,
  IXWhyUsSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck-saved-2026-09-29/ix-slides-b.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck-saved-2026-09-29/ix-slides-c.jsx
try { (() => {
/* The 3 Users: flip cards. Front = portrait + title; back = commercial value. Long backs grow downward after the flip and close before flipping back. */
const IX_USERS = [{
  n: '01',
  name: 'The Creator',
  img: IXA('photos/creator-selfie-trackside.png'),
  bg: '-299px -377px / 740px 1314px no-repeat',
  head: 'Earned reach, at creator scale',
  body: 'Every creator becomes a live Williams broadcast. Their first-person content puts the team in front of millions of highly engaged followers, building community and generating user-generated content and earned reach at a fraction of the cost of paid media.',
  tags: ['UGC', 'Reach', 'Community']
}, {
  n: '02',
  name: 'The Corporates',
  img: 'assets/vip-garage-guests.png',
  bg: '-227px -220px / 667px 1187px no-repeat',
  head: 'Deeper partnerships, new ones opened',
  body: 'A premium, personalised hospitality experience that strengthens relationships with existing sponsors and gives Williams a distinctive platform to open conversations with prospective partners. Every guest leaves with branded content that keeps the partnership visible long after race day.',
  tags: ['Sponsor retention', 'New partners']
}, {
  n: '03',
  name: 'The Curious',
  img: 'assets/curious-fan.png',
  bg: '-24px -88px / 540px 959px no-repeat',
  head: 'Closer to the sport, from anywhere',
  body: 'Williams is committed to bringing F1’s evolving fanbase closer to the sport through pioneering technologies and new media formats. Whether following their favourite F1 creator through first-person views of the paddock and pit lane, or trying new mediums like the AR experience, this fan isn’t at the circuit, but can feel like they are. It’s how we grow a younger demographic: a new generation of supporters who embrace wide-ranging, cross-cultural interests beyond racing.',
  tags: ['Next-gen fans', 'New media']
}];
const IXU_S = 440;
const ixuGlow = '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)';
function IXUserCard({
  u
}) {
  const {
    active
  } = React.useContext(IXCtx);
  const [flip, setFlip] = React.useState(false);
  const [h, setH] = React.useState(IXU_S);
  const [txt, setTxt] = React.useState(false);
  const inner = React.useRef(null),
    tm = React.useRef([]),
    busy = React.useRef(false);
  const later = (fn, ms) => tm.current.push(setTimeout(fn, ms));
  const clear = () => {
    tm.current.forEach(clearTimeout);
    tm.current = [];
  };
  React.useEffect(() => {
    if (!active) {
      clear();
      setFlip(false);
      setH(IXU_S);
      setTxt(false);
      busy.current = false;
    }
  }, [active]);
  React.useEffect(() => clear, []);
  const toggle = e => {
    e.stopPropagation();
    if (busy.current) return;
    busy.current = true;
    clear();
    if (!flip) {
      const need = Math.max(IXU_S, inner.current ? inner.current.offsetHeight : IXU_S);
      setFlip(true);
      if (need > IXU_S) {
        later(() => setH(need), 760);
        later(() => setTxt(true), 1000);
        later(() => {
          busy.current = false;
        }, 1400);
      } else {
        later(() => setTxt(true), 520);
        later(() => {
          busy.current = false;
        }, 900);
      }
    } else {
      const grown = h > IXU_S;
      setTxt(false);
      if (grown) later(() => setH(IXU_S), 260);
      later(() => setFlip(false), grown ? 820 : 280);
      later(() => {
        busy.current = false;
      }, grown ? 1700 : 1150);
    }
  };
  const face = {
    position: 'absolute',
    inset: 0,
    borderRadius: 'var(--radius-photo)',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    boxShadow: ixuGlow
  };
  const plus = turn => /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 18,
      top: 18,
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'rgba(10,12,20,0.5)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    style: {
      display: 'block',
      transform: `rotate(${turn ? 45 : 0}deg)`
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1V13M1 7H13",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "ix-user",
    onClick: toggle,
    style: {
      width: IXU_S,
      perspective: 1800,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: IXU_S,
      height: h,
      transformStyle: 'preserve-3d',
      transform: `rotateY(${flip ? 180 : 0}deg)`,
      transition: 'transform .8s cubic-bezier(.45,.05,.2,1), height .55s cubic-bezier(.3,.7,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...face,
      background: u.img ? `url(${u.img}) ${u.bg}` : 'repeating-linear-gradient(135deg, #121725 0 14px, #0e1220 14px 28px)'
    }
  }, !u.img && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '42%',
      textAlign: 'center',
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 14,
      letterSpacing: '0.08em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, u.ph || 'portrait to come'), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: u.sub ? 260 : 200,
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.6) 45%, rgba(10,12,20,0.92) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 30,
      right: 30,
      bottom: 26,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, u.eyebrow || `USER ${u.n}`), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: '40px',
      color: '#fff'
    }
  }, u.name), u.sub && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      fontWeight: 300,
      lineHeight: '28px',
      color: 'rgba(255,255,255,0.82)',
      textWrap: 'pretty'
    }
  }, u.sub)), plus(false)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...face,
      transform: 'rotateY(180deg)',
      background: 'linear-gradient(160deg, #161c2d 0%, #0c0f1a 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: inner,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      boxSizing: 'border-box',
      padding: '36px 36px 34px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontFamily: 'var(--font-body)',
      opacity: txt ? 1 : 0,
      transform: txt ? 'none' : 'translateY(8px)',
      transition: 'opacity .4s ease, transform .5s cubic-bezier(.2,.7,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)'
    }
  }, u.backLabel || `${u.name.toUpperCase()} · COMMERCIAL VALUE`), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      paddingRight: 40,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 30,
      lineHeight: '34px',
      color: '#fff',
      textWrap: 'balance'
    }
  }, u.head), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 120,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 20,
      lineHeight: '29px',
      color: 'rgba(255,255,255,0.84)',
      textWrap: 'pretty'
    }
  }, u.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 4
    }
  }, u.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '6px 14px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.07)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.14)',
      fontSize: 15,
      fontWeight: 500,
      color: '#fff'
    }
  }, t)))), plus(true))));
}
function IXUsersSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 150,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "wipe",
    d: 80,
    style: {
      width: 305,
      height: 1.5,
      marginBottom: 30,
      background: 'linear-gradient(90deg, rgba(0,104,223,0) 0%, #0068DF 50%, rgba(0,104,223,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 160
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-0.015em',
      color: '#fff'
    }
  }, "The 3 Users")), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 300,
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 28,
      lineHeight: '38px',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "And the commercial value our AI experiences bring to them, for Williams and Formula 1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 360,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 44,
      zIndex: 5
    }
  }, IX_USERS.map((u, i) => /*#__PURE__*/React.createElement(B, {
    key: u.n,
    fx: "pop",
    d: 450 + i * 150
  }, /*#__PURE__*/React.createElement(IXUserCard, {
    u: u
  })))));
}

/* Portal: one card per idea deck. Cards flip for detail; play buttons are placeholders until the decks are linked. */
const IX_DECKS = [{
  n: '01',
  eyebrow: 'DECK 01',
  name: 'AI Glasses',
  go: 1,
  img: 'assets/ai-engineer-glasses-v3.png',
  bg: 'center / cover no-repeat',
  ph: 'ai engineer image to come',
  sub: 'An immersive AI experience for guests in the paddock and pit lane',
  backLabel: 'THE WILLIAMS AI ENGINEER',
  head: 'Your own race engineer, in your ear',
  body: 'A bespoke AI experience that places VIP guests and partners at the heart of the team during paddock and pit lane walks. A synthetic race engineer delivers live insights, heritage and sponsor stories on demand, while smart glasses capture every moment to relive long after the day.',
  tags: ['Paddock', 'Pit lane', 'Smart glasses']
}, {
  n: '02',
  eyebrow: 'DECK 02',
  name: 'Time Capsule',
  img: 'assets/time-capsule-vr.png',
  bg: '59% 0% / auto 100% no-repeat',
  ph: 'time capsule image to come',
  sub: 'A generative VR journey through Williams history',
  backLabel: 'THE WILLIAMS TIME CAPSULE',
  head: 'Step inside the Williams story',
  body: 'A generative VR experience in the Williams fan zone at every Grand Prix. Narrated by Alex Albon, fans travel through the eras, step inside iconic cars in every Williams livery and relive legendary races. Powered by Claude AI and bespoke to each Grand Prix, no two journeys are the same.',
  tags: ['Fan zone', 'VR', 'Claude AI']
}, {
  n: '03',
  eyebrow: 'DECK 03',
  name: 'Spark Studio',
  img: 'assets/spark-studio-albon.png',
  bg: '40% 60% / auto 106% no-repeat',
  ph: 'creator studio image to come',
  sub: 'A cinematic race recap, generated every Grand Prix',
  backLabel: 'THE WILLIAMS AI CREATOR STUDIO',
  head: 'Every race, a cinematic recap',
  body: 'After every race, the Williams AI Creator Studio ingests race data, footage and media to generate a cinematic, high-energy video in a bespoke comic-style aesthetic, made with Higgsfield. A stylised summary of the team’s day, built for Williams’ channels.',
  tags: ['Race data', 'Higgsfield', 'Comic style']
}];
function IXDeckCard({
  u
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ix-user",
    style: {
      position: 'relative',
      width: Math.round(IXU_S * 1.12),
      height: Math.round(IXU_S * 1.12),
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: ixuGlow,
      background: u.img ? `url(${u.img}) ${u.bg}` : 'repeating-linear-gradient(135deg, #121725 0 14px, #0e1220 14px 28px)'
    }
  }, !u.img && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '30%',
      textAlign: 'center',
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 14,
      letterSpacing: '0.08em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, u.ph), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 300,
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.65) 40%, rgba(10,12,20,0.94) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 30,
      right: 30,
      bottom: 28,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 6,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, u.eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      lineHeight: '32px',
      color: '#fff',
      whiteSpace: 'nowrap'
    }
  }, u.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      fontWeight: 300,
      lineHeight: '28px',
      color: 'rgba(255,255,255,0.82)',
      textWrap: 'pretty'
    }
  }, u.sub), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": 'Open ' + u.name,
    className: "ix-lift",
    onClick: e => {
      e.stopPropagation();
      if (u.go != null) {
        const d = document.querySelector('deck-stage');
        d && d.goTo(u.go);
      }
    },
    style: {
      marginTop: 16,
      height: 50,
      padding: '0 26px 0 20px',
      gap: 13,
      borderRadius: 999,
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: '#fff',
      background: 'rgb(24,170,245)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      borderTop: '8px solid transparent',
      borderBottom: '8px solid transparent',
      borderLeft: '13px solid #fff'
    }
  }), "START")));
}
function IXPortalSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index,
    hud: false
  }, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 130,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 40
  }, /*#__PURE__*/React.createElement(IXDS.WilliamsLogo, {
    src: IXA('logo/williams-wordmark-white.png'),
    width: 190
  })), /*#__PURE__*/React.createElement(B, {
    fx: "wipe",
    d: 120,
    style: {
      width: 305,
      height: 1.5,
      margin: '30px 0',
      background: 'linear-gradient(90deg, rgba(0,104,223,0) 0%, #0068DF 50%, rgba(0,104,223,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 200
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-0.015em',
      color: '#fff'
    }
  }, "The Concepts")), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 320,
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 28,
      lineHeight: '38px',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "Three concepts exploring how creative AI could shape the future of the Williams brand"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 44,
      zIndex: 5
    }
  }, IX_DECKS.map((u, i) => /*#__PURE__*/React.createElement(B, {
    key: u.n,
    fx: "pop",
    d: 450 + i * 150
  }, /*#__PURE__*/React.createElement(IXDeckCard, {
    u: u
  })))));
}

/* Finale: the Why-us logo carries over and glides up; the line reveals word by word; the lap bar runs to the flag. */
const IX_LIGHTS_WORDS = ['It’s', 'lights', 'out', 'and', 'away', 'we', 'go'];
function IXLightsSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index,
    field: false,
    hudFinal: true,
    style: {
      background: '#07080d'
    }
  }, /*#__PURE__*/React.createElement(LightsInner, null));
}
function LightsInner() {
  const {
    nonce,
    active
  } = React.useContext(IXCtx);
  const [show, setShow] = React.useState(false);
  const [doc, setDoc] = React.useState(false);
  const [hov, setHov] = React.useState(false);
  React.useEffect(() => {
    setShow(false);
    setDoc(false);
    if (!active) return;
    const t = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(t);
  }, [nonce, active]);
  const para = {
    margin: 0,
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 28,
    lineHeight: '44px',
    color: '#1a1d26',
    textWrap: 'pretty'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    onClick: e => {
      e.stopPropagation();
      setDoc(true);
    },
    style: {
      position: 'absolute',
      left: '50%',
      top: 612,
      transform: show ? hov ? 'translate(-50%, -5px)' : 'translate(-50%, 0)' : 'translate(-50%, 10px)',
      opacity: show ? 1 : 0,
      pointerEvents: show ? 'auto' : 'none',
      transition: 'opacity .9s cubic-bezier(.4,0,.2,1), transform .5s cubic-bezier(.2,.8,.2,1), box-shadow .4s ease, background .4s ease',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      height: 56,
      padding: '0 30px 0 24px',
      borderRadius: 12,
      border: 0,
      cursor: 'pointer',
      background: hov ? 'rgba(0,104,223,0.1)' : 'rgba(255,255,255,0.03)',
      boxShadow: hov ? 'inset 0 0 0 1.5px #0068DF, 0 0 34px rgba(0,104,223,0.6), 0 12px 28px rgba(0,0,0,0.4)' : 'inset 0 0 0 1.5px #0068DF, 0 0 24px rgba(0,104,223,0.4)',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: '0.32em',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "18",
    viewBox: "0 0 22 18",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 3.5 A2 2 0 0 1 3.5 1.5 H8 L10 4 H18.5 A2 2 0 0 1 20.5 6 V14.5 A2 2 0 0 1 18.5 16.5 H3.5 A2 2 0 0 1 1.5 14.5 Z",
    fill: "none",
    stroke: "rgb(31,199,255)",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: '-0.32em'
    }
  }, "THE OFFER")), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      e.stopPropagation();
      setDoc(false);
    },
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(4,6,12,0.6)',
      backdropFilter: doc ? 'blur(10px)' : 'blur(0px)',
      WebkitBackdropFilter: doc ? 'blur(10px)' : 'blur(0px)',
      opacity: doc ? 1 : 0,
      pointerEvents: doc ? 'auto' : 'none',
      transition: 'opacity .7s cubic-bezier(.4,0,.2,1)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: 1760,
      height: 980,
      boxSizing: 'border-box',
      padding: '76px 0',
      borderRadius: 28,
      background: '#fff',
      boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
      cursor: 'default',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      opacity: doc ? 1 : 0,
      transform: doc ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.985)',
      transition: 'opacity .8s cubic-bezier(.4,0,.2,1), transform .9s cubic-bezier(.2,.8,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: () => setDoc(false),
    style: {
      position: 'absolute',
      top: 28,
      right: 28,
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(10,12,20,0.05)',
      boxShadow: 'inset 0 0 0 1px rgba(10,12,20,0.14)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2 L12 12 M12 2 L2 12",
    stroke: "#1a1d26",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("img", {
    src: IXA('logo/williams-f1-team-logo-blue.png'),
    alt: "Williams",
    style: {
      height: 92,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      width: 1120,
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.32em',
      color: '#0068DF'
    }
  }, "THE OFFER"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...para,
      fontSize: 38,
      lineHeight: '50px',
      fontWeight: 500,
      color: '#07080d'
    }
  }, "I join Williams as the Creative AI Lead."), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "Working across multiple teams whilst leveraging Claude, I will identify bottlenecks, create intelligent workflows, automate processes and build a wider, commercial creative AI strategy."), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "As a strategic partner, I will have the ability to learn how Williams works, get closer to your teams and global fanbase, and identify insightful, data driven opportunities where AI can have a meaningful, real world impact."), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "What I\u2019ve shown today is merely a demonstration of ability and the level of thinking I can bring to the table. The real opportunity is to work together to identify, develop and deliver projects that actually matter to Williams and, more importantly, your fanbase.")))), /*#__PURE__*/React.createElement("div", {
    key: 'l' + nonce,
    className: "ix-logo-rise",
    style: {
      position: 'absolute',
      left: 855,
      top: 977
    }
  }, /*#__PURE__*/React.createElement(IXDS.WilliamsLogo, {
    src: IXA('logo/williams-wordmark-white.png'),
    width: 210
  })), /*#__PURE__*/React.createElement("h2", {
    key: 't' + nonce,
    "aria-label": "It\u2019s lights out and away we go",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 490,
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: '0 16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 64,
      lineHeight: '72px',
      letterSpacing: '-0.01em',
      color: '#fff'
    }
  }, IX_LIGHTS_WORDS.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-block',
      overflow: 'hidden',
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ix-word",
    style: {
      display: 'inline-block',
      '--d': 1500 + i * 110 + 'ms'
    }
  }, w)))));
}
Object.assign(window, {
  IXUsersSlide,
  IXPortalSlide,
  IXUserCard,
  IXLightsSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck-saved-2026-09-29/ix-slides-c.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck/SlidesA.jsx
try { (() => {
const DS = window.WilliamsRacingAIExperienceDesignSystem_1388e9;
const A = p => (window.WR_ASSETS || '../../assets/') + p;
const frame = {
  position: 'relative',
  width: 1920,
  height: 1080,
  overflow: 'hidden',
  background: 'var(--wr-night)',
  color: '#fff'
};
const abs = (l, t, extra) => ({
  position: 'absolute',
  left: l,
  top: t,
  ...extra
});
function Streaks({
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 1536,
      height: 1024,
      transform: 'matrix(-0.997,0.079,-0.079,-0.997,2491.426,1609.770)',
      transformOrigin: '0 0',
      background: `url(${A('brand/speed-streaks.png')}) center / cover no-repeat`,
      pointerEvents: 'none',
      ...style
    }
  });
}
function Logo({
  l,
  t
}) {
  return /*#__PURE__*/React.createElement(DS.WilliamsLogo, {
    src: A('logo/williams-wordmark-white.png'),
    width: 210,
    style: abs(l, t + 3)
  });
}

/* Frame 2 — full-bleed photo cover */
function CoverSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...frame,
      background: 'var(--wr-night-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${A('photos/pitlane-hey-williams.png')}) center / cover no-repeat`
    }
  }));
}

/* Frame 3 — W mark + logo + rule + bullet overview */
function OverviewSlide() {
  const items = [['Immersive AI experience –', ' A bespoke AI powered experience that immerses VIP guests and partners in the heart of the Williams Racing team during paddock and pit lane walks.'], ['Your own synthetic race engineer –', ' Receive live engineering insights, team heritage, sponsor stories and behind the scenes context, while asking questions naturally at any time.'], ['Stay present, relive every moment –', ' Experience the day without reaching for your phone while AI captures every unforgettable moment to revisit long after the event.']];
  return /*#__PURE__*/React.createElement("div", {
    style: frame
  }, /*#__PURE__*/React.createElement(DS.WMark, {
    src: A('brand/w-mark-blue.png'),
    style: abs(34, 198)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...abs(1143, 0),
      width: 777,
      height: 1080,
      borderLeft: '2px solid #fff',
      boxSizing: 'border-box',
      background: `url(${A('photos/glasses-case-blue.png')}) center / cover no-repeat`
    }
  }), /*#__PURE__*/React.createElement(Logo, {
    l: 164,
    t: 327
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...abs(163.987, 405.25),
      width: 305.026,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      ...abs(164, 433),
      width: 831,
      margin: 0,
      paddingLeft: 33,
      fontFamily: 'var(--font-body)',
      fontSize: 22,
      lineHeight: '40px'
    }
  }, items.map(([b, r]) => /*#__PURE__*/React.createElement("li", {
    key: b
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, b), r))));
}

/* Frame 16 — journey of five StepCards linked by arrows */
function JourneySlide() {
  const steps = [{
    l: 89,
    t: 94,
    img: 'paddock-glasses-handover',
    cap: 'Head to the paddock and receive your smart glasses from a hospitality host'
  }, {
    l: 730,
    t: 129,
    img: 'pitlane-glasses-on',
    cap: "Experience begins with the race engineer's voice welcoming you to the pit lane"
  }, {
    l: 1355,
    t: 94,
    img: 'pitlane-hey-williams',
    cap: 'Guided through the pit lane with exclusive insights and fun facts about the team'
  }, {
    l: 408,
    t: 589,
    img: 'pitlane-group-glasses',
    cap: 'Stay in the moment while our glasses capture your every move, even live stream to your instagram',
    bold: true
  }, {
    l: 1051,
    t: 589,
    img: 'grandstand-radio',
    cap: "Feel like you're at the wheel, with real time driver to team radio in your ear"
  }];
  const arrow = (l, t, r) => /*#__PURE__*/React.createElement("img", {
    src: A('svg/flow-arrow.svg'),
    alt: "",
    style: {
      ...abs(l, t),
      width: 131.589,
      height: 68.25,
      transform: `rotate(${r}deg)`
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: frame
  }, /*#__PURE__*/React.createElement(DS.WMark, {
    src: A('brand/w-mark-blue.png'),
    style: abs(34, 198)
  }), /*#__PURE__*/React.createElement(Streaks, null), steps.map(s => /*#__PURE__*/React.createElement(DS.StepCard, {
    key: s.img,
    imageSrc: A(`photos/${s.img}.png`),
    caption: s.cap,
    bold: s.bold,
    style: abs(s.l, s.t)
  })), arrow(578, 222, 0), arrow(1224, 212, -58), arrow(896, 695, -16), /*#__PURE__*/React.createElement(Logo, {
    l: 50,
    t: 1003
  }));
}
Object.assign(window, {
  CoverSlide,
  OverviewSlide,
  JourneySlide,
  WRStreaks: Streaks,
  WRLogo: Logo,
  wrFrame: frame,
  wrAbs: abs,
  wrA: A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck/SlidesA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck/SlidesB.jsx
try { (() => {
const DSb = window.WilliamsRacingAIExperienceDesignSystem_1388e9;
const fr = window.wrFrame,
  ab = window.wrAbs,
  As = window.wrA,
  LogoB = window.WRLogo;
const title = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 'var(--type-title-size)',
  lineHeight: 'var(--type-title-lh)',
  color: '#fff',
  margin: 0
};
const lead = {
  fontFamily: 'var(--font-body)',
  fontWeight: 400,
  fontSize: 'var(--type-lead-size)',
  lineHeight: 'var(--type-lead-lh)',
  color: '#fff',
  margin: 0
};

/* Frame 18 — glass voice prompts over hero product shot */
function PromptsSlide() {
  const prompts = [{
    l: 111.953,
    t: 83.392,
    r: 7.64,
    side: 'right',
    text: 'Hey Williams, why are you using soft tyres?'
  }, {
    l: 75,
    t: 865.138,
    r: -7.7,
    side: 'right',
    text: 'Hey Williams, how fast is your average pit stop?'
  }, {
    l: 1469.574,
    t: 780,
    r: 16.68,
    side: 'left',
    text: 'Hey Williams, who is the current backup driver?'
  }, {
    l: 1434,
    t: 151.735,
    r: -14.3,
    side: 'left',
    text: 'Hey Williams, what’s the deal with Claude?'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...fr,
      background: `url(${As('photos/glasses-hero-blue.png')}) center / cover no-repeat`
    }
  }, prompts.map(p => /*#__PURE__*/React.createElement(DSb.GlassPrompt, {
    key: p.text,
    text: p.text,
    side: p.side,
    tilt: p.r,
    style: ab(p.l, p.t)
  })), /*#__PURE__*/React.createElement("svg", {
    width: "96",
    height: "156",
    viewBox: "0 0 96 156",
    fill: "rgba(255,255,255,0.45)",
    style: {
      ...ab(275, 252),
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 96 156.25 C 96.138 156.25 96.25 156.138 96.25 156 C 96.25 155.862 96.138 155.75 96 155.75 L 96 156 L 96 156.25 Z M 0 156 L -0.25 156 L -0.25 156.25 L 0 156.25 L 0 156 Z M 0 0 L -1.443 2.5 L 1.443 2.5 L 0 0 Z M 96 156 L 96 155.75 L 0 155.75 L 0 156 L 0 156.25 L 96 156.25 L 96 156 Z M 0 156 L 0.25 156 L 0.25 2.25 L 0 2.25 L -0.25 2.25 L -0.25 156 L 0 156 Z"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "138",
    height: "397",
    viewBox: "0 0 138 397",
    fill: "rgba(255,255,255,0.45)",
    style: {
      ...ab(1543, 414),
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.25 C -0.138 -0.25 -0.25 -0.138 -0.25 0 C -0.25 0.138 -0.138 0.25 0 0.25 L 0 0 L 0 -0.25 Z M 138 0 L 138.25 0 L 138.25 -0.25 L 138 -0.25 L 138 0 Z M 138 397 L 139.443 394.5 L 136.557 394.5 L 138 397 Z M 0 0 L 0 0.25 L 138 0.25 L 138 0 L 138 -0.25 L 0 -0.25 L 0 0 Z M 138 0 L 137.75 0 L 137.75 394.75 L 138 394.75 L 138.25 394.75 L 138.25 0 L 138 0 Z"
  })), /*#__PURE__*/React.createElement(LogoB, {
    l: 855,
    t: 968
  }));
}

/* Frame 79 — creator livestream overlay */
function LivestreamSlide() {
  const comments = [{
    name: 'Immy Bewes',
    message: '🏁🏆🏅'
  }, {
    name: 'katyboooo',
    message: 'Wish I was there!'
  }, {
    name: 'Bertie Kinnings',
    message: '🏎🏎🏎'
  }];
  const [views, setViews] = React.useState(140);
  React.useEffect(() => {
    const t = setInterval(() => setViews(v => v + 1), 2600);
    return () => clearInterval(t);
  }, []);
  const I = DSb.Icon;
  return /*#__PURE__*/React.createElement("div", {
    style: fr
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ab(143, 393),
      width: 1064,
      display: 'flex',
      flexDirection: 'column',
      gap: 38
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...title,
      whiteSpace: 'nowrap'
    }
  }, "POV UGC & Livestream by Creators"), /*#__PURE__*/React.createElement("p", {
    style: lead
  }, "Enable creators to record the Williams race weekend from a true first person perspective while receiving AI powered stories and insights that enrich the content they create.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...ab(1366, 0),
      width: 554,
      height: 1095,
      borderLeft: '2px solid #fff',
      boxSizing: 'border-box',
      background: `url(${As('photos/creator-selfie-trackside.png')}) 99.765% 144.222% / 111.092% 99.964% no-repeat`
    }
  }), /*#__PURE__*/React.createElement(DSb.StreamerHandle, {
    handle: "lily_andrews",
    avatarSrc: As('photos/avatar-lily.png'),
    style: ab(1388, 16)
  }), /*#__PURE__*/React.createElement("svg", {
    width: "9.9",
    height: "9.9",
    viewBox: "0 0 9.9 9.9",
    style: {
      ...ab(0, 0),
      transform: 'matrix(0.707,-0.707,0.707,0.707,1604,37)',
      transformOrigin: '0 0',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 9.9 L 9.9 9.9",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...ab(1686, 21),
      display: 'flex',
      alignItems: 'center',
      gap: 19
    }
  }, /*#__PURE__*/React.createElement(DSb.LiveBadge, null), /*#__PURE__*/React.createElement(DSb.ViewerCount, {
    count: `${views}K`
  })), /*#__PURE__*/React.createElement(DSb.Icons, {
    name: "Exit",
    dark: true,
    size: 28,
    style: ab(1873, 26)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...ab(1870, 83),
      width: 37.409,
      display: 'flex',
      flexDirection: 'column',
      gap: 28.7764892578125,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(I, {
    name: "Picture24",
    size: 33.573
  }), /*#__PURE__*/React.createElement(I, {
    name: "Mic",
    size: 33.573
  }), /*#__PURE__*/React.createElement(I, {
    name: "Video",
    size: 37.409
  }), /*#__PURE__*/React.createElement("img", {
    src: As('svg/change-camera.svg'),
    alt: "",
    style: {
      width: 31.653,
      height: 31.077
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...ab(1391, 757),
      display: 'flex',
      flexDirection: 'column',
      gap: 19
    }
  }, comments.map((c, i) => /*#__PURE__*/React.createElement(DSb.CommentRow, {
    key: c.name + i,
    name: c.name,
    message: c.message
  }))), [['💯', 1866, 887], ['😁', 1831, 915], ['😁', 1850, 928]].map(([e, l, t], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      ...ab(l, t),
      fontSize: 32,
      lineHeight: 1
    }
  }, e)));
}

/* Frame 80 — title + lead + portrait photo right */
function VipSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: fr
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...title,
      ...ab(128, 339),
      width: 1025
    }
  }, "The Ultimate VIP Sponsor Experience"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...lead,
      ...ab(128, 430),
      width: 1139,
      fontSize: 'var(--type-lead-alt-size)',
      lineHeight: 'var(--type-lead-alt-lh)'
    }
  }, "Treat your most important guests to an AI powered race weekend by providing Meta glasses for the entire event, allowing them to capture unforgettable moments, take the glasses home as a lasting memento, and receive a professionally edited, LinkedIn ready highlight recap to relive and share the experience."), /*#__PURE__*/React.createElement("div", {
    style: {
      ...ab(1363, 0),
      width: 628,
      height: 1116,
      background: `url(${As('photos/paddock-guests-portrait.png')}) center / cover no-repeat`
    }
  }));
}

/* Frame 81 — text-only statement */
function DemoSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: fr
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...title,
      ...ab(143, 382),
      width: 1025
    }
  }, "30 Minute Guest Demo"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...lead,
      ...ab(143, 469),
      width: 1064
    }
  }, "Offer any Williams guest the opportunity to experience a 30 minute AI powered paddock tour. Team members can simply invite guests to \"try the Meta glasses experience\", turning a standard hospitality moment into a memorable showcase of Williams' innovation."));
}

/* Frame 82 — "Why us" with two PanelCards over the W */
function WhyUsSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: fr
  }, /*#__PURE__*/React.createElement(DSb.WMark, {
    src: As('brand/w-mark-blue.png'),
    style: ab(34, 198)
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...title,
      ...ab(831, 173),
      fontSize: 'var(--type-display-size)',
      lineHeight: 'var(--type-display-lh)',
      whiteSpace: 'nowrap'
    }
  }, "Why us"), /*#__PURE__*/React.createElement(DSb.PanelCard, {
    title: "Bespoke AI software",
    style: {
      ...ab(346, 323),
      padding: '80px 41px'
    }
  }, "We design and build the complete Williams experience, including the AI character, paddock journey, sponsor integrations, personalised interactions and automated highlight recap software."), /*#__PURE__*/React.createElement(DSb.PanelCard, {
    title: "On site operations",
    style: {
      ...ab(991, 323),
      padding: '70px 32px'
    }
  }, "We manage every aspect on site, from device preparation and guest onboarding to hardware logistics, technical support and content delivery, ensuring a seamless experience for every guest."), /*#__PURE__*/React.createElement(LogoB, {
    l: 855,
    t: 974
  }));
}
Object.assign(window, {
  PromptsSlide,
  LivestreamSlide,
  VipSlide,
  DemoSlide,
  WhyUsSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck/SlidesB.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→ and ↑/↓, PgUp/PgDn, Space, Home/End,
 *      number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on
 *      idle; hovering or focusing its controls pins it visible until the
 *      pointer/focus leaves. While presenting it is pointer-summoned only:
 *      mouse movement (or hover/focus) shows it, slide changes never do.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate — the clicked slide becomes the
 *      selected (highlighted) slide; shift-click selects a range and
 *      cmd/ctrl-click toggles slides in and out of the selection
 *      (Escape collapses it back to the current slide); ↑/↓ with a
 *      thumbnail focused to step between slides; Delete/Backspace with a
 *      thumbnail focused to delete the selection (one confirm dialog,
 *      one undoable operation); drag to reorder (dragging collapses a
 *      multi-selection); right-click for
 *      Skip / Move up / Move down / Duplicate / Delete — over a
 *      multi-selection the menu offers "Delete N slides". Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      They also carry no rail number and are excluded from the overlay's
 *      slide count: the remaining slides are numbered contiguously
 *      (Keynote-style), and a skipped CURRENT slide (reachable by rail
 *      click or deep link, never by prev/next) shows '–' as its position.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *  (h) typographic defaults — a zero-specificity stylesheet injected into
 *      the document gives headings `text-wrap: balance` and body text
 *      (p, li, blockquote, figcaption) `text-wrap: pretty`, so slides
 *      avoid widowed/orphaned words by default. Any text-wrap declaration
 *      you author on those elements wins over these defaults.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
      /* Slide edge on the black stage. Dark decks override the canvas
       * fill toward the stage's own black, leaving nothing to mark where
       * the slide ends — the faint white ring keeps the boundary legible
       * there while disappearing into the white of light decks. A
       * box-shadow, not outline/border: it follows any canvas rounding
       * and adds no layout size. */
      box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.12);
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-selected] .num { color: #fff; }
    .thumb[data-selected] .frame {
      outline-color: rgba(217,119,87,0.65);
      box-shadow: 0 0 0 4px rgba(217,119,87,0.18);
    }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame {
      outline-color: #D97757;
      box-shadow: 0 0 0 4px rgba(217,119,87,0.25);
    }
    /* While dragging, the thumb itself is the drag visual (the native drag
       image is suppressed in dragstart so the snapshot can't wander off the
       rail horizontally): elevate it rather than dim it, and let hit-testing
       ignore it so dragover reaches the sibling thumb under the pointer
       instead of the moving element itself. */
    .thumb[data-dragging] { opacity: 0.9; z-index: 30; pointer-events: none; }
    .thumb[data-dragging] .frame {
      outline-color: rgba(255,255,255,0.5);
      box-shadow: 0 6px 24px rgba(0,0,0,0.5);
    }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        /* Size containment: slotted content that overflows the design box
         * (an image-slot's aspect-ratio-derived width, say) must not count
         * toward Chromium's print document width — without this, an
         * abs-positioned child past the page edge shrinks the whole PDF
         * to fit (~75%). Containment is safe here because the definite
         * width/height above size the slide regardless of content.
         * (Absorbed from PR #2619 with its owner's agreement.) */
        contain: size !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      // Explicit multi-selection (slide elements). Empty means the
      // selection is implicitly the current slide, so Delete always has
      // a well-defined target while the rail has focus.
      this._selected = new Set();
      this._selAnchor = null;
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      // Overlay pinning: while the pointer is over the controls toolbar or
      // a control has keyboard focus, the idle-hide timeout must not
      // dismiss it (a pointer parked ON the controls doesn't generate
      // mousemove, so without the pin the toolbar vanishes under the
      // user's cursor after OVERLAY_HIDE_MS). Read by _flashOverlay's
      // hide timeout; cleared by mouseleave/focusout, which resume the
      // normal idle fade.
      this._overlayHover = false;
      this._overlayFocus = false;
      // Capability marker for the host's injected guest bundle. Copies
      // WITHOUT _navArrowsUpDown are frozen per-project builds that
      // predate native ArrowUp/ArrowDown slide nav — the bundle translates
      // Up/Down to Right/Left for those (installDeckArrowKeyTranslator in
      // apps/web/src/guest/edit-mode.ts) and must stand down here or every
      // press would advance twice. A marker, not a version number, so a
      // future capability can add its own independent probe.
      this._navArrowsUpDown = true;
      // Same contract for rail Delete/Backspace: copies WITHOUT
      // _railDeleteKey predate the thumbs' own Delete/Backspace binding,
      // and the bundle opens the delete confirm for them
      // (installDeckRailDeleteFallback in apps/web/src/guest/edit-mode.ts).
      // Current builds consume the key at the thumb (stopPropagation), so
      // the marker is belt-and-braces — it keeps the fallback standing
      // down even if a future build lets the key bubble past the thumb.
      this._railDeleteKey = true;
      // Same contract for skip-aware numbering: copies WITHOUT
      // _railSkipNumbers number every thumb 1..N and count skipped slides
      // in the overlay total — the bundle rewrites both for those
      // (installDeckSkipNumberingFallback in apps/web/src/guest/edit-mode.ts).
      // Here the component renumbers natively, so the fallback stands down.
      this._railSkipNumbers = true;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      this._ensurePrintSizingMeta();
      this._ensureTextWrapDefaults();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        // Self-heal: a departed doc-page may have removed the page-global
        // print-sizing meta this deck deferred to at connect time.
        this._ensurePrintSizingMeta();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (three per view — cur/prev/next).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast. Also ignore data-dc-tpl /
      // data-om-slide-id — host-reserved bookkeeping stamps (the host's
      // ATTR_RESERVED guard bounds them the same way) that structural
      // edits renumber/re-mint on slides whose content didn't change;
      // re-cloning on that churn is what made a slide move flash its
      // thumbnails.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-(validate|slide-id)$|dc-tpl$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            this._renumberRail();
            this._syncCount();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      // Stylesheets that finish loading AFTER the snapshot below never
      // reach the thumbs on their own: a still-pending <link> contributes
      // nothing to document.styleSheets, and nothing re-reads it on load,
      // so the live slides restyle while every clone keeps the stale
      // sheet. dc-runtime's helmet mounts design-system <link>s at render
      // time, so a deck-stage that connects first snapshots before that
      // CSS exists. Funnel late arrivals into the same debounced resync:
      // hook load/error on every current <link>, and watch <head> for
      // links and styles mounted or rewritten later. Deliberately not
      // rAF- or fonts.ready-driven — rAF is throttled/suspended in hidden
      // iframes (thumbnail/presenter contexts), and a font-file load
      // doesn't change cssRules, so it needs no resync.
      this._hookedLinks = [];
      this._hookSheetLoad = el => {
        if (!el.matches || !el.matches('link[rel~="stylesheet" i]')) return;
        if (this._hookedLinks.indexOf(el) !== -1) return;
        this._hookedLinks.push(el);
        el.addEventListener('load', this._onTweakChange);
        el.addEventListener('error', this._onTweakChange);
      };
      document.querySelectorAll('link[rel~="stylesheet" i]').forEach(this._hookSheetLoad);
      this._headObserver = new MutationObserver(records => {
        let resync = false;
        for (const r of records) {
          if (r.type === 'characterData') {
            // Only <style> text is CSS — a ticking <title> shouldn't
            // wake the resync forever.
            const p = r.target.parentNode;
            if (p && p.nodeName === 'STYLE') resync = true;
            continue;
          }
          if (r.type === 'attributes') {
            // A late rel/href rewrite turns an inert <link> into a
            // stylesheet (hook it; its load fires even on cache hits);
            // a media/disabled flip changes effective rules with no
            // event. Resync only if this link is or ever was a
            // stylesheet — favicon/preload/canonical href churn isn't
            // a resync.
            if (r.target.nodeName === 'LINK') {
              this._hookSheetLoad(r.target);
              if (this._hookedLinks.indexOf(r.target) !== -1) resync = true;
            } else if (r.target.nodeName === 'STYLE') resync = true;
            continue;
          }
          // childList: only links and styles carry CSS. A new <link> has
          // no rules until it loads — hook it rather than resync now; a
          // <style> mount/unmount or text-node swap takes effect
          // immediately. _freezeStyle (our beforeprint helper) is skipped
          // on add only — no removal-side guard: _onAfterPrint nulls the
          // ref before the observer fires, so that check would be dead;
          // the one debounced no-op resync per print is harmless.
          if (r.target.nodeName === 'STYLE') resync = true;
          for (const n of r.addedNodes) {
            if (n.nodeName === 'LINK') this._hookSheetLoad(n);else if (n.nodeName === 'STYLE' && n !== this._freezeStyle) resync = true;
          }
          for (const n of r.removedNodes) {
            if (n.nodeName === 'LINK') {
              const hi = this._hookedLinks.indexOf(n);
              if (hi !== -1) {
                this._hookedLinks.splice(hi, 1);
                n.removeEventListener('load', this._onTweakChange);
                n.removeEventListener('error', this._onTweakChange);
                resync = true;
              }
            } else if (n.nodeName === 'STYLE') resync = true;
          }
        }
        if (resync) this._onTweakChange();
      });
      this._headObserver.observe(document.head, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['rel', 'href', 'media', 'disabled']
      });
      this._snapshotAuthorCss();
      // Re-snapshot once any still-loading stylesheet settles — it throws on
      // .cssRules above and silently contributes '' → unstyled thumbs on a
      // cold mount. {once:true}; routed through the debounced handler.
      document.querySelectorAll('link[rel~="stylesheet"]').forEach(l => {
        try {
          if (l.sheet && l.sheet.cssRules) return;
        } catch (e) {}
        l.addEventListener('load', this._onTweakChange, {
          once: true
        });
        l.addEventListener('error', this._onTweakChange, {
          once: true
        });
      });
      if (document.fonts) document.fonts.ready.then(this._onTweakChange, this._onTweakChange);
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      // A disconnect mid-drag never gets a dragend, so the document-level
      // drag tracker must be torn down here like every other global hook.
      this._stopDragTrack();
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._headObserver) this._headObserver.disconnect();
      (this._hookedLinks || []).forEach(l => {
        l.removeEventListener('load', this._onTweakChange);
        l.removeEventListener('error', this._onTweakChange);
      });
      this._hookedLinks = [];
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
      // Drop the text-wrap defaults when the last deck-stage leaves, so a
      // deleted deck's typography can't restyle whatever replaces it.
      // (#deck-stage-print-page keeps its existing keep-forever lifecycle.)
      if (!document.querySelector('deck-stage')) {
        const tw = document.getElementById('deck-stage-text-wrap');
        if (tw) tw.remove();
        const ps = document.getElementById('deck-stage-print-sizing');
        if (ps) ps.remove();
      }
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Pin the controls while the user is interacting with them —
      // hovering, or keyboard focus on a control. The hidden overlay is
      // pointer-events:none, so these only ever engage while it's already
      // visible. 'pointer' source: these are user-interaction paths, so
      // they may show/refresh the overlay even while presenting (see
      // _flashOverlay).
      overlay.addEventListener('mouseenter', () => {
        this._overlayHover = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('mouseleave', () => {
        const hadPin = this._overlayHover;
        this._overlayHover = false;
        // Resume the idle fade — never summon. Without the guard, a
        // mouseleave that fires because the overlay was force-hidden
        // (presenting entry flips it to pointer-events:none under the
        // cursor) would pop the controls right back up.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusin', e => {
        // Keyboard-origin focus only (:focus-visible): a mouse click also
        // focuses the clicked button, and pinning on that would hold the
        // controls open indefinitely after a single click — the hover pin
        // already covers the mouse case. Engines without :focus-visible
        // fall back to pinning on any focus (the safe direction).
        var kb = true;
        try {
          var t = e.target;
          kb = !(t && t.matches && !t.matches(':focus-visible'));
        } catch (err) {
          kb = true;
        }
        if (!kb) return;
        this._overlayFocus = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusout', e => {
        // Only unpin when focus truly left the toolbar — tabbing between
        // its buttons stays pinned. relatedTarget is null when focus
        // leaves the document entirely; treat that as leaving.
        if (e.relatedTarget && overlay.contains(e.relatedTarget)) return;
        const hadPin = this._overlayFocus;
        this._overlayFocus = false;
        // Resume-the-fade only (see mouseleave): a click-focused button
        // losing focus to a later stage click must not summon the
        // controls mid-presentation.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        const list = this._menuIndices;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(list && list.length ? list : [i]);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) {
          this._closeConfirm();
          this._focusCurrentThumb();
        }
      });
      confirm.querySelector('.cancel').addEventListener('click', () => {
        this._closeConfirm();
        this._focusCurrentThumb();
      });
      confirm.querySelector('.danger').addEventListener('click', () => {
        // Re-resolve at click time — the elements are the user's actual
        // selection; their indices may have shifted since confirm-open.
        const list = (this._confirmEls || []).map(el => this._slides.indexOf(el)).filter(i => i >= 0);
        this._closeConfirm();
        this._deleteSlides(list);
        this._focusCurrentThumb();
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Announces the deck's print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] content "default-landscape" — a
     *  deck prints one slide per page on the user's paper size, landscape.
     *  The export path probes the meta to decide what true paper size to
     *  inject at print time (the @page px rule above stays as the
     *  standalone-print fallback; an injected later rule overrides it).
     *  Never overrides an authored meta or another component's; removed
     *  when the last deck-stage leaves. data-omelette-injected keeps it
     *  out of serialized source. */
    _ensurePrintSizingMeta() {
      if (document.querySelector('meta[name="omelette-print-sizing"]')) return;
      const tag = document.createElement('meta');
      tag.id = 'deck-stage-print-sizing';
      tag.name = 'omelette-print-sizing';
      tag.content = 'default-landscape';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** Typographic defaults for slide text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins. Lives in the document,
     *  not the shadow root, for two reasons: document rules reach the
     *  slotted (light DOM) slides, and _snapshotAuthorCss copies document
     *  stylesheets into each thumbnail's shadow root, so the thumbs wrap
     *  the same way — a deck-stage-scoped selector would match nothing
     *  there. data-omelette-injected marks the tag for the host editor
     *  to strip at serialize, so it is never written back as authored
     *  source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('deck-stage-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'deck-stage-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
      // The deck just changed under any open rail surface — an open
      // confirm or menu is a question about the OLD deck (its labels and
      // counts may now lie), so close them rather than let a stale
      // answer fire. The element-held selection re-resolves, but the
      // user should re-read what they're deleting.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        this._closeConfirm();
        // The dialog held focus (danger button); hand it back to the rail.
        this._focusCurrentThumb(true);
      }
      if (this._menu && this._menu.hasAttribute('data-open')) this._closeMenu();
      // Editor-mode deletes rebuild the rail through here; a confirmed
      // delete that started from the keyboard still owes focus to the
      // (new) current thumb.
      if (this._pendingRailRefocus) this._focusCurrentThumb(true);
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      // Selection is element-keyed: drop entries whose slide is gone
      // (deleted, or replaced wholesale by a host re-render).
      if (this._selected && this._selected.size) {
        this._selected.forEach(s => {
          if (!this._slideSet.has(s)) this._selected.delete(s);
        });
      }
      if (this._selAnchor && !this._slideSet.has(this._selAnchor)) this._selAnchor = null;
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._syncCount();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      this._syncCount();
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay(source) {
      // Host posts __omelette_presenting while in fullscreen/tab
      // presentation mode. While presenting, the overlay is
      // pointer-summoned only: it appears on mouse movement and while the
      // user hovers/focuses the controls (source 'pointer'), but never
      // flashes on slide changes or nav-key presses (the default 'auto'
      // source) — a keyboard-driven advance must not blink chrome at the
      // audience. Outside presenting, both sources flash as before.
      if (!this._overlay) return;
      if (this._presenting && source !== 'pointer') return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        // Pinned by hover or focus on the controls — keep them up. The
        // matching mouseleave/focusout re-flashes, so the idle fade
        // resumes from that moment.
        if (this._overlayHover || this._overlayFocus) return;
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle. 'pointer'
      // source: mouse movement summons the controls even while presenting.
      this._flashOverlay('pointer');
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        // Unchanged value → idempotent re-delivery (the guest bundle
        // re-posts when a deck mounts mid-presentation, and host + bundle
        // can both deliver at entry). Skip the resets: re-running the
        // entry work on every delivery would dismiss the pointer-summoned
        // overlay under a hovering cursor and close menus on every slide
        // change. Mirrors the preview_mode branch's unchanged-value guard
        // below.
        if (d.__omelette_presenting !== !!this._presenting) {
          this._presenting = d.__omelette_presenting;
          // A presenting transition invalidates interaction pins: carried
          // across the flip, a stale pin would hold the first summoned
          // overlay open with no pointer anywhere near it. Hide on BOTH
          // transitions: entry cleans the audience's screen, and on exit a
          // pin-skipped hide timeout may have left data-visible set with
          // no timer armed — without this, the footer would linger in the
          // editor until the next mousemove. The next interaction
          // re-summons it either way.
          this._overlayHover = false;
          this._overlayFocus = false;
          if (this._overlay) {
            this._overlay.removeAttribute('data-visible');
            if (this._hideTimer) clearTimeout(this._hideTimer);
          }
          this._syncRailHidden();
          this._closeMenu();
          this._closeConfirm();
          this._fit();
          this._scaleThumbs();
        }
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
        // A refused op never re-renders, so slotchange won't restore the
        // keyboard flow's focus — do it here. (Applied ops refocus in
        // _onSlotChange, after the rail has been rebuilt.)
        if (d.applied === false && this._pendingRailRefocus) {
          this._focusCurrentThumb(true);
        }
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing. composedPath()[0], not e.target: a
      // window-level keydown retargets e.target to the shadow host, which
      // would miss an <input> or contenteditable inside a web component on
      // a slide (same reason _onTap uses composedPath).
      const t = e.composedPath ? e.composedPath()[0] : e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          this._focusCurrentThumb();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.key === 'Escape' && this._selected.size) {
        // Collapse the multi-selection back to the current slide (the
        // implicit selection), not to nothing.
        this._clearSelection();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'ArrowDown' && !e.defaultPrevented) {
        // ↓/↑ page slides like →/← (Keynote/PowerPoint parity). Window
        // level only: rail thumbs keep their own ↑/↓ walk (their handler
        // stops propagation before this one), and the typing guard above
        // already covers inputs and contenteditable slide content.
        // Deliberate tradeoff: like Space/PageDown before them, these are
        // scroll keys — slide content that wants keyboard scrolling claims
        // them with preventDefault, which this branch honors (checked here
        // and not for the long-standing keys above, so ←/→/Space behavior
        // is unchanged and ↑/↓ behave identically on frozen copies, whose
        // translator in the guest bundle applies the same guard).
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowUp' && !e.defaultPrevented) {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      // User-initiated navigation collapses a multi-selection down to
      // the (implicit) current slide, like Keynote's arrow keys. 'click'
      // handles its own selection; programmatic reasons leave it alone.
      if (reason === 'keyboard' || reason === 'tap') this._clearSelection();
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
      this._thumbs = next;
      this._renumberRail();
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          // The live-dragged thumb is positioned by the drag tracker; a
          // FLIP transform+transition here would clobber it mid-drag.
          if (thumb === this._dragThumb) return;
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', e => {
        const i = idx();
        const slide = this._slides[i];
        // WebKit doesn't focus a plain element on click — focus
        // explicitly so Delete/Backspace works right after selecting a
        // slide by mouse. preventScroll: _syncRail owns the rail's
        // scroll position.
        thumb.focus({
          preventScroll: true
        });
        if (e.shiftKey || e.metaKey || e.ctrlKey) {
          // Multi-select gestures adjust the selection without
          // navigating (Keynote/Figma convention).
          e.preventDefault();
          if (e.shiftKey) {
            // Range from the anchor (last plain/cmd-clicked slide;
            // falls back to the current slide) to here, replacing any
            // previous range.
            let a = this._selAnchor ? this._slides.indexOf(this._selAnchor) : -1;
            if (a < 0) {
              a = this._index;
              this._selAnchor = this._slides[a] || null;
            }
            this._selected.clear();
            for (let j = Math.min(a, i); j <= Math.max(a, i); j++) {
              this._selected.add(this._slides[j]);
            }
          } else if (slide) {
            // Toggle. An empty explicit selection implicitly holds the
            // current slide — materialize it first so cmd-clicking a
            // second slide selects both.
            if (!this._selected.size && i !== this._index && this._slides[this._index]) {
              this._selected.add(this._slides[this._index]);
            }
            if (this._selected.has(slide)) this._selected.delete(slide);else {
              this._selected.add(slide);
              this._selAnchor = slide;
            }
          }
          this._syncSelection();
          return;
        }
        this._clearSelection();
        this._selAnchor = slide || null;
        this._go(i, 'click');
      });
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        // Delete/Backspace with the rail focused deletes this thumb's
        // slide through the same confirm dialog as the menu item.
        // Listening on the thumb (never window-level) is what keeps
        // typing in the notes panel / slide inputs from ever landing
        // here; the target check is belt-and-braces for anything
        // focusable that ends up inside a thumb.
        if ((e.key === 'Delete' || e.key === 'Backspace') && !e.metaKey && !e.ctrlKey && !e.altKey) {
          const t = e.target;
          if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
          e.preventDefault();
          e.stopPropagation();
          // Same refusals as the menu item: never every slide, never
          // while a prior structural op is waiting on its ack. The
          // whole-deck refusal is announced (the menu greys its item
          // out; a silently dead key reads as breakage). The rail-lock
          // refusal stays silent: it lasts one ack round-trip and
          // matches the existing single-delete behavior.
          if (this._railLock) return;
          // Explicit selection wins; otherwise the focused thumb (which
          // plain click and ↑/↓ keep equal to the current slide).
          const sel = this._selected.size ? this._selectionIndices() : [idx()];
          if (sel.length >= this._slides.length) {
            this._showNotice(sel.length === 1 ? 'The last slide can’t be deleted.' : 'At least one slide has to stay — the whole deck can’t be deleted.');
            return;
          }
          this._openConfirm(sel);
          return;
        }
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        // v1: dragging moves ONE slide, so a multi-selection would lie
        // about what's about to move — collapse it. (Group drag would
        // instead keep it and emit a batched move.)
        this._clearSelection();
        this._dragFrom = idx();
        // Deferred to the next frame: the [data-dragging] rule sets
        // pointer-events:none on the drag SOURCE, and applying that
        // synchronously inside dragstart makes Chromium (and WebKit) cancel
        // the drag — dragstart then an immediate dragend, no dragover or
        // drop, so thumbnails could not be reordered by dragging at all.
        // One frame is invisible and lands before the first dragover needs
        // the source to be hit-test-transparent. Guarded twice so the
        // attribute can never strand on a thumb that is no longer being
        // dragged (pointer-events:none would leave it unclickable for the
        // session): the pending frame is cancelled in dragend
        // (_cancelDragAttr), and the callback itself re-checks that THIS
        // thumb is still the live drag source (a new drag on another thumb
        // re-points the drag state). Deliberately NOT cancelled in
        // _stopDragTrack — _startDragTrack calls it at the start of every
        // drag, which would kill the mark this dragstart just scheduled
        // (see _cancelDragAttr).
        this._dragAttrRaf = requestAnimationFrame(() => {
          this._dragAttrRaf = null;
          if (this._dragFrom != null && this._dragThumb === thumb) {
            thumb.setAttribute('data-dragging', '');
          }
        });
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
        // Constrain the drag visual to the rail's vertical axis. The
        // browser's default drag image is a free-floating snapshot that
        // follows the OS cursor in BOTH axes and the DnD API offers no way
        // to constrain it — so swap it for a transparent stand-in and move
        // the thumb itself along Y instead (_startDragTrack). The drop
        // logic below always read only clientY; this makes the visual
        // match it.
        try {
          e.dataTransfer.setDragImage(this._dragBlank(), 0, 0);
        } catch (err) {}
        this._startDragTrack(thumb, e.clientY);
      });
      thumb.addEventListener('dragend', () => {
        this._cancelDragAttr();
        thumb.removeAttribute('data-dragging');
        this._stopDragTrack();
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      // The clone participates in the document's flat tree, so the
      // templates' position-based CSS page counters (.slide
      // { counter-increment: page }) would count every materialized
      // thumb before the real slides — folios print offset by the
      // thumb count (slide 2 reading "7" on a five-slide deck).
      // Neutralize the counter on the clone and drop its folio pill:
      // a thumbnail's own page number is unreadable at thumb scale
      // anyway, and the real slides' numbers stay truthful.
      clone.style.counterIncrement = 'none';
      clone.querySelectorAll('.page-foot').forEach(pf => pf.remove());
      // Canvas bitmaps don't clone — swap each cloned canvas for an <img>
      // of the live pixels. Best-effort: tainted canvases throw (left
      // as-is); zero-size are skipped; WebGL without preserveDrawingBuffer
      // reads back blank and the thumb gets a blank img (same as before).
      const liveCanvases = entry.slide.querySelectorAll('canvas');
      const cloneCanvases = clone.querySelectorAll('canvas');
      cloneCanvases.forEach((cv, i) => {
        const live = liveCanvases[i];
        if (!live || !live.width || !live.height) return;
        try {
          const img = document.createElement('img');
          img.src = live.toDataURL();
          img.alt = '';
          img.style.cssText = cv.style.cssText;
          img.className = cv.className;
          img.width = live.width;
          img.height = live.height;
          // Author CSS that sized the <canvas> via tag selector won't match
          // the <img> — pin the live canvas's laid-out box on the snapshot.
          if (live.clientWidth) {
            img.style.width = live.clientWidth + 'px';
            img.style.height = live.clientHeight + 'px';
          }
          cv.replaceWith(img);
        } catch (e) {}
      });
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      // Parity with _inertify: transient top-layer UI never belongs in a
      // static thumb.
      clone.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes (_neuter) so a component-heavy deck doesn't run
      // N copies of each component's mount logic in the rail. Children
      // are preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content, and a shadow tree cloned along
      // via attachShadow({clonable:true}) (e.g. <image-slot>) moves onto
      // the box so the thumb shows the component's rendered content. The
      // querySelectorAll NodeList is static, so nested custom elements in
      // the moved subtree are still visited on later iterations.
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = this._neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
      // Strip ids only now: a defined custom element upgrades synchronously
      // during cloneNode and re-renders on attribute callbacks, so removing
      // 'id' any earlier resets components (e.g. <image-slot> falls back to
      // its author src). Post-neuter, only inert boxes and plain elements
      // remain, where the strip is just the usual duplicate-id hygiene.
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      // Clones are display-only: inert removes anything focusable inside
      // them from the tab order, so the rail's Delete/Backspace handler
      // can never see a (retargeted) key press from cloned content.
      host.inert = true;
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Replace a cloned custom element with an inert box (see the comment
     *  in _materialize). A shadow tree cloned along via {clonable:true}
     *  moves onto the box, so the thumb shows the component's real content
     *  with zero component logic; :host rules in the moved <style> match
     *  the box, and the preserved data-* attrs keep :host([data-…])
     *  selectors working. */
    _neuter(el) {
      // Adopt the shadow only when the cloned root carries renderable
      // content. A constructor-attach / connectedCallback-render component
      // clones into an empty (or style-only) slotless root — adopting that
      // would hide the light children the box is about to receive and drop
      // the placeholder chrome. Such components fall back to the plain box.
      let sr = el.shadowRoot;
      if (sr) {
        let renderable = false;
        for (let n = sr.firstElementChild; n; n = n.nextElementSibling) {
          const t = n.tagName;
          if (t !== 'STYLE' && t !== 'LINK') {
            renderable = true;
            break;
          }
        }
        if (!renderable) sr = null;
      }
      const box = document.createElement('div');
      box.style.cssText = (el.getAttribute('style') || '') + (sr ? '' : ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);');
      box.className = el.className;
      // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
      // descendant selectors still match the neutered root — but not
      // pointer-interaction transients (a mid-reframe/mid-drag re-clone
      // would render the interaction chrome statically in the thumb).
      for (const a of el.attributes) {
        const n = a.name;
        if (n === 'data-reframe' || n === 'data-panning' || n === 'data-over') continue;
        if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
          box.setAttribute(n, a.value);
        }
      }
      while (el.firstChild) box.appendChild(el.firstChild);
      if (sr) this._adoptShadow(box, sr);
      return box;
    }

    /** Move a cloned shadow tree onto a neutered thumbnail box: attach an
     *  open root on the box, carry adoptedStyleSheets, move the children,
     *  then make the content inert. */
    _adoptShadow(box, sr) {
      let root;
      try {
        root = box.attachShadow({
          mode: 'open'
        });
      } catch (e) {
        return;
      }
      // Engine-cloned shadow roots never carry adoptedStyleSheets, but a
      // defined component's clone is upgrade-rebuilt (constructor runs
      // during cloneNode), so sheets it adopts there are present and
      // shared by reference — carry them.
      if (sr.adoptedStyleSheets && sr.adoptedStyleSheets.length) {
        try {
          root.adoptedStyleSheets = Array.prototype.slice.call(sr.adoptedStyleSheets);
        } catch (e) {}
      }
      // Clone rather than move: moving preserves listeners an upgraded
      // clone's constructor attached inside its shadow; cloning sheds
      // them, keeping thumbs free of component logic categorically.
      for (let n = sr.firstChild; n; n = n.nextSibling) {
        root.appendChild(n.cloneNode(true));
      }
      this._inertify(root);
    }

    /** Strip anything executable from copied shadow content and apply the
     *  same custom-element/media/img policy as the light-DOM clone.
     *  (Canvases inside copied shadow content stay blank — there is no
     *  live↔clone pairing across shadow boundaries to snapshot from.) */
    _inertify(root) {
      root.querySelectorAll('script').forEach(s => s.remove());
      // Transient top-layer UI can never belong in a static thumb. (A
      // cloned [popover] is display:none anyway — open state doesn't
      // clone — this just makes it categorical.)
      root.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      // Same heavy-media policy as the light-DOM clone above.
      root.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      root.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      root.querySelectorAll('*').forEach(el => {
        for (let i = el.attributes.length - 1; i >= 0; i--) {
          if (/^on/i.test(el.attributes[i].name)) {
            el.removeAttribute(el.attributes[i].name);
          }
        }
      });
      root.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Nested custom elements inside copied shadow content would upgrade
      // on append — same treatment as the light DOM. querySelectorAll is
      // static, so boxes created mid-walk don't re-enter this loop.
      root.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }

    /** 1×1 transparent stand-in for setDragImage. Kept attached (offscreen
     *  in the shadow root) because some engines ignore a drag image that
     *  isn't in a rendered tree. Created lazily, reused for every drag. */
    _dragBlank() {
      if (!this._dragBlankEl) {
        const c = document.createElement('canvas');
        c.width = 1;
        c.height = 1;
        c.style.cssText = 'position:fixed;left:-9999px;top:0;width:1px;height:1px;';
        this._root.appendChild(c);
        this._dragBlankEl = c;
      }
      return this._dragBlankEl;
    }

    /** Vertical-only drag tracking: translate the dragged thumb along Y to
     *  follow the pointer, clamped to the rail, ignoring X entirely. A
     *  document-level capture listener is used because native dragover
     *  fires wherever the pointer is — so the thumb keeps tracking even
     *  while the pointer wanders over the stage — and it is removed the
     *  moment the drag ends. getBoundingClientRect already reflects the
     *  current transform, so the layout position is recovered by
     *  subtracting the translation applied so far (rail auto-scroll moves
     *  the layout position mid-drag; see the rail dragover handler). */
    _startDragTrack(thumb, startY) {
      // A lost dragend (the dragged thumb removed mid-drag by a remote
      // edit's re-render — browsers fire no dragend on a disconnected
      // source) would otherwise leave the previous listener installed
      // forever once this overwrite lands.
      this._stopDragTrack();
      this._dragThumb = thumb;
      // The FLIP reorder animation drives transform through a transition;
      // the live drag must not inherit one, or the thumb rubber-bands.
      // Killed BEFORE the grab-offset read: mid-FLIP the rect includes the
      // interpolated transform, which would bake a constant offset into
      // the whole drag.
      thumb.style.transition = 'none';
      this._dragGrab = startY - thumb.getBoundingClientRect().top;
      this._dragTy = 0;
      this._onDragTrack = e => {
        const t = this._dragThumb;
        if (!t) return;
        const rail = this._rail.getBoundingClientRect();
        const r = t.getBoundingClientRect();
        // A transformed ancestor (author wraps the deck in a CSS scale;
        // canvas-mode pan/zoom) scales viewport deltas: translateY(N)
        // moves the rect by s·N. Measure s from the thumb itself (rect is
        // scaled, offsetHeight is layout px) so the feedback loop stays
        // exact instead of oscillating at s ≥ 2. offsetHeight is 0 only
        // when unrendered — nothing to track then, treat as unscaled.
        const s = t.offsetHeight ? r.height / t.offsetHeight : 1;
        const layoutTop = r.top - s * this._dragTy;
        let want = e.clientY - this._dragGrab;
        want = Math.max(rail.top, Math.min(want, rail.bottom - r.height));
        this._dragTy = (want - layoutTop) / s;
        t.style.transform = 'translateY(' + this._dragTy + 'px)';
      };
      document.addEventListener('dragover', this._onDragTrack, true);
    }

    /** Cancel the thumb's deferred data-dragging mark if its frame has not
     *  fired yet — see the dragstart deferral. Called from dragend only:
     *  _stopDragTrack is the wrong home for it, because _startDragTrack
     *  defensively calls _stopDragTrack at the START of every drag (its
     *  lost-dragend reset), so a cancel there kills the mark the same
     *  dragstart just scheduled. The strand that matters — pointer-
     *  events:none left on a CONNECTED thumb that is no longer being
     *  dragged — is closed two ways: dragend cancels the pending frame
     *  here, and the frame callback re-checks that THIS thumb is still the
     *  live drag source (_dragFrom and _dragThumb, both cleared/re-pointed
     *  by dragend or by a new drag). The remaining lost-dragend case — the
     *  source slide removed mid-drag, so no dragend fires — ends with that
     *  thumb discarded by the rail reconcile (thumbs are keyed by slide
     *  element and a removed slide's thumb is not reused), so a mark landing
     *  on it is on a discarded node. The risk this defer adds over the old
     *  synchronous set is therefore the narrow rAF-after-dragend window,
     *  which the dragend cancel covers. */
    _cancelDragAttr() {
      if (this._dragAttrRaf != null) {
        cancelAnimationFrame(this._dragAttrRaf);
        this._dragAttrRaf = null;
      }
    }
    _stopDragTrack() {
      if (this._onDragTrack) {
        document.removeEventListener('dragover', this._onDragTrack, true);
        this._onDragTrack = null;
      }
      const t = this._dragThumb;
      if (t) {
        t.style.transform = '';
        t.style.transition = '';
      }
      this._dragThumb = null;
      this._dragTy = 0;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      // Right-clicking a thumb OUTSIDE the selection collapses the
      // selection to that thumb (platform convention) — the menu then
      // always targets exactly what's highlighted.
      if (this._selected.size && slide && !this._selected.has(slide)) {
        this._selected.clear();
        this._selected.add(slide);
        this._selAnchor = slide;
        this._syncSelection();
      }
      const sel = this._selectionIndices();
      const bulk = sel.length > 1;
      this._menuIndices = bulk ? sel : [i];
      // Bulk mode offers only the one batched op that exists (delete);
      // the single-slide items address one index and stay hidden.
      this._menu.querySelectorAll('[data-act="skip"], [data-act="up"], [data-act="down"], [data-act="duplicate"], hr').forEach(el => {
        el.style.display = bulk ? 'none' : '';
      });
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      const del = this._menu.querySelector('[data-act="delete"]');
      del.textContent = bulk ? 'Delete ' + sel.length + ' slides' : 'Delete slide';
      del.disabled = bulk ? sel.length >= this._slides.length : this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
      this._menuIndices = null;
    }
    _openConfirm(sel) {
      if (!this._confirm) return;
      const list = Array.isArray(sel) ? sel : [sel];
      // Hold the slide ELEMENTS: the deck can re-render while the dialog
      // is open (collaborator/agent edit), and a frozen index list would
      // then address the wrong slides — a same-count reorder even passes
      // the host's witness guard. Elements re-resolve at danger-click.
      this._confirmEls = list.map(i => this._slides[i]).filter(Boolean);
      // Title uses the rail's skip-aware label, so the confirm names the
      // number the user right-clicked (a raw index would disagree with the
      // rail whenever a skipped slide precedes the target).
      const lbl = list.length === 1 ? this._slideLabel(list[0]) : '';
      this._confirm.querySelector('.title').textContent = list.length === 1 ? lbl ? 'Delete slide ' + lbl + '?' : 'Delete skipped slide?' : 'Delete ' + list.length + ' slides?';
      this._confirm.querySelector('.msg').textContent = list.length === 1 ? 'This slide will be removed from the deck.' : 'These slides will be removed from the deck.';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmEls = null;
    }

    /** Return focus to the current slide's thumb so the keyboard flow
     *  (Delete → Enter → Delete …) survives the confirm dialog closing.
     *  Without 'force', skipped while a structural op is in flight
     *  (_railLock): _index is then an optimistic post-op value that
     *  doesn't address the pre-op thumb list — _pendingRailRefocus stays
     *  armed and the ack/slotchange paths call back with force once the
     *  rail reflects the op. Skipped (and disarmed) while the rail is
     *  inert (hidden / presenting). */
    _focusCurrentThumb(force) {
      if (!force && this._railLock) return;
      this._pendingRailRefocus = false;
      // Never yank focus from content the user reached meanwhile (e.g.
      // an input inside a slide during the ack round-trip) — only
      // reclaim it from the rail's own surfaces, or from nowhere.
      const ae = this._root && this._root.activeElement;
      const ours = !ae || this._rail && this._rail.contains(ae) || this._confirm && this._confirm.contains(ae) || this._menu && this._menu.contains(ae);
      const lightAe = document.activeElement;
      const lightOk = !lightAe || lightAe === document.body || lightAe === this;
      if (!ours || !lightOk) return;
      const cur = this._thumbs && this._thumbs[this._index];
      if (cur && this._rail && !this._rail.inert) cur.thumb.focus({
        preventScroll: true
      });
    }

    /** Selection as sorted slide indices. An empty explicit selection
     *  means the current slide (the rail's implicit selection). */
    _selectionIndices() {
      const out = [];
      this._slides.forEach((s, i) => {
        if (this._selected.has(s)) out.push(i);
      });
      if (!out.length && this._slides[this._index]) out.push(this._index);
      return out;
    }
    _clearSelection() {
      // Re-anchor before the early return: a plain click followed by
      // arrow/tap navigation leaves _selected empty but the anchor
      // pointing at the old slide, and a later shift-click would range
      // from there instead of the current slide.
      this._selAnchor = null;
      if (!this._selected.size) return;
      this._selected.clear();
      this._syncSelection();
    }
    _syncSelection() {
      (this._thumbs || []).forEach(t => {
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    /** True when the page's DC runtime reports a live template stream for
     *  any component here (newer support.js bundles only — older bundles
     *  lack the signal and the HOST-side gate covers those decks). Rail
     *  mutations are refused for the duration: a mid-stream op addresses
     *  slide indices the stream is rewriting underneath the click. */
    _streamActive() {
      try {
        return !!window.__dcUpdate && typeof window.__dcStreaming === 'function' && window.__dcStreaming();
      } catch (e) {
        return false;
      }
    }

    /** Transient in-stage notice for a refused mid-stream rail op. */
    _showStreamNotice() {
      this._showNotice('Claude is still updating this deck — try again when it finishes.');
    }

    /** Transient bottom-center toast for a refused rail gesture. */
    _showNotice(text) {
      if (!this._root) return;
      let n = this._streamNotice;
      if (!n) {
        n = document.createElement('div');
        n.className = 'export-hidden';
        n.setAttribute('data-omelette-chrome', '');
        n.setAttribute('role', 'status');
        n.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);' + 'background:rgba(22,22,22,.94);color:#fff;' + 'font:500 13px/1.4 system-ui,sans-serif;padding:8px 14px;' + 'border-radius:8px;z-index:2147483646;pointer-events:none;' + 'opacity:0;transition:opacity .15s ease';
        this._root.append(n);
        this._streamNotice = n;
      }
      n.textContent = text;
      n.style.opacity = '1';
      if (this._streamNoticeTimer) clearTimeout(this._streamNoticeTimer);
      this._streamNoticeTimer = setTimeout(() => {
        n.style.opacity = '0';
      }, 2600);
    }
    _emitDcOp(op, slide, lock, newIndex) {
      // Mid-stream guard: refuse the gesture outright — no lock, no
      // optimistic index change, no emit, no self-mutation (returning
      // true short-circuits every caller). The host applies the same
      // gate for decks whose committed support.js predates the signal.
      if (this._streamActive()) {
        this._showStreamNotice();
        return true;
      }
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }

    /** Delete a set of slides (pre-op indices). One slide delegates to
     *  _deleteSlide — the plain 'remove' op — so single deletes keep
     *  working against hosts that predate 'removeMany'. A bulk delete is
     *  ONE op: one host write, one undo snapshot, and indices that all
     *  address the same pre-op deck (N acked single ops would each need
     *  a fresh witness). */
    _deleteSlides(list) {
      if (this._railLock || !list) return;
      const indices = [...new Set(list)].filter(i => this._slides[i]).sort((a, b) => a - b);
      if (!indices.length || indices.length >= this._slides.length) return;
      if (indices.length === 1) {
        this._deleteSlide(indices[0]);
        return;
      }
      // Mirrors _duplicateSlide: check the stream gate before doing any
      // work (_emitDcOp re-checks).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const els = indices.map(i => this._slides[i]);
      const del = new Set(indices);
      const cur = this._index;
      // New current index in post-op space: shift the kept slide left by
      // the deletions below it; if the current slide itself is deleted,
      // land on the nearest survivor (after, else before).
      const below = n => indices.reduce((k, x) => k + (x < n ? 1 : 0), 0);
      let ni;
      if (!del.has(cur)) {
        ni = cur - below(cur);
      } else {
        let s = -1;
        for (let j = cur + 1; j < this._slides.length; j++) {
          if (!del.has(j)) {
            s = j;
            break;
          }
        }
        if (s === -1) {
          for (let j = cur - 1; j >= 0; j--) {
            if (!del.has(j)) {
              s = j;
              break;
            }
          }
        }
        ni = s < 0 ? 0 : s - below(s);
      }
      // Emit-path deletes can't refocus until the host re-renders; arm
      // the flag at emit time (never on a refused/no-op path) so
      // ack/slotchange can finish the keyboard flow's focus hand-back.
      // The local path clears it via the caller's _focusCurrentThumb().
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'removeMany',
        indices
      }, els[0], true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      els.forEach(el => el.remove());
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      // Mint ids + copy component state BEFORE emitting, so the op can
      // carry the id map — but never mint for an op the stream gate is
      // about to refuse (_emitDcOp re-checks; this avoids orphaned keys).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      const ids = this._remintDuplicateIds(copy);
      const op = {
        op: 'duplicate'
      };
      if (ids) op.ids = ids;
      if (this._emitDcOp(op, slide, true, i + 1)) return;
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }

    /** Duplicate id policy. Plain ids are stripped — two live slides must
     *  not share one id. But a component that KEYS persistent state by id
     *  (image-slot's sidecar photo) would silently lose that state with
     *  its id. Such a component opts out of the strip by exposing a
     *  static cloneSlot(fromId, isFree) that copies its stored state
     *  under a fresh id of its choosing and returns that id. The old→new
     *  map is returned (or null) and rides the dc-op so the host writes
     *  the SAME ids into source — without that, the copy's state would
     *  revert on reload (docs/dc-ops.md). */
    _remintDuplicateIds(copy) {
      const ids = {};
      let found = false;
      const used = new Set();
      const idOk = /^[A-Za-z][\w-]{0,63}$/;
      const isFree = id => idOk.test(id) && !used.has(id) && !document.getElementById(id);
      copy.querySelectorAll('[id]').forEach(el => {
        const tag = el.tagName.toLowerCase();
        const cls = tag.indexOf('-') >= 0 && customElements.get(tag);
        let next = null;
        if (el.id && cls && typeof cls.cloneSlot === 'function') {
          try {
            next = cls.cloneSlot(el.id, isFree);
          } catch (e) {}
        }
        // Re-checked here so a misbehaving static can't smuggle a dupe
        // or an unsafe value into the document / the emitted op.
        if (typeof next === 'string' && isFree(next)) {
          ids[el.id] = next;
          used.add(next);
          el.id = next;
          found = true;
        } else {
          el.removeAttribute('id');
        }
      });
      return found ? ids : null;
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }

    /** Rail numbering, skip-aware: a skipped slide shows no number and the
     *  rest stay contiguous (1..visible), so the labels match the positions
     *  the overlay counter reports. Cheap (text writes are diffed), safe to
     *  call after any reconcile or skip toggle. */
    _renumberRail() {
      let v = 0;
      (this._thumbs || []).forEach(t => {
        const label = t.slide.hasAttribute('data-deck-skip') ? '' : String(++v);
        if (t.num.textContent !== label) t.num.textContent = label;
      });
    }

    /** Skip-aware label for slide i — the same numbering _renumberRail
     *  paints: '' for a skipped slide, else its 1-based position among
     *  non-skipped slides. Display surfaces (e.g. the delete confirm)
     *  use this so they never name a number the rail doesn't show. */
    _slideLabel(i) {
      const s = this._slides[i];
      if (!s || s.hasAttribute('data-deck-skip')) return '';
      let v = 0;
      for (let k = 0; k <= i; k++) {
        if (!this._slides[k].hasAttribute('data-deck-skip')) v++;
      }
      return String(v);
    }

    /** Overlay counter, skip-aware: position among non-skipped slides over
     *  the non-skipped total. A skipped CURRENT slide (reachable by rail
     *  click or deep link, never by _advance) shows '–' — its number is
     *  gone from the rail, so any digit here would lie. */
    _syncCount() {
      if (!this._countEl || !this._totalEl) return;
      // Empty deck: keep the overlay's initial "1 / 1" (it has nothing to
      // count and isn't visible without slides) — the guest fallback for
      // frozen copies leaves empty decks alone for the same rendering.
      if (!this._slides.length) {
        this._countEl.textContent = '1';
        this._totalEl.textContent = '1';
        return;
      }
      let pos = 0,
        total = 0;
      this._slides.forEach((s, i) => {
        if (!s.hasAttribute('data-deck-skip')) {
          total++;
          if (i <= this._index) pos = total;
        }
      });
      const cur = this._slides[this._index];
      const curSkipped = !cur || cur.hasAttribute('data-deck-skip');
      this._countEl.textContent = curSkipped ? '–' : String(pos);
      this._totalEl.textContent = String(total);
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck/ix-core.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Interactive deck core: slide context, presenter build steps, parallax, lap HUD. */
const IXDS = window.WilliamsRacingAIExperienceDesignSystem_1388e9;
const IXA = p => (window.WR_ASSETS || '../../assets/') + p;
const IXCtx = React.createContext({
  active: false,
  index: 0,
  prev: 0,
  total: 11,
  step: 0
});
window.__wrIX = window.__wrIX || {
  current: 0,
  prev: 0,
  handlers: {}
};
const IX = window.__wrIX;
if (!IX.bound) {
  IX.bound = true;
  const deck = () => document.querySelector('deck-stage');
  const syncFromDom = () => {
    const secs = [...document.querySelectorAll('deck-stage > section')];
    const i = secs.findIndex(s => s.hasAttribute('data-deck-active'));
    return i < 0 ? 0 : i;
  };
  document.addEventListener('slidechange', e => {
    IX.prev = e.detail.previousIndex ?? IX.current;
    IX.current = e.detail.index;
    Object.values(IX.handlers).forEach(h => h.onChange && h.onChange(IX.current, IX.prev));
  });
  IX.initial = syncFromDom;
  window.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    const h = IX.handlers[IX.current];
    if (!h) return;
    const fwd = ['ArrowRight', 'PageDown', ' ', 'Spacebar', 'ArrowDown'].includes(e.key);
    const back = ['ArrowLeft', 'PageUp', 'ArrowUp'].includes(e.key);
    if (fwd && h.next && h.next() || back && h.back && h.back()) {
      e.preventDefault();
      e.stopImmediatePropagation();
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
    const to = el.style.width || Math.max(0, idx) / laps * 100 + '%';
    if (!from) from = Math.max(0, pv) / laps * 100 + '%';
    if (pv === idx && !last) return;
    IX.bar = {
      el,
      anim: el.animate([{
        width: from
      }, {
        width: to
      }], {
        duration: 1400,
        easing: 'cubic-bezier(.22,.8,.2,1)',
        fill: 'backwards'
      })
    };
  };
  document.addEventListener('slidechange', e => runBar(e.detail.index, e.detail.previousIndex ?? e.detail.index));
}

/* Wraps one slide: tracks active state, build steps, and pointer parallax (--mx/--my). */
function IXSlide({
  index,
  total = 11,
  steps = 0,
  onStep,
  children,
  style,
  className = '',
  hud = true,
  field = true,
  hudFinal = false
}) {
  const [active, setActive] = React.useState(false);
  const [prev, setPrev] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const [nonce, setNonce] = React.useState(0);
  const ref = React.useRef(null);
  const stepRef = React.useRef(0);
  stepRef.current = step;
  React.useEffect(() => {
    const apply = (cur, pv) => {
      const isA = cur === index;
      setActive(isA);
      setPrev(pv);
      if (isA) {
        setStep(pv > index ? steps : 0);
        setNonce(n => n + 1);
      }
    };
    IX.handlers[index] = {
      onChange: apply,
      next: () => {
        if (stepRef.current < steps) {
          setStep(s => s + 1);
          return true;
        }
        return false;
      },
      back: () => {
        if (stepRef.current > 0) {
          setStep(s => s - 1);
          return true;
        }
        return false;
      },
      finish: () => setStep(steps)
    };
    const init = IX.initial ? IX.initial() : 0;
    IX.current = init;
    apply(init, init);
    return () => {
      delete IX.handlers[index];
    };
  }, [index, steps]);
  React.useEffect(() => {
    onStep && onStep(step);
  }, [step]);
  const onMove = e => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 2 - 1).toFixed(3));
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 2 - 1).toFixed(3));
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) {
      el.style.setProperty('--mx', 0);
      el.style.setProperty('--my', 0);
    }
  };
  return /*#__PURE__*/React.createElement(IXCtx.Provider, {
    value: {
      active,
      index,
      prev,
      total,
      step,
      setStep,
      nonce
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `ix-slide ${className}`,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: {
      position: 'relative',
      width: 1920,
      height: 1080,
      overflow: 'hidden',
      background: 'var(--wr-night)',
      color: '#fff',
      '--mx': 0,
      '--my': 0,
      ...style
    }
  }, field && /*#__PURE__*/React.createElement(CrossField, null), children, hud && /*#__PURE__*/React.createElement(LapHUD, {
    final: hudFinal
  })));
}

/* Decorative + / × lattice (Williams brand pattern): four arms with an open centre. Hover rotates 45°, un-hover returns. */
const CROSS_ARMS = 'M17 0V12.6M17 21.4V34M0 17H12.6M21.4 17H34';
function CrossField({
  gap = 240,
  size = 34
}) {
  const [rot, setRot] = React.useState({});
  const marks = [];
  for (let y = gap / 2, r = 0; y < 1080; y += gap / 2, r++) {
    for (let x = r % 2 ? gap : gap / 2; x < 1920; x += gap) marks.push({
      x,
      y,
      plus: r % 2 === 1
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, marks.map((m, i) => {
    const turned = !!rot[i];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "ix-cross",
      onMouseEnter: () => setRot(s => ({
        ...s,
        [i]: true
      })),
      onMouseLeave: () => setRot(s => ({
        ...s,
        [i]: false
      })),
      style: {
        position: 'absolute',
        left: m.x - size,
        top: m.y - size,
        width: size * 2,
        height: size * 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 34 34",
      style: {
        display: 'block',
        transform: `rotate(${(m.plus ? 0 : 45) + (turned ? 45 : 0)}deg)`,
        transition: 'transform .7s cubic-bezier(.2,.8,.2,1)'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: CROSS_ARMS,
      stroke: "currentColor",
      strokeWidth: "1.1",
      strokeLinecap: "round",
      fill: "none"
    })));
  }));
}

/* Parallax layer: depth in px at the viewport edge. Negative = moves against pointer. */
function PX({
  depth = 12,
  l = 0,
  t = 0,
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ix-px",
    style: {
      position: 'absolute',
      left: l,
      top: t,
      '--depth': depth + 'px',
      ...style
    }
  }, children);
}

/* Build-in wrapper — animation plays whenever the slide becomes active (keyed by nonce). */
function B({
  fx = 'up',
  d = 0,
  show = true,
  style,
  className = '',
  children,
  ...rest
}) {
  const {
    nonce
  } = React.useContext(IXCtx);
  return /*#__PURE__*/React.createElement("div", _extends({
    key: nonce,
    className: `ix ix-${fx} ${show ? '' : 'ix-hidden'} ${className}`,
    style: {
      '--d': d + 'ms',
      ...style
    }
  }, rest), children);
}

/* Lap-style progress: sector track across the bottom edge + LAP nn / nn. */
function LapHUD({
  final = false
}) {
  const {
    active,
    index,
    prev,
    total
  } = React.useContext(IXCtx);
  const barRef = React.useRef(null);
  const OFF = 1,
    laps = total - OFF;
  const pct = i => Math.max(0, (i - OFF + 1) / laps) * 100;
  const n = v => String(v).padStart(2, '0');
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "ix-hud",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 64,
      visibility: 'visible',
      pointerEvents: 'none',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: final ? 'ix-hud-out' : '',
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: 420,
      height: 150,
      background: 'radial-gradient(100% 100% at 100% 100%, rgba(10,12,20,0.85) 0%, rgba(10,12,20,0.55) 45%, rgba(10,12,20,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 48,
      bottom: 22,
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      fontFamily: '"Space Grotesk", sans-serif',
      color: '#fff',
      textShadow: '0 1px 12px rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, "LAP"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: '0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, n(index + 1 - OFF)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.7)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "/ ", n(laps)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 5,
      background: 'rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: barRef,
    className: final ? 'ix-lapbar is-final' : 'ix-lapbar',
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: `${pct(index)}%`,
      background: 'linear-gradient(90deg, rgba(0,66,255,0) 0%, #0042FF 35%, #0068DF 70%, rgb(31,199,255) 100%)',
      boxShadow: '0 0 18px rgba(31,199,255,0.7), 0 0 6px rgba(0,104,223,1)',
      borderRadius: '0 5px 5px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-lapwhite",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      opacity: 0,
      background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, #fff 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ix-carglow",
    style: {
      position: 'absolute',
      right: -2,
      bottom: 9,
      width: 62,
      height: 13,
      filter: 'drop-shadow(0 0 4px rgba(31,199,255,0.95)) drop-shadow(0 0 10px rgba(0,104,223,0.8))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-car",
    style: {
      width: '100%',
      height: '100%',
      background: 'rgb(31,199,255)',
      WebkitMask: `url(assets/f1-car.png) center / contain no-repeat`,
      mask: `url(assets/f1-car.png) center / contain no-repeat`
    }
  })))));
}

/* Pull-out drawer: an F1-style tab peeks from the frame edge (right or left); click slides a glass card out. */
function IXDrawer({
  side = 'right',
  top = 120,
  width = 580,
  eyebrow,
  meta,
  title,
  chips = [],
  wave = false,
  aside,
  locked = false,
  content,
  middle,
  bottom,
  handleLift = 84,
  bare = false,
  children
}) {
  const {
    active
  } = React.useContext(IXCtx);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!active) setOpen(false);
  }, [active]);
  const W = width + 40,
    R = side === 'right';
  if (locked) return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [side]: 0,
      top,
      zIndex: 30,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": eyebrow,
    "aria-disabled": "true",
    onClick: e => e.stopPropagation(),
    className: `ix-handle ${R ? 'is-r' : 'is-l'} is-peek`,
    style: {
      marginTop: 36,
      height: 136,
      border: 0,
      padding: 0,
      cursor: 'pointer',
      borderRadius: R ? '14px 0 0 14px' : '0 14px 14px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "22",
    viewBox: "0 0 14 22",
    style: {
      display: 'block',
      transform: `rotate(${R ? 0 : 180}deg)`
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 3 L3 11 L10 19",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ix-hstripe",
    style: {
      '--i': i
    }
  })))));
  const edge = R ? '24px 0 0 24px' : '0 24px 24px 0';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    onClick: e => {
      e.stopPropagation();
      setOpen(false);
    },
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 18,
      background: 'rgba(6,8,14,0.46)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity .7s cubic-bezier(.3,.7,.3,1)'
    }
  }), aside && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: open ? 'is-open' : '',
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 25,
      pointerEvents: 'none',
      opacity: open ? 1 : 0,
      transform: open ? 'none' : 'translateY(10px)',
      transition: open ? 'opacity 1s ease .3s, transform 1.1s cubic-bezier(.2,.8,.2,1) .3s' : 'opacity .5s ease, transform .5s ease'
    }
  }, aside), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      [side]: 0,
      ...(bottom != null ? {
        bottom
      } : {
        top: middle ?? top
      }),
      zIndex: 30,
      display: 'flex',
      flexDirection: R ? 'row' : 'row-reverse',
      alignItems: bottom != null ? 'flex-end' : middle != null ? 'center' : 'flex-start',
      transform: `translateX(${open ? 0 : R ? W : -W}px)${middle != null ? ' translateY(-50%)' : ''}`,
      transition: 'transform .8s cubic-bezier(.2,.85,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": open,
    "aria-label": eyebrow,
    onClick: () => setOpen(o => !o),
    className: `ix-handle ${R ? 'is-r' : 'is-l'} ${open ? '' : 'is-peek'}`,
    style: {
      marginTop: middle != null || bottom != null ? 0 : 36,
      marginBottom: bottom != null ? handleLift : 0,
      height: 136,
      border: 0,
      padding: 0,
      cursor: 'pointer',
      borderRadius: R ? '14px 0 0 14px' : '0 14px 14px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "22",
    viewBox: "0 0 14 22",
    style: {
      display: 'block',
      transform: `rotate(${(open ? 180 : 0) + (R ? 0 : 180)}deg)`,
      transition: 'transform .6s cubic-bezier(.2,.85,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 3 L3 11 L10 19",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ix-hstripe",
    style: {
      '--i': i
    }
  })))), bare ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      boxSizing: 'border-box',
      padding: R ? '0 22px 0 0' : '0 0 0 22px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 9,
      borderRadius: 'calc(var(--radius-photo) + 9px)',
      background: 'linear-gradient(180deg,rgba(44,49,64,.88),rgba(24,27,38,.88))',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.12), 0 30px 70px rgba(0,0,0,.45)'
    }
  }, typeof content === 'function' ? content(open) : content)) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      boxSizing: 'border-box',
      padding: '54px 60px 46px',
      borderRadius: edge,
      background: 'rgba(10,12,20,0.74)',
      backdropFilter: 'blur(24px) saturate(1.2)',
      WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
      boxShadow: `inset ${R ? 1 : -1}px 0 0 rgba(255,255,255,0.18), inset 0 1px 0 rgba(255,255,255,0.1), ${R ? -24 : 24}px 30px 80px rgba(0,0,0,0.5)`,
      fontFamily: 'var(--font-body)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, meta)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '26px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 46,
      lineHeight: '52px',
      letterSpacing: '-0.015em',
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 120,
      height: 1.5,
      margin: '26px 0 26px',
      background: 'var(--wr-rule-gradient)'
    }
  }), content || /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 300,
      lineHeight: '37px',
      color: 'rgba(255,255,255,0.86)',
      textWrap: 'pretty'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 36,
      paddingTop: 26,
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, chips.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: wave ? '10px 18px 10px 14px' : '10px 18px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.07)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.14)'
    }
  }, wave && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      height: 20
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: open ? 'ix-bar is-on' : 'ix-bar',
    style: {
      '--i': i,
      width: 2.5,
      background: 'rgb(31,199,255)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      whiteSpace: 'nowrap'
    }
  }, n))), /*#__PURE__*/React.createElement("img", {
    src: IXA('logo/williams-wordmark-white.png'),
    alt: "Williams Racing",
    style: {
      marginLeft: 'auto',
      height: 18,
      width: 'auto',
      opacity: 0.34,
      display: 'block'
    }
  })))));
}
function IXLogo({
  l,
  t,
  d = 0
}) {
  return /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: d,
    style: {
      position: 'absolute',
      left: l,
      top: t + 3
    }
  }, /*#__PURE__*/React.createElement(IXDS.WilliamsLogo, {
    src: IXA('logo/williams-wordmark-white.png'),
    width: 210
  }));
}
Object.assign(window, {
  IXDrawer,
  CrossField,
  IXCtx,
  IXSlide,
  PX,
  B,
  LapHUD,
  IXLogo,
  IXA,
  IXDS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck/ix-core.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck/ix-slides-a.jsx
try { (() => {
/* Interactive slides — Cover (Frame 2), Overview (Frame 3), Journey (Frame 16). Copy verbatim from Figma. */

function IXStreaks({
  d = 200
}) {
  return /*#__PURE__*/React.createElement(PX, {
    depth: -28,
    l: 0,
    t: 0,
    style: {
      width: 1920,
      height: 1080,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "streak",
    d: d,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 1920,
      height: 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 1536,
      height: 1024,
      transform: 'matrix(-0.997,0.079,-0.079,-0.997,2491.426,1609.770)',
      transformOrigin: '0 0',
      background: `url(${IXA('brand/speed-streaks.png')}) center / cover no-repeat`
    }
  })));
}
function IXWMark({
  d = 0
}) {
  return /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: d,
    style: {
      position: 'absolute',
      left: 24,
      top: 188.5,
      width: 1235,
      height: 703.6,
      background: `url(${IXA('brand/w-mark-dark.png')}) center / contain no-repeat`,
      pointerEvents: 'none'
    }
  });
}
function IXCoverSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index,
    style: {
      background: 'var(--wr-night-2)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "push",
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${IXA('photos/pitlane-hey-williams.png')}) center / cover no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: 620,
      height: 260,
      background: 'radial-gradient(100% 100% at 100% 0%, rgba(10,12,20,0.8) 0%, rgba(10,12,20,0.5) 45%, rgba(10,12,20,0) 100%)',
      pointerEvents: 'none',
      zIndex: 19
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 1100,
      height: 420,
      background: 'radial-gradient(100% 100% at 0% 100%, rgba(10,12,20,0.78) 0%, rgba(10,12,20,0.4) 45%, rgba(10,12,20,0) 100%)',
      pointerEvents: 'none',
      zIndex: 19
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "left",
    d: 1300,
    style: {
      position: 'absolute',
      left: 164,
      bottom: 214,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("svg", {
    key: i,
    className: "ix-chev",
    width: "16",
    height: "24",
    viewBox: "0 0 16 24",
    style: {
      '--i': i,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3 L12 12 L3 21",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: '0.3em',
      color: '#fff',
      textShadow: '0 2px 16px rgba(0,0,0,0.5)'
    }
  }, "WELCOME TO THE PADDOCK")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      bottom: 112,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(VoicePlayer, {
    className: "ix-glass-in"
  })), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "right",
    eyebrow: "VOICE CLONING",
    meta: "Powered by ElevenLabs",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Hear exactly what", /*#__PURE__*/React.createElement("br", null), "the drivers hear."),
    chips: ['James Urwin', 'Gaëtan Jago'],
    wave: true,
    aside: /*#__PURE__*/React.createElement(SilverstoneMap, null)
  }, "With ElevenLabs voice synthesis and advanced audio processing, we can create fully personalised digital replicas of James Urwin\u2019s and Ga\xEBtan Jago\u2019s voices. Race-engineer-grade audio goes straight into each guest\u2019s ear, so the pit lane sounds as close as it gets to what drivers hear mid-race."));
}

/* Silverstone outline: centripetal Catmull-Rom through traced anchors (no overshoot), drawn in race direction from the start line. Telemetry: turns, sectors, DRS, speed zones. */
const SILVERSTONE_D = 'M516.6 19.1C562.4 50.7 855.1 276.3 900.6 311.9C910.5 319.7 913.4 321.3 918.6 326.4C923.2 330.9 927.2 335.6 930.4 340.6C933.4 345.3 935.6 350.8 937.4 355.6C938.9 359.8 939.8 362.7 940.7 367.6C942.1 375.3 943.3 386.4 943.4 397.6C943.6 411.7 941.9 426.9 940.3 445.6C938 472.1 929.9 517.9 929.6 541.6C929.4 555.5 930.5 564.2 932.3 574.6C933.9 584.1 936.3 593 939.4 601.6C942.4 610 946.8 618.6 950.6 625.6C953.7 631.3 954.8 633.2 960.1 640.6C977.4 664.9 1064.4 764.3 1080.3 790.6C1085.4 799 1086.9 803.5 1088.1 808.6C1088.9 812 1089.2 814.3 1088.7 817.6C1088.1 821.9 1085.8 828.4 1083.3 832.1C1081.2 835.1 1078.9 836.8 1075.6 838.9C1071 841.8 1065.9 843.6 1057.6 846.6C1040 852.9 986.9 865.1 973.6 871.1C969.1 873.1 967.6 873.8 965.1 876.4C962 879.6 958.5 885.1 957.3 889.6C956.3 893.5 956.8 898 957.6 901.6C958.3 904.9 960 908.1 961.6 910.6C962.9 912.8 963.9 914.1 966 916.1C969.3 919.2 974.2 922.8 980.6 926.3C990.8 931.9 1008.2 939 1022.6 943.6C1037.2 948.2 1053.1 951.6 1067.6 953.9C1081 956.1 1093.9 957.3 1106.6 957.6C1118.8 957.9 1133.9 957.3 1142.6 955.7C1147.7 954.8 1150.7 953.8 1154.6 951.9C1158.8 949.9 1162.6 947 1166.6 943.7C1171.4 939.8 1173.3 937.6 1181 929.6C1217.8 891.5 1409 679.8 1490 590.6C1542.7 532.5 1599 471.9 1620.3 446.6C1627.6 437.9 1630.7 434.1 1634.4 428.6C1637.2 424.3 1639.2 420.7 1641 416.6C1642.8 412.7 1644.2 409.5 1645.3 404.6C1646.9 397.5 1648 385.3 1648 377.6C1648 371.9 1647.3 367.3 1646.4 362.6C1645.6 358.3 1644.6 354.3 1643.3 350.6C1642.1 347.3 1640.8 344.4 1639 341.6C1637.2 338.7 1634.9 335.7 1632.3 333.4C1629.7 331.1 1626.6 329.1 1623.6 327.7C1620.7 326.4 1619.1 326 1614.6 325C1602.1 322.4 1558.6 318.7 1542.6 315.9C1534.6 314.5 1530.5 313.9 1524.6 311.9C1518.5 309.8 1511.3 306.7 1506.6 303.6C1503.1 301.3 1500.9 299 1498.4 296.3C1495.9 293.6 1493.7 290.8 1491.7 287.6C1489.5 284 1487.3 279.4 1485.9 275.6C1484.8 272.4 1484.1 270.3 1483.7 266.6C1483.1 261.1 1483.1 251.1 1483.9 245.6C1484.4 241.9 1485.2 239.8 1486.4 236.6C1487.9 232.8 1490.1 228.2 1492.4 224.6C1494.4 221.4 1496.6 218.6 1499.1 216C1501.6 213.4 1504.4 211.1 1507.6 208.9C1511.2 206.5 1515.3 204 1519.6 202.4C1524.2 200.7 1529.6 199.5 1534.6 199.1C1539.6 198.7 1544.6 199 1549.6 199.7C1554.6 200.4 1558.1 201 1564.6 203.4C1578.6 208.5 1607.4 223.6 1627.6 234.9C1647.4 246 1669.8 260.3 1684.6 270.6C1694.5 277.5 1701.3 282.9 1708.6 289C1715.2 294.5 1719.3 298.3 1726.6 305.6C1739.2 318.3 1763.7 343.8 1776.1 359.6C1784.8 370.7 1790.7 379.6 1796.3 389.6C1801.4 398.6 1805.7 408.8 1808.7 416.6C1810.9 422.2 1812.1 426.3 1813.3 431.6C1814.6 437.3 1815.1 440.8 1816.3 449.6C1819.7 474 1827.7 543.8 1832.3 587.6C1836.5 627.4 1839.6 659.6 1843 701.6C1847.2 753.5 1855.9 842.8 1855.1 875.6C1854.8 888.5 1853.9 894.6 1851.9 902.6C1850.2 909.3 1848.2 914.8 1844.9 920.6C1841.3 926.9 1836.4 932.4 1830.6 938.6C1823.3 946.4 1813.2 955.8 1803.6 963C1794.2 970.1 1784 975.8 1773.6 981.4C1763 987.1 1751.7 992.3 1740.6 996.7C1729.7 1000.9 1719.7 1003.9 1707.6 1007.3C1693.2 1011.3 1677.9 1014.7 1659.6 1018.6C1635.5 1023.8 1597.2 1031.4 1575.6 1034.9C1562.1 1037.1 1556.4 1038 1542.6 1039.3C1519.5 1041.5 1481.3 1043.4 1449.6 1045C1416.4 1046.7 1372.2 1047 1347.6 1049C1333.5 1050.1 1326.2 1050.6 1314.6 1053C1301.3 1055.7 1286.9 1059.4 1272.6 1065.4C1256.1 1072.3 1234.5 1088.4 1221.6 1093.6C1214.3 1096.5 1209.7 1097.5 1203.6 1098.3C1197.6 1099.1 1191.6 1098.9 1185.6 1098.4C1179.6 1097.9 1175.5 1097.4 1167.6 1095.3C1151.5 1091 1113.9 1074.7 1095.6 1068.9C1084.5 1065.4 1077.7 1063.3 1068.6 1061.6C1059.7 1059.9 1049.7 1058.7 1041.6 1058.6C1035 1058.5 1029.6 1059 1023.6 1060.1C1017.5 1061.2 1011.2 1062.9 1005.6 1065.1C1000.3 1067.2 996.6 1069.1 990.6 1072.9C980.4 1079.4 961.7 1096 951.6 1102.7C945.6 1106.6 941.7 1108.9 936.6 1111.1C931.7 1113.2 926.9 1114.6 921.6 1115.6C916 1116.6 907.4 1116.8 904 1116.9C902.6 1117 902.4 1117 901.1 1116.9C898.1 1116.7 891.4 1116.1 886.6 1115C881.6 1113.8 876.2 1112.1 871.6 1110C867.3 1108.1 863.5 1105.8 859.6 1103.1C855.5 1100.3 852.2 1097.8 847.9 1093.3C841.2 1086.3 832.8 1075.3 824.9 1063.6C814.7 1048.5 802.1 1022.5 793.3 1009.6C788 1001.8 784 996.9 779.1 991.7C774.7 987.1 771.4 984 765.6 979.7C756.7 973.1 748.7 968.6 729.6 957.6C661 918.2 338.8 749.5 249.6 700.4C214.8 681.3 205 676.6 177.6 659.7C139.2 636 66.9 588.8 42.6 568.9C32.6 560.7 27.6 555 23.1 549.6C20.3 546.2 19 544.1 17.1 540.6C14.7 536.3 12.3 531.4 10.3 525.6C7.7 518 5 506.3 4.1 498.6C3.4 492.9 3.7 488.6 4 483.6C4.3 478.6 4.6 474.1 6 468.6C7.8 461.4 11.8 451.1 15 444.6C17.4 439.8 19.7 436.5 22.6 432.6C25.6 428.6 28.5 424.8 32.7 420.9C38.2 415.8 44.7 410.7 53.6 405.3C67.1 397.2 92.8 387.4 107.6 379.9C118.2 374.6 124.5 371.5 134.6 365.4C148.5 357 169 342.9 182.6 333C193.1 325.3 198.4 321.1 209.6 311.6C229.6 294.6 265.1 260.1 290.6 237.7C312.7 218.2 343.3 194.5 353.6 184.3C357.3 180.7 358.8 179.4 360.6 176.3C362.5 172.9 364.3 168.8 364.6 164.6C365 160 363.7 153.8 362.1 149.6C360.8 146.1 359.2 144.1 356.7 140.6C352.5 134.9 342.4 126.4 338.3 119.6C335.2 114.5 333.2 109.9 332.4 104.6C331.6 99 332.2 92.1 334 86.6C335.8 81.2 339.3 76.3 343 71.6C347 66.5 352.4 61.8 357.6 57.1C363.2 52.1 370.1 46.5 375.6 42.4C379.9 39.2 383 37.1 387.6 34.3C393.5 30.8 401.8 26.5 408.6 23.3C414.8 20.4 420.3 17.9 426.6 15.6C433.3 13.1 440.8 10.9 447.6 9.1C453.8 7.5 459.8 5.9 465.6 5.1C470.8 4.3 475.4 3.6 480.6 4C486.4 4.4 492.8 5.5 498.6 7.9C504.8 10.4 507 12.5 516.6 19.1Z';
const SS_T = {
  "turns": [[1, 961, 321], [2, 966, 540], [3, 1123, 798], [4, 991, 902], [5, 1108, 922], [6, 1680, 349], [7, 1520, 245], [8, 1705, 241], [9, 1876, 938], [10, 1286, 1099], [11, 1186, 1134], [12, 1066, 1098], [13, 993, 1116], [14, 882, 1151], [15, -32, 484], [16, 329, 163], [17, 302, 71], [18, 438, -26]],
  "br": [["M1066 829L1063 813L1050 817L1044 820L1037 822L1030 823L1021 826L1014 828L1006 830L998 832L988 835L979 838L971 840L959 845L944 855L933 870L929 882L929 909L939 929L943 936L953 944L962 950L973 956L981 960L988 963L998 967L1006 970L1013 972L1025 975L1036 978L1044 980L1051 982L1054 966", 870, 862, "LOW SPEED"], ["M1576 334L1573 350L1566 349L1556 348L1543 346L1532 345L1521 342L1508 338L1496 332L1488 327L1468 306L1461 294L1459 288L1454 271L1453 256L1454 246L1458 227L1466 211L1475 198L1490 185L1495 181L1513 173L1530 170L1540 169L1550 170L1567 173L1580 177L1590 182L1601 187L1610 191L1618 195L1628 201L1620 215", 1418, 205, "LOW SPEED"], ["M1398 1033L1397 1017L1378 1017L1359 1018L1337 1020L1317 1022L1297 1026L1277 1032L1253 1041L1235 1052L1219 1061L1211 1066L1198 1069L1187 1069L1171 1065L1155 1059L1137 1052L1119 1046L1101 1039L1076 1032L1057 1030L1026 1030L1009 1033L984 1042L963 1056L949 1067L934 1079L921 1085L917 1086L904 1087L886 1084L878 1080L869 1093", 1153, 1011, "HIGH SPEED"]],
  "drs": [["M1164 921L1175 910L1188 895L1200 883L1213 869L1228 853L1243 835L1260 817L1269 807L1287 788L1296 777L1315 757L1324 746L1343 725L1353 715L1372 694L1381 684L1399 664L1408 654L1425 635L1442 617L1449 609L1464 593L1481 574L1496 557L1508 544L1524 527L1539 510L1550 498L1567 479L1579 466", 1351, 675, "DRS 1"], ["M781 1023L767 1005L749 990L728 978L709 967L684 953L664 942L642 930L617 917L591 903L577 895L548 880L534 872L504 857L474 841L459 833L429 817L414 809L385 794L357 779L344 772L319 758L295 746L265 729L241 716L218 703L194 690L170 676L149 663L126 649L107 636", 446, 857, "DRS 2"]],
  "sec": [[1474, 631, 1451, 610], [826, 1034, 798, 1049]],
  "trap": [62, 584, 37, 612],
  "sf": [535, 52, 554, 26],
  "sfl": [521, 71],
  "sl": [["S1", 1150, 560], ["S2", 1650, 700], ["S3", 520, 720]]
};
function SilverstoneMap({
  l = 140,
  t = 110,
  w = 1000
}) {
  const k = w / 1872,
    h = 1133 * k,
    P = v => (v + 6) * k;
  const lab = {
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-display)',
    pointerEvents: 'none'
  };
  const vs = {
    vectorEffect: 'non-scaling-stroke',
    fill: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: l,
      top: t,
      width: w,
      height: h
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: "-6 -6 1872 1133",
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("g", {
    className: "ix-ss-t",
    style: {
      '--d': '.9s'
    }
  }, SS_T.br.map(([d]) => /*#__PURE__*/React.createElement("path", {
    key: d,
    d: d,
    stroke: "rgba(255,255,255,0.2)",
    strokeWidth: "1.2",
    strokeLinejoin: "round",
    style: vs
  })), SS_T.drs.map(([d]) => /*#__PURE__*/React.createElement("path", {
    key: d,
    d: d,
    stroke: "rgba(31,199,255,0.45)",
    strokeWidth: "1.3",
    strokeDasharray: "2 5",
    strokeLinecap: "round",
    style: vs
  }))), /*#__PURE__*/React.createElement("path", {
    d: SILVERSTONE_D,
    pathLength: "1000",
    fill: "none",
    stroke: "rgba(255,255,255,0.32)",
    strokeWidth: "3.2",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("path", {
    d: SILVERSTONE_D,
    pathLength: "1000",
    fill: "none",
    stroke: "rgba(0,104,223,0.55)",
    strokeWidth: "3.2",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    className: "ix-ss-glow"
  }), /*#__PURE__*/React.createElement("g", {
    className: "ix-ss-t",
    style: {
      '--d': '.7s'
    }
  }, SS_T.sec.map((s, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: s[0],
    y1: s[1],
    x2: s[2],
    y2: s[3],
    stroke: "rgba(255,255,255,0.55)",
    strokeWidth: "1.2",
    style: vs
  })), /*#__PURE__*/React.createElement("line", {
    x1: SS_T.sf[0],
    y1: SS_T.sf[1],
    x2: SS_T.sf[2],
    y2: SS_T.sf[3],
    stroke: "#fff",
    strokeWidth: "2",
    style: vs
  }), /*#__PURE__*/React.createElement("circle", {
    cx: SS_T.trap[0],
    cy: SS_T.trap[1],
    r: "9",
    stroke: "rgba(255,255,255,0.7)",
    strokeWidth: "1.2",
    style: {
      ...vs,
      fill: 'var(--wr-night)'
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: SILVERSTONE_D,
    pathLength: "1000",
    fill: "none",
    stroke: "rgb(31,199,255)",
    strokeWidth: "3.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    className: "ix-ss-pulse"
  }), /*#__PURE__*/React.createElement("path", {
    d: SILVERSTONE_D,
    pathLength: "1000",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    className: "ix-ss-pulse is-core"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ix-ss-t",
    style: {
      '--d': '.8s',
      position: 'absolute',
      inset: 0
    }
  }, SS_T.turns.map(([n, x, y]) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      ...lab,
      left: P(x),
      top: P(y),
      fontSize: 13,
      fontWeight: 500,
      color: 'rgba(255,255,255,0.55)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, n)), SS_T.br.map(([d, x, y, s]) => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      ...lab,
      left: P(x),
      top: P(y),
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, s)), SS_T.drs.map(([d, x, y, s]) => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      ...lab,
      left: P(x),
      top: P(y),
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(31,199,255,0.75)'
    }
  }, s)), SS_T.sl.map(([s, x, y], i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      ...lab,
      left: P(x),
      top: P(y),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      color: 'rgba(255,255,255,0.42)'
    }
  }, s), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.3)'
    }
  }, "SECTOR ", i + 1))), /*#__PURE__*/React.createElement("span", {
    style: {
      ...lab,
      left: P(SS_T.trap[2]),
      top: P(SS_T.trap[3]),
      transform: 'translate(-100%,-50%)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "SPEED TRAP"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...lab,
      left: P(SS_T.sfl[0]),
      top: P(SS_T.sfl[1]),
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "START / FINISH")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: w * 0.262,
      top: h * 0.41,
      transform: 'translate(-50%,-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/silverstone-logo.png",
    alt: "Silverstone",
    style: {
      display: 'block',
      height: 20,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      letterSpacing: '0.22em',
      color: '#fff'
    }
  }, "SILVERSTONE CIRCUIT"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.06em',
      color: 'rgba(255,255,255,0.62)'
    }
  }, "Home of the British Grand Prix"), /*#__PURE__*/React.createElement("span", {
    className: "ix-ss-t",
    style: {
      '--d': '1s',
      marginTop: 8,
      display: 'flex',
      gap: 14,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(255,255,255,0.42)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("span", null, "5.891 KM"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "18 TURNS"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "52 LAPS")))));
}

/* Glass audio pill — plays assets/audio/race-engineer.mp3 */
function VoicePlayer({
  src = IXA('audio/race-engineer.mp3'),
  className = ''
}) {
  const ref = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [prog, setProg] = React.useState(0);
  const [err, setErr] = React.useState(false);
  const {
    active
  } = React.useContext(IXCtx);
  React.useEffect(() => {
    const a = ref.current;
    if (!active && a && !a.paused) {
      a.pause();
      setPlaying(false);
    }
  }, [active]);
  const toggle = e => {
    e.stopPropagation();
    const a = ref.current;
    if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => setErr(true));else {
      a.pause();
      setPlaying(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: toggle,
    className: `ix-player ${className}`,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '10px 22px 10px 10px',
      borderRadius: 999,
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--glass-shadow)',
      cursor: 'pointer',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("audio", {
    ref: ref,
    src: src,
    preload: "auto",
    onTimeUpdate: e => setProg(e.target.duration ? e.target.currentTime / e.target.duration : 0),
    onEnded: () => {
      setPlaying(false);
      setProg(0);
    },
    onError: () => setErr(true)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, playing ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 16,
      background: '#fff',
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 16,
      background: '#fff',
      borderRadius: 1
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      marginLeft: 4,
      borderTop: '9px solid transparent',
      borderBottom: '9px solid transparent',
      borderLeft: '14px solid #fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: 150
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.16em',
      color: '#fff'
    }
  }, err ? 'AUDIO MISSING' : 'RACE ENGINEER'), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      borderRadius: 3,
      background: 'rgba(255,255,255,0.18)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${prog * 100}%`,
      background: 'linear-gradient(90deg,#0042FF,rgb(31,199,255))'
    }
  }))));
}
function IXOverviewSlide({
  index
}) {
  const items = [['Immersive AI experience –', ' A bespoke AI powered experience that immerses VIP guests and partners in the heart of the Williams Racing team during paddock and pit lane walks.'], ['Your own synthetic race engineer –', ' Receive live engineering insights, team heritage, sponsor stories and behind the scenes context, while asking questions naturally at any time. Every word lands straight in your ear, just as a driver hears their race engineer.'], ['Stay present, relive every moment –', ' Experience the day without reaching for your phone while AI captures every unforgettable moment to revisit long after the event.']];
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement(PX, {
    depth: -10,
    l: 1143,
    t: -20,
    style: {
      width: 797,
      height: 1120
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "right",
    d: 150,
    className: "ix-photo",
    style: {
      position: 'absolute',
      inset: 0,
      borderLeft: '2px solid #fff',
      background: `url(${IXA('photos/glasses-case-blue.png')}) center / cover no-repeat`
    }
  })), /*#__PURE__*/React.createElement(IXStreaks, {
    d: 350
  }), /*#__PURE__*/React.createElement(IXLogo, {
    l: 164,
    t: 257,
    d: 380
  }), /*#__PURE__*/React.createElement(B, {
    fx: "wipe",
    d: 520,
    style: {
      position: 'absolute',
      left: 163.987,
      top: 335.25,
      width: 305.026,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      top: 376,
      width: 800,
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      fontFamily: 'var(--font-body)'
    }
  }, items.map(([b, r], i) => /*#__PURE__*/React.createElement(B, {
    key: b,
    fx: "left",
    d: 640 + i * 160,
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr',
      columnGap: 18,
      paddingTop: i ? 30 : 0,
      borderTop: i ? '1px solid rgba(255,255,255,0.1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      paddingTop: 8,
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      lineHeight: '34px',
      color: '#fff'
    }
  }, b.replace(/\s*–\s*$/, '')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 300,
      lineHeight: '32px',
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty'
    }
  }, r.trim()))))));
}

/* Journey: → / click reveals each step in order; the newest step carries a blue focus glow. */
function IXJourneySlide({
  index
}) {
  const steps = [{
    l: 89,
    t: 94,
    img: 'paddock-glasses-handover',
    cap: 'Head to the paddock and receive your smart glasses from a hospitality host'
  }, {
    l: 730,
    t: 129,
    img: 'pitlane-glasses-on',
    cap: "Experience begins with the race engineer's voice welcoming you to the pit lane",
    arrow: [578, 222, 'rotate(180deg)']
  }, {
    l: 1355,
    t: 94,
    img: 'pitlane-hey-williams',
    cap: 'Guided through the pit lane with exclusive insights and fun facts about the team',
    arrow: [1214, 200, 'scaleX(-1) rotate(-12deg) scale(.86)']
  }, {
    l: 408,
    t: 589,
    img: 'pitlane-group-glasses',
    cap: 'Stay in the moment while our glasses capture your every move, even live stream to your instagram'
  }, {
    l: 1051,
    t: 589,
    img: 'grandstand-radio',
    cap: "Feel like you're at the wheel, with real time driver to team radio in your ear, and updates from your very own AI engineer",
    arrow: [896, 700, 'rotate(160deg)']
  }];
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(JourneyInner, {
    steps: steps
  }), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    bottom: 196,
    handleLift: 28,
    width: 720,
    eyebrow: "HOW IT WORKS",
    meta: "Meta glasses \xB7 Williams Smart App",
    title: "Box Box",
    chips: ['Hey Williams', 'Vision AI', 'Hands-free capture'],
    content: /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 23,
        fontWeight: 300,
        lineHeight: '36px',
        color: 'rgba(255,255,255,0.82)',
        textWrap: 'pretty'
      }
    }, "Put the glasses on and your very own AI race engineer guides you through the pit lane and paddock. Curious about something? Just say \u201CHey Williams\u201D. Vision AI and deep learning read what you\u2019re looking at, send it to the Williams Smart App, and your engineer answers straight into your ear. He\u2019ll even cue you to capture photos and video through the glasses, so your phone stays in your pocket and you stay in the moment.")
  }));
}
function JourneyInner({
  steps
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement(IXStreaks, {
    d: 250
  }), steps.map((s, i) => {
    const d = 300 + i * 420;
    return /*#__PURE__*/React.createElement("div", {
      key: s.img,
      style: {
        position: 'absolute',
        left: s.l,
        top: s.t
      }
    }, /*#__PURE__*/React.createElement(B, {
      fx: "up",
      d: d
    }, /*#__PURE__*/React.createElement("div", {
      className: "ix-step"
    }, /*#__PURE__*/React.createElement(IXDS.StepCard, {
      imageSrc: IXA(`photos/${s.img}.png`),
      caption: s.cap
    }))));
  }), steps.map((s, i) => s.arrow && /*#__PURE__*/React.createElement("div", {
    key: 'a' + i,
    style: {
      position: 'absolute',
      left: s.arrow[0],
      top: s.arrow[1],
      zIndex: 10,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "draw",
    d: 300 + i * 420 - 260,
    style: {
      width: 131.589,
      height: 68.25
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "131.589",
    height: "68.25",
    viewBox: "0 0 131.589 68.25",
    style: {
      display: 'block',
      overflow: 'visible',
      transform: s.arrow[2],
      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `fa${i}`,
    gradientUnits: "userSpaceOnUse",
    x1: "0",
    y1: "0",
    x2: "131.589",
    y2: "68.25"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.55",
    stopColor: "#fff",
    stopOpacity: "0.85"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#fff",
    stopOpacity: "0.15"
  }))), /*#__PURE__*/React.createElement("path", {
    fill: `url(#fa${i})`,
    d: "M 0 0 L 6.596 5.612 L 8.158 -2.906 L 0 0 Z M 6.63 1.216 L 6.477 1.95 C 24.731 5.762 37.146 12.399 46.622 20.034 C 56.119 27.684 62.68 36.342 69.262 44.296 C 75.825 52.229 82.41 59.462 91.897 64.019 C 101.397 68.582 113.718 70.423 131.698 67.785 L 131.589 67.043 L 131.481 66.301 C 113.698 68.91 101.701 67.064 92.546 62.666 C 83.377 58.262 76.969 51.258 70.417 43.34 C 63.884 35.444 57.208 26.636 47.563 18.866 C 37.898 11.079 25.265 4.341 6.784 0.482 L 6.63 1.216 Z"
  }))))));
}
Object.assign(window, {
  IXCoverSlide,
  IXOverviewSlide,
  IXJourneySlide,
  IXWMark,
  IXStreaks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck/ix-slides-a.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck/ix-slides-b.jsx
try { (() => {
/* Interactive slides — Prompts (18), Livestream (79), VIP (80), Demo (81), Why us (82). */
const ixTitle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 'var(--type-title-size)',
  lineHeight: 'var(--type-title-lh)',
  color: '#fff',
  margin: 0
};
const ixLead = {
  fontFamily: 'var(--font-body)',
  fontWeight: 400,
  fontSize: 'var(--type-lead-size)',
  lineHeight: 'var(--type-lead-lh)',
  color: '#fff',
  margin: 0
};

/* Placeholder race-engineer answers — edit to approved copy. Add qAudio / aAudio (asset paths) when recordings are ready; timings then follow the audio. */
const IX_PROMPTS = [{
  l: 111.953,
  t: 83.392,
  r: 7.64,
  side: 'right',
  text: 'Hey Williams, why are you using soft tyres?',
  a: 'Softs give us the most grip over a short window. We want track position right now, so we’ll push hard and box a little earlier.'
}, {
  l: 1434,
  t: 151.735,
  r: -14.3,
  side: 'left',
  text: 'Hey Williams, what’s the deal with Claude?',
  a: 'Claude is one of our partners — look for it on the livery. Want me to point out where it sits on the car when we reach the garage?'
}, {
  l: 1469.574,
  t: 780,
  r: 16.68,
  side: 'left',
  text: 'Hey Williams, who is the current backup driver?',
  a: 'Our reserve driver is on standby all weekend — in the simulator and ready to step in if the team needs them.'
}, {
  l: 75,
  t: 865.138,
  r: -7.7,
  side: 'right',
  text: 'Hey Williams, how fast is your average pit stop?',
  a: 'The crew trains for stops in the two-to-three second range. Around twenty people, one car, perfectly in sync.'
}];
function Typer({
  text,
  onDone
}) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    setN(0);
    const id = setInterval(() => setN(v => {
      if (v >= text.length) {
        clearInterval(id);
        onDone && onDone();
        return v;
      }
      return v + 1;
    }), 22);
    return () => clearInterval(id);
  }, [text]);
  return /*#__PURE__*/React.createElement("span", null, text.slice(0, n), /*#__PURE__*/React.createElement("span", {
    className: "ix-caret",
    style: {
      opacity: n < text.length ? 1 : 0
    }
  }, "\u258D"));
}
function Wave({
  on
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      height: 22
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: on ? 'ix-bar is-on' : 'ix-bar',
    style: {
      '--i': i
    }
  })));
}

/* Vision AI POV frames (Figma 116 → 115 → 114): images crossfade; the prompt bubble glides to each frame's spot while its text fades out and back in. */
const IX_VISION = [{
  img: 'assets/vision-frame-116.jpg',
  bg: '100.057% 16.273% / 99.992% 124.205%',
  l: 101,
  t: 410,
  fs: 38,
  text: 'Hey Williams, what are those red and blue streaks on the car?',
  lines: ['Hey Williams, what are those red', 'and blue streaks on the car?']
}, {
  img: 'assets/vision-frame-115.jpg',
  bg: '100.009% 19.074% / 100.019% 115.200%',
  l: 796,
  t: 852,
  fs: 44,
  text: 'Hey Williams, what do those covers on the tyres do?',
  lines: ['Hey Williams, what do those', 'covers on the tyres do?']
}, {
  img: 'assets/vision-frame-114.jpg',
  bg: 'center / cover',
  l: 101,
  t: 645,
  fs: 45,
  text: 'Hey Williams, How many pits do you average a race?',
  lines: ['Hey Williams, How many', 'pits do you average a race?']
}];
const IX_VIS_S = 0.37;
function VisionCycle({
  open
}) {
  const [pos, setPos] = React.useState(0);
  const [txt, setTxt] = React.useState(0);
  const [vis, setVis] = React.useState(true);
  React.useEffect(() => {
    if (!open) {
      const r = setTimeout(() => {
        setPos(0);
        setTxt(0);
        setVis(true);
      }, 800);
      return () => clearTimeout(r);
    }
    const id = setTimeout(() => setPos(p => (p + 1) % IX_VISION.length), 6000);
    return () => clearTimeout(id);
  }, [open, pos]);
  React.useEffect(() => {
    if (pos === txt) return;
    setVis(false);
    const t = setTimeout(() => {
      setTxt(pos);
      setVis(true);
    }, 1500);
    return () => clearTimeout(t);
  }, [pos]);
  const S = IX_VIS_S,
    FW = 1689,
    FH = 1813,
    f = IX_VISION[pos],
    ft = IX_VISION[txt],
    z = v => +(v * S).toFixed(2);
  const glass = {
    background: 'radial-gradient(50% 50% at 50% 50%, rgba(108,108,108,0.1) 0%, rgba(24,24,20,0.1) 100%)',
    backdropFilter: `blur(${z(93.397)}px)`,
    WebkitBackdropFilter: `blur(${z(93.397)}px)`,
    boxShadow: `inset 0 0 ${z(24.906)}px 0 rgb(255,255,255), inset 0 ${z(-49.812)}px ${z(66.416)}px 0 rgba(255,255,255,0.22), inset 0 ${z(16.604)}px ${z(49.812)}px ${z(-33.208)}px rgba(255,255,255,0.25)`,
    borderRadius: z(58.114),
    boxSizing: 'border-box',
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: z(FW),
      height: z(FH),
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      background: 'var(--wr-night-2)',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)'
    }
  }, IX_VISION.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v.img,
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${v.img}) ${v.bg} no-repeat`,
      opacity: i === pos ? 1 : 0,
      transition: 'opacity 2.2s cubic-bezier(.4,0,.2,1)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'rgba(8,10,16,0.16)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: `radial-gradient(${z(1081.318)}px ${z(1353.407)}px at 50% 50%, rgba(20,21,23,0) 56.25%, rgba(25,26,28,0.12) 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      pointerEvents: 'none',
      display: 'flex',
      gap: z(14.528),
      alignItems: 'flex-start',
      transform: `translate(${z(f.l)}px, ${z(f.t)}px)`,
      transition: 'transform 2.4s cubic-bezier(.65,0,.35,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...glass,
      width: z(112.077),
      height: z(112.077),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: z(7.45)
    }
  }, [34, 61, 34, 61, 34].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: z(5),
      height: z(h),
      borderRadius: z(3),
      background: '#fff'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...glass,
      width: z(666.234),
      height: z(238.682),
      padding: `${z(45.661)}px ${z(53.963)}px ${z(47.736)}px`,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: z(558.308),
      fontFamily: '"SF Compact", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontWeight: 457,
      fontSize: z(ft.fs),
      lineHeight: `${z(72.64)}px`,
      whiteSpace: 'nowrap',
      color: '#fff',
      WebkitFontSmoothing: 'antialiased',
      opacity: vis ? 1 : 0,
      filter: vis ? 'none' : 'blur(3px)',
      transition: vis ? 'opacity 1.1s cubic-bezier(.4,0,.2,1), filter 1.1s cubic-bezier(.4,0,.2,1)' : 'opacity .7s ease, filter .7s ease'
    }
  }, ft.lines[0], /*#__PURE__*/React.createElement("br", null), ft.lines[1]))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 18,
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '5px 6px',
      borderRadius: 999,
      background: 'rgba(8,10,16,0.4)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous",
    onClick: e => {
      e.stopPropagation();
      setPos(p => (p + IX_VISION.length - 1) % IX_VISION.length);
    },
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.08)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "12",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, IX_VISION.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: v.img,
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: i === pos ? 'rgb(31,199,255)' : 'rgba(255,255,255,0.4)',
      boxShadow: i === pos ? '0 0 10px rgba(31,199,255,0.9)' : 'none',
      transition: 'background 1.2s ease, box-shadow 1.2s ease'
    }
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next",
    onClick: e => {
      e.stopPropagation();
      setPos(p => (p + 1) % IX_VISION.length);
    },
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.08)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "12",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: 'scaleX(-1)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))));
}
function IXPromptsSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index,
    className: "ix-white",
    style: {
      background: 'var(--wr-night)'
    }
  }, /*#__PURE__*/React.createElement(PromptsInner, null), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    middle: 540,
    bare: true,
    width: 1689 * IX_VIS_S,
    eyebrow: "VISION AI",
    content: open => /*#__PURE__*/React.createElement(VisionCycle, {
      open: open
    })
  }));
}
function PromptsInner() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -30,
      top: -18,
      width: 1980,
      height: 1116
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "kb",
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${IXA('photos/glasses-hero-blue.png')}) center / cover no-repeat`
    }
  })), IX_PROMPTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.text,
    style: {
      position: 'absolute',
      left: p.l,
      top: p.t
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "pop",
    d: 250 + i * 140
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      '--r': p.r + 'deg'
    }
  }, /*#__PURE__*/React.createElement(IXDS.GlassPrompt, {
    text: p.text,
    side: p.side,
    tilt: p.r
  }))))), /*#__PURE__*/React.createElement(B, {
    fx: "draw-br",
    d: 900,
    style: {
      position: 'absolute',
      left: 275,
      top: 252
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "96",
    height: "156",
    viewBox: "0 0 96 156",
    fill: "rgba(255,255,255,0.55)",
    stroke: "rgba(255,255,255,0.55)",
    strokeWidth: "0.9",
    style: {
      overflow: 'visible',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 96 156.25 C 96.138 156.25 96.25 156.138 96.25 156 C 96.25 155.862 96.138 155.75 96 155.75 L 96 156 L 96 156.25 Z M 0 156 L -0.25 156 L -0.25 156.25 L 0 156.25 L 0 156 Z M 0 0 L -1.443 2.5 L 1.443 2.5 L 0 0 Z M 96 156 L 96 155.75 L 0 155.75 L 0 156 L 0 156.25 L 96 156.25 L 96 156 Z M 0 156 L 0.25 156 L 0.25 2.25 L 0 2.25 L -0.25 2.25 L -0.25 156 L 0 156 Z"
  }))), /*#__PURE__*/React.createElement(B, {
    fx: "draw-tl",
    d: 1050,
    style: {
      position: 'absolute',
      left: 1543,
      top: 414
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "138",
    height: "397",
    viewBox: "0 0 138 397",
    fill: "rgba(255,255,255,0.55)",
    stroke: "rgba(255,255,255,0.55)",
    strokeWidth: "0.9",
    style: {
      overflow: 'visible',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.25 C -0.138 -0.25 -0.25 -0.138 -0.25 0 C -0.25 0.138 -0.138 0.25 0 0.25 L 0 0 L 0 -0.25 Z M 138 0 L 138.25 0 L 138.25 -0.25 L 138 -0.25 L 138 0 Z M 138 397 L 139.443 394.5 L 136.557 394.5 L 138 397 Z M 0 0 L 0 0.25 L 138 0.25 L 138 0 L 138 -0.25 L 0 -0.25 L 0 0 Z M 138 0 L 137.75 0 L 137.75 394.75 L 138 394.75 L 138.25 394.75 L 138.25 0 L 138 0 Z"
  }))), /*#__PURE__*/React.createElement(IXLogo, {
    l: 855,
    t: 48,
    d: 600
  }));
}

/* Livestream — live chat, floating reactions (click the stream to send more), ticking viewers. */
const IX_CHAT = [['silverstone_sam', 'Silverstone crowd is unreal 🇬🇧'], ['pitwall.pete', 'That pit lane view 🔥'], ['apex.amy', 'Box box box 📻'], ['gridwalker', 'Copse at full send 😮‍💨'], ['lewis_fan44', 'Mechanics are so fast 🔧⏱️'], ['vroom.vroom', '🏁🏁🏁'], ['maggotts.becketts', 'Front row seats to the garage 👀'], ['paddockpass', 'Softs or mediums?? 🔴🟡'], ['p1.priya', 'Come on Williams!! 💙'], ['stowe.corner', 'Formation lap vibes 🏎️💨']];
const IX_EMO = ['💯', '😁', '🏁', '🏆', '🏎', '🏅'];
const IX_HEARTS = ['#0068DF', 'rgb(31,199,255)', '#FFFFFF', '#0068DF', '#FFFFFF'];
const IX_HEART_D = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
function IXLivestreamSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(LiveInner, null), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    eyebrow: "CREATOR TOOLKIT",
    meta: "Meta glasses",
    title: "Your day, edited before you\u2019re home.",
    chips: ['Auto-edited reel', 'Ready to post']
  }, "Creators stream hands-free while the AI race engineer feeds them stories to narrate. Behind the scenes, our platform gathers every clip captured that day and turns it into a bespoke, professionally edited Williams highlight reel, formatted for each channel and ready to post before they even get home."));
}
function LiveInner() {
  const {
    active
  } = React.useContext(IXCtx);
  const [emo, setEmo] = React.useState([]);
  const [chat, setChat] = React.useState([{
    id: 1,
    name: 'Immy Bewes',
    message: '🏁🏆🏅'
  }, {
    id: 2,
    name: 'katyboooo',
    message: 'Wish I was there!'
  }, {
    id: 3,
    name: 'Bertie Kinnings',
    message: '🏎🏎🏎'
  }]);
  const idRef = React.useRef(10);
  const combo = React.useRef({
    t: 0,
    n: 0
  });
  const spawn = (count = 1, set = IX_EMO, spread = 0, at = null) => {
    const heart = set === IX_HEARTS;
    const add = Array.from({
      length: count
    }).map(() => {
      const sz = heart ? 44 + Math.round(Math.random() * 18) : 32;
      return {
        id: idRef.current++,
        heart,
        e: set[Math.floor(Math.random() * set.length)],
        sz,
        x: at ? at[0] - sz / 2 + (Math.random() * 40 - 20) : 444 + Math.random() * 70,
        y: at ? at[1] - sz / 2 : 930,
        dx: (Math.random() * 110 - 55).toFixed(0),
        dur: (2.2 + Math.random() * 1.4).toFixed(2),
        dl: (spread ? Math.random() * spread : 0).toFixed(2)
      };
    });
    setEmo(v => [...v.slice(-70), ...add]);
  };
  const love = (e, at) => {
    e && e.stopPropagation();
    const now = Date.now(),
      c = combo.current;
    c.n = now - c.t < 700 ? Math.min(c.n + 1, 6) : 0;
    c.t = now;
    spawn(4 + c.n * 3, IX_HEARTS, 0.25 + c.n * 0.12, at || [480, 950]);
  };
  const loveAt = e => {
    const r = e.currentTarget.getBoundingClientRect();
    love(e, [(e.clientX - r.left) / r.width * SW, (e.clientY - r.top) / r.height * SH]);
  };
  React.useEffect(() => {
    if (!active) return;
    const r = setInterval(() => spawn(1), 900);
    let k = 0;
    const c = setInterval(() => {
      const m = IX_CHAT[k++ % IX_CHAT.length];
      setChat(v => [...v.slice(-2), {
        id: idRef.current++,
        name: m[0],
        message: m[1]
      }]);
    }, 2800);
    return () => {
      clearInterval(r);
      clearInterval(c);
    };
  }, [active]);
  const I = IXDS.Icon;
  const S = 0.8,
    SW = 554,
    SH = 1095,
    BZ = 12;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IXTextBlock, {
    l: 164,
    t: 318,
    w: 1000,
    num: "01",
    kicker: "User One: The Creator",
    title: "POV UGC & Livestream by Creators",
    body: "Enable creators to record the Williams race weekend from a true first person perspective while receiving AI powered stories and insights that enrich the content they create."
  }, /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 520,
    style: {
      marginTop: 56,
      paddingTop: 36,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      alignItems: 'center',
      gap: 36,
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexShrink: 0
    }
  }, ['instagram', 'tiktok', 'snapchat'].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "ix-social",
    style: {
      width: 68,
      height: 68,
      borderRadius: 20,
      background: 'rgba(255,255,255,0.06)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.16)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `assets/social-${n}.svg`,
    alt: n,
    width: "30",
    height: "30",
    style: {
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)'
    }
  }, "LIVE ON EVERY CHANNEL"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 300,
      lineHeight: '34px',
      color: 'rgba(255,255,255,0.85)',
      textWrap: 'pretty'
    }
  }, "First-person POV is social\u2019s breakout format, with clips pulling in millions of views. Every creator becomes a live Williams broadcast.")))), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 0,
    style: {
      position: 'absolute',
      left: 1180,
      top: 40,
      width: 760,
      height: 1000,
      zIndex: 20,
      pointerEvents: 'none',
      background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,104,223,0.42) 0%, rgba(0,66,255,0.16) 45%, rgba(0,66,255,0) 100%)',
      filter: 'blur(20px)'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 150,
    style: {
      position: 'absolute',
      zIndex: 20,
      left: 1560 - SW * S / 2 - BZ,
      top: (1080 - SH * S) / 2 - BZ - 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: BZ,
      borderRadius: 68,
      background: 'linear-gradient(160deg, #2a2d36 0%, #121419 45%, #1c1f27 100%)',
      boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.14), 0 0 0 1px rgba(0,0,0,0.6), 0 30px 80px rgba(0,0,0,0.55), 0 0 90px rgba(0,104,223,0.28)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: loveAt,
    style: {
      position: 'relative',
      width: SW * S,
      height: SH * S,
      borderRadius: 56,
      overflow: 'hidden',
      background: '#000',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: SW,
      height: SH,
      transform: `scale(${S})`,
      transformOrigin: '0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${IXA('photos/creator-selfie-trackside.png')}) 99.765% 144.222% / 111.092% 99.964% no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 200,
      background: 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 52,
      width: SW,
      height: SH - 52
    }
  }, /*#__PURE__*/React.createElement(IXDS.StreamerHandle, {
    handle: "lily_andrews",
    avatarSrc: IXA('photos/avatar-lily.png'),
    style: {
      position: 'absolute',
      left: 22,
      top: 16
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: "9.9",
    height: "9.9",
    viewBox: "0 0 9.9 9.9",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      transform: 'matrix(0.707,-0.707,0.707,0.707,238,37)',
      transformOrigin: '0 0',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 9.9 L 9.9 9.9",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 320,
      top: 21,
      display: 'flex',
      alignItems: 'center',
      gap: 19
    }
  }, /*#__PURE__*/React.createElement(IXDS.LiveBadge, null), /*#__PURE__*/React.createElement(IXDS.ViewerCount, {
    count: "140K"
  })), /*#__PURE__*/React.createElement(IXDS.Icons, {
    name: "Exit",
    dark: true,
    size: 28,
    style: {
      position: 'absolute',
      left: 507,
      top: 26
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 25,
      top: 757,
      display: 'flex',
      flexDirection: 'column',
      gap: 19,
      pointerEvents: 'none'
    }
  }, chat.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: "ix-chat"
  }, /*#__PURE__*/React.createElement(IXDS.CommentRow, {
    name: c.name,
    message: c.message
  }))))), emo.map(e => {
    const st = {
      position: 'absolute',
      left: e.x,
      top: e.y,
      lineHeight: 1,
      pointerEvents: 'none',
      '--dx': e.dx + 'px',
      '--dur': e.dur + 's',
      '--dl': e.dl + 's'
    };
    const end = () => setEmo(v => v.filter(x => x.id !== e.id));
    return e.heart ? /*#__PURE__*/React.createElement("svg", {
      key: e.id,
      className: "ix-float",
      onAnimationEnd: end,
      width: e.sz,
      height: e.sz,
      viewBox: "0 0 24 24",
      style: {
        ...st,
        overflow: 'visible',
        filter: e.e === '#FFFFFF' ? 'drop-shadow(0 0 6px rgba(31,199,255,0.7))' : 'drop-shadow(0 0 8px rgba(31,199,255,0.8))'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: IX_HEART_D,
      fill: e.e
    })) : /*#__PURE__*/React.createElement("span", {
      key: e.id,
      className: "ix-float",
      onAnimationEnd: end,
      style: {
        ...st,
        fontSize: e.sz
      }
    }, e.e);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 9,
      width: 96,
      height: 26,
      marginLeft: -48,
      borderRadius: 16,
      background: '#000'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 8,
      width: 134,
      height: 5,
      marginLeft: -67,
      borderRadius: 3,
      background: 'rgba(255,255,255,0.85)'
    }
  })))), /*#__PURE__*/React.createElement(B, {
    fx: "pop",
    d: 900,
    style: {
      position: 'absolute',
      zIndex: 22,
      right: 1920 - 1352,
      top: 150
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => love(e),
    className: "ix-love",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px 10px 12px',
      border: 0,
      borderRadius: 999,
      cursor: 'pointer',
      background: 'linear-gradient(180deg, rgba(44,49,64,0.92), rgba(24,27,38,0.92))',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.16), 0 12px 32px rgba(0,0,0,0.45)',
      fontFamily: 'var(--font-display)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'rgba(31,199,255,0.16)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "15",
    viewBox: "0 0 24 22",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    fill: "rgb(31,199,255)",
    style: {
      filter: 'drop-shadow(0 0 4px rgba(31,199,255,0.8))'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      letterSpacing: '0.04em',
      whiteSpace: 'nowrap'
    }
  }, "Show Some Love"))));
}

/* Refined title + lead block (matches Overview styling): cyan index, rule, medium title, light body. */
function IXTextBlock({
  l,
  t,
  w,
  num,
  kicker,
  title,
  body,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: l,
      top: 0,
      bottom: 0,
      width: w,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, kicker && (() => {
    const [a, b] = kicker.split(':');
    return /*#__PURE__*/React.createElement(B, {
      fx: "fade",
      d: 40,
      style: {
        marginBottom: 14,
        fontSize: 22,
        fontWeight: 400,
        letterSpacing: '0.04em',
        color: 'rgba(255,255,255,0.86)'
      }
    }, a, b !== undefined && /*#__PURE__*/React.createElement(React.Fragment, null, ": ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: 'rgb(31,199,255)',
        textShadow: '0 0 14px rgba(31,199,255,0.65), 0 0 28px rgba(0,104,223,0.5)'
      }
    }, b.trim())));
  })(), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 80,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 305,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  })), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 180
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-0.015em',
      color: '#fff',
      textWrap: 'balance'
    }
  }, title)), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 340,
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 29,
      lineHeight: '44px',
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty',
      maxWidth: 900
    }
  }, body)), children);
}
function IXVipSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    eyebrow: "THE RECAP",
    meta: "Delivered after the event",
    title: "A highlight reel with your brand in it.",
    chips: ['Sponsor-branded', 'LinkedIn-ready']
  }, "Our platform gathers every moment each guest captures and produces a professional highlight reel of their day, showcasing the sponsor brand they represent alongside Williams. Polished, on-brand and ready to post on LinkedIn."), /*#__PURE__*/React.createElement(IXTextBlock, {
    l: 164,
    t: 330,
    w: 960,
    num: "02",
    kicker: "User Two: The Corporates",
    title: "The Ultimate VIP Sponsor Experience",
    body: "Treat your most important guests to an AI powered race weekend by providing Meta glasses for the entire event, allowing them to capture unforgettable moments, take the glasses home as a lasting memento, and receive a professionally edited, LinkedIn ready highlight recap to relive and share the experience."
  }), /*#__PURE__*/React.createElement(B, {
    fx: "edge",
    d: 0,
    style: {
      position: 'absolute',
      left: 1363,
      top: 0,
      width: 2,
      height: 1080,
      background: '#fff',
      zIndex: 21,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "reveal",
    d: 0,
    style: {
      position: 'absolute',
      left: 1363,
      top: 0,
      width: 628,
      height: 1116,
      overflow: 'hidden',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(PX, {
    depth: -10,
    l: -16,
    t: -12,
    style: {
      width: 660,
      height: 1140
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-photo",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'url(assets/vip-garage-guests.png) center 30% / cover no-repeat'
    }
  }))), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 650,
    style: {
      position: 'absolute',
      left: 1150,
      top: 654,
      zIndex: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-step",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      width: 420,
      height: 352,
      borderRadius: 'var(--radius-photo)',
      background: 'url(assets/vip-packaging.png) center / cover no-repeat',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 30px 70px rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '56px 22px 18px',
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.82) 100%)',
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      fontWeight: 400,
      lineHeight: '26px',
      color: '#fff'
    }
  }, "Premium branded packaging, a keepsake to remember the day"))))));
}

/* Fan experiences carousel: manual prev/next; text on the left swaps with each image. */
const IX_FAN_SLIDES = [{
  img: 'assets/creator-pov-fans.png',
  tag: 'Creator POV',
  sub: 'Fans live in the paddock',
  title: 'The paddock, through a creator’s eyes',
  body: 'Fans watch the race weekend through their favourite creator’s eyes, live and in first person. They hear the engines, spot famous faces in the pit lane in real time and see the car up close, moments TV rarely catches, while the creator shares insider stories and fun facts along the way. And they’re part of it, commenting as it happens, closer to the creator and closer to the race.'
}, {
  img: 'assets/time-capsule-vr.png',
  tag: 'Williams Time Capsule',
  sub: 'Fan zone VR experience',
  title: 'The Williams Time Capsule',
  body: 'Step into the Williams Time Capsule, a generative VR experience in the team’s fan zone at every Grand Prix. Narrated by Alex Albon, it carries fans through the eras: stepping inside iconic cars in every Williams livery, reliving legendary races and standing in the team’s defining moments as if they were there. Powered by Claude AI, each journey adapts to the fan and is built bespoke to the host Grand Prix and its history, so no two are ever the same.'
}, {
  img: 'assets/ar-circuit-lapz.png',
  tag: 'AR circuit replica',
  sub: 'Live, captured in-device',
  title: 'The grandstand, at home',
  body: 'Finally, platforms like Lapz have shown how XR has the ability to transform how sports media is consumed. Something like this could be built bespoke to Williams, powered by your data, so fans follow the drivers, gaps and strategy calls in real time. A new way to watch the race, and an opportunity to tap into one of the fastest-growing and most innovative ways fans consume sport.'
}];
function IXDemoSlide({
  index
}) {
  const [idx, setIdx] = React.useState(0);
  const [info, setInfo] = React.useState(false);
  const n = IX_FAN_SLIDES.length;
  const go = dir => e => {
    e.stopPropagation();
    setIdx(i => (i + dir + n) % n);
  };
  const cur = IX_FAN_SLIDES[idx];
  const FW = 860,
    FH = 483.75;
  const btn = {
    width: 48,
    height: 48,
    borderRadius: '50%',
    border: 0,
    padding: 0,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(10,12,20,0.55)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)'
  };
  const chev = flip => /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "18",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: flip ? 'scaleX(-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 0,
    style: {
      position: 'absolute',
      left: 1000,
      top: 200,
      width: 900,
      height: 700,
      pointerEvents: 'none',
      background: 'radial-gradient(50% 50% at 50% 55%, rgba(0,104,223,0.3) 0%, rgba(0,66,255,0) 100%)',
      filter: 'blur(20px)'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 500,
    style: {
      position: 'absolute',
      left: 1000,
      top: (1080 - FH) / 2 - 64,
      zIndex: 30,
      fontFamily: 'var(--font-display)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setInfo(v => !v);
    },
    style: {
      pointerEvents: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 40,
      padding: '0 18px 0 14px',
      borderRadius: 999,
      border: 0,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: '0.04em',
      color: '#fff',
      background: info ? 'rgba(0,104,223,0.22)' : 'rgba(255,255,255,0.06)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      boxShadow: info ? 'inset 0 0 0 1px rgba(31,199,255,0.6), 0 0 18px rgba(0,104,223,0.35)' : 'inset 0 0 0 1px rgba(255,255,255,0.2)',
      transition: 'background .4s ease, box-shadow .4s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 600,
      color: 'rgb(31,199,255)',
      boxShadow: 'inset 0 0 0 1.5px rgb(31,199,255)',
      transform: info ? 'rotate(45deg)' : 'none',
      transition: 'transform .4s cubic-bezier(.4,0,.2,1)'
    }
  }, info ? '+' : 'i'), "The Curious?")), /*#__PURE__*/React.createElement(B, {
    fx: "right",
    d: 200,
    style: {
      position: 'absolute',
      left: 1000,
      top: (1080 - FH) / 2,
      width: FW,
      height: FH,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)',
      background: 'var(--wr-night-2)'
    }
  }, IX_FAN_SLIDES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.tag,
    className: "ix-fan-img",
    style: {
      position: 'absolute',
      inset: 0,
      background: s.img ? `url(${s.img}) center / cover no-repeat` : 'repeating-linear-gradient(135deg, #121725 0 14px, #0e1220 14px 28px)',
      opacity: i === idx ? 1 : 0,
      transform: i === idx ? 'scale(1)' : 'scale(1.04)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, !s.img && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 14,
      letterSpacing: '0.08em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, "time capsule image to come"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(75% 90% at 100% 100%, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 75%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    key: 'c' + idx,
    className: "ix-fan-cap",
    style: {
      position: 'absolute',
      right: 30,
      bottom: 26,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4,
      fontFamily: 'var(--font-display)',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: '#fff'
    }
  }, cur.tag.toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, cur.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: 22,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous",
    className: "ix-fan-btn",
    onClick: go(-1),
    style: btn
  }, chev(false)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next",
    className: "ix-fan-btn",
    onClick: go(1),
    style: btn
  }, chev(true)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#fff',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(idx + 1).padStart(2, '0'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.55)',
      fontWeight: 300
    }
  }, " / ", String(n).padStart(2, '0')))))), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "left",
    eyebrow: "THE ECOSYSTEM",
    meta: "Circuit to home",
    title: "From the paddock, straight to the fans who couldn\u2019t be there.",
    chips: ['Live POV', 'Creator-led', 'Beyond TV']
  }, "It closes the loop. F1 creators livestream their first-person view live from the circuit, straight to the fans watching from home. A new way to tell the story of a race weekend, with the views TV doesn\u2019t show, and a stronger connection between Williams, its creators and the fans who follow them."), /*#__PURE__*/React.createElement("div", {
    key: 't' + idx
  }, /*#__PURE__*/React.createElement(IXTextBlock, {
    l: 164,
    t: 330,
    w: 720,
    num: "03",
    kicker: "User Three: The Curious",
    title: cur.title,
    body: cur.body
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      e.stopPropagation();
      setInfo(false);
    },
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: info ? 'auto' : 'none',
      background: 'rgba(4,6,12,0.62)',
      backdropFilter: info ? 'blur(14px)' : 'blur(0px)',
      WebkitBackdropFilter: info ? 'blur(14px)' : 'blur(0px)',
      opacity: info ? 1 : 0,
      transition: 'opacity .6s cubic-bezier(.4,0,.2,1), backdrop-filter .6s ease, -webkit-backdrop-filter .6s ease',
      fontFamily: 'var(--font-display)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 960,
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      background: 'rgba(10,12,20,0.92)',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 50px rgba(0,104,223,0.5), 0 40px 90px rgba(0,0,0,0.6)',
      cursor: 'default',
      opacity: info ? 1 : 0,
      transform: info ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(14px)',
      transition: 'opacity .6s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.2,.8,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 420,
      background: `url(assets/the-curious-fans.png) center 35% / cover no-repeat`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(6,8,14,0.9) 0%, rgba(6,8,14,0.45) 32%, rgba(6,8,14,0) 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 44,
      bottom: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 48,
      fontWeight: 500,
      lineHeight: 1,
      color: '#fff'
    }
  }, "The Curious"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: '0.08em',
      color: 'rgba(255,255,255,0.78)'
    }
  }, "Who are they")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: () => setInfo(false),
    style: {
      position: 'absolute',
      top: 22,
      right: 22,
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(10,12,20,0.55)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.25)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2 L12 12 M12 2 L2 12",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '36px 44px 42px',
      fontSize: 26,
      lineHeight: 1.55,
      fontWeight: 400,
      color: '#fff',
      textWrap: 'pretty'
    }
  }, "The Curious are Williams\u2019 loyal, invested fanbase, the ones who want to know more, try new things and be part of the journey through ups and downs. They\u2019re deeply invested in the team and its drivers, always curious about what\u2019s next. They open the door to new technologies, embrace new experiences and help Williams evolve, getting ever closer to the brand they love."))));
}
const IX_META_USES = [['Live telemetry', 'Speed, tyre wear, gaps and strategy calls float in view as they happen, so guests read the race exactly like the pit wall does, without ever looking down at a screen.'], ['Onboard laps', 'Ride a full lap of Silverstone from the cockpit, with the driver’s view, braking points and team radio playing out around you in true scale, as if you were in the seat.'], ['3D interactable models', 'Place the car in the room and explore it part by part, from the power unit to the floor, while our AI engineer explains exactly what each piece does and why it matters.'], ['Highlight reels', 'Relive the team’s defining moments exactly as the drivers lived them, from lights out to the podium, told in the first person and replayed in full, immersive detail.']];
const IX_VISION_STATS = [['$14.4B', 'Projected smart glasses market by 2033, up from $2.5B in 2025'], ['110%', 'Year-on-year growth in smart glasses shipments, first half of 2025'], ['Big Tech', 'Meta, Google, Apple and Samsung are all building for the category']];
/* Stacked glass feature cards: arrows slide the front card out left; back reveals it again. */
function FeatureStack({
  reset
}) {
  const [k, setK] = React.useState(0);
  React.useEffect(() => {
    if (!reset) setK(0);
  }, [reset]);
  const n = IX_META_USES.length,
    CH = 232;
  const go = d => e => {
    e.stopPropagation();
    setK(v => Math.max(0, Math.min(n - 1, v + d)));
  };
  const arrow = (d, off) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": d < 0 ? 'Previous' : 'Next',
    className: "ix-lift",
    disabled: off,
    onClick: go(d),
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      border: 0,
      padding: 0,
      cursor: off ? 'default' : 'pointer',
      opacity: off ? 0.35 : 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(30,34,46,0.55)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)',
      transition: 'opacity .3s ease'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "17",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: d > 0 ? 'scaleX(-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: CH + 3 * 14
    }
  }, IX_META_USES.map(([t, body], i) => {
    const d = i - k,
      out = d < 0,
      front = d === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: CH,
        boxSizing: 'border-box',
        padding: '26px 32px',
        borderRadius: 20,
        overflow: 'hidden',
        zIndex: 10 - Math.abs(d),
        background: 'linear-gradient(160deg, rgba(247,246,243,0.94) 0%, rgba(230,228,224,0.92) 100%)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.7), 0 24px 50px rgba(0,24,72,0.3)',
        transform: out ? 'translateX(-115%) rotate(-5deg)' : `translateY(${d * 14}px) scale(${1 - d * 0.045})`,
        transformOrigin: '50% 0',
        opacity: out || d > 2 ? 0 : 1 - d * 0.18,
        pointerEvents: front && reset ? 'auto' : 'none',
        transition: 'transform .75s cubic-bezier(.2,.8,.2,1), opacity .6s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        opacity: front ? 1 : 0,
        transition: 'opacity .4s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.2em',
        color: '#0068DF',
        fontVariantNumeric: 'tabular-nums'
      }
    }, "FEATURE ", String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'linear-gradient(90deg, rgba(0,104,223,0.35), rgba(0,104,223,0))'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 500,
        lineHeight: '34px',
        color: '#0B1020'
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 90,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        fontSize: 21,
        fontWeight: 400,
        lineHeight: '30px',
        color: 'rgba(11,16,32,0.72)'
      }
    }, body), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, IX_META_USES.map((_, j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        width: j === i ? 28 : 12,
        height: 3,
        borderRadius: 2,
        background: j === i ? '#0068DF' : 'rgba(11,16,32,0.16)'
      }
    })))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, arrow(-1, k === 0), arrow(1, k === n - 1), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#fff',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(k + 1).padStart(2, '0'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontWeight: 300
    }
  }, " / ", String(n).padStart(2, '0')))));
}

/* Drawer body for Why us: Claude (Williams' thinking partner) vs ... (creative AI partner building on Claude). */
function ClaudeCompare() {
  const row = (name, role, body) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 500,
      color: '#fff'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)'
    }
  }, role)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 23,
      fontWeight: 300,
      lineHeight: '35px',
      color: 'rgba(255,255,255,0.86)',
      textWrap: 'pretty'
    }
  }, body));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, row('Claude', 'THINKING PARTNER', 'Shapes how Williams thinks, plans and performs, from race strategy to car development.'), row('...', 'CREATIVE AI PARTNER', 'Builds on Claude to turn that same intelligence into creative AI experiences for fans and partners.'));
}

/* Vision AI: simple market story first; "Tech Updates" slides the glasses in and swaps to the Meta VR Glasses detail. */
function IXMetaSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(MetaInner, null));
}
function MetaInner() {
  const {
    active
  } = React.useContext(IXCtx);
  const [tech, setTech] = React.useState(false);
  React.useEffect(() => {
    if (!active) setTech(false);
  }, [active]);
  const ease = 'cubic-bezier(.2,.8,.2,1)';
  const eyebrow = label => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "04"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 305,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.72)'
    }
  }, label));
  const h2 = {
    margin: 0,
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: 68,
    lineHeight: '72px',
    letterSpacing: '-0.015em',
    color: '#fff',
    textWrap: 'balance'
  };
  const pill = {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '16px 26px 16px 30px',
    border: 0,
    borderRadius: 999,
    cursor: 'pointer',
    fontFamily: 'var(--font-display)',
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: '0.06em',
    color: '#0B1020',
    background: '#fff',
    boxShadow: '0 0 0 1px rgba(255,255,255,0.2), 0 12px 36px rgba(0,104,223,0.35)'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IXStreaks, {
    d: 250
  }), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 0,
    style: {
      position: 'absolute',
      left: 760,
      top: 120,
      width: 1100,
      height: 760,
      pointerEvents: 'none',
      background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,104,223,0.28) 0%, rgba(0,66,255,0) 100%)',
      filter: 'blur(20px)',
      opacity: tech ? 1 : 0,
      transition: 'opacity .9s ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 900,
      top: 160,
      width: 600,
      height: 522,
      zIndex: 20,
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)',
      background: 'url(assets/meta-glasses-puck.png) center / cover no-repeat',
      opacity: tech ? 1 : 0,
      transform: tech ? 'none' : 'translateX(160px) scale(.97)',
      transition: tech ? `opacity .9s ease 0.35s, transform 1.2s ${ease} 0.35s` : 'opacity .4s ease, transform .5s ease',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 150,
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.45) 50%, rgba(10,12,20,0.78) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 26,
      bottom: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: '#fff'
    }
  }, "META VR GLASSES"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.8)'
    }
  }, "Glasses with pocket compute puck"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 1340,
      top: 620,
      width: 520,
      height: 293,
      zIndex: 20,
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)',
      background: 'url(assets/meta-glasses-inner.png) center / cover no-repeat',
      opacity: tech ? 1 : 0,
      transform: tech ? 'none' : 'translateX(160px) scale(.97)',
      transition: tech ? `opacity .9s ease 0.6s, transform 1.2s ${ease} 0.6s` : 'opacity .4s ease, transform .5s ease',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 150,
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.45) 50%, rgba(10,12,20,0.78) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 26,
      bottom: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: '#fff'
    }
  }, "INSIDE THE FRAME"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'rgba(255,255,255,0.8)'
    }
  }, "Micro-OLED displays with custom-fit lenses"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      top: 0,
      bottom: 40,
      width: 1180,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      opacity: tech ? 0 : 1,
      transform: tech ? 'translateX(-40px)' : 'none',
      pointerEvents: tech ? 'none' : 'auto',
      transition: tech ? 'opacity .45s ease, transform .6s ease' : `opacity .8s ease .45s, transform 1s ${ease} .45s`
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 80
  }, eyebrow('VISION AI')), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 180
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "A New Era For Sports Media")), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 320,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 1000,
      fontWeight: 300,
      fontSize: 30,
      lineHeight: '44px',
      color: 'rgba(255,255,255,0.78)',
      textWrap: 'pretty'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: '#fff'
    }
  }, "Why now?"), " XR and vision AI are changing how sport is watched. Fans now consume media hands-free, first-person and in real time, and the brands that build for these formats early will own the next generation of attention.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      columnGap: 40
    }
  }, IX_VISION_STATS.map(([n, t], i) => /*#__PURE__*/React.createElement(B, {
    key: n,
    fx: "up",
    d: 460 + i * 120,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 20,
      borderTop: '1.5px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 500,
      lineHeight: '60px',
      color: '#fff',
      fontVariantNumeric: 'tabular-nums'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 21,
      fontWeight: 300,
      lineHeight: '29px',
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty'
    }
  }, t)))), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 860,
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ix-lift",
    onClick: e => {
      e.stopPropagation();
      setTech(true);
    },
    style: pill
  }, "Tech Updates", /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "16",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: 'scaleX(-1)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      top: 0,
      bottom: 0,
      width: 620,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      opacity: tech ? 1 : 0,
      transform: tech ? 'none' : 'translateY(24px)',
      pointerEvents: tech ? 'auto' : 'none',
      transition: tech ? `opacity .8s ease .55s, transform 1s ${ease} .55s` : 'opacity .4s ease, transform .4s ease'
    }
  }, eyebrow('TECH UPDATES'), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Meta VR Glasses"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      alignSelf: 'flex-start',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 16px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.4)',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#fff'
    }
  }), "RELEASING SPRING 2027"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      fontWeight: 300,
      fontSize: 24,
      lineHeight: '36px',
      color: 'rgba(255,255,255,0.78)',
      textWrap: 'pretty'
    }
  }, "Meta designed these glasses around one idea: changing how people experience media. A 5K micro-OLED display in a frame of around 100 grams, powered by a pocket-sized compute puck, turns what you see into the screen. Meta has opened the platform to creators and brands, so the partners who build for it first define what it becomes."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ix-lift",
    onClick: e => {
      e.stopPropagation();
      setTech(false);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px 10px 14px',
      border: 0,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.4)',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "13",
    viewBox: "0 0 12 18",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Back"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: true,
    "aria-disabled": "true",
    onClick: e => e.stopPropagation(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px 10px 14px',
      border: 0,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.4)',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#fff',
      padding: '10px 14px 10px 18px',
      cursor: 'default',
      opacity: 0.4
    }
  }, "Next", /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "13",
    viewBox: "0 0 12 18",
    style: {
      display: 'block',
      transform: 'scaleX(-1)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5 L2.5 9 L8.5 15.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))));
}

/* Feasibility: built on Claude (Williams' official thinking partner) by Kinnovate. */
const IX_BUILD_FLOW = [['Guest asks', 'Meta glasses pick up a natural question, hands-free'], ['Claude reasons', 'Answers from team-approved knowledge and live session context'], ['Engineer replies', 'A race-engineer voice responds, straight in the ear'], ['Moments captured', 'Footage is cut into a personal highlight reel']];
function IXClaudeSlide({
  index
}) {
  const partners = [['Claude', 'Official thinking partner of Williams Racing', 'Already embedded across the organisation, Claude works alongside engineers and strategists, shaping how the team thinks, plans and performs in race strategy, car development and operations.'], ['Kinnovate', 'Creative AI partner', 'We build on Claude to create new experiences for Williams and its fans, showcasing what Claude can do while pushing the Williams brand forward.']];
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 164,
      top: 176,
      width: 1592,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 80,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "05"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 305,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "HOW WE BUILD IT")), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 180
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-0.015em',
      color: '#fff'
    }
  }, "Built with Williams\u2019 own thinking partner")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 32
    }
  }, partners.map(([name, role, body], i) => /*#__PURE__*/React.createElement(B, {
    key: name,
    fx: "pop",
    d: 340 + i * 140
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-panel"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      height: '100%',
      minHeight: 292,
      borderRadius: 'var(--radius-card)',
      background: 'var(--wr-panel)',
      boxShadow: 'var(--shadow-card)',
      padding: '44px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.14em',
      color: 'rgb(31,199,255)'
    }
  }, role.toUpperCase()), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 44,
      lineHeight: '48px',
      color: '#fff'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontWeight: 300,
      fontSize: 24,
      lineHeight: '36px',
      color: 'rgba(255,255,255,0.78)',
      textWrap: 'pretty'
    }
  }, body)))))), /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 700,
    style: {
      marginTop: 64,
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "HOW IT WORKS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.72)'
    }
  }, "Built on hardware and models already in use today")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      columnGap: 32
    }
  }, IX_BUILD_FLOW.map(([t, b], i) => /*#__PURE__*/React.createElement(B, {
    key: t,
    fx: "left",
    d: 800 + i * 140,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 22,
      borderTop: '1.5px solid rgba(255,255,255,0.16)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 500,
      lineHeight: '32px',
      color: '#fff'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 300,
      lineHeight: '32px',
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty'
    }
  }, b))))));
}

/* Why-us panel: same ladder as the Overview list — cyan index, medium title, gradient rule, light body. */
function WhyPanel({
  num,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 584,
      height: 435,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-card)',
      background: 'var(--wr-panel)',
      boxShadow: 'var(--shadow-card)',
      padding: '56px 52px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, num), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 40,
      lineHeight: '44px',
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 180,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 24,
      lineHeight: '36px',
      color: 'rgba(255,255,255,0.78)',
      textWrap: 'pretty'
    }
  }, children));
}
function IXWhyUsSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 200,
    style: {
      position: 'absolute',
      left: 831,
      top: 173
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...ixTitle,
      fontSize: 'var(--type-display-size)',
      lineHeight: 'var(--type-display-lh)',
      whiteSpace: 'nowrap'
    }
  }, "Why us")), /*#__PURE__*/React.createElement(PX, {
    depth: 8,
    l: 346,
    t: 323
  }, /*#__PURE__*/React.createElement(B, {
    fx: "pop",
    d: 400
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-panel"
  }, /*#__PURE__*/React.createElement(WhyPanel, {
    num: "01",
    title: "Bespoke AI software"
  }, "We design and build the complete Williams experience, including the AI character, paddock journey, sponsor integrations, personalised interactions and automated highlight recap software.")))), /*#__PURE__*/React.createElement(PX, {
    depth: 12,
    l: 991,
    t: 323
  }, /*#__PURE__*/React.createElement(B, {
    fx: "pop",
    d: 560
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-panel"
  }, /*#__PURE__*/React.createElement(WhyPanel, {
    num: "02",
    title: "On site operations"
  }, "We manage every aspect on site, from device preparation and guest onboarding to hardware logistics, technical support and content delivery, ensuring a seamless experience for every guest.")))), /*#__PURE__*/React.createElement(IXLogo, {
    l: 855,
    t: 974,
    d: 800
  }), /*#__PURE__*/React.createElement(IXDrawer, {
    side: "right",
    middle: 540,
    width: 720,
    eyebrow: "LEVERAGING CLAUDE",
    meta: "Claude \xD7 ...",
    title: "One intelligence, on track and off it.",
    content: /*#__PURE__*/React.createElement(ClaudeCompare, null)
  }));
}
Object.assign(window, {
  IXPromptsSlide,
  IXLivestreamSlide,
  IXVipSlide,
  IXDemoSlide,
  IXMetaSlide,
  IXClaudeSlide,
  IXWhyUsSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck/ix-slides-b.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pitch-deck/ix-slides-c.jsx
try { (() => {
/* The 3 Users: flip cards. Front = portrait + title; back = commercial value. Long backs grow downward after the flip and close before flipping back. */
const IX_USERS = [{
  n: '01',
  name: 'The Creator',
  img: IXA('photos/creator-selfie-trackside.png'),
  bg: '-299px -377px / 740px 1314px no-repeat',
  head: 'Earned reach, at creator scale',
  body: 'Every creator becomes a live Williams broadcast. Their first-person content puts the team in front of millions of highly engaged followers, building community and generating user-generated content and earned reach at a fraction of the cost of paid media.',
  tags: ['UGC', 'Reach', 'Community']
}, {
  n: '02',
  name: 'The Corporates',
  img: 'assets/vip-garage-guests.png',
  bg: '-227px -220px / 667px 1187px no-repeat',
  head: 'Deeper partnerships, new ones opened',
  body: 'A premium, personalised hospitality experience that strengthens relationships with existing sponsors and gives Williams a distinctive platform to open conversations with prospective partners. Every guest leaves with branded content that keeps the partnership visible long after race day.',
  tags: ['Sponsor retention', 'New partners']
}, {
  n: '03',
  name: 'The Curious',
  img: 'assets/curious-fan.png',
  bg: '-24px -88px / 540px 959px no-repeat',
  head: 'Closer to the sport, from anywhere',
  body: 'Williams is committed to bringing F1’s evolving fanbase closer to the sport through pioneering technologies and new media formats. Whether following their favourite F1 creator through first-person views of the paddock and pit lane, or trying new mediums like the AR experience, this fan isn’t at the circuit, but can feel like they are. It’s how we grow a younger demographic: a new generation of supporters who embrace wide-ranging, cross-cultural interests beyond racing.',
  tags: ['Next-gen fans', 'New media']
}];
const IXU_S = 440;
const ixuGlow = '0 0 0 2px var(--wr-blue), 0 0 40px rgba(0,104,223,0.45), 0 30px 70px rgba(0,0,0,0.5)';
function IXUserCard({
  u
}) {
  const {
    active
  } = React.useContext(IXCtx);
  const [flip, setFlip] = React.useState(false);
  const [h, setH] = React.useState(IXU_S);
  const [txt, setTxt] = React.useState(false);
  const inner = React.useRef(null),
    tm = React.useRef([]),
    busy = React.useRef(false);
  const later = (fn, ms) => tm.current.push(setTimeout(fn, ms));
  const clear = () => {
    tm.current.forEach(clearTimeout);
    tm.current = [];
  };
  React.useEffect(() => {
    if (!active) {
      clear();
      setFlip(false);
      setH(IXU_S);
      setTxt(false);
      busy.current = false;
    }
  }, [active]);
  React.useEffect(() => clear, []);
  const toggle = e => {
    e.stopPropagation();
    if (busy.current) return;
    busy.current = true;
    clear();
    if (!flip) {
      const need = Math.max(IXU_S, inner.current ? inner.current.offsetHeight : IXU_S);
      setFlip(true);
      if (need > IXU_S) {
        later(() => setH(need), 760);
        later(() => setTxt(true), 1000);
        later(() => {
          busy.current = false;
        }, 1400);
      } else {
        later(() => setTxt(true), 520);
        later(() => {
          busy.current = false;
        }, 900);
      }
    } else {
      const grown = h > IXU_S;
      setTxt(false);
      if (grown) later(() => setH(IXU_S), 260);
      later(() => setFlip(false), grown ? 820 : 280);
      later(() => {
        busy.current = false;
      }, grown ? 1700 : 1150);
    }
  };
  const face = {
    position: 'absolute',
    inset: 0,
    borderRadius: 'var(--radius-photo)',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    boxShadow: ixuGlow
  };
  const plus = turn => /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 18,
      top: 18,
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'rgba(10,12,20,0.5)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.22)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    style: {
      display: 'block',
      transform: `rotate(${turn ? 45 : 0}deg)`
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1V13M1 7H13",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "ix-user",
    onClick: toggle,
    style: {
      width: IXU_S,
      perspective: 1800,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: IXU_S,
      height: h,
      transformStyle: 'preserve-3d',
      transform: `rotateY(${flip ? 180 : 0}deg)`,
      transition: 'transform .8s cubic-bezier(.45,.05,.2,1), height .55s cubic-bezier(.3,.7,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...face,
      background: u.img ? `url(${u.img}) ${u.bg}` : 'repeating-linear-gradient(135deg, #121725 0 14px, #0e1220 14px 28px)'
    }
  }, !u.img && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '42%',
      textAlign: 'center',
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 14,
      letterSpacing: '0.08em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, u.ph || 'portrait to come'), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: u.sub ? 260 : 200,
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.6) 45%, rgba(10,12,20,0.92) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 30,
      right: 30,
      bottom: 26,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, u.eyebrow || `USER ${u.n}`), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: '40px',
      color: '#fff'
    }
  }, u.name), u.sub && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      fontWeight: 300,
      lineHeight: '28px',
      color: 'rgba(255,255,255,0.82)',
      textWrap: 'pretty'
    }
  }, u.sub)), plus(false)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...face,
      transform: 'rotateY(180deg)',
      background: 'linear-gradient(160deg, #161c2d 0%, #0c0f1a 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: inner,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      boxSizing: 'border-box',
      padding: '36px 36px 34px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontFamily: 'var(--font-body)',
      opacity: txt ? 1 : 0,
      transform: txt ? 'none' : 'translateY(8px)',
      transition: 'opacity .4s ease, transform .5s cubic-bezier(.2,.7,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)'
    }
  }, u.backLabel || `${u.name.toUpperCase()} · COMMERCIAL VALUE`), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      paddingRight: 40,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 30,
      lineHeight: '34px',
      color: '#fff',
      textWrap: 'balance'
    }
  }, u.head), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 120,
      height: 1.5,
      background: 'var(--wr-rule-gradient)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 20,
      lineHeight: '29px',
      color: 'rgba(255,255,255,0.84)',
      textWrap: 'pretty'
    }
  }, u.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 4
    }
  }, u.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '6px 14px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.07)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.14)',
      fontSize: 15,
      fontWeight: 500,
      color: '#fff'
    }
  }, t)))), plus(true))));
}
function IXUsersSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index
  }, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 150,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "wipe",
    d: 80,
    style: {
      width: 305,
      height: 1.5,
      marginBottom: 30,
      background: 'linear-gradient(90deg, rgba(0,104,223,0) 0%, #0068DF 50%, rgba(0,104,223,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 160
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-0.015em',
      color: '#fff'
    }
  }, "The 3 Users")), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 300,
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 28,
      lineHeight: '38px',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "And the commercial value our AI experiences bring to them, for Williams and Formula 1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 360,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 44,
      zIndex: 5
    }
  }, IX_USERS.map((u, i) => /*#__PURE__*/React.createElement(B, {
    key: u.n,
    fx: "pop",
    d: 450 + i * 150
  }, /*#__PURE__*/React.createElement(IXUserCard, {
    u: u
  })))));
}

/* Portal: one card per idea deck. Cards flip for detail; play buttons are placeholders until the decks are linked. */
const IX_DECKS = [{
  n: '01',
  eyebrow: 'DECK 01',
  name: 'SparkPlug Studio',
  href: '../../sparkplug/index.html',
  img: 'assets/sparkplug-studio.png',
  bg: '12% 0% / auto 100% no-repeat',
  ph: 'creator studio image to come',
  sub: 'A cinematic race recap, generated every Grand Prix',
  backLabel: 'THE WILLIAMS SPARKPLUG STUDIO',
  head: 'Every race, a cinematic recap',
  body: 'After every race, the Williams SparkPlug Studio ingests race data, footage and media to generate a cinematic, high-energy video in a bespoke comic-style aesthetic, made with Higgsfield. A stylised summary of the team’s day, built for Williams’ channels.',
  tags: ['Race data', 'Higgsfield', 'Comic style']
}, {
  n: '02',
  eyebrow: 'DECK 02',
  name: 'AI Glasses',
  go: 1,
  img: 'assets/ai-engineer-glasses-v3.png',
  bg: 'center / cover no-repeat',
  ph: 'ai engineer image to come',
  sub: 'An immersive AI experience for guests in the paddock and pit lane',
  backLabel: 'THE WILLIAMS AI ENGINEER',
  head: 'Your own race engineer, in your ear',
  body: 'A bespoke AI experience that places VIP guests and partners at the heart of the team during paddock and pit lane walks. A synthetic race engineer delivers live insights, heritage and sponsor stories on demand, while smart glasses capture every moment to relive long after the day.',
  tags: ['Paddock', 'Pit lane', 'Smart glasses']
}, {
  n: '03',
  eyebrow: 'DECK 03',
  name: 'Time Capsule',
  img: 'assets/time-capsule-vr.png',
  bg: '59% 0% / auto 100% no-repeat',
  ph: 'time capsule image to come',
  sub: 'A generative VR journey through Williams history',
  backLabel: 'THE WILLIAMS TIME CAPSULE',
  head: 'Step inside the Williams story',
  body: 'A generative VR experience in the Williams fan zone at every Grand Prix. Narrated by Alex Albon, fans travel through the eras, step inside iconic cars in every Williams livery and relive legendary races. Powered by Claude AI and bespoke to each Grand Prix, no two journeys are the same.',
  tags: ['Fan zone', 'VR', 'Claude AI']
}];
function IXDeckCard({
  u
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ix-user",
    style: {
      position: 'relative',
      width: Math.round(IXU_S * 1.12),
      height: Math.round(IXU_S * 1.12),
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: ixuGlow,
      background: u.img ? `url(${u.img}) ${u.bg}` : 'repeating-linear-gradient(135deg, #121725 0 14px, #0e1220 14px 28px)'
    }
  }, !u.img && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '30%',
      textAlign: 'center',
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 14,
      letterSpacing: '0.08em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, u.ph), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 300,
      background: 'linear-gradient(180deg, rgba(10,12,20,0) 0%, rgba(10,12,20,0.65) 40%, rgba(10,12,20,0.94) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 30,
      right: 30,
      bottom: 28,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 6,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgb(31,199,255)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, u.eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      lineHeight: '32px',
      color: '#fff',
      whiteSpace: 'nowrap'
    }
  }, u.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      fontWeight: 300,
      lineHeight: '28px',
      color: 'rgba(255,255,255,0.82)',
      textWrap: 'pretty'
    }
  }, u.sub), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": 'Open ' + u.name,
    className: u.href || u.go != null ? 'ix-lift' : '',
    disabled: !(u.href || u.go != null),
    onClick: e => {
      e.stopPropagation();
      if (u.href) {
        window.location.href = u.href;
      } else if (u.go != null) {
        const d = document.querySelector('deck-stage');
        d && d.goTo(u.go);
      }
    },
    style: {
      marginTop: 16,
      height: 50,
      padding: '0 26px 0 20px',
      gap: 13,
      borderRadius: 999,
      border: 0,
      cursor: u.href || u.go != null ? 'pointer' : 'default',
      opacity: u.href || u.go != null ? 1 : 0.4,
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: '#fff',
      background: 'rgb(24,170,245)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      borderTop: '8px solid transparent',
      borderBottom: '8px solid transparent',
      borderLeft: '13px solid #fff'
    }
  }), "START")));
}
function IXPortalSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index,
    hud: false
  }, /*#__PURE__*/React.createElement(IXWMark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 130,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    fx: "fade",
    d: 40
  }, /*#__PURE__*/React.createElement(IXDS.WilliamsLogo, {
    src: IXA('logo/williams-wordmark-white.png'),
    width: 190
  })), /*#__PURE__*/React.createElement(B, {
    fx: "wipe",
    d: 120,
    style: {
      width: 305,
      height: 1.5,
      margin: '30px 0',
      background: 'linear-gradient(90deg, rgba(0,104,223,0) 0%, #0068DF 50%, rgba(0,104,223,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 200
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-0.015em',
      color: '#fff'
    }
  }, "The Concepts")), /*#__PURE__*/React.createElement(B, {
    fx: "up",
    d: 320,
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 28,
      lineHeight: '38px',
      color: 'rgba(255,255,255,0.72)'
    }
  }, "Three concepts exploring how creative AI could shape the future of the Williams brand"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 44,
      zIndex: 5
    }
  }, IX_DECKS.map((u, i) => /*#__PURE__*/React.createElement(B, {
    key: u.n,
    fx: "pop",
    d: 450 + i * 150
  }, /*#__PURE__*/React.createElement(IXDeckCard, {
    u: u
  })))));
}

/* Finale: the Why-us logo carries over and glides up; the line reveals word by word; the lap bar runs to the flag. */
const IX_LIGHTS_WORDS = ['It’s', 'lights', 'out', 'and', 'away', 'we', 'go'];
function IXLightsSlide({
  index
}) {
  return /*#__PURE__*/React.createElement(IXSlide, {
    index: index,
    field: false,
    hudFinal: true,
    style: {
      background: '#07080d'
    }
  }, /*#__PURE__*/React.createElement(LightsInner, null));
}
function LightsInner() {
  const {
    nonce,
    active
  } = React.useContext(IXCtx);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    key: 'l' + nonce,
    className: "ix-logo-rise",
    style: {
      position: 'absolute',
      left: 855,
      top: 977
    }
  }, /*#__PURE__*/React.createElement(IXDS.WilliamsLogo, {
    src: IXA('logo/williams-wordmark-white.png'),
    width: 210
  })), /*#__PURE__*/React.createElement("h2", {
    key: 't' + nonce,
    "aria-label": "It\u2019s lights out and away we go",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 539,
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: '0 16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 64,
      lineHeight: '72px',
      letterSpacing: '-0.01em',
      color: '#fff'
    }
  }, IX_LIGHTS_WORDS.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-block',
      overflow: 'hidden',
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ix-word",
    style: {
      display: 'inline-block',
      '--d': 1500 + i * 110 + 'ms'
    }
  }, w)))));
}
Object.assign(window, {
  IXUsersSlide,
  IXPortalSlide,
  IXUserCard,
  IXLightsSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pitch-deck/ix-slides-c.jsx", error: String((e && e.message) || e) }); }

if (__ds_scope.__ds_default_components_icons_icon_data_12stud1$1nb03e1 === undefined) __ds_scope.__ds_default_components_icons_icon_data_12stud1$1nb03e1 = __ds_scope.__ds_default_components_icons_icon_data_12stud1;
if (__ds_scope.__ds_default_components_icons_icon_data_12stud1$1lqvwv0 === undefined) __ds_scope.__ds_default_components_icons_icon_data_12stud1$1lqvwv0 = __ds_scope.__ds_default_components_icons_icon_data_12stud1;

__ds_ns.WilliamsLogo = __ds_scope.WilliamsLogo;

__ds_ns.WMark = __ds_scope.WMark;

__ds_ns.CommentRow = __ds_scope.CommentRow;

__ds_ns.LiveBadge = __ds_scope.LiveBadge;

__ds_ns.StreamerHandle = __ds_scope.StreamerHandle;

__ds_ns.ViewerCount = __ds_scope.ViewerCount;

__ds_ns.PanelCard = __ds_scope.PanelCard;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.GlassVoiceButton = __ds_scope.GlassVoiceButton;

__ds_ns.GlassPrompt = __ds_scope.GlassPrompt;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Icons = __ds_scope.Icons;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

})();
