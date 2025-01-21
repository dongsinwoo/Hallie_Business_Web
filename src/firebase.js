// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEgSZ1cdVMQ0C0z1sBodjuCvzt1iJ0ze0",
  authDomain: "hallie-business.firebaseapp.com",
  projectId: "hallie-business",
  storageBucket: "hallie-business.firebasestorage.app",
  messagingSenderId: "884643954206",
  appId: "1:884643954206:web:9215edb522239c2d2f380f",
  measurementId: "G-HTKVF7SVJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
