import React, { Component, useState, useEffect } from 'react';
import logoV from '../images/V.png';
import arrow from '../images/Arrow.png';
import Signup from './Signup.jsx';
import Login from './Login.jsx';

const Navbar = props => {
  const savedUser = props.savedUser;
  const savedStatus = props.savedStatus;
  // this is all for the modal
  const [hasClickedSignUp, setSignUpModal] = useState(false);
  const [hasClickedLogIn, setLoginModal] = useState(false);

  // modal sign up toggle rendering
  function signupModal(){
    setSignUpModal(!hasClickedSignUp);
  }

  //modal log in toggle rendering
  function loginModal(){
    setLoginModal(!hasClickedLogIn);
  }

    return (
        
        <div id="navbarContainer">
          <img id="arrow" src={arrow}/>
          <p id="navbarText">VIEWFINDER</p>
          <img id="logoV" src={logoV}/>
        
          {/* The search from was not implemented yet, but could be a good stretch feature to incorporate google maps autocomplete */}
          {/* <form id="searchForm" >
          <input type="text" placeholder="Search locations" /> 
          <input type="submit" />
          </form> */}
          {/* <input type="text" placeholder="Search locations" /> 
          <input type="submit" /> */}
          <button onClick={signupModal}>Sign Up</button>
          {hasClickedSignUp ? <Signup /> : null}
          <button onClick={loginModal}>Log In</button>
          {hasClickedLogIn ? <Login savedUser={savedUser} savedStatus={savedStatus}/> : null}
        </div>
       
    )
}


export default Navbar;