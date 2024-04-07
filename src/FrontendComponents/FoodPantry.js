import React from 'react';
import '../CssFiles/Pantry.css';
import { Container } from 'react-bootstrap';

//This page is static information about the Food Pantry
const FoodPantry = () => {
    return (
        <div className="PantryPage">
            {/* Changed to headers for easier reading as requested */}
            <Container className="dropdownsContainer" fluid>
                
                <h1>What is it?</h1>
                <h3>ATU and FoodCloud have made a service fill your tote bag with quality food items.</h3>

                <h1>Where and When is it??</h1>
                <h3>Unit 3 Room 623A from 1pm - 3pm on Wednesdays!</h3>

                <h1>Who is it for?</h1>
                <h3>Any student with €5 cash and a tote bag!</h3>
            </Container>


        </div>
    );
};

export default FoodPantry;