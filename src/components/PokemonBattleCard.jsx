import './PokemonBattleCard.css'
import { Link } from 'react-router-dom'

const PokemonBattleCard = ({ pokemon }) => {

    if (!pokemon) {
        return <p>Chargement...</p>;
    }

    return (
        <Link to={"/fight/game/" + pokemon.id}>
            <article key={pokemon.id}>
                <h2 className="battle-card">{pokemon.name}</h2>
                <p className="battle-card">Type : {pokemon.apiTypes[0].name} <img className="type-img" src={pokemon.apiTypes[0].image} alt={pokemon.apiTypes[0].name} /></p>
                <p className="battle-card">HP : {pokemon.stats.HP} - ATQ : {pokemon.stats.attack} - DEF : {pokemon.stats.defense}</p>
                <p className="battle-card">Génération : {pokemon.apiGeneration}</p>
                <img src={pokemon.image} alt={pokemon.name} />       
            </article>
        </Link>
    )
}

export default PokemonBattleCard;