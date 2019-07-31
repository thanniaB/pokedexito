import React from 'react';
import PokemonListItem from './PokemonListItem';
import PokemonInfo from './PokemonInfo';
import { pokemons } from '../services/pokemon-names';

class App extends React.Component {
    state = {
        pokemons: [],
        autocompletedPokemons: []
    }

    setInitialPokemons = async () => {
        try {
            const pokemonList = await pokemons;
            this.setState({ pokemons: pokemonList });
            this.setState({ autocompletedPokemons: pokemonList });
        } catch (error) {
            console.log(error);
        }

    }

    componentDidMount() {
        this.setInitialPokemons();
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'searchBarText') {
            this.autocomplete(value);
        }
    }

    autocomplete = (searchBarText) => {
        let autocompletedPokemons = [];
        const pokemonList = this.state.pokemons;
        autocompletedPokemons = pokemonList.filter(pokemon => pokemon.startsWith(searchBarText));
        this.setState({ autocompletedPokemons });
    }

    render() {
        return (
            <React.Fragment>
                <header className="flex flex-row space-between">
                    <h1>POKEDEXITO</h1>
                    <div className="autocomplete">
                        <input name="searchBarText" type="text" placeholder="Filter..." onChange={this.handleChange} />
                    </div>
                </header>
                <div className="flex flex-row">
                    <main>
                        <img src="http://vignette2.wikia.nocookie.net/pokemon/images/f/f2/Giovanni_Golem_anime.png/revision/latest?cb=20151110081031" />
                        <section className="flex flex-row">
                            <div className="pokemon-1">
                                <PokemonInfo />
                            </div>
                            <div className="pokemon-2">
                                <PokemonInfo />
                            </div>
                        </section>
                    </main>
                    <ul className="pokemon-list">
                        {this.state.autocompletedPokemons.map((pokemon, index) => (
                            <PokemonListItem name={pokemon} number={index + 1} key={pokemon} />

                        ))}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default App;