import { useState } from 'react'
import { FILTERS, PROJECTS } from '../data.js'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  return (
    <section id="projects" data-sec="projects">
      <p className="label">projects/</p>
      <h2>Selected work</h2>

      <div className="filters" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f ? 'true' : 'false'}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects">
        {PROJECTS.map((p) => (
          <details
            key={p.name}
            className="proj"
            open={p.open ? true : undefined}
            hidden={!(filter === 'all' || p.type === filter)}
          >
            <summary>
              <span className="p-name">{p.name}</span>
              <span className="p-meta">
                <span className="tag">{p.type}</span>
                <span className={`pill ${p.status === 'shipped' ? 'ok' : 'warn'}`}>
                  {p.status}
                </span>
              </span>
              <span className="chev" aria-hidden="true"></span>
            </summary>
            <div className="p-body">
              <p>{p.summary}</p>
              <ul className="points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <ul className="chips">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              {p.link && (
                <a className="p-link" href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.link.replace('https://', '')}
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
