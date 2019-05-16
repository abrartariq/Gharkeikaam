import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Signup.css";
import * as ROUTES from "../constants/routes";

function isAlpha(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (//!(code > 47 && code < 58) && //  (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123) && // lower alpha (a-z)
        !(code == 32)       // Space 
    ) {

      return false;
    }
  }
  return true;
};

function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && //  (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)  // lower alpha (a-z)
                 // Space 
    ) {

      return false;
    }
  }
  return true;
};

function isNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58))  //  (0-9)
    {
      return false;
    }
  }
  return true;
};

function isemail(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code == 64) &&  // "@"
        !(code == 95) &&  // "_"
        !(isAlphaNumeric(code))
      ) {
        return false;
      }
  }
  return true;
};

function validDOB(str) {
  if ((new Date().getFullYear() - parseInt(str.split("-")[0])) < 16){
    return false;
  }
  return true;
};






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
    const {firstname,lastname,email,password,dateofbirth,phonenumber,address} = this.state

    if (!isAlpha(firstname) || !isAlpha(lastname)){
      console.log("NOT ALPH")
      window.alert("Name can only contain Letters. Please Try Again")
      event.preventDefault();
    }else if(!isemail(email)){
      window.alert("Please Follow Standard Email Syntax. example@xyz.com")
      event.preventDefault();
    }else if(!isNumeric(phonenumber)){
      window.alert("Your PhoneNumber can only contain Number. Please Try Again")
      event.preventDefault();
    }else if(!validDOB(dateofbirth)){
      window.alert("Your age must be atleast 16 years old to request our services. Please Try Again Later")

      event.preventDefault();
    }
    
    else{


    // const { email, password } = this.state;

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

        this.props.history.push({
          pathname: ROUTES.CONFIRMATION,
        });

        this.setState({ ...INITIAL_STATE });

      })
      .catch(error => {
        console.log("Error in__ authentication");
        this.setState({ error });
      });

    };
    event.preventDefault();
  }

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
         


          <button type="submit" className="button1">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
