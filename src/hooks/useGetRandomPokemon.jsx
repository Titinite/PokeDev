import { useEffect, useState } from "react";

const useGetRandomPokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setPokemon(data[0])
        })
    }, []);

    return { pokemon };
}

export default useGetRandomPokemon;