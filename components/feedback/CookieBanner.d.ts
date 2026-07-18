export interface CookieBannerProps {
  visible: boolean;
  onAccept?: () => void;
  onDecline?: () => void;
}

export function CookieBanner(props: CookieBannerProps): JSX.Element | null;
