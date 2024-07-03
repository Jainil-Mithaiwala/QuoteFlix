import React from "react";
import "./homepage.css";

function Homepage() {
  const currentPath = window.location.pathname;

  if (currentPath === "/" || currentPath === "/localhost:3000") {
    return (
      <div className="homepagemain">
        <div className="homepagebox">
          <h1><a href="/quoteflixhome">QuoteFlix</a></h1>
        </div>
        <div className="homepagebox">
          <h1><a href="/techbitshome">TechBits</a></h1>
        </div>
        <div className="homepagebox">
          <h1><a href="/colorpixelhome">ColorPixel</a></h1>
        </div>
        <div className="homepagebox">
          <h1><a href="/factflixhome">FactFlix</a></h1>
        </div>
      </div>
    );
  }
}

export default Homepage;
