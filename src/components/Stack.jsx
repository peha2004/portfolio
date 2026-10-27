import { STACK } from '../data.js'

export default function Stack() {
  return (
    <section id="stack" data-sec="stack">
      <p className="label">stack.json</p>
      <h2>Tools I work with</h2>
      <div className="stack">
        {STACK.map((g) => (
          <div key={g.group}>
            <h3>{g.group}</h3>
            <ul className="chips">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
