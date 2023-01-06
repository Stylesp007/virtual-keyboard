const searchPokemon = document.getElementById('search-box');
const USERINPUT = document.querySelector('.inputValue');
const spaceBtn = document.querySelector('.space-button')

// CREATE AND BIND A BTN THAT SEARCHS FOR THIS POKEMON
// GET A SHORT DESCRIPTION OF THE POKEMON AND ITS ABILITYS
// use a counter to increment the moves in the pokemons data
spaceBtn.addEventListener('click', () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/`+USERINPUT.value)
    .then(response => response.json())
    .then(data => {
      let pokeMoves = [];
      for(i = 0; i === 5; i++){
        for(let move of data['moves'][i]['move']['name']) {
          pokeMoves.push(move);
        }
        
      }
      
      // const ability = data['abilities'][1]['ability']['name'];
      // const height = `${data['height']}'0`;
      // const weight = `${data['weight']} lbs`;
      // console.log(ability, height, weight);
      console.log(pokeMoves);
      console.log(data);
    }).catch((err) => {
      console.log('Pokemon not found', err);
    })
});
