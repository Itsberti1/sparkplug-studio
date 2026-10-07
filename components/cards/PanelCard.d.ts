/**
 * Dark raised panel (rgb 26,28,36, r 19.27, soft drop) for paired value props.
 */
export interface PanelCardProps {
  title?: string;
  children?: React.ReactNode;
  /** @default 584 */
  width?: number | string;
  /** @default 435 */
  height?: number | string;
  style?: React.CSSProperties;
}
export declare function PanelCard(props: PanelCardProps): JSX.Element;
