// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsGjpCqF1eVHOvbtKjAaH9wWj1-vhbv58",
  authDomain: "cropexpert-76259.firebaseapp.com",
  databaseURL: "https://cropexpert-76259-default-rtdb.firebaseio.com",
  projectId: "cropexpert-76259",
  storageBucket: "cropexpert-76259.appspot.com",
  messagingSenderId: "385201530074",
  appId: "1:385201530074:web:de31fad44c32235761b1e3",
  measurementId: "G-BC36W4B0XY",
  databaseURL:"https://cropexpert-76259-default-rtdb.firebaseio.com"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app;
