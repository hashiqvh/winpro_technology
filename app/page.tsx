const capabilities = [
  {
    index: "01",
    title: "Digital Platforms",
    desc: "Web apps, portals and e-commerce systems built to scale — fast, secure and crafted for conversion.",
    glyph: "⬡",
    tags: ["Web Apps", "E-Commerce", "Portals"],
  },
  {
    index: "02",
    title: "Mobile Apps",
    desc: "Native iOS & Android and cross-platform apps that feel right on every device.",
    glyph: "◈",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    index: "03",
    title: "Cloud Solutions",
    desc: "Resilient cloud architecture on AWS, GCP and Azure — zero-downtime deployments, 24/7 uptime.",
    glyph: "◎",
    tags: ["AWS", "GCP", "DevOps"],
  },
  {
    index: "04",
    title: "CRM & Forex CRM",
    desc: "Custom CRM platforms for brokers and businesses — KYC, MT4/MT5 integration, client portals.",
    glyph: "◇",
    tags: ["Forex CRM", "KYC", "Back-office"],
  },
  {
    index: "05",
    title: "Product Engineering",
    desc: "End-to-end product teams — strategy, design, build and launch under one roof.",
    glyph: "◉",
    tags: ["Strategy", "Design", "Engineering"],
  },
  {
    index: "06",
    title: "Email Marketing",
    desc: "Full-stack campaign delivery — strategy, design, automation and analytics that drive revenue.",
    glyph: "◫",
    tags: ["Campaigns", "Automation", "Analytics"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="WINPRO TECHNOLOGY home"><img src="/logo.png" alt="" className="brandMark" aria-hidden="true" /><span>WINPRO <b>TECHNOLOGY</b></span></a>
        <nav className="navLinks">
          <a className="navLink" href="/services">Services</a>
          <a className="navLink" href="mailto:support@winprofx.com">Contact us <span aria-hidden="true">&#8599;</span></a>
        </nav>
      </header>
      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Technology for what&apos;s next</div>
        <h1>We build digital<br /><em>possibilities.</em></h1>
        <p className="intro">WINPRO TECHNOLOGY creates reliable, modern digital solutions that help ambitious businesses move faster and operate smarter.</p>
        <a className="primaryButton" href="mailto:support@winprofx.com">Start a conversation <span aria-hidden="true">&#8594;</span></a>
        <div className="orbital" aria-hidden="true"><div className="orbit orbitOne" /><div className="orbit orbitTwo" /><div className="core"><img src="/logo.png" alt="" className="coreLogoImg" /></div><i className="dot dotOne" /><i className="dot dotTwo" /></div>
      </section>
      <section className="capabilities" aria-label="Our capabilities">
        <div className="capabilitiesHeader shell">
          <div className="eyebrow"><span /> Our capabilities</div>
          <a className="capAll" href="/services">View all services <span aria-hidden="true">&#8599;</span></a>
        </div>
        <div className="capGrid shell">
          {capabilities.map((cap) => (
            <a className="capCard" href="/services" key={cap.index}>
              <div className="capTop">
                <span className="capIndex">{cap.index}</span>
                <span className="capGlyph" aria-hidden="true">{cap.glyph}</span>
              </div>
              <h2 className="capTitle">{cap.title}</h2>
              <p className="capDesc">{cap.desc}</p>
              <div className="capTags">
                {cap.tags.map((tag) => <span className="capTag" key={tag}>{tag}</span>)}
              </div>
              <span className="capArrow" aria-hidden="true">&#8594;</span>
            </a>
          ))}
        </div>
      </section>
      <footer>
        <div className="footerTop shell">
          <div>
            <span className="footerLabel">Let&apos;s work together</span>
            <a className="footerEmail" href="mailto:support@winprofx.com">support@winprofx.com</a>
          </div>
          <div className="footerContacts">
            <div>
              <span className="footerLabel">Phone</span>
              <a className="footerContact" href="tel:+97144471894">+971 4 447 1894</a>
            </div>
            <div>
              <span className="footerLabel">WhatsApp</span>
              <a className="footerContact" href="https://wa.me/97144471894" target="_blank" rel="noopener noreferrer">+971 4 447 1894</a>
            </div>
            <address>
              <span className="footerLabel">Office</span>
              Office No. 1003, owned by Naseema Tower Investment L.L.C.<br />Trade Centre 1, Dubai, UAE
            </address>
          </div>
        </div>
        <div className="footerBottom shell"><span>© 2026 WINPRO TECHNOLOGY</span><span>Designed for progress.</span></div>
      </footer>
    </main>
  );
}
