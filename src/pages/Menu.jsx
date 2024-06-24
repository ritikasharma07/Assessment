import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import MealCard from '../components/MealCard';

const Menu = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => setCategories(response.data.categories))
      .catch(error => console.log(error))
  }, [])
  
  return (
    <>
      <div className='main'>
      <div className='gridCards'>
        {categories.map(category => (
          <div className='gridCard' key={category.idCategory}>
            <Link to={`/category/${category.strCategory}`}>
            <h2 className='cardHead'>{category.strCategory}</h2>
            <img className='cardImage' src={category.strCategoryThumb} alt={category.strCategory} />
            </Link>
        </div>
        ))}

      </div>
      </div>
    </>
  )
}

export default Menu


