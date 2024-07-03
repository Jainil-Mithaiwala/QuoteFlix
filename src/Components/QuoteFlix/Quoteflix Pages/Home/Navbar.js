import React, { useState, useEffect } from "react";
import './navbar.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('userlogin');
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);



  const handleProfileClick = () => {
    window.location.href = 'http://localhost:3000/profile';
  };

  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="http://localhost:3000/quoteflixhome">
            <img
              src={require("./QuoteFlix.png")}
              alt="QuoteFlix"
            />
          </a>
        </li>
        <li>
          <a href="/quoteflixhome" className="navbatitems">Home</a>
        </li>
        <li>
          <a href="/about_us" className="navbatitems">About Us</a>
        </li>
        <li>
          <a href="/contect_us" className="navbatitems">Contect Us</a>
        </li>
        <li className="quoteflix-dropdown navbatitems" >
        <a href="/quoteflixhome" className="navbatitems" >More Generator</a>
          <div className="dropdown-content bar-block card-4" >
            <a href="/techbitshome" className="bar-item quoteflixbutton">TechBits</a>
            <a href="/colorpixelhome" className="bar-item quoteflixbutton">ColorPixel</a>
            <a href="/factflixhome" className="bar-item quoteflixbutton">FactFlix</a>
          </div>
        </li>
        </ul>
        {isLoggedIn ? (
          <div>
            <li>
              <a href="/profile" onClick={handleProfileClick} >
                <img className="userloginbtn"
                  src={require("./user.png")}
                  alt="User"
                  style={{ height: '45px', cursor: 'pointer' }}
                />
              </a>
            </li>
          </div>
        ) : (
          <li>
            <a href="http://localhost:3000/login_page">
              <img className="userloginbtn"
                src={require("./user.png")}
                alt="User"
                style={{ height: '45px', cursor: 'pointer' }}
              />
            </a>
          </li>
        )}
    </nav>
  );
}

export default Navbar;
