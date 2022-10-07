import React, { Component, useState, useEffect } from 'react';
import logo from './images/logo3.png';
// import arrow from '../images/Arrow.png';
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
        
      <header className="fixed z-50 w-full p-4 bg-[#A1C298]">
          <div className="md:flex w-full h-full">
            <div className ="flex items-center ml-auto gap-2">
            <div className="relative">
              {!savedUser ? <button className="p-1 justify-right bg-[#FA7070] hover:bg-orange-300 text-white font-bold py-2 px-4 rounded" onClick={loginModal}>Log In</button>: null}
          {hasClickedLogIn ? <Login setSavedUser={setSavedUser} savedStatus={savedStatus} setLoginModal={setLoginModal} setUserLocations={props.setUserLocations} setUserId={setUserId}/> : null}
          {savedUser ? <button>Log Out</button>: null}
            </div>
            <div className="relative">
            {!savedUser ? <button className="bg-[#FA7070] hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
            Button onClick={signupModal}>Sign Up</button> : <span>Welcome {savedUser}! </span>}
              {hasClickedSignUp ? <Signup setSavedUser={setSavedUser} setSignUpModal={setSignUpModal} setLoginModal={setLoginModal}/> : null}
              </div>
            </div>
            </div>

        </header>
       
    )
}


export default Navbar;