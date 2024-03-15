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

    const [name, setItemName] = useState('');
    const [allergenInfo, setAllergenInfo] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

        axios.get('http://localhost:4000/api/menu/' + id)
            .then((response) => {
                setItemName(response.data.name);
                setAllergenInfo(response.data.allergenInfo);
                setPrice(response.data.price);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedItem = {
            name: name,
            allergenInfo: allergenInfo,
            price: price
        };
        axios.put('http://localhost:4000/api/menu/' + id, updatedItem)
            .then((res) => {
                console.log(res.data);
                navigate('/Menus');
            });
    }
    return (
        <div>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Food Item Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setItemName(e.target.value) }} />

                </div>

                <div className="form-group">
                    <label>Allergen Information: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setAllergenInfo(e.target.value) }} />

                </div>

                <div className="form-group">
                    <label>Price: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setPrice(e.target.value) }} />

                </div>
                <br></br>
                <div>
                    <input type="submit" value="Add Menu Item" className="btn btn-info" />
                </div>
            </form>

        </div>
    );
}