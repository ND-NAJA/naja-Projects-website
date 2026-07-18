import { ReactNode } from 'react';

export interface ButtonProps {
  /** Visual style: primary (solid orange), ghost (outlined, on dark panels), outline (small nav CTA) */
  variant?: 'primary' | 'ghost' | 'outline';
  /** Render as 'a' (default, link) or 'button' */
  as?: 'a' | 'button';
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
