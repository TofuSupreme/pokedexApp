import React from 'react'
import Type from './Type'

export default function Info() {
  return (
    <div className="info-row">
      <div href="#Cyndaquil" className="col">
        <img
          className="mainpic"
          style={{ maxWidth: '250px' }}
          src="https://cdn.bulbagarden.net/upload/9/9b/155Cyndaquil.png"
          alt="cyndaquil"
        />
      </div>

      <div className="data-col">
        <p className="description">
          Cyndaquil is a pokemon that is usually timid by nature. It often curls
          into a ball when intimidated. Though rare in the wild, it can be found
          living on the grasslands.
        </p>

        <div className="type">
          <h3>Type</h3>

          <div className="shaders">
            <Type link="#fire" bgColor="#ed6d12" name="Fire" />
          </div>

          <div className="weaknesses">
            <h3>Weaknesses</h3>
            <Type link="#water" bgColor="#4578ed" name="Water" />
            <Type link="#rock" bgColor="#a48f32" name="Rock" />
            <Type link="#ground" bgColor="#dbb54d" name="Ground" />
          </div>
        </div>
      </div>
    </div>
  )
}
