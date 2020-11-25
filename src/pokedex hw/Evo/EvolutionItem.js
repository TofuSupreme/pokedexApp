export default function EvolutionItem(props) {
  return (
    <div className="col">
      <a className="row" href={props.link}>
        <img
          className="evos"
          src={props.imgSrc}
          alt={props.imgAlt}
          style={{ maxWidth: '150px', margin: '0 auto' }}
        />
      </a>

      <h5 style={{ textAlign: 'center' }}>{props.name}</h5>
    </div>
  )
}
