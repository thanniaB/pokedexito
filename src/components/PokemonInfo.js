import React from 'react';

class PokemonInfo extends React.Component {
    state = {
        spriteUrl: 'https://i.imgur.com/jOa0vLR.png',
        stats: {},
        types: '',
        moves: []
    }

    componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {

            if (this.props.spriteUrl) {
                this.setState({ spriteUrl: this.props.spriteUrl })
            }
            this.getApiData();
        }
    }

    getApiData = async () => {
        try {
            const currentPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`).then(function (response) {
                return response.json();
            });

            if (currentPokemon.types) {
                let types = [];
                for (let x = 0; x < currentPokemon.types.length; x++) {
                    types.push(currentPokemon.types[x].type.name);
                }
                this.setState({ types: types.join(', ') });
            }

            if (currentPokemon.stats) {
                let stats = {};
                for (let x = 0; x < currentPokemon.stats.length; x++) {
                    stats[currentPokemon.stats[x].stat.name.replace('-', '')] = currentPokemon.stats[x].base_stat;
                }
                this.setState({ stats });
            }

            if (currentPokemon.sprites) {
                const spriteUrl = currentPokemon.sprites.front_default;
                this.setState({ spriteUrl });
            }

            if (currentPokemon.moves) {
                let moves = [];
                for (let x = 0; x < currentPokemon.moves.length; x++) {
                    if (currentPokemon.moves[x].version_group_details[0].move_learn_method.name === 'level-up') {
                        moves.push({
                            "name": currentPokemon.moves[x].move.name,
                            "learned_at_level": currentPokemon.moves[x].version_group_details[0].level_learned_at
                        });
                    }
                }
                moves.sort(function(a, b) {
                    return parseInt(a.learned_at_level) - parseInt(b.learned_at_level);
                });
                this.setState({ moves });
            }

        } catch (error) {
            console.log(error);
        }

    }

    render() {
        const { spriteUrl, stats, types, moves } = this.state;
        return (
            <article className="pokemon-info flex flex-column">
                <h1>{this.props.name}</h1>
                <img src={spriteUrl} className="thumb" alt="pokemon sprite" />
                <ul className="types">
                    <li>{types}</li>
                </ul>
                <table>
                    <caption>Base Stats</caption>

                    <tbody>
                        <tr>
                            <td>HP</td><td>{stats.hp}</td>
                        </tr>
                        <tr>
                            <td>Attack</td><td>{stats.attack}</td>
                        </tr>
                        <tr>
                            <td>Defense</td><td>{stats.defense}</td>
                        </tr>
                        <tr>
                            <td>Sp. Attack</td><td>{stats.specialattack}</td>
                        </tr>
                        <tr>
                            <td>Sp. Defense</td><td>{stats.specialdefense}</td>
                        </tr>
                        <tr>
                            <td>Speed</td><td>{stats.speed}</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <caption>Moves</caption>

                    <tbody>
                        {moves.map(move => (
                            <tr key={move.name}>
                                <td>lvl. {move.learned_at_level}</td><td>{move.name}</td>
                            </tr>

                        ))}


                    </tbody>
                </table>

            </article>
        )
    }
}

export default PokemonInfo;