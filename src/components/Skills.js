import React from 'react'
import '../assets/css/Skills.css'
import ReactJs from '../assets/images/science.png'
import Django from '../assets/images/django.png'
import Figma from '../assets/images/figma.png'
import FrontEnd from '../assets/images/programming.png'

function Skills() {
  return (
    <section id="skills">
               <div className="skills-container">
              <div className="about-heading-container">
        <h1 className="about-heading">My Skills</h1>
      </div>  
        <div className="card-container">
            <div className="card-wrapper">
                <div className="card">
                    <img src={ReactJs} alt="" className="card-img" />
                    <h2 className='card-text'>REACT.JS</h2>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <img src={Django} alt="" className="card-img" />
                    <h2 className='card-text'>DJANGO</h2>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <img src={FrontEnd} alt="" className="card-img" />
                    <h2 className='card-text'>FRONT-END DESIGN</h2>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <img src={Figma} alt="" className="card-img" />
                    <h2 className='card-text'>FIGMA</h2>
                </div>
            </div>
        </div>
    </div>
    </section>
 
  )
}

export default Skills