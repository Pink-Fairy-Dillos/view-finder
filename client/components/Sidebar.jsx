import React, { Component } from 'react';
import Input from './Input.jsx';

const Sidebar = props => {

  const savedLocations = props.savedLocations;
  const setSavedLocations = props.setSavedLocations;
  const savedUser = props.savedUser;
  const setUserLocations = props.setUserLocations;
    return (

        <div className="">
          <p id="sidebarText">Add a Location:</p>
          <Input setUserLocations={setUserLocations} userId={props.userId} savedUser={savedUser} savedLocations={savedLocations} setSavedLocations={setSavedLocations} userData={props.userData} setAddress={props.setAddress}/>
        </div>
       
    )
}


export default Sidebar;