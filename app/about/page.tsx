import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About — WINPRO TECHNOLOGY",
  description: "Learn about WINPRO TECHNOLOGY — our mission, values, and the team behind the products.",
};

const values = [
  { index: "01", title: "Reliability", desc: "We ship on time, every time. Deadlines are commitments, not suggestions." },
  { index: "02", title: "Craftsmanship", desc: "Every line of code, every pixel — built with precision and long-term maintainability in mind." },
  { index: "03", title: "Transparency", desc: "No surprises. You get clear timelines, honest updates, and full visibility into your project." },
  { index: "04", title: "Ambition", desc: "We work best with clients who want to grow fast. We bring the energy and expertise to match." },
];

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Happy clients" },
  { value: "6+", label: "Years of experience" },
  { value: "10+", label: "Countries served" },
];

export default function AboutPage() {
  return (
    <main>
      <Nav active="about" />

      <section className="abtHero shell">
        <div className="eyebrow"><span /> Who we are</div>
        <h1>Built for <em>ambitious</em><br />businesses.</h1>
        <p className="intro">WINPRO TECHNOLOGY is a Dubai-based digital product studio. We design and build software that helps ambitious businesses grow faster, operate smarter, and stand out in competitive markets.</p>
      </section>

      <section className="abtStats shell" aria-label="Company stats">
        {stats.map((s) => (
          <div className="abtStat" key={s.label}>
            <span className="abtStatValue">{s.value}</span>
            <span className="abtStatLabel">{s.label}</span>
          </div>
        ))}
      </section>

      <section className="abtMission shell">
        <div className="abtMissionLeft">
          <div className="eyebrow"><span /> Our mission</div>
          <h2 className="abtH2">Technology for what&apos;s next.</h2>
        </div>
        <div className="abtMissionRight">
          <p>We started WINPRO TECHNOLOGY with a single belief: great software should be accessible to every ambitious business, not just the ones with the biggest budgets.</p>
          <p>Based in Trade Centre, Dubai, we serve clients across the Middle East, Europe, and Asia — building everything from mobile apps and e-commerce platforms to specialised Forex CRM systems and cloud infrastructure.</p>
          <p>Our team combines deep technical expertise with a commercial mindset. We don&apos;t just build what you ask for — we ask the right questions to make sure we build what you actually need.</p>
        </div>
      </section>

      <section className="abtValues shell" aria-label="Our values">
        <div className="eyebrow" style={{marginBottom: "48px"}}><span /> Our values</div>
        <div className="abtValuesGrid">
          {values.map((v) => (
            <div className="abtValue" key={v.index}>
              <span className="abtValueIndex">{v.index}</span>
              <h3 className="abtValueTitle">{v.title}</h3>
              <p className="abtValueDesc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="abtCta shell">
        <p className="svcCtaEyebrow">Ready to build?</p>
        <h2 className="svcCtaHeading">Let&apos;s create something remarkable.</h2>
        <div className="abtCtaButtons">
          <a className="primaryButton" href="mailto:support@winprofx.com">Start a conversation <span aria-hidden="true">&#8594;</span></a>
          <a className="secondaryButton" href="/services">View our services</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
