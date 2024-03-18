import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardImg, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import '../CssFiles/Menu.css';
import LoadMenuItems from './LoadMenuItem';

//This page displays the menu cards under the relevent day
const MenuPage = () => {
  //holds the menu items data
  const [data, setData] = useState([]);
  const { day } = useParams();  //takes day from url
  const navigate = useNavigate();

  //useEffect is a React Hook that lets you synchronize a component with an external system.
  //i.e. get the items data
  useEffect(
    () => {
      if (day) {
        //asyncrious operation taking place here - it waits
        //callback, get data from menuItems component
        axios.get('http://localhost:4000/menu/${day}').then((response) => {
          setData(response.data)
        }).catch((error) => { //send an error message to the console
          console.log(error);
        });
      }

    }, [day]
  );

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const clickDayButtons = (chosenDay) => {
    navigate('/menu/${selectedDay}');
  }

  //to make the component automatically update when deleted so you dont have to refresh
  const Reload = (e) => {
    //get all the data from the database
    axios.get('http://localhost:4000/menu_items').then((response) => {
      setData(response.data)
    }).catch((error) => { //send an error message to the console
      console.log(error);
    });

  }

  return (
    <div className="menuPage">
      {/* This page is supposed to lead you to the other pages */}
      

      <Container className="buttonsContainer" fluid>
        {days.map(day => (
          <button key={day} className='navButtons' onClick={()=>clickDayButtons(day)}>
            {day}
          </button>
        ))}
      </Container>

      {day && (
        <ul>
          {data.map(item => (
            <li key={item._id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  )

};

export default MenuPage;