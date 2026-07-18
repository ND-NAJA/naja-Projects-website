import React from 'react';

export function CalloutBox({ title, children, onDark = false }) {
  const style = onDark
    ? { border: '1px solid rgba(127,176,204,0.25)', background: 'rgba(127,176,204,0.04)' }
    : { border: '1px solid rgba(7,29,56,0.18)', background: 'rgba(7,29,56,0.03)' };
  const titleColor = onDark ? '#fff' : 'var(--text-on-paper)';
  const textColor = onDark ? 'var(--text-dim)' : 'var(--text-on-paper-dim)';
  return (
    <div style={{ ...style, padding: 26, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {title ? <h4 className="mono" style={{ fontSize: 14, color: titleColor, marginBottom: 10 }}>{title}</h4> : null}
      <div style={{ fontSize: '13.5px', color: textColor, lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}
