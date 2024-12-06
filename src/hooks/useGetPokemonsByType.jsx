import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useGetPokemonByType = (type) => {
    const [pokemons, setPokemons] = useState([]);
    let { typeName } = useParams();

    if (!typeName) {
        typeName = type;
    }

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + typeName)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPokemons(data)
            })
    }, [typeName]);

    return { pokemons, typeName };
}

export default useGetPokemonByType;