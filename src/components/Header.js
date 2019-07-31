import React from 'react';
import Autocomplete from './Autocomplete';

class Header extends React.Component {

    render() {
        return (
            <header className="flex flex-row space-between">
                <h1>POKEDEXITO</h1>
                <Autocomplete pokemons = {this.props.pokemons} />
            </header>
        )
    }

}

export default Header;