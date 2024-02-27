import React from 'react';
import { Link } from 'react-router-dom'; 
import '../CssFiles/Home.css';

const Home = () => {
  return (
    <div className="homePage">
      {/* This page is supposed to lead you to the other pages */}
      <h1>Welcome to the ATU Canteen App!</h1>
      
      <div className="buttonsContainer">
        <Link to="/Menus">
          <button className="navButtons">Weekly Menus</button>
        </Link>
        <Link to="/Recipes">
          <button className="navButtons">Recipes</button>
        </Link>
        <Link to="/FoodPantry">
          <button className="navButtons">Food Pantry</button>
        </Link>
        <Link to="/OpeningHours">
          <button className="navButtons">Canteen Hours</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Home;