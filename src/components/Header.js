import React from 'react';
import Autocomplete from './Autocomplete';

class Header extends React.Component {

    render() {
        return (
            <header>
                POKEDEXITO
                <Autocomplete />
            </header>
        )
    }

}

export default Header;