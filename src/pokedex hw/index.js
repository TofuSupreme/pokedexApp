import Header from './Header'
import Info from './Info'
import Evo from './Evo'
export default function Pokedex() {
  return (
    <div id="app" className="container">
      <Header />

      <main className="row">
        {/* NOTE: Apparently you can't use class row inside row. A column has to be specified first. So I wrapped the everything with a col. */}
        <div className="col">
          {/* NOTE: This now has a class of row */}
          <h2 className="row">
            Cyndaquil <span>#155</span>
          </h2>

          <Info />
          <Evo />

          {/* NOTE: Added evo class back */}
        </div>
      </main>
    </div>
  )
}
