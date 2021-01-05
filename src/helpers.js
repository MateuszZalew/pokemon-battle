function rollPokemons() {
    const randomIndex = Math.floor(Math.random() * 2) + 1;
    return randomIndex;
}

export { rollPokemons };
