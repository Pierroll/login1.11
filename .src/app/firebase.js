import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

const firebaseConfig = {
  // Paste your firebase config here
  apiKey: "AIzaSyDxkz7Hqq_S-8w94keyGir2zwQIkxd-R0k",
  authDomain: "prueba-feb52.firebaseapp.com",
  projectId: "prueba-feb52",
  storageBucket: "prueba-feb52.appspot.com",
  messagingSenderId: "473928079118",
  appId: "1:473928079118:web:615586273ef6b08db5695f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
//finnn