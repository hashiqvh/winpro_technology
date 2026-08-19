import Nav from "./components/Nav";
import Footer from "./components/Footer";

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
      <Nav />
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
      <Footer />
    </main>
  );
}
