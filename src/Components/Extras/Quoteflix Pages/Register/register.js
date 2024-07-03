import React, { useState } from 'react';
import axios from 'axios';
import './registercss.css';

function RegistrationPage() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const emailCheckResponse = await axios.get(`http://localhost:5000/check-email?email=${values.email}`);
        if (emailCheckResponse.data.exists) {
          setErrors({ email: 'Email already in use' });
          return;
        }

        const response = await axios.post('http://localhost:5000/signup', values);
        if (response.status === 200) {
          setSuccessMessage('Registration successful! Redirecting to login page.');
          setTimeout(() => {
            window.location.href = 'http://localhost:3000/login_page';
          }, 100);
        } else {
          console.error('Registration failed:', response.data.message);
        }
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Name cannot be empty";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      newErrors.email = "Email cannot be empty";
      valid = false;
    } else if (!emailRegex.test(values.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!values.password) {
      newErrors.password = "Password cannot be empty";
      valid = false;
    } else if (!passwordRegex.test(values.password)) {
      newErrors.password = "Password must be at least 8 characters long and contain uppercase, lowercase, digit, and special character";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
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
        Sign up
      </div>

      <div className="form">
        <div className="input_field">
          <input type="text" placeholder="Name" className="input" name='name' value={values.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="input_field">
          <input type="text" placeholder="Email" className="input" name='email' value={values.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="input_field">
          <input type="password" placeholder="Password" className="input" name='password' value={values.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="success-message">{successMessage}</div>
        <div className="btn">
          <button className="button" onClick={handleSubmit}>Sign up</button>
        </div>
      </div>
      <div align="center" className='logintext'><a className='loginlink' href="http://localhost:3000/login_page">Log in</a></div>
    </div>
  );
}

export default RegistrationPage;
