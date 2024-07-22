import { useState } from 'react'
import './Dashboard/App.css'
import Header from './Dashboard/Header'
import Sidebar from './Dashboard/Sidebar'
import Home from './Dashboard/Home'
import Crop_recommend from './Crop_recommend'
import Disease from './Disease'
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom';
function Dash() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Home />
        <Header OpenSidebar={OpenSidebar}/>
    </div>
  )
}

export default Dash;