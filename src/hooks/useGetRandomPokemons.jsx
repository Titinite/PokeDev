import { useEffect, useState } from "react";

const useGetRandomPokemons = () => {
    const [pokemons, setPokemon] = useState([]);

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setPokemon(data)
        })
    }, []);
    
    return { pokemons };
}

export default useGetRandomPokemons;