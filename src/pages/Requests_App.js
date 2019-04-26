import React, { Component } from 'react';
import logo from '../logo.svg';
import Header_Admin from '../Components/Header_Admin';
import Footer from '../Components/Footer';
import Request_list from '../Components/Request_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header_Admin/>
        <Request_list/> <br/>
        <Footer />
      </div>
    );
  }
}


export default App;