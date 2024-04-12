import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA_QXLRsCJVj5iqjjJSUmqVkQEwcz7PedI",
  authDomain: "ark-305.firebaseapp.com",
  projectId: "ark-305",
  storageBucket: "ark-305.appspot.com",
  messagingSenderId: "453071832398",
  appId: "1:453071832398:web:d572706f2e1d4ea5a44a1f",
  measurementId: "G-700CN0SE8W",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
