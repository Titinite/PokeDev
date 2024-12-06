import React, { useEffect, useState } from "react";
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
    const { pokemon: myPokemon } = useGetPokemonById(idPokemon);
    const { pokemon: ennemyPokemon } = useGetRandomPokemon();

    const [egality, setEgality] = useState(false);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (myPokemon && ennemyPokemon) {
            console.log(ennemyPokemon)
            if (myPokemon.stats.attack >= ennemyPokemon.stats.HP) {
                setWinner(myPokemon);
            } else if (ennemyPokemon.stats.attack >= myPokemon.stats.HP) {
                setWinner(ennemyPokemon);
            } else if (myPokemon.stats.attack > ennemyPokemon.stats.attack) {
                setWinner(myPokemon);
            } else if (ennemyPokemon.stats.attack >= myPokemon.stats.attack) {
                setWinner(ennemyPokemon);
            } else {
                setEgality(true);
            }
        }
    }, [myPokemon, ennemyPokemon]);


    if (!myPokemon || !ennemyPokemon) {
        return <p>Chargement...</p>;
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
        <div className={`pokemon-card ${step === 2 ? "step-2" : ""}`}>
            {step === 0 && <PokemonDetailsCard pokemon={myPokemon}/>}
            {step === 1 && <PokemonDetailsCard pokemon={ennemyPokemon}/>}
            {step === 2 && 
                <>
                    <PokemonDetailsCard pokemon={myPokemon} />
                    <PokemonDetailsCard pokemon={ennemyPokemon} />
                </>
            }
            {step === 3 && <PokemonDetailsCard pokemon={winner}/>}
        </div>
        <Footer />
        </>
    );
};

export default FightGame;