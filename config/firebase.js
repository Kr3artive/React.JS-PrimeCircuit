// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsfKgUst4n5sNtAYuuv7oz3RiAZYx-faA",
  authDomain: "e-commerce-ca193.firebaseapp.com",
  projectId: "e-commerce-ca193",
  storageBucket: "e-commerce-ca193.firebasestorage.app",
  messagingSenderId: "113854108400",
  appId: "1:113854108400:web:49981009cb5faa6acd2835",
  measurementId: "G-LW267MJM9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);
analytics 
export const auth = getAuth()
auth