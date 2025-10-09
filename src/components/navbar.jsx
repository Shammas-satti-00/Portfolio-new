import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Shammas</h2>
        </div>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <div 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          background: var(--navbar-bg);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 1rem 0;
        }

        .navbar.scrolled {
          background: var(--navbar-bg);
          box-shadow: 0 2px 20px var(--navbar-shadow);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo h2 {
          font-size: 1.8rem;
          font-weight: 700;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--accent-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-gradient);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle {
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .theme-toggle:hover {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
          transform: scale(1.1);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: var(--text-primary);
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: var(--navbar-bg);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
