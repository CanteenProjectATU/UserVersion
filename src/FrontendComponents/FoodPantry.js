import React from 'react';
import { Link } from 'react-router-dom';
import '../CssFiles/Pantry.css';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';

const FoodPantry = () => {
    return (
        <div className="PantryPage">

            {/* https://react-bootstrap.netlify.app/docs/components/dropdowns */}
            {/* Make 3 buttons that when clicked display the answer to the question on the button */}
            <Container className="dropdownsContainer" fluid>
                <Dropdown>
                    <Dropdown.Toggle className="pantryButtons" id="dropdown-basic">
                        What is it?
                    </Dropdown.Toggle>
                    <Dropdown.Menu fluid>
                        <Dropdown.Item href="#">ATU and FoodCloud<br></br> have made a service <br></br>fill your tote bag with<br></br> quality food items.</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle className="pantryButtons" variant="primary" id="dropdown-where">
                        Where is it?
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Unit 3 Room 623A</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle className="pantryButtons" variant="primary" id="dropdown-who">
                        Who is it for?
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Any student with €5<br></br> and a tote bag!</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>


        </div>
    );
};

export default FoodPantry;