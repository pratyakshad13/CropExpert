import React from 'react'
import './Header.css'
function Header() {
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>
            <img className='imgclass' src='./Cropexp.png' alt='logo' width={200}/>
            <div className='flexCenter h-menu'>
                <a href='http://localhost:5173/'>Home</a>
                <a href='http://localhost:5173/croprecommend'>Crop Recommendatio</a>
                <a href='http://localhost:5173/Disease'>Disease Detection</a>
                <a href=''>Fertilizer Recommendation</a>
                <button className='button'>
                <a href='http://localhost:5173/Signup'>Login</a></button>
            </div>
        </div>
    </section>
  )
}

export default Header;