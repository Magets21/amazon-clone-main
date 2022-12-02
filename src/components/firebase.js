// for backend
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAxaXTRa2oLUjf6QdHM2db_wZCVjQklCd0",
  authDomain: "clone-main-c48f5.firebaseapp.com",
  projectId: "clone-main-c48f5",
  storageBucket: "clone-main-c48f5.appspot.com",
  messagingSenderId: "402080014554",
  appId: "1:402080014554:web:90ff234476500fea7f05e3",
  measurementId: "G-XQ9FB60RBP",
};

// for backend
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };
