/**
 * Journey step: rounded photo (18px) with a 22/35 centered caption beneath.
 */
export interface StepCardProps {
  imageSrc?: string;
  caption?: string;
  /** Emphasise caption (700). @default false */
  bold?: boolean;
  style?: React.CSSProperties;
}
export declare function StepCard(props: StepCardProps): JSX.Element;
