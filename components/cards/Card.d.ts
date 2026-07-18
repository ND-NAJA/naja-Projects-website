export interface CardProps {
  /** venture = 4-col hero grid card with reg-corners; pipe = pipeline row card; coach = 2-col coaching-quad card */
  kind?: 'venture' | 'pipe' | 'coach';
  /** small mono label above the title, e.g. "01 / PORTAL" or "Concept" */
  label?: string;
  title?: string;
  description?: string;
  /** mono footer line for venture cards, e.g. "Live · Base / Pro / Custom" */
  meta?: string;
  href?: string;
}

export function Card(props: CardProps): JSX.Element;
