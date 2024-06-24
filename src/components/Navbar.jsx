import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/random-meal'>Meal Generator</Link></li>
            <li><Link to='/favourites'>My Favourites</Link></li>
            <li><Link to='/about'>About us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar