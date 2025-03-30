// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDWRX_52NWgaglc_qGZAnK1ah35NuhF1aM",
  authDomain: "pomodoro-ed4f6.firebaseapp.com",
  projectId: "pomodoro-ed4f6",
  storageBucket: "pomodoro-ed4f6.firebasestorage.app",
  messagingSenderId: "257491284559",
  appId: "1:257491284559:web:57735e80ac0aa21b9d303a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export instances for use in your app
export const db = getFirestore(firebaseApp);
export const realTimeDb = getDatabase(firebaseApp);
