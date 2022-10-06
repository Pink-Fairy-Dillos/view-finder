import React, { Component, useState, useEffect } from 'react';
import Post from "./Post.jsx"
function List (props) {
  
  const [filter, setFilter] = useState(false);
  const savedLocations = props.savedLocations;
  // This is the array of saved locations pulled from the database
  let initiallist = [];
  for (let i = 0; i< savedLocations.length; i++){
    initiallist.push(<Post savedLocations= {savedLocations[i]}/>)
  }

  const [foodCheckBox, setFoodCheckBox] = useState(false);
  const [photospotCheckBox, setPhotoSpotCheckBox] = useState(false);
  const [hikingCheckBox, setHikingCheckBox] = useState(false);
  const [otherCheckBox, setOtherCheckBox] = useState(false);
  const [listState, setListState] = useState(null);
  const [hasClickedFilter, setHasClickedFilter] = useState(false);

// This function takes values from input fields and updates the userData piece of state,
const handleFilter = (e, property) => {

      if (property === "food-checkbox"){
        setFoodCheckBox(!foodCheckBox);
      }
      else if (property === "other-checkbox"){
        setOtherCheckBox(!otherCheckBox);
      }
      else if (property === 'hiking-checkbox'){
        setHikingCheckBox(!hikingCheckBox);
      }
      else if (property === 'photospot-checkbox'){
        setPhotoSpotCheckBox(!photospotCheckBox);
      }
  }

const applyFilter = () => {
    
    setFilter(!filter)
    setHasClickedFilter(true);

  // re render the page...
  // only rerender list and below
}
  // api/images/
// {id, category: 1} 1: photospot, 2: food, 3: hiking, 4: other
// let totalFilters = [{}, {}, {}];

useEffect(() => {
    let list = [];
    console.log('photo', photospotCheckBox);
    console.log('food', foodCheckBox);
    console.log('hiking', hikingCheckBox);
    console.log('other', otherCheckBox);
    for (let i = 0; i< savedLocations.length; i++){
      // let photospot = document.getElementById("photospot-checkbox"); //photospot.clicked = true means the photospot is clicked 
      // let food = document.getElementById("food-checkbox"); 
      // let hiking = document.getElementById("hiking-checkbox"); 
      // let other = document.getElementById("other-checkbox"); 
        if (photospotCheckBox && savedLocations[i].category === 1){
          list.push(<Post savedLocations= {savedLocations[i]} />)
         }
        if (foodCheckBox && savedLocations[i].category === 2){
          list.push(<Post savedLocations= {savedLocations[i]} />)
        }
        if (hikingCheckBox && savedLocations[i].category === 3){
          list.push(<Post savedLocations= {savedLocations[i]} />)
        }
        if (otherCheckBox && savedLocations[i].category === 4){
          list.push(<Post savedLocations= {savedLocations[i]} />)
        }
        if (!photospotCheckBox && !hikingCheckBox && !foodCheckBox && !otherCheckBox){
          list.push(<Post savedLocations= {savedLocations[i]} />)
        }
      }
      setListState(list);
}, [filter])








    // if(filter){
    //   alert("filtered!")
    //   console.log("filtered!");
    // }
    // for (let i = 0; i< savedLocations.length; i++){
    //   let photospot = document.getElementById("photospot"); 
    //   let food = document.getElementById("food"); 
    //   let hiking = document.getElementById("hiking"); 
    //   let other = document.getElementById("other"); 
      
      
      // if (filter) {
      //   if (photospot.clicked && savedLocations[i].category === 1){
      //     list.push(<Post savedLocations= {savedLocations[i]} />)
      //    }
      //   if (food.clicked && savedLocations[i].category === 2){
      //     list.push(<Post savedLocations= {savedLocations[i]} />)
      //   }
      //   if (hiking.clicked && savedLocations[i].category === 3){
      //     list.push(<Post savedLocations= {savedLocations[i]} />)
      //   }
      //   if (other.clicked && savedLocations[i].category === 3){
      //     list.push(<Post savedLocations= {savedLocations[i]} />)
      //   }
      // let list = [];
      //   if (!filter){
      //     list.push(<Post savedLocations= {savedLocations[i]} />)
      //     }
        // }
    // }
  
  return (
    <div id='listContainer'>
      <h1>Places:</h1>
      <label>PhotoSpot</label>
          <input 
                id="photospot-checkbox"
                type="checkbox"
                name="photospot"
                // defaultValue={}
                onChange={(e) => handleFilter(e, "photospot-checkbox")}
                >
                </input>

      <label>Food</label>
              <input 
                id="food-checkbox"
                type="checkbox"
                name="food"
                // defaultValue={}
                onChange={(e) => handleFilter(e, "food-checkbox")}
                >
                </input>
      <label>Hiking</label>
                <input 
                id="hiking-checkbox"
                type="checkbox"
                name="hiking"
                // defaultValue={}
                onChange={(e) => handleFilter(e, "hiking-checkbox")}>

                </input>

                <label>Other</label>
                  <input 
                  id="other-checkbox"
                  type="checkbox"
                  name="other"
                  // defaultValue={}
                  onChange={(e) => handleFilter(e, "other-checkbox")}
                  >

                  </input>
                  {/* <input type='submit'>Apply Filter</input> */}
                  <button onClick={applyFilter}>Apply Filter</button>

      <div id='scrollContainer'>
        <div id='postContainer'>
          {hasClickedFilter ? listState: initiallist}
        </div>
      </div>
    </div>
  )
}

export default List;


// if (filter){
      //  let photospot = document.getElementById('photospot-checkbox');
      // //  let food = document.getElementById('food-checkbox');
      //   if (photospot.checked){
      //     fetch(`/api/filter/1`)
      //       .then(data => data.json())
      //       .then ()

      //   }

      //   // /api/filter/${#}


      // }
      // displays all