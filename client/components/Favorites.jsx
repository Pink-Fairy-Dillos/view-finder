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
    <div className="max-w-1/3 h-full bg-orange-200">
		<h1 className="pt-5 pl-7 pr-5 pb-5 font-bold text-3xl">My Pins:
         </h1>
		<div className="ml-4 bg-orange-300 max-w-xs max-h-lg rounded-xl" id='favContainer'>
      {userList}
		</div>
    </div>
  )
}

export default Favorites;