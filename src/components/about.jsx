import { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '25+', label: 'Projects Completed' },
    { number: '100+', label: 'Hours of Code' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  const handleCVDownload = () => {
    const link = document.createElement('a')
    link.href = '/Shammas CV.pdf'
    link.download = 'Shammas_CV.pdf'
    link.click()
  }

  const handleGitHubVisit = () => {
    window.open('https://github.com/Shammas-satti-00', '_blank')
  }

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className={`about-text ${isVisible ? 'slide-in-left' : ''}`}>
            <div className="about-intro">
              <h3>Who I Am</h3>
              <p>
                I'm Shammas-ul-Islam, Computer Science graduate passionate about Unity, VR, and AI. I enjoy creating games, building prototypes, and experimenting with tech to bring ideas to life.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <h4>Background</h4>
                <p>
                  I've done my Bachelors in Computer Science (2021–2025) from PMAS Arid Agriculture University, Rawalpindi. Over the years, I've built a diverse set of skills through academic projects and self-driven learning—ranging from AI, mobile development, game development to full-stack web applications..My technical foundation includes languages like C++, C#, JavaScript, and Python, along with frameworks and tools such as Unity 3D, React.js, and Flask building interactive and intelligent systems.
                </p>
              </div>

              <div className="detail-item">
                <h4>Approach</h4>
                <p>
                  I approach development with a problem-solving mindset and a strong focus on clarity, efficiency, and real-world usability. Whether working solo or in teams, I prioritize communication, adaptability, and continuous learning to ensure the final product is both functional and future-proof.
                </p>
              </div>

              <div className="detail-item">
                <h4>Values</h4>
                <p>
                  Integrity: I believe in honest work and delivering quality results.
                </p>
                <p>
                  Growth: I strive to continuously improve and learn from every project or challenge.
                </p>
                <p>
                  Collaboration: Great ideas come from teamwork—I value open communication and knowledge-sharing.
                </p>
                <p>
                  Impact: I aim to build software that solves problems and adds value to users.
                </p>
              </div>

              <div className="about-actions">
                <button className="btn btn-primary" onClick={handleCVDownload}>
                  📄 Download CV
                </button>
                <button className="btn btn-secondary" onClick={handleGitHubVisit}>
                  🐙 Visit GitHub
                </button>
              </div>
            </div>
          </div>

          <div className={`about-stats ${isVisible ? 'slide-in-right' : ''}`}>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-highlights">
              <h4>What I Do Best</h4>
              <ul>
                <li>Game Development</li>
                <li>Unity 3D and OpenGL</li>
                <li>Designing intelligent AI Systems</li>
                <li>Performance Optimization</li>
                <li>Code Review & Best Practices</li>
                <li>Writing clean, maintainable, and scalable code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: var(--bg-secondary);
          padding: 100px 0;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text {
          opacity: 0;
          transform: translateX(-50px);
          animation: slideInLeft 0.8s ease forwards;
        }

        .about-intro h3 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .about-intro p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .about-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .detail-item h4 {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .detail-item p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .about-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .about-actions .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          padding: 0.8rem 1.5rem;
        }

        .about-stats {
          opacity: 0;
          transform: translateX(50px);
          animation: slideInRight 0.8s ease forwards;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 15px var(--shadow-light);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .about-highlights {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 15px var(--shadow-light);
        }

        .about-highlights h4 {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .about-highlights ul {
          list-style: none;
          padding: 0;
        }

        .about-highlights li {
          padding: 0.5rem 0;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.5rem;
        }

        .about-highlights li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-primary);
          font-weight: bold;
        }

        @media (max-width: 1024px) {
          .about-content {
            gap: 3rem;
          }

          .about-intro h3 {
            font-size: 2.2rem;
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .stat-card {
            padding: 1.5rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .about-actions {
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .about-actions .btn {
            font-size: 0.8rem;
            padding: 0.7rem 1.2rem;
          }

          .about-intro h3 {
            font-size: 2rem;
          }
        }

        @media (max-width: 640px) {
          .about-intro h3 {
            font-size: 1.8rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
          }

          .stat-card {
            padding: 1.2rem;
          }

          .stat-number {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .about-intro h3 {
            font-size: 1.8rem;
          }

          .about-actions {
            flex-direction: column;
            align-items: center;
          }

          .about-actions .btn {
            width: 100%;
            max-width: 250px;
          }

          .stat-card {
            padding: 1rem;
          }

          .stat-number {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 360px) {
          .about-intro h3 {
            font-size: 1.6rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .about-actions .btn {
            font-size: 0.75rem;
            padding: 0.6rem 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About
