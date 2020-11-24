export default function Type(props) {
  return (
    <a
      href={props.link}
      className="hvr-shrink"
      style={{
        background: props.bgColor,
        borderRadius: 5,
        color: 'white',
        padding: 5,
        margin: 5
      }}
    >
      {props.name}
    </a>
  )
}
