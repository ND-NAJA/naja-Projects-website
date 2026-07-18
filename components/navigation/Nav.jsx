import React from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/tech/', label: 'Naja-ware' },
  { href: '/coaching/', label: 'Coaching' },
  { href: '/build/', label: 'Build' },
  { href: '/pipeline/', label: 'Pipeline' },
  { href: '/contact/', label: 'Contact' },
];

export function Nav({ activePath = '/', onNavigate, logoSrc = '' }) {
  const [open, setOpen] = React.useState(false);
  const go = (path) => { onNavigate && onNavigate(path); setOpen(false); };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--bg)', borderBottom: '1px solid rgba(111,163,214,0.18)' }}>
      <nav style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 32px', position: 'relative' }}>
        <a href="/" onClick={(e) => { e.preventDefault(); go('/'); }} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {logoSrc ? <img src={logoSrc} alt="Naja Projects logo" style={{ height: 44, width: 44 }} /> : null}
          <span className="naja-logo-wordmark" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#fff' }}>Naja Projects</span>
        </a>
        <button type="button" className="naja-nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
        <div className={`naja-nav-links${open ? ' open' : ''}`} style={{ fontSize: 14, color: 'var(--text-dim)' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); go(l.href); }}
              style={{ paddingBottom: 3, borderBottom: activePath === l.href ? '1px solid var(--blue-400)' : '1px solid transparent', color: activePath === l.href ? '#fff' : undefined }}>
              {l.label}
            </a>
          ))}
          <a href="/contact/" onClick={(e) => { e.preventDefault(); go('/contact/'); }} className="mono naja-nav-links-cta">Start a project</a>
        </div>
        <a href="/contact/" onClick={(e) => { e.preventDefault(); go('/contact/'); }} className="mono naja-nav-cta-desktop"
          style={{ fontSize: 13, padding: '9px 18px', border: '1px solid var(--blue-400)', color: 'var(--blue-300)', whiteSpace: 'nowrap', flexShrink: 0 }}>
          Start a project
        </a>
      </nav>
    </header>
  );
}
