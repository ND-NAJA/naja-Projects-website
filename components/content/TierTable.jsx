import React from 'react';

export function TierTable({ tiers = [] }) {
  return (
    <div className="naja-tier-row" style={{ gap: 1, background: 'rgba(7,29,56,0.12)', marginTop: 30, border: '1px solid rgba(7,29,56,0.12)' }}>
      {tiers.map((t, i) => (
        <div key={i} style={{ background: t.highlighted ? 'var(--surface-paper-2)' : 'var(--surface-paper)', padding: '24px 20px' }}>
          <h4 style={{ fontSize: 15, color: 'var(--text-on-paper)' }}>{t.name}</h4>
          <div className="mono" style={{ fontSize: 12, color: 'var(--text-on-paper-dim-2)', marginTop: 6 }}>{t.subtitle}</div>
          <ul style={{ marginTop: 14, listStyle: 'none' }}>
            {t.features.map((f, j) => <li key={j} style={{ fontSize: '12.5px', color: '#33465C', padding: '4px 0' }}>{f}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
