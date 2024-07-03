import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfileUpdate.css';

function ProfileUpdate() {
  const [userData, setUserData] = useState({});
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch user data when component mounts
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    // Fetch user email from localStorage
    const userEmail = localStorage.getItem('userlogin');
    if (!userEmail) {
      console.error('User email not found in localStorage');
      return;
    }

    // Fetch user data from the server based on email stored in localStorage
    axios.get(`http://localhost:5000/user/${userEmail}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    // Check if name is empty
    if (!name) {
      setErrorMessage('Please fill in all fields');
      setSuccessMessage('');
      return;
    }
  
    try {
      const updatedUserData = { name };
      const userEmail = localStorage.getItem('userlogin');
      if (!userEmail) {
        console.error('User email not found in localStorage');
        return;
      }
  
      const response = await axios.put(`http://localhost:5000/user/${userEmail}`, updatedUserData);
  
      if (!response.data.success) {
        throw new Error('Failed to update user data');
      }
  
      // Optionally, handle success response
      console.log('User data updated successfully');
      setSuccessMessage('User data update successful! Redirecting to Your Profile.');
      setTimeout(() => {
        window.location.href = 'http://localhost:3000/profile';
      }, 500);
      setErrorMessage('');
      // Refresh user data after update
      fetchUserData();
    } catch (error) {
      console.error('Error updating user data:', error);
      setErrorMessage('Failed to update user data. Please try again.');
      setSuccessMessage('');
    }
  };

  const handleProfile = () => {
    window.location.href = 'http://localhost:3000/profile'
  }
 
  return (
    <div>
      <div className="profileupdatewrapper">
        <div className='imgbrand'>
          <a href="/profile"><img
            src={require("./QuoteFlix.png")}
            alt="QuoteFlix"
            style={{ cursor: "pointer" }}
            className='logo'
          /></a>
        </div>
        <div className="title">Update Profile</div>
        <form onSubmit={handleUpdate}>
          <div className="input_field">
            <input type="text" placeholder={userData.name} className="input" onChange={e => setName(e.target.value)} value={name}/>
          {errorMessage && !successMessage && <div className="profileupdateerror-message">{errorMessage}</div>}
          {successMessage && !errorMessage && <div className="profileupdatesuccess-message">{successMessage}</div>}
          </div>
          <div className="input_field">
            <h3 className='data' style={{margin:"20px 30px"}}>Email:- {userData.email}</h3>
          </div>
          <div className="btn">
            <button type="submit" className="button" style={{ marginLeft: '5px' }}>Update</button>
            <button type="button" className='button' style={{ marginLeft: '5px' }} onClick={handleProfile}>Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileUpdate;
