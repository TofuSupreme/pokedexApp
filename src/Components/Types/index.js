import React, { useParams } from 'react-router-dom'
import PokemonList from '../Home/Components/PokemonList'
import PokemonDB from '../../DB'

export default function PokeTypes(props) {
  let { name } = useParams()

  // let singlePokemonObj = PokemonDB.filter(
  //   pokemon => pokemon.name.toLowerCase() == name
  // )[0]

  // if (props.list.type === props.list.type)

  let arrPokemonObj = PokemonDB.filter(
    pokemon =>
      pokemon.type.strength.filter(type => type.name.toLowerCase() === name)
        .length > 0
  )

  if (arrPokemonObj === undefined || arrPokemonObj.length === 0) {
    return <h5>Sorry, this Pokemon doesn't exist in our database.</h5>
  }

  return <PokemonList list={arrPokemonObj} />
}

// let { name } = useParams()

// const sameTypesList = PokemonDB.filter(
//   pokemon => pokemon.type.filter().length > 0
// )
// export default function PokeTypes(props) {
//   const sameTypesList = PokemonDB.filter(pokemon=> pokemon.type.include()(a=>a.type))
//   if (props.list.type === sameTypesList) {
//     console.log(sameTypesList)
//   }
//   return <div> Hello there neighbor</div>
// }

// let singlePokeType = PokemonDB.filter(pokemon => pokemon.type)[0]
// const listOfTypes = sameTypes.map(p => (
//   <PokemonLink key={p.id} name={p.name} imgSrc={p.imgSrc} imgAlt={p.imgAlt} />
// ))

// let typesOf = []

// let filteredTypes = PokemonDB.filter(
//   pokemon => pokemon.filter(t => t.type === simTypes).length > 0
// )
// console.log(filteredTypes)
// export default function PokeTypes(props) {
//   console.log(props)

//   return PokemonDB.filter(k => <PokemonLink type={k.type} imgSrc={k.imgSrc} />)
// }

// let { name } = useParams()

// let similiarPokemonObj = PokemonDB.filter(pokemon=> pokemon.type == )
// // https://www.pokemon.com/us/pokedex/bulbasaur
// let singlePokemonObj = PokemonDB.filter(
//   pokemon => pokemon.name.toLowerCase == name
// )[0]

// const filteredTypes = PokemonDB.filter(
//   pokemon => pokemon.type.filter() == pokemon.type
// )[0]

// export default function PokeTypes() {
//   return filteredTypes.type.map(t => (
//     <PokemonLink key={singlePokemonObj.id} name={singlePokemonObj.name} />
//   ))
// }
