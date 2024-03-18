import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Button, Card, CardImg, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CssFiles/Recipe.css';
import axios from 'axios';
import JSFileDownload from 'js-file-download';

const RecipeItem = (props) => {
  return (
    <Container className="cardContainer" fluid>
    <Card className='cards'>

        <Card.Body>
            <Card.Title>{props.myRecipe.title}</Card.Title>
            <Card.Text>{props.myRecipe.description}</Card.Text>
            <Card.Subtitle>Allergens: </Card.Subtitle>
            <Card.Text>{props.myRecipe.allergens} </Card.Text>
            <Button variant="primary" onClick={(e) => {
                //Uses axios to asynchronously download the file from the server
                axios({
                    url: 'http://localhost:4000/recipes/download/'+props.myRecipe._id, //MongoDB URL
                    method: 'GET',
                    responseType: 'blob'
                }).then((res) => {
                    //Create a sanitized filename out of the title.
                    const filename = (props.myRecipe.title.replace(/[^a-zA-Z0-9 ]/g, ""))+".pdf";
                    //Download the file using JS File Download: https://www.npmjs.com/package/js-file-download
                    JSFileDownload(res.data, filename);
                })
            }}>Download</Button>
        </Card.Body>
    </Card>
    <br></br>
</Container>
  );
}
export default RecipeItem;