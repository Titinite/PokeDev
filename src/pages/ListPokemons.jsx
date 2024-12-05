import PokemonCard from '../components/PokemonCard'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import useGetPokemonsByGen from '../hooks/useGetPokemonsByGen'

const ListPokemons = () => {

    const { pokemons, generation } = useGetPokemonsByGen();

    if (!pokemons || generation === 0) {
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
        <h1>La liste des Pokémons</h1>
        <h2>Génération {generation}</h2>
        <div className="pokemon-list">
            {pokemons.map((pokemon) => {
                return (
                    <>
                    <div className="pokemon-card">
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    </div>
                    </>
                )
            })}
        </div>
        <Footer />
        </>
    )
}

export default ListPokemons;