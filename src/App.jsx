import { useState, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
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
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
