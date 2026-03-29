// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5KxrP7qO7ig0MTl3QV9fYx4i8oF_S8_Y",
  authDomain: "smartdeals-67869.firebaseapp.com",
  projectId: "smartdeals-67869",
  storageBucket: "smartdeals-67869.firebasestorage.app",
  messagingSenderId: "501600094286",
  appId: "1:501600094286:web:f60cc9e7f595e0ea5d1b1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);