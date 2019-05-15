import React, { Component } from 'react';
import Header from '../Components/Header'
import Header_afterSignIn from '../Components/Header_afterSignIn'
import Footer from '../Components/Footer'
import ContactUs from '../Components/contactus'

class Contact_Page_App  extends Component {
  render() {

    let contact
    if (this.props.history.location.state != undefined){

      contact = <div className="Contact_Page_App">
      <Header_afterSignIn email={this.props.history.location.state.detail}/>
      <ContactUs />
      <Footer />
      </div>
    }
    else {
      contact = <div className="Contact_Page_App">        
        <Header />
        <ContactUs />
        <Footer />
        </div>
    }

    return (
      <div className="Contact_Page_App ">
        {contact}
      </div>
    );
  }
}

    

export default Contact_Page_App;
