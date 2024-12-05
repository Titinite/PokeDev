import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ListPokemons from './pages/ListPokemons'
import RandomPokemon from './pages/RandomPokemon';
import SearchResult from './pages/SearchResult';
import ListTypes from './pages/ListTypes';
import ListPokemonsByType from './pages/ListPokemonsByType';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<ListPokemons />} />
        <Route path="/types" element={<ListTypes />} />
        <Route path="/type/:typeName" element={<ListPokemonsByType />} />
        <Route path="/random-pokemon" element={<RandomPokemon />} />
        <Route path="/search-result" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
