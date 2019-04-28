import React, { Component } from 'react';
import './MyRequests.css';

const INITIAL_STATE = {
	
	requests: []
  };
  

class MyRequests extends Component {
	state = {  }

	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	  }
	
	  componentDidMount() {
		var newrequests = [];
		const self = this;
		this.props.firebase.doDisplayRequest(this.props.email).then(function(newrequests) {
			
			self.setState({ requests: newrequests });
		});
	  };

	render() { 
		const lists = this.state.requests.map((each,i) => {
				if(each['Status'] == "pending"){
				// Service: Cleaner  
				// Worker: Sakina Hassan
				// Status: Completed
				// Your Rating: 
				// console.log("pending")
					
					return (
						<div key={i}>
	
						<ul className="list-group">
							<li className="list-group-item text-left font-weight-bold">
								Service: <div className= "list-inline-item font-weight-normal">{each['Service']} </div> <br/>
								{/*Worker: <div className= "list-inline-item font-weight-normal">{each['Worker']} </div> <br/> */}
								Status: <div className= "list-inline-item font-weight-normal">{each['Status']} </div> <br/>
							</li>
							<br/>
						</ul>
						</div>
					);
				}
				else if(each['Status'] == "inprogress"){
				// Service: Cleaner  
				// Worker: Sakina Hassan
				// Status: Completed
				// Your Rating: 
				// console.log("pending")
					
					return (
						<div key={i}>
	
						<ul className="list-group">
							<li className="list-group-item text-left font-weight-bold">
								Service: <div className= "list-inline-item font-weight-normal">{each['Service']} </div> <br/>
								Worker: <div className= "list-inline-item font-weight-normal">{each['Worker']} </div> <br/>
								Status: <div className= "list-inline-item font-weight-normal">{each['Status']} </div> <br/>
							</li>
							<br/>
						</ul>
						</div>
					);
				}
				else if(each['Status'] == "completed"){
				// Service: Cleaner  
				// Worker: Sakina Hassan
				// Status: Completed
				// Your Rating: 
					// console.log("COMPLETED")
					return (
						<div key={i}>

						<ul className="list-group">
							<li className="list-group-item text-left font-weight-bold">
								Service: <div className= "list-inline-item font-weight-normal">{each['Service']} </div> <br/>
								Worker: <div className= "list-inline-item font-weight-normal">{each['Worker']} </div> <br/>
								Status: <div className= "list-inline-item font-weight-normal">{each['Status']} </div> <br/>
								Your Rating: <div className= "list-inline-item font-weight-normal">{each['Your Rating']} </div> <br/>
							</li>
							<br/>
						</ul>
						</div>
					);
				}
			});
		
		
		return ( 
			<div className="card bg-light text-dark x">
			<h5 className="card-title">Your Requests</h5>
			{/* {console.log("==========",this.state.requests)} */}
			{lists}
			</div>
		);
	}
}
 
export default MyRequests;