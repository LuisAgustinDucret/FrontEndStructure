import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { FIREBASE_CONFIG } from '../constants/config';
import { getAuth } from 'firebase/auth';


try {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
    console.log('Firebase inicializado');
  }
} catch (err) {
  console.log(err);
}

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
const firebaseApp = initializeApp(FIREBASE_CONFIG);

export const db = getFirestore(app);
export const auth = getAuth(firebaseApp);
export default firebaseApp;