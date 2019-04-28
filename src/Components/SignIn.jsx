import React, { Component } from "react";
import "./SignIn.css";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { userInfo } from "os";
import firebase from "firebase";
import { NavLink, Link } from 'react-router-dom';
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
    if (email == "admin123@gmail.com" && password == "123456") {
      this.props.history.push({
        pathname: ROUTES.ADMIN_REQUESTS,
      });

    } else {
      this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          var user = firebase.auth().currentUser;
          console.log(user);
          var emailVerified = user.emailVerified;
          if (emailVerified == true) {
            console.log("VERIFIED");
            this.props.history.push({
              pathname: ROUTES.WELCOME,
              search: "name=jhon&amp;age=24",
              state: { detail: email }
            });

          } else {
            console.log("NOT VERIFIED");
            alert('Your Email is not verified')
            this.props.history.push({
              pathname: ROUTES.LANDING,
            });
          }

         

          console.log("Successfully log in");
          this.setState({ ...INITIAL_STATE });
        })
        .catch(error => {
          console.log("Error ");
         alert('Wrong password')

          this.setState({ error });
        });
      console.log("submitted" + this.state.email + " " + this.state.password);
      event.preventDefault();
    }
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
            
            Forgot Password? <NavLink to ={ROUTES.FORGOT}>Click Here</NavLink>
          </div>
          <div className="text-center">
            Don't have an account? <NavLink to ={ROUTES.SIGNUP}>Sign Up</NavLink>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
