const projects = [
  {
    id: 'SYS-01',
    title: 'Payment Allocation Platform',
    desc: 'A platform for social security workflows that maps incoming payments to the correct credits, improving accuracy for both businesses and insured individuals.',
    tags: ['C#', 'SQL', 'REST APIs'],
  },
  {
    id: 'SYS-02',
    title: 'Claims Eligibility & Case Management',
    desc: 'A system that automates eligibility decisioning and case processing, reducing manual review time and improving consistency across cases.',
    tags: ['C#', 'TypeScript', 'SQL'],
  },
  {
    id: 'SYS-03',
    title: 'Public Registration Workflow',
    desc: 'A public-facing registration and onboarding flow built to reduce friction and improve accessibility for first-time users.',
    tags: ['React', 'JavaScript', 'REST APIs'],
  },
  {
    id: 'SYS-04',
    title: 'National Insurance Board Application',
    desc: 'A React-based application built during my internship, paired with research into secure Azure B2C authentication practices.',
    tags: ['React', 'Azure B2C', 'QA Testing'],
  },
  {
    id: 'SYS-05',
    title: 'In-Memory Unit Testing Framework',
    desc: "Built a testing framework that runs Azure Functions and webhooks entirely in memory, removing the need for a live Dataverse connection during unit tests and speeding up the team's test cycles.",
    tags: ['Azure Functions', 'C#', 'Dataverse', 'Unit Testing'],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Projects</div>
            <h2>Selected systems</h2>
          </div>
          <p className="section-note">Delivered as part of client engagements at Davyn — described generally to respect client confidentiality.</p>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.id}>
              <div className="project-top">
                <span className="project-id">{p.id}</span>
              </div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="tag-row">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
