// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv5ELgWq38ILVxRASj5G6Hh3MxsLHImo8",
  authDomain: "lawapplication-8757c.firebaseapp.com",
  projectId: "lawapplication-8757c",
  storageBucket: "lawapplication-8757c.appspot.com",
  messagingSenderId: "698628656644",
  appId: "1:698628656644:web:bdfd81f7649169b3512f51"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);