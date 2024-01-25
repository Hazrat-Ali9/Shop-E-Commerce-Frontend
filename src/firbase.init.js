// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlHr8pV2Mw78MtnzZg2dyCHQW-HBLa2EM",
  authDomain: "comerce-52e9d.firebaseapp.com",
  projectId: "comerce-52e9d",
  storageBucket: "comerce-52e9d.appspot.com",
  messagingSenderId: "745424781961",
  appId: "1:745424781961:web:db9b69b16b1e221b917c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;