/** Williams F1 Team wordmark (white PNG from the Figma file). */
export interface WilliamsLogoProps {
  /** Path to assets/logo/williams-wordmark-white.png relative to the page. */
  src?: string;
  /** @default 210 */
  width?: number | string;
  style?: React.CSSProperties;
}
export declare function WilliamsLogo(props: WilliamsLogoProps): JSX.Element;
export interface WMarkProps {
  /** Path to assets/brand/w-mark-blue.png relative to the page. */
  src?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}
export declare function WMark(props: WMarkProps): JSX.Element;
