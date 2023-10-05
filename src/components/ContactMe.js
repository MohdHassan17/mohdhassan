import React from 'react'
import '../assets/css/ContactMe.css'
import Instagram from '../assets/images/instagram.png'
import Gmail from '../assets/images/gmail.png'
import Facebook from '../assets/images/facebook.png'
import Whatsapp from '../assets/images/whatsapp (1).png'
function ContactMe() {
  return (
    <section id="contact_me">
       <div className="contact">
         <div className="about-heading-container">
        <h1 className="about-heading">Get in Touch</h1>
      </div>  
        <div className="contact-container">
            <div className="socials">
              <a href="https://instagram.com/_hassan17__">
              <img src={Instagram} className='social-img' alt="" />
              </a>
                
            </div>

            <div className="socials">
              <a href="https://wa.me/3417368024">
              <img src={Whatsapp} className='social-img' alt="" />
              </a>
             
            </div>


            <div className="socials">
              <a href="mailto:mohdhassannaseer17@gmail.com">

           
                <img src={Gmail} className='social-img' alt="" />   </a>
            </div>


            <div className="socials">
              <a href="https://www.facebook.com/hassan.naseer.33671">
                <img src={Facebook} className='social-img' alt="" /></a>
            </div>

     
        </div>
    </div>
    </section>
   
  )
}

export default ContactMe