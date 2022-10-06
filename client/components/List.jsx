import React, { Component, useState } from 'react';
import Post from "./Post.jsx"
function List (props) {

  const [filter, setFilter] = useState(false);
  // This is the array of saved locations pulled from the database
  const savedLocations = props.savedLocations;

// This function takes values from input fields and updates the userData piece of state,
const handleFilter = (e, property) => {
      let updatedValue = {};
      const publicVal = document.getElementById(property); 
      if(publicVal.checked){
          updatedValue = {[property]: false};
      }
      else{
          updatedValue = {[property]: true};
      }
  }

const applyFilter = () => {
  setFilter(!filter)
  // re render the page...
  // only rerender list and below
}
  // api/images/
// {id, category: 1} 1: photospot, 2: food, 3: hiking, 4: other
	let list = [];
    for (let i = 0; i< savedLocations.length; i++){

      // if (filter){
      //  let photospot = document.getElementById('photospot-checkbox');
      // //  let food = document.getElementById('food-checkbox');
      //   if (photospot.checked){
      //     savedLocations.filter()
      //   }

      //   // /api/filter/${#}


      // }
      // displays all
      if (!filter){
        list.push(<Post savedLocations= {savedLocations[i]} />)
      }
    }

  return (
    <div id='listContainer'>
      <h1>Places:</h1>
      <label>PhotoSpot</label>
          <input 
                id="photospot-checkbox"
                type="checkbox"
                name="photospot"
                // defaultValue={}
                onChange={(e) => handleFilter(e, "photospot-checkbox")}></input>

      <label>Food</label>
              <input 
                id="food-checkbox"
                type="checkbox"
                name="food"
                // defaultValue={}
                onChange={(e) => handleFilter(e, "food-checkbox")}></input>
      <label>Hiking</label>
                <input 
                id="hiking-checkbox"
                type="checkbox"
                name="hiking"
                // defaultValue={}
                onChange={(e) => handleFilter(e, "hiking-checkbox")}></input>

                <label>Other</label>
                  <input 
                  id="other-checkbox"
                  type="checkbox"
                  name="other"
                  // defaultValue={}
                  onChange={(e) => handleChange(e, "other-checkbox")}></input>
                  {/* <input type='submit'>Apply Filter</input> */}
                  <button onClick={applyFilter}>Apply Filter</button>

      <div id='scrollContainer'>
        <div id='postContainer'>
          {list}
        </div>
      </div>
      
    </div>
  )
}

export default List;