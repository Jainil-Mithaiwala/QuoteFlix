/*import React from "react";
import "./colorpixelhome.css";
import Navbar from './Navbar';
import Footer from "./Footer";

function App() {
  useEffect(()=>{
    document.title = "QuoteFlix";
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = "../quoteflix2.png";
  },[]);
  return (
    <body style={{ overflowX: 'hidden',height:'100vh' }}>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Footer />
        </header>
      </div>
    </body>
  );
}
export default App;*/





import React from "react";
import "./colorpixelhome.css";

function ColorPixelHome() {
    return (
        <div className='colorpixelhome-container'>
            <div>
                <p className='colorpixelloaderhome'></p>
            </div>
            <div>
                <a href="/" className="links">Go to Homepage</a>
            </div>
        </div>
    );
}

export default ColorPixelHome;

