import React, { Component } from 'react';
import './MyRequests.css';

class MyRequests extends Component {
	state = {  }
	render() { 
		return ( 
			<div className="card bg-light text-dark">
  			<h5 className="card-title">Your Requests</h5>
				<ul className="list-group">
  				    <li className="list-group-item text-left font-weight-bold">
					  	Service: <div className= "list-inline-item font-weight-normal">Electrician </div> <br/>
						Worker: <div className= "list-inline-item font-weight-normal">Abdullah arif </div> <br/>
						Status: <div className= "list-inline-item font-weight-normal">In Progress </div> <br/>
					</li>
					<br/>
  					<li className="list-group-item text-left font-weight-bold">
					  	Service: <div className= "list-inline-item font-weight-normal">Cleaner </div> <br/>
						Worker: <div className= "list-inline-item font-weight-normal">Sakina Hassan </div> <br/>
						Status: <div className= "list-inline-item font-weight-normal">Completed </div> <br/>
						Your Rating: <img src={require('./5-stars.png')} className="img-fluid a"></img>
					</li>
					<br/>
  					<li className="list-group-item text-left font-weight-bold">
					  	Service: <div className= "list-inline-item font-weight-normal">Gardener</div> <br/>
						Worker: <div className= "list-inline-item font-weight-normal">Nazim Cheema </div> <br/>
						Status: <div className= "list-inline-item font-weight-normal">Completed </div> <br/>
						Your Rating: <img src={require('./4-stars.png')} className="img-fluid a"></img>
					</li>
				</ul>
			</div>
		);
	}
}
 
export default MyRequests;