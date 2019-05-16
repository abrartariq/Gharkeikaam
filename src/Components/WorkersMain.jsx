import React, { Component } from "react";
import "./WorkersMain.css";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const INITIAL_STATE = {
  id: "1",
  workers: []
};

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele != value;
  });
}

class WorkersMain extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentWillMount() {
    var neworkers = this.state.workers.slice();
    const self = this;
    this.props.firebase.doDisplayWorker().then(function(names) {
      names.map(each => {
        neworkers.push(each);
      });
      self.setState({ workers: neworkers });
    });
  }

  onDelete = each => {
    console.log("HEHEHEHEHEHEHEHEH", each);
    this.props.firebase.database
      .collection("Workers")
      .doc(each[0])
      .delete();
    var neworkers = this.state.workers.slice();

    for (var i = 0; i < neworkers.length; i++) {
      if (neworkers[i] === each) {
        neworkers.splice(i, 1);
      }
    }

    console.log(neworkers);
    this.setState({ workers: neworkers });
    this.forceUpdate();
  };

  render() {
    const lists = this.state.workers.map((each, i) => {
      return (
        <tr key={i}>
          <td>{each[0]}</td>
          <td>{each[1]}</td>
          <td>
            <a href="#">View Details</a>
          </td>
          <td>
            {" "}
            <button onClick={() => this.onDelete(each)} className="button-del">
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <React.Fragment>
        <br />
        <h2>Workers List</h2>
        <br />
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
          <table className="table1 table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
              {lists}
            </thead>
            <tbody />
          </table>
        </div>
        <br />
        <a href={ROUTES.ADDWORKER} className="button_workers">
          Add Worker
        </a>
        <br />
      </React.Fragment>
    );
  }
}

export default withRouter(WorkersMain);
