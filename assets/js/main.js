
function convertPokemonToLi(pokemon) {
    return  `
            <li id="pokemon" class="pokemon">
                <span class="number">${pokemon.number}</span>
                <span class="name"> ${pokemon.name} </span>
                <div class="detail">
                    <ol class="types">
                       ${pokemon.types.map((type) => `<li class="type">${type}</li>`)}
                    </ol>
                    <img src="${pokemon.photo}">
                </div>
            </li>`
}

const pokemonList = document.getElementById('pokemon')



pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
    

})
    

    






