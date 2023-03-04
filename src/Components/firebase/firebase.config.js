// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLJJOVCJ3bOJokVIJVS0-870Azm0ZLE2o",
  authDomain: "boatfinder-23f1e.firebaseapp.com",
  projectId: "boatfinder-23f1e",
  storageBucket: "boatfinder-23f1e.appspot.com",
  messagingSenderId: "729897733054",
  appId: "1:729897733054:web:72bbb407e97d3ef80c07ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app