import firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHCnlYgo-2gSpJcymeLps0gquWWm1ewBg",
  authDomain: "notes-fa3d8.firebaseapp.com",
  projectId: "notes-fa3d8",
  storageBucket: "notes-fa3d8.appspot.com",
  messagingSenderId: "639935524061",
  appId: "1:639935524061:web:33125826707904dbd33f34"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
