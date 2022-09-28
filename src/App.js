import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from 'react';
import React from 'react'
import MainPage from './pages/MainPage';
import SlideDetails from './pages/SlideDetails';



function App() {

  const [slides, setSlides] = useState("")
  const [thumbnail, setThumbnail] = useState("")

  useEffect(()=> {
    getSlides();
    getThumbnail();
  },[]);

const getSlides = () => {
  axios.get("https://imgmgt.api.preci.cloud/api/SlideImages")
    .then((response) => {
      setSlides(response.data)
    })
    .catch((err) => console.log("error geting slides",err))
};

const getThumbnail = () => {
axios.get("https://wsi001.api.preci.cloud/api/WholeSlideImages/:id/Thumbnails/512x512.jpeg")
  .then((response) => {
    setThumbnail(response.data)
  })
  .catch((err) => console.log("error geting slides thumbnails",err))
}

  return (


    <div className="App">
  

      <Routes>

        <Route path='/'  element={<MainPage slides={slides}/>} />
  
        <Route path='/SlideImages/:slideId' element={<SlideDetails />} />
      </Routes>
    </div>
  );
}

export default App;
