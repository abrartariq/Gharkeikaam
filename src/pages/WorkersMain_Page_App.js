import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import WorkersMain from '../Components/WorkersMain'


class WorkersMain_Page_App extends Component {
    render() {
      return (
      <div className="WorkersMain_Page_App">
            <Header />
            <WorkersMain />
               
            <Footer />
        
        </div>
      );
    }
  }
  
  
  export default WorkersMain_Page_App;