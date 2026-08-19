export default function Footer() {
  return (
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
  );
}
