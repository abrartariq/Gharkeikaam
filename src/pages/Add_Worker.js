import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Addworker from '../Components/add_worker'


class Addworker_Worker_Page extends Component {
    render() {
      return (
      <div className="Addworker_Worker_Page">

          <Header />
            <Addworker />
          <Footer />
        
        </div>
      );
    }
  }
  
  
  export default Addworker_Worker_Page;