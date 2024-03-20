import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import LoadMenuItems from "./LoadMenuItem";

const Day = () => {

    //holds the menu items data
    const [data, setData] = useState([]);
    const { day } = useParams();  //takes day from url

    //useEffect is a React Hook that lets you synchronize a component with an external system.
    //i.e. get the items data for the correct day
    useEffect(
        () => {
            //asyncrious operation taking place here - it waits
            //callback, get data from menu
            axios.get(`http://localhost:4000/menu/${day}`).then((response) => {
                //debugging
                console.log(response.data)
                // Check if the response data has at least one item
                if (response.data.length > 0) {
                    //update the state by taking the menu items out of the database response
                    setData(response.data[0].items.map(item => item.menuItemId));
                } else {
                    //this helped correct an error
                    //if there is no data then set an empty array
                    setData([]);
                }
            }).catch((error) => { //send an error message to the console
                console.log(error);
            });

        }, [day]
    );

    const removeFromDay = (menuItemId) => {
        axios.delete(`http://localhost:4000/menu/${day}/${menuItemId}`)
            .then(() => {
                
                setData(currentItems => currentItems.filter(item => item._id !== menuItemId));
            })
            .catch((error) => { //send an error message to the console
                console.log(error);
            });
    }



    //to make the component automatically update when deleted so you dont have to refresh
    const Reload = (e) => {
        //get all the data from the database
        axios.get(`http://localhost:4000/menu_items`).then((response) => {
            setData(response.data)
        }).catch((error) => { //send an error message to the console
            console.log(error);
        });

    }

    return (
        <div>
            {/* Title of page */}
            <h2>Menu for {day}</h2>
            {/* Render the relevant menu items */}
            <LoadMenuItems myMenuItems={data} ></LoadMenuItems>

            <Link to={`/day/${day}/addItem`}>Add Item to Day</Link>
        </div>
    )

}

export default Day;