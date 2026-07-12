import { useState, useEffect } from 'react'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Shammas-satti-00",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shammas-ul-islam-660895275/",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:shammassatti00@gmail.com",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
        </svg>
      )
    }
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="ft-bracket">&lt;</span>Shammas<span className="ft-bracket">/&gt;</span>
            </h3>
            <p className="footer-description">
              Unity game developer focused on building immersive, performant gameplay experiences.
              C# | Unity 3D | Physics Simulation | Clean Architecture.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li>Game Development</li>
              <li>Unity 3d</li>
              <li>Mobile games</li>
              <li>AI/ML Practitioner</li>
              <li>Consulting</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <p>📧 shammassatti00@gmail.com</p>
              <p>📱 +92-3703550503</p>
              <p>📍 Islamabad, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Shammas. All rights reserved.
            </p>
            <p className="made-with">
            
            </p>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button 
          className="back-to-top"
          onClick={scrollToTop}
          title="Back to top"
        >
          ↑
        </button>
      )}

      <style jsx>{`
        .footer {
          background: var(--footer-bg);
          color: white;
          position: relative;
          border-top: 1px solid var(--footer-border);
        }

        .footer::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 2px;
          background: var(--accent-gradient);
          border-radius: 2px;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 3rem;
          padding: 4rem 0 2.5rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 2px;
          color: var(--text-primary);
        }

        .ft-bracket {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
        }

        .footer-description {
          color: var(--footer-text);
          line-height: 1.65;
          margin-bottom: 1.5rem;
          font-size: 0.88rem;
        }

        .social-links {
          display: flex;
          gap: 0.7rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--footer-text);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .social-link:hover {
          background: var(--accent-gradient);
          border-color: transparent;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.35);
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-subtitle {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.1rem;
          color: var(--text-muted);
          font-family: 'JetBrains Mono', monospace;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-links li {
          color: var(--footer-text);
          font-size: 0.9rem;
        }

        .footer-link {
          color: var(--footer-text);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--accent-primary);
        }

        .contact-info p {
          color: var(--footer-text);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .footer-bottom {
          border-top: 1px solid var(--footer-border);
          padding: 1.5rem 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .copyright,
        .made-with {
          color: var(--footer-text);
          font-size: 0.85rem;
        }

        .back-to-top {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 44px;
          height: 44px;
          background: var(--accent-gradient);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.3rem;
          cursor: pointer;
          transition: all 0.25s ease;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
        }

        .back-to-top:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
        }

        @media (max-width: 1200px) {
          .footer-main { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            padding: 3rem 0 1.5rem;
          }
          .footer-bottom-content { flex-direction: column; text-align: center; }
        }

        @media (max-width: 480px) {
          .footer-main { grid-template-columns: 1fr; gap: 1.5rem; }
          .social-links { justify-content: flex-start; }
          .back-to-top { bottom: 16px; right: 16px; width: 40px; height: 40px; font-size: 1.1rem; }
        }
      `}</style>
    </footer>
  )
}

export default Footer
