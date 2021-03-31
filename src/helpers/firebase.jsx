import firebase from 'firebase/app'
import 'firebase/firebase-storage'

var firebaseConfig = {
    apiKey: "AIzaSyBwF8UwQqnjtc1YlDp_Gy0_ILnHJyimRfk",
    authDomain: "musical-experience-experiment.firebaseapp.com",
    projectId: "musical-experience-experiment",
    storageBucket: "musical-experience-experiment.appspot.com",
    messagingSenderId: "214728891100",
    appId: "1:214728891100:web:045bda74715c431fa1f219",
    measurementId: "G-CPLDDS6YBV"
  };

const fb = firebase.initializeApp(firebaseConfig);
export const storage = fb.storage();