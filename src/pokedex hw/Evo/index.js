import React from 'react'
import EvolutionItem from './EvolutionItem'

export default function Evo() {
  return (
    <div className="evo-row">
      <EvolutionItem
        link="#quilava"
        imgSrc="https://cdn.bulbagarden.net/upload/thumb/b/b6/156Quilava.png/250px-156Quilava.png"
        imgAlt="quilava"
        name="Quilava"
      />

      <div className="evosign">
        <span className="skew-forward-on-hover"> &gt; &gt; &gt;</span>
      </div>

      <EvolutionItem
        link="#typhlosion"
        imgSrc="https://cdn.bulbagarden.net/upload/4/47/157Typhlosion.png"
        imgAlt="typhlosion"
        name="Typhlosion"
      />
    </div>
  )
}
