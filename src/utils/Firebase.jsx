// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvooNlq-fwhUH-hxdqQ5JqmIpvXFQFvds",
  authDomain: "netflixai-fb6b3.firebaseapp.com",
  projectId: "netflixai-fb6b3",
  storageBucket: "netflixai-fb6b3.appspot.com",
  messagingSenderId: "775547297616",
  appId: "1:775547297616:web:d60b255bef44f21c495655",
  measurementId: "G-B0JGQHZZCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
