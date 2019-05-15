import React, { Component } from "react";
import "./header_afterSignIn.css";
import "./images.css";
import { withRouter } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { runInThisContext } from "vm";

const INITIAL_STATE = {
  email: ""
 
};


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.state.email = this.props.email
    console.log("HASI CONSTRUCTOR ",this.state.email)
  }

  requestservice = event => {
    // console.log("INREQUESTSERVICE",this.props.history.location.state.detail)
    let email = this.props.history.location.state.detail
    // console.log("GOT U",email)
    this.props.history.push({
      pathname: ROUTES.CREATE_REQUEST,
      state: { detail: email }
    });
  }
  servicecharges = event => {
    // console.log("INREQUESTSERVICE",this.props.history.location.state.detail)
    let email = this.props.history.location.state.detail
    // console.log("GOT U",email)
    this.props.history.push({
      pathname: ROUTES.SERVICECHARGES,
      state: { detail: email }
    });
  }
  aboutus = event => {
    // console.log("INREQUESTSERVICE",this.props.history.location.state.detail)
    let email = this.props.history.location.state.detail
    // console.log("GOT U",email)
    this.props.history.push({
      pathname: ROUTES.ABOUT,
      state: { detail: email }
    });
  }
  home = event => {
    // console.log("INREQUESTSERVICE",this.props.history.location.state.detail)
    let email = this.props.history.location.state.detail
    // console.log("GOT U",email)
    this.props.history.push({
      pathname: ROUTES.WELCOME,
      state: { detail: email }
    });
  }
  contactus = event => {
    // console.log("INREQUESTSERVICE",this.props.history.location.state.detail)
    let email = this.props.history.location.state.detail
    // console.log("GOT U",email)
    this.props.history.push({
      pathname: ROUTES.CONTACT,
      state: { detail: email }
    });
  }
      

 

  render() {
    

    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <br />
        <img className="logo" src={require("./GKK.png")} />
        <ul className="navbar-nav  ml-auto">
          <li className="nav-item active">
            <a className="cursor-pointer"  onClick = {this.home}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="cursor-pointer"  onClick = {this.aboutus}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="cursor-pointer"  onClick = {this.servicecharges}>
              Service Charges
            </a>
          </li>
          <li className="nav-item">
            <a className="cursor-pointer"  onClick = {this.requestservice}>
              Request Service
            </a>
          </li>
          <li className="nav-item">
            <a className="cursor-pointer" onClick = {this.contactus}>
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="cursor-pointer" href={ROUTES.LANDING}>
              Logout
            </a>
          </li>

        </ul>
      </nav>
    );
  }
}
export default withRouter(Header);
