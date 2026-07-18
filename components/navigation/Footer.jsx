import React from 'react';

export function Footer({ onCookieSettings }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border-on-dark)', padding: '50px 0' }}>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, fontSize: '12.5px', color: 'var(--text-dim-2)' }}>
        <div className="mono" style={{ fontSize: 11 }}>NAJA PROJECTS © 2026</div>
        <div className="mono" style={{ fontSize: 11 }}>PORTAL · COACHING · BUILD · PIPELINE</div>
        <div className="mono" style={{ fontSize: 11 }}>DRAWN &amp; BUILT, NOT JUST PLANNED</div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <a href="/privacy/" className="mono" style={{ fontSize: 11, textDecoration: 'underline', textUnderlineOffset: 3 }}>Privacy</a>
          <button type="button" onClick={onCookieSettings} className="mono" style={{ background: 'none', border: 'none', fontSize: 11, letterSpacing: '0.04em', color: 'var(--text-dim-2)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            Cookie settings
          </button>
        </div>
      </div>
    </footer>
  );
}
