import RecipeItem from "./RecipeItem";

function LoadRecipes(props){

    return props.myRecipes.map(
        (recipe)=>{
            return <RecipeItem myRecipe={recipe} Reload={()=>{props.ReloadData()}}></RecipeItem>
        }
    );
}

export default LoadRecipes;