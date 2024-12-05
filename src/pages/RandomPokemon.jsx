import Header from '../components/header/Header'
import Footer from '../components/Footer'
import useGetRandomPokemon from '../hooks/useGetRandomPokemon'
import PokemonCard from '../components/PokemonCard';

const RandomPokemon = () => {

    const { pokemon } = useGetRandomPokemon()

    if (!pokemon) {
        return <p>Chargement...</p>
    }

    return (
        <>
        <Header />
        <div>
            <h1>Un pokémon aléatoire</h1>
            <PokemonCard pokemon={pokemon} />
        </div>
        <Footer />
        </>
    )
}

export default RandomPokemon;