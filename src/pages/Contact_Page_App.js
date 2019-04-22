import React, { Component } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ContactUs from '../Components/contactus'

class Contact_Page_App  extends Component {
  render() {
    return (
	<div className="Contact_Page_App ">
		<Header/>
      { <ContactUs/> }
      {<Footer />}
      
      </div>
    );
  }
}

    

export default Contact_Page_App;
