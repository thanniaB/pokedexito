import React from 'react';
import { pokemons } from '../services/pokemon-names';

class Autocomplete extends React.Component {
    state = {
        autocompletedPokemons: []
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'searchBarText') {
            this.autocomplete(value);
        }
    }

    autocomplete = (searchBarText) => {
        let autocompletedPokemons = [];
        if (searchBarText !== '') {
            const pokemonList = this.props.pokemons;
            autocompletedPokemons = pokemonList.filter(pokemon => pokemon.startsWith(searchBarText));
        }
        this.setState({ autocompletedPokemons });
    }

    render() {
        return (
            <div className="autocomplete">
                <input name="searchBarText" type="text" placeholder="search bar" onChange={this.handleChange} />
                <ul className="suggestions">
                    {this.state.autocompletedPokemons.map((pokemon) => (
                        <li>{pokemon}</li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default Autocomplete;