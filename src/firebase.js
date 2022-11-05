// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//you get following keys and id when you create project on firebase 
const firebaseConfig = {
  apiKey: "<your api key>",
  authDomain: "<your auth domain>",
  projectId: "<your project id>",
  storageBucket: "<your storage bucket>",
  messagingSenderId: "<senderid>",
  appId: "<appid>"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore();

