import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzL8Ht48OHHzst_NBu48Kn4Ce_zL_JTlM",
  authDomain: "tracker-9d2b5.firebaseapp.com",
  projectId: "tracker-9d2b5",
  storageBucket: "tracker-9d2b5.appspot.com",
  messagingSenderId: "761258249705",
  appId: "1:761258249705:web:dd370c8af14d1ff830cf78",
  measurementId: "G-72RCY6F1W5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
