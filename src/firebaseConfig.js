
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFo8kjYuS2cHgF76E0EUaW_UmAjd-_Quk",
  authDomain: "chat-486af.firebaseapp.com",
  projectId: "chat-486af",
  storageBucket: "chat-486af.appspot.com",
  messagingSenderId: "614452999693",
  appId: "1:614452999693:web:a5340da27d72e6dae50744",
  measurementId: "G-LJNT316TMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);