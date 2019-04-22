import React, { Component } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ForgotPass from '../Components/forgotpass'



class Forgot_Page_App extends Component {
  render() {
    return (
	<div className="Forgot_Page_App">
		<Header/>
      { <ForgotPass/> }
      {<Footer />}
      
    </div>
    );
  }
}

        

export default Forgot_Page_App;
