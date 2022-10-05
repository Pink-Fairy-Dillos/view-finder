import React, { Component, useState, useEffect } from 'react';
import logoV from '../images/V.png';
import arrow from '../images/Arrow.png';
import Signup from './Signup.jsx';
import Login from './Login.jsx';

const Navbar = props => {
  const setSavedUser = props.setSavedUser;
  const savedUser = props.savedUser;
  const savedStatus = props.savedStatus;
  const setUserId = props.setUserId;
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
          <p id="navbarText">IOLENCE</p>
          <img id="logoV" src={logoV}/>

          {!savedUser ? <button onClick={signupModal}>Sign Up</button> : <span>Welcome {savedUser}! </span>}
          {hasClickedSignUp ? <Signup setSavedUser={setSavedUser} setSignUpModal={setSignUpModal} setLoginModal={setLoginModal}/> : null}
          {!savedUser ? <button onClick={loginModal}>Log In</button>: null}
          {hasClickedLogIn ? <Login setSavedUser={setSavedUser} savedStatus={savedStatus} setLoginModal={setLoginModal} setUserLocations={props.setUserLocations} setUserId={setUserId}/> : null}
          {savedUser ? <button>Log Out</button>: null}
        </div>
       
    )
}


export default Navbar;