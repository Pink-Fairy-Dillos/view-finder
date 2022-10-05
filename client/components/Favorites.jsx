import React, { Component, useState } from 'react';
import Post from "./Post.jsx"


const Favorites = ({ userLocations }) => {

  // This is the array of saved locations pulled from the database

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