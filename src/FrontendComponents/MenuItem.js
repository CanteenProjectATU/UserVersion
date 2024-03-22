import '../CssFiles/Menu.css';
import { Button, Card, CardImg, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
function MenuItems(props) {

    const ifClickAllowed = props.isClickable ? props.onClick : undefined;
    // const { item, onRemove, isClickable } = props;
    const { myMenuItem, onRemove } = props;

    

    return (
        <Container className="cardContainer" fluid>
            {/* Card holds all nessasary info about the item such as allergens, ingredients and price */}
            {/* Id is to bring you to relevant day - top Button is to bring you back up */}

            <Card className='cards' onClick={ifClickAllowed}>

                <Card.Body>
                    <Card.Title>{props.myMenuItem.name}</Card.Title>
                    <Card.Text></Card.Text>
                    <Card.Subtitle>Allergens: </Card.Subtitle>
                    <Card.Text>{props.myMenuItem.allergens} </Card.Text>
                    <Card.Subtitle>Price: €{props.myMenuItem.price}</Card.Subtitle>


                    <Link to={'/EditMenuItem/' + props.myMenuItem._id} className="btn btn-info">Edit</Link>
                    <Card.Text></Card.Text>
                    <Button onClick={(e) => {
                        e.stopPropagation();
                        axios.post(`http://localhost:4000/menu_items/${props.myMenuItem._id}/delete`, { password: 'TestPassword' })
                            .then((res) => {
                                props.Reload();
                            })
                            .catch();
                    }} className='btn btn-danger'>Delete</Button>
                    <Card.Text></Card.Text>
                    <Button variant="warning" onClick={() => onRemove(myMenuItem._id)}>
                        Remove from Day
                    </Button>
                </Card.Body>
            </Card>
            <br></br>
        </Container>
    );

}

export default MenuItems;