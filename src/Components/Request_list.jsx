import React, { Component } from 'react';
import './Request_list.css';
import { request } from 'http';

const INITIAL_STATE = {
    adminrequests:{}
  };


class MyRequests extends Component {
state = {  }

constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    
  }

  componentWillMount(){
    var newrequests={}
    const self=this
    this.props.firebase.getAdminRequestPending().then(function (requests){  
       
      self.setState( {adminrequests:requests} )
    })
    }


render() { 
    const pending=Object.keys(this.state.adminrequests).map((key)=>{
        return (
            <p className="list-group-item text-left font-weight-bold">
            Request ID: <div className= "list-inline-item font-weight-normal">{this.state.adminrequests[key][0]} </div> <br/>
            Service: <div className= "list-inline-item font-weight-normal">{this.state.adminrequests[key][1]} </div> <br/>
            Status: <div className= "list-inline-item font-weight-normal">{this.state.adminrequests[key][2]}</div> <br/>
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
                <p className="list-group-item text-left font-weight-bold">
                    Request ID: <div className= "list-inline-item font-weight-normal">4</div> <br/>
                    Service: <div className= "list-inline-item font-weight-normal">Plumber</div> <br/>
                    Status: <div className= "list-inline-item font-weight-normal">In Progress </div> <br/>
                <a href="#" class="btn btn-primary">View Request</a>
                </p><br/>               
            </div>

            <div className="col-sm-4">
                <h6>Completed Requests</h6><br/>
                <p className="list-group-item text-left font-weight-bold">
                    Request ID: <div className= "list-inline-item font-weight-normal">2</div> <br/>
                    Service: <div className= "list-inline-item font-weight-normal">Gardener</div> <br/>
                    Status: <div className= "list-inline-item font-weight-normal">Completed </div> <br/>
                <a href="#" class="btn btn-primary">View Request</a>
                </p><br/>             
            </div>
        </div>
    </div>
</div>
);
}
}

export default MyRequests;