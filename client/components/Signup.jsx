import React, { useState, useEffect } from 'react';

const Signup = () => {

function handleSignup(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const body = {username, password};
    //fetch
    fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => console.log('now go to login modal'))
      .catch(err => {
        console.log(err);
      })

  return (
    <div>
      <label>Username:</label>
      <input id='username'></input>
      <label>Password:</label>
      <input id='password'></input>
      <button id="signup-btn" onClick={handleSignup}>Sign Up</button>
    </div>
  )
}
}


export default Signup;