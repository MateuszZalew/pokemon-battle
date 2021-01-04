import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  giveId(id) {
    if (id <= 9) {
      return `00${id}`;
    } else if (id < 99) {
      return `0${id}`;
    } else {
      return id;
    }
  }

  render() {
    const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.giveId(
      this.props.id
    )}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-name">{this.props.name}</h1>
        <img src={imgSrc} alt="Pokemon" />
        <p className="Pokecard-type">Type: {this.props.type}</p>
        <p className="Pokecard-exp">EXP: {this.props.base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
