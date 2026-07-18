import { ReactNode } from 'react';

export interface CalloutBoxProps {
  title?: string;
  /** Set true when the box sits on a navy panel; false when it sits on a paper (white) panel */
  onDark?: boolean;
  children?: ReactNode;
}

export function CalloutBox(props: CalloutBoxProps): JSX.Element;
