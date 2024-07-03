import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/login', { email, password })
      .then(res => {
        if (res.data.message === 'Login successful') {
          // Store user login state and email
          localStorage.setItem('userlogin', email);
          // Redirect to home page upon successful login
          window.location.href = 'http://localhost:3000/quoteflixhome';
        } else {
          setErrorMessage(res.data.message);
        }
      })
      .catch(err => {
        console.log(err);
        setErrorMessage('Please enter valid email or password.');
      });
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper">
        <div className='imgbrand'>
          <img
            src={require("./QuoteFlix.png")}
            alt="QuoteFlix"
            style={{ cursor: "pointer" }}
            className='logo'
          />
        </div>
        <div className="title">
          Log In
        </div>
        <div className="input_field">
          <input type="text" placeholder="Email" className="input" name='email' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input_field">
          <input type="password" placeholder="Password" className="input" name='password' onChange={e => setPassword(e.target.value)} />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="btn">
          <button type="submit" className="button">Log in</button>
        </div>
        <h5 align="center" className='logintext'><a className='loginlink' href="http://localhost:3000/registration_page">Sign In</a></h5>
      </div>
    </form>
  );
}

export default Login;
