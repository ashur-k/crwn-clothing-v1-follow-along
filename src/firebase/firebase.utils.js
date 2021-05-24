import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDflATbERoAK2QJIUOEEtt-8fzjt5ODSgo",
    authDomain: "crwn-db-280a5.firebaseapp.com",
    projectId: "crwn-db-280a5",
    storageBucket: "crwn-db-280a5.appspot.com",
    messagingSenderId: "410735117825",
    appId: "1:410735117825:web:249878a4915260eb602200",
    measurementId: "G-N9TKDDRW53"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_Account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


