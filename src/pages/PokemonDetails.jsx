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
            <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <Footer />
        </>
    )
}

export default PokemonDetails;