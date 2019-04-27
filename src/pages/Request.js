import React, { Component } from "react";
import logo from "../logo.svg";
import Headeafter from "../Components/Header_afterSignIn";
import Footer from "../Components/Footer";
import Request from "../Components/request";
import { FirebaseContext } from "../Components/Firebase";

class Request_Page_App extends Component {
  render() {
    return (
      <div className="Request_Page_App" email={this.props.location.state.email}>
      {console.log("FTS=",this.props.location.state.detail)}
        <Headeafter />
        <FirebaseContext.Consumer>
          {firebase => <Request firebase={firebase} email={this.props.location.state.detail}/>}
        </FirebaseContext.Consumer>
        <Footer />
      </div>
    );
  }
}

export default Request_Page_App;
