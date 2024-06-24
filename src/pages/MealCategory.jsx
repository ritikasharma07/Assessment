import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MealCategory({addToFavorites}) {
  const { mealType } = useParams();
  const [availMeal, setAvailMeal] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealType}`);
        setAvailMeal(response.data.meals);
      }
      catch (error) {
        console.error('Error fetching meals:', error);
      }
    }
    fetchMeals();
  }, [mealType])

  return (
    <div className='main'>
      <h1 className='heading-withBg'>{mealType}</h1>
      <div className='gridCards categorySub'>
        {availMeal.map((mealData) => (
          <div className='gridCard'>
            <div className='' key={mealData.idMeal}>
              <h1 className='cardHead'>{mealData.strMeal}</h1>
              <img className='cardImage' src={mealData.strMealThumb} alt='meal' />
              <button onClick={() => addToFavorites(mealData)}>Add Favourite</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MealCategory