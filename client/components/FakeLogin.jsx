import React from 'react'

function loginClick() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username, password);
    if (!username) alert('Need to enter a username!');
    if (!password) alert('Need to enter a password!');
    // make post request to server with username and password
    fetch('api/login', {
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
          console.log('successfully logged in');
        }
      })
      .catch(err => console.log('Login error: ', err));
  }

const Login = () => {
  return (
    <div>
        <input type="text" id="username" placeholder="Username" />
        <input type="password" id="password" placeholder="Password" />
        <button type="submit" onClick={loginClick}>Login</button>
    </div>
  )
}

export default Login