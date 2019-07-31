import React from 'react';
import { pokemons } from '../services/pokemon-names';

class Autocomplete extends React.Component {
    state = {
        autocompletedPokemons: []
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        if (name === 'searchBarText') {
            this.autocomplete(value);
        }
    }

    autocomplete = async (searchBarText) => {
        try {
            let autocompletedPokemons = [];
            if (searchBarText !== '') {
                const pokemonList = await pokemons;
                autocompletedPokemons = pokemonList.filter(pokemon => pokemon.startsWith(searchBarText));
            }
            this.setState({ autocompletedPokemons });
        } catch (error) {
            console.log(error);
        }

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