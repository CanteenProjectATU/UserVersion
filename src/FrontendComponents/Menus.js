import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button, Card, CardImg, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import '../CssFiles/Menu.css';
import LoadMenuItems from './LoadMenuItem';

//This page displays the menu cards under the relevent day
const MenuPage = () => {
  //holds the menu items data
  const [data, setData] = useState([]);

  //useEffect is a React Hook that lets you synchronize a component with an external system.
  //i.e. get the items data
  useEffect(
    () => {
      //asyncrious operation taking place here - it waits
      //callback, get data from menuItems component
      axios.get('http://localhost:4000/menu_items').then((response) => {
        console.log("Getting the info"+response.data)
        setData(response.data)
      }).catch((error) => { //send an error message to the console
        console.log(error);
      });
    }, []
  );

  //to make the component automatically update when deleted so you dont have to refresh
  const Reload = (e) => {
    //get all the data from the database
    axios.get('http://localhost:4000/menu_items').then((response) => {
      setData(response.data)
    }).catch((error) => { //send an error message to the console
      console.log(error);
    });

  }

  //array with the days of the week
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  // https://stackoverflow.com/questions/55674196/how-to-filter-data-array-by-week-filter
  //https://timmousk.com/blog/react-filter/
  //function to assign a card to a specific day of the week by filtering the day of the week
  const menuItemsForEachDay = (day) => {
    const filteredData = data.filter(item => item.days?.includes(day));
    console.log(day, filteredData);
    return filteredData;
  };

  return (
    <div>
      {/* Little nav buttons to bring you to a specific day using ids */}
      <Container fluid className='dayButtonsContainer'>
        <a href="#Monday">
          <button className="dayButtons">Mon</button>
        </a>
        <a href="#Tuesday">
          <button className="dayButtons">Tue</button>
        </a>
        <a href="#Wednesday">
          <button className="dayButtons">Wed</button>
        </a>
        <a href="#Thursday">
          <button className="dayButtons">Thu</button>
        </a>
        <a href="#Friday">
          <button className="dayButtons">Fri</button>
        </a>
      </Container>

      {/* This is for displaying the menu item cards, it is split into sections for the specific day*/}
      {days.map((day) => (
        <div key={day}>
          {/* Put the id heading and pass it the relevent day id */}
           <h1 id={day}>{day}</h1> 
           {/* call the loadMenuItem componnets that should filter each day */}
          <LoadMenuItems myMenuItems={menuItemsForEachDay(day)} ReloadData={Reload}></LoadMenuItems>
        </div>
      ))}
     
    </div>
  )
  
};

export default MenuPage;