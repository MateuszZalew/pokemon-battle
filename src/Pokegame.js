import React, { Component } from "react";
import Pokedex from "./Pokedex";
import "./Pokegame.css";

class Pokegame extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemons];
    while (hand1.length < hand2.length) {
      let randomIndex = Math.floor(Math.random() * hand2.length);
      let pokemon = hand2.splice(randomIndex, 1)[0];
      hand1.push(pokemon);
    }
    let exp1 = hand1.reduce(
      (exp, pokemons) => exp + pokemons.base_experience,
      0
    );
    let exp2 = hand2.reduce(
      (exp, pokemons) => exp + pokemons.base_experience,
      0
    );
    return (
      <div className="Pokegame">
        <div className="Pokegame-title">
          <img
            src="https://fontmeme.com/permalink/210104/154365ea66213e5e5138bab47a466ae6.png"
            alt="Pokemon"
          />
        </div>
        <Pokedex pokemons={hand1} num={1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemons={hand2} num={2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
