import React from 'react'
import Profile from '../assets/images/handsome.png'
import '../assets/css/Intro.css'
import Github from '../assets/images/github.png'
import Insta from '../assets/images/social-media (1).png'
import Whatsapp from '../assets/images/whatsapp.png'


function Intro() {
  return (
    <div className="intro-container">
      <div className="image-container">
        <img src={Profile} className='profile-img' alt="" />
      </div>

      <div className="info-details">
        <p className="small">Hello I'm</p>
        <h1 className="name-heading">MOHAMMED HASSAN NASEER</h1>
        <h2 className="niche-heading">WEB DESIGNER/DEVELOPER</h2>

        <div className="btn-contact-container">
          <div className="resume-btn-container">
          <a href="#" className="resume-btn"><button className='btn'>Download Resume</button></a>
          </div>

          <div className="social-links-container">
          <a href="https://instagram.com/_hassan17__" className="social-links"><img src={Insta} alt="" /></a>
          <a href="https://wa.me/3417368024" className="social-links"><img src={Whatsapp} alt="" /></a>
          <a href="https://github.com/MohdHassan17" className="social-links"><img src={Github} alt="" /></a>
          </div>
        
       
        </div>
</div>
    </div>
  )
}

export default Intro