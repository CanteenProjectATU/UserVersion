import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import '../CssFiles/Menu.css';
import '../CssFiles/Day.css';

//This page displays the navigation buttons to each day
const MenuPage = () => {

  //Using this to programmatically navigate to the day pages
  const navigate = useNavigate();
  //An arry of the days of the week to use in the map function
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  //This function is called when the day button is clicked
  //chosenDay is the day picked by the person
  const clickDayButtons = (chosenDay) => {
    navigate(`/day/${chosenDay}`);//go to this url
  }

  //render the page
  return (
    <div className="dayPage">
      {/* This page is supposed to lead you to the other pages */}
      <Container className="buttonsContainer" fluid>
        {/* Map function - for each day there is a button, when that button is clicked call the clickDayButtons function */}
        {days.map(day => (
          <button key={day} className='navButtons' onClick={() => clickDayButtons(day)}>
            {/* {day} displays the string */}
            {day}
          </button>
        ))}
      </Container>

    </div>
  )

};

export default MenuPage;