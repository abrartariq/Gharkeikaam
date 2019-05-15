import React, { Component } from 'react';
import Header_afterSignIn from '../Components/Header_afterSignIn'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Abouts  from '../Components/about'


class About extends Component {
    render() {
      let about
      if (this.props.history.location.state != undefined){

        about = <div className="Login_Page_App">
        <Header_afterSignIn email={this.props.history.location.state.detail}/>
        <Abouts />
        <Footer />
        </div>
      }
      else {
        about = <div className="Login_Page_App">        
          <Header />
          <Abouts />
          <Footer />
          </div>
      }

      return (
      <div className="Login_Page_App">
        {about}
        
        </div>
      );
    }
  }
  
  
  export default About;
  