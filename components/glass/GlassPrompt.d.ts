/**
 * Frosted "liquid glass" speech bubble + voice button. Place over photography.
 */
export interface GlassPromptProps {
  /** Question text. Deck copy always opens "Hey Williams, …". */
  text?: string;
  /** Which side the voice button sits. @default "right" */
  side?: 'left' | 'right';
  /** Rotation in degrees (deck uses ±7.6–16.7°). @default 0 */
  tilt?: number;
  style?: React.CSSProperties;
}
export declare function GlassPrompt(props: GlassPromptProps): JSX.Element;
export interface GlassVoiceButtonProps { style?: React.CSSProperties; }
export declare function GlassVoiceButton(props: GlassVoiceButtonProps): JSX.Element;
