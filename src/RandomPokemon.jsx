import "./RandomPokemon.css"

export default function RandomPokemon() {
  const pokeNum = Math.floor(Math.random() * 151 + 1);
  console.log("run")
  const pokeURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeNum}.svg`;
  return (
    <div className="PokeCard">
      <h1>Pokemon #{pokeNum}</h1>
      <img src={pokeURL} />
    </div>
  )
}


/*https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/122.svg*/