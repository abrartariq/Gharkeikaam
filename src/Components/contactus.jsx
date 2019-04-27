import React, { Component } from "react";
import "./contactus.css";
import * as emailjs from "emailjs-com";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const INITIAL_STATE = {
  fullname: "",
  email: "",
  message: ""
};

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    const { fullname, email, message } = this.state;
    var templateParams = {
      from_name: this.state.fullname + " " + this.state.email,
      message_html: this.state.message
    };

    this.props.history.push({
      pathname: ROUTES.LANDING
    });

    emailjs
      .send(
        "gmail",
        "template_k2ymp1Yt",
        templateParams,
        "user_zSW9vnaxH7bduuZ4HEyAe"
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          console.log("FAILED...", err);
        }
      );
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="contact-form">
        <form role="form" onSubmit={this.onSubmit}>
          <h2 color="#242487"> Contact Us </h2>
          <br />
          <div className="form-group">
            <input
              type="fullname"
              className="form-control"
              name="fullname"
              placeholder="Full Name"
              required="required"
              onChange={this.onChange}
            />
            <br />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required="required"
                onChange={this.onChange}
              />
              <div className="form-group">
                <br />
                <textarea
                  type="text"
                  className="form-control"
                  rows="5"
                  name="message"
                  placeholder="Message"
                  required="required"
                  onChange={this.onChange}
                />
                <div className="form-group">
                  <br />
                  <button type="submit" className="button">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ContactUs);