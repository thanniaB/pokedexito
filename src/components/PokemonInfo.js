import React from 'react';

class PokemonInfo extends React.Component {
    state = {
        spriteUrl: '',
        stats: {},
        types: [],
        moves: []
    }

    componentDidUpdate() {
        this.getApiData();
    }

    getApiData = async () => {
        try {
            const currentPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`).then(function (response) {
                return response.json();
            });

            if (currentPokemon.types) {
                let types = [];
                for (let x = 0; x > currentPokemon.types.length; x++) {
                    types.push(currentPokemon.types[x].type.name);
                }
                this.setState({ types });
            }

            if (currentPokemon.stats) {
                let stats = {};
                for (let x = 0; x > currentPokemon.stats.length; x++) {
                    stats[currentPokemon.stats[x].stat.name] = currentPokemon.stats[x].base_stat;
                }
                this.setState({ stats });
            }

            if (currentPokemon.sprites) {
                const spriteUrl = currentPokemon.sprites.front_default;
                this.setState({ spriteUrl });
            }

            if (currentPokemon.moves) {
                let moves = [];
                for (let x = 0; x > currentPokemon.moves.length; x++) {
                    if (currentPokemon.moves[x].version_group_details[0].move_learn_method.name === 'level_up') {
                        moves.push({
                            "name": currentPokemon.moves[x].move.name,
                            "learned_at_level": currentPokemon.moves[x].version_group_details[0].level_learned_at
                        });
                    }
                }
                this.setState({ moves });
            }


        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (
            <article className="pokemon-info">
                <h1>{this.props.name}</h1>
                <ul className="types">
                    <li>Grass</li>
                </ul>
                <table>
                    <caption>Base Stats</caption>

                    <tbody>
                        <tr>
                            <td>HP</td><td>90</td>
                        </tr>
                        <tr>
                            <td>Attack</td><td>90</td>
                        </tr>
                        <tr>
                            <td>Defense</td><td>90</td>
                        </tr>
                        <tr>
                            <td>Sp. Attack</td><td>90</td>
                        </tr>
                        <tr>
                            <td>Sp. Defense</td><td>90</td>
                        </tr>
                        <tr>
                            <td>Speed</td><td>90</td>
                        </tr>
                    </tbody>
                </table>

            </article>
        )
    }
}

export default PokemonInfo;