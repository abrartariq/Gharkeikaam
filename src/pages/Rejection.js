import React, { Component } from 'react';
import Header_afterSignIn from '../Components/Header_afterSignIn'
import Footer from '../Components/Footer'
import { withRouter } from 'react-router-dom';
import Rejection from '../Components/rejection'


class Contact_Page_App  extends Component {
  render() {
    return (
	<div className="Contact_Page_App ">
		<Header_afterSignIn/>
      { <Rejection /> }
      {<Footer />}
      
      </div>
    );
  }
}

    

export default Contact_Page_App;
