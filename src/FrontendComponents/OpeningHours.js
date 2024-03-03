import React from 'react';
import { Link } from 'react-router-dom';
import '../CssFiles/Hours.css';
import { Button, Card, CardImg, Container, Nav, Navbar } from 'react-bootstrap';

const OpeningHours = () => {
  return (
    <div>
      {/* Make a singular card to display the static opening hour information */}
      {/* https://react-bootstrap.netlify.app/docs/components/cards */}
      <Container className="cardContainer">
        <Card className='hourCard'>

          <Card.Body>
            <CardImg src='/CanteenImage.jpeg' className='image'></CardImg>
            <Card.Title>Opening Hours</Card.Title>
            <Card.Text></Card.Text>
            <Card.Subtitle>Monday - Thursday:</Card.Subtitle>
            <Card.Text>8:30am - 8pm</Card.Text>
            <Card.Text></Card.Text>
            <Card.Subtitle>Friday:</Card.Subtitle>
            <Card.Text>8:30am - pm</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default OpeningHours;