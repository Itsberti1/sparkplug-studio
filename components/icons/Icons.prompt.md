The Figma "Icons" component set (22 names × default/selected/unselected × light/dark) plus standalone Picture, Mic, Video, bolt, eco glyphs — use for any in-product UI chrome.
```jsx
<Icons name="Exit" dark size={28} />
<Icons name="Home" state="selected" dark />
<Icon name="Mic" size={34} style={{color:'#fff'}} />
```
- `dark` picks the Dark=yes variant and paints white; otherwise uses `--colors-icons` (black in light mode).
- `Icon` takes a raw data key (see Icon.d.ts) — use it for the standalone glyphs: Picture24, Mic, Video, Bolt, Eco.
