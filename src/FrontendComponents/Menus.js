import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardImg, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import '../CssFiles/Menu.css';

const MenuPage = () => {
  return (
    <div >
      {/* Little nav buttons to bring you to a specific day */}
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
      {/* https://react-bootstrap.netlify.app/docs/components/cards */}
      {/* There is cards with the menu items under each day heading */}
      <Container className="cardContainer" fluid>

        {/* Card holds all nessasary info about the item such as allergens, ingredients and price */}
        {/* Id is to bring you to relevant day - top Button is to bring you back up */}
        <h1 id="Monday">Monday</h1>
        <Card className='cards'>

          <Card.Body>
            <CardImg className="cardImage" src=""></CardImg>
            <Card.Title>Chicken Curry</Card.Title>
            <Card.Text></Card.Text>
            <Card.Subtitle>Ingredients</Card.Subtitle>
            <Card.Text>Diced Chicken, Jar of Curry Sauce, Stir Fry Veg Mix, Rice</Card.Text>
            <Card.Text></Card.Text>
            <Card.Subtitle>Allergens: </Card.Subtitle>
            <Card.Text>Wheat, Gluten </Card.Text>
            <Card.Subtitle>Price: 5.00</Card.Subtitle>
          </Card.Body>
        </Card>
        <br></br>
        <h1 id='Tuesday'>Tuesday</h1>
        <Card className="cards">

          <Card.Body>
            <CardImg className="cardImage" src=""></CardImg>
            <Card.Title>HomeMade Pizza</Card.Title>
            <Card.Text></Card.Text>
            <Card.Subtitle>Ingredients: </Card.Subtitle>
            <Card.Text>Pizza Base, Tomato Paste, Cheese, Topping (Optional)</Card.Text>
            <Card.Text></Card.Text>
            <Card.Subtitle>Allergens: </Card.Subtitle>
            <Card.Text>Wheat, Gluten</Card.Text>
            <Card.Subtitle>Price: 5.00</Card.Subtitle>
          </Card.Body>
        </Card>
        <br></br>
        <h1 id='Wednesday'>Wednesday</h1>
        <Card className='cards'>

          <Card.Body>
            <CardImg className="cardImage" src=""></CardImg>
            <Card.Title>Cheeseburger</Card.Title>
            <Card.Text></Card.Text>
            <Card.Subtitle>Ingredients: </Card.Subtitle>
            <Card.Text>Burger bun, lettuce, cheese, tomato, pickles and ketchup</Card.Text>
            <Card.Text></Card.Text>
            <Card.Subtitle>Allergens:</Card.Subtitle>
            <Card.Text>Wheat, Gluten</Card.Text>
            <Card.Subtitle>Price: 5.00</Card.Subtitle>
          </Card.Body>

        </Card>

        <h1 id='Thursday'>Thursday</h1>
        <Card className='cards'>

          <Card.Body>
            <CardImg className="cardImage" src=""></CardImg>
            <Card.Title>Cheeseburger</Card.Title>
            <Card.Text></Card.Text>
            <Card.Subtitle>Ingredients: </Card.Subtitle>
            <Card.Text>Burger bun, lettuce, cheese, tomato, pickles and ketchup</Card.Text>
            <Card.Text></Card.Text>
            <Card.Subtitle>Allergens:</Card.Subtitle>
            <Card.Text>Wheat, Gluten</Card.Text>
            <Card.Subtitle>Price: 5.00</Card.Subtitle>
          </Card.Body>
        </Card>

        <h1 id='Friday'>Friday</h1>
        <Card className='cards'>

          <Card.Body>
            <CardImg className="cardImage" src=""></CardImg>
            <Card.Title>Cheeseburger</Card.Title>
            <Card.Text></Card.Text>
            <Card.Subtitle>Ingredients: </Card.Subtitle>
            <Card.Text>Burger bun, lettuce, cheese, tomato, pickles and ketchup</Card.Text>
            <Card.Text></Card.Text>
            <Card.Subtitle>Allergens:</Card.Subtitle>
            <Card.Text>Wheat, Gluten</Card.Text>
            <Card.Subtitle>Price: 5.00</Card.Subtitle>
          </Card.Body>
        </Card>
      </Container>

      <a href="#Top">
        <button className="topButtons">Back to the top!</button>
      </a>
    </div>
  );
};

export default MenuPage;