import React, { Component } from 'react';
import './Request_list.css';
import { request } from 'http';
import { withRouter } from 'react-router-dom';
import * as ROUTES from "../constants/routes";


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
  
  handlesort=(id)=>{
   
    this.props.history.push({
        pathname: ROUTES.ID5,
        state: { details : id }
       });
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


markcompleted=(id)=>{
   
        this.props.history.push({
            pathname: ROUTES.COMPLETE_REQUEST,
            state: { details : id }
           });
      }
    
   


render() { 
    const pending=Object.keys(this.state.adminrequestspending).map((key)=>{
        return (
            <p className="list-group-item text-left font-weight-bold xyz">
            Request ID: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestspending[key][0]} </div> <br/>
            Service: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestspending[key][1]} </div> <br/>
            Status: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestspending[key][2]}</div> <br/>
        <button type="button" onClick={() => this.handlesort(this.state.adminrequestspending[key][0])} class="btn btn-primary s">View Request</button>
        <br />
        </p>
        )
 
       });


       const inprogress=Object.keys(this.state.adminrequestsinprogress).map((key)=>{
        return (
            <p className="list-group-item text-left font-weight-bold xyz">
            Request ID: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestsinprogress[key][0]} </div> <br/>
            Service: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestsinprogress[key][1]} </div> <br/>
            Status: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestsinprogress[key][2]}</div> <br/>
        <button type="button" onClick={() => this.markcompleted(this.state.adminrequestsinprogress[key][0])} class="btn btn-primary s">View Request</button>
        <br />
        </p>
        )
       });


       const completed=Object.keys(this.state.adminrequestsincompleted).map((key)=>{
        return (
            <p className="list-group-item text-left font-weight-bold xyz">
            Request ID: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestsincompleted[key][0]} </div> <br/>
            Service: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestsincompleted[key][1]} </div> <br/>
            Status: <div className= "list-inline-item font-weight-normal">{this.state.adminrequestsincompleted[key][2]}</div> <br/>
        <button type="button" class="btn btn-primary s">View Request</button>
        <br />
        </p>
        )
 
       });
       
return ( 
<div>
    <div className="form-group a">
      
    </div>
    <div className="card bg-light text-dark a">
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

export default withRouter(MyRequests);