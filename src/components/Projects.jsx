import { useState } from 'react'
import { FILTERS, PROJECTS } from '../data.js'

export default function Projects() {
  const [filter, setFilter] = useState('all')
   const [hoveredProject, setHoveredProject] = useState(null)
  // const [pinnedProject, setPinnedProject] = useState(null)

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
 open={hoveredProject === p.name}
  onMouseEnter={() => setHoveredProject(p.name)}
  onMouseLeave={() => setHoveredProject(null)}
  onFocus={() => setHoveredProject(p.name)}
  onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setHoveredProject(null)
    }
  }}
  hidden={!(filter === 'all' || p.type === filter)}
>
            <summary
  onClick={(event) => {
    event.preventDefault()
    setPinnedProject(
      pinnedProject === p.name ? null : p.name
    )
  }}
>
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
              
{(p.github || p.link) && (
  <div className="project-actions">
    <a
      className="github-button"
      href={p.github || p.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${p.name} on GitHub`}
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06V22c0 .29.2.63.77.53A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
      View GitHub
      <span aria-hidden="true">↗</span>
    </a>
  </div>
)}

            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
