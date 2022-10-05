import React, { useState, useEffect } from 'react';

const Signup = ({ setSavedUser, setSignUpModal, setLoginModal }) => {
  
function handleSignup(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username, password);
    if (!username) alert('Need to enter a username!');
    if (!password) alert('Need to enter a password!');
    
    const body = {username, password};
    
    setSignUpModal(); 
    fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => { 
        if (data === 'failed login') {
          // send alert if login attemp failed
          alert('you have entered an incorrect username/password')
        } else {
          // if verified redirect to homepage
          console.log('signed up on front end');
          setLoginModal();
          


        }
      })
      .catch(err => console.log('Login error: ', err));
    }

  return (
    <div id='signupModal'>
      <label>Username:</label>
      <input type='text' id='username'></input>
      <label>Password:</label>
      <input type='password' id='password'></input>
      <button id="signup-btn" onClick={handleSignup}>Sign Up</button>
    </div>
  )
}


export default Signup;