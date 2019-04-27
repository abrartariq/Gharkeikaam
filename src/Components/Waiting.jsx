import React, { Component } from 'react';
import './Waiting.css';

class Waiting extends Component {
	state = {  }
	render() { 
		return ( 
			<div className="card bg-light text-dark c">
                <img src={require('./Spinner.gif')} className="img-fluid z"></img>
                <p className="text-center font-weight-bold">
                Request Status: Waiting for Approval
                </p>
            </div>
		);
	}
}
 
export default Waiting;