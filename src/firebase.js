import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDqpEhb3oEQjNWmddvCg1Vwua_Sn1cX6Kk",
    authDomain: "fir-book-fcd5d.firebaseapp.com",
    projectId: "fir-book-fcd5d",
    storageBucket: "fir-book-fcd5d.appspot.com",
    messagingSenderId: "951204780953",
    appId: "1:951204780953:web:e70ae1681f01e3dda61108"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;