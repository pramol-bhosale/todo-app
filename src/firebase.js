// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFIuv0_m4m3a9S3HIcSfVUKJcFVQ7i9mA",
  authDomain: "todo-app-a178b.firebaseapp.com",
  projectId: "todo-app-a178b",
  storageBucket: "todo-app-a178b.appspot.com",
  messagingSenderId: "787634218769",
  appId: "1:787634218769:web:aa1442ddd0f223d73e4eb0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore();

