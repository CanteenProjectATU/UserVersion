import { useState } from "react";
import axios from "axios";

function CreateMenuItem(){

    // React useState Hook to track state in a function component
    //initialize the state variables with an empty string
    const [name, setItemName] = useState('');
    const [allergenInfo, setAllergenInfo] = useState('');
    const [price, setPrice] = useState('');
   
    //This is a method to handle the submission of the form and creates a menuItem with the parameters
    const handleSubmit = (e) => {
        //avoid page refresh
        e.preventDefault();

        console.log(name + allergenInfo + price);
        //make an object
        const menuItem = {
            name: name,
            allergenInfo: allergenInfo,
            price: price
        }
        //Also sends POST request to server endpoint with axios
        axios.post('http://localhost:4000/api/menu', menuItem)
            .then()
            .catch();

    }

    //return this to the screen when this component is called
    return (
        //Form to make a new menu item
        <div>
            <br></br>
             {/* when the button is clicked the function OnSubmit will be called */}
            {/* take in this information from the user  */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Food Item Name: </label>
                    <input 
                    type="text"
                    className="form-control"
                    value={name}
                    //set it to the name parameter
                    onChange={(e) => { setItemName(e.target.value)}}/>

                </div>
                {/*  Get the allergen Information*/}
                <div className="form-group">
                    <label>Allergen Information: </label>
                    <input 
                    type="text"
                    className="form-control"
                    value={allergenInfo}
                    onChange={(e) => { setAllergenInfo(e.target.value)}}/>

                </div>
                {/* Price */}
                <div className="form-group">
                    <label>Price: </label>
                    <input 
                    type="text"
                    className="form-control"
                    value={price}
                    onChange={(e) => { setPrice(e.target.value)}}/>

                </div>
                <br></br>
                {/* button that calls the submit function */}
                <div>
                    <input type="submit" value="Add Menu Item" className="btn btn-info"/>
                </div>
            </form>
            
        </div>
    );
}

export default CreateMenuItem;