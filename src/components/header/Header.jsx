import './Header.css'
import { Link, useNavigate} from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.query.value;
    navigate("/search-result?query=" + searchQuery);
  }


  return (
    <header>
      <nav>
        <ul>
            <li><h2 id="name-header">PokéDev</h2></li>
            <li><Link to={"/"}><img src="src/assets/pokeball.png" alt="PokeBall" id="logo-header" /></Link></li>
            <li><Link to={"/pokemons"}>Liste</Link></li>
            <li><Link to={"/random-pokemon"}>Aléatoire</Link></li>
            <li>
                <form method="get" onSubmit={handleSubmitSearch}>
                    <input type="text" name="query" placeholder="Rechercher" />
                    <input type="submit" value="➜" />
                </form>
            </li>
            
        </ul>
      </nav>
    </header>
  )
}

export default Header;