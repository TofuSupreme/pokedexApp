export default function Pokedex() {
  return (
    <div id="app" className="container">
      <header className="row">
        <h1> Pokedex</h1>
      </header>

      <main className="row">
        {/* NOTE: Apparently you can't use class row inside row. A column has to be specified first. So I wrapped the everything with a col. */}
        <div className="col">
          {/* NOTE: This now has a class of row */}
          <h2 className="row">
            Cyndaquil <span>#155</span>
          </h2>

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
                Cyndaquil is a pokemon that is usually timid by nature. It often
                curls into a ball when intimidated. Though rare in the wild, it
                can be found living on the grasslands.
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

          {/* NOTE: Added evo class back */}
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
              <span className="skew-forward-on-hover"> > > > </span>
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
        </div>
      </main>
    </div>
  )
}
