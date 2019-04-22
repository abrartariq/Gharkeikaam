import app from "firebase/app";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB2nWP2RFdh2XIm-I8Uk8o_RYOmkEOu8tg",
  authDomain: "gharkeikaam.firebaseapp.com",
  databaseURL: "https://gharkeikaam.firebaseio.com",
  projectId: "gharkeikaam",
  storageBucket: "gharkeikaam.appspot.com",
  messagingSenderId: "913134010597"
};
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.database = firebase.firestore();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: "http://localhost:3000/"
    });

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  doSaveNewUser = information => {
    console.log(information);
    this.database
      .collection("Customers")
      .add({
        firstname: information.firstname,
        lastname: information.lastname,
        password: information.password,
        phonenumber: information.phonenumber,
        email: information.email,
        dateofbirth: information.dateofbirth,
        address: information.address
      })
      .then(() => {
        console.log("successfully addded data");
      });
  };
}

export default Firebase;
