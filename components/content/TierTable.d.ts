/**
 * @startingPoint section="Content" subtitle="Flat pricing/tier comparison table" viewport="700x220"
 */
export interface Tier { name: string; subtitle: string; features: string[]; highlighted?: boolean; }
export interface TierTableProps {
  tiers: Tier[];
}

export function TierTable(props: TierTableProps): JSX.Element;
