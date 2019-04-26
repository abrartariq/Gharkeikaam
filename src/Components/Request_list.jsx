import React, { Component } from 'react';
import './Request_list.css';


class MyRequests extends Component {
state = {  }

render() { 
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
                <p className="list-group-item text-left font-weight-bold">
                    Request ID: <div className= "list-inline-item font-weight-normal">9</div> <br/>
                    Service: <div className= "list-inline-item font-weight-normal">Electrician </div> <br/>
                    Status: <div className= "list-inline-item font-weight-normal">Waiting for approval</div> <br/>
                <a href="#" class="btn btn-primary">View Request</a>
                </p><br/>
                
                <p className="list-group-item text-left font-weight-bold">
                    Request ID: <div className= "list-inline-item font-weight-normal">6</div> <br/>
                    Service: <div className= "list-inline-item font-weight-normal">Cleaner </div> <br/>
                    Status: <div className= "list-inline-item font-weight-normal">Waiting for approval</div> <br/>
                <a href="#" className="btn btn-primary">View Request</a>
                </p>
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

                <p className="list-group-item text-left font-weight-bold">
                    Request ID: <div className= "list-inline-item font-weight-normal">1</div> <br/>
                    Service: <div className= "list-inline-item font-weight-normal">Electrician </div> <br/>
                    Status: <div className= "list-inline-item font-weight-normal">Completed</div> <br/>
                <a href="#" className="btn btn-primary">View Request</a>
                </p>               
            </div>
        </div>
    </div>
</div>
);
}
}

export default MyRequests;