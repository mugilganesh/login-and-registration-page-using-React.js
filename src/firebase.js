// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSLdWvbJbkLU1qo-LTrHejtDjIKWNXiKY",
  authDomain: "login-page-38574.firebaseapp.com",
  projectId: "login-page-38574",
  storageBucket: "login-page-38574.appspot.com",
  messagingSenderId: "463525659242",
  appId: "1:463525659242:web:0e6d7fb140a4e1a7ad8013"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
