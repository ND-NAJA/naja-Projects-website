import { ReactNode } from 'react';

export interface PageHeroProps {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  /** true = larger home hero sizing; false = standard sub-page hero */
  home?: boolean;
  onPaper?: boolean;
}

export function PageHero(props: PageHeroProps): JSX.Element;
