import React from 'react';
import { Link } from 'react-router-dom'; 
import '../CssFiles/Home.css';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="homePage">
      {/* This page is supposed to lead you to the other pages */}
      <h1>Welcome to the ATU Canteen App!</h1>
      
      <Container className="buttonsContainer" fluid>
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
        
      </Container>
    </div>
  );
};

export default Home;