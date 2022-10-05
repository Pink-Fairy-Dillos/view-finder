import React, { Component, useState, useEffect } from 'react';

import Map from '/client/components/Map.jsx';
import Sidebar from '/client/components/Sidebar.jsx'
import styles from '/client/stylesheets/styles.css'
import Navbar from '/client/components/Navbar.jsx';
import List from '/client/components/List.jsx';
import Favorites from '/client/components/Favorites.jsx';
const App = props => {

  // Using state to store, update and display location pins on the map.
  const [savedLocations, setSavedLocations] = useState([]);
  const [savedUser, setSavedUser] = useState(""); //the user logged in - populate at post request at log in
  const [savedStatus, setSavedStatus] = useState(null) //when user is logged in status changed to true
  const [userLocations, setUserLocations] = useState([]);
  const [userId, setUserId] = useState('');
  // Using state to receive user input about new locations to pass to database.
  const [userData, setAddress] = useState({
    name: '',
    street_address: '',
    city: '',
    state: '',
    zip: '',
    caption: '',
    category: '',
    public: true,
    created_by_id: '',
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

  // useEffect(() => {
  //   fetch('api/getList')
  //     .then(res => res.json())
  //     .then((locations) => {
  //       if (!Array.isArray(locations)) locations = [];
  //         setSavedLocations(locations);
  //     })
  // }, successfulSubmit )

  return (
    
    <div id="maindiv">
      <div id="navbar"> <Navbar setUserId={setUserId} savedUser={savedUser} setSavedUser={setSavedUser} savedStatus={savedStatus} setSavedStatus={setSavedStatus} setUserLocations={setUserLocations}/> </div> 
        <div id="mapSidebarContainer" >
          <div className="List-Map">
            <div id="list"> <List savedLocations={savedLocations} /> </div>
            <div id="mapdiv"> <Map savedLocations={savedLocations} /> </div>
            <div id="favoritesdiv"> <Favorites userLocations={userLocations}/> </div>
          </div>
          <div className="Side-Bar">
            <div id="sidebardiv"> <Sidebar userId={userId} savedLocations={savedLocations} setSavedLocations={setSavedLocations} userData={userData} setAddress={setAddress}/> </div>
          </div>
        </div>

      </div>
      
  )
}


export default App;