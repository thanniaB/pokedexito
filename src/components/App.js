import React from 'react';
import PokemonListItem from './PokemonListItem';
import PokemonInfo from './PokemonInfo';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
            <header> POKEDEXITO <input type="text" placeholder="search bar" /> </header>
            <div class="flex flex-row">
                <main>
                    <img src="http://vignette2.wikia.nocookie.net/pokemon/images/f/f2/Giovanni_Golem_anime.png/revision/latest?cb=20151110081031" />
                    <section class="flex flex-row">
                        <div class="pokemon-1">
                            <PokemonInfo />
                        </div>
                        <div class="pokemon-2">
                            <PokemonInfo />
                        </div>
                    </section>
                </main>
                <ul class="pokemon-list">
                    <PokemonListItem />
                </ul>
            </div>
            </React.Fragment>
        )
    }
}

export default App;