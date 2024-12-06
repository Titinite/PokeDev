import Header from '../components/header/Header'
import Footer from '../components/Footer'
import PokemonCard from '../components/PokemonCard';
import { useSearchParams } from 'react-router-dom'
import useGetPokemon from '../hooks/useGetPokemon';

const SearchResult = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    
    const { pokemon, isLoading } = useGetPokemon(query);

    if (isLoading) {
        return (
            <>
            <Header />
            <p>Chargement...</p>
            <Footer />
            </>
        )
    }

    if (!pokemon) {
        return (
            <>
            <Header />
            <p>Le Pokémon n'existe pas !</p>
            <Footer />
            </>
        )
    }

    if (!query) {
        return (
            <>
            <Header />
            <p>Veuillez entrer un nom de Pokémon !</p>
            <Footer />
            </>
        )
    }

    return (
        <>
        <Header />
        <div>
            <h1>Résultats de la recherche</h1>
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
        </div>
        <Footer />
        </>
    )
}

export default SearchResult;