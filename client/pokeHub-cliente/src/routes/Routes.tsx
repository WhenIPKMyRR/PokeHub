import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Favorites from '../pages/favorites/Favorites';
import Search from '../pages/search/search';
import User from '../pages/user/user';
import Caughts from '../pages/caughts/caughts';
import Pokemon from '../pages/pokemon/pokemon';

const Routies = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/user" element={<User />} />
      <Route path="/caughts/*" element={<Caughts />} />
      <Route path="/pokemon/*" element={<Pokemon/>}/>
    </Routes>

  );
}

export default Routies;
