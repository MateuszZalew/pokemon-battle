import React, { Component } from "react";
import Pokegame from "./Pokegame";
import "./App.css";
import { rollPokemons } from "./helpers";

class App extends Component {
  static defaultProps = {
    pokemons1: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "ghost", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
    pokemons2: [
      { id: 6, name: "Charizard", type: "fire", base_experience: 240 },
      { id: 9, name: "Blastoise", type: "water", base_experience: 239 },
      { id: 13, name: "Weedle", type: "bug", base_experience: 39 },
      { id: 18, name: "Pidgeot", type: "flying", base_experience: 216 },
      { id: 36, name: "Clefable", type: "fairy", base_experience: 217 },
      { id: 147, name: "Dratini", type: "dragon", base_experience: 60 },
      { id: 105, name: "Marowak", type: "ground", base_experience: 149 },
      { id: 122, name: "Mr.Mime", type: "psychic", base_experience: 161 },
    ],
  };
  render() {
    const { pokemons1, pokemons2 } = this.props;
    return (
      <>
        <Pokegame pokemons={rollPokemons() === 1 ? pokemons1 : pokemons2} />
      </>
    );
  }
}
export default App;
