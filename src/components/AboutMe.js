import React from 'react'
import '../assets/css/AboutMe.css'
import Profile from '../assets/images/Group 22.png'

function AboutMe() {
  return (
   <section id="about_me">
        <div className="about-wrapper">
  
  <div className="about-container">
  <div className="about-heading-container">
    <h1 className="about-heading"> About Me</h1>
  </div>  
  <div className="about-content">

    <div className="about-me">
    <div className="about">  
    <div className="square1"></div>
    <div className="square2"></div>
    <h2>Hey,</h2>
      <p>Hassan here. Im a Web Designer/Developer from Karachi, Pakistan. I like to work on projects that allow me to push myself to the best of ability. I specialize in creating e-com sites for small or medium sized businesses. My projects incorporate the latest design trends and methods that make the site eye-catching for the user.</p></div>
    </div>
    <div className="about-info">
      <ul className="abilities-list">
  
        <li className="list-items">Continuous Learning  &#8617;  </li>
        <li className="list-items">Problem Solving &#8617;</li>
        <li className="list-items">Responsive Design &#8617;</li>
        <li className="list-items">Communication and Collaboration &#8617;</li>
      </ul>
    </div>
  </div>
  </div>

    
</div>

   </section>
       
     

     
         

   
  )
}

export default AboutMe