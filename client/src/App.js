import './App.css';
import React from 'react';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import PokemonCreate from './components/PokemonCreate/PokemonCreate';
import Details from './components/Details/Details';

function App() { // Acá se hace el ruteo // 
  return (
    <BrowserRouter>
        <Routes> 
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/:id' element={<Details/>} />
          <Route path='/pokemons' element={<PokemonCreate />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
