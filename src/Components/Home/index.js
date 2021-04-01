import PokemonDB from '../../DB'
import PokemonList from './Components/PokemonList'

export default function Home() {
  return <PokemonList list={PokemonDB} />
}
