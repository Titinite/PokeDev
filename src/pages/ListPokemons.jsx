import PokemonCard from '../components/PokemonCard'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import useGetPokemonsByGen from '../hooks/useGetPokemonsByGen'

const ListPokemons = () => {

    const { pokemons } = useGetPokemonsByGen();

    if (!pokemons) {
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
            <h1>La liste des Pokémons</h1>
            {pokemons.map((pokemon) => {
                return (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                )
            })}
        </div>
        <Footer />
        </>
    )
}

export default ListPokemons;