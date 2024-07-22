import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='flexCenter paddings innerWidth hero-container'>
            
            <div className='hero-left'>
             <div className='hero-title'>
                <div className='orange-circle'/>
                <h1>Crop Expert</h1>
                <h2>CropManagement Tool</h2>
                <div className='flexColStart hero-des'>
                <br/>
                <span>Welcome to our website CropExpert Here you can get best Suggestion</span>
                <span>Related to your crops and we provide you with the tools that you can use</span>
                <span>to boost your crop yeilds </span>
                <span>We provide you the essential tools such as soil nutrients analyzer sensor </span>
                <span>That keep track of soil of you farm land </span>
                <br/><br/>
                <div className='Sign-in'>
                <button className='big-button'>SIGNUP</button>
                </div>
             </div>
             </div>
             
             
            </div>


            <div className='flexCenter hero-right'>
                <div className='image-container'>
                    <img src='./hero-image2.jpg' alt='' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;