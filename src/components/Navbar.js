import React from 'react'
import '../assets/css/Navbar.css'

function Navbar() {

   document.addEventListener('click', (e)=>{
     const nav = document.getElementById('nav-container')
     const burger = document.getElementById('burger')
 if(!nav.contains(e.target) && !burger.contains(e.target)){
    

   nav.classList.remove('show')
}
  })


  function showNav(){
    const nav = document.getElementById('nav-container')

    nav.classList.toggle('show')

   

   
  }

  return (
    <header>
       <div className="burger-menu" id="burger" onClick={showNav}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
      <div className="nav-container" id="nav-container">
     
        <div className="logo-container">
          <div className="logo"></div>
        </div>
        <div className="nav-list-container">
          
          <ul className="nav-list">
            <a className="nav-list-items" href='#skills'><li >My Skill Set</li></a>
            <a className="nav-list-items" href='#about_me'> <li>About Me</li></a>
            <a className="nav-list-items" href='#projects'> <li >Projects</li></a>
            <a className="nav-list-items" href='#contact_me'> <li >Contact Me</li></a>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar