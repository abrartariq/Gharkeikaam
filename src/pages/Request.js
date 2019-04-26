import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Request from '../Components/request'


class Request_Page_App extends Component {
  render() {
    return (
    <div className="Request_Page_App">
        <Header />
          <Request />
        <Footer />
    </div>
    );
  }
}
        
export default Request_Page_App;
  
  