import React, { Component } from "react";
import * as ROUTES from "../constants/routes";
import { withRouter } from 'react-router-dom';
import "./request.css";



const INITIAL_STATE = {
  service: "",
  message: "",
  status: "pending",
  rating: "",
  worker_name: "",
  worker_id: "",
  payment: "",
  reviews: "",
  customer_id: "",
  email: "",
  date:
    new Date().getDate() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getFullYear(),
  time:
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds()
};

class Request extends Component {
  constructor(props) {
    super(props);
    // console.log("IN CREATE REQUEST history =>",this.props.email);
    this.state = { ...INITIAL_STATE };
    this.state.email = this.props.email;
    
  }
  OnSubmit = event => {
    event.preventDefault();
    const {
      service,
      message,
      status,
      rating,
      worker_name,
      worker_id,
      payment,
      email,
      reviews,
      customer_id,
      date,
      time
    } = this.state;
    const self = this;
    // console.log(this.)
    let requestid=(new Date).getTime().toString()
    this.props.firebase.doSaveRequest(this.state,requestid).then(function(){
      console.log(self.props.history)
      console.log('request id', requestid)
      
      self.props.history.push({
        pathname: ROUTES.PROCESSING_REQUEST,
        state: { detail: email, id:requestid }
      });
    });
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name)
  };

  render() {
    return (
      <div className="request-form">
      {/* {console.log("IN CREATE REQUEST",this.props.location)} */}
        {/* <form action="" method="post"> */}
        <form role="form" onSubmit={this.OnSubmit}>
          <h2 color="#242487">Request Service</h2>
          <br />

          <div className="form-group">
            <br />
            <select
              className="form-control"
              name="service"
              onChange={this.onChange}
            >
              <option>Select Service...</option>
              <option>Plumber</option>
              <option>Gardener</option>
              <option>Electrician</option>
              <option>Cleaner</option>
            </select>
            <br />
            <div className="form-group">
              <br />
              <textarea
                type="text"
                className="form-control"
                rows="6"
                name="message"
                placeholder="Message"
                required="required"
                onChange={this.onChange}
              />
              <br />
              <button type="submit" className="button-worker">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(Request);
