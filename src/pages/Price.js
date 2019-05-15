import React, { Component } from "react";
import logo from "../logo.svg";
import Header from "../Components/Header";
import Header_afterSignIn from "../Components/Header_afterSignIn";
import Footer from "../Components/Footer";
import Price from "../Components/pricelist";

class Prices extends Component {
  render() {
    let Uprice;
    if (this.props.history.location.state != undefined) {
      Uprice = (
        <div className="App">
          <Header_afterSignIn email={this.props.location.state.detail} />
          <Price />
          <Footer />
        </div>
      );
    } else {
      Uprice = (
        <div className="App">
          <Header />
          <Price />
          <Footer />
        </div>
      );
    }

    return <div className="App">{Uprice}</div>;
  }
}

export default Prices;
