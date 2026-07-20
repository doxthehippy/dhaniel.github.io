const careerStart = new Date(2021, 5, 1);

function getExperienceYears() {
  const now = new Date();
  const years = now.getFullYear() - careerStart.getFullYear();
  const anniversaryPassed =
    now.getMonth() > careerStart.getMonth() ||
    (now.getMonth() === careerStart.getMonth() && now.getDate() >= careerStart.getDate());

  return anniversaryPassed ? years : years - 1;
}

export default function About() {
  const experienceYears = getExperienceYears();

  return (
    <section id="about">
      <div className="wrap about-grid">
        <div>
          <div className="section-label" style={{ marginBottom: 14 }}>About</div>
          <h2 style={{ marginBottom: 20 }}>A steady hand on high-stakes systems.</h2>
          <p>I'm a software engineer with hands-on experience delivering and supporting human-services-focused software — the kind that determines whether someone's benefits get processed correctly or their case moves forward on time. That responsibility shapes how I work: careful testing, clear communication with stakeholders, and calm execution under multi-workstream deadlines.</p>
          <p>My background spans full-stack development, operations support, and production maintenance in public-sector-style environments, with a track record of translating business rules into reliable software and mentoring newer engineers along the way.</p>
        </div>
        <div className="stat-list">
          <div className="stat-item"><span className="n">{experienceYears}+ yrs</span><span className="l">Professional software engineering experience</span></div>
          <div className="stat-item"><span className="n">6</span><span className="l">Certifications: PSPO I &amp; II plus 4 Microsoft Power Platform credentials</span></div>
          <div className="stat-item"><span className="n">3</span><span className="l">Major systems designed &amp; delivered: payments, eligibility, registration</span></div>
          <div className="stat-item"><span className="n">1</span><span className="l">BSc Computer Science with Management, Upper Second-Class Honours</span></div>
        </div>
      </div>
    </section>
  );
}
