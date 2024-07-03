import React from "react";
import './navbar.css';

function Navbar() {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    window.location.href = `/${selectedCategory}`;
  };

  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="http://localhost:3000/home">
            <img
              src={require("./QuoteFlix.png")}
              alt="QuoteFlix"
            />
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/home">Home</a>
        </li>
        <li>About</li>
        <li className="userloginbtn">
          <a href="http://localhost:3000/login_page">
            <img className="userlogin"
              src={require("./user.png")}
              alt="QuoteFlix"
              style={{ height: '45px' }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;