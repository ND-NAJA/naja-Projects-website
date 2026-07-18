const { Nav, Footer, PageHero, Card, CalloutBox, FeatureList, TierTable, ContactList, Button, CookieBanner } = window.NajaProjectsDesignSystem_b735cb;

function TronLines() {
  return (<div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    <div style={{ position: 'absolute', top: '8%', left: 0, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, var(--blue-400), transparent)', opacity: 0.6, animation: 'naja-light-h 8s linear infinite' }} />
    <div style={{ position: 'absolute', top: '92%', left: 0, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', opacity: 0.6, animation: 'naja-light-h 11s linear infinite 3s' }} />
    <div style={{ position: 'absolute', top: 0, left: '2%', width: 1, height: '100%', background: 'linear-gradient(180deg, transparent, var(--blue-300), transparent)', opacity: 0.6, animation: 'naja-light-v 10s linear infinite 1.5s' }} />
  </div>);
}

function HeroFX({ children, home = false }) {
  return (<div style={{ position: 'relative', overflow: 'hidden' }}>
    <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 100, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', top: 30, left: 0, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, var(--blue-300), transparent)', opacity: 0.6, animation: 'naja-light-h 8s linear infinite' }} />
      <div style={{ position: 'absolute', top: 70, left: 0, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', opacity: 0.6, animation: 'naja-light-h 11s linear infinite 3s' }} />
    </div>
    <img src="../../assets/logo-icon-transparent.png" alt="" aria-hidden="true" style={{
      position: 'absolute', top: home ? -40 : -20, right: '2%', width: home ? 460 : 360, opacity: 0.07,
      filter: 'invert(1) brightness(2)', pointerEvents: 'none', zIndex: 0,
    }} />
    <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
  </div>);
}

function Home({ nav }) {
  return (<>
    <HeroFX home>
      <PageHero home eyebrow="Naja Projects · Venture Studio, est. 2026"
        title={<>We draft the plan.<br />Then we <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>help you</em> build your company.</>}
        description="Naja Projects designs, creates, and coaches new ventures. A business platform built for founders who dare to succeed than never start." />
    </HeroFX>
    <div className="wrap" style={{ marginTop: -60, marginBottom: 60, display: 'flex', gap: 18, flexWrap: 'wrap' }}>
      <Button variant="primary" onClick={() => nav('/contact/')}>Contact us</Button>
      <Button variant="ghost" onClick={() => nav('#ventures')}>See what we're building ↓</Button>
    </div>
    <section id="ventures" style={{ padding: '60px 0 120px', background: 'var(--surface-paper)', position: 'relative', overflow: 'hidden' }}>
      <TronLines />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 64, flexWrap: 'wrap' }}>
          <div><span className="mono" style={{ fontSize: 12, color: 'var(--accent)', marginBottom: 14, display: 'block' }}>What we run</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.4vw,2.6rem)', color: 'var(--text-on-paper)', maxWidth: 560 }}>Four disciplines, one studio.</h2></div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--text-on-paper-dim-2)', textAlign: 'right', maxWidth: 240 }}>Every venture shares the same playbook: plan it properly, then build it right.</div>
        </div>
        <div className="naja-grid-4" style={{ gap: 1, background: 'var(--border-on-dark)', border: '1px solid var(--border-on-dark)' }}>
          <Card kind="venture" label="01 / NAJA-WARE" title="Naja-ware" description="Websites, apps, SaaS models and custom software, including Naja Portal, our own business operating system." meta="Live · Web · App · SaaS" href="/tech/" onClick={(e) => { e.preventDefault(); nav('/tech/'); }} />
          <Card kind="venture" label="02 / COACHING" title="Naja Coaching" description="One-on-one coaching for founders on sales, tech, strategy and marketing, whatever stage you're stuck at." meta="Booking now" href="/coaching/" onClick={(e) => { e.preventDefault(); nav('/coaching/'); }} />
          <Card kind="venture" label="03 / BUILD" title="Naja Build" description="Project development for land and housing, from plot to keys, with timber-frame construction partners." meta="In construction" href="/build/" onClick={(e) => { e.preventDefault(); nav('/build/'); }} />
          <Card kind="venture" label="04 / PIPELINE" title="Naja Ventures" description="Smaller concepts we're testing and building out, from hospitality to new property plays." meta="Early stage" href="/pipeline/" onClick={(e) => { e.preventDefault(); nav('/pipeline/'); }} />
        </div>
      </div>
    </section>
    <CtaSection title="Have a plan you want a second opinion on?" desc="Whether it's a coaching session or a Naja-ware demo, start with a conversation." primary="Get in touch" primaryTo="/contact/" ghost="Browse ventures" ghostTo="#ventures" nav={nav} />
  </>);
}

function CtaSection({ title, desc, primary, primaryTo, ghost, ghostTo, nav }) {
  return (
    <section className="grid-bg" style={{ padding: '130px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <TronLines />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem,4.6vw,3.2rem)', color: '#fff', maxWidth: 700, margin: '0 auto' }}>{title}</h2>
        <p style={{ color: 'var(--text-dim)', marginTop: 20, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>{desc}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginTop: 40, flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => nav(primaryTo)}>{primary}</Button>
          <Button variant="ghost" onClick={() => nav(ghostTo)}>{ghost}</Button>
        </div>
      </div>
    </section>
  );
}

function TechScreen({ nav }) {
  return (<>
    <HeroFX>
      <PageHero eyebrow="01 · Tech" title={<>Naja-ware. Software personalized for <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>you</em>.</>}
        description="Naja-ware designs and builds the websites, apps, and SaaS platforms that a growing business needs." />
    </HeroFX>
    <section style={{ padding: '80px 0 120px', background: 'var(--surface-paper)', color: 'var(--text-on-paper)', position: 'relative', overflow: 'hidden' }}>
      <TronLines />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="naja-detail-grid" style={{ alignItems: 'stretch' }}>
          <div>
            <FeatureList onDark={false} items={[
              { text: 'Marketing websites and product sites', detail: 'Landing pages and full marketing sites built to convert, and easy for your own team to update after launch.' },
              { text: 'Custom web and mobile apps', detail: 'Purpose-built apps for a specific workflow, not a generic template stretched to fit.' },
              { text: 'SaaS platforms, built and maintained', detail: 'Multi-tenant products with ongoing support after launch, not a one-time handoff.' },
              { text: 'Naja Portal, our own business operating system', detail: 'Naja Portal is a business operating system we built for our own project development work, then opened up for other teams to run on too.' },
              { text: 'Ongoing support and iteration after launch', detail: "We stay on after launch: bug fixes, new features, and whatever comes up as your business grows." },
            ]} />
          </div>
          <CalloutBox title="Software built by builders">
            <p>We build Naja-ware products the same way we build everything else at Naja Projects: for real use first. Portal started as a tool for our own project development work, because nothing on the market fit how a small, hands-on business actually operates. Then it became a product.</p>
          </CalloutBox>
        </div>
      </div>
    </section>
    <CtaSection title="Want to see Naja-ware in action?" desc="Book a walkthrough of Portal, or tell us what you want to build." primary="Book a demo" primaryTo="/contact/" ghost="Explore Coaching" ghostTo="/coaching/" nav={nav} />
  </>);
}

window.NajaScreens1 = { Home, TechScreen, CtaSection, HeroFX, TronLines };
