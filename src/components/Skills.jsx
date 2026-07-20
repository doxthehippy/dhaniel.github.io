const groups = [
  {
    title: 'Languages & Frameworks',
    pills: ['C#', 'JavaScript', 'TypeScript', 'SQL', 'Python', 'Java', 'React', 'REST APIs'],
  },
  {
    title: 'Delivery & Operations',
    pills: ['CI/CD', 'Production support', 'Defect triage', 'Unit / integration / load testing', 'Quality reviews'],
  },
  {
    title: 'Domain: Human Services & Public Sector',
    pills: ['Eligibility workflows', 'Benefits processing', 'Case management', 'Onboarding & registration'],
  },
  {
    title: 'Collaboration',
    pills: ['Cross-functional communication', 'Client-facing requirements', 'Workstream ownership', 'Mentoring'],
  },
  {
    title: 'Product Ownership',
    pills: ['Backlog ownership', 'Scrum (PSPO I & II)', 'Stakeholder alignment', 'Scope & prioritization'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Skills</div>
            <h2>Toolkit</h2>
          </div>
        </div>
        <div className="skill-groups">
          {groups.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3>{g.title}</h3>
              <div className="pill-row">
                {g.pills.map((p) => <span className="pill" key={p}>{p}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
