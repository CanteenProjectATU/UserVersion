import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import MenuItems from './MenuItem';
import { getPasswordFromLocalStorage } from '../utilities/utils';

const AddMenuItemToDay = () => {
    const { day } = useParams();
    const [menuItems, setMenuItem] = useState([]);
    const navigate = useNavigate();

    useEffect(
        () => {

            axios.get('http://localhost:4000/menu_items').then((response) => {
                setMenuItem(response.data)
            }).catch((error) => { //catch errors - is to send an error message to the console
                console.log(error);
            });
        }, []
    );

    const addToDay = (menuItemId) => {
        const password = getPasswordFromLocalStorage();
        console.log("Added to");
        console.log(`Adding to day: ${day}, MenuItemId: ${menuItemId}`);
        axios.put(`http://localhost:4000/menu/${day}/${menuItemId}`, {password: password})
        .then(()=>  {
            navigate(`/day/${day}`)
        }).catch((error) => { //catch errors - is to send an error message to the console
                console.log(error);
            });
    }

    

    return (
        <div>
            <h2>Choose which item to add to {day}</h2>
            {menuItems.map(item => (
                <MenuItems
                    key={item._id}
                    myMenuItem={item}
                    onClick={() => addToDay(item._id)}
                    isClickable={true}
                />
                
            ))}
        </div>

    );


};

export default AddMenuItemToDay;