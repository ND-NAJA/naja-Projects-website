import React from 'react';

const base = {
  display: 'inline-block',
  fontFamily: 'var(--font-display)',
  fontSize: '14px',
  fontWeight: 600,
  padding: '14px 26px',
  border: '1px solid transparent',
  cursor: 'pointer',
  transition: 'transform .15s ease, all .2s ease',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  flexShrink: 0,
};

const variants = {
  primary: { background: 'var(--accent)', color: 'var(--ink)', borderColor: 'var(--accent)' },
  ghost: { background: 'transparent', color: 'var(--text-dim)', borderColor: 'var(--border-on-dark)', padding: '14px 22px' },
  outline: { background: 'transparent', color: 'var(--blue-300)', borderColor: 'var(--blue-400)', padding: '9px 18px', fontSize: '13px' },
};

export function Button({ variant = 'primary', as = 'a', href = '#', children, onClick, style, ...rest }) {
  const Tag = as;
  const [hover, setHover] = React.useState(false);
  const hoverStyle = variant === 'primary' ? { transform: 'translateY(-2px)' }
    : variant === 'ghost' ? { borderColor: 'var(--blue-400)', color: 'var(--text-body)' }
    : { background: 'var(--blue-400)', color: 'var(--ink)' };
  return (
    <Tag
      href={as === 'a' ? href : undefined}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...(hover ? hoverStyle : {}), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
