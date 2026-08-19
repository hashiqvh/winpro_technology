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

const tickerItems = [
  "Mobile Apps", "Web Platforms", "Forex CRM", "Cloud Infrastructure",
  "Email Marketing", "Product Engineering", "iOS & Android", "Custom CRM",
  "E-Commerce", "DevOps", "UI / UX Design", "API Integrations",
];

const differentiators = [
  {
    stat: "15 days",
    title: "Average time to first delivery",
    desc: "We move fast. Most clients receive a working prototype within two weeks of kickoff.",
  },
  {
    stat: "100%",
    title: "Projects completed on scope",
    desc: "We agree on scope upfront and deliver it. No surprise invoices, no scope creep.",
  },
  {
    stat: "Dubai",
    title: "Headquartered in the UAE",
    desc: "Local presence, global reach. We work across time zones without missing a beat.",
  },
  {
    stat: "24 / 7",
    title: "Post-launch support",
    desc: "Your product doesn't sleep, and neither does our support. We're always on call.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "We start with a deep-dive into your goals, users and competitive landscape. No assumptions — just the right questions.",
    duration: "1–2 days",
  },
  {
    step: "02",
    title: "Architecture & Design",
    desc: "We map the technical architecture and design the user experience before writing a single line of production code.",
    duration: "3–5 days",
  },
  {
    step: "03",
    title: "Build",
    desc: "Iterative development with weekly demos. You see progress constantly — not just at the end.",
    duration: "2–8 weeks",
  },
  {
    step: "04",
    title: "QA & Launch",
    desc: "Thorough testing across devices, browsers and edge cases. Then a zero-downtime deployment.",
    duration: "3–5 days",
  },
  {
    step: "05",
    title: "Support & Scale",
    desc: "We stay with you post-launch — monitoring, fixing, and evolving the product as your business grows.",
    duration: "Ongoing",
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

      {/* Ticker */}
      <div className="ticker" aria-hidden="true">
        <div className="tickerTrack">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span className="tickerItem" key={i}>{item}<span className="tickerDot">◆</span></span>
          ))}
        </div>
      </div>

      {/* Capabilities */}
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

      {/* Why us */}
      <section className="whyUs" aria-label="Why WINPRO TECHNOLOGY">
        <div className="whyUsTop shell">
          <div className="eyebrow"><span /> Why us</div>
          <h2 className="whyUsHeading">The difference is in the details.</h2>
        </div>
        <div className="whyUsGrid shell">
          {differentiators.map((d) => (
            <div className="whyCard" key={d.stat}>
              <span className="whyStat">{d.stat}</span>
              <h3 className="whyTitle">{d.title}</h3>
              <p className="whyDesc">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="process shell" aria-label="How we work">
        <div className="processHeader">
          <div className="eyebrow"><span /> How we work</div>
          <h2 className="processHeading">From idea to launch — <em>without the chaos.</em></h2>
        </div>
        <div className="processSteps">
          {process.map((p, i) => (
            <div className="processStep" key={p.step}>
              <div className="processStepLeft">
                <span className="processStepNum">{p.step}</span>
                <div className="processLine" aria-hidden="true"><span /></div>
              </div>
              <div className="processStepRight">
                <div className="processStepMeta">
                  <h3 className="processStepTitle">{p.title}</h3>
                  <span className="processStepDuration">{p.duration}</span>
                </div>
                <p className="processStepDesc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="ctaStrip" aria-label="Start a project">
        <div className="ctaGrid" aria-hidden="true">{Array.from({length:48}).map((_,i)=><span key={i}/>)}</div>
        <div className="ctaGlow" aria-hidden="true" />
        <div className="ctaContent shell">
          <p className="ctaStripEyebrow">Ready to move?</p>
          <h2 className="ctaStripBig">Start with<br /><em>one message.</em></h2>
          <a className="ctaBigEmail" href="mailto:support@winprofx.com">
            support@winprofx.com
            <span className="ctaBigEmailArrow" aria-hidden="true">&#8599;</span>
          </a>
          <div className="ctaActions">
            <a className="primaryButton" href="mailto:support@winprofx.com">Send us an email <span aria-hidden="true">&#8594;</span></a>
            <a className="ctaPhoneLink" href="tel:+97144471894">or call +971 4 447 1894</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
