import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)

  const roles = [
    "Game Engineering",
    "Interactive Media",
    "Physics & Systems"
  ]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [roles.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Shammas</span>
            </h1>
            <h2 className="hero-subtitle">
              Specializing in <span className="animated-text">{roles[currentTextIndex]}</span>
            </h2>
            <p className="hero-description">
              A computer science graduate bridging the gap between rigorous game engineering and creative interactive design. Building optimized gameplay systems, immersive mechanics, and exploring the future of interactive media.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Explore My Work
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => window.open('https://github.com/Shammas-satti-00', '_blank')}
              >
                GitHub
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => window.open('https://www.linkedin.com/in/shammas-satti00/', '_blank')}
              >
                LinkedIn
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper float-anim">
              {/* Decorative accent blobs */}
              <div className="hero-dot hero-dot-1" />
              <div className="hero-dot hero-dot-2" />
              <div className="profile-container">
                {!imageError ? (
                  <img
                    src="/profile-image.jpeg"
                    alt="Shammas - Game Developer"
                    className="profile-image"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="profile-fallback">
                    <div className="fallback-icon">🎮</div>
                    <div className="fallback-text">SM</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: radial-gradient(var(--dot-color) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
          z-index: 2;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--text-primary);
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .highlight {
          color: var(--text-primary);
        }

        .hero-subtitle {
          font-size: 1.8rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          letter-spacing: -0.01em;
        }

        .animated-text {
          color: var(--text-primary);
          font-weight: 700;
          border-right: 2px solid var(--text-primary);
          animation: blink 1s infinite;
          padding-right: 4px;
        }

        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: var(--text-primary); }
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.75;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 520px;
          font-weight: 400;
        }

        .hero-buttons {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          font-family: var(--font-sans);
          transition: all 0.2s ease;
          border: 1px solid transparent;
          cursor: pointer;
          letter-spacing: -0.01em;
        }

        .btn-primary {
          background: var(--text-primary);
          color: white;
        }

        .btn-primary:hover {
          background: #334155;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .btn-secondary {
          background: var(--card-bg);
          color: var(--text-primary);
          border-color: var(--border-color);
        }

        .btn-secondary:hover {
          background: var(--bg-tertiary);
          border-color: #cbd5e1;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-container {
          position: relative;
          width: 380px; height: 380px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          z-index: 1;
          border: 6px solid white;
        }

        .profile-image {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          transition: transform 0.5s ease;
          border-radius: 18px;
        }

        .profile-container:hover .profile-image {
          transform: scale(1.03);
        }

        /* Decorative floating dots behind the photo */
        .hero-dot {
          position: absolute;
          border-radius: 50%;
          z-index: 0;
        }

        .hero-dot-1 {
          width: 80px; height: 80px;
          background: var(--border-color);
          top: -20px; right: -20px;
          animation: floatBob 5s 0.5s ease-in-out infinite;
        }

        .hero-dot-2 {
          width: 48px; height: 48px;
          background: #dde8f5;
          bottom: -16px; left: -16px;
          animation: floatBob 6s 1s ease-in-out infinite;
        }

        @keyframes floatBob {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        .profile-fallback {
          width: 100%; height: 100%;
          background: var(--bg-tertiary);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          color: var(--text-primary); font-weight: 700;
        }

        .fallback-icon { font-size: 4rem; margin-bottom: 1rem; }
        .fallback-text { font-size: 3rem; font-weight: 800; }

        .scroll-indicator {
          position: absolute;
          bottom: 40px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center;
          gap: 0.75rem; color: var(--text-muted);
          font-size: 0.75rem; font-family: var(--font-mono);
          letter-spacing: 0.1em; text-transform: uppercase;
        }

        .scroll-line {
          width: 1px; height: 40px;
          background: var(--border-color);
          position: relative; overflow: hidden;
        }

        .scroll-line::after {
          content: ''; position: absolute; top: 0; left: 0;
          width: 100%; height: 50%;
          background: var(--text-muted);
          animation: dropDown 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes dropDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }

        @media (max-width: 1024px) {
          .hero-content { gap: 2.5rem; }
          .hero-title { font-size: 3.5rem; }
          .hero-subtitle { font-size: 1.5rem; }
          .profile-container { width: 320px; height: 320px; }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center; gap: 3rem;
          }
          .hero-title { font-size: 3rem; }
          .hero-subtitle { font-size: 1.3rem; }
          .hero-description { margin: 0 auto 2.5rem; }
          .hero-buttons { justify-content: center; }
          .profile-container {
            width: 280px; height: 280px;
            margin: 0 auto; border-radius: 50%;
          }
          .profile-image { border-radius: 50%; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 2.4rem; }
          .hero-subtitle { font-size: 1.15rem; }
          .profile-container { width: 220px; height: 220px; }
          .btn { width: 100%; max-width: 280px; }
        }
      `}</style>
    </section>
  )
}

export default Hero
