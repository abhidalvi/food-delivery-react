import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyBwP9k5t8fOCHmnDLsVl41aUPpLxyCLGXA",

    authDomain: "food-delivery-react-d201c.firebaseapp.com",

    projectId: "food-delivery-react-d201c",

    storageBucket: "food-delivery-react-d201c.appspot.com",

    messagingSenderId: "358123880284",

    appId: "1:358123880284:web:46caf75ffbbf55d0e48b99"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };