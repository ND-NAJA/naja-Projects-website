import React from 'react';

export function CookieBanner({ visible, onAccept, onDecline }) {
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setShown(!!visible), 20); return () => clearTimeout(t); }, [visible]);
  if (!visible) return null;
  return (
    <div style={{
      position: 'fixed', bottom: 20, right: 20, maxWidth: 320, width: 'calc(100% - 40px)',
      background: 'var(--bg-panel)', border: '1px solid var(--border-on-dark)', padding: 22,
      boxShadow: '0 12px 32px rgba(0,0,0,0.4)', zIndex: 300,
      transform: shown ? 'translateY(0)' : 'translateY(16px)', opacity: shown ? 1 : 0,
      pointerEvents: shown ? 'auto' : 'none', transition: 'opacity .3s ease, transform .3s ease',
    }}>
      <h4 style={{ fontSize: 14, color: '#fff', marginBottom: 8 }}>Cookies</h4>
      <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--text-dim)', marginBottom: 16 }}>
        We use analytics cookies to understand how visitors use this site. <a href="/privacy/" style={{ color: 'var(--blue-400)', textDecoration: 'underline' }}>Learn more</a>
      </p>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={onDecline} style={{ flex: 1, padding: '10px 12px', fontFamily: 'var(--font-display)', fontSize: '12.5px', fontWeight: 600, cursor: 'pointer', border: '1px solid var(--border-on-dark)', background: 'transparent', color: 'var(--text-dim)' }}>Decline</button>
        <button onClick={onAccept} style={{ flex: 1, padding: '10px 12px', fontFamily: 'var(--font-display)', fontSize: '12.5px', fontWeight: 600, cursor: 'pointer', border: '1px solid var(--accent)', background: 'var(--accent)', color: 'var(--ink)' }}>Accept</button>
      </div>
    </div>
  );
}
