import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Stack from './components/Stack.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-sec]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.sec)
        })
      },
      { rootMargin: '-35% 0px -60% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="shell">
      <Sidebar active={active} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
        <footer>Ranuthi, 2026. Built with React and Vite.</footer>
      </main>
    </div>
  )
}
