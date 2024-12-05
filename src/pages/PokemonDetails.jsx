import Header from '../components/header/Header'
import Footer from '../components/Footer'
import useGetPokemonById from '../hooks/useGetPokemonById'

const PokemonDetails = () => {

    const { pokemon } = useGetPokemonById();

    if (!pokemon) {
        return (
            <>
            <Header />
                <p>Chargement...</p>
            <Footer />
            </>
        )
    }

    return (
        <>
        <Header />
        <div>
            <h1>{pokemon.name}</h1>
            <p>Pokédex : {pokemon.pokedexId}</p>
            <p>Type : {pokemon.apiTypes[0].name}</p>
            <p>HP : {pokemon.stats.HP}</p>
            <p>Attack : {pokemon.stats.attack}</p>
            <p>Defense : {pokemon.stats.defense}</p>
            <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <Footer />
        </>
    )
}

export default PokemonDetails;