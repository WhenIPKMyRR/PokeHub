import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/FavoritesPokemons';
import Search from '../pages/SearchPokemons';
import User from '../pages/User/Index';
import Caughts from '../pages/CaughtsPokemons';
import Pokemon from '../pages/PokemonMainPagePokeAPI';
import Login from '../pages/Login';
import ProtectedLayout from '../components/ProtectedLayout';
import AddPokemon from '../pages/AddPokemon';
import Teste from '../pages/PokemonMainPagePokeHubAPi';
import CategoryPokemon from '../pages/CategoryPokemon';

const Routies = () => {

  return (
    <Routes>
      <Route path="/" element={
        <ProtectedLayout>
          <Home />
        </ProtectedLayout>
      }/>
      <Route path="/search" element={
        <ProtectedLayout>
          <Search />
        </ProtectedLayout>
      }/>
      <Route path="/favorites" element={
        <ProtectedLayout>
          <Favorites />
        </ProtectedLayout>  
      }/>
      <Route path="/user" element={
        <ProtectedLayout>
          <User/>
        </ProtectedLayout>
      }/>
      <Route path="/caughts" element={
        <ProtectedLayout>
          <Caughts/>
        </ProtectedLayout>
      }/>
      <Route path="/pokemon/*" element={
        <ProtectedLayout>
          <Pokemon/>
        </ProtectedLayout>
      }/>
      <Route path="/pokemons/*" element={
        <ProtectedLayout>
          <Teste/>
        </ProtectedLayout>
      }/>
      <Route path="search/type/*" element={
        <ProtectedLayout>
          <CategoryPokemon/>
        </ProtectedLayout>
      }/>
      <Route path="/add" element={
        <ProtectedLayout>
          <AddPokemon/>
        </ProtectedLayout>
      }/>
      <Route path="/signIn" element={
        <Login/>
      }/>
    </Routes>

  );
}

export default Routies;
