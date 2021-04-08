import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDfm25n6pYTzWqAambaTkEvgBJg1ImirYw",
    authDomain: "address-book-3bb94.firebaseapp.com",
    projectId: "address-book-3bb94",
    databaseURL: "https://address-book-3bb94-default-rtdb.firebaseio.com",
    storageBucket: "address-book-3bb94.appspot.com",
    messagingSenderId: "371050416233",
    appId: "1:371050416233:web:0ca6cc69028fc45bb8baf8"
  };

const app = firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore(app);

