import Evo from '../Evo/EvolutionItem'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
export default function EvoList(props) {
  return props.evolutions.map(e => (
    <Evo
      key={e.name}
      link={e.link}
      imgSrc={e.imgSrc}
      imgAlt={e.imgAlt}
      name={e.name}
    />
  ))
}
