import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Approve_Request.css";
import * as ROUTES from "../constants/routes";

const INITIAL_STATE = {
  requests: {},
  customers: {},
  workers: {},
  workersassigned: "",
  counter: [""]
};

class Approve_Request extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handlecheck = worker => {
    console.log("value is", worker);
    this.setState({ workersassigned: worker });
  };

  componentWillMount() {
    console.log("insidehere");
    const self = this;
    console.log("RQ ID", this.props.requestid * 2);
    let req_id = this.props.requestid.toString();
    const props = this.props;
    props.firebase
      .getrequestdetails(props.requestid)
      .then(function(requestdetails) {
        console.log("loloolo", requestdetails[req_id][1]);
        props.firebase
          .getcustomerdetails(requestdetails[props.requestid][4])
          .then(function(customerdetails) {
            props.firebase
              .getworkdetails(requestdetails[req_id][1])
              .then(function(workerdetails) {
                console.log("Requestdetails", requestdetails);
                self.setState({
                  requests: requestdetails,
                  workers: workerdetails,
                  customers: customerdetails
                });
              });
          });
      });
  }

  approved = () => {
    console.log("Approved here");
    console.log(this.state.workersassigned);
    let status = "inprogress";
    this.props.firebase.dosavepending(
      this.props.requestid,
      this.state.workersassigned,
      status
    );
    this.props.history.push({
      pathname: ROUTES.ADMIN_REQUESTS
    });
  };
  reject = () => {
    console.log("Reject here");
    console.log(this.state.workersassigned);
    let status = "rejected";
    this.props.firebase.dosavepending(
      this.props.requestid,
      this.state.workersassigned,
      status
    );
    this.props.history.push({
      pathname: ROUTES.ADMIN_REQUESTS
    });
  };

  render() {
    console.log("printing requests", this.state.requests);

    const workers = Object.keys(this.state.workers).map(key => {
      return (
        <tr>
          <td>{this.state.workers[key][0]}</td>
          <td>
            {this.state.workers[key][1]} {this.state.workers[key][2]}
          </td>
          {/* <td><img src={require('./5-stars.png')} className="img-fluid a"></img></td> */}
          <td>
            <input
              type="checkbox"
              onClick={() => this.handlecheck(this.state.workers[key][0])}
              name="worker"
            />
          </td>
        </tr>
      );
    });

    const display = Object.keys(this.state.requests).map(key => {
      return (
        <p className="text-left font-weight-bold">
          Request ID:{" "}
          <div className="list-inline-item font-weight-normal">
            {this.state.requests[key][0]}
          </div>{" "}
          <br />
          Service:{" "}
          <div className="list-inline-item font-weight-normal">
            {this.state.requests[key][1]}
          </div>{" "}
          <br />
          Service Details:{" "}
          <div className="list-inline-item font-weight-normal">
            {this.state.requests[key][3]}
          </div>{" "}
          <br />
          Customer Name:{" "}
          <div className="list-inline-item font-weight-normal">
            {this.state.customers[this.state.requests[key][4]][1]}{" "}
            {this.state.customers[this.state.requests[key][4]][2]}{" "}
          </div>{" "}
          <br />
          Customer Contact:{" "}
          <div className="list-inline-item font-weight-normal">
            {this.state.customers[this.state.requests[key][4]][4]}
          </div>{" "}
          <br />
          Customer Address:{" "}
          <div className="list-inline-item font-weight-normal">
            {this.state.customers[this.state.requests[key][4]][3]}
          </div>{" "}
          <br />
          Status:{" "}
          <div className="list-inline-item font-weight-normal">
            Waiting for Approval
          </div>{" "}
          <br />
          <br />
          Select Worker
        </p>
      );
    });

    return (
      <div className="card bg-light text-dark">
        {display}

        <div className="table-wrapper-scroll-y my-custom-scrollbar">
          <table className="table2 table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th />
              </tr>
            </thead>
            <tbody>{workers}</tbody>
          </table>
        </div>
        <div className="container text-left">
          <button
            type="button"
            onClick={() => this.approved()}
            className="btn btn-primary a"
          >
            Approve Request
          </button>
          <button
            type="button"
            onClick={() => this.reject()}
            className="btn btn-primary b"
          >
            Reject Request
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Approve_Request);
