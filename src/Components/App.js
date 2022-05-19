import React, { useState, useEffect, useRef } from "react";
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
  const [date, setDate] = useState([]);
  const firstMount = useRef(false);
  
  // const [archive, setArchive] = useState([]);
  // const [reset, setReset] = useState(true);
  // archive={archive} setDate={setDate} reset={reset} setReset={setReset} randomPic={randomPic}
  
  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => setApod(res))
      .catch(err => console.log(err))
   }, [])

   useEffect(() => {
      if(firstMount.current) {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
          .then(res => setApod(res))
          .catch(err => alert("Please Select A Valid Date"))
      } else {
        firstMount.current = true;
      }
   }, [date])



  //  useEffect(() => {
  //   axios
  //     .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=2022-05-01`)
  //     .then(res => setArchive(res))
  //     .catch(err => console.log(err))
  //  }, [])
  
  //  function setDate(date){
  //    const newDate = archive.data.filter(each => {
  //       return each.date === date;
  //     })
  //     const newObj = { data: newDate[0] }
  //     setApod(newObj);
  //  }

  //  function randomPic(){
  //   axios
  //   .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`)
  //   .then(res => {
  //     res.data = res.data[0];
  //     setApod(res);
  //   })
  //   .catch(err => console.log(err))
  //  }


  return (
    <div className="App">
      <Header setDate={setDate}/>
      <div className="container">
        { apod.data ? <Image imageURL={apod.data.hdurl} title={apod.data.title}/> : <h3>Loading...</h3> }
        <div className="info-container">
          { apod.data && <Title date={apod.data.date} title={apod.data.title} /> }
          { apod.data && <Info copyright={apod.data.copyright} explanation={apod.data.explanation} /> }
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
