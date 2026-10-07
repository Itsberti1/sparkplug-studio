/** One line of livestream chat. */
export interface CommentRowProps {
  /** @default "Immy Bewes" */
  name?: string;
  /** @default "🏁🏆🏅" */
  message?: string;
  avatarSrc?: string;
  style?: React.CSSProperties;
}
export declare function CommentRow(props: CommentRowProps): JSX.Element;
