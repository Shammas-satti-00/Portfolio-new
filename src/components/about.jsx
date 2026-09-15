import { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    const element = document.getElementById('about')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const coreDomains = [
    { title: 'Gameplay Systems', desc: 'Responsive player mechanics, modular weapons, and core game loops.', icon: '🎮', color: '#0f172a' },
    { title: 'Physics & Simulation', desc: 'Realistic flight controls, physics movement, and environment checkpoints.', icon: '✈️', color: '#3b82f6' },
    { title: 'Optimization', desc: 'Maximizing framerates, reducing GC overhead, and profiling memory.', icon: '⚡', color: '#f59e0b' },
    { title: 'Multiplayer Dev', desc: 'Online lobbies and real-time state sync using Photon PUN.', icon: '🌐', color: '#10b981' },
  ]

  const highlights = [
    'Game Development & Unity 3D',
    'OpenGL & Custom Rendering',
    'Intelligent AI Systems',
    'Performance Optimization',
    'Clean, Scalable Architecture',
    'Code Review & Best Practices',
  ]

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          CS graduate turned gameplay engineer — building real systems that ship.
        </p>

        <div className="about-layout">

          {/* ── Left Column ── */}
          <div className={`about-left ${isVisible ? 'about-anim-left' : ''}`}>
            <div className="about-bio-card">
              <div className="bio-label">Who I Am</div>
              <h3 className="bio-heading">
                Crafting <span>immersive</span> experiences through code.
              </h3>
              <p className="bio-body">
                I'm Shammas-ul-Islam, a Computer Science graduate passionate about Unity game development, 3D graphics, and game physics. I enjoy designing systems, building gameplay prototypes, and creating optimized interactive experiences.
              </p>
              <p className="bio-body">
                My technical foundation spans C++, C#, JavaScript, and Python, alongside frameworks like Unity 3D, React.js, and Flask, bridging gameplay engineering with modern software practices.
              </p>

              {/* Info chips */}
              <div className="bio-chips">
                <div className="bio-chip">
                  <span className="chip-icon">🎓</span>
                  <span>BS Computer Science — PMAS Arid University</span>
                </div>
                <div className="bio-chip">
                  <span className="chip-icon">📍</span>
                  <span>Islamabad, Pakistan</span>
                </div>
                <div className="bio-chip">
                  <span className="chip-icon">💼</span>
                  <span>Open to Game Dev Opportunities</span>
                </div>
              </div>

              <div className="about-actions">
                <button className="btn btn-primary" onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/Shammas CV.pdf'
                  link.download = 'Shammas_CV.pdf'
                  link.click()
                }}>
                  📄 Download Resume
                </button>
                <button className="btn btn-primary europass-btn" onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/Eurpass Cv.pdf'
                  link.download = 'Eurpass Cv.pdf'
                  link.click()
                }}>
                  🇪🇺 Download Europass CV
                </button>
                <button className="btn btn-secondary" onClick={() => window.open('https://github.com/Shammas-satti-00', '_blank')}>
                  GitHub Profile
                </button>
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className={`about-right ${isVisible ? 'about-anim-right' : ''}`}>

            {/* Domain cards */}
            <div className="domains-grid">
              {coreDomains.map((domain, i) => (
                <div
                  key={i}
                  className="domain-card"
                  style={{ '--card-color': domain.color }}
                >
                  <div className="domain-icon-wrap">
                    <span className="domain-icon">{domain.icon}</span>
                  </div>
                  <h4 className="domain-title">{domain.title}</h4>
                  <p className="domain-desc">{domain.desc}</p>
                </div>
              ))}
            </div>

            {/* Highlights list */}
            <div className="highlights-card">
              <h4 className="highlights-heading">What I Do Best</h4>
              <ul className="highlights-list">
                {highlights.map((item, i) => (
                  <li key={i}>
                    <span className="hl-check">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: var(--bg-primary);
          padding: 80px 0;
          align-items: flex-start;
        }

        /* ── Grid layout ── */
        .about-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: start;
        }

        /* ── Animations ── */
        .about-left {
          opacity: 0;
          transform: translateX(-20px);
        }
        .about-anim-left {
          animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .about-right {
          opacity: 0;
          transform: translateX(20px);
        }
        .about-anim-right {
          animation: slideInRight 0.6s 0.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideInLeft { to { opacity:1; transform: translateX(0); } }
        @keyframes slideInRight { to { opacity:1; transform: translateX(0); } }

        /* ── Bio Card ── */
        .about-bio-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .about-bio-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--text-primary);
        }

        .bio-label {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          font-family: var(--font-mono);
          margin-bottom: 1.25rem;
        }

        .bio-heading {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.3;
          margin-bottom: 1.2rem;
        }

        .bio-heading span {
          color: var(--text-primary);
          -webkit-text-fill-color: unset;
        }

        .bio-body {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 1rem;
        }

        .bio-chips {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin: 1.5rem 0;
          padding: 1.25rem;
          background: var(--bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .bio-chip {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .chip-icon {
          font-size: 1rem;
          flex-shrink: 0;
        }

        .about-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        /* ── Domain Cards ── */
        .domains-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .domain-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.25rem;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .domain-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--text-primary);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .domain-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
          border-color: #cbd5e1;
        }

        .domain-card:hover::after { opacity: 1; }

        .domain-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
        }

        .domain-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
          font-family: var(--font-sans);
          letter-spacing: -0.01em;
        }

        .domain-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.5;
          font-family: var(--font-sans);
        }

        /* ── Highlights ── */
        .highlights-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .highlights-heading {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
          padding-bottom: 0.7rem;
          border-bottom: 1px solid var(--border-color);
          font-family: var(--font-sans);
          letter-spacing: -0.01em;
        }

        .highlights-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem;
        }

        .highlights-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
          padding: 0.25rem 0;
        }

        .hl-check {
          color: var(--text-muted);
          font-size: 0.7rem;
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .about-layout { gap: 2rem; }
        }

        @media (max-width: 768px) {
          .about-layout { grid-template-columns: 1fr; }
          .about-right { order: -1; }
          .bio-heading { font-size: 1.5rem; }
          .highlights-list { grid-template-columns: 1fr; }
          .about-actions { justify-content: center; }
        }

        @media (max-width: 480px) {
          .about-bio-card { padding: 1.5rem; }
          .bio-heading { font-size: 1.3rem; }
          .domains-grid { grid-template-columns: 1fr; }
          .about-actions { flex-direction: column; }
          .about-actions .btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}

export default About
