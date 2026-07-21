import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "rent-car-rd",
  appId: "1:1094674523381:web:6f75602077c442575191bc",
  storageBucket: "rent-car-rd.firebasestorage.app",
  apiKey: "AIzaSyBgIYsiFU24Ky3iIdwjiif7HhAtP1twQYw",
  authDomain: "rent-car-rd.firebaseapp.com",
  messagingSenderId: "1094674523381"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
