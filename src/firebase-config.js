import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_FIREBASE_API}`,
//   authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
//   projectId: `${process.env.REACT_APP_FIREBASE_PROJECTID}`,
//   storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_FIREBASE_SENDERID}`,
//   appId: `${process.env.REACT_APP_FIREBASE_APPID}`,
//   measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENTID}`
// };

const firebaseConfig = {
  apiKey: "AIzaSyA_2qONuVADlBzCfS4UDzpf27g3NdA6GRA",
  authDomain: "tourspaddlingclub-e3d49.firebaseapp.com",
  databaseURL: "https://tourspaddlingclub-e3d49-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tourspaddlingclub-e3d49",
  storageBucket: "tourspaddlingclub-e3d49.appspot.com",
  messagingSenderId: "278275463356",
  appId: "1:278275463356:web:6902be1f0032e9fd1c18b9",
  measurementId: "G-DBYGY9BSWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);