import React, { Component } from 'react';
import logoV from '../images/V.png';
import arrow from '../images/Arrow.png';

const Navbar = props => {
    return (
        
        <div id="navbarContainer">
          <img id="arrow" src={arrow}/>
          <p id="navbarText">IEWFINDER</p>
          <img id="logoV" src={logoV}/>
        
          <form id="searchForm" >
          <input type="text" placeholder="Search locations" /> 
          <input type="submit" />
          </form>
          {/* <input type="text" placeholder="Search locations" /> 
          <input type="submit" /> */}
      
          
        </div>
       
    )
}


export default Navbar;