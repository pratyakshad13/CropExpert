import React from 'react'
import seed from '../icons/seed.png';
import
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import {  signOut ,getAuth} from "firebase/auth";
import app from '../../firebase';
const auth = getAuth(app)

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            console.log("Signed out successfully")
            navigate("/");
            
        }).catch((error) => {
        // An error happened.
        });
    }
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/crop">
                    <BsFillArchiveFill className='icon'/> Crop Recommendation
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Disease Detection
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> User Profile
                </a>
            </li>
           
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
            <li className='sidebar-list-item'>
                <button onClick={handleLogout}>
                    <BsFillGearFill className='icon'/> Logout
                </button>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar