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
          <a href="http://localhost:3000/quoteflixhome" className="navbatitems">Home</a>
        </li>
        <li>
          <a href="http://localhost:3000/about_us" className="navbatitems">About Us</a>
        </li>
        <li>
          <a href="http://localhost:3000/contect_us" className="navbatitems">Contect Us</a>
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
