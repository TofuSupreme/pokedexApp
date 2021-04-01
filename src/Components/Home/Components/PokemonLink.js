import { Link } from 'react-router-dom'

export default function PokemonLink(props) {
  return (
    <div className="card" style={{ maxWidth: '450px' }}>
      <div className="card-body">
        <Link to={props.link} className="card-link">
          <h4 className="card-title">
            #{props.id}
            &nbsp;
            {props.name}
          </h4>
        </Link>

        <img
          src={props.imgSrc}
          alt={props.imgAlt}
          link={props.link}
          style={{ maxWidth: '250px', margin: '0 auto' }}
        />
      </div>
    </div>
  )
}
