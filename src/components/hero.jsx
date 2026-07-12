import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)

  const roles = [
    "Unity Game Developer",
    "Gameplay Programmer",
    "Physics & Sim Enthusiast"
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
              I'm a <span className="animated-text">{roles[currentTextIndex]}</span>
            </h2>
            <p className="hero-description">
              Designing optimized gameplay loops, physics simulations, and immersive interactive mechanics. Specializing in C# and Unity engine systems.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="glowing-ring ring-1"></div>
              <div className="glowing-ring ring-2"></div>
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
                <div className="profile-overlay"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll Down</span>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          background: radial-gradient(circle at 75% 40%, rgba(102, 126, 234, 0.12) 0%, rgba(15, 20, 25, 0) 50%),
                      var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* Tech grid background overlay */
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(102, 126, 234, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(102, 126, 234, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: center;
          pointer-events: none;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
          z-index: 2;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--text-primary);
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .highlight {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 40px rgba(102, 126, 234, 0.2);
        }

        .hero-subtitle {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
        }

        .animated-text {
          color: var(--accent-primary);
          border-right: 3px solid var(--accent-primary);
          animation: blink 1s infinite;
          padding-right: 5px;
        }

        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: var(--accent-primary); }
        }

        .hero-description {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 550px;
        }

        .hero-buttons {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
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

        .glowing-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .glowing-ring.ring-1 {
          width: 380px;
          height: 380px;
          border: 2px dashed rgba(102, 126, 234, 0.25);
          animation: rotateClockwise 25s linear infinite;
        }

        .glowing-ring.ring-2 {
          width: 410px;
          height: 410px;
          border: 1px solid rgba(118, 75, 162, 0.15);
          box-shadow: 0 0 30px rgba(102, 126, 234, 0.1) inset,
                      0 0 30px rgba(102, 126, 234, 0.1);
          animation: pulseGlow 4s ease-in-out infinite alternate;
        }

        @keyframes rotateClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulseGlow {
          0% { transform: scale(0.96); opacity: 0.4; }
          100% { transform: scale(1.04); opacity: 0.8; }
        }

        .profile-container {
          position: relative;
          width: 330px;
          height: 330px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.35);
          animation: float 6s ease-in-out infinite;
          z-index: 1;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease;
        }

        .profile-container:hover .profile-image {
          transform: scale(1.05);
        }

        .profile-fallback {
          width: 100%;
          height: 100%;
          background: var(--accent-gradient);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
        }

        .fallback-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .fallback-text {
          font-size: 3rem;
          font-weight: 800;
        }

        .profile-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.08) 0%,
            rgba(118, 75, 162, 0.08) 100%
          );
          border-radius: 50%;
          pointer-events: none;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .scroll-arrow {
          width: 2px;
          height: 30px;
          background: var(--accent-primary);
          position: relative;
          animation: scroll 2s infinite;
        }

        .scroll-arrow::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -3px;
          width: 8px;
          height: 8px;
          border-right: 2px solid var(--accent-primary);
          border-bottom: 2px solid var(--accent-primary);
          transform: rotate(45deg);
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }

        @media (max-width: 1024px) {
          .hero-content {
            gap: 2.5rem;
          }

          .hero-title {
            font-size: 3.5rem;
          }

          .hero-subtitle {
            font-size: 1.8rem;
          }

          .profile-container {
            width: 300px;
            height: 300px;
          }

          .glowing-ring.ring-1 {
            width: 340px;
            height: 340px;
          }

          .glowing-ring.ring-2 {
            width: 370px;
            height: 370px;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .hero-title {
            font-size: 3rem;
          }

          .hero-subtitle {
            font-size: 1.6rem;
          }

          .hero-description {
            margin: 0 auto 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .glowing-ring {
            display: none;
          }

          .profile-container {
            width: 260px;
            height: 260px;
            margin: 0 auto;
          }

          .fallback-icon {
            font-size: 3rem;
          }

          .fallback-text {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.4rem;
          }

          .hero-subtitle {
            font-size: 1.3rem;
          }

          .profile-container {
            width: 220px;
            height: 220px;
          }

          .btn {
            width: 100%;
            max-width: 260px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
