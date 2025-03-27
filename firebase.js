// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Correct import for Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC71ipreN6WSTMLZPN1Q-QLy34UBf6-f24",
  authDomain: "flashcardsaas-60098.firebaseapp.com",
  projectId: "flashcardsaas-60098",
  storageBucket: "flashcardsaas-60098.appspot.com",
  messagingSenderId: "65719247472",
  appId: "1:65719247472:web:340dd3805fd88a1e020ab5",
  measurementId: "G-HRX0HP3JFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Correct method to get Firestore instance

export { db };
