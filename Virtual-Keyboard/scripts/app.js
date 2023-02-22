const searchPokemon = document.getElementById('search-box');
const USERINPUT = document.querySelector('.inputValue');
const spaceBtn = document.querySelector('.space-button')

// CREATE AND BIND A BTN THAT SEARCHS FOR THIS POKEMON
// GET A SHORT DESCRIPTION OF THE POKEMON AND ITS ABILITYS
// use a counter to increment the moves in the pokemons data
async function pokemonSearch () {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`+USERINPUT.value);
  const pokemon = res.json();
  console.log(pokemon);
}


spaceBtn.addEventListener('click', pokemonSearch);
