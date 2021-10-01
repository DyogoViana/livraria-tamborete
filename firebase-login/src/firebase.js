// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXK5lY2xCLAwpw7TLTN4hQoxdhjXfbH_c",
  authDomain: "livraria-tamborete.firebaseapp.com",
  projectId: "livraria-tamborete",
  storageBucket: "livraria-tamborete.appspot.com",
  messagingSenderId: "186115272905",
  appId: "1:186115272905:web:fbb46080c858d18f3c1d18"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
