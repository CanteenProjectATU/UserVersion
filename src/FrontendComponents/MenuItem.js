import '../CssFiles/Menu.css';
import { Card, Container } from "react-bootstrap";

function MenuItems(props) {

    return (
        <Container className="cardContainer" fluid>
            {/* Card holds all nessasary info about the item such as allergens, ingredients and price */}
            {/* {props.myMenuItem.variable} would show the data from the database */}

            <Card className='cards' >
                <Card.Body>
                    <Card.Title>{props.myMenuItem.name}</Card.Title>
                    {/* Blank cand text to space out the information */}
                    <Card.Text></Card.Text>
                    <Card.Subtitle>Allergens: </Card.Subtitle>
                    <Card.Text>{props.myMenuItem.allergens} </Card.Text>
                    <Card.Subtitle>Description:</Card.Subtitle>
                    <Card.Text>{props.myMenuItem.description}</Card.Text>
                    <Card.Subtitle>Price: €{props.myMenuItem.price}</Card.Subtitle>
                    <Card.Text></Card.Text>
                   
                </Card.Body>
            </Card>
            <br></br>
        </Container>
    );

}

export default MenuItems;