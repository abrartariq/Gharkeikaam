import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import SignIn from '../components/SignIn';
import './LandingPage.css';
import firebase from './config/fbConfig.js';
 
class LandingPage extends Component {

	 
  render() {
		
	  return (
	<Fragment>

	<SignIn />	
	</Fragment>	
   	 
    );
  }
}

export default LandingPage;
