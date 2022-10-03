import React, { Component, useState } from "react";


const Input = props => {

    const [userData, setAddress] = useState({
        name: '',
        street_address: '',
        // apt: '',
        city: '',
        state: '',
        zip_code: '',
        caption: ''
      })

    const handleChange = (e, property) => {
        let updatedValue = {};
        updatedValue = {[property]: e.target.value};
        setAddress(userData => ({
            ...userData,
            ...updatedValue
        }))
    }

    const submitFunc = () => {
        //what happens when we submit?
        console.log(userData);
    }

    return (
// this input field needs an address
//caption
        <div> 
           <form onSubmit={submitFunc}>
           <label> Submit a cool photo location below:
           <div> Name </div>
            <input
            type="text"
            name="apt"
            defaultValue={userData.name}
            // value={userData.apt}
            onChange={(e) => handleChange(e, "name")}
            />
            <div> Address </div>
            <input
            type="text"
            name="address"
            defaultValue={userData.street_address}
            // value={userData.street_address}
            onChange={(e) => handleChange(e, "street_address")}
            />
             <div> City </div>
            <input
             type="text"
             name="city"
             defaultValue={userData.city}
            //  value={userData.city}
             onChange={(e) => handleChange(e, "city")}
            />
             <div> State </div>
            <input
             type="text"
             name="state"
             defaultValue={userData.state}
            //  value={userData.state}
             onChange={(e) => handleChange(e, "state")}
            />
             <div> Zip </div>
            <input
            type="text"
            name="zip"
            defaultValue={userData.zip}
            // value={userData.zip}
            onChange={(e) => handleChange(e, "zip")}
            />
             <div> Caption </div>
            <input
            type="text"
            name="caption"
            defaultValue={userData.caption}
            // value={userData.caption}
            onChange={(e) => handleChange(e, "caption")}
            />
           </label>
           <input type="submit" />
           </form>
           <div> {JSON.stringify(userData)} </div>
        </div>
    )

}





export default Input;