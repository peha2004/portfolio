import { FACTS } from '../data.js'

export default function About() {
  return (
    <section id="about" data-sec="about">
      <p className="label">about.md</p>
      <h2>I like projects that run end to end.</h2>
      <div className="about-grid">
        <div>
          <p>
            My work is project driven. Each one has to ship: working code,
            documentation and a final build, whether I am on it alone or with a
            team.
          </p>
          <p>
            I work across the MERN stack and React Native with Expo, and I am
            now building service-based backends with Spring Boot. I care about
            role-based access, clean structure and interfaces that feel
            finished.
          </p>
        </div>
        <dl className="facts">
          {FACTS.map((f) => (
            <div key={f.k}>
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
