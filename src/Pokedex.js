import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const pokemons = this.props.pokemons.map((p) => (
      <Pokecard
        key={p.id}
        id={p.id}
        name={p.name}
        type={p.type}
        exp={p.base_experience}
      />
    ));
    const { num, exp, isWinner } = this.props;
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-title">
          Pokedex #{num}{" "}
          <span className={isWinner ? "Pokedex-win" : "Pokedex-lose"}>
            {isWinner ? "Winner!" : "Loser :("}
          </span>
        </h1>
        <p className="Pokedex-exp">Total experience: {exp}</p>
        <div className="Pokedex-cards">{pokemons}</div>
      </div>
    );
  }
}

export default Pokedex;
