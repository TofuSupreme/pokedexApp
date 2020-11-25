import Header from './Layout/Header'
import Info from './Info'
import Evo from './Evo'

export default function Pokedex() {
  const CyndaquilObj = {
    name: 'Cyndaquil',
    link: '#Cyndaquil',
    imgSrc: 'https://cdn.bulbagarden.net/upload/9/9b/155Cyndaquil.png',
    imgAlt: 'cyndaquil',
    description:
      ' Cyndaquil is a pokemon that is usually timid by nature. It often curlsinto a ball when intimidated. Though rare in the wild, it can be found living on the grasslands.',
    type: {
      strength: [
        {
          link: '#fire',
          bgColor: '#ed6d12',
          name: 'Fire'
        }
      ],
      weakness: [
        {
          link: '#water',
          bgColor: '#4578ed',
          name: 'Water'
        },
        {
          link: '#rock',
          bgColor: '#a48f32',
          name: 'Rock'
        },
        {
          link: '#ground',
          bgColor: '#dbb54d',
          name: 'Ground'
        }
      ]
    },
    evolutions: [
      {
        link: '#quilava',
        imgSrc:
          'https://cdn.bulbagarden.net/upload/thumb/b/b6/156Quilava.png/250px-156Quilava.png',
        imgAlt: 'quilava',
        name: 'Quilava'
      },
      {
        link: '#typhlosion',
        imgSrc: 'https://cdn.bulbagarden.net/upload/4/47/157Typhlosion.png',
        imgAlt: 'typhlosion',
        name: 'Typhlosion'
      }
    ]
  }

  return (
    <div id="app" className="container">
      <Header />
      <main className="row">
        <div className="col">
          <h2 className="row">
            Cyndaquil <span>#155</span>
          </h2>

          <Info
            name={CyndaquilObj.name}
            link={CyndaquilObj.link}
            imgSrc={CyndaquilObj.imgSrc}
            imgAlt={CyndaquilObj.imgAlt}
            description={CyndaquilObj.description}
            type={CyndaquilObj.type}
          />

          <Evo evolutions={CyndaquilObj.evolutions} />
        </div>
      </main>
    </div>
  )
}
