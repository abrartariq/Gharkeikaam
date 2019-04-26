import React, { Component } from 'react';
import './Approve_Request.css';

class Approve_Request extends Component {
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
                Status: <div className= "list-inline-item font-weight-normal">Waiting for Approval</div> <br/><br/>
                Select Worker
			    </p>

                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <table className="table2 table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Rating</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>14356</td>
                                <td>Abrar Tariq</td>
                                <td><img src={require('./5-stars.png')} className="img-fluid a"></img></td>
                                <td><input type="checkbox" name="example2"></input></td>
                            </tr>
                            <tr>
                                <td>14356</td>
                                <td>Abrar Tariq</td>
                                <td><img src={require('./5-stars.png')} className="img-fluid a"></img></td>
                                <td><input type="checkbox" name="example2"></input></td>
                            </tr>
                            <tr>
                                <td>14356</td>
                                <td>Abrar Tariq</td>
                                <td><img src={require('./5-stars.png')} className="img-fluid a"></img></td>
                                <td><input type="checkbox" name="example2"></input></td>
                            </tr>
                            <tr>
                                <td>14356</td>
                                <td>Abrar Tariq</td>
                                <td><img src={require('./5-stars.png')} className="img-fluid a"></img></td>
                                <td><input type="checkbox" name="example2"></input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container text-left">
                    <button type="submit" className="btn btn-primary a">Approve Request</button>
                    <button type="submit" className="btn btn-primary b">Reject Request</button>
                </div>
            </div>
		);
	}
}
 
export default Approve_Request;