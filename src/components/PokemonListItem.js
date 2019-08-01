import React from 'react';

class PokemonListItem extends React.Component {
    state = {
        spriteUrl: '',
        gameIndex: ''
    }

    componentDidMount() {
        this.getApiData();

    }

    getApiData = async () => {
        try {
            const currentPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`).then(function (response) {
                return response.json();
            });
            const spriteUrl = currentPokemon.sprites.front_default;

            if (spriteUrl) {
                this.setState({ spriteUrl });
            }

            if (currentPokemon.game_indices[0]) {
                let gameIndex = currentPokemon.game_indices[0].game_index.toString();
                console.log(gameIndex);
                if(gameIndex.length === 1) {
                    gameIndex = `00${gameIndex}`;
                } else if(gameIndex.length === 2) {
                    gameIndex = `0${gameIndex}`;
                }
                this.setState({ gameIndex });
            }


        } catch (error) {
            console.log(error);
        }

    }

    handleClick = () => {
        this.props.handleClick(this.props.name);
    }

    render() {
        return (
            <li className="flex flex-row" onClick={this.handleClick}>
                <img src={this.state.spriteUrl} className="thumb" alt="pokemon sprite" />
                <div>
                    <span className="number"> {this.state.gameIndex} </span>
                    <h1> {this.props.name} </h1>
                </div>
            </li>
        )
    }
}

export default PokemonListItem;