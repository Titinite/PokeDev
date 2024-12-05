import { useState, useEffect } from 'react'

const useGetTypes = () => {

    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/types")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setTypes(data)
            })
    }, []);

    return { types };
}

export default useGetTypes;