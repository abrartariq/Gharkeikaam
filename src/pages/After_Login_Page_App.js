import React, { Component } from 'react';
import logo from '../logo.svg';
import Header_afterSignIn from '../Components/Header_afterSignIn'
import Footer from '../Components/Footer'
import { withRouter } from 'react-router-dom';
import Homeimage from '../Components/home_images'
import MyRequests from '../Components/MyRequests';
import './Login_Page_App.css'

class App extends Component {
	state = {}

	// {console.log(this.props.location.state.detail)}
	
  render() {
		return (
			<div className="App">
				<Header_afterSignIn/>
					<div className="row">
						<div className="col-12 col-md-8"><Homeimage /></div>
						<div className="col-6 col-md-4"><MyRequests/></div>
					</div> 
				<Footer/>
			</div>
    );
  }
}


export default App;