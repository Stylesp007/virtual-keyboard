const searchPokemon = document.getElementById('search-box');
const USERINPUT = document.querySelector('.inputValue');
const spaceBtn = document.querySelector('.space-button')

// start off with binding the input fields to the pokemon api

spaceBtn.addEventListener('click', () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/`+USERINPUT.value)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    }).catch((err) => {
      console.log('Pokemon not found', err);
    })
});
