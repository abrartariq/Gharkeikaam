import React, { Component } from 'react';
import logo from '../logo.svg';
import Header_Admin from '../Components/Header_Admin';
import Footer from '../Components/Footer';
import Addpayment from '../Components/Addpayment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header_Admin/>
        <Addpayment/>
        <Footer />
      </div>
    );
  }
}
export default App;