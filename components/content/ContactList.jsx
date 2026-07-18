import React from 'react';

export function ContactList({ items = [] }) {
  return (
    <ul style={{ listStyle: 'none', marginTop: 20 }}>
      {items.map((it, i) => (
        <li key={i} style={{ padding: '18px 0', borderBottom: '1px solid var(--border-on-dark)' }}>
          <span className="mono" style={{ fontSize: 11, color: 'var(--blue-400)', display: 'block', marginBottom: 6 }}>{it.label}</span>
          <a href={it.href} style={{ fontSize: 16, color: '#fff' }}>{it.value}</a>
        </li>
      ))}
    </ul>
  );
}
