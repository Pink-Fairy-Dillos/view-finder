import React, { Component } from 'react';
import SidebarForm from './SidebarForm.jsx';

const Sidebar = props => {
    return (
        
        // <div style={{"color": "black", "backgroundColor": "gray"}} >
        // HI SOME TEXT FROM THE SIDEBAR
        // </div>

        <div id="sidebarContainer">
          <p id="sidebarText">SIDEBAR</p>
          <SidebarForm />
        </div>
       
    )
}


export default Sidebar;