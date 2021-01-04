import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
  giveId(num) {
    if (num <= 9) {
      return `00${num}`;
    } else if (num < 99) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  giveBackgroundColor() {
    return this.props.type;
  }

  render() {
    const { id, name, type, exp } = this.props;
    const imgSrc = `${POKE_API}${this.giveId(id)}.png`;
    const backgroundColorClass = `Pokecard-${type}`;
    return (
      <div className={`Pokecard ${backgroundColorClass}`}>
        <h1 className="Pokecard-name">{name}</h1>
        <img src={imgSrc} alt={name} />
        <p className="Pokecard-data">Type: {type}</p>
        <p className="Pokecard-data">EXP: {exp}</p>
      </div>
    );
  }
}

export default Pokecard;
