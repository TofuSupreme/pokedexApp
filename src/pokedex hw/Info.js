import React from 'react'
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
            <a
              href="#fire"
              className="hvr-shrink"
              style={{
                background: '#ed6d12',
                borderRadius: 5,
                color: 'white',
                padding: 5
              }}
            >
              Fire
            </a>
          </div>

          <div className="weaknesses">
            <h3>Weaknesses</h3>
            <a
              href="#water"
              className="hvr-shrink"
              style={{
                background: '#4578ed',
                color: 'white',
                borderRadius: 5,
                padding: 5,
                margin: 5
              }}
            >
              Water
            </a>

            <a
              href="#rock"
              className="hvr-shrink"
              style={{
                background: '#a48f32',
                color: 'white',
                borderRadius: 5,
                padding: 5,
                margin: 5
              }}
            >
              Rock
            </a>

            <a
              href="#ground"
              className="hvr-shrink"
              style={{
                background: '#dbb54d',
                borderRadius: 5,
                color: 'white',
                padding: 5,
                margin: 5
              }}
            >
              Ground
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
