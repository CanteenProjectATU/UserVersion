import RecipeItem from "./RecipeItem";

function LoadRecipes(props){

    return props.myRecipes.map(
        (recipe)=>{
            return <RecipeItem myRecipe={recipe} ></RecipeItem>
        }
    );
}

export default LoadRecipes;