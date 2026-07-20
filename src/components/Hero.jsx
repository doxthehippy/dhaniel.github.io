import headshot from '../assets/headshot.jpg';

export default function Hero() {
  return (
    <section className="hero" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="wrap hero-inner">
        <div>
          <div className="eyebrow">Software Engineer · Couva, Trinidad &amp; Tobago</div>
          <h1>Building dependable systems for <em>real people</em>, not just databases.</h1>
          <p className="hero-sub">I design and maintain full-stack software for human-services workflows — eligibility, case management, benefits processing, and public-facing registration — where accuracy and uptime aren't optional.</p>
          <div className="hero-meta">
            <span>📍 Couva, Trinidad and Tobago</span>
            <span>✉️ dhanielramdath@gmail.com</span>
            <span>☎ +1 (868) 705-3456</span>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:dhanielramdath@gmail.com">Email me</a>
            <a className="btn btn-outline" href="https://www.linkedin.com/in/dhanielr/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="portrait">
          <div className="portrait-frame">
            <img src={headshot} alt="Portrait of Dhaniel Ramdath" />
          </div>
          <div className="portrait-tag">EMP · 2022–PRESENT</div> 
        </div>
      </div>
    </section>
  );
}
