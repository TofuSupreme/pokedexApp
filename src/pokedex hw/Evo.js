import React from 'react'
{
  /* NOTE: Added evo class back */
}
export default function Evo() {
  return (
    <div className="evo-row">
      <div className="col">
        <a className="row" href="#Quilava">
          <img
            className="evoquil"
            src="https://cdn.bulbagarden.net/upload/thumb/b/b6/156Quilava.png/250px-156Quilava.png"
            alt="quilava"
            style={{ maxWidth: '150px', margin: '0 auto' }}
          />
        </a>

        <h5 style={{ textAlign: 'center' }}>Quilava</h5>
      </div>
      <div className="evosign">
        <span className="skew-forward-on-hover"> &gt; &gt; &gt;</span>
      </div>

      <div className="col">
        <a className="row" href="#typhlosion">
          <img
            className="evotyph"
            src="https://cdn.bulbagarden.net/upload/4/47/157Typhlosion.png"
            height="150"
            width="150"
            alt="typhlosion"
            style={{ maxWidth: '150px', margin: '0 auto' }}
          />
        </a>

        <h5 style={{ textAlign: 'center' }}>Typhlosion</h5>
      </div>
    </div>
  )
}
