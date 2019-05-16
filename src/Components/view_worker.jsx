import React, { Component } from "react";
import "./view_worker.css";

class ViewWorker extends Component {
  state = {};
  render() {
    return (
      <div className="viewworker-form">
        <form action="" method="post">
          <div className="form-group">
            <img
              src={require("./worker.png")}
              className="img-fluid-worker"
              alt="example placeholder"
            />
            <br />
            <h2>Abdullah Arif</h2>
            <br />
            <br />
            <br />
            <br />
            <div className="form-group">
              <p>
                <b>Name:</b>{" "}
              </p>
              <div className="form-group">
                <p>
                  <b>ID:</b>{" "}
                </p>
                <div className="form-group">
                  <p>
                    <b>Sex:</b>{" "}
                  </p>
                  <div className="form-group">
                    <p>
                      <b>Address:</b>{" "}
                    </p>
                    <div className="form-group">
                      <p>
                        <b>Contact Number:</b>{" "}
                      </p>
                      <div className="form-group">
                        <p>
                          <b>CNIC:</b>{" "}
                        </p>
                        <div className="form-group">
                          <p>
                            <b>Service:</b>{" "}
                          </p>
                          <div className="form-group">
                            <p>
                              <b>Average Rating:</b>{" "}
                            </p>
                            <br />
                            <button type="submit" className="button-workerview">
                              Edit Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ViewWorker;
