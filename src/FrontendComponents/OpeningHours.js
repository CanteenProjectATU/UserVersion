import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../CssFiles/Hours.css';
import { Button, Card, CardImg, Container, Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';
import LoadOpeningHours from './LoadOpeningHours';

const OpeningHours = () => {
  //get opening hours information from mongo db
  const [openingHours, setOpeningHours] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/opening_hours')
      .then(response => {
        setOpeningHours(response.data);
      })
      .catch(error => console.error("There was an error fetching the opening hours:", error));
  }, []);

  return (
    <div>
      <LoadOpeningHours myOpeningHours={openingHours}></LoadOpeningHours>
    </div>
  );
}

export default OpeningHours;