import React, { Component, Fragment } from 'react';
import  ReactDOM from 'react-dom';



import Login_Page_App from './pages/Login_Page_App';
import WorkersMain from './pages/WorkersMain_Page_App';
import Forgot_Page_App from './pages/Forgot_Page_App';
import Contact_Page_App from './pages/Contact_Page_App';
import Signupcustomer from './pages/Sign_Up_App';
import * as ROUTES from './constants/routes'

import { Route, BrowserRouter, Switch} from 'react-router-dom';


import './App.css';

class App extends Component {
  render() {
	  return (
			<BrowserRouter>
	<Switch>
		<Route path={ROUTES.LANDING} component={Login_Page_App} exact />
		<Route path={ROUTES.FORGOT} component={Forgot_Page_App} />
		<Route path={ROUTES.CONTACT} component={Contact_Page_App} />
		<Route path={ROUTES.WORKERSMAIN} component={WorkersMain} />
		<Route path={ROUTES.SIGNUP} component={Signupcustomer} />




		
		

	</Switch>

	</BrowserRouter>
	
   	 
    );
  }
}

export default App;
