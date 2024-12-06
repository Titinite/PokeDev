import Header from "../components/header/Header";
import Footer from "../components/Footer";
import useGetTypes from "../hooks/useGetTypes";
import useGetPokemonByType from "../hooks/useGetPokemonsByType";
import './FightLobby.css'
import { useRef, useEffect, useState } from "react";
import PokemonBattleCard from "../components/PokemonBattleCard";

const Fight = () => {

    const { types } = useGetTypes();
    const selectRef = useRef(null);
    const [type, setType] = useState("Normal");
    const { pokemons } = useGetPokemonByType(type);

    const handleButtonClick = (event) => {
        event.preventDefault();
        setType(selectRef.current.value);
    };

    useEffect(() => {
        if (!types || types.length === 0) {
            return;
        }
    }, [types]);


    if (!types) {
        <>
        <Header />
        return (
            <p>Chargement...</p>
        )
        <Footer />
        </>
    }

    return (
        <>
        <Header />
        <h1>Combat</h1>
        <form id="type-selector" action="" onSubmit={handleButtonClick}>
            <label>Sélectionnez un Type</label>
            <select ref={selectRef}>
                {types.map((typeItem) => {
                    return (
                        <>
                        <option key={typeItem.name} value={typeItem.name}>{typeItem.name}</option>
                        </>
                    )
                })}
            </select>
            <button type="submit">Choisir</button>
        </form>
        
        <div>
            {pokemons.length > 0 ? (
                <div className="pokemon-list">
                    {pokemons.slice(0, 10).map((pokemon) => (
                        <div className="pokemon-card">
                            <PokemonBattleCard pokemon={pokemon}/>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Aucun Pokémon trouvé pour ce type.</p>
            )}
        </div>

        <Footer />
        </>
    )
}

export default Fight;