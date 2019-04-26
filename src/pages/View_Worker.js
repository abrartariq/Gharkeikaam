import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import View_worker from '../Components/view_worker'


class View_worker_Page_App extends Component {
    render() {
      return (
      <div className="View_worker_Page_App">

            <Header />
            <View_worker />
            <Footer />
        
        </div>
      );
    }
  }
  
  
  export default View_worker_Page_App;