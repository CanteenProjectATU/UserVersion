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

  
  );
}
export default Recipes;