import React, { Component, useState } from 'react';
import Post from "./Post.jsx"
function List (props) {



const savedLocations = props.savedLocations;

//me trying to make checkboxes work... prob not gonna work

  // const [checkedBoxes, setCheckedBoxes] = useState([]);

  // let checkedCats = [];
  // const checkBoxes = document.getElementsByClassName("checks");

  // function myFunc(id){
  //   console.log('heyo0')
  //   console.log(checkBoxes[0])
  // }

  // for (let i = 0; i < checkedBoxes.length; i++){
  //   list.push(<Post savedLocations={savedLocations[i]} />)
  // }

	let list = [];
    for (let i = 0; i< savedLocations.length; i++){
      list.push(<Post savedLocations= {savedLocations[i]} />)
    }

  return (
    <>
    <div id='listContainer'>
      <h1>Places:</h1>
     <label>Hiking</label><input className="checks" id="hike" type="checkbox"></input><br></br>
     <label>Food</label> <input className="checks" id="food" type="checkbox"></input><br></br>
     <label>Photospot</label> <input className="checks" d="photo" type="checkbox"></input><br></br>
     <label>Other</label> <input className="checks" id="other" type="checkbox"></input>
      {list}
    </div></>
  )
}

export default List;