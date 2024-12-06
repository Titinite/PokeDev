import React from "react";
import useFight from "../hooks/useFight";
import { useParams } from "react-router-dom";
import useGetPokemonById from "../hooks/useGetPokemonById";
import PokemonDetailsCard from "../components/PokemonDetailsCard";
import useGetRandomPokemon from "../hooks/useGetRandomPokemon";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

const FightGame = () => {

    const step = useFight();
    const { idPokemon } = useParams();
    const { pokemon } = useGetPokemonById(idPokemon);
    const { pokemon: ennemyPokemon } = useGetRandomPokemon();

    let egality = false;
    let winner = null;

    if (pokemon.stats.attack >= ennemyPokemon.stats.HP) {
        winner = pokemon;
    } else if (ennemyPokemon.stats.attack >= pokemon.stats.HP) {
        winner = ennemyPokemon;
    } else if (pokemon.stats.attack > ennemyPokemon.stats.attack) {
        winner = pokemon;
    } else if (ennemyPokemon.stats.attack >= pokemon.stats.attack) {
        winner = ennemyPokemon;
    } else {
        egality = true;
    }


    return (
        <>
        <Header />
        <h1>Mon combat</h1>
        <div>
            {step === 0 && <p>Préparez-vous au combat...</p>}
            {step === 1 && <p>Un Pokémon apparaît !</p>}
            {step === 2 && <p>Le combat commence !</p>}
            {step === 3 && (
                <>
                {egality ? (
                    <p>Le combat est une égalité !</p>
                ) : (
                    <p>Le vainqueur est {winner?.name} !</p>
                )}
                </>
            )}
        </div>
        <div className="pokemon-card">
            {step === 0 && <PokemonDetailsCard pokemon={pokemon}/>}
            {step === 1 && <PokemonDetailsCard pokemon={ennemyPokemon}/>}
            {step === 2 && 
                <>
                    <PokemonDetailsCard pokemon={pokemon} />
                    <PokemonDetailsCard pokemon={ennemyPokemon} />
                </>
            }
            {step === 3 && <PokemonDetailsCard pokemon={pokemon}/>}
        </div>
        <Footer />
        </>
    );
};

export default FightGame;
