import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRa4c_wVOs2zGSEOuUK7DM1X7bcAnksw8",
  authDomain: "eshop-b8e8a.firebaseapp.com",
  projectId: "eshop-b8e8a",
  storageBucket: "eshop-b8e8a.appspot.com",
  messagingSenderId: "330261902715",
  appId: "1:330261902715:web:9df6f5cee2fa999019b9de",
  measurementId: "G-XYLN860M5B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
