import React, { Component } from 'react';
import Map from '/client/Map.jsx';
import Sidebar from '/client/Sidebar.jsx'
import styles from '/client/stylesheets/styles.css'
import Navbar from '/client/Navbar.jsx';

const App = props => {
    return (
        
        <div id="maindiv">
        <div id="navbar"> <Navbar /> </div> 
        <div id="mapdiv">  <Map /> </div>
        <div id="sidebardiv"> <Sidebar /> </div>
        
        </div>
       
    )
}


export default App;