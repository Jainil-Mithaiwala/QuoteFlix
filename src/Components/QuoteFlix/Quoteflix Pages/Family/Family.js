import React, { useEffect } from "react";
import Navbar from '../Navbar';
import RandomQuoteGenerater from "./RandomQuoteGenerater";
import Footer from "../Footer";

function App() {
  useEffect(()=>{
    document.title = "Family Quote";
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = "../quoteflix2.png";
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