import Header from '../components/header/Header'
import Footer from '../components/Footer'
import useGetRandomPokemons from '../hooks/useGetRandomPokemons'
import PokemonCard from '../components/PokemonCard';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {

  const { pokemons } = useGetRandomPokemons()

  if (!pokemons) {
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
                  <div className="pokemon-card">
                    <Link to={"/pokemon/" + pokemon.id}>
                      <PokemonCard key={pokemon.id} pokemon={pokemon} />
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