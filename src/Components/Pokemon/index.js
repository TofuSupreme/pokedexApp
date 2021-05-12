import React, { useParams } from 'react-router-dom'
import Info from './Info'
import EvoList from './Components/EvoList'
import PokemonDB from '../DB/PokemonDB'

export default function Pokemon(props) {
  let { name } = useParams()

  // let singlePokemonInArr = PokemonDB.filter(
  //   pokemon => pokemon.name.toLowerCase() == name
  // )
  // console.log(singlePokemonInArr)

  let singlePokemonObj = PokemonDB.filter(
    pokemon => pokemon.name.toLowerCase() === name
  )[0]

  if (singlePokemonObj === undefined) {
    return <h5>Sorry, this Pokemon doesn't exist in our database.</h5>
  }

  return (
    <main className="row">
      <div className="col">
        <Info
          id={singlePokemonObj.id}
          name={singlePokemonObj.name}
          link={singlePokemonObj.link}
          imgSrc={singlePokemonObj.imgSrc}
          imgAlt={singlePokemonObj.imgAlt}
          description={singlePokemonObj.description}
          type={singlePokemonObj.type}
        />

        <div className="col">
          <div className="row">
            <EvoList evolutions={singlePokemonObj.evolutions} />
          </div>
        </div>
      </div>
    </main>
  )
}
