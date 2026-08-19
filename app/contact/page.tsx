import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact — WINPRO TECHNOLOGY",
  description: "Get in touch with WINPRO TECHNOLOGY. Email, phone, WhatsApp or visit us in Dubai.",
};

const channels = [
  {
    index: "01",
    label: "Email",
    value: "support@winprofx.com",
    href: "mailto:support@winprofx.com",
    note: "We reply within one business day.",
  },
  {
    index: "02",
    label: "Phone",
    value: "+971 4 447 1894",
    href: "tel:+97144471894",
    note: "Sun – Thu, 9 am – 6 pm GST.",
  },
  {
    index: "03",
    label: "WhatsApp",
    value: "+971 4 447 1894",
    href: "https://wa.me/97144471894",
    note: "Fastest way to reach us.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <Nav active="contact" />

      <section className="ctcHero shell">
        <div className="eyebrow"><span /> Get in touch</div>
        <h1>Let&apos;s start a<br /><em>conversation.</em></h1>
        <p className="intro">Whether you have a project in mind, a question about our services, or just want to say hello — we&apos;d love to hear from you.</p>
      </section>

      <section className="ctcChannels shell" aria-label="Contact channels">
        {channels.map((ch) => (
          <a className="ctcChannel" href={ch.href} key={ch.index} target={ch.href.startsWith("https") ? "_blank" : undefined} rel={ch.href.startsWith("https") ? "noopener noreferrer" : undefined}>
            <span className="ctcIndex">{ch.index}</span>
            <span className="ctcLabel">{ch.label}</span>
            <span className="ctcValue">{ch.value}</span>
            <span className="ctcNote">{ch.note}</span>
            <span className="ctcArrow" aria-hidden="true">&#8599;</span>
          </a>
        ))}
      </section>

      <section className="ctcAddress shell">
        <div className="ctcAddressLeft">
          <div className="eyebrow"><span /> Our office</div>
          <h2 className="abtH2">Dubai, UAE.</h2>
          <address className="ctcAddressBlock">
            Office No. 1003<br />
            Naseema Tower Investment L.L.C.<br />
            Trade Centre 1<br />
            Dubai, United Arab Emirates
          </address>
          <p className="ctcOfficeNote">We work with clients globally. Remote collaboration is no problem.</p>
        </div>
        <div className="ctcMapPlaceholder" aria-hidden="true">
          <div className="ctcMapGrid">
            {Array.from({length: 20}).map((_, i) => <span key={i} />)}
          </div>
          <div className="ctcMapPin">
            <span>◎</span>
            <span className="ctcMapLabel">WINPRO TECHNOLOGY</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
