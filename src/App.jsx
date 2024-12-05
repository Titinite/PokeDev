import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ListPokemons from './pages/ListPokemons'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<ListPokemons />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
