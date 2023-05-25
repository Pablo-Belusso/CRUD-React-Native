import firebase from "firebase"
import "firebase/storage"

//import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDN3aKiQr6JmEvjCAvLXIxPv_t5aTAwkt4",
  authDomain: "crud-46488.firebaseapp.com",
  projectId: "crud-46488",
  storageBucket: "crud-46488.appspot.com",
  messagingSenderId: "914832283572",
  appId: "1:914832283572:web:beb001a6ba539983e084e1"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore()
export default database

//const app = initializeApp(firebaseConfig);