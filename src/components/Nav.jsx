export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-mark"><span className="dot"></span>D. Ramdath</a>
        <nav className="links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#credentials">Credentials</a>
        </nav>
        <a className="nav-cta" href="mailto:dhanielramdath@gmail.com">Get in touch</a>
      </div>
    </header>
  );
}
