import React, { Component } from 'react';
import Input from './Input.jsx';

const Sidebar = props => {
    return (
        
        // <div style={{"color": "black", "backgroundColor": "gray"}} >
        // HI SOME TEXT FROM THE SIDEBAR
        // </div>

        <div id="sidebarContainer">
          <p id="sidebarText">SIDEBAR</p>
          <Input />
        </div>
       
    )
}


export default Sidebar;