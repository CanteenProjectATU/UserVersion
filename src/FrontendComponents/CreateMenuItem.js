import { useState } from "react";
import axios from "axios";

//this is for creating a new menu Item
function CreateMenuItem() {

    // React useState Hook to track state in a function component
    //initialize the state variables with an empty string for the form inputs
    const [name, setItemName] = useState('');
    const [allergens, setAllergenInfo] = useState('');
    const [price, setPrice] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState('');

    //This is a method to handle the submission of the form and creates a menuItem with the parameters
    const handleSubmit = (e) => {
        //avoid page refresh
        e.preventDefault();

        console.log(name + allergens + price);
        //make an object with the data
        const menuItem = {
            name,
            allergens,
            price: parseFloat(price),
            ingredients,
            description,
            password,
        };
        //Also sends POST request to server with axios to create the new item
        axios.post('http://localhost:4000/menu_items', menuItem)
            .then()
            .catch();

    }

    //return this to the screen when this component is called
    return (
        //Form to make a new menu item
        <div >
            <h1>Create New Item</h1>
            <br></br>
            {/* when the button is clicked the function OnSubmit will be called */}
            {/* take in this information from the user  */}
            <form onSubmit={handleSubmit} style={{ padding: '30px' }}>
                <div className="form-group" >
                    <label>Food Item Name: </label>
                    <input
                        style={{ backgroundColor: 'whitesmoke' }}
                        type="text"
                        className="form-control"
                        value={name}
                        //set it to the name parameter
                        onChange={(e) => { setItemName(e.target.value) }} />

                </div>
                {/*  Get the allergen Information*/}
                <div className="form-group">
                    <label>Allergen Information: </label>
                    <input
                        style={{ backgroundColor: 'whitesmoke' }}
                        type="text"
                        className="form-control"
                        value={allergens}
                        onChange={(e) => { setAllergenInfo(e.target.value) }} />

                </div>
                {/* Price */}
                <div className="form-group">
                    <label>Price: </label>
                    <input
                        style={{ backgroundColor: 'whitesmoke' }}
                        type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />

                </div>
                {/* Ingredients */}
                <div className="form-group">
                    <label>Ingredients: </label>
                    <input
                        style={{ backgroundColor: 'whitesmoke' }}
                        type="text"
                        className="form-control"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </div>

                {/* Description */}
                <div className="form-group">
                    <label>Description: </label>
                    <textarea
                        style={{ backgroundColor: 'whitesmoke' }}
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <br></br>
                {/* button that calls the submit function */}
                <div>
                    <input type="submit" value="Add Menu Item" className="btn btn-info" />
                </div>
            </form>

        </div>
    );
}

export default CreateMenuItem;