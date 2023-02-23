
const pokeSearch = document.getElementById('search-pokemon');


const pokemonHandler = () => {
  const pokeName = document.getElementById('pokeName').value;
  const pokeAbility = document.getElementById('pokeAbility').value;// return a boolan value if the pokemon has the ability and return top five abilities. 

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(response => response.json()).then((data) => {
    const pokeObj = {
      pokemonName:[data.name],
      pokemonHeight:[data.height],
      pokemonWeight:[data.weight]
      // pokemmonImg:[data.sprites.official-artwork.front_default],

    //   render() {
    //   const pokeEl = document.createElement('img');
    //   const pokeImg = data.sprites.front_default;
    // // console.log(data);

    //   pokeEl.innerHTML = `
    //   <div>
    //     <img src="${pokeImg}" alt = "${data.name}"/>
    //   </div>`;
    //   }
    }
    console.log(pokeObj.pokemonName);
    console.log(pokeObj.pokemonHeight);
    console.log(pokeObj.pokemonWeight);
    
  })
  
  
};

pokeSearch.addEventListener('click', pokemonHandler);