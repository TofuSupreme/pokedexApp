import PokemonDB from '../DB/PokemonDB'
import PokemonList from './Components/PokemonList'

export default function Home() {
  return <PokemonList list={PokemonDB} />
}

