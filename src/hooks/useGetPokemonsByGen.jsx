import { useEffect, useState } from 'react';

const useGetPokemonsByGen = (genParam) => {
    const [pokemons, setPokemons] = useState([]);
    const [generation, setGeneration] = useState(genParam);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/" + generation)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPokemons(data)
            })
    }, [generation]);

    return { pokemons, generation };
}

export default useGetPokemonsByGen;