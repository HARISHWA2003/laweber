// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0BXxgEeMAv9dTBevsgiFXIBvWXZapX9o",

  authDomain: "laweber-4a5f5.firebaseapp.com",

  projectId: "laweber-4a5f5",

  storageBucket: "laweber-4a5f5.appspot.com",

  messagingSenderId: "924902910408",

  appId: "1:924902910408:web:c051b25aab20ee1ec5f8fd",

  measurementId: "G-N3BT19NLER",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(firebase_app);
export default firebase_app;
