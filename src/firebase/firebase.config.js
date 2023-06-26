// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyA-hbP96ugdalac5oJPXcRvnFO3v2OD6PQ",
  // authDomain: "genius-car-995ba.firebaseapp.com",
  // projectId: "genius-car-995ba",
  // storageBucket: "genius-car-995ba.appspot.com",
  // messagingSenderId: "289743499848",
  // appId: "1:289743499848:web:e45b1089a8742ba823de7d",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
