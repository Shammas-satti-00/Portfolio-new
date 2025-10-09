import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)

  const roles = [
    "Game Developer",
    "Problem Solver",
    "Creative Thinker"
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
              Passionate about creating intelligent and immersive worlds where game development meets artificial intelligence and innovation.
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
            <div className="hero-image">
              <div className="profile-container">
                {!imageError ? (
                  <img 
                    src="/profile-image.jpeg" 
                    alt="Shammas - Full Stack Developer" 
                    className="profile-image"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="profile-fallback">
                    <div className="fallback-icon">👨‍💻</div>
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
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
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
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .highlight {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
        }

        .animated-text {
          color: var(--accent-primary);
          border-right: 3px solid var(--accent-primary);
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: var(--accent-primary); }
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image {
          position: relative;
        }

        .profile-container {
          position: relative;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
          animation: float 6s ease-in-out infinite;
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
            rgba(102, 126, 234, 0.1) 0%,
            rgba(118, 75, 162, 0.1) 100%
          );
          border-radius: 50%;
          pointer-events: none;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
            gap: 3rem;
          }

          .hero-title {
            font-size: 3.5rem;
          }

          .hero-subtitle {
            font-size: 1.8rem;
          }

          .profile-container {
            width: 320px;
            height: 320px;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.5rem;
          }

          .profile-container {
            width: 280px;
            height: 280px;
            margin: 0 auto;
          }

          .fallback-icon {
            font-size: 3rem;
          }

          .fallback-text {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .scroll-indicator {
            bottom: 20px;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-subtitle {
            font-size: 1.3rem;
          }

          .profile-container {
            width: 250px;
            height: 250px;
          }

          .fallback-icon {
            font-size: 2.5rem;
          }

          .fallback-text {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .profile-container {
            width: 220px;
            height: 220px;
          }

          .fallback-icon {
            font-size: 2.5rem;
          }

          .fallback-text {
            font-size: 2rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 250px;
          }
        }

        @media (max-width: 360px) {
          .hero-title {
            font-size: 1.8rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .profile-container {
            width: 200px;
            height: 200px;
          }

          .fallback-icon {
            font-size: 2rem;
          }

          .fallback-text {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
