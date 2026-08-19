import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — WINPRO TECHNOLOGY",
  description: "Mobile app development, web development, CRM, Forex CRM, email marketing and more by WINPRO TECHNOLOGY.",
};

const categories = [
  {
    index: "01",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android. From concept to App Store — we build fast, reliable apps that users love.",
    items: ["iOS & Android apps", "Cross-platform (React Native / Flutter)", "UI/UX design", "App Store deployment", "Ongoing maintenance"],
  },
  {
    index: "02",
    title: "Website Development",
    description: "High-performance websites and web applications built with modern frameworks. SEO-optimised, responsive, and crafted for conversion.",
    items: ["Corporate & landing pages", "E-commerce stores", "Web portals & dashboards", "CMS integration", "Performance optimisation"],
  },
  {
    index: "03",
    title: "CRM Solutions",
    description: "Custom CRM systems that centralise your customer data, automate follow-ups, and give your team a single source of truth.",
    items: ["Custom CRM development", "CRM integration & migration", "Sales pipeline automation", "Reporting & analytics", "Third-party API integrations"],
  },
  {
    index: "04",
    title: "Forex CRM",
    description: "Specialised CRM platforms built for brokers, prop-trading firms, and financial services — with compliance, KYC, and client portal built in.",
    items: ["Broker back-office systems", "KYC / AML workflows", "Client & IB portals", "MT4 / MT5 integration", "Multi-currency & multi-account support"],
  },
  {
    index: "05",
    title: "Email Marketing",
    description: "Strategy, design, and full-stack delivery of email campaigns that drive opens, clicks, and revenue.",
    items: ["Campaign strategy & copywriting", "Template design & coding", "List management & segmentation", "Automation & drip sequences", "Analytics & A/B testing"],
  },
  {
    index: "06",
    title: "Cloud & Infrastructure",
    description: "Scalable cloud architecture on AWS, GCP, and Azure — designed for performance, security, and zero-downtime deployments.",
    items: ["Cloud architecture & migration", "CI/CD pipelines", "DevOps & containerisation", "Security hardening", "24/7 monitoring & support"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="/" aria-label="WINPRO TECHNOLOGY home">
          <img src="/logo.png" alt="" className="brandMark" aria-hidden="true" />
          <span>WINPRO <b>TECHNOLOGY</b></span>
        </a>
        <nav className="navLinks">
          <a className="navLink navLinkActive" href="/services">Services</a>
          <a className="navLink" href="mailto:support@winprofx.com">Contact us <span aria-hidden="true">&#8599;</span></a>
        </nav>
      </header>

      <section className="svcHero shell">
        <div className="eyebrow"><span /> What we build</div>
        <h1>Our <em>services.</em></h1>
        <p className="intro">End-to-end digital solutions for ambitious businesses — from mobile apps and websites to specialised CRM platforms and cloud infrastructure.</p>
      </section>

      <section className="svcGrid shell" aria-label="Service categories">
        {categories.map((cat) => (
          <article className="svcCard" key={cat.index}>
            <div className="svcCardHeader">
              <span className="svcIndex">{cat.index}</span>
              <h2 className="svcTitle">{cat.title}</h2>
            </div>
            <p className="svcDesc">{cat.description}</p>
            <ul className="svcList">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="svcCta" href="mailto:support@winprofx.com">
              Get a quote <span aria-hidden="true">&#8594;</span>
            </a>
          </article>
        ))}
      </section>

      <section className="svcCtaSection shell">
        <p className="svcCtaEyebrow">Ready to start?</p>
        <h2 className="svcCtaHeading">Let&apos;s build something great together.</h2>
        <a className="primaryButton" href="mailto:support@winprofx.com">
          Start a conversation <span aria-hidden="true">&#8594;</span>
        </a>
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
        <div className="footerBottom shell">
          <span>© 2026 WINPRO TECHNOLOGY</span>
          <span>Designed for progress.</span>
        </div>
      </footer>
    </main>
  );
}
