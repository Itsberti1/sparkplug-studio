/** Figma "Icons" component set — 74 variants across Name (22) × State (3) × Dark (2). Stroke/fill paint with currentColor. */
export type IconsName = 'Add'|'Arrow Down'|'Arrow Left'|'Arrow Right'|'Arrow Up'|'Bookmark'|'Burger Menu'|'Comment'|'Exit'|'Favorite'|'Grid'|'Home'|'Like'|'Like Heart'|'Mentions'|'Messenger'|'More'|'Notifications'|'Reels'|'Search'|'Share'|'Shop';
export interface IconsProps {
  /** @default "Exit" */
  name?: IconsName;
  /** Not every name has every state (Selected exists for Bookmark, Favorite, Home, Reels, Search, Shop). @default "default" */
  state?: 'default' | 'selected' | 'unselected';
  /** Dark=yes variant (white on dark). @default false */
  dark?: boolean;
  /** @default 24 */
  size?: number | string;
  /** Overrides the token colour. */
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icons(props: IconsProps): JSX.Element | null;
export declare const ICON_NAMES: IconsName[];
