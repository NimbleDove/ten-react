import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Add this import
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW5htG8RdEbFOvT0e1tI6lp79hmUEs26Q",
  authDomain: "matematikv1.firebaseapp.com",
  projectId: "matematikv1",
  storageBucket: "matematikv1.appspot.com",
  messagingSenderId: "740343795905",
  appId: "1:740343795905:web:97700484d3ee7b6fc24440",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
