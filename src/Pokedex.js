import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "ghost", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    const pokemons = this.props.pokemons.map((p) => (
      <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
    ));
    return (
      <div className="Pokedex">
        <div className="Pokedex-title">
          <img
            src="https://fontmeme.com/permalink/210104/154365ea66213e5e5138bab47a466ae6.png"
            alt="Pokemon"
          />
        </div>
        <div className="Pokedex-cards">{pokemons}</div>
      </div>
    );
  }
}

export default Pokedex;
