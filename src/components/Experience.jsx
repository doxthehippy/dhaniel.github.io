const records = [
  {
    id: 'REC-00',
    role: 'Product Owner & Software Engineer',
    org: 'Davyn, Trinidad',
    status: 'active',
    dates: 'Jan 2026 \u2013 Present',
    bullets: [
      "Own backlog scope and priorities for the client's benefits and case-processing modules, translating business needs into actionable backlog items.",
      'Act as the bridge between client stakeholders and the delivery team, aligning functionality with business rules and delivery timelines.',
    ],
  },
  {
    id: 'REC-01',
    role: 'Software Engineer',
    org: 'Davyn, Trinidad',
    status: 'active',
    dates: 'Feb 2022 \u2013 Present',
    bullets: [
      'Support implementation, enhancement, operations, and maintenance of enterprise software systems with a focus on reliability, quality, and delivery timelines.',
      'Designed and developed a payment allocation platform for social security workflows, improving payment-to-credit mapping accuracy for businesses and insured individuals.',
      'Engineered a claims eligibility and case-management system to automate decisioning and improve case processing efficiency.',
      'Championed development of the Benefits module (sickness and retirement) and the CRP module as an individual contributor, from technical design through delivery.',
      'Built and maintained public-facing registration workflows to improve accessibility and reduce onboarding friction.',
      'Perform debugging, root-cause analysis, and issue resolution across new and legacy systems; escalate and track high-impact issues appropriately.',
      'Maintain CI/CD and release processes to support stable deployments and ongoing application support.',
      'Mentor junior team members and interns on debugging, agile execution, and development best practices.',
    ],
  },
  {
    id: 'REC-02',
    role: 'Software Developer Intern',
    org: 'Davyn, Trinidad',
    status: 'closed',
    dates: 'May 2021 \u2013 Aug 2021',
    bullets: [
      'Supported software development and maintenance for public-sector-oriented client projects.',
      'Developed a React-based application for a national insurance board.',
      'Researched and documented secure Azure B2C login practices.',
      'Performed QA testing and defect identification to improve release quality.',
    ],
  },
  {
    id: 'REC-03',
    role: 'Aviation Engineer Intern',
    org: 'LIAT (1974) Ltd, Antigua',
    status: 'closed',
    dates: 'Jul 2016 \u2013 Aug 2016',
    bullets: [
      'Performed maintenance on aircraft components, including safety-critical systems such as brakes, tires, and propellers.',
    ],
  },
];

function Record({ id, role, org, status, dates, bullets }) {
  return (
    <div className="record">
      <div className="record-head">
        <div className="record-title-group">
          <span className="record-id">{id}</span>
          <span className="record-role">{role}</span>
          <span className="record-org">&mdash; {org}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span className={`status-pill status-${status}`}>
            <span className="dot"></span>{status === 'active' ? 'Active' : 'Closed'}
          </span>
          <span className="record-dates">{dates}</span>
        </div>
      </div>
      <div className="record-body">
        <ul>
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Experience</div>
            <h2>Case history</h2>
          </div>
          <p className="section-note">
            Every role, read like a record &mdash; because that's the world I build for.
          </p>
        </div>
        {records.map((r) => <Record key={r.id} {...r} />)}
      </div>
    </section>
  );
}
