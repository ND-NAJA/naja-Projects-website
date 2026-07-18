export interface FeatureItem { text: string; detail?: string; }
export interface FeatureListProps {
  /** Plain strings render an arrow-marked, non-expanding row. Pass {text, detail} to make a row expandable (+/− marker) with detail text revealed on click. */
  items?: (string | FeatureItem)[];
  /** Set false when the list sits on a paper (white) panel */
  onDark?: boolean;
}

export function FeatureList(props: FeatureListProps): JSX.Element;
