import React from 'react';
import PokemonListItem from './PokemonListItem';
import PokemonInfo from './PokemonInfo';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
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
                        <PokemonListItem />
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default App;