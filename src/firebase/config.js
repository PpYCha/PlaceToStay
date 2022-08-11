// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxDoT6XihPmtWxKrQjybF-q1S34uaPwBM",
  authDomain: "traveltut-f477c.firebaseapp.com",
  projectId: "traveltut-f477c",
  storageBucket: "traveltut-f477c.appspot.com",
  messagingSenderId: "431376758415",
  appId: "1:431376758415:web:95e80ccf944f1d0a72a2fa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
