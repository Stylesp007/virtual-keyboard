const searchPokemon = document.getElementById('search-box');
const USERINPUT = document.querySelector('.inputValue');
const spaceBtn = document.querySelector('.space-button')

// CREATE AND BIND A BTN THAT SEARCHS FO THIS POKEMON
// GET A SHORT DESCRIPTION OF THE POKEMON AND ITS ABILITYS
spaceBtn.addEventListener('click', () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/`+USERINPUT.value)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    }).catch((err) => {
      console.log('Pokemon not found', err);
    })
});
