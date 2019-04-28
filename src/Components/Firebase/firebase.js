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
  return hash;
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
  getdatabase=()=>{
    return this.database  
  }

  // getdata = dbjson =>{
  //   var docRef = db.collection("cities").doc("SF")
  // }



  doSaveNewUser = information => {
    console.log(information);
    console.log("HASHSASA",information.email.hashCode())
    this.database
      .collection("Customers")
      .doc(information.email.hashCode().toString())
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
  const snapshot= await this.database.collection("CurrentRequests").where("status","==","pending").get()
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

getupdateadminpending=()=>{
   this.database.collection("CurrentRequests").onSnapshot(function(snapshot){
    let adminrequests={}
    snapshot.docs.map((doc)=>{
      const datas=doc.data()
      adminrequests[doc.id]=[]
      adminrequests[doc.id].push(doc.id)
      adminrequests[doc.id].push(datas['service'])
      adminrequests[doc.id].push(datas['status'])
      console.log(doc.id)  
    })
    
    return adminrequests
  
  })
 
}

getcustomerdetails=async(customerid)=>{

  try{
    console.log('12')
    let customerdetails={}
  
    const doc= await this.database.collection("Customers").doc("2049493").get()
    console.log('here')
      const datas=doc.data()
      customerdetails[doc.id]=[]
      customerdetails[doc.id].push(doc.id)
      customerdetails[doc.id].push(datas['firstname'])
      customerdetails[doc.id].push(datas['lastname'])  
      customerdetails[doc.id].push(datas['address']) 
      customerdetails[doc.id].push(datas['phonenumber'])
  
    console.log(customerdetails)
    console.log('done')
    return customerdetails

   
  } 
  catch(error){
    console.log('error')
  }
}


getworkdetails=async()=>{

  try{
    let workerdetails={}
    const snapshot= await this.database.collection("Workers").get()
    snapshot.docs.map((doc)=>{
      const datas=doc.data()
      workerdetails[doc.id]=[]
      workerdetails[doc.id].push(doc.id)
      workerdetails[doc.id].push(datas['firstname'])
      workerdetails[doc.id].push(datas['lastname']) 
       
    })
    console.log(workerdetails)
    console.log('done')
    return workerdetails
  } 
  catch(error){
  
  }


}

dosavepending = (key,worker,update,payments) => {
if (worker!="")
  {
    this.database.collection("CurrentRequests").doc(key).update({
      status:update,
      worker_id:worker,
     
    })
    .then(() => {
      console.log("successfully Updated");
    })
    .catch((error) =>{
      console.log("Faield to update",error)
    });
  }else
  {
    this.database.collection("CurrentRequests").doc(key).update({
      status:update,
      payment:payments
    })
    .then(() => {
      console.log("successfully Updated");
    })
    .catch((error) =>{
      console.log("Faield to update",error)
    });

  }
};

getrequestdetails=async(thisid)=>{
  console.log('here12')
  try{
    console.log('12')
    let requestdetails={}
    console.log('insiderequestdetails')
    console.log(thisid)
    const doc= await this.database.collection("CurrentRequests").doc(thisid).get()
    console.log('here')
      const datas=doc.data()
      requestdetails[thisid]=[]
      requestdetails[thisid].push(doc.id)
      requestdetails[thisid].push(datas['service'])
      requestdetails[thisid].push(datas['status'])  
      requestdetails[thisid].push(datas['message']) 
      requestdetails[thisid].push(datas['customer_id'])
  
    console.log(requestdetails)
    console.log('done')
    return requestdetails

   
  } 
  catch(error){
    console.log('error')
  }

}

doSaveRequest = async(information,requestid) => {
  
  console.log(information + "in db");
  this.database
    .collection("CurrentRequests")
    .doc(requestid)
    .set({
      message: information.message,
      service: information.service,
      email: information.email,
      payment: information.payment,
      rating: information.rating,
      reviews: information.reviews,
      customer_id: information.email.hashCode(),
      status: information.status,
      worker_id: information.worker_id,
      worker_name: information.worker_name,
      date: information.date,
      time: information.time
    })
    .then(() => {
      console.log("doSaveRequest","successfully addded data");
      return requestid
    })
    .catch(error => {
      console.log("doSaveRequest","ERRR", error);
    });
}

doDisplayRequest = async(email) =>{
 
  var snapshot = await this.database.collection('CurrentRequests').where('customer_id', '==', email.hashCode()).get()
  let req_list = []
  snapshot.forEach(doc => {
    let req_dict = {}
    let mdata = doc.data()
    req_dict["Service"] = mdata['service']
    req_dict["Worker"] = mdata['worker_name']
    req_dict["Status"] = mdata['status']
    req_dict["Your Rating"] = mdata['rating']
   
    req_list.push(req_dict)
  });

  return req_list
}
  
getworkerdetailid=async(requestid)=>{
  var snapshot = await this.database.collection('CurrentRequests').doc(requestid).get()
  const datas=snapshot.data()
  let workerid=datas['worker_id']
  snapshot=await this.database.collection('Workers').doc(workerid).get()
  const workerdata=snapshot.data()
  return workerdata
  

}
savefeedback=(requestid,updatemessage,updatereview)=>{
  console.log('inside save feedback')
  console.log(requestid)
  console.log(updatemessage)
  console.log(updatereview)
  this.database.collection("CurrentRequests").doc(requestid).update({
    rating:updatereview,
    reviews:updatemessage
  }).then(()=>{
    console.log("successfully saved review and rating")
  })

}


}






export default Firebase;
