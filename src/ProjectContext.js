import { createContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "./firebase-config";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

const projectContext = createContext('')

export const MyProvider = ({ children }) => {
    // Define your state and functions to manipulate it here
     
  const[name, setName] = useState("")
  
  const [github, setGithub] = useState('')
  const[imageUpload,setImageUpload] = useState(null)
  const[framework, setFramework] = useState('')
  const[link, setLink] = useState('')
  const[color, setColor] = useState('')
  


  const projectsCollectionRef = collection(db, 'projects')






  const uploadImage = async(e) => {
    
    e.preventDefault()

   

    const image = String(imageUpload.name)
    const imageName = `images/${imageUpload.name}`
    if (imageUpload == null) return;
    const imageRef = ref(storage, imageName )
    const uploadTask = uploadBytesResumable(imageRef, imageUpload)

    uploadTask.on(
      'state_changed',
      null,
      null,
      ()=>{

        setTimeout(() => {
          getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
          console.log(url)

          var imageUrl = url 
          const createDoc  = async ()=>{
            await addDoc(projectsCollectionRef,{name: name, image:imageUrl, link: link, github: github, framework: framework, color:color})
          }
          createDoc()
          })
        },1000 );
     
      }
    )

      console.log('workig')
    

    }


  
    // You can also define functions to update the state
    
  
    return (
      <projectContext.Provider value={{setImageUpload, setName, setLink, uploadImage, setGithub, setFramework, setColor}}>
        {children}
      </projectContext.Provider>
    );
  };
  
export default projectContext