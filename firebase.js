// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABJzdumjkUfvY4yPTJbKbEe0lhim-SA0Y",
  authDomain: "reidanse.firebaseapp.com",
  projectId: "reidanse",
  storageBucket: "reidanse.appspot.com",
  messagingSenderId: "743849450166",
  appId: "1:743849450166:web:5b32bc2b8bb3ed550a2417",
  measurementId: "G-G8W0JFHZXQ"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export {app, db, storage} ;