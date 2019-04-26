import React, { Component } from 'react';
import './Request_Completed.css';

class Request_Completed extends Component {
	state = {  }
	render() { 
		return ( 
			<div className="card bg-light text-dark">
                <p className="text-left font-weight-bold">
                Request ID: <div className= "list-inline-item font-weight-normal">5 </div> <br/>
                Service: <div className= "list-inline-item font-weight-normal">Electrician </div> <br/>
                Service Details: <div className= "list-inline-item font-weight-normal">Required for AC service</div> <br/>
                Customer Name: <div className= "list-inline-item font-weight-normal">Abu Bakar Aziz </div> <br/>
                Customer Contact: <div className= "list-inline-item font-weight-normal">0300 4359240 </div> <br/>
                Customer Address: <div className= "list-inline-item font-weight-normal">32 X, Model Town Lahore</div> <br/>
                Status: <div className= "list-inline-item font-weight-normal">In Progress</div> <br/>
			    </p>

                <button type="submit" className="btn btn-primary c">Request Completed</button>
            </div>
		);
	}
}
 
export default Request_Completed;