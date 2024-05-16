// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:   import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "perfect-views-84950.firebaseapp.com",
  projectId: "perfect-views-84950",
  storageBucket: "perfect-views-84950.appspot.com",
  messagingSenderId: "1035999552007",
  appId: "1:1035999552007:web:4641179d77bdd7114100a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);