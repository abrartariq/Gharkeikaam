import React, { Component } from 'react';
import logo from '../logo.svg';
import Header_afterSignIn from '../Components/Header_afterSignIn';
import Footer from '../Components/Footer';
import Waiting from '../Components/Waiting';
import Request from '../Components/MyRequests';
import { FirebaseContext } from "../Components/Firebase";

import './Login_Page_App.css'

class Request_Page_App_Waiting extends Component {
  render() {
    return (
			<div className="Request_Page_App_Waiting">
				<Header_afterSignIn/>
					<div className="row">
						<div className="col-6 col-md-8"><Waiting/></div>
						<div className="col-4 col-md-4"> 
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


export default Request_Page_App_Waiting;