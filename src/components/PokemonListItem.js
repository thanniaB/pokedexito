import React from 'react';

class PokemonListItem extends React.Component {
    render() {
        return (
            <li>
                <img src="http://orig13.deviantart.net/521f/f/2016/064/f/e/vector__271___bulbasaur__2_by_dashiesparkle-d9axmb6.png" className="thumb" />
                <div>
                    <span className="number"> 001 </span>
                    <h1> Bulbasaur </h1>
                </div>
            </li>
        )
    }
}

export default PokemonListItem;