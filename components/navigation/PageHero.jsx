import React from 'react';

export function PageHero({ eyebrow, title, description, home = false, onPaper = false }) {
  const titleSize = home ? 'clamp(2.4rem,5.6vw,4.4rem)' : 'clamp(2.2rem,5vw,3.6rem)';
  const padding = home ? '120px 0 100px' : '110px 0 70px';
  const titleColor = onPaper ? 'var(--text-on-paper)' : '#fff';
  const descColor = onPaper ? 'var(--text-on-paper-dim)' : 'var(--text-dim)';
  const eyebrowColor = onPaper ? 'var(--accent)' : 'var(--blue-400)';
  return (
    <section className="grid-bg" style={{ padding, position: 'relative' }}>
      <div className="wrap">
        <div className="mono" style={{ fontSize: 12, color: eyebrowColor, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
          <span style={{ width: 22, height: 1, background: eyebrowColor, display: 'inline-block' }} />{eyebrow}
        </div>
        <h1 style={{ fontSize: titleSize, maxWidth: home ? 920 : 820, lineHeight: home ? 1.06 : 1.08, color: titleColor }}>{title}</h1>
        <p style={{ marginTop: home ? 26 : 22, maxWidth: home ? 500 : 460, fontSize: home ? 17 : 16, color: descColor }}>{description}</p>
      </div>
    </section>
  );
}
