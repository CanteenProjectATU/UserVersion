import '../CssFiles/Menu.css';
import { Button, Card, CardImg, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
function MenuItems(props) {

    const { myMenuItem, onRemove, isClickable, Reload } = props;
    const ifClickAllowed = props.isClickable ? props.onClick : undefined;

    const handleRemoveClick = (e) => {
        e.stopPropagation();
        onRemove(myMenuItem._id);
    }
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
                    axios.delete('http://localhost:4000/menu/' + props.myMenuItem._id)
                        .then((res) => {
                            let reload = props = props.Reload();
                        })
                        .catch();
                }} className='btn btn-danger'>Delete</Button>
                <Card.Text></Card.Text>

                {/* <Card.Text></Card.Text>
                {onRemove && (
                    <Button variant="warning" onClick={handleRemoveClick}>
                        Remove from Day
                    </Button>
                )} */}
                 </Card.Body>
            </Card>
            <br></br>
        </Container>
    );

}

export default MenuItems;