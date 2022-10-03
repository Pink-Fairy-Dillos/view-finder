import React, { Component } from 'react';
import Input from './Input.jsx';

const Sidebar = props => {

  const savedLocations = props.savedLocations;
  const setSavedLocations = props.setSavedLocations;
 

    return (
        
        // <div style={{"color": "black", "backgroundColor": "gray"}} >
        // HI SOME TEXT FROM THE SIDEBAR
        // </div>

        <div id="sidebarContainer">
          <p id="sidebarText">Submit a cool photo location below:</p>
          <Input savedLocations={savedLocations} setSavedLocations={setSavedLocations} userData={props.userData} setAddress={props.setAddress}/>
        </div>
       
    )
}


export default Sidebar;