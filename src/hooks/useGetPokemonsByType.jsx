import { useEffect, useState } from 'react';

const useGetPokemonByType = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Eau")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPokemons(data)
            })
    }, []);

    return { pokemons };
}

export default useGetPokemonByType;