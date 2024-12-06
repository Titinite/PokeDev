import { useEffect, useState } from "react";

const useGetRandomTypes = () => {
    const [randomTypes, setRandomTypes] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/types")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const shuffled = data.sort(() => 0.5 - Math.random());
                setRandomTypes(shuffled.slice(0, 3));
            })
    }, []);
    
    return { randomTypes };
}

export default useGetRandomTypes;