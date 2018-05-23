// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/database';

// Initalize and export Firebase.
var config = {
    apiKey: "AIzaSyAY4RAEl21l2A0RGwHSMiYKbSqNxtGcinw",
    authDomain: "wordteacher-bb32f.firebaseapp.com",
    databaseURL: "https://wordteacher-bb32f.firebaseio.com",
    projectId: "wordteacher-bb32f",
    storageBucket: "wordteacher-bb32f.appspot.com",
    messagingSenderId: "787814470191"
  };
export default firebase.initializeApp(config);
