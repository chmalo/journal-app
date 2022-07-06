// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGBAfyZQ1D4KSGlsR3u5srnetpxX6Gq48",
  authDomain: "react-curso-842d0.firebaseapp.com",
  projectId: "react-curso-842d0",
  storageBucket: "react-curso-842d0.appspot.com",
  messagingSenderId: "716817223491",
  appId: "1:716817223491:web:ed05a98fc9fcf20f97e9f6",
  measurementId: "G-WDWHH8DL0B",
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
