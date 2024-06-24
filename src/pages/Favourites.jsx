import React from 'react'

function Favourites({favorites, removeFromFavorites}) {
  return (
    <div className='main'>
    <h1 className='heading-withBg'>My favourite meals</h1>
    <div className='gridCards categorySub'>
    {favorites.map(meal => (
      <div className='gridCard'>
          <div key={meal.idMeal}>
          <h2 className='cardHead'>{meal.strMeal}</h2>
            <img className='cardImage' src={meal.strMealThumb} alt="meal" />
            <button onClick={() => removeFromFavorites(meal.idMeal)}>Remove</button>
          </div>
          </div>
        ))}
    </div>
    </div>
  )
}

export default Favourites