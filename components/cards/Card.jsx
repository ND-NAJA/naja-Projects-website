import React from 'react';

const panelBg = { venture: 'var(--bg-panel)', pipe: 'var(--bg-panel)', coach: 'var(--bg-panel)' };

export function Card({ kind = 'venture', label, title, description, meta, href, onClick }) {
  const [hover, setHover] = React.useState(false);
  if (kind === 'venture') {
    return (
      <a href={href} onClick={onClick} className="reg-corners" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ background: hover ? 'var(--bg-panel-2)' : 'var(--bg-panel)', padding: '34px 26px', minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', transition: 'background .25s ease', borderTop: '2px solid var(--accent)' }}>
        <div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>{label}</div>
          <h3 style={{ fontSize: '1.25rem', color: '#fff', marginTop: 18 }}>{title}</h3>
          <p style={{ fontSize: '13.5px', color: 'var(--text-dim)', marginTop: 10 }}>{description}</p>
        </div>
        <div className="mono" style={{ marginTop: 24, fontSize: 10, color: 'var(--blue-400)' }}>{meta}</div>
      </a>
    );
  }
  if (kind === 'pipe') {
    return (
      <div style={{ background: 'var(--bg-panel)', minWidth: 230, flex: '1 1 230px', padding: '24px 20px' }}>
        <div className="mono" style={{ fontSize: 10, color: 'var(--text-dim-2)', textTransform: 'uppercase' }}>{label}</div>
        <h4 style={{ fontSize: 15, color: '#fff', marginTop: 10 }}>{title}</h4>
        <p style={{ fontSize: '12.5px', color: 'var(--text-dim)', marginTop: 8 }}>{description}</p>
      </div>
    );
  }
  return (
    <div style={{ background: 'var(--bg-panel)', padding: 28 }}>
      <div className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>{label}</div>
      <h4 style={{ fontSize: 16, color: '#fff', marginTop: 10 }}>{title}</h4>
      <p style={{ fontSize: '13.5px', color: 'var(--text-dim)', marginTop: 8 }}>{description}</p>
    </div>
  );
}
