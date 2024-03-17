import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function EditMenuItem(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();

    // React useState Hook to track state in a function component
    //initialize the state variables with an empty string for the form inputs
    const [name, setItemName] = useState('');
    const [allergens, setAllergenInfo] = useState('');
    const [price, setPrice] = useState('');
    const [days, setDays] = useState(''); //These are plural for arrays
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

        axios.get('http://localhost:4000/api/menu/' + id)
            .then((response) => {
                setItemName(response.data.name);
                setAllergenInfo(response.data.allergens);
                setPrice(response.data.price);
                setDays(response.data.days);
                setIngredients(response.data.ingredients);
                setDescription(response.data.description);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, []);
    //This is a method to handle the submission of the form
    // and creates a UPDATED version of the menu item with the parameters
    const handleSubmit = (event) => {
        event.preventDefault();
        //make an object with the data updates
        const updatedItem = {
            name: name,
            allergens: allergens,
            price: parseFloat(price),
            days, //days because it is an array
            ingredients: ingredients,
            description: description
        };
        axios.put('http://localhost:4000/api/menu/' + id, updatedItem)
            .then((res) => {
                console.log(res.data);
                navigate('/Menus');
            });
    }

    //this handles the selected days of the week
    const handleDays = (e) => {
        const { value , checked} = e.target;
        let newDays = [...days];
        //if days has a specific day
        if (checked && !newDays.includes(value)) {
            newDays.push(value);
        }
        else if(!checked){
            newDays = newDays.filter(day => day !== value);
        }
        setDays(newDays);
    }
    return (
        <div>
            <h1>Update Existing Item</h1>
            <br></br>
            {/* when the button is clicked the function OnSubmit will be called */}
            {/* take in this information from the user  */}
            <form onSubmit={handleSubmit} style={{padding: '30px'}}>
                <div className="form-group" >
                    <label>Food Item Name: </label>
                    <input
                        style={{backgroundColor: 'whitesmoke'}}
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
                        style={{backgroundColor: 'whitesmoke'}}
                        type="text"
                        className="form-control"
                        value={allergens}
                        onChange={(e) => { setAllergenInfo(e.target.value) }} />

                </div>
                {/* Price */}
                <div className="form-group">
                    <label>Price: </label>
                    <input
                        style={{backgroundColor: 'whitesmoke'}}
                        type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />

                </div>
                {/* Checkboxes for choosing multiple days that the item could be sold on */}
                <div className="form-group">
                    <label>Days of the week: </label>
                    <div>
                        <label>
                            <input
                                type="checkbox" //checkbox allows you to select multiple
                                value="Monday" //value is equal t this day of week
                                checked={days.includes("Monday")}
                                onChange={handleDays} /> Monday
                        </label>
                        {/* Line break */}
                        <br></br>
                        <label>
                            <input
                                type="checkbox"
                                value="Tuesday"
                                checked={days.includes("Tuesday")}
                                onChange={handleDays} /> Tuesday
                        </label>
                        <br></br>
                        <label>
                            <input
                                type="checkbox"
                                value="Wednesday"
                                checked={days.includes("Wednesday")}
                                onChange={handleDays} /> Wednesday
                        </label>
                        <br></br>
                        <label>
                            <input
                                type="checkbox"
                                value="Thursday"
                                checked={days.includes("Thursday")}
                                onChange={handleDays} /> Thursday
                        </label>
                        <br></br>
                        <label>
                            <input
                                type="checkbox"
                                value="Friday"
                                checked={days.includes("Friday")}
                                onChange={handleDays} /> Friday
                        </label>
                    </div>

                    {/* Ingredients */}
                    <div className="form-group">
                        <label>Ingredients: </label>
                        <input
                            style={{backgroundColor: 'whitesmoke'}}
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
                            style={{backgroundColor: 'whitesmoke'}}
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>



                </div>

                <br></br>
                {/* button that calls the submit function */}
                <div>
                    <input type="submit" value="Edit Menu Item" className="btn btn-info" />
                </div>
            </form>

        </div>
    );
}