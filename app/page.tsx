import QuoteForm from './quote-form';
import Image from 'next/image';

const Arrow = () => <span aria-hidden="true">↗</span>;

const services = [
  ['regional', 'Regional freight', 'Freight transportation across South Carolina, North Carolina, and Georgia, coordinated around your schedule.'],
  ['dedicated', 'Dedicated delivery', 'A focused vehicle and route coordinated around one customer requirement.'],
  ['last-mile', 'Last-mile delivery', 'Professional delivery support for the final movement from facility to destination.'],
  ['scheduled', 'Scheduled routes', 'Repeatable transportation support for recurring business and operational needs.'],
  ['expedited', 'Expedited delivery', 'Time-sensitive regional delivery coordination when the schedule demands focused attention.'],
  ['courier', 'Courier support', 'Document, equipment, and small-parts movement reviewed for route and handling fit.'],
];

const process = [
  ['Request', 'Share the route, timing, cargo, and access requirements.'],
  ['Review', 'BRG confirms service fit, availability, and next steps.'],
  ['Coordinate', 'Pickup and delivery details are aligned before dispatch.'],
  ['Complete', 'The delivery is closed with clear communication.'],
];

export default function Home() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BRG Integrated Services, LLC',
    description: 'Service Disabled Veteran Owned regional logistics company serving commercial and government buyers.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Aiken',
      addressRegion: 'SC',
      addressCountry: 'US',
    },
    areaServed: ['South Carolina', 'North Carolina', 'Georgia'],
  };

  return (
    <main>
      <a className="skip-link" href="#services">Skip to content</a>
      <div className="utility-bar"><span>SERVICE DISABLED VETERAN OWNED · AIKEN, SOUTH CAROLINA</span><a href="tel:+18032210020">803-221-0020 <span aria-hidden="true">↗</span></a></div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="BRG Integrated Services home">
          <Image className="brand-logo" src="/brg-logo.png" alt="BRG Integrated Services" width={1536} height={1024} priority />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#government">Government</a>
          <a href="#founder">Founder &amp; CEO</a>
          <a href="#coverage">Coverage</a>
        </nav>
        <a className="header-cta" href="#quote">Request a quote <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Service Disabled Veteran Owned · Mission-focused</p>
          <h1>Driven by service.<br /><em>Built for the mission.</em></h1>
          <p className="hero-lede">
            Regional freight, dedicated delivery, and logistics coordination for commercial teams,
            government buyers, and prime contractors. Based in Aiken. Serving the Carolinas and Georgia.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#quote">Discuss your shipment <Arrow /></a>
            <a className="text-link" href="#services">Explore capabilities <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <aside className="mission-visual" aria-label="Regional logistics serving the Carolinas and Georgia">
          <div className="visual-top"><span>REGIONAL LOGISTICS</span><span>SC / NC / GA</span></div>
          <svg className="route-visual" viewBox="0 0 500 360" role="img" aria-label="Schematic regional routes centered on Aiken, South Carolina; not a geographic map">
            <defs><pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M 32 0 L 0 0 0 32" fill="none" stroke="#ffffff" strokeOpacity=".06" /></pattern></defs>
            <rect width="500" height="360" fill="url(#grid)" />
            <circle cx="240" cy="210" r="125" fill="none" stroke="#c2a46d" strokeOpacity=".2" /><circle cx="240" cy="210" r="72" fill="none" stroke="#c2a46d" strokeOpacity=".25" />
            <path d="M95 275 L240 210 L370 80 M240 210 L405 240 M240 210 L170 105" fill="none" stroke="#c2a46d" strokeWidth="2" />
            <g fill="#c2a46d"><circle cx="95" cy="275" r="5"/><circle cx="370" cy="80" r="5"/><circle cx="405" cy="240" r="5"/><circle cx="170" cy="105" r="5"/></g>
            <circle cx="240" cy="210" r="16" fill="#c2a46d" fillOpacity=".2"/><circle cx="240" cy="210" r="6" fill="#e4c990"/>
            <g fill="#dbe2ea" fontSize="13" fontFamily="Arial, sans-serif" letterSpacing="2"><text x="295" y="55">NORTH CAROLINA</text><text x="292" y="280">SOUTH CAROLINA</text><text x="48" y="310">GEORGIA</text><text x="215" y="178" fill="#e4c990">AIKEN · HQ</text></g>
          </svg>
          <div className="visual-bottom"><span className="visual-cross" aria-hidden="true">✦</span><div><strong>Regional reach. Direct accountability.</strong><p>Dedicated movement across the Carolinas and Georgia.</p></div></div>
          <span className="schematic-note">Service-region schematic · Routes subject to review</span>
        </aside>
      </section>

      <section className="trust-strip" aria-label="Company highlights">
        <div><span aria-hidden="true">✦</span><strong>Service Disabled Veteran Owned</strong><small>Small business</small></div>
        <div><span aria-hidden="true">✦</span><strong>Regional focus</strong><small>SC · NC · GA</small></div>
        <div><span aria-hidden="true">✦</span><strong>SAM.gov registered</strong><small>Government opportunities</small></div>
        <div><span aria-hidden="true">✦</span><strong>Direct coordination</strong><small>From request to delivery</small></div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <p className="eyebrow"><span /> Core capabilities</p>
          <h2>Purpose-built support.<br />From pickup to delivery.</h2>
          <p>From a single delivery to a recurring route, BRG coordinates transportation around your cargo, schedule, and destination.</p>
        </div>
        <div className="service-list">
          {services.map(([number, title, copy]) => (
            <article className="service-row" key={number}>
              <span className="service-icon" aria-hidden="true">{number === 'scheduled' ? '↻' : number === 'regional' ? '⌁' : number === 'expedited' ? '↗' : number === 'dedicated' ? '◇' : number === 'courier' ? '▱' : '⌖'}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#quote" aria-label={`Discuss ${title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="industries section" aria-labelledby="industries-title"><div><p className="eyebrow"><span /> Who we serve</p><h2 id="industries-title">Aligned with<br />your operation.</h2></div><div className="industry-grid"><article><h3>Government &amp; prime contractors</h3><p>Regional courier, facility, and subcontracting requirements with clear scope and documentation.</p></article><article><h3>Manufacturing &amp; industry</h3><p>Parts, supplies, and business-critical deliveries between suppliers and operating sites.</p></article><article><h3>Warehousing &amp; distribution</h3><p>Facility transfers, final-mile delivery, and recurring movements that keep goods flowing.</p></article><article><h3>Commercial organizations</h3><p>Dedicated routes and flexible delivery coordination for everyday business needs.</p></article></div></section>
      <section className="process-section" aria-labelledby="process-title">
        <div className="process-intro">
          <p className="eyebrow"><span /> Working approach</p>
          <h2 id="process-title">Clarity at every handoff.</h2>
        </div>
        <div className="process-grid">
          {process.map(([title, copy]) => (
            <article key={title}>
              <span aria-hidden="true">→</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="government section" id="government">
        <div className="gov-panel">
          <div className="gov-credentials">
            <span className="brief-label">Public sector &amp; prime contractors</span>
            <strong>Prepared for<br />the requirement.</strong>
            <dl><div><dt>Business</dt><dd>Service Disabled Veteran Owned small business</dd></div><div><dt>UEI</dt><dd>JU2PUDSGGZG5</dd></div><div><dt>CAGE</dt><dd>1SHG4</dd></div><div><dt>NAICS</dt><dd>484122 · 484220 · 484230 · 492210</dd></div><div><dt>Opportunities</dt><dd>Government &amp; subcontracting</dd></div></dl>
          </div>
          <div className="gov-copy">
            <p className="eyebrow"><span /> Government contracting</p>
            <h2>Experience that understands the mission.</h2>
            <p>
              BRG welcomes government, prime-contractor, and subcontracting opportunities.
              Veteran leadership brings experience across logistics,
              supply chain operations, acquisition, contracts, quality assurance, and program management.
            </p>
            <a className="button button-light" href="#quote">Discuss a contracting opportunity <Arrow /></a><p className="gov-note">Leadership experience informs our approach; it does not represent BRG corporate past performance or government endorsement.</p>
          </div>
        </div>
      </section>

      <section className="about section" id="about" aria-labelledby="family-title">
        <div className="about-marker"><span>THE BRG STANDARD</span><strong>Discipline.<br />Accountability.<br />Ownership.</strong></div>
        <div className="about-copy">
          <p className="eyebrow"><span /> Family foundation</p>
          <h2 id="family-title">Family-founded.<br />Mission-driven.</h2>
          <p className="large-copy">
            BRG Integrated Services is a family-founded, service disabled veteran owned logistics company based in Aiken, South Carolina.
            Family is the foundation for how BRG approaches service: taking responsibility, keeping commitments, and being accountable to one another.
            BRG is building its reputation through the care and reliability it brings to each customer requirement.
          </p>
          <section className="leadership-narrative" id="founder" aria-labelledby="founder-title">
            <h3 id="founder-title">Founder &amp; CEO</h3>
            <p>
              BRG’s Founder &amp; CEO brings military service, private-sector experience, and years of federal civilian experience
              across logistics, acquisition, purchasing, quality assurance, and program management.
              His professional background informs the company he is building: plan deliberately, communicate clearly, and take responsibility for the work.
            </p>
            <p className="experience-boundary">
              This experience belongs to the Founder &amp; CEO. It informs BRG’s standards; it does not represent BRG corporate past performance or government endorsement.
            </p>
          </section>
          <section className="leadership-narrative" aria-labelledby="brg-today-title">
            <h3 id="brg-today-title">BRG today</h3>
            <p>
              BRG puts these values into practice through regional transportation, dedicated delivery, and logistics coordination
              for commercial organizations, government buyers, and prime contractors.
              Each request starts with a review of the route, timing, cargo, and service requirements, with a clear point of responsibility from request through delivery.
            </p>
            <div className="principles">
              <div><strong>Plan deliberately</strong><p>Review the route, cargo, timing, and constraints before movement begins.</p></div>
              <div><strong>Communicate clearly</strong><p>Keep the requirement, responsibility, and next action visible.</p></div>
              <div><strong>Own the mission</strong><p>Coordinate each request with calm, direct accountability.</p></div>
            </div>
          </section>
        </div>
      </section>

      <section id="coverage" className="coverage-section" aria-labelledby="coverage-title">
        <div className="coverage-region">
          <p className="eyebrow"><span /> Our service region</p>
          <ul><li><span>SC</span>South Carolina</li><li><span>NC</span>North Carolina</li><li><span>GA</span>Georgia</li></ul>
          <p className="coverage-base">Headquartered in Aiken, South Carolina</p>
        </div>
        <div className="coverage-copy">
          <p className="eyebrow"><span /> Regional focus</p>
          <h2 id="coverage-title">Centered in Aiken. Built for the region.</h2>
          <p>
            BRG coordinates regional transportation across South Carolina,
            North Carolina, and Georgia. Every route is reviewed for service fit and availability.
          </p>
          <a className="text-link dark-link" href="#quote">Request a route review <Arrow /></a>
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-intro">
          <p className="eyebrow"><span /> Start a conversation</p>
          <h2>Tell us what needs to move.</h2>
          <p>From an urgent shipment to a recurring route or contracting opportunity, start with a direct conversation.</p><div className="contact-links"><a href="tel:+18032210020">803-221-0020 ↗</a><a href="mailto:brgintegratedservices@outlook.com">brgintegratedservices@outlook.com ↗</a></div><p className="quote-note">Cargo, vehicle availability, handling, and site-access requirements are reviewed before acceptance. No hazardous materials, oversized cargo, or specialized heavy equipment.</p>
        </div>
        <QuoteForm />
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="BRG Integrated Services home">
          <Image className="brand-logo" src="/brg-logo.png" alt="BRG Integrated Services" width={1536} height={1024} />
        </a>
        <p>Service Disabled Veteran Owned regional logistics · Aiken, South Carolina</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
