import { useState, useEffect } from 'react'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 }
    )
    const element = document.getElementById('experience')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      role: 'Unity Game Developer',
      company: 'Plasma IT Solutions',
      location: 'Rawalpindi, Pakistan',
      period: 'Apr 2026 – Jul 2026',
      type: 'Full-time',
      color: '#3b82f6',
      icon: '✈️',
      tags: ['Unity 3D', 'C#', 'Physics Sim', 'Flight Controls'],
      points: [
        'Developed flight simulation systems including aircraft controls and physics-based movement.',
        'Built gameplay features such as missions, checkpoints, and navigation mechanics.',
        'Optimized large open-world environments for smooth performance during high-speed gameplay.',
        'Debugged and refined gameplay loops to improve responsiveness and overall player experience.',
      ],
    },
    {
      role: 'Game Developer Intern',
      company: 'Veeivs',
      location: 'Islamabad, Pakistan',
      period: 'Oct 2025 – Dec 2025',
      type: 'Internship',
      color: '#06b6d4',
      icon: '🎮',
      tags: ['Unity', 'C#', 'Photon PUN', 'Optimization'],
      points: [
        'Built core gameplay systems in Unity from the ground up.',
        'Implemented modular weapon systems with rotation, cooldowns, and firing visual effects.',
        'Created and optimized 3D environments using chunk-based level layouts.',
        'Debugged gameplay issues using Unity Profiler, logs, and structured testing pipelines.',
      ],
    },
  ]

  return (
    <section id="experience" className="exp-section">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Professional game development roles where I shipped real products and contributed to live titles.
        </p>

        <div className={`exp-timeline ${isVisible ? 'timeline-visible' : ''}`}>
          {/* Vertical connector line */}
          <div className="timeline-track">
            <div className="timeline-track-fill"></div>
          </div>

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`exp-item ${isVisible ? 'exp-visible' : ''}`}
              style={{ animationDelay: `${i * 0.18}s` }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Badge */}
              <div className="exp-badge" style={{ '--badge-color': exp.color }}>
                <span className="badge-icon">{exp.icon}</span>
              </div>

              {/* Card */}
              <div className={`exp-card ${activeIndex === i ? 'exp-card-active' : ''}`}>

                {/* Type pill */}
                <span className="exp-type-pill">{exp.type}</span>

                <div className="exp-card-header">
                  <div>
                    <span className="exp-period">{exp.period}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company-row">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-dot">·</span>
                      <span className="exp-location">📍 {exp.location}</span>
                    </p>
                  </div>
                </div>

                <ul className="exp-points">
                  {exp.points.map((pt, pi) => (
                    <li key={pi}>{pt}</li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {exp.tags.map((t, ti) => (
                    <span key={ti} className="exp-tag" style={{ '--tag-color': exp.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .exp-section {
          background: var(--bg-secondary);
          padding: 70px 0;
        }

        /* ── Timeline wrapper ── */
        .exp-timeline {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
          padding-left: 60px;
        }

        .timeline-track {
          position: absolute;
          left: 20px;
          top: 16px;
          bottom: 16px;
          width: 2px;
          background: var(--border-color);
          overflow: hidden;
        }

        .timeline-track-fill {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 0%;
          background: var(--accent-gradient);
          transition: height 1.2s ease;
        }

        .timeline-visible .timeline-track-fill {
          height: 100%;
        }

        /* ── Each item ── */
        .exp-item {
          position: relative;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(32px);
          animation: none;
        }

        .exp-visible {
          animation: expFadeIn 0.65s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes expFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Badge dot ── */
        .exp-badge {
          position: absolute;
          left: -47px;
          top: 24px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 2px solid var(--badge-color, var(--accent-primary));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          z-index: 1;
          box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.04),
                      0 0 20px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .exp-item:hover .exp-badge {
          transform: scale(1.2);
          box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.06),
                      0 0 28px rgba(0, 0, 0, 0.1);
        }

        /* ── Card ── */
        .exp-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .exp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 3px;
          background: var(--accent-gradient);
          border-radius: 3px 0 0 3px;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .exp-card-active {
          transform: translateY(-4px);
          border-color: var(--border-glow);
          box-shadow: 0 20px 50px var(--shadow-medium),
                      0 0 0 1px var(--border-glow),
                      0 0 40px var(--shadow-glow);
        }

        .exp-card-active::before { opacity: 1; }

        .exp-type-pill {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--bg-tertiary);
          color: var(--accent-secondary);
          border: 1px solid var(--border-color);
          padding: 3px 10px;
          border-radius: 20px;
        }

        .exp-card-header { margin-bottom: 1.25rem; }

        .exp-period {
          display: block;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.4rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .exp-role {
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
          letter-spacing: -0.02em;
        }

        .exp-company-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.95rem;
        }

        .exp-company {
          font-weight: 600;
          color: var(--text-secondary);
        }

        .exp-dot {
          color: var(--border-color);
        }

        .exp-location {
          color: var(--text-muted);
          font-size: 0.88rem;
        }

        .exp-points {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .exp-points li {
          position: relative;
          padding-left: 1.6rem;
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .exp-points li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--accent-primary);
          font-size: 0.85rem;
          top: 1px;
        }

        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-tag {
          font-size: 0.76rem;
          font-weight: 500;
          padding: 3px 11px;
          border-radius: 20px;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          font-family: 'JetBrains Mono', monospace;
          transition: all 0.2s ease;
        }

        .exp-card:hover .exp-tag {
          background: var(--bg-tertiary);
          border-color: #cbd5e1;
        }

        @media (max-width: 768px) {
          .exp-timeline { padding-left: 48px; }
          .exp-badge { left: -38px; }
          .exp-role { font-size: 1.2rem; }
          .exp-card { padding: 1.5rem; }
          .exp-company-row { flex-direction: column; gap: 0.2rem; }
          .exp-type-pill { display: none; }
        }

        @media (max-width: 480px) {
          .exp-timeline { padding-left: 36px; }
          .exp-badge { left: -28px; width: 28px; height: 28px; font-size: 0.85rem; }
          .exp-card { padding: 1.2rem; }
          .exp-role { font-size: 1.1rem; }
          .timeline-track { left: 14px; }
        }
      `}</style>
    </section>
  )
}

export default Experience
