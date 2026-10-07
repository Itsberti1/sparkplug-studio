import React from 'react';
import { Icon } from './Icon.jsx';
import icons from './icon-data.js';
const pascal = s => s.replace(/(^|[\s-])(\w)/g, (_, __, c) => c.toUpperCase()).replace(/\s/g, '');
/**
 * Figma component set "Icons" (Name × State × Dark). Resolves the variant to the icon-data key.
 * Dark=yes variants carry a "2" suffix in the data map.
 */
export function Icons({ name = 'Exit', state = 'default', dark = false, size = 24, color, style, ...rest }) {
  const base = 'IconsName' + pascal(name) + 'State' + pascal(state);
  const cands = dark ? [base + 'Dark2', base + '2', base + 'Dark', base] : [base + 'Dark', base, base + 'Dark2', base + '2'];
  const key = cands.find(k => icons[k]);
  if (!key) return null;
  return <Icon name={key} size={size} style={{ color: color ?? (dark ? 'var(--wr-white)' : 'var(--colors-icons)'), flexShrink: 0, ...style }} {...rest} />;
}
export const ICON_NAMES = ['Add','Arrow Down','Arrow Left','Arrow Right','Arrow Up','Bookmark','Burger Menu','Comment','Exit','Favorite','Grid','Home','Like','Like Heart','Mentions','Messenger','More','Notifications','Reels','Search','Share','Shop'];
