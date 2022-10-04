import React, { Component, useState, useEffect } from 'react';

import Map from '/client/components/Map.jsx';
import Sidebar from '/client/components/Sidebar.jsx'
import styles from '/client/stylesheets/styles.css'
import Navbar from '/client/components/Navbar.jsx';

const App = props => {

  // Using state to store, update and display location pins on the map.
  const [savedLocations, setSavedLocations] = useState([]);

  // Using state to receive user input about new locations to pass to database.
  const [userData, setAddress] = useState({
    name: '',
    street_address: '',
    city: '',
    state: '',
    zip: '',
    caption: ''
  })

  // UseEffect to update the saved locations after rendering. 
  // SavedLocations/[] was passedin as a second arg to prevent constant rerendering. 
  // Can be changed to rerender once when when a new location is added.
  useEffect(() => {
    fetch('api/getList')
      .then(res => res.json())
      .then((locations) => {
        if (!Array.isArray(locations)) locations = [];
          setSavedLocations(locations);
      })
  }, savedLocations)

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