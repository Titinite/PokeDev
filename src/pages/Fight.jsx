import Header from "../components/header/Header";
import Footer from "../components/Footer";
import useGetTypes from "../hooks/useGetTypes";
import './Fight.css'

const Fight = () => {

    const { types } = useGetTypes();

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
            <label for="pokemon-1">Sélectionnez un Type</label>
            <select>
                {types.map((type) => {
                    return (
                        <>
                        <option value={type.name}>{type.name}</option>
                        </>
                    )
                })}
            </select>
            <button>Combat</button>
        </form>
        <Footer />
        </>
    )
}

export default Fight;