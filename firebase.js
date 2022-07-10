import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDkld1iiczItCnB8g_zCwv4Jrax1BGPdEI",
    authDomain: "clone-74c8a.firebaseapp.com",
    projectId: "clone-74c8a",
    storageBucket: "clone-74c8a.appspot.com",
    messagingSenderId: "249738332709",
    appId: "1:249738332709:web:1936bfdaaf752c5dcc0dcc",
    measurementId: "G-QLYR5E5V3P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };