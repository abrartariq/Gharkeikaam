import React, { Component } from "react";
import "./SignIn.css";
import * as ROUTES from "../constants/routes";
import { userInfo } from "os";
import firebase from "firebase";
const INITIAL_STATE = {
  email: "",
  password: ""
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        var user = firebase.auth().currentUser;
        console.log(user);
        var emailVerified = user.emailVerified;
        if (emailVerified == true) {
          console.log("VERIFIED");
        } else {
          console.log("NOT VERIFIED");
        }

        console.log("Successfully log in");
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        console.log("Wrong Password");
        this.setState({ error });
      });
    console.log("submitted" + this.state.email + " " + this.state.password);
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="signup-form">
        <form role="form" onSubmit={this.onSubmit}>
          <h2> Login </h2>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              required="required"
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required="Password"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="button">
              Login
            </button>
          </div>

          <div className="text-center">
            {" "}
            Forgot Password? <a href="#">Click Here</a>
          </div>
          <div className="text-center">
            Don't have an account? <a href="#">Sign Up</a>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
