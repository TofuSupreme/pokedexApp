import { Link } from 'react-router-dom'
export default function Evo(props) {
  return (
    <div className="col">
      <Link className="row" to={props.link}>
        <img
          className="evos"
          src={props.imgSrc}
          alt={props.imgAlt}
          style={{ maxWidth: '150px', margin: '0 auto' }}
        />
      </Link>

      <h5 style={{ textAlign: 'center' }}>{props.name}</h5>
    </div>
  )
}
