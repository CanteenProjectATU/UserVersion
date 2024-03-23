import React, { useEffect, useState } from 'react';
import '../CssFiles/Hours.css';
import axios from 'axios';
import LoadOpeningHours from './LoadOpeningHours';

const OpeningHours = () => {
  //Set use state to an empty array
  const [openingHours, setOpeningHours] = useState([]);

  //use effect hook to get the opening hours from the database
  useEffect(() => {
    axios.get('http://localhost:4000/opening_hours')
      .then(response => {
        setOpeningHours(response.data);
      })
      .catch(error => console.error("There was an error fetching the opening hours:", error));
  }, []);

  //call the LoadOpeningHours component
  return (
    <div>
      <LoadOpeningHours myOpeningHours={openingHours}></LoadOpeningHours>
    </div>
  );
}

export default OpeningHours;