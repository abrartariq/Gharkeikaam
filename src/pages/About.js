import React, { Component } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Abouts  from '../Components/about'


class About extends Component {
    render() {
      return (
      <div className="Login_Page_App">
          <Header/>
         <Abouts />
        <Footer />
        
        </div>
      );
    }
  }
  
  
  export default About;
  