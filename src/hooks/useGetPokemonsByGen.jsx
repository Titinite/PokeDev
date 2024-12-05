import { useEffect, useState } from 'react';

const useGetPokemonsByGen = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/3")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPokemons(data)
            })
    }, []);

    return { pokemons };
}

export default useGetPokemonsByGen;