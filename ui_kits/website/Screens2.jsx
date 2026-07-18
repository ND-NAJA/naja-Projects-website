const { PageHero, Card, CalloutBox, FeatureList, ContactList } = window.NajaProjectsDesignSystem_b735cb;
const { CtaSection, HeroFX, TronLines } = window.NajaScreens1;

function CoachingScreen({ nav }) {
  return (<>
    <HeroFX>
      <PageHero eyebrow="02 · Coaching" title={<>You don't need another course.<br />You need a second <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>opinion</em>.</>}
        description="For young and mid-career entrepreneurs building something real, one field at a time." />
    </HeroFX>
    <section style={{ padding: '80px 0 120px', background: 'var(--surface-paper)', color: 'var(--text-on-paper)', position: 'relative', overflow: 'hidden' }}>
      <TronLines />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="naja-detail-grid" style={{ alignItems: 'stretch' }}>
          <div>
            <p style={{ maxWidth: 480, fontSize: 15, color: 'var(--text-on-paper-dim)' }}>Every founder hits the same wall eventually: which plan comes first, who to hire, what to build, when to launch. Naja Coaching is built around the same questions we ask ourselves before starting any venture, worked through with you, one field at a time.</p>
            <div className="naja-grid-2" style={{ gap: 1, background: 'var(--border-on-dark)', border: '1px solid var(--border-on-dark)', marginTop: 10 }}>
              <Card kind="coach" label="Sales" title="When do you bring sales in?" description="Timing your first hire or channel so it doesn't outrun the rest of the business." />
              <Card kind="coach" label="Technical" title="Website, app, or proof of concept?" description="Scoping the smallest website, app, or product worth building before you commit real budget." />
              <Card kind="coach" label="Strategic" title="What actually comes first?" description="Sequencing decisions so today's choice doesn't box in next year's." />
              <Card kind="coach" label="Marketing" title="What's the first thing people see?" description="Positioning, website, and the story you tell before you've told anyone." />
            </div>
          </div>
          <CalloutBox title="How a session works">
            <p>No slide decks. You bring the decision you're stuck on, we bring the planning frameworks we use on our own ventures, and you leave with a plan you can actually run this week.</p>
            <p style={{ marginTop: 16 }}>Available as a single session or an ongoing monthly retainer as you grow.</p>
          </CalloutBox>
        </div>
      </div>
    </section>
    <CtaSection title="Stuck on a decision right now?" desc="Bring it to a session. We'll help you work through it this week, not next quarter." primary="Book a coaching call" primaryTo="/contact/" ghost="Explore Naja-ware" ghostTo="/tech/" nav={nav} />
  </>);
}

function BuildScreen({ nav }) {
  return (<>
    <HeroFX>
      <PageHero eyebrow="03 · Project development" title={<>Naja Build.<br />From blueprints to <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>solid</em> foundations.</>}
        description="Land, financing, and construction, coordinated end to end." />
    </HeroFX>
    <section style={{ padding: '80px 0 120px', background: 'var(--surface-paper)', color: 'var(--text-on-paper)', position: 'relative', overflow: 'hidden' }}>
      <TronLines />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="naja-detail-grid" style={{ alignItems: 'stretch' }}>
          <div>
            <p style={{ maxWidth: 480, fontSize: 15, color: 'var(--text-on-paper-dim)' }}>We source land, structure the financing, and build, working with trusted construction partners on fast, efficient timber-frame homes. The same discipline we put into Portal and Coaching goes into every plot.</p>
            <FeatureList onDark={false} items={[
              'Land sourcing, including social-housing partnerships with local authorities',
              'Financing structured through our own management companies and bank partners',
              'Timber-frame construction, faster to build, and wind- and water-tight fast',
              'Long-standing build partnership, with a track record of completed projects',
            ]} />
          </div>
          <CalloutBox title="Why timber frame">
            <p>A timber-skeleton build goes up in a fraction of the time of traditional construction. Once the frame, windows and doors are in, the shell is wind- and water-tight. Everything after that happens on a predictable schedule, not a hopeful one.</p>
          </CalloutBox>
        </div>
      </div>
    </section>
    <CtaSection title="Have land, or looking for a plot?" desc="Tell us where you're starting from and we'll map out what's possible." primary="Talk to Naja Build" primaryTo="/contact/" ghost="See the pipeline" ghostTo="/pipeline/" nav={nav} />
  </>);
}

function PipelineScreen({ nav }) {
  return (<>
    <HeroFX>
      <PageHero eyebrow="04 · In the pipeline" title={<>Smaller ventures,<br />still taking <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>shape</em>.</>}
        description="Early-stage concepts we're actively scoping and testing." />
    </HeroFX>
    <section style={{ padding: '80px 0 120px', background: 'var(--surface-paper)', position: 'relative', overflow: 'hidden' }}>
      <TronLines />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', gap: 1, background: 'var(--border-on-dark)', border: '1px solid var(--border-on-dark)', overflowX: 'auto' }}>
          <Card kind="pipe" label="Concept" title="Corner hospitality stand" description="A fast, friendly stop for sandwiches, coffee and fries, built as a small, repeatable local concept." />
          <Card kind="pipe" label="Early" title="Deedjai" description="A concept on the drawing board, details to follow as it takes shape." />
        </div>
      </div>
    </section>
    <CtaSection title="Curious where these are headed?" desc="Get in touch and we'll walk you through what's next for the pipeline." primary="Get in touch" primaryTo="/contact/" ghost="See Naja Build" ghostTo="/build/" nav={nav} />
  </>);
}

function ContactScreen() {
  return (<>
    <HeroFX>
      <PageHero eyebrow="Contact" title={<>Have a plan you want<br />a second <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>opinion</em> on?</>}
        description="Whether it's a coaching session, a Naja-ware demo, or a plot of land, start with a message." />
    </HeroFX>
    <section style={{ padding: '80px 0 120px', background: 'var(--surface-paper)', position: 'relative', overflow: 'hidden' }}>
      <TronLines />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="naja-detail-grid-even" style={{ alignItems: 'stretch' }}>
          <div style={{ background: 'var(--bg-panel)', padding: '8px 28px' }}>
            <ContactList items={[
              { label: 'Nick Damen', value: 'nick.damen@example.com', href: 'mailto:nick.damen@example.com' },
              { label: 'Joris Jonckers', value: 'joris@example.com', href: 'mailto:joris@example.com' },
            ]} />
          </div>
          <CalloutBox title="Before you write">
            <p>Tell us which venture you're reaching out about (Naja-ware, Coaching, or Build) and a line on what you're trying to get done. It helps us route your message to the right person and reply faster.</p>
          </CalloutBox>
        </div>
      </div>
    </section>
  </>);
}

window.NajaScreens2 = { CoachingScreen, BuildScreen, PipelineScreen, ContactScreen };
