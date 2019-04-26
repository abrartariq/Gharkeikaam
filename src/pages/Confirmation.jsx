import React, { Component } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Confirmation from '../Components/confirmation'

class Contact_Page_App  extends Component {
  render() {
    return (
	<div className="Contact_Page_App ">
		<Header/>
      { <Confirmation /> }
      {<Footer />}
      
      </div>
    );
  }
}

    

export default Contact_Page_App;
