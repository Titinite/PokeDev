const PokemonCard = ({ pokemon }) => {
    return (
        <article key={pokemon.id}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
        </article>
    )
}

export default PokemonCard;