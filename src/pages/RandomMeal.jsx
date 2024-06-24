// RandomMealPage.js
import React, { useState } from 'react';
import axios from 'axios';

const RandomMealPage = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  const generateRandomMeal = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      setRandomMeal(response.data.meals[0]);
    } catch (error) {
      console.error('Error fetching random meal:', error);
    }
  };

  return (
    <div className='main'>
    <h1 className='heading-withBg'>Random Meal Generator</h1>
    <button className='btn-secondary' onClick={generateRandomMeal}>Generate Random Meal</button>
    <div className='gridCards single-grid'>
    {randomMeal && (
        <div className="gridCard">
          <h3 className='cardHead'>{randomMeal.strMeal}</h3>
          <img className='cardImage' src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
          <button>Add Favorites</button>
        </div>
      )}
    </div>
  </div>
  );
}

export default RandomMealPage;
