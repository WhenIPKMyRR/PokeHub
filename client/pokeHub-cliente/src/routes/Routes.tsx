import { Routes, Route } from 'react-router';
import Home from '../pages/home/home';
import Favorites from '../pages/favorites/Favorites';
import Search from '../pages/search/search';
import User from '../pages/user/user';

const Routies = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default Routies;
