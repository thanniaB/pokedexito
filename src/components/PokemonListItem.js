import React from 'react';

class PokemonListItem extends React.Component {
    state = {
        spriteUrl : ''
    }

    componentDidMount() {
        this.setSpriteUrl(this.props.number);
    }

    setSpriteUrl = (number) => {
        if(number > 807) {
            this.getSpriteUrlFromApi(number);
        } else {
            this.setState({spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`})
        }
    }

    getSpriteUrlFromApi = async () => {
        try {
            const currentPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`).then(function (response) {
                return response.json();
            });
            const spriteUrl = currentPokemon.sprites.front_default;
            if(spriteUrl) {
                this.setState({spriteUrl});
            }
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (
            <li className="flex flex-row">
                <img src={this.state.spriteUrl} className="thumb" />
                <div>
                    <span className="number"> {this.props.number} </span>
                    <h1> {this.props.name} </h1>
                </div>
            </li>
        )
    }
}

export default PokemonListItem;