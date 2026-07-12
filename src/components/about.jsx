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
    { title: 'Gameplay Systems', desc: 'Responsive player mechanics, modular weapons, and core game loops.', icon: '🎮', color: '#667eea' },
    { title: 'Physics & Simulation', desc: 'Realistic flight controls, physics movement, and environment checkpoints.', icon: '✈️', color: '#06b6d4' },
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
          padding: 70px 0;
          align-items: flex-start;
        }

        /* ── Grid layout ── */
        .about-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          align-items: start;
        }

        /* ── Animations ── */
        .about-left {
          opacity: 0;
          transform: translateX(-36px);
        }
        .about-anim-left {
          animation: slideInLeft 0.75s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .about-right {
          opacity: 0;
          transform: translateX(36px);
        }
        .about-anim-right {
          animation: slideInRight 0.75s 0.15s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slideInLeft { to { opacity:1; transform: translateX(0); } }
        @keyframes slideInRight { to { opacity:1; transform: translateX(0); } }

        /* ── Bio Card ── */
        .about-bio-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2.4rem;
          position: relative;
          overflow: hidden;
        }

        .about-bio-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--accent-gradient);
        }

        .bio-label {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-primary);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(102, 126, 234, 0.1);
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 1rem;
        }

        .bio-heading {
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.25;
          margin-bottom: 1.2rem;
        }

        .bio-heading span {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bio-body {
          font-size: 0.97rem;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 1rem;
        }

        .bio-chips {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin: 1.5rem 0;
          padding: 1.2rem;
          background: var(--bg-tertiary);
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .bio-chip {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .chip-icon {
          font-size: 1rem;
          flex-shrink: 0;
        }

        .about-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        /* ── Domain Cards ── */
        .domains-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .domain-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 1.25rem;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .domain-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--card-color, var(--accent-primary));
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .domain-card:hover {
          transform: translateY(-5px);
          border-color: var(--card-color, var(--accent-primary));
          box-shadow: 0 16px 40px var(--shadow-medium),
                      0 0 0 1px color-mix(in srgb, var(--card-color, var(--accent-primary)) 20%, transparent);
        }

        .domain-card:hover::after { opacity: 1; }

        .domain-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--bg-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          margin-bottom: 0.8rem;
        }

        .domain-title {
          font-size: 0.97rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .domain-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* ── Highlights ── */
        .highlights-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 1.5rem;
        }

        .highlights-heading {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
          padding-bottom: 0.7rem;
          border-bottom: 1px solid var(--border-color);
        }

        .highlights-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }

        .highlights-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.87rem;
          color: var(--text-secondary);
          padding: 0.3rem 0;
        }

        .hl-check {
          color: var(--accent-primary);
          font-size: 0.75rem;
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .about-layout { gap: 2.5rem; }
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
