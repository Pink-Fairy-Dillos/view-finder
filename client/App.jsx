import React, { Component } from 'react';
<<<<<<< HEAD
import Map from '/client/Map.jsx';
import Sidebar from '/client/Sidebar.jsx'
import styles from '/client/stylesheets/styles.css'
import Navbar from '/client/Navbar.jsx';
=======
import Map from '/client/components/Map.jsx';
import Sidebar from '/client/components/Sidebar.jsx'
import styles from '/client/stylesheets/styles.css'
import Navbar from '/client/components/Navbar.jsx';
>>>>>>> bc12472 (Matt's changes to UI, basic marker, info box, and fetch to saved locations)

const App = props => {
    return (
        
        <div id="maindiv">
<<<<<<< HEAD
        <div id="navbar"> <Navbar /> </div> 
        <div id="mapdiv">  <Map /> </div>
        <div id="sidebardiv"> <Sidebar /> </div>
        
=======
          <div id="navbar"> <Navbar /> </div> 
          <div id="mapSidebarContainer" >
            <div id="mapdiv"> <Map /> </div>
            <div id="sidebardiv"> <Sidebar /> </div>
          </div>
>>>>>>> bc12472 (Matt's changes to UI, basic marker, info box, and fetch to saved locations)
        </div>
       
    )
}


export default App;