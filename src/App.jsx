import { site } from './data/site'

export default function App() {
  return (
    <main className="container section">
      <p className="section-label">// setup check</p>
      <h1 className="section-title">{site.name}</h1>
      <p>{site.headline}</p>
    </main>
  )
}