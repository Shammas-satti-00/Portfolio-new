import { useState, useEffect } from 'react'

const Bootcamps = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 }
    )
    const element = document.getElementById('bootcamps')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const bootcamps = [
    {
      id: 1,
      title: 'Game Design Bootcamp & Game Jam',
      issuer: 'The Burujan Technologies',
      date: 'May 10, 2026',
      badge: 'Certificate of Achievement',
      certId: 'GDB-2026-001',
      certificateUrl: '/bootcamp.pdf',
      verifyUrl: 'https://theburujan.tech/verify/GDB-2026-001',
      icon: '🏆',
      color: '#3b82f6',
      description:
        'Successfully completed an intensive Game Design Bootcamp & Game Jam, conquering a 2-hour rapid game development challenge that demonstrated creativity, game design thinking, and high-pressure execution.',
      highlights: [
        'Conducted rapid prototyping to build a playable 3D game in Unity within a strict 2-hour time constraint.',
        'Applied game design thinking and creative problem-solving from initial concept to playable mechanics.',
        'Iterated on player controls, basic physics, and core gameplay loops under rapid turnaround.',
      ],
      tags: ['Unity 3D', 'Rapid Prototyping', 'Game Design Thinking', 'Game Jam Challenge', 'Creative Problem Solving'],
    },
  ]

  return (
    <section id="bootcamps" className="bootcamps-section">
      <div className="section-container">
        <h2 className="section-title">Bootcamps & Game Jams</h2>
        <p className="section-subtitle">
          Intensive training programs and competitive hackathons demonstrating rapid prototyping, design thinking, and speed.
        </p>

        <div className={`bootcamps-grid ${isVisible ? 'bootcamps-visible' : ''}`}>
          {bootcamps.map((item) => (
            <div key={item.id} className="bootcamp-card">
              <div className="bootcamp-header">
                <div className="bootcamp-brand">
                  <div className="bootcamp-icon-wrap" style={{ '--accent-color': item.color }}>
                    <span className="bootcamp-icon">{item.icon}</span>
                  </div>
                  <div>
                    <span className="bootcamp-issuer">{item.issuer}</span>
                    <h3 className="bootcamp-title">{item.title}</h3>
                  </div>
                </div>

                <div className="bootcamp-meta">
                  <span className="bootcamp-badge">{item.badge}</span>
                  <span className="bootcamp-date">📅 {item.date}</span>
                </div>
              </div>

              <p className="bootcamp-desc">{item.description}</p>

              <div className="bootcamp-highlights">
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <span className="highlight-dot">▸</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="bootcamp-footer">
                <div className="bootcamp-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bootcamp-tag">{tag}</span>
                  ))}
                </div>

                <div className="bootcamp-actions">
                  {item.certId && (
                    <span className="cert-id-tag">ID: {item.certId}</span>
                  )}
                  {item.certificateUrl && (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cert btn-primary-cert"
                    >
                      <span>📜</span>
                      <span>View Certificate</span>
                      <span className="btn-arrow">↗</span>
                    </a>
                  )}
                  {item.verifyUrl && (
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cert btn-verify-cert"
                    >
                      <span>🔍</span>
                      <span>Verify Online</span>
                      <span className="btn-arrow">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bootcamps-section {
          background: var(--bg-primary);
          padding: 80px 0;
          position: relative;
        }

        .section-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 0.75rem;
        }

        .section-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 650px;
          line-height: 1.6;
        }

        .bootcamps-grid {
          opacity: 0;
          transform: translateY(25px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .bootcamps-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .bootcamp-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2.25rem;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-light);
        }

        .bootcamp-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-glow);
          box-shadow: var(--shadow-medium);
        }

        .bootcamp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .bootcamp-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .bootcamp-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          flex-shrink: 0;
        }

        .bootcamp-issuer {
          display: block;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--accent-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.25rem;
        }

        .bootcamp-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          line-height: 1.25;
          margin: 0;
        }

        .bootcamp-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.4rem;
        }

        .bootcamp-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: #10b981;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .bootcamp-date {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .bootcamp-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .bootcamp-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.25rem;
          margin-bottom: 1.75rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .highlight-dot {
          color: var(--accent-secondary);
          font-size: 0.85rem;
          margin-top: 1px;
        }

        .bootcamp-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }

        .bootcamp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .bootcamp-tag {
          font-size: 0.72rem;
          font-weight: 600;
          font-family: var(--font-mono);
          padding: 3px 9px;
          border-radius: 6px;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .bootcamp-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .cert-id-tag {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          background: var(--bg-secondary);
          padding: 4px 8px;
          border-radius: 6px;
          border: 1px solid var(--border-color);
        }

        .btn-cert {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          font-size: 0.82rem;
          font-weight: 600;
          font-family: var(--font-sans);
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .btn-primary-cert {
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
          border: 1px solid var(--btn-primary-bg);
        }

        .btn-primary-cert:hover {
          background: var(--btn-primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .btn-verify-cert {
          background: var(--bg-secondary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .btn-verify-cert:hover {
          background: var(--bg-tertiary);
          border-color: var(--accent-secondary);
          color: var(--accent-secondary);
          transform: translateY(-2px);
        }

        .btn-arrow {
          font-size: 0.85rem;
          transition: transform 0.2s ease;
        }

        .btn-cert:hover .btn-arrow {
          transform: translate(2px, -2px);
        }

        /* ── Dark Mode Tweaks ── */
        [data-theme="dark"] .bootcamp-card {
          background: #141416;
          border-color: #27272a;
        }

        [data-theme="dark"] .bootcamp-highlights {
          background: #18181b;
          border-color: #27272a;
        }

        [data-theme="dark"] .bootcamp-icon-wrap,
        [data-theme="dark"] .bootcamp-tag,
        [data-theme="dark"] .cert-id-tag {
          background: #18181b;
          border-color: #27272a;
        }

        [data-theme="dark"] .btn-primary-cert {
          background: #f1f5f9;
          color: #09090b;
          border-color: #f1f5f9;
        }

        [data-theme="dark"] .btn-primary-cert:hover {
          background: #e2e8f0;
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.15);
        }

        [data-theme="dark"] .btn-verify-cert {
          background: #18181b;
          color: #f1f5f9;
          border-color: #27272a;
        }

        [data-theme="dark"] .btn-verify-cert:hover {
          background: #27272a;
          border-color: #60a5fa;
          color: #60a5fa;
        }

        @media (max-width: 768px) {
          .bootcamp-header {
            flex-direction: column;
            gap: 1rem;
          }
          .bootcamp-meta {
            align-items: flex-start;
          }
          .bootcamp-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .bootcamp-actions {
            width: 100%;
          }
          .btn-cert {
            flex: 1;
            justify-content: center;
          }
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Bootcamps
