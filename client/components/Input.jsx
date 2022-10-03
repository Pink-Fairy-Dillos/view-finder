import React, { Component, useState } from "react";


const Input = (props) => {

    const savedLocations = props.savedLocations;
    const setSavedLocations = props.setSavedLocations;

    const userData = props.userData;
    const setAddress = props.setAddress;

    // const [userData, setAddress] = useState({
    //     name: '',
    //     street_address: '',
    //     // apt: '',
    //     city: '',
    //     state: '',
    //     zip_code: '',
    //     caption: ''
    //   })

    const handleChange = (e, property) => {
        if (property === 'zip') {
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

    const submitFunc = () => {
        //what happens when we submit?
        // fetch post to server with state attached in body
        fetch('/api/newLocation', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData) // is this the correct thing to pass in?
        })
        .then(res => setSavedLocations(res.body)) // response body should contain updated list of locations
        .then(res => console.log(res.body))
        // take state back to 0
    }

    return (
// this input field needs an address
//caption
        <div> 
           <form onSubmit={submitFunc}>
           <label>
            <div className="inputContainer" > 
                {/* <div> Name </div> */}
                <input
                type="text"
                name="apt"
                placeholder="Name"
                defaultValue={userData.name}
                // value={userData.apt}
                onChange={(e) => handleChange(e, "name")}
            />
             </div> 
             <div className="inputContainer" > 
                {/* <div> Address </div> */}
                <input
                type="text"
                name="street_address"
                placeholder="Address"
                defaultValue={userData.street_address}
                // value={userData.street_address}
                onChange={(e) => handleChange(e, "street_address")}
                />
            </div>
            <div className="inputContainer" > 
                {/* <div> City </div> */}
                <input
                type="text"
                name="city"
                placeholder="City"
                defaultValue={userData.city}
                //  value={userData.city}
                onChange={(e) => handleChange(e, "city")}
            />
            </div>
            <div className="inputContainer" > 
             {/* <div> State </div> */}
            <input
             type="text"
             name="state"
             placeholder="State"
             defaultValue={userData.state}
            //  value={userData.state}
             onChange={(e) => handleChange(e, "state")}
            />
            </div>
            
            <div className="inputContainer">
                {/* <div> Zip </div> */}
                <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                defaultValue={userData.zip}
                // value={userData.zip}
                onChange={(e) => handleChange(e, "zip")}
                />
            </div>

            <div className="inputContainer">
                {/* <div> Caption </div> */}
                <input
                type="text"
                name="caption"
                placeholder="Caption"
                defaultValue={userData.caption}
                // value={userData.caption}
                onChange={(e) => handleChange(e, "caption")}
                />
            </div> 
           </label>
           <div className="inputContainer">
           <input type="submit" />
           </div>
           </form>
           {/* <div> {JSON.stringify(userData)} </div> */}
           <div id="instructions"> Welcome to Viewfinder! Check out the pins on the map for cool spots for a photo opportunity. If you know an instragammable landmark or viewpoint, submit it using the forms above! </div>
        </div>
    )

}





export default Input;