const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Mobile App Development", href: "/services" },
  { label: "Website Development", href: "/services" },
  { label: "CRM Solutions", href: "/services" },
  { label: "Forex CRM", href: "/services" },
  { label: "Email Marketing", href: "/services" },
  { label: "Cloud & Infrastructure", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="footer">

      {/* Top marquee */}
      <div className="footerMarquee" aria-hidden="true">
        <div className="footerMarqueeTrack">
          {["Build", "Design", "Launch", "Scale", "Innovate", "Deliver", "Build", "Design", "Launch", "Scale", "Innovate", "Deliver"].map((word, i) => (
            <span key={i} className="footerMarqueeItem">{word}<span className="footerMarqueeDot">◆</span></span>
          ))}
        </div>
      </div>

      {/* Main footer body */}
      <div className="footerBody shell">

        {/* Brand column */}
        <div className="footerBrand">
          <a href="/" className="footerLogo" aria-label="WINPRO TECHNOLOGY home">
            <img src="/logo.png" alt="" className="footerLogoImg" aria-hidden="true" />
            <span>WINPRO<br /><b>TECHNOLOGY</b></span>
          </a>
          <p className="footerTagline">Technology for what&apos;s next. Building digital possibilities from Dubai to the world.</p>
          <div className="footerSocials">
            <a className="footerSocial" href="mailto:support@winprofx.com" aria-label="Email">✉</a>
            <a className="footerSocial" href="tel:+97144471894" aria-label="Phone">✆</a>
            <a className="footerSocial" href="https://wa.me/97144471894" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">◈</a>
          </div>
        </div>

        {/* Nav links */}
        <div className="footerCol">
          <span className="footerColLabel">Company</span>
          <ul className="footerColList">
            {navLinks.map((l) => (
              <li key={l.label}><a className="footerColLink" href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footerCol">
          <span className="footerColLabel">Services</span>
          <ul className="footerColList">
            {services.map((s) => (
              <li key={s.label}><a className="footerColLink" href={s.href}>{s.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footerCol">
          <span className="footerColLabel">Get in touch</span>
          <ul className="footerColList footerContactList">
            <li>
              <span className="footerContactMeta">Email</span>
              <a className="footerColLink" href="mailto:support@winprofx.com">support@winprofx.com</a>
            </li>
            <li>
              <span className="footerContactMeta">Phone</span>
              <a className="footerColLink" href="tel:+97144471894">+971 4 447 1894</a>
            </li>
            <li>
              <span className="footerContactMeta">WhatsApp</span>
              <a className="footerColLink" href="https://wa.me/97144471894" target="_blank" rel="noopener noreferrer">+971 4 447 1894</a>
            </li>
            <li>
              <span className="footerContactMeta">Office</span>
              <address className="footerAddress">Trade Centre 1,<br />Dubai, UAE</address>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footerBar shell">
        <span className="footerBarLeft">© 2026 WINPRO TECHNOLOGY — All rights reserved.</span>
        <span className="footerBarRight">Designed for progress.</span>
      </div>
    </footer>
  );
}
