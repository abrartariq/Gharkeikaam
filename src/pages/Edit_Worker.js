import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Edit_worker from '../Components/edit_worker'


class Edit_worker_Page_App extends Component {
    render() {
      return (
      <div className="Edit_worker_Page_App">
            <Header />
            <Edit_worker />
               
            <Footer />
        
        </div>
      );
    }
  }
  
  
  export default Edit_worker_Page_App;