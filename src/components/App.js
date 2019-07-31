import React from 'react';
import PokemonListItem from './PokemonListItem';
import PokemonInfo from './PokemonInfo';
import Header from './Header';
import { pokemons } from '../services/pokemon-names';

class App extends React.Component {
    state = {
        pokemons: []
    }

    setPokemons = async () => {
        try {
            const pokemonList = await pokemons;
            this.setState({ pokemons: pokemonList });
        } catch (error) {
            console.log(error);
        }

    }

    componentDidMount() {
        this.setPokemons();
    }

    render() {
        return (
            <React.Fragment>
                <Header pokemons={this.state.pokemons} />
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
                        {this.state.pokemons.map((pokemon, index) => (
                            <PokemonListItem name={pokemon} number={index+1} key={pokemon}/>

                        ))}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default App;