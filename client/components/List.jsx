import React, { Component, useState, useEffect } from 'react';
import Post from "./Post.jsx"
import logo from './images/logo3.png';
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


  
  return (
    <div className="max-w-1/3 bg-[#D6CDA4]">
      <div className="mt-24" >
      <div className="ml-7 shadow-2xl bg-[#A1C298] max-w-xs max-h-lg rounded-xl pb-6">
        <h1 id="places" className="p-3 pt-5 pl-7 pr-5 pb-2 ml-6 font-bold text-3xl">All Public Pins
         </h1>
      <div id="checkbox" className="ml-2 gap-2 text-center">
          <input
                
                id="photospot-checkbox"
                type="checkbox"
                name="photospot"
                // defaultValue={}
                onChange={(e) => handleFilter(e, "photospot-checkbox")}
                >
                </input>
                <label className='mr-3'> PhotoSpot</label>
      
              <input 
                id="food-checkbox"
                type="checkbox"
                name="food"
                // defaultValue={}
                onChange={(e) => handleFilter(e, "food-checkbox")}
                >
                </input>
                <label> Food</label>
        </div>
        <div className= "ml-2 gap-2 text-center">
                <input 
                id="hiking-checkbox"
                type="checkbox"
                name="hiking"
                // defaultValue={}
                onChange={(e) => handleFilter(e, "hiking-checkbox")}>

                </input>
                <label className='mr-3'> Hiking</label> 
                
                  <input 
                  id="other-checkbox"
                  type="checkbox"
                  name="other"
                  // defaultValue={}
                  onChange={(e) => handleFilter(e, "other-checkbox")}
                  >

                  </input>
                  <label> Other</label>
                  {/* <input type='submit'>Apply Filter</input> */}
          </div>
          <div className="p-2 shadow-2xl flex ml-2 items-center justify-center">
              <button className="p-1 shadow-xlbg-[#FA7070] hover:bg-orange-300 text-white font-bold py-2 px-4 rounded" onClick={applyFilter}>Apply Filter</button>
          </div>

      <div className="p-2 rounded-xl" id='scrollContainer' >
        <div className="pt-1 pb-2 max-h-s bg-[#1C6758] rounded-xl">
          {hasClickedFilter ? listState: initiallist}
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default List;
