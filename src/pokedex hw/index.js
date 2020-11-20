import Header from './Header'
import Info from './Info'
import Evo from './Evo'
export default function Pokedex() {
  return (
    <div id="app" className="container">
      <Header />
      <main className="row">
        <div className="col">
          <h2 className="row">
            Cyndaquil <span>#155</span>
          </h2>
          <Info />
          <Evo />
        </div>
      </main>
    </div>
  )
}
