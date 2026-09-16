import { useState, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Experience from './components/experience'
import Skills from './components/skills'
import Bootcamps from './components/bootcamps'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading Portfolio...</p>
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
          <Bootcamps />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
