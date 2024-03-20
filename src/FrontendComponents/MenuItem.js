import '../CssFiles/Menu.css';
import { Button, Card, CardImg, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
function MenuItems(props) {
    return (
        <Container className="cardContainer" fluid>

            {/* Card holds all nessasary info about the item such as allergens, ingredients and price */}
            {/* Id is to bring you to relevant day - top Button is to bring you back up */}
            
            <Card className='cards'>

                <Card.Body>
                    <Card.Title>{props.myMenuItem.name}</Card.Title>
                    <Card.Text></Card.Text>
                    <Card.Subtitle>Allergens: </Card.Subtitle>
                    <Card.Text>{props.myMenuItem.allergens} </Card.Text>
                    <Card.Subtitle>Price: €{props.myMenuItem.price}</Card.Subtitle>
                </Card.Body>
                <Link to={'/EditMenuItem/' + props.myMenuItem._id} className="">Edit</Link>

                {/* <Button onClick={(e) => {

                    axios.delete('http://localhost:4000/menu/' + props.myMenuItem._id)
                    .then((res) => {
                        let reload = props = props.Reload();
                    })
                    .catch();
                } }>Delete</Button> */}
            </Card>
            <br></br>
        </Container>
    );

}

export default MenuItems;