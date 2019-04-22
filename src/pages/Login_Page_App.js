import React, { Component } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Homeimage from '../Components/home_images'
import SignIn from '../Components/SignIn';
import './Login_Page_App.css'
import { FirebaseContext } from '../Components/Firebase'


class Login_Page_App extends Component {
  render() {
    return (
	<div className="Login_Page_App">
		<Header/>
		{
	     	<div className="row">
		    	<div className="col-12 col-md-8"><Homeimage/></div>
					
		    	<div className="col-6 col-md-4"><FirebaseContext.Consumer>
            
            
            {firebase => <SignIn firebase={firebase} />}
            </FirebaseContext.Consumer>  </div>
			</div> 
			
		}
      {<Footer />}
      
      </div>
    );
  }
}


export default Login_Page_App;
