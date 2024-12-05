import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useGetPokemonByType = () => {
    const [pokemons, setPokemons] = useState([]);
    const { typeName } = useParams();

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + typeName)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPokemons(data)
            })
    }, []);

    return { pokemons, typeName };
}

export default useGetPokemonByType;