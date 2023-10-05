import React from 'react'
import { useContext } from 'react'
import projectContext from '../ProjectContext'
import '../assets/css/Admin.css'
export default function Admin() {

  const {setImageUpload, setName, setLink, uploadImage, setGithub, setFramework, setColor} = useContext(projectContext)
  return (
 
    <div className="form-wrapper">

<div className="form-container">
      <div className="heading-container">
        <h2>Hello, Master. We have a new project don't we 😏😉😎?</h2>
      </div>

      
      <div className="form">
        <form action="" onSubmit={uploadImage}>
          <input type="text" placeholder='Name:' onChange={(e) =>{setName(e.target.value)}}/>
          <input type="text" placeholder='Link' onChange={(e) =>{setLink(e.target.value)}}/>
          <input type="text" placeholder='Github' onChange={(e) =>{setGithub(e.target.value)}}/>
          <input type="text" placeholder='Framework' onChange={(e) =>{setFramework(e.target.value)}}/>
          <input type="text" placeholder='Color(Hex)' onChange={(e) =>{setColor(e.target.value)}}/>
          <input type="file" name="" onChange={(e) =>{setImageUpload(e.target.files[0])}} id="" />
          <input type="submit" value="Submit" />
        </form>


      </div>

    </div>
    </div>




    
  )
}


