import React, { useState, useEffect } from 'react';
import './ProfilePage.css';

function ProfilePage() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    const userEmail = localStorage.getItem('userlogin');
    if (!userEmail) {
      console.error('User email not found in localStorage');
      return;
    }

    fetch(`https://quoteflix-register-login.onrender.com/user/${userEmail}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };
  const handleLogout = () => {
    localStorage.removeItem('userlogin');
    window.location.href = '/login_page';
  };

  const handleHome = () => {
    window.location.href = '/quoteflixhome'
  }

  return (
    <div className='main'>
      <div className="profilewrapper">
        <div className='profileimgbrand'>
          <a href="/quoteflixhome"><img
            src={require("./QuoteFlix.png")}
            alt="QuoteFlix"
            style={{ cursor: "pointer" }}
            className='logo'
          /></a>
        </div>
        {userData.name && userData.email ? (
          <div className='content'>
            <h1 className="profiletitle">Welcome {userData.name}</h1>
            <h3 className='data'>Name:- {userData.name} <a href='/profileupdate' style={{fontSize:'18px',}}>Change</a></h3>
            <h3 className='data' style={{marginBottom:'30px',marginTop:'20px'}}>Email:- {userData.email}</h3>
          </div>
        ) : (
          <div className="fetchingloader-container">
            <h1 className='fetchingdata'>Fetching Data</h1>
            <div className="loader"></div>
          </div>
        )}
        <div className='btn'>
          <button className="profilebutton" style={{ marginLeft: '5px' }} onClick={handleLogout}>Logout</button>
          <button className="profilebutton" style={{ marginLeft: '5px' }} onClick={handleHome}>Home</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
