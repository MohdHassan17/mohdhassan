
import { useContext, useEffect, useState } from 'react';
import { db, storage } from './firebase-config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, getDocs, addDoc, updateDoc, doc,deleteDoc} from 'firebase/firestore'
import './App.css';

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Arrow from './assets/images/left-arrow.png'


import { MyProvider } from './ProjectContext';
import projectContext from './ProjectContext';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './components/Admin';

function App() {
  const projectsCollectionRef = collection(db, 'projects')
  const [projects, setProjects] = useState([])


  useEffect(()=>{
    const getProjects = async ()=>{
    const data = await getDocs(projectsCollectionRef)
    setProjects(data.docs.map((doc)=>({...doc.data(), id: doc.id})))    }
    
    getProjects()
  }, [])

 
  // const {uploadImage, setName, setDescription, setImageUpload} = useContext(projectContext)
  return (

  
    <div className="App">

  {/* <div className="tilt-box">
        <img src={Arrow} alt="" />
      </div> 
     */}
   
   <BrowserRouter>
     <Routes>
        <Route path='/' index element={<>     <Navbar/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Projects projects={projects}/>
      <ContactMe/>
      <div className="footer">
      <h4>Made with 💖 by Hassan</h4>
    </div>
      
    </>}/>

    <Route path='/adminIsHassan' element={<Admin/>}/>
     </Routes>
   </BrowserRouter>
 

    
    </div>

   
   
  );
}

export default App;
