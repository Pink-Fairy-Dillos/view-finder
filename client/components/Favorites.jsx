import React, { Component, useState } from 'react';
import Post from "./Post.jsx"
function Favorites (props) {

  // This is the array of saved locations pulled from the database
  const userLocations = props.userLocations;


	let userList = [];
  if (userLocations){
    for (let i = 0; i< userLocations.length; i++){
      userList.push(<Post savedLocations= {userLocations[i]} />)
		}
	}


  return (
    <div id='favContainer'>
		<h1>My Pins:</h1>
		<div id='favContainer'>
      {userList}
		</div>
    </div>
  )
}

export default Favorites;