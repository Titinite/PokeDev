import './PokemonDetailsCard.css'

const PokemonDetailsCard = ({ pokemon }) => {

    if (!pokemon) {
        return <p>Chargement...</p>;
    }

    return (
        <article key={pokemon.id}>
            <h2>{pokemon.name}</h2>
            <p>Type : {pokemon.apiTypes[0].name} <img className="type-img" src={pokemon.apiTypes[0].image} alt={pokemon.apiTypes[0].name} /></p>
            <p>HP : {pokemon.stats.HP} - ATQ : {pokemon.stats.attack} - DEF : {pokemon.stats.defense}</p>
            <p>Génération : {pokemon.apiGeneration}</p>
            <img src={pokemon.image} alt={pokemon.name} />
        </article>
    )
}

export default PokemonDetailsCard;