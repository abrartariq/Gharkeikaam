import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB2nWP2RFdh2XIm-I8Uk8o_RYOmkEOu8tg",
    authDomain: "gharkeikaam.firebaseapp.com",
    databaseURL: "https://gharkeikaam.firebaseio.com",
    projectId: "gharkeikaam",
    storageBucket: "gharkeikaam.appspot.com",
    messagingSenderId: "913134010597"
  };
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});
export default firebase;
