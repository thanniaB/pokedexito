import React from 'react';
import PokemonListItem from './PokemonListItem';
import PokemonInfo from './PokemonInfo';
import { pokemons } from '../services/pokemon-names';

class App extends React.Component {
    state = {
        pokemons: [],
        autocompletedPokemons: [],
        pokemon1: {},
        pokemon2: {},
        oddClick: true,
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

    handleClick = (name, spriteUrl) => {
        if(this.state.oddClick) {
            this.setState({pokemon1: {name: name, spriteUrl: spriteUrl}});
            this.setState({oddClick: false});
        } else {
            this.setState({pokemon2: {name: name, spriteUrl: spriteUrl}});
            this.setState({oddClick: true});
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
                <main>
                    <div className="pokemon-1">
                        <PokemonInfo name={this.state.pokemon1.name} spriteUrl={this.state.pokemon1.spriteUrl}/>
                    </div>
                    <div className="pokemon-2">
                        <PokemonInfo name={this.state.pokemon2.name} spriteUrl={this.state.pokemon2.spriteUrl}/>
                    </div>
                    <ul className="pokemon-list">
                        {this.state.autocompletedPokemons.map((pokemon, index) => (
                            <PokemonListItem name={pokemon} number={index + 1} key={pokemon} handleClick={this.handleClick}/>

                        ))}
                    </ul>
                </main>
                <footer>
                    Last updated Jan 24, 2025 to add Gen 9 Pokemon
                </footer>
            </React.Fragment>
        )
    }
}

export default App;