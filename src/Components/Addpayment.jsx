import React, { Component } from 'react';
import './Addpayment.css';

class Addpayment extends Component {
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
                Status: <div className= "list-inline-item font-weight-normal">Completed</div> <br/>
			    </p>
                
                <div class="form-group payment">
                    <label for="usr">Add Payment</label>
                    <input type="text" class="form-control" id="usr"></input>
                </div>

                <button type="submit" className="btn btn-primary d">Done</button>
            </div>
		);
	}
}
 
export default Addpayment;