import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Signup.css";
import * as ROUTES from "../constants/routes";

const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  dateofbirth: "",
  phonenumber: "",
  address: ""
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        //function gets called to authenticate new user
        console.log("Authenticated_User");

        this.props.firebase.doSaveNewUser(this.state);
      })
      .then(() => {
        this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        console.log("Error in authentication");
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <br />
        <form className="form-horizontal" role="form" onSubmit={this.onSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <div className="col">
              <input
                type="text"
                name="firstname"
                id="firstName"
                onChange={this.onChange}
                placeholder="First Name"
                className="form-control"
                autoFocus
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col">
              <input
                type="text"
                name="lastname"
                id="lastName"
                onChange={this.onChange}
                placeholder="Last Name"
                className="form-control"
                autoFocus
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col">
              <input
                type="email"
                name="email"
                id="email"
                onChange={this.onChange}
                placeholder="Email"
                className="form-control"
                name="email"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col">
              <input
                type="password"
                name="password"
                id="password"
                onChange={this.onChange}
                placeholder="Password"
                className="form-control"
              />
            </div>
          </div>
          <div className="indent_p"> Date of Birth </div>

          <div className="form-group">
            <div className="col">
              <input
                type="date"
                name="dateofbirth"
                id="birthDate"
                onChange={this.onChange}
                placeholder="Birth_Date"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col">
              <input
                type="phoneNumber"
                name="phonenumber"
                id="phoneNumber"
                onChange={this.onChange}
                placeholder="Phone number"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col">
              <input
                type="Address"
                name="address"
                id="Address"
                onChange={this.onChange}
                placeholder="Address"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="indent_p"> Gender </div>
            <div className="col">
              <div className="row">

                <div className="col-sm-3"> </div>
                  <input type="radio" value="Male" name="gender" onChange={this.onChange}/> Male
                <div className="col-sm-2"> </div>
                  <input type="radio" value="Female" name="gender" onChange={this.onChange}/> Female
                  
              </div>
            </div>
          </div>


          <button type="submit" className="button1">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
