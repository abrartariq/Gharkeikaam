import React, { Component } from "react";
import "./Feedback_Form.css";

class Feedback_Form extends Component {
  state = {};
  render() {
    return (
      <div className="card bg-light text-dark c">
        <p className="text-center font-weight-bold heading">
          Request Status: Completed
        </p>

        <p className="text-center font-weight-bold heading2">
          Thank You for using our service!
        </p>

        <div className="row s">
          <div className="col-3 text-left z">Please rate our service: </div>
          <form>
            <div className="form-group rating">
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </form>
        </div>
        <div className="text-left y">Your Review: </div>
        <textarea type="text" className="form-control response" rows = "7" name="message" placeholder="Message" required="required"/>
        <button type="submit" class="btn btn-primary x">Submit</button>
      </div>
    );
  }
}

export default Feedback_Form;
