import PokemonLink from '../Components/PokemonLink'
export default function PokemonList(props) {
  console.log(props)
  return props.list.map(t => (
    <PokemonLink
      key={t.id}
      id={t.id}
      name={t.name}
      link={t.link}
      imgSrc={t.imgSrc}
      imgAlt={t.imgAlt}
      description={t.description}
      type={t.type}
    />
  ))
}
