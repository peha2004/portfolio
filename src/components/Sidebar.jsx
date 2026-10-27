import { useState } from 'react'
import { NAV } from '../data.js'

function getTheme() {
  const set = document.documentElement.getAttribute('data-theme')
  if (set) return set
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function Sidebar({ active }) {
  const [theme, setTheme] = useState(getTheme)

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    setTheme(next)
  }

  return (
    <header className="side">
      <div className="brand">
        ~/<b>ranuthi</b>
      </div>
      <ul className="nav">
        {NAV.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : 'false'}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="theme-btn"
        type="button"
        onClick={toggleTheme}
        aria-label="Switch between light and dark theme"
      >
        {theme === 'dark' ? 'light mode' : 'dark mode'}
      </button>
    </header>
  )
}
