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
    <div className="mt-14">
      <div className="ml-7 bg-[#A1C298] max-w-xs max-h-lg shadow-2xl rounded-xl pb-6">
		<h1 id="pins" className=" ml-20 pt-5 pl-7 pr-5 pb-5 font-bold text-3xl">My Pins
         </h1>
		<div className="p-1 pl-2 shadow-2xl ml-3 bg-[#1C6758] max-w-xs max-h-lg rounded-xl" id='scrollContainer2'>
      {userList}
		</div>
    </div>
</div>
  )
}

export default Favorites;