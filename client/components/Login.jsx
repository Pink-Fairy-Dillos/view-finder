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
        console.log(data);
        setSavedUser(data.username);
        console.log(data.id);
        setUserId(data.id); // getting ID from backend (no need if cookies)
        const fetchString = `/api/getPersonalList/${data.username}`
        console.log(fetchString)
        fetch(fetchString)
        .then(res => res.json())
        .then((locations) => {
          if (!Array.isArray(locations)) {
            locations = [];
          }
            setUserLocations(locations);
            console.log(locations);
        })
        .then(()=>console.log('user locations updated'))
      })

      .catch(err => console.log('Login error: ', err));
    }
  
  return (
    <div className="p-3 w-40 bg-orange-50 shadow-xl rounded-lg flex flex-col border border-orange-100">
      <label>Username:</label>
      <input type='text' id='username'></input>
      <label>Password:</label>
      <input type='password' id='password'></input>
      <div>
        <button className="p-1 bg-[#FA7070]" id="login-btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}


export default Login;