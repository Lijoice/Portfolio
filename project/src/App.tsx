import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Contact from './components/Contact'


function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App