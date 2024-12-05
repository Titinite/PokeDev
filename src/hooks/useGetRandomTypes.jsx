import { useEffect, useState } from "react";

const useGetRandomTypes = () => {
    const [types, setTypes] = useState([]);
    const [randomTypes, setRandomTypes] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/types")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setTypes(data)
            })

        const getRandomTypes = () => {
            const shuffled = types.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 3);
        };

        setRandomTypes(getRandomTypes());
    }, []);
    
    return { randomTypes };
}

export default useGetRandomTypes;