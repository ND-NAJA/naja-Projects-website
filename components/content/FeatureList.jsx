import React from 'react';

export function FeatureList({ items = [], onDark = true }) {
  const [openIndex, setOpenIndex] = React.useState(null);
  const borderColor = onDark ? 'rgba(231,236,238,0.1)' : 'rgba(7,29,56,0.12)';
  const detailColor = onDark ? 'var(--text-dim)' : 'var(--text-on-paper-dim)';
  return (
    <ul style={{ listStyle: 'none', marginTop: 8 }}>
      {items.map((item, i) => {
        const { text, detail } = typeof item === 'string' ? { text: item, detail: null } : item;
        const open = openIndex === i;
        return (
          <li key={i} style={{ borderBottom: `1px solid ${borderColor}` }}>
            <div onClick={() => detail && setOpenIndex(open ? null : i)}
              style={{ display: 'flex', gap: 14, padding: '16px 0', fontSize: '14.5px', cursor: detail ? 'pointer' : 'default', alignItems: 'flex-start' }}>
              <span className="mono" style={{ fontSize: 12, color: 'var(--blue-400)', flexShrink: 0, paddingTop: 2 }}>{detail ? (open ? '−' : '+') : '→'}</span>
              <span style={{ flex: 1 }}>{text}</span>
            </div>
            {detail ? (
              <div style={{ maxHeight: open ? 200 : 0, overflow: 'hidden', transition: 'max-height .3s ease' }}>
                <p style={{ fontSize: 13.5, color: detailColor, lineHeight: 1.6, padding: open ? '0 0 18px 26px' : '0 0 0 26px' }}>{detail}</p>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
