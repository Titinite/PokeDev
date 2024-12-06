const PokemonDetailsCard = ({ pokemon }) => {

    if (!pokemon) {
        return <p>Chargement...</p>
    }

    return (
        <article key={pokemon.id}>
            <h2>{pokemon.name}</h2>
            <p>Type : {pokemon.apiTypes[0].name}</p>
            <p>HP : {pokemon.stats.HP}</p>
            <p>Attack : {pokemon.stats.attack}</p>
            <p>Defense : {pokemon.stats.defense}</p>
            <img src={pokemon.image} alt={pokemon.name} />
        </article>
    )
}

export default PokemonDetailsCard;