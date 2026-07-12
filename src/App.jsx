import { useState, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Experience from './components/experience'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme] = useState('dark')

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    // Locked to dark mode
  }

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading Shammas Portfolio...</p>
      </div>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
