
import { useState } from 'react'
import { CONFIG } from '../data.js'

function CopyButton({ value }) {
  const [label, setLabel] = useState('Copy')

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setLabel('Copied!')
      setTimeout(() => setLabel('Copy'), 1500)
    } catch {
      setLabel('Copy manually')
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
    {
      key: 'Email',
      value: CONFIG.email,
      href: `mailto:${CONFIG.email}`,
    },
    {
      key: 'Phone',
      value: CONFIG.phone,
      href: `tel:${CONFIG.phone.replace(/\s/g, '')}`,
    },
    {
      key: 'LinkedIn',
      value: 'linkedin.com/in/ranuthi-pehansa-peiris-23a8ba390',
      href: CONFIG.linkedin,
    },
    {
      key: 'GitHub',
      value: 'github.com/peha2004',
      href: CONFIG.github,
    },
  ].filter((row) => row.value && row.href)

  return (
    <section id="contact" className="contact" data-sec="contact">
      <p className="label">contact.ts</p>

      <h2>Let's build something.</h2>

      <p className="contact-intro">
        Have an opportunity, a project idea, or just want to connect?
        Feel free to reach out.
      </p>

      <ul className="links">
        {rows.map((row) => (
          <li key={row.key}>
            <span className="k">{row.key}</span>

            <span className="contact-value">
              <a
                className="v"
                href={row.href}
                target={
                  row.key === 'LinkedIn' || row.key === 'GitHub'
                    ? '_blank'
                    : undefined
                }
                rel={
                  row.key === 'LinkedIn' || row.key === 'GitHub'
                    ? 'noopener noreferrer'
                    : undefined
                }
              >
                {row.value}
              </a>

              <CopyButton value={row.key === 'Email' || row.key === 'Phone'
                ? row.value
                : row.href}
              />
            </span>
          </li>
        ))}
      </ul>

      <a className="contact-cta" href={`mailto:${CONFIG.email}`}>
        <span>✉</span> Get in touch <span aria-hidden="true">↗</span>
      </a>
    </section>
  )
}
