
import { NOW } from '../data.js'
import NetworkBackground from './NetworkBackground.jsx'

export default function Hero() {
  const name = 'RANUTHI'

  return (
    <section id="top" className="hero" data-sec="top">

      <NetworkBackground />
      <div className="hero-content">
        <p className="hero-eyebrow">
          SOFTWARE ENGINEERING STUDENT
        </p>

        <h1 className="hero-name" aria-label="Ranuthi">
          {name.split('').map((letter, index) => (
            <span
              className="hero-letter"
              key={letter + index}
              style={{ '--i': index }}
              aria-hidden="true"
            >
              {letter}
            </span>
          ))}
          <span className="hero-dot" aria-hidden="true">
            .
          </span>
        </h1>

        <p className="lede">
          I build web apps, mobile apps and microservices,
          turning ideas into working digital experiences.
        </p>

        <dl className="now">
          <dt>
            <span className="dot" aria-hidden="true"></span>
            building now
          </dt>

          {NOW.map((line) => (
            <dd key={line}>{line}</dd>
          ))}
        </dl>

        <a className="hero-cta" href="#projects">
          Explore my work <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="hero-visual">
        <div className="photo-glow"></div>

        <div className="photo-frame">
          <img
            src="/images/ranuthi.jpg"
            alt="Ranuthi Pehansa"
            className="profile-photo"
          />
        </div>

        <div className="photo-caption">
          <span className="photo-status"></span>
          <div>
            <strong>Ranuthi Pehansa</strong>
            <p>Developer · Problem Solver</p>
          </div>
        </div>

        <span className="photo-decoration" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  )
}
