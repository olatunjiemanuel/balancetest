// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMrHd6uCAOyHyo3Ten4gV_IXdPtxlwHEw",
  authDomain: "balancetest-1f016.firebaseapp.com",
  projectId: "balancetest-1f016",
  storageBucket: "balancetest-1f016.firebasestorage.app",
  messagingSenderId: "379281810805",
  appId: "1:379281810805:web:5c4f5896fc657d65799f3c",
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const firebase_db = getFirestore(firebase_app);
