import React, { Component, useState, useEffect } from 'react';

import Map from '/client/components/Map.jsx';
import Sidebar from '/client/components/Sidebar.jsx'
import styles from '/client/stylesheets/styles.css'
import Navbar from '/client/components/Navbar.jsx';

const App = props => {

  const [savedLocations, setSavedLocations] = useState([]);

  const [userData, setAddress] = useState({
    name: '',
    street_address: '',
    city: '',
    state: '',
    zip: '',
    caption: ''
  })

  useEffect(() => {
    fetch('api/getList')
      .then(res => res.json())
      .then((locations) => {
        if (!Array.isArray(locations)) locations = [];
        setSavedLocations(locations);
      })
  })

  return (
      
      <div id="maindiv">
        <div id="navbar"> <Navbar /> </div> 
        <div id="mapSidebarContainer" >
          <div id="mapdiv"> <Map savedLocations={savedLocations} /> </div>
          <div id="sidebardiv"> <Sidebar savedLocations={savedLocations} setSavedLocations={setSavedLocations} userData={userData} setAddress={setAddress}/> </div>
        </div>

      </div>
      
  )
}


export default App;