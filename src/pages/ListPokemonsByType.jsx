import PokemonCard from '../components/PokemonCard'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import useGetPokemonsByType from '../hooks/useGetPokemonsByType'

const ListPokemonsByType = () => {

    const { pokemons, typeName } = useGetPokemonsByType();

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
        <h1>La liste des Pokémons</h1>
        <h2>Type : {typeName}</h2>
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

export default ListPokemonsByType;