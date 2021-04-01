import Type from './Type'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
export default function TypeList(props) {
  return props.type.map(t => (
    <Type
      key={t.name}
      link={t.link}
      bgColor={t.bgColor}
      name={t.name}
      id={t.id}
    />
  ))
}
