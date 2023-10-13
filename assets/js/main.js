
function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}
function convertPokemonToLi(pokemon) {
    return  `
            <li id="pokemon" class="pokemon">
                <span class="number">${pokemon.order}</span>
                <span class="name"> ${pokemon.name} </span>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}">
                </div>
            </li>`
}

const pokemonList = document.getElementById('pokemon')



pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
    

})
    

    






