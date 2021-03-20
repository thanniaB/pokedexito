export const pokemons = fetch('https://pokeapi.co/api/v2/pokemon/?limit=892').then(function (response) {
    return response.json();
}).then(function (pokemonJson) {
    const results = pokemonJson.results;
    const names = Object.keys(pokemonJson.results).map(key => {
        return results[key].name;
    });
    return names;
}).catch(function (err) {
    console.log(err);
});
