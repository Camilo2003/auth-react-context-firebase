// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxo8czG2iCzO3IgBPdIX3r5cmtaUyigO4",
  authDomain: "vci-react-project.firebaseapp.com",
  projectId: "vci-react-project",
  storageBucket: "vci-react-project.firebasestorage.app",
  messagingSenderId: "601617555447",
  appId: "1:601617555447:web:f174170d197b26ca6c98f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
