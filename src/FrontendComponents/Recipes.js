import React from 'react';
import axios from 'axios';import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import '../CssFiles/Recipe.css';
import LoadRecipes from './LoadRecipes';

const Recipes = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/recipes')
      .then(res => {
        setRecipes(res.data);
        console.log("hello??");
      })
      .catch(error => console.error("There was an error fetching the recipes:", error));
  }, []);

  return (

    <div>
      <LoadRecipes myRecipes={recipes}></LoadRecipes>
    </div>

    /*
    <div>

      <Container className="cardContainer" fluid>

        <Card className='cards'>
          <a href='https://www.foodandwine.com/recipes/classic-cheese-pizza' target='_blank'>
            <Card.Body>
              <CardImg className="cardImage" src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"></CardImg>
            </Card.Body>
          </a>

        </Card>

        <Card className='cards'>
          <a href='https://www.foodandwine.com/comfort-food/burgers/burger-recipes' target='_blank'>
            <Card.Body>
              <CardImg className="cardImage" src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"></CardImg>
            </Card.Body>
          </a>

        </Card>
        <Card className='cards'>
          <a href='https://www.foodandwine.com/refried-white-beans-8425970' target='_blank'>
            <Card.Body>
              <CardImg className="cardImage" src="https://www.foodandwine.com/thmb/pVTClGCa8wfzyoyHxkbMs2ImMb0=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Refried-White-Beans-with-Poached-Eggs-FT-RECIPE0124-76de9514d7d44123af87c727bd1f52e4.jpg"></CardImg>
            </Card.Body>
          </a>
        </Card>
      </Container>
    </div>
  */
  );
}
export default Recipes;