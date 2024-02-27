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
            <CardImg src='https://scontent.fdub6-1.fna.fbcdn.net/v/t39.30808-6/306353716_125869190216017_3079048365503783424_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=CPtDY-L-hIUAX8G4-ck&_nc_ht=scontent.fdub6-1.fna&oh=00_AfCqDLw9zytiQebHCezq8pxcVei9zEU1jTzB81xbDwFwXw&oe=65E20137'></CardImg>
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