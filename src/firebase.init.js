// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChhxG9Z2OYqFUAVBs0JLolpwlo_mNBJlA",
  authDomain: "genius-car-service2-b6ff6.firebaseapp.com",
  projectId: "genius-car-service2-b6ff6",
  storageBucket: "genius-car-service2-b6ff6.appspot.com",
  messagingSenderId: "402349214942",
  appId: "1:402349214942:web:00d3f238acc5bd2a60c64f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
