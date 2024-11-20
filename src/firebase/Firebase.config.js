// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcSklkSMevtrZdEMGEdp3EBl5BuPPE0r0",
  authDomain: "starshelter-tourism.firebaseapp.com",
  projectId: "starshelter-tourism",
  storageBucket: "starshelter-tourism.firebasestorage.app",
  messagingSenderId: "54447770557",
  appId: "1:54447770557:web:76ad8fb90c6f71ef65e0d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;