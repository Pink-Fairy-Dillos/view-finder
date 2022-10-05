import React, { useState, useEffect } from 'react';

const Login = ({ setSavedUser, setLoginModal, setUserLocations, setUserId }) => {
  
function handleLogin(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username, password);
    if (!username) alert('Need to enter a username!');
    if (!password) alert('Need to enter a password!');
    
    const body = {username, password};
    
    setLoginModal();  // changes the logged in state to toggle off login modal
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        setSavedUser(username);
        setUserId(user_id); // no need if cookies
        const fetchString = `api/getList/${data.username}`
        fetch(fetchString)
        .then(res => res.json())
        .then((locations) => {
          if (!Array.isArray(locations)) locations = [];
            setUserLocations(locations);
        })
      })

      .catch(err => console.log('Login error: ', err));
    }
  
  return (
    <div id='loginModal'>
      <label>Username:</label>
      <input type='text' id='username'></input>
      <label>Password:</label>
      <input type='password' id='password'></input>
      <button id="login-btn" onClick={handleLogin}>Login</button>
    </div>
  )
}


export default Login;