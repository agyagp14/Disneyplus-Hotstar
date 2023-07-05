import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCF-8PHQEZKt-QPF-ASFOSYWbKsh1U2P4A",
    authDomain: "disney-clone-d20b8.firebaseapp.com",
    projectId: "disney-clone-d20b8",
    storageBucket: "disney-clone-d20b8.appspot.com",
    messagingSenderId: "1037339510955",
    appId: "1:1037339510955:web:caa9e8fea79831e4d40fee",
    measurementId: "G-SS3TK4G0Q2"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;