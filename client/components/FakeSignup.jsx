import React from 'react'

function signupClick() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username, password);
    if (!username) alert('Need to enter a username!');
    if (!password) alert('Need to enter a password!');
    // make post request to server with username and password
    fetch('api/signup', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data === 'failed login') {
          // send alert if login attemp failed
          alert('you have entered an incorrect username/password')
        } else {
          // if verified redirect to homepage
          console.log('signed up on front end');
        }
      })
      .catch(err => console.log('Login error: ', err));
  }
const Signup = () => {
  return (
    <div>Signup
        <div>
        <input type="text" id="username" placeholder="Username" />
        <input type="password" id="password" placeholder="Password" />
        <button type="submit" onClick={signupClick}>Signup</button>
      </div>
    </div>
  )
}

export default Signup