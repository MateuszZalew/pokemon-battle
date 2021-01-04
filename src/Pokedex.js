import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];

  render() {
    const items = [];

    for (let i = 0; i < 8; i++) {
      items.push(
        <Pokecard
          key={i}
          id={this.props[i].id}
          name={this.props[i].name}
          type={this.props[i].type}
          base_experience={this.props[i].base_experience}
        />
      );
    }
    return (
      <>
        <h1 className="Pokedex-header">Pokedex</h1>
        <div className="Pokedex">
          {items}
          <Pokecard
            id={54}
            name="idk"
            type="some random type"
            base_experience={15}
          />
        </div>
      </>
    );
  }
}

export default Pokedex;
