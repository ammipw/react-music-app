import React, { useState } from 'react'

const TrainerCard = ({name, num}) => {

const [pokemonCount, setPokemonCount] = useState(num)

const catchAPokemon = () => {
    let newCount = pokemonCount+1
    setPokemonCount(newCount)

}



return (
    <>
        <h1>Welcome {name}</h1>
        <p> You have {num} pokemon</p>
        <p>You now have {pokemonCount} pokemon</p>
        <button onClick={catchAPokemon}>Catch a pokemon</button>
    </>
)
}

export default TrainerCard