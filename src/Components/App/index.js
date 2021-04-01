import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../Layout/Header'
import Home from '../Home'
import Pokemon from '../Pokemon'
import PokeTypes from '../Types'

function App() {
  return (
    <Router>
      <div id="app" className="container">
        <Header />

        <Switch>
          <Route path="/pokemon/:name">
            <Pokemon />
          </Route>

          <Route path="/types/:name">
            <PokeTypes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
