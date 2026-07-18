/* @ds-bundle: {"format":4,"namespace":"NajaProjectsDesignSystem_b735cb","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"CalloutBox","sourcePath":"components/content/CalloutBox.jsx"},{"name":"ContactList","sourcePath":"components/content/ContactList.jsx"},{"name":"FeatureList","sourcePath":"components/content/FeatureList.jsx"},{"name":"TierTable","sourcePath":"components/content/TierTable.jsx"},{"name":"CookieBanner","sourcePath":"components/feedback/CookieBanner.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"PageHero","sourcePath":"components/navigation/PageHero.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"2389651804a9","components/cards/Card.jsx":"0fed8d335353","components/content/CalloutBox.jsx":"2ebc0a9bcd64","components/content/ContactList.jsx":"745bc623a9ef","components/content/FeatureList.jsx":"263ca660d113","components/content/TierTable.jsx":"e3e14fe35e9c","components/feedback/CookieBanner.jsx":"81003e575a89","components/navigation/Footer.jsx":"00f35e646113","components/navigation/Nav.jsx":"898928f1fb70","components/navigation/PageHero.jsx":"8d3966aad25d","ui_kits/website/Screens1.jsx":"059103fb2c55","ui_kits/website/Screens2.jsx":"772a18e7c309"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NajaProjectsDesignSystem_b735cb = window.NajaProjectsDesignSystem_b735cb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  flexShrink: 0
};
const variants = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--ink)',
    borderColor: 'var(--accent)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-dim)',
    borderColor: 'var(--border-on-dark)',
    padding: '14px 22px'
  },
  outline: {
    background: 'transparent',
    color: 'var(--blue-300)',
    borderColor: 'var(--blue-400)',
    padding: '9px 18px',
    fontSize: '13px'
  }
};
function Button({
  variant = 'primary',
  as = 'a',
  href = '#',
  children,
  onClick,
  style,
  ...rest
}) {
  const Tag = as;
  const [hover, setHover] = React.useState(false);
  const hoverStyle = variant === 'primary' ? {
    transform: 'translateY(-2px)'
  } : variant === 'ghost' ? {
    borderColor: 'var(--blue-400)',
    color: 'var(--text-body)'
  } : {
    background: 'var(--blue-400)',
    color: 'var(--ink)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: as === 'a' ? href : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...(hover ? hoverStyle : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
const panelBg = {
  venture: 'var(--bg-panel)',
  pipe: 'var(--bg-panel)',
  coach: 'var(--bg-panel)'
};
function Card({
  kind = 'venture',
  label,
  title,
  description,
  meta,
  href,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  if (kind === 'venture') {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      onClick: onClick,
      className: "reg-corners",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        background: hover ? 'var(--bg-panel-2)' : 'var(--bg-panel)',
        padding: '34px 26px',
        minHeight: 280,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        transition: 'background .25s ease',
        borderTop: '2px solid var(--accent)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 11,
        color: 'var(--accent)'
      }
    }, label), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1.25rem',
        color: '#fff',
        marginTop: 18
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '13.5px',
        color: 'var(--text-dim)',
        marginTop: 10
      }
    }, description)), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        marginTop: 24,
        fontSize: 10,
        color: 'var(--blue-400)'
      }
    }, meta));
  }
  if (kind === 'pipe') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bg-panel)',
        minWidth: 230,
        flex: '1 1 230px',
        padding: '24px 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 10,
        color: 'var(--text-dim-2)',
        textTransform: 'uppercase'
      }
    }, label), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontSize: 15,
        color: '#fff',
        marginTop: 10
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '12.5px',
        color: 'var(--text-dim)',
        marginTop: 8
      }
    }, description));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-panel)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--accent)'
    }
  }, label), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 16,
      color: '#fff',
      marginTop: 10
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13.5px',
      color: 'var(--text-dim)',
      marginTop: 8
    }
  }, description));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/CalloutBox.jsx
try { (() => {
function CalloutBox({
  title,
  children,
  onDark = false
}) {
  const style = onDark ? {
    border: '1px solid rgba(127,176,204,0.25)',
    background: 'rgba(127,176,204,0.04)'
  } : {
    border: '1px solid rgba(7,29,56,0.18)',
    background: 'rgba(7,29,56,0.03)'
  };
  const titleColor = onDark ? '#fff' : 'var(--text-on-paper)';
  const textColor = onDark ? 'var(--text-dim)' : 'var(--text-on-paper-dim)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style,
      padding: 26,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, title ? /*#__PURE__*/React.createElement("h4", {
    className: "mono",
    style: {
      fontSize: 14,
      color: titleColor,
      marginBottom: 10
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13.5px',
      color: textColor,
      lineHeight: 1.6
    }
  }, children));
}
Object.assign(__ds_scope, { CalloutBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CalloutBox.jsx", error: String((e && e.message) || e) }); }

// components/content/ContactList.jsx
try { (() => {
function ContactList({
  items = []
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      marginTop: 20
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      padding: '18px 0',
      borderBottom: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--blue-400)',
      display: 'block',
      marginBottom: 6
    }
  }, it.label), /*#__PURE__*/React.createElement("a", {
    href: it.href,
    style: {
      fontSize: 16,
      color: '#fff'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { ContactList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ContactList.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureList.jsx
try { (() => {
function FeatureList({
  items = [],
  onDark = true
}) {
  const [openIndex, setOpenIndex] = React.useState(null);
  const borderColor = onDark ? 'rgba(231,236,238,0.1)' : 'rgba(7,29,56,0.12)';
  const detailColor = onDark ? 'var(--text-dim)' : 'var(--text-on-paper-dim)';
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      marginTop: 8
    }
  }, items.map((item, i) => {
    const {
      text,
      detail
    } = typeof item === 'string' ? {
      text: item,
      detail: null
    } : item;
    const open = openIndex === i;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        borderBottom: `1px solid ${borderColor}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => detail && setOpenIndex(open ? null : i),
      style: {
        display: 'flex',
        gap: 14,
        padding: '16px 0',
        fontSize: '14.5px',
        cursor: detail ? 'pointer' : 'default',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 12,
        color: 'var(--blue-400)',
        flexShrink: 0,
        paddingTop: 2
      }
    }, detail ? open ? '−' : '+' : '→'), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, text)), detail ? /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: open ? 200 : 0,
        overflow: 'hidden',
        transition: 'max-height .3s ease'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        color: detailColor,
        lineHeight: 1.6,
        padding: open ? '0 0 18px 26px' : '0 0 0 26px'
      }
    }, detail)) : null);
  }));
}
Object.assign(__ds_scope, { FeatureList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureList.jsx", error: String((e && e.message) || e) }); }

// components/content/TierTable.jsx
try { (() => {
function TierTable({
  tiers = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "naja-tier-row",
    style: {
      gap: 1,
      background: 'rgba(7,29,56,0.12)',
      marginTop: 30,
      border: '1px solid rgba(7,29,56,0.12)'
    }
  }, tiers.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: t.highlighted ? 'var(--surface-paper-2)' : 'var(--surface-paper)',
      padding: '24px 20px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 15,
      color: 'var(--text-on-paper)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 12,
      color: 'var(--text-on-paper-dim-2)',
      marginTop: 6
    }
  }, t.subtitle), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: 14,
      listStyle: 'none'
    }
  }, t.features.map((f, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      fontSize: '12.5px',
      color: '#33465C',
      padding: '4px 0'
    }
  }, f))))));
}
Object.assign(__ds_scope, { TierTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TierTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/CookieBanner.jsx
try { (() => {
function CookieBanner({
  visible,
  onAccept,
  onDecline
}) {
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setShown(!!visible), 20);
    return () => clearTimeout(t);
  }, [visible]);
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 20,
      right: 20,
      maxWidth: 320,
      width: 'calc(100% - 40px)',
      background: 'var(--bg-panel)',
      border: '1px solid var(--border-on-dark)',
      padding: 22,
      boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
      zIndex: 300,
      transform: shown ? 'translateY(0)' : 'translateY(16px)',
      opacity: shown ? 1 : 0,
      pointerEvents: shown ? 'auto' : 'none',
      transition: 'opacity .3s ease, transform .3s ease'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 14,
      color: '#fff',
      marginBottom: 8
    }
  }, "Cookies"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--text-dim)',
      marginBottom: 16
    }
  }, "We use analytics cookies to understand how visitors use this site. ", /*#__PURE__*/React.createElement("a", {
    href: "/privacy/",
    style: {
      color: 'var(--blue-400)',
      textDecoration: 'underline'
    }
  }, "Learn more")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onDecline,
    style: {
      flex: 1,
      padding: '10px 12px',
      fontFamily: 'var(--font-display)',
      fontSize: '12.5px',
      fontWeight: 600,
      cursor: 'pointer',
      border: '1px solid var(--border-on-dark)',
      background: 'transparent',
      color: 'var(--text-dim)'
    }
  }, "Decline"), /*#__PURE__*/React.createElement("button", {
    onClick: onAccept,
    style: {
      flex: 1,
      padding: '10px 12px',
      fontFamily: 'var(--font-display)',
      fontSize: '12.5px',
      fontWeight: 600,
      cursor: 'pointer',
      border: '1px solid var(--accent)',
      background: 'var(--accent)',
      color: 'var(--ink)'
    }
  }, "Accept")));
}
Object.assign(__ds_scope, { CookieBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/CookieBanner.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  onCookieSettings
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-on-dark)',
      padding: '50px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 20,
      fontSize: '12.5px',
      color: 'var(--text-dim-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11
    }
  }, "NAJA PROJECTS \xA9 2026"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11
    }
  }, "PORTAL \xB7 COACHING \xB7 BUILD \xB7 PIPELINE"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11
    }
  }, "DRAWN & BUILT, NOT JUST PLANNED"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/privacy/",
    className: "mono",
    style: {
      fontSize: 11,
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCookieSettings,
    className: "mono",
    style: {
      background: 'none',
      border: 'none',
      fontSize: 11,
      letterSpacing: '0.04em',
      color: 'var(--text-dim-2)',
      cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, "Cookie settings"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
const links = [{
  href: '/',
  label: 'Home'
}, {
  href: '/tech/',
  label: 'Naja-ware'
}, {
  href: '/coaching/',
  label: 'Coaching'
}, {
  href: '/build/',
  label: 'Build'
}, {
  href: '/pipeline/',
  label: 'Pipeline'
}, {
  href: '/contact/',
  label: 'Contact'
}];
function Nav({
  activePath = '/',
  onNavigate,
  logoSrc = ''
}) {
  const [open, setOpen] = React.useState(false);
  const go = path => {
    onNavigate && onNavigate(path);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg)',
      borderBottom: '1px solid rgba(111,163,214,0.18)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 32px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    onClick: e => {
      e.preventDefault();
      go('/');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Naja Projects logo",
    style: {
      height: 44,
      width: 44
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "naja-logo-wordmark",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: '#fff'
    }
  }, "Naja Projects")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "naja-nav-toggle",
    "aria-label": "Toggle menu",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: `naja-nav-links${open ? ' open' : ''}`,
    style: {
      fontSize: 14,
      color: 'var(--text-dim)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: e => {
      e.preventDefault();
      go(l.href);
    },
    style: {
      paddingBottom: 3,
      borderBottom: activePath === l.href ? '1px solid var(--blue-400)' : '1px solid transparent',
      color: activePath === l.href ? '#fff' : undefined
    }
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: "/contact/",
    onClick: e => {
      e.preventDefault();
      go('/contact/');
    },
    className: "mono naja-nav-links-cta"
  }, "Start a project")), /*#__PURE__*/React.createElement("a", {
    href: "/contact/",
    onClick: e => {
      e.preventDefault();
      go('/contact/');
    },
    className: "mono naja-nav-cta-desktop",
    style: {
      fontSize: 13,
      padding: '9px 18px',
      border: '1px solid var(--blue-400)',
      color: 'var(--blue-300)',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, "Start a project")));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PageHero.jsx
try { (() => {
function PageHero({
  eyebrow,
  title,
  description,
  home = false,
  onPaper = false
}) {
  const titleSize = home ? 'clamp(2.4rem,5.6vw,4.4rem)' : 'clamp(2.2rem,5vw,3.6rem)';
  const padding = home ? '120px 0 100px' : '110px 0 70px';
  const titleColor = onPaper ? 'var(--text-on-paper)' : '#fff';
  const descColor = onPaper ? 'var(--text-on-paper-dim)' : 'var(--text-dim)';
  const eyebrowColor = onPaper ? 'var(--accent)' : 'var(--blue-400)';
  return /*#__PURE__*/React.createElement("section", {
    className: "grid-bg",
    style: {
      padding,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 12,
      color: eyebrowColor,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 1,
      background: eyebrowColor,
      display: 'inline-block'
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: titleSize,
      maxWidth: home ? 920 : 820,
      lineHeight: home ? 1.06 : 1.08,
      color: titleColor
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: home ? 26 : 22,
      maxWidth: home ? 500 : 460,
      fontSize: home ? 17 : 16,
      color: descColor
    }
  }, description)));
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PageHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens1.jsx
try { (() => {
const {
  Nav,
  Footer,
  PageHero,
  Card,
  CalloutBox,
  FeatureList,
  TierTable,
  ContactList,
  Button,
  CookieBanner
} = window.NajaProjectsDesignSystem_b735cb;
function TronLines() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '8%',
      left: 0,
      width: '100%',
      height: 1,
      background: 'linear-gradient(90deg, transparent, var(--blue-400), transparent)',
      opacity: 0.6,
      animation: 'naja-light-h 8s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '92%',
      left: 0,
      width: '100%',
      height: 1,
      background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
      opacity: 0.6,
      animation: 'naja-light-h 11s linear infinite 3s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: '2%',
      width: 1,
      height: '100%',
      background: 'linear-gradient(180deg, transparent, var(--blue-300), transparent)',
      opacity: 0.6,
      animation: 'naja-light-v 10s linear infinite 1.5s'
    }
  }));
}
function HeroFX({
  children,
  home = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 100,
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 30,
      left: 0,
      width: '100%',
      height: 1,
      background: 'linear-gradient(90deg, transparent, var(--blue-300), transparent)',
      opacity: 0.6,
      animation: 'naja-light-h 8s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 70,
      left: 0,
      width: '100%',
      height: 1,
      background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
      opacity: 0.6,
      animation: 'naja-light-h 11s linear infinite 3s'
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-icon-transparent.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: home ? -40 : -20,
      right: '2%',
      width: home ? 460 : 360,
      opacity: 0.07,
      filter: 'invert(1) brightness(2)',
      pointerEvents: 'none',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
function Home({
  nav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroFX, {
    home: true
  }, /*#__PURE__*/React.createElement(PageHero, {
    home: true,
    eyebrow: "Naja Projects \xB7 Venture Studio, est. 2026",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "We draft the plan.", /*#__PURE__*/React.createElement("br", null), "Then we ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'normal',
        color: 'var(--accent)'
      }
    }, "help you"), " build your company."),
    description: "Naja Projects designs, creates, and coaches new ventures. A business platform built for founders who dare to succeed than never start."
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: -60,
      marginBottom: 60,
      display: 'flex',
      gap: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => nav('/contact/')
  }, "Contact us"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => nav('#ventures')
  }, "See what we're building \u2193")), /*#__PURE__*/React.createElement("section", {
    id: "ventures",
    style: {
      padding: '60px 0 120px',
      background: 'var(--surface-paper)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TronLines, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40,
      marginBottom: 64,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12,
      color: 'var(--accent)',
      marginBottom: 14,
      display: 'block'
    }
  }, "What we run"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(1.8rem,3.4vw,2.6rem)',
      color: 'var(--text-on-paper)',
      maxWidth: 560
    }
  }, "Four disciplines, one studio.")), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--text-on-paper-dim-2)',
      textAlign: 'right',
      maxWidth: 240
    }
  }, "Every venture shares the same playbook: plan it properly, then build it right.")), /*#__PURE__*/React.createElement("div", {
    className: "naja-grid-4",
    style: {
      gap: 1,
      background: 'var(--border-on-dark)',
      border: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    kind: "venture",
    label: "01 / NAJA-WARE",
    title: "Naja-ware",
    description: "Websites, apps, SaaS models and custom software, including Naja Portal, our own business operating system.",
    meta: "Live \xB7 Web \xB7 App \xB7 SaaS",
    href: "/tech/",
    onClick: e => {
      e.preventDefault();
      nav('/tech/');
    }
  }), /*#__PURE__*/React.createElement(Card, {
    kind: "venture",
    label: "02 / COACHING",
    title: "Naja Coaching",
    description: "One-on-one coaching for founders on sales, tech, strategy and marketing, whatever stage you're stuck at.",
    meta: "Booking now",
    href: "/coaching/",
    onClick: e => {
      e.preventDefault();
      nav('/coaching/');
    }
  }), /*#__PURE__*/React.createElement(Card, {
    kind: "venture",
    label: "03 / BUILD",
    title: "Naja Build",
    description: "Project development for land and housing, from plot to keys, with timber-frame construction partners.",
    meta: "In construction",
    href: "/build/",
    onClick: e => {
      e.preventDefault();
      nav('/build/');
    }
  }), /*#__PURE__*/React.createElement(Card, {
    kind: "venture",
    label: "04 / PIPELINE",
    title: "Naja Ventures",
    description: "Smaller concepts we're testing and building out, from hospitality to new property plays.",
    meta: "Early stage",
    href: "/pipeline/",
    onClick: e => {
      e.preventDefault();
      nav('/pipeline/');
    }
  })))), /*#__PURE__*/React.createElement(CtaSection, {
    title: "Have a plan you want a second opinion on?",
    desc: "Whether it's a coaching session or a Naja-ware demo, start with a conversation.",
    primary: "Get in touch",
    primaryTo: "/contact/",
    ghost: "Browse ventures",
    ghostTo: "#ventures",
    nav: nav
  }));
}
function CtaSection({
  title,
  desc,
  primary,
  primaryTo,
  ghost,
  ghostTo,
  nav
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "grid-bg",
    style: {
      padding: '130px 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TronLines, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(2rem,4.6vw,3.2rem)',
      color: '#fff',
      maxWidth: 700,
      margin: '0 auto'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-dim)',
      marginTop: 20,
      maxWidth: 480,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 18,
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => nav(primaryTo)
  }, primary), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => nav(ghostTo)
  }, ghost))));
}
function TechScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroFX, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "01 \xB7 Tech",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Naja-ware. Software personalized for ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'normal',
        color: 'var(--accent)'
      }
    }, "you"), "."),
    description: "Naja-ware designs and builds the websites, apps, and SaaS platforms that a growing business needs."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 0 120px',
      background: 'var(--surface-paper)',
      color: 'var(--text-on-paper)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TronLines, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "naja-detail-grid",
    style: {
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FeatureList, {
    onDark: false,
    items: [{
      text: 'Marketing websites and product sites',
      detail: 'Landing pages and full marketing sites built to convert, and easy for your own team to update after launch.'
    }, {
      text: 'Custom web and mobile apps',
      detail: 'Purpose-built apps for a specific workflow, not a generic template stretched to fit.'
    }, {
      text: 'SaaS platforms, built and maintained',
      detail: 'Multi-tenant products with ongoing support after launch, not a one-time handoff.'
    }, {
      text: 'Naja Portal, our own business operating system',
      detail: 'Naja Portal is a business operating system we built for our own project development work, then opened up for other teams to run on too.'
    }, {
      text: 'Ongoing support and iteration after launch',
      detail: "We stay on after launch: bug fixes, new features, and whatever comes up as your business grows."
    }]
  })), /*#__PURE__*/React.createElement(CalloutBox, {
    title: "Software built by builders"
  }, /*#__PURE__*/React.createElement("p", null, "We build Naja-ware products the same way we build everything else at Naja Projects: for real use first. Portal started as a tool for our own project development work, because nothing on the market fit how a small, hands-on business actually operates. Then it became a product."))))), /*#__PURE__*/React.createElement(CtaSection, {
    title: "Want to see Naja-ware in action?",
    desc: "Book a walkthrough of Portal, or tell us what you want to build.",
    primary: "Book a demo",
    primaryTo: "/contact/",
    ghost: "Explore Coaching",
    ghostTo: "/coaching/",
    nav: nav
  }));
}
window.NajaScreens1 = {
  Home,
  TechScreen,
  CtaSection,
  HeroFX,
  TronLines
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens2.jsx
try { (() => {
const {
  PageHero,
  Card,
  CalloutBox,
  FeatureList,
  ContactList
} = window.NajaProjectsDesignSystem_b735cb;
const {
  CtaSection,
  HeroFX,
  TronLines
} = window.NajaScreens1;
function CoachingScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroFX, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "02 \xB7 Coaching",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "You don't need another course.", /*#__PURE__*/React.createElement("br", null), "You need a second ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'normal',
        color: 'var(--accent)'
      }
    }, "opinion"), "."),
    description: "For young and mid-career entrepreneurs building something real, one field at a time."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 0 120px',
      background: 'var(--surface-paper)',
      color: 'var(--text-on-paper)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TronLines, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "naja-detail-grid",
    style: {
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 480,
      fontSize: 15,
      color: 'var(--text-on-paper-dim)'
    }
  }, "Every founder hits the same wall eventually: which plan comes first, who to hire, what to build, when to launch. Naja Coaching is built around the same questions we ask ourselves before starting any venture, worked through with you, one field at a time."), /*#__PURE__*/React.createElement("div", {
    className: "naja-grid-2",
    style: {
      gap: 1,
      background: 'var(--border-on-dark)',
      border: '1px solid var(--border-on-dark)',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Card, {
    kind: "coach",
    label: "Sales",
    title: "When do you bring sales in?",
    description: "Timing your first hire or channel so it doesn't outrun the rest of the business."
  }), /*#__PURE__*/React.createElement(Card, {
    kind: "coach",
    label: "Technical",
    title: "Website, app, or proof of concept?",
    description: "Scoping the smallest website, app, or product worth building before you commit real budget."
  }), /*#__PURE__*/React.createElement(Card, {
    kind: "coach",
    label: "Strategic",
    title: "What actually comes first?",
    description: "Sequencing decisions so today's choice doesn't box in next year's."
  }), /*#__PURE__*/React.createElement(Card, {
    kind: "coach",
    label: "Marketing",
    title: "What's the first thing people see?",
    description: "Positioning, website, and the story you tell before you've told anyone."
  }))), /*#__PURE__*/React.createElement(CalloutBox, {
    title: "How a session works"
  }, /*#__PURE__*/React.createElement("p", null, "No slide decks. You bring the decision you're stuck on, we bring the planning frameworks we use on our own ventures, and you leave with a plan you can actually run this week."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16
    }
  }, "Available as a single session or an ongoing monthly retainer as you grow."))))), /*#__PURE__*/React.createElement(CtaSection, {
    title: "Stuck on a decision right now?",
    desc: "Bring it to a session. We'll help you work through it this week, not next quarter.",
    primary: "Book a coaching call",
    primaryTo: "/contact/",
    ghost: "Explore Naja-ware",
    ghostTo: "/tech/",
    nav: nav
  }));
}
function BuildScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroFX, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "03 \xB7 Project development",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Naja Build.", /*#__PURE__*/React.createElement("br", null), "From blueprints to ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'normal',
        color: 'var(--accent)'
      }
    }, "solid"), " foundations."),
    description: "Land, financing, and construction, coordinated end to end."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 0 120px',
      background: 'var(--surface-paper)',
      color: 'var(--text-on-paper)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TronLines, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "naja-detail-grid",
    style: {
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 480,
      fontSize: 15,
      color: 'var(--text-on-paper-dim)'
    }
  }, "We source land, structure the financing, and build, working with trusted construction partners on fast, efficient timber-frame homes. The same discipline we put into Portal and Coaching goes into every plot."), /*#__PURE__*/React.createElement(FeatureList, {
    onDark: false,
    items: ['Land sourcing, including social-housing partnerships with local authorities', 'Financing structured through our own management companies and bank partners', 'Timber-frame construction, faster to build, and wind- and water-tight fast', 'Long-standing build partnership, with a track record of completed projects']
  })), /*#__PURE__*/React.createElement(CalloutBox, {
    title: "Why timber frame"
  }, /*#__PURE__*/React.createElement("p", null, "A timber-skeleton build goes up in a fraction of the time of traditional construction. Once the frame, windows and doors are in, the shell is wind- and water-tight. Everything after that happens on a predictable schedule, not a hopeful one."))))), /*#__PURE__*/React.createElement(CtaSection, {
    title: "Have land, or looking for a plot?",
    desc: "Tell us where you're starting from and we'll map out what's possible.",
    primary: "Talk to Naja Build",
    primaryTo: "/contact/",
    ghost: "See the pipeline",
    ghostTo: "/pipeline/",
    nav: nav
  }));
}
function PipelineScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroFX, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "04 \xB7 In the pipeline",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Smaller ventures,", /*#__PURE__*/React.createElement("br", null), "still taking ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'normal',
        color: 'var(--accent)'
      }
    }, "shape"), "."),
    description: "Early-stage concepts we're actively scoping and testing."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 0 120px',
      background: 'var(--surface-paper)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TronLines, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 1,
      background: 'var(--border-on-dark)',
      border: '1px solid var(--border-on-dark)',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    kind: "pipe",
    label: "Concept",
    title: "Corner hospitality stand",
    description: "A fast, friendly stop for sandwiches, coffee and fries, built as a small, repeatable local concept."
  }), /*#__PURE__*/React.createElement(Card, {
    kind: "pipe",
    label: "Early",
    title: "Deedjai",
    description: "A concept on the drawing board, details to follow as it takes shape."
  })))), /*#__PURE__*/React.createElement(CtaSection, {
    title: "Curious where these are headed?",
    desc: "Get in touch and we'll walk you through what's next for the pipeline.",
    primary: "Get in touch",
    primaryTo: "/contact/",
    ghost: "See Naja Build",
    ghostTo: "/build/",
    nav: nav
  }));
}
function ContactScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroFX, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Contact",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Have a plan you want", /*#__PURE__*/React.createElement("br", null), "a second ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'normal',
        color: 'var(--accent)'
      }
    }, "opinion"), " on?"),
    description: "Whether it's a coaching session, a Naja-ware demo, or a plot of land, start with a message."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 0 120px',
      background: 'var(--surface-paper)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TronLines, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "naja-detail-grid-even",
    style: {
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-panel)',
      padding: '8px 28px'
    }
  }, /*#__PURE__*/React.createElement(ContactList, {
    items: [{
      label: 'Nick Damen',
      value: 'nick.damen@example.com',
      href: 'mailto:nick.damen@example.com'
    }, {
      label: 'Joris Jonckers',
      value: 'joris@example.com',
      href: 'mailto:joris@example.com'
    }]
  })), /*#__PURE__*/React.createElement(CalloutBox, {
    title: "Before you write"
  }, /*#__PURE__*/React.createElement("p", null, "Tell us which venture you're reaching out about (Naja-ware, Coaching, or Build) and a line on what you're trying to get done. It helps us route your message to the right person and reply faster."))))));
}
window.NajaScreens2 = {
  CoachingScreen,
  BuildScreen,
  PipelineScreen,
  ContactScreen
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens2.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CalloutBox = __ds_scope.CalloutBox;

__ds_ns.ContactList = __ds_scope.ContactList;

__ds_ns.FeatureList = __ds_scope.FeatureList;

__ds_ns.TierTable = __ds_scope.TierTable;

__ds_ns.CookieBanner = __ds_scope.CookieBanner;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.PageHero = __ds_scope.PageHero;

})();
