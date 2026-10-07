import React from 'react';
/** Williams F1 Team lockup. Pass the asset path for your page depth; renders the real PNG, never a redraw. */
export function WilliamsLogo({ src = 'assets/logo/williams-wordmark-white.png', width = 210, style }) {
  return <img src={src} alt="Williams F1 Team" style={{ display:'block', width, height:'auto', ...style }} />;
}
/** The oversized blue "W" graphic that bleeds behind slide content. */
export function WMark({ src = 'assets/brand/w-mark-blue.png', width = 1215, height = 683.438, style }) {
  return <div aria-hidden="true" style={{ width, height, background:`url(${src}) center / cover no-repeat`, ...style }} />;
}
