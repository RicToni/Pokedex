const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return`<span class="number">#006</span>
    <span class="name"> ${pokemon.name} </span>

    <div class="detail">
        <ol class="types">
            <li class="type">Grass</li>
            <li class="type"> Poison</li>
        </ol>
        <img src="assets/images/charizard.png" alt="">
    </div>`
}

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results) 
    .then((pokemonList) => {
        
        for (let i = 0; i < pokemonList.length; i++) {
            let pokemon = pokemonList[i] ;
            console.log(convertPokemonToLi(pokemon))
            
        }
    }
    )
    .catch((error) => console.log(error))

    
