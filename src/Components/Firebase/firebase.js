import app from "firebase/app";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash =  hash % 6700417; // Convert to 32bit integer
      if(hash < 0){
          hash = hash * -1
      }
  }
  return hash.toString();
};


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

  // getdata = dbjson =>{
  //   var docRef = db.collection("cities").doc("SF")
  // }



  doSaveNewUser = information => {
    console.log(information);
    console.log("HASHSASA",information.email.hashCode())
    this.database
      .collection("Customers")
      .doc(information.email.hashCode())
      .set({
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
      })
      .catch((error) =>{
        console.log("FB ERRR",error)
      });
  };
  doDisplayWorker=async()=>{
    try{
        const snapshot= await this.database.collection("Customers").get()  
        var names=[]   
        snapshot.docs.map((doc)=>{
          const datas=doc.data()
          names.push(datas['firstname'])
          
        })
        return names
     }
  catch(error){
    console.log(error)
    console.log('data not fetched')
  }
}
getAdminRequestPending=async()=>{
try{
  let adminrequests={}
  const snapshot= await this.database.collection("CurrentRequests").where("status","==","completed").get()
  snapshot.docs.map((doc)=>{
    const datas=doc.data()
    adminrequests[doc.id]=[]
    adminrequests[doc.id].push(doc.id)
    adminrequests[doc.id].push(datas['service'])
    adminrequests[doc.id].push(datas['status'])  
  })
  console.log(adminrequests)
  console.log('done')
  return adminrequests
} 
catch(error){

} }


}






export default Firebase;
