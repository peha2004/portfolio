import { useState } from 'react'
import { CONFIG } from '../data.js'

function CopyButton({ value }) {
  const [label, setLabel] = useState('copy')

  function copy() {
    const done = () => {
      setLabel('copied')
      setTimeout(() => setLabel('copy'), 1500)
    }
    try {
      navigator.clipboard.writeText(value).then(done, () => setLabel('select it'))
    } catch {
      setLabel('select it')
    }
  }

  return (
    <button type="button" className="copy" onClick={copy}>
      {label}
    </button>
  )
}

export default function Contact() {
  const rows = [
    CONFIG.github && { key: 'GitHub', value: CONFIG.github, href: CONFIG.github },
    CONFIG.linkedin && { key: 'LinkedIn', value: CONFIG.linkedin, href: CONFIG.linkedin },
    CONFIG.email && { key: 'Email', value: CONFIG.email, copy: true },
  ].filter(Boolean)

  return (
    <section id="contact" className="contact" data-sec="contact">
      <p className="label">contact.ts</p>
      <h2>Let's build something.</h2>
      <ul className="links">
        {rows.map((r) => (
          <li key={r.key}>
            <span className="k">{r.key}</span>
            <span>
              {r.href ? (
                <a className="v" href={r.href} target="_blank" rel="noopener noreferrer">
                  {r.value.replace(/^https?:\/\//, '')}
                </a>
              ) : (
                <span className="v">{r.value}</span>
              )}
              {r.copy && <CopyButton value={r.value} />}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
