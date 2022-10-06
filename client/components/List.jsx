import React, { Component, useState } from 'react';
import Post from "./Post.jsx"
function List (props) {

  // This is the array of saved locations pulled from the database
  const savedLocations = props.savedLocations;

  // useEffect(() => {
  //   fetch('api/locations')
  //     .then(res => res.json())
  //     .then((locations) => {
  //       if (!Array.isArray(locations)) locations = [];
  //       setSavedLocations(locations);
  //     })
  // })

  
	let list = [];
    for (let i = 0; i< savedLocations.length; i++){
      list.push(<Post savedLocations= {savedLocations[i]} />)
    }

  return (
    <div id='listContainer'>
		<h1>Places:</h1>
      {list}
    </div>
  )
}

export default List;