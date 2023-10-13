

function convertPokemonToLi(pokemon) {
    return  `
            <li id="pokemon" class="pokemon">
                <span class="number">#006</span>
                <span class="name"> ${pokemon.name} </span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type"> Poison</li>
                    </ol>
                    <img src="assets/images/charizard.png" alt="">
                </div>
            </li>`
}

const pokemonList = document.getElementById('pokemon')



pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
    

})
    

    






