import React from 'react'
import Evolist from '../Components/Evols'

export default function Evo(props) {
  return (
    <div className="evo-row">
      <Evolist evolutions={props.evolutions} />

      <div className="evosign">
        <span className="skew-forward-on-hover"> &gt; &gt; &gt;</span>
      </div>

      {/* <Evolist evolutions={props.evolutions} /> */}
    </div>
  )
}
