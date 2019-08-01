import React from 'react';
import PokemonListItem from './PokemonListItem';
import PokemonInfo from './PokemonInfo';
import { pokemons } from '../services/pokemon-names';

class App extends React.Component {
    state = {
        pokemons: [],
        autocompletedPokemons: [],
        pokemon1: '',
        pokemon2: '',
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

    handleClick = (name) => {
        if(this.state.oddClick) {
            this.setState({pokemon1: name});
            this.setState({oddClick: false});
        } else {
            this.setState({pokemon2: name});
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
                        <PokemonInfo name={this.state.pokemon1} />
                    </div>
                    <div className="pokemon-2">
                        <PokemonInfo name={this.state.pokemon2}/>
                    </div>
                    <ul className="pokemon-list">
                        {this.state.autocompletedPokemons.map((pokemon, index) => (
                            <PokemonListItem name={pokemon} number={index + 1} key={pokemon} handleClick={this.handleClick}/>

                        ))}
                    </ul>
                </main>
            </React.Fragment>
        )
    }
}

export default App;