import React, { Component } from 'react';
import logo from '../logo.svg';
import Header_afterSignIn from '../Components/Header_afterSignIn';
import Footer from '../Components/Footer';
import Feedback_Form from '../Components/Feedback_Form';
import Request from '../Components/MyRequests';
import { FirebaseContext } from "../Components/Firebase";
import './Login_Page_App.css'

class Request_Page_App_Feedback extends Component {
  render() {
    return (
			<div className="Request_Page_App_Feedback">
				<Header_afterSignIn/>
					<div className="row">
					<div className="col-12 col-md-8">
					<FirebaseContext.Consumer>
							{firebase => <Feedback_Form firebase={firebase} email={this.props.location.state.detail} requestid={this.props.location.state.id}/>}
						</FirebaseContext.Consumer>
					</div>
					<div className="col-12 col-md-4">
						<FirebaseContext.Consumer>
							{firebase => <Request firebase={firebase} email={this.props.location.state.detail}/>}
						</FirebaseContext.Consumer>
					</div> 
					</div>
				<Footer/>
			</div>
    );
  }
}
export default Request_Page_App_Feedback;