// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8Y0C4AoRNGo6qVId1DT_yJ4sWFIXsgkE",
  authDomain: "api-winxshopeid.firebaseapp.com",
  projectId: "api-winxshopeid",
  storageBucket: "api-winxshopeid.appspot.com",
  messagingSenderId: "232399096911",
  appId: "1:232399096911:web:e5c901ca2c5a2d4f146e3a",
  measurementId: "G-J6X1815C43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
