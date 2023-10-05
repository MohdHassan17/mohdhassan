
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
import {getFirestore} from '@firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyBMOjHiBIiESp3hLhlZUsL8XN886ICiu-E",
  authDomain: "my-portfolio-c22fc.firebaseapp.com",
  projectId: "my-portfolio-c22fc",
  storageBucket: "my-portfolio-c22fc.appspot.com",
  messagingSenderId: "193674893439",
  appId: "1:193674893439:web:de8dd0a393ec11216f874a",
  measurementId: "G-XSSPMV9YEH"
};


const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const db = getFirestore(app)