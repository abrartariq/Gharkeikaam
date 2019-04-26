import React, { Component } from 'react';
import logo from '../logo.svg';
import Header_Admin from '../Components/Header_Admin';
import Footer from '../Components/Footer';
import Approve_Request from '../Components/Approve_Request';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header_Admin/>
        <Approve_Request/>
        <Footer />
      </div>
    );
  }
}


export default App;