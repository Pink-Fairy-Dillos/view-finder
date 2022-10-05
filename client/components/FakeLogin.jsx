import React, { useState, useEffect } from 'react'

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
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('api/fetch-user', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            }
        })
        .then((data) => data.json())
        .then((response) => {
            setUser(response.user);
        })
        .catch((error) => {
            console.log(`No user exists with the current session... ${error}`)
        })
}, [user])


  return (
    <div>
        <input type="text" id="username" placeholder="Username" />
        <input type="password" id="password" placeholder="Password" />
        <button type="submit" onClick={loginClick}>Login</button>
        <div>
            { user ? `Logged in as ${user}` : 'Not logged in'}
        </div>
    </div>
  )
}

export default Login