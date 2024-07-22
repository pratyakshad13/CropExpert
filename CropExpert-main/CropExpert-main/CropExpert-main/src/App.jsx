import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Disease from "./components/Disease";
import Crop_recommend from "./components/Crop_recommend";
import { Routes, Route } from "react-router-dom";
import Dash from "./components/Dash";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  return (
   <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='CropRecommend' element={<Crop_recommend/>}/>
      <Route path='Disease' element={<Disease/>}/>
      <Route path='Dashboard' element={<Dash/>}/>
      <Route path='Signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
     
    </Routes> 
    
   </div>
  );
}

export default App;
