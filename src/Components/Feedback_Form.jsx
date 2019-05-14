import React, { Component } from "react";
import "./Feedback_Form.css";
import * as ROUTES from "../constants/routes";
import { withRouter } from 'react-router-dom';


const INITIAL_STATE = {
  rating: "",
  review: ""
};

class Feedback_Form extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    console.log('Requestid is',this.props.requestid)
  }
  OnSubmit = event => {
    

    const { rating, review } = this.state;
    console.log('insideonsubmit')
    this.props.firebase.savefeedback(this.props.requestid,this.state.review,this.state.rating)
    
    this.changetohome()
    
    
  };

  changetohome=()=>{
    console.log('change')
    let self =this
    self.props.history.push({
      pathname: ROUTES.WELCOME,
      state: { detail: this.props.email }
    });
  }
  onChange = event => {
    console.log(this.state.review)
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="card bg-light text-dark c">
        <div className="text-center font-weight-bold headingA">
                  Request Status: Completed
        </div>

        <div className="text-center font-weight-bold headingB">
                  Thank You for using our service!
        </div>

        <div className="text-left y">Please rate our service: </div>
        <form onSubmit={this.OnSubmit} role="form"  className="myform bg-light">
          <div className="form-group rating">
            <select
              className="form-control rating"
              name="rating"
              onChange={this.onChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <p className="text-left y">Your Review: </p>
          <textarea
            type="text"
            className="form-control response"
            rows="7"
            name="review"
            onChange={this.onChange}
          />
          <button type="submit" className="btn btn-primary x">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Feedback_Form);
