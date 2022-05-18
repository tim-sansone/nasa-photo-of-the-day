import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../Constants/Constants.js"
import "../App.css";

// NASA APOD query "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

// import all my components

import Header from "./Header.js"
import Image from "./Image.js"
import Title from "./Title"
import Info from "./Info"

// App function
function App() {
  const [apod, setApod] = useState([]);
  
  
  // effect hook with data fetch
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => setApod(res.data))
      .catch(err => console.log(err))
  }, [])
  
  
  
  
  return (
    <div className="App">
      <Header />
      <div className="container">
         <Image data={apod}/>
        <div className="info-container">
          <Title data={apod} />
          <Info data={apod} />
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
