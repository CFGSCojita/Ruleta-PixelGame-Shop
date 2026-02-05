import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1ILgpfQBmnBTsX0e7FO891sBt5nbEfm0",
  authDomain: "ruleta-shop.firebaseapp.com",
  projectId: "ruleta-shop",
  storageBucket: "ruleta-shop.firebasestorage.app",
  messagingSenderId: "175570832160",
  appId: "1:175570832160:web:e16605453519997c3f2545",
  measurementId: "G-WNDJJZ988B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);