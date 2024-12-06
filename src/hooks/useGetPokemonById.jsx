import { useEffect, useState } from "react";

const useGetPokemonById = (id) => {
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + id)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setPokemon(data)
        })
    }, []);

    return { pokemon };
}

export default useGetPokemonById;