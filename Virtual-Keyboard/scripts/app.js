const pokeSearch = document.getElementById('search-pokemon');

const POKEMON = [];

const pokemonCards = () => {
  const pokeCards = document.getElementById('pokecard');

  if(!POKEMON){
    pokeCards.classList.remove('visible');
    return;
  } else {
    pokeCards.classList.add('visible');
  }
  pokeCards.innerHTML = '';
  console.log(POKEMON);
  POKEMON.forEach((pokemon) => {
    const pokemonEl = document.createElement('li');
    pokemonEl.className = 'poke-list-items';
    pokemonEl.innerHTML =`
    <div>
      <div class="pokemon-item__content">
        <h2>pokemon Height:${pokemon.pokeObj.pokemonHeight}</h2>
        <h3> Description of ${pokemon.pokeObj.pokeName}</h3>
        <p>${pokemon.pokeObj.pokeName} abilitys</p>
      </div>
    </div>
    `
    return pokemonEl;
  })
  
};

const pokemonHandler = () => {
  const pokeName = document.getElementById('pokeName').value;
  const pokeAbility = document.getElementById('pokeAbility').value;// return a boolan value if the pokemon has the ability and return top five abilities. 

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(response => response.json()).then((data) => {
    const pokeObj = {
      pokemonName:pokeName,
      pokemonHeight:data.height,
      pokemonWeight:data.weight,
      pokemonImg:data.sprites['back_default']
    }

    POKEMON.push(pokeObj);
    pokemonCards();
  })
  
  document.getElementById('pokeName').value = '';
}; 

pokeSearch.addEventListener('click', pokemonHandler);
console.log(POKEMON);