// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQDrm9QA0koQnqE_mdb0kYzZRgG1o4HCE",
  authDomain: "my-application-bd25c.firebaseapp.com",
  projectId: "my-application-bd25c",
  storageBucket: "my-application-bd25c.appspot.com",
  messagingSenderId: "1098051849887",
  appId: "1:1098051849887:web:ae2bb49ea400513f0f1caa",
  measurementId: "G-DFLQXF48K2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
