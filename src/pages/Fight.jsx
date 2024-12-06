import Header from "../components/header/Header";
import Footer from "../components/Footer";
import useGetTypes from "../hooks/useGetTypes";
import './Fight.css'
import { useRef } from "react";

const Fight = () => {

    const { types } = useGetTypes();
    const selectRef = useRef(null);

    const handleButtonClick = (event) => {
        event.preventDefault();
        console.log(selectRef.current.value);
    }


    if (!types) {
        return (
            <>
            <Header />
            <p>Chargement...</p>
            <Footer />
            </>
        )
    }

    return (
        <>
        <Header />
        <h1>Combat</h1>
        <form id="type-selector" action="">
            <label>Sélectionnez un Type</label>
            <select ref={selectRef}>
                {types.map((type) => {
                    return (
                        <>
                        <option value={type.name}>{type.name}</option>
                        </>
                    )
                })}
            </select>
            <button onClick={handleButtonClick}>Combat</button>
        </form>
        <Footer />
        </>
    )
}

export default Fight;