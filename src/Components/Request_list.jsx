import React, { Component } from 'react';
import './Request_list.css';
import { request } from 'http';

const INITIAL_STATE = {
    adminrequestspending:{},
    adminrequestsinprogress:{},
    adminrequestsincompleted:{},
  };


class MyRequests extends Component {
state = {  }

constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    
  }

  componentWillMount(){
        let database=this.props.firebase.getdatabase()
        const self=this
        database.collection("CurrentRequests").where("status","==","pending").onSnapshot(function(snapshot){
        let adminrequestss={}
        snapshot.docs.map((doc)=>{
        const datas=doc.data()
        adminrequestss[doc.id]=[]
        adminrequestss[doc.id].push(doc.id)
        adminrequestss[doc.id].push(datas['service'])
        adminrequestss[doc.id].push(datas['status'])
          
    })
        self.setState( {adminrequestspending:adminrequestss} )
        })


        database.collection("CurrentRequests").where("status","==","inprogress").onSnapshot(function(snapshot){
            let adminrequestss={}
            snapshot.docs.map((doc)=>{
            const datas=doc.data()
            adminrequestss[doc.id]=[]
            adminrequestss[doc.id].push(doc.id)
            adminrequestss[doc.id].push(datas['service'])
            adminrequestss[doc.id].push(datas['status'])
              
        })
            self.setState( {adminrequestsinprogress:adminrequestss} )
            })

            database.collection("CurrentRequests").where("status","==","completed").onSnapshot(function(snapshot){
                let adminrequestss={}
                snapshot.docs.map((doc)=>{
                const datas=doc.data()
                adminrequestss[doc.id]=[]
                adminrequestss[doc.id].push(doc.id)
                adminrequestss[doc.id].push(datas['service'])
                adminrequestss[doc.id].push(datas['status'])
                  
            })
                self.setState( {adminrequestsincompleted:adminrequestss} )
                })

            

   }


updateadmin=()=>{
    var newrequests={}
    const self=this
    this.props.firebase.getupdateadminpending().then(function (requests){  
       
      self.setState( {adminrequests:requests} )
    })
    }
   


render() { 
    const pending=Object.keys(this.state.adminrequestspending).map((key)=>{
        return (
            <p className="list-group-item text-left font-weight-bold">
            Request ID: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestspending[key][0]} </div> <br/>
            Service: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestspending[key][1]} </div> <br/>
            Status: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestspending[key][2]}</div> <br/>
        <a href="#" class="btn btn-primary">View Request</a>
        <br />
        </p>
        )
 
       });


       const inprogress=Object.keys(this.state.adminrequestsinprogress).map((key)=>{
        return (
            <p className="list-group-item text-left font-weight-bold">
            Request ID: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestsinprogress[key][0]} </div> <br/>
            Service: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestsinprogress[key][1]} </div> <br/>
            Status: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestsinprogress[key][2]}</div> <br/>
        <a href="#" class="btn btn-primary">View Request</a>
        <br />
        </p>
        )
       });


       const completed=Object.keys(this.state.adminrequestsincompleted).map((key)=>{
        return (
            <p className="list-group-item text-left font-weight-bold">
            Request ID: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestsincompleted[key][0]} </div> <br/>
            Service: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestsincompleted[key][1]} </div> <br/>
            Status: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestsincompleted[key][2]}</div> <br/>
        <a href="#" class="btn btn-primary">View Request</a>
        <br />
        </p>
        )
 
       });
       
return ( 
<div>
    <div className="form-group a">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search Request by ID"></input>
    </div>
    <div className="card bg-light text-dark">
        <div className="row">
            <div className="col-sm-4">
                <h6>Pending Requests</h6><br/>
                { pending }
                
              
            </div>

            <div className="col-sm-4">
                <h6>In Progress Requests</h6><br/>
                { inprogress }          
            </div>

            <div className="col-sm-4">
                <h6>Completed Requests</h6><br/>
                { completed }
            </div>
        </div>
    </div>
</div>
);
}
}

export default MyRequests;