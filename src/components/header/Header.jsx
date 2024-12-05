import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <nav>
        <ul>
            <li><Link to={"/"}><h2 id="name-header">Accueil</h2></Link></li>
            <li><Link to={"/"}><img src="src/assets/pokeball.png" alt="PokeBall" id="logo-header" /></Link></li>
            <li><Link to={"/pokemons"}>Liste</Link></li>
            <li>
                <form action="">
                    <input type="text" placeholder="Rechercher" />
                    <input type="submit" value="Rechercher" />
                </form>
            </li>
            
        </ul>
      </nav>
    </header>
  )
}

export default Header;