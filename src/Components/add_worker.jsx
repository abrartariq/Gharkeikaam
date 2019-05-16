import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import "./add_worker.css";

function isAlpha(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      //!(code > 47 && code < 58) && //  (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123) // lower alpha (a-z)
      // Space
    ) {
      return false;
    }
  }
  return true;
}

function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && //  (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123) // lower alpha (a-z)
      // Space
    ) {
      return false;
    }
  }
  return true;
}

function isNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58)) {
      //  (0-9)
      return false;
    }
  }
  return true;
}

const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  cnic: "",
  service: "",
  phonenumber: "",
  gender: "",
  address: ""
};

class AddWorker extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    // console.log(event.target.name);
    if (event.target.name == "fullname") {
      let full_name = event.target.value.split(" ");
      let fname = full_name.shift();
      let lname = full_name.join(" ");
      this.setState({ firstname: fname, lastname: lname });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  onSubmit = event => {
    const {
      firstname,
      lastname,
      cnic,
      service,
      phonenumber,
      gender,
      address
    } = this.state;
    event.preventDefault();

    console.log(
      firstname,
      lastname,
      cnic,
      service,
      phonenumber,
      gender,
      address
    );
    if (
      firstname == "" ||
      cnic == "" ||
      service == "" ||
      phonenumber == "" ||
      gender == "" ||
      address == ""
    ) {
      window.alert("All Fields Are Mandadory, Please Fill All Fields");
    } else if (!isAlpha(firstname) || !isAlpha(lastname)) {
      console.log("NOT ALPH");
      window.alert("Name can only contain Letters. Please Try Again");
    } else if (!isNumeric(cnic) && cnic.length == 13) {
      window.alert("CNIC can only contain 13 Numbers. Please Try Again");
    } else if (!isNumeric(phonenumber)) {
      window.alert("PhoneNumber can only contain Number. Please Try Again");
    } else if (service == "Select Service...") {
      window.alert("Please Choose A Service");
    } else if (gender == "Select Gender...") {
      window.alert("Please Choose A Gender");
    } else {
      console.log("About to submit");
      this.props.firebase.doSaveNewWorker(this.state).then(() => {
        console.log("DONESSS");
      });

      this.props.history.push({
        pathname: ROUTES.WORKERSMAIN
      });

      this.setState({ ...INITIAL_STATE });
      // event.preventDefault();
    }
  };

  render() {
    return (
      <div className="addworker-form">
        <form onSubmit={this.onSubmit}>
          <h2 color="#242487"> Add Worker</h2>
          <br />
          <div className="form-group">
            <div className="file-field">
              <div className="z-depth-1-half mb-4">
                <img
                  src={require("./worker.png")}
                  className="img-fluid-worker"
                  alt="example placeholder"
                />
                <br />
              </div>
              {/* <div className="d-flex justify-content-center">
                <div className="btn btn-mdb-color btn-rounded float-left">
                  <input type="file" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="form-group">
            <input
              type="fullname"
              className="form-control"
              name="fullname"
              id="fullname"
              onChange={this.onChange}
              placeholder="Full Name"
              required="required"
            />
            <br />
            <div className="form-group">
              <select
                className="form-control"
                id="gender"
                name="gender"
                onChange={this.onChange}
              >
                <option>Select Gender...</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <br />

              <input
                type="text"
                className="form-control"
                name="cnic"
                id="cnic"
                onChange={this.onChange}
                placeholder="CNIC"
                required="required"
              />
              <div className="form-group">
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder="Address"
                  onChange={this.onChange}
                  required="required"
                />
                <div className="form-group">
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="phonenumber"
                    id="contact"
                    placeholder="Contact No."
                    required="required"
                    onChange={this.onChange}
                  />
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
                    <button type="submit" className="button-worker">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(AddWorker);
