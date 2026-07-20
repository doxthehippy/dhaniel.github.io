const certs = [
  { name: 'Professional Scrum Product Owner I', code: 'PSPO I' },
  { name: 'Professional Scrum Product Owner II', code: 'PSPO II' },
  { name: 'Power Platform App Maker Associate', code: 'PL-100' },
  { name: 'Power Platform Functional Consultant Associate', code: 'PL-200' },
  { name: 'Power Platform Developer Associate', code: 'PL-400' },
  { name: 'Power Platform Solution Architect Expert', code: 'PL-600' },
];

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Credentials</div>
            <h2>Education &amp; certifications</h2>
          </div>
        </div>
        <div className="cred-grid">
          <div className="edu-card">
            <div className="edu-degree">BSc Computer Science with Management</div>
            <div className="edu-school">The University of the West Indies, St. Augustine</div>
            <div className="edu-meta">
              <span>Upper Second-Class Honours</span>
              <span>Dec 2021</span>
            </div>
          </div>
          <div className="cred-list">
            {certs.map((c) => (
              <div className="cred-item" key={c.code}>
                <span className="cred-name">{c.name}</span>
                <span className="cred-code">{c.code}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
