import '../CssFiles/Menu.css';
import { Card, Container} from "react-bootstrap";

function HourCards(props) {
    return (
        //This is the cards that will be populated with the database information in relation to opening hours
        //Reference: I used this card layout in my Data rep project
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