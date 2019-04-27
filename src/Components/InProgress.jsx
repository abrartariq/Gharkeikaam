import React, { Component } from "react";
import "./InProgress.css";

class InProgress extends Component {
  state = {};
  render() {
    return (
      <div className="card bg-light text-dark c">
        <p className="text-center font-weight-bold heading">
          Request Status: In Progress
        </p>

        <div className="text-left font-weight-bold"> Worker details:</div>
        <img src={require("./Worker.jpeg")} className="img-fluid x" />

        <div class="row a">
            <div class="text-left font-weight-bold">Name: </div>
            <div class="text-left a">Abdullah Arif </div>
        </div>

        <div class="row b">
            <div class="text-left font-weight-bold">Contact Number: </div>
            <div class="text-left a">0300 4543890 </div>
        </div>
      </div>
    );
  }
}

export default InProgress;
