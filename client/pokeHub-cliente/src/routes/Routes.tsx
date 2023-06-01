import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Favorites from '../pages/favorites/Favorites';
import Search from '../pages/search/search';
import User from '../pages/user/user';
import Caughts from '../pages/caughts/caughts';
import Pokemon from '../pages/pokemon/pokemon';
import Login from '../pages/login/login';
import ProtectedLayout from '../components/protected-layout/protectedLayout';
import AddPokemon from '../pages/addPokemon/addPokemon';
import Teste from '../pages/teste/testePoekApi';

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
