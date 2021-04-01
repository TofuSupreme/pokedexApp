import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="row">
      <h1 className="col">Pokedex</h1>

      <nav className="col-3">
        <ul className="row">
          <li className="col-3">
            <Link to="/"> Home </Link>
          </li>

          <li className="col-3">
            <Link to="/pokemon"> Pokemon </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
