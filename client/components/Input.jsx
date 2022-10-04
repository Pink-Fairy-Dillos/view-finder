import React, { Component, useState } from "react";


const Input = (props) => {

    const savedLocations = props.savedLocations;
    const setSavedLocations = props.setSavedLocations;

    const userData = props.userData;
    const setAddress = props.setAddress;

    // This function takes values from input fields and updates the userData piece of state,
    const handleChange = (e, property) => {
        if (property === 'zip') { // this is to coerece the zip code inputted as a string, into an integer 
            let updatedValue = {};
        updatedValue = {[property]: parseInt(e.target.value)};
        setAddress(userData => ({
            ...userData,
            ...updatedValue
        }))}
        else {
            let updatedValue = {};
            updatedValue = {[property]: e.target.value};
            setAddress(userData => ({
                ...userData,
                ...updatedValue
            }))}
    }

    // This function submits user inputted data from input fields
    // and sends to database. The final .then() statement is supposed to cause
    // a re-render with thew newly inputted pin, but it isn't working yet.
    // Addresses are geocded by the back end into lat/long coordinates that the
    // map library uses.
    const submitFunc = () => {
        fetch('/api/newLocation', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then((res) => setSavedLocations(res.body)) // REFACTOR
        
    }

    return (

        <div> 
           <form onSubmit={submitFunc}>
           <label>
            <div className="inputContainer" > 
                <input
                type="text"
                name="apt"
                placeholder="Name"
                defaultValue={userData.name}
                onChange={(e) => handleChange(e, "name")}
            />
             </div> 
             <div className="inputContainer" > 
                <input
                type="text"
                name="street_address"
                placeholder="Address"
                defaultValue={userData.street_address}
                onChange={(e) => handleChange(e, "street_address")}
                />
            </div>
            <div className="inputContainer" > 
                <input
                type="text"
                name="city"
                placeholder="City"
                defaultValue={userData.city}
                onChange={(e) => handleChange(e, "city")}
            />
            </div>
            <div className="inputContainer" > 
            <input
             type="text"
             name="state"
             placeholder="State"
             defaultValue={userData.state}
             onChange={(e) => handleChange(e, "state")}
            />
            </div>
            
            <div className="inputContainer">
                <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                defaultValue={userData.zip}
                onChange={(e) => handleChange(e, "zip")}
                />
            </div>

            <div className="inputContainer">
                <input
                type="text"
                name="caption"
                placeholder="Caption"
                defaultValue={userData.caption}
                onChange={(e) => handleChange(e, "caption")}
                />
            </div> 
           </label>
           <div className="inputContainer">
           <input type="submit" />
           </div>
           </form>
           <div id="instructions"> Welcome to Viewfinder! Check out the pins on the map for cool spots for a photo opportunity. If you know an instragammable landmark or viewpoint, submit it using the forms above! </div>
        </div>
    )

}





export default Input;