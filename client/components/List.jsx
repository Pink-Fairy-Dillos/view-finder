import React, { Component, useState } from 'react';
import Post from "./Post.jsx"
import logo from './images/logo3.png';
function List (props) {

  // This is the array of saved locations pulled from the database
  const savedLocations = props.savedLocations;

  // This is the current selected pin on the map
  // const [selected, setSelected] = useState({});

  // const onSelect = item => {
  //   setSelected(item);
  // }

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
    <div className="max-w-1/3 bg-orange-200">
      <div className="pt-5 " >
        <img className="h-110 w-80 bg-orange-200" src={logo} alt="">
       </img>
      <div className="bg-orange-300 max-w-xs rounded-xl">
		    <h1 className="pt-5 pl-7 pr-5 pb-5 font-bold text-3xl">Places:
         </h1>
    <div className="bg-orange-50">
		<div className="pl-5 pr-5 pt-5">
    <div className="border border-black rounded-xl">{list}
    </div>
    </div>
    </div>
		</div>
    </div>
    </div>
  )
}

export default List;