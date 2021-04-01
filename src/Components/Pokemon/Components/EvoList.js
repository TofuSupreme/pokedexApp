import { Fragment } from 'react'
import Evo from './Evo'

export default function EvoList(props) {
  return props.evolutions.map(e => (
    <Fragment key={e.name}>
      <Evo link={e.link} imgSrc={e.imgSrc} imgAlt={e.imgAlt} name={e.name} />

      <div className="evosign">
        <span className="skew-forward-on-hover"> &gt; &gt; &gt;</span>
      </div>
    </Fragment>
  ))
}
