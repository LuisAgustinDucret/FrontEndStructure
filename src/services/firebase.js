// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase qrs that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlqp12YUUbMm-6d88vabK9CxmhP1UpynQ",
  authDomain: "qr-maker-da5dd.firebaseapp.com",
  projectId: "qr-maker-da5dd",
  storageBucket: "qr-maker-da5dd.appspot.com",
  messagingSenderId: "621223040306",
  appId: "1:621223040306:web:79c053d689f2f607b4f32b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default firebaseApp;