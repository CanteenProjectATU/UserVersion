import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardImg, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import '../CssFiles/Menu.css';

const MenuPage = () => {
  return (
    <div>
      {/* https://react-bootstrap.netlify.app/docs/components/cards */}
      {/* There is cards with the menu items under each day heading */}
      <Container className="cardContainer">

      {/* Card holds all nessasary info about the item such as allergens, ingredients and price */}
      <h1>Monday</h1>
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
          {/* Delete button for later*/}
          <Button className='deleteButton' size="sm">Delete</Button>
        </Card>
        <br></br>
        <h1>Tuesday</h1>
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
        
          <Button className='deleteButton'>Delete</Button>
        </Card>
        <br></br>
        <h1>Wednesday</h1>
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
         
          <Button className='deleteButton'>Delete</Button>
        </Card>
      </Container>
    </div>
  );
};

export default MenuPage;