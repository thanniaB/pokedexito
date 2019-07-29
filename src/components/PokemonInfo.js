import React from 'react';

class PokemonInfo extends React.Component {
    render() {
        return (
            <article>
                <h1>Bulbasar</h1>
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