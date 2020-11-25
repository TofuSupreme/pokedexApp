import React from 'react'
import TypeList from '../Components/TypeList'

export default function Info(props) {
  return (
    <div className="info-row">
      <div href={props.link} className="col">
        <img
          className="mainpic"
          style={{ maxWidth: '250px' }}
          src={props.imgSrc}
          alt={props.imgAlt}
        />
      </div>

      <div className="data-col">
        <p className="description">{props.description}</p>

        <div className="type">
          <h3>Type</h3>
          <TypeList type={props.type.strength} />

          <div className="weaknesses">
            <h3>Weaknesses</h3>
            <TypeList type={props.type.weakness} />
          </div>
        </div>
      </div>
    </div>
  )
}
