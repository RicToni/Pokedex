const pokemonList = document.getElementById('pokemon')
const loadMoreButton = document.getElementById('loadMoreButton')
let limit = 10;
let offset = 0;
function convertPokemonToLi(pokemon) {
    return  `
            <li id="pokemon" class="pokemon ${pokemon.type}" class="" >
                <span class="number">${pokemon.number}</span>
                <span class="name"> ${pokemon.name} </span>
                <div class="detail">
                    <ol class="types">
                       ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}">
                </div>
            </li>`
}




function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})






