import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AddMenuItemToDay = () => {
    const { day } = useParams();
    const [menuItemId, setMenuItemId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:4000/menu', {day, menuItemId});
            alert("Menu Item Added");
        } catch (error) {
            console.log("Failed");
            alert('Failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a menu item to {day}</h2>
            <input
                type='text'
                value={menuItemId}
                onChange={(e) => setMenuItemId(e.target.value)}
                placeholder='Menu Item Id'
                required
            />
            <button type='submit'>Add</button>
        </form>
    );
};

export default AddMenuItemToDay;