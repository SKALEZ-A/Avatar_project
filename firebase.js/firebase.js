// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "fir-68263.firebaseapp.com",
  projectId: "fir-68263",
  storageBucket: "fir-68263.appspot.com",
  messagingSenderId: "994848549306",
  appId: "1:994848549306:web:15b7ce7d6bb005b5401583",
  measurementId: "G-7NXHX4PM8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app };
