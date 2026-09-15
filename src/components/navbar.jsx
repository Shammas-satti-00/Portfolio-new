import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useContext(ThemeContext)

  const navItems = [
    { id: 'home',       label: 'Home',       icon: '🏠' },
    { id: 'about',      label: 'About',      icon: '👤' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects',   label: 'Projects',   icon: '🎮' },
    { id: 'skills',     label: 'Skills',     icon: '⚡' },
    { id: 'contact',    label: 'Contact',    icon: '📧' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
      let current = 'home'
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 120) current = section.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-bracket">&lt;</span>
          Shammas
          <span className="logo-bracket">/&gt;</span>
        </div>

        {/* Desktop links */}
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
            >
              <span className="nav-link-icon">{item.icon}</span>
              <span className="nav-link-label">{item.label}</span>
              {activeSection === item.id && <span className="nav-indicator" />}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          {/* Dark / Light toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              /* Moon icon — switch to dark */
              <span role="img" aria-label="Moon" style={{ fontSize: '1.2rem' }}>🌙</span>
            ) : (
              /* Sun icon — switch to light */
              <span role="img" aria-label="Sun" style={{ fontSize: '1.2rem' }}>☀️</span>
            )}
          </button>

          {/* Hamburger */}
          <div
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: transparent;
          backdrop-filter: none;
          z-index: 1000;
          transition: all 0.35s ease;
          padding: 1.1rem 0;
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          background: var(--navbar-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom-color: var(--border-color);
          box-shadow: 0 1px 0 var(--border-color);
          padding: 0.7rem 0;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 1.35rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 2px;
          color: var(--text-primary);
          letter-spacing: -0.5px;
          transition: opacity 0.2s;
          user-select: none;
        }

        .nav-logo:hover { opacity: 0.75; }

        .logo-bracket {
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 1.2rem;
        }

        .nav-menu {
          display: flex;
          gap: 0.2rem;
          align-items: center;
        }

        .nav-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.88rem;
          cursor: pointer;
          transition: color 0.2s ease, background 0.2s ease;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          letter-spacing: 0.01em;
          user-select: none;
        }

        .nav-link-icon {
          font-size: 0.85rem;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: var(--bg-tertiary);
        }

        .nav-link:hover .nav-link-icon { opacity: 1; }

        .nav-link-active {
          color: var(--text-primary) !important;
          background: var(--bg-tertiary) !important;
          font-weight: 600;
        }

        .nav-link-active .nav-link-icon { opacity: 1; }

        .nav-indicator {
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--text-primary);
        }

        /* ── Actions ── */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        /* ── Theme Toggle Button ── */
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid var(--border-color);
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .theme-toggle:hover {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
          transform: scale(1.08);
        }

        .theme-toggle svg {
          display: block;
        }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
          padding: 4px;
        }

        .hamburger span {
          width: 22px;
          height: 2px;
          background: var(--text-secondary);
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -6px); }

        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--navbar-bg);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.75rem;
            transform: translateX(100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .nav-menu.active {
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-link { font-size: 1.15rem; padding: 0.7rem 2rem; gap: 0.6rem; }
          .nav-link-icon { font-size: 1.1rem; }
          .nav-indicator { display: none; }

          .hamburger {
            display: flex;
            z-index: 1001;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
