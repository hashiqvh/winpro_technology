const services = ["Digital platforms", "Cloud solutions", "Product engineering"];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="WINPRO TECHNOLOGY home"><img src="/logo.png" alt="" className="brandMark" aria-hidden="true" /><span>WINPRO <b>TECHNOLOGY</b></span></a>
        <a className="navLink" href="mailto:support@winprotechnology.com">Contact us <span aria-hidden="true">&#8599;</span></a>
      </header>
      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Technology for what&apos;s next</div>
        <h1>We build digital<br /><em>possibilities.</em></h1>
        <p className="intro">WINPRO TECHNOLOGY creates reliable, modern digital solutions that help ambitious businesses move faster and operate smarter.</p>
        <a className="primaryButton" href="mailto:support@winprotechnology.com">Start a conversation <span aria-hidden="true">&#8594;</span></a>
        <div className="orbital" aria-hidden="true"><div className="orbit orbitOne" /><div className="orbit orbitTwo" /><div className="core"><img src="/logo.png" alt="" className="coreLogoImg" /></div><i className="dot dotOne" /><i className="dot dotTwo" /></div>
      </section>
      <section className="services shell" aria-label="Our capabilities">
        <p>Our capabilities</p>
        <div className="serviceList">{services.map((service, index) => <div className="service" key={service}><span>0{index + 1}</span><h2>{service}</h2></div>)}</div>
      </section>
      <footer>
        <div className="footerTop shell">
          <div><span className="footerLabel">Let&apos;s work together</span><a className="footerEmail" href="mailto:support@winprotechnology.com">support@winprotechnology.com</a></div>
          <address><span className="footerLabel">Office</span>Office No. 1003, owned by Naseema Tower Investment L.L.C.<br />Trade Centre 1, Dubai, UAE</address>
        </div>
        <div className="footerBottom shell"><span>© 2026 WINPRO TECHNOLOGY</span><span>Designed for progress.</span></div>
      </footer>
    </main>
  );
}
