import React, { useEffect } from "react";
import Navbar from './Navbar';
import RandomQuoteGenerater from "./RandomTipGenerater";
import Footer from "./Footer";

function App() {
  useEffect(()=>{
    document.title = "TechBits";
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = "../favicon_techbits.png";
  },[]);
  return (
    <body style={{ overflowX: 'hidden',height:'100vh' }}>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <RandomQuoteGenerater />
          <Footer />
        </header>
      </div>
    </body>
  );
}
export default App;