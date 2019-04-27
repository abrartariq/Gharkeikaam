import React, { Component } from 'react';
import logo from '../logo.svg';
import Header_afterSignIn from '../Components/Header_afterSignIn'
import Footer from '../Components/Footer'
import { withRouter } from 'react-router-dom';
import Homeimage from '../Components/home_images'
import MyRequests from '../Components/MyRequests';
import './Login_Page_App.css'
import { FirebaseContext } from '../Components/Firebase'


class App extends Component {
	state = {}


	
	render() {
		return (
			<div className="App">
			{console.log("afterlogin page",this.props.location.state.detail)}
				<Header_afterSignIn email={this.props.location.state.detail}/>
					<div className="row">
						<div className="col-12 col-md-8"><Homeimage/></div>
						<div className="col-6 col-md-4">
							<FirebaseContext.Consumer>
								{firebase => <MyRequests firebase={firebase} email={this.props.location.state.detail}/>}
							</FirebaseContext.Consumer>
						</div>
					</div> 
				<Footer/>
			</div>
    );
  }
}


export default App;