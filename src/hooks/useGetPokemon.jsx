import { useState, useEffect } from 'react'

const useGetPokemon = (query = null) => {

    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    let url = "https://pokebuildapi.fr/api/v1/pokemon/";

    if (query) {
        url += query;
    }

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setPokemon(data)
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [query]);

    return { pokemon, isLoading };
}

export default useGetPokemon;