import PokemonDetailsCard from '../components/PokemonDetailsCard'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import useGetPokemonsByGen from '../hooks/useGetPokemonsByGen'

const ListPokemons = () => {

    const generations = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
        <Header />
        <h1>La liste des Pokémons</h1>
        {generations.map((generation) => {
            const { pokemons } = useGetPokemonsByGen(generation);

            if (!pokemons) {
                return <p key={generation}>Chargement des Pokémons pour la génération {generation}...</p>;
            }

            return (
                <div key={generation}>
                    <h2>Génération {generation}</h2>
                    <div className="pokemon-list">
                        {pokemons.map((pokemon) => (
                            <div className="pokemon-card" key={pokemon.id}>
                                <PokemonDetailsCard pokemon={pokemon} />
                            </div>
                        ))}
                    </div>
                </div>
            );
        })}
        <Footer />
        </>
    );
}

export default ListPokemons;