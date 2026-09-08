import QuoteForm from './quote-form';
import Image from 'next/image';

const Arrow = () => <span aria-hidden="true">↗</span>;

const services = [
  ['01', 'Regional freight', 'Direct transportation support for time-sensitive business requirements within BRG’s regional focus.'],
  ['02', 'Dedicated delivery', 'A focused vehicle and route coordinated around one customer requirement.'],
  ['03', 'Last-mile delivery', 'Professional delivery support for the final movement from facility to destination.'],
  ['04', 'Scheduled routes', 'Repeatable transportation support for recurring business and operational needs.'],
  ['05', 'Expedited delivery', 'Responsive coordination when a shipment requires faster regional movement.'],
  ['06', 'Courier support', 'Document, equipment, and small-parts movement reviewed for route and handling fit.'],
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
    description: 'Veteran-owned regional logistics company serving commercial and government buyers.',
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
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#quote">Request a quote <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Aiken South Carolina</p>
          <h1>Regional logistics.<br /><em>Clear ownership.</em></h1>
          <p className="hero-lede">
            Veteran-owned transportation and delivery support for commercial teams,
            government buyers, and prime contractors across the Carolinas and Georgia.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#quote">Discuss your shipment <Arrow /></a>
            <a className="text-link" href="#services">Explore capabilities <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="mission-board" aria-label="BRG operating approach">
          <div className="board-topline"><span>BRG / REGIONAL OPS</span><span>01</span></div>
          <div className="route-grid" aria-hidden="true">
            <span className="route route-a" />
            <span className="route route-b" />
            <span className="route route-c" />
            <i className="node node-a" /><i className="node node-b" /><i className="node node-c" />
          </div>
          <div className="board-status">
            <p>Operating principle</p>
            <strong>One mission.<br />One accountable team.</strong>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Company highlights">
        <div><span>01</span><strong>Veteran-owned</strong><small>Small business</small></div>
        <div><span>02</span><strong>Regional focus</strong><small>SC · NC · GA</small></div>
        <div><span>03</span><strong>Government-ready</strong><small>Registered in SAM.gov</small></div>
        <div><span>04</span><strong>Direct coordination</strong><small>From request to delivery</small></div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <p className="eyebrow"><span /> Core capabilities</p>
          <h2>Transportation shaped around the requirement.</h2>
          <p>Service fit, route coverage, timing, cargo requirements, and vehicle availability are confirmed during quote review.</p>
        </div>
        <div className="service-list">
          {services.map(([number, title, copy]) => (
            <article className="service-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#quote" aria-label={`Discuss ${title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="process-intro">
          <p className="eyebrow"><span /> Working approach</p>
          <h2 id="process-title">Clarity at every handoff.</h2>
        </div>
        <div className="process-grid">
          {process.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="government section" id="government">
        <div className="gov-panel">
          <div className="gov-code" aria-hidden="true">GOV<br />READY</div>
          <div className="gov-copy">
            <p className="eyebrow"><span /> Government contracting</p>
            <h2>A logistics partner that understands the environment.</h2>
            <p>
              BRG welcomes government, prime-contractor, and subcontracting opportunities.
              The company is registered in SAM.gov and brings experience relevant to logistics,
              supply chain operations, acquisition, contracts, quality assurance, and program management.
            </p>
            <p className="gov-note">
              Leadership experience informs BRG’s approach and is not presented as corporate past performance or government endorsement.
            </p>
            <a className="button button-light" href="#quote">Submit an opportunity <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-number">03</div>
        <div className="about-copy">
          <p className="eyebrow"><span /> About BRG</p>
          <h2>Discipline translated into customer outcomes.</h2>
          <p className="large-copy">
            BRG Integrated Services is a veteran-owned logistics company based in Aiken, South Carolina.
            Its operating approach centers on careful planning, accountable communication, and a clear point of responsibility.
          </p>
          <div className="principles">
            <div><strong>Plan deliberately</strong><p>Review the route, cargo, timing, and constraints before movement begins.</p></div>
            <div><strong>Communicate clearly</strong><p>Keep the requirement, responsibility, and next action visible.</p></div>
            <div><strong>Own the mission</strong><p>Coordinate each request with calm, direct accountability.</p></div>
          </div>
        </div>
      </section>

      <section className="coverage-section" aria-labelledby="coverage-title">
        <div className="coverage-map" aria-hidden="true">
          <div className="state state-nc">NC</div>
          <div className="state state-sc">SC</div>
          <div className="state state-ga">GA</div>
          <span className="origin">Aiken</span>
        </div>
        <div className="coverage-copy">
          <p className="eyebrow"><span /> Regional focus</p>
          <h2 id="coverage-title">Centered in Aiken. Built for the region.</h2>
          <p>
            BRG’s initial regional focus covers transportation needs across South Carolina,
            North Carolina, and Georgia. Every route is reviewed for service fit and availability.
          </p>
          <a className="text-link dark-link" href="#quote">Request a route review <Arrow /></a>
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-intro">
          <p className="eyebrow"><span /> Start a conversation</p>
          <h2>Tell us what needs to move.</h2>
          <p>Share the essentials. BRG will review the route, timing, cargo, and service requirements together.</p>
        </div>
        <QuoteForm />
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="BRG Integrated Services home">
          <Image className="brand-logo" src="/brg-logo.png" alt="BRG Integrated Services" width={1536} height={1024} />
        </a>
        <p>Veteran-owned regional logistics · Aiken, South Carolina</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
