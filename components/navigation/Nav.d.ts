export interface NavProps {
  activePath?: string;
  onNavigate?: (path: string) => void;
  logoSrc?: string;
}

export function Nav(props: NavProps): JSX.Element;
