import React, { Component } from 'react';
import logo from '../logo.svg';
import Header_Admin from '../Components/Header_Admin';
import Footer from '../Components/Footer';
import Request_Completed from '../Components/Request_Completed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header_Admin/>
        <Request_Completed/>
        <Footer />
      </div>
    );
  }
}


export default App;