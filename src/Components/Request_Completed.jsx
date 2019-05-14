import React, { Component } from 'react';
import './Request_Completed.css';
import { withRouter } from 'react-router-dom';

import * as ROUTES from "../constants/routes";

const INITIAL_STATE = {
    requests:{},
    customers:{},
    workers:{},
    workersassigned:"",
    counter:[""],
    payment:"",
  
  };



  
class Request_Completed extends Component {
    state = { }
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
      }
      onChange = event => {
        console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
      };

      
      completed=()=>{
        console.log('here')
        console.log(this.state.workersassigned)
        let status="completed"
       this.props.firebase.dosavepending(this.props.requestid,this.state.workersassigned,status,this.state.payment)
       this.props.history.push({
           pathname: ROUTES.ADMIN_REQUESTS
          });
    }

    componentWillMount(){
        console.log('insidehere')
        const self=this
        console.log(this.props.requestid)
        const props=this.props
        props.firebase.getrequestdetails(props.requestid).then(function(requestdetails){
            props.firebase.getcustomerdetails(requestdetails[props.requestid][4]).then(function(customerdetails){
                props.firebase.getworkdetails().then(function(workerdetails){
                    console.log("Requestdetails",requestdetails)
                    self.setState({ requests:requestdetails,workers:workerdetails,customers:customerdetails});
        
                })
            })
    
        }) 
    }


    
    
	render() { 
        const display=Object.keys(this.state.requests).map((key)=>{
            return (

            <p className="text-left font-weight-bold xyz">
            Request ID: <div className= "list-inline-item font-weight-normal">{this.state.requests[key][0]}</div> <br/>
            Service: <div className= "list-inline-item font-weight-normal">{this.state.requests[key][1]}</div> <br/>
            Service Details: <div className= "list-inline-item font-weight-normal">{this.state.requests[key][3]}</div> <br/>
            
            Customer Name: <div className= "list-inline-item font-weight-normal">{this.state.customers[this.state.requests[key][4]][1]} {this.state.customers[this.state.requests[key][4]][2]} </div> <br/>
            Customer Contact: <div className= "list-inline-item font-weight-normal">{this.state.customers[this.state.requests[key][4]][4]}</div> <br/>
            Customer Address: <div className= "list-inline-item font-weight-normal">{this.state.customers[this.state.requests[key][4]][3]}</div> <br/>
            Status: <div className= "list-inline-item font-weight-normal">InProgress</div> <br/><br/>
            </p>
          

            )
        })
        
		return ( 
            
			<div className="card bg-light text-dark xyz">
              {display}

                <div class="form-group payment">
                    <label for="usr">Add Payment</label>
                    <input type="text"  name="payment" onChange={this.onChange} class="form-control" id="usr"></input>
                </div>
                <button type="submit" onClick={() => this.completed()}  className="btn btn-primary c">Request Completed</button>

            </div>
		);
	}
}
 
export default withRouter(Request_Completed);