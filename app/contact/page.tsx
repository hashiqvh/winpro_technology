"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const services = [
  "Mobile App Development",
  "Website Development",
  "CRM Solutions",
  "Forex CRM",
  "Email Marketing",
  "Cloud & Infrastructure",
  "Other / Not sure yet",
];

const channels = [
  { index: "01", label: "Email", value: "support@winprofx.com", href: "mailto:support@winprofx.com", note: "We reply within one business day." },
  { index: "02", label: "Phone", value: "+971 4 447 1894", href: "tel:+97144471894", note: "Sun – Thu, 9 am – 6 pm GST." },
  { index: "03", label: "WhatsApp", value: "+971 4 447 1894", href: "https://wa.me/97144471894", note: "Fastest way to reach us." },
];

function ContactForm() {
  const params = useSearchParams();
  const preSelected = params.get("service") ?? "";

  return (
    <form
      className="ctcForm"
      action={`mailto:support@winprofx.com`}
      method="GET"
      encType="text/plain"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = fd.get("name");
        const email = fd.get("email");
        const service = fd.get("service");
        const message = fd.get("message");
        const subject = encodeURIComponent(`Quote request: ${service}`);
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`
        );
        window.location.href = `mailto:support@winprofx.com?subject=${subject}&body=${body}`;
      }}
    >
      <div className="ctcFormRow">
        <label className="ctcLabel">
          <span>Your name</span>
          <input className="ctcInput" name="name" type="text" placeholder="John Smith" required />
        </label>
        <label className="ctcLabel">
          <span>Email address</span>
          <input className="ctcInput" name="email" type="email" placeholder="you@company.com" required />
        </label>
      </div>
      <label className="ctcLabel">
        <span>Service you&apos;re interested in</span>
        <select className="ctcInput ctcSelect" name="service" defaultValue={preSelected}>
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="ctcLabel">
        <span>Tell us about your project</span>
        <textarea className="ctcInput ctcTextarea" name="message" rows={5} placeholder="What are you building? What's your timeline and budget?" required />
      </label>
      <button className="primaryButton ctcSubmit" type="submit">
        Send message <span aria-hidden="true">&#8594;</span>
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main>
      <Nav active="contact" />

      <section className="ctcHero shell">
        <div className="eyebrow"><span /> Get in touch</div>
        <h1>Let&apos;s start a<br /><em>conversation.</em></h1>
        <p className="intro">Whether you have a project in mind, a question about our services, or just want to say hello — we&apos;d love to hear from you.</p>
      </section>

      {/* Contact channels */}
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

      {/* Form */}
      <section className="ctcFormSection shell">
        <div className="ctcFormLeft">
          <div className="eyebrow"><span /> Send a message</div>
          <h2 className="abtH2">Get a quote<br />or say hello.</h2>
          <p className="ctcFormNote">Fill in the form and we&apos;ll open your email client with everything pre-filled — ready to send in one click.</p>
        </div>
        <Suspense fallback={<div className="ctcForm" />}>
          <ContactForm />
        </Suspense>
      </section>

      {/* Office */}
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
          <div className="ctcMapGrid">{Array.from({length: 20}).map((_, i) => <span key={i} />)}</div>
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
