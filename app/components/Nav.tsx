type NavProps = { active?: "services" | "about" | "contact" };

export default function Nav({ active }: NavProps) {
  return (
    <header className="nav shell">
      <a className="brand" href="/" aria-label="WINPRO TECHNOLOGY home">
        <img src="/logo.png" alt="" className="brandMark" aria-hidden="true" />
        <span>WINPRO <b>TECHNOLOGY</b></span>
      </a>
      <nav className="navLinks">
        <a className={`navLink${active === "services" ? " navLinkActive" : ""}`} href="/services">Services</a>
        <a className={`navLink${active === "about" ? " navLinkActive" : ""}`} href="/about">About</a>
        <a className={`navLink${active === "contact" ? " navLinkActive" : ""}`} href="/contact">Contact us <span aria-hidden="true">&#8599;</span></a>
      </nav>
    </header>
  );
}
