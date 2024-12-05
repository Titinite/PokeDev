import Header from '../components/header/Header'
import Footer from '../components/Footer'
import useGetRandomPokemons from '../hooks/useGetRandomPokemons'
import useGetRandomTypes from '../hooks/useGetRandomTypes'
import PokemonCard from '../components/PokemonCard';
import TypeCard from '../components/TypeCard';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {

  const { pokemons } = useGetRandomPokemons()
  const { randomTypes } = useGetRandomTypes()

  if (!pokemons || !randomTypes) {
    return <p>Chargement...</p>
  }

  return (
    <>
    <Header />
    <div>
      <h1>Accueil</h1>

      <h2><Link to={"/pokemons"}>Mes Pokémons aléatoires</Link></h2>
      <div className="pokemon-list" id="pokemon-list-home">
          {pokemons.map((pokemon) => {
              return (
                  <>
                  <div className="pokemon-card" key={pokemon.id}>
                    <Link to={"/pokemon/" + pokemon.id}>
                      <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    </Link>
                  </div>
                  </>
              )
          })}
      </div>

      <h2><Link to={"/types"}>Mes Types aléatoires</Link></h2>
      <div className="types-list">
          {randomTypes.map((type) => {
              return (
                  <>
                  <div className="types-card" key={type.id}>
                    <Link to={"/type/" + type.name}>
                      <TypeCard key={type.id} type={type} />
                    </Link>
                  </div>
                  </>
              )
          })}
      </div>

    </div>
    <Footer />
    </>
  )
}

export default Home;