// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUBtH80PTxre06KWrx2yGP_X-mhIQP4wk",
  authDomain: "recipe-project-2aa8f.firebaseapp.com",
  projectId: "recipe-project-2aa8f",
  storageBucket: "recipe-project-2aa8f.firebasestorage.app",
  messagingSenderId: "491952534529",
  appId: "1:491952534529:web:8d865b4a69a4369c62bc00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);