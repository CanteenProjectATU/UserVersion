import '../CssFiles/Menu.css';
import { Button, Card, CardImg, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
function HourCards(props) {
    return (
        <Container className="cardContainer" fluid>
            <Card className='cards'>

                <Card.Body>
                    <Card.Title>{props.myOpeningHour.day}</Card.Title>
                    <Card.Text></Card.Text>
                    <Card.Subtitle>Opening Time: </Card.Subtitle>
                    <Card.Text>{props.myOpeningHour.openingTime} </Card.Text>
                    <Card.Subtitle>Closing Time:</Card.Subtitle>
                    <Card.Text>{props.myOpeningHour.closingTime}</Card.Text>
                </Card.Body>
             
            </Card>
            <br></br>
        </Container>
    );

}

export default HourCards;