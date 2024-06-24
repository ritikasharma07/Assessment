import './scss/index.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import MealCategory from './pages/MealCategory';
import Menu from './pages/Menu';
import RandomMeal from './pages/RandomMeal';
import NotFound from './pages/NotFound';
import { useState } from 'react';

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (mealData) => {
    if (!favorites.some(favorite => favorite.idMeal === mealData.idMeal)) {
      setFavorites([...favorites, mealData]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(meal => meal.idMeal !== id));
  };
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Menu}/>
      <Route path='/about' Component={AboutUs}/>
      <Route path='/favourites' element={<Favourites favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        <Route path='/category/:mealType' element={<MealCategory addToFavorites={addToFavorites} />} />
      <Route path='/menu' Component={Menu}/>
      <Route path='/random-meal' Component={RandomMeal}/>
      <Route path='*' Component={NotFound}/>

    </Routes>
    </Router>
      
      
    </>
  );
}

export default App;
