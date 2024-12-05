import { useEffect, useState } from 'react';

const useGetPokemonsByGen = () => {
    const [pokemons, setPokemons] = useState([]);
    const [generation, setGeneration] = useState(1);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/" + generation)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPokemons(data)
            })
    }, []);

    return { pokemons, generation };
}

export default useGetPokemonsByGen;