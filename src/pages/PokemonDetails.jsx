import { useParams } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import useGetPokemonById from '../hooks/useGetPokemonById'
import PokemonDetailsCard from '../components/PokemonDetailsCard'

const PokemonDetails = () => {

    const { id } = useParams();
    const { pokemon } = useGetPokemonById(id);

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
            <PokemonDetailsCard pokemon={pokemon} />
        </div>
        <Footer />
        </>
    )
}

export default PokemonDetails;