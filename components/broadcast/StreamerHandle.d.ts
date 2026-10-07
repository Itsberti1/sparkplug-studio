/** Creator identity row: round avatar, handle, verified star. */
export interface StreamerHandleProps {
  /** @default "lily_andrews" */
  handle?: string;
  /** Avatar image URL; grey disc when omitted. */
  avatarSrc?: string;
  /** Show the verified star. @default true */
  verified?: boolean;
  style?: React.CSSProperties;
}
export declare function StreamerHandle(props: StreamerHandleProps): JSX.Element;
