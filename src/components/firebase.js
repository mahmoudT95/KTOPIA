// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj98jc8L7HAWxlSuG7oyM4GVYSlJEfUmw",
  authDomain: "kitopiaa.firebaseapp.com",
  projectId: "kitopiaa",
  storageBucket: "kitopiaa.appspot.com",
  messagingSenderId: "260360853160",
  appId: "1:260360853160:web:d4a123f856f31cac61149d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth = getAuth(app);
export default app;