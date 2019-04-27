import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Login_Page_App from './pages/Login_Page_App';
import WorkersMain from './pages/WorkersMain_Page_App';
import Forgot_Page_App from './pages/Forgot_Page_App';
import Contact_Page_App from './pages/Contact_Page_App';
import Signupcustomer from './pages/Sign_Up_App';
import After_Login_Page_App from './pages/After_Login_Page_App';
import Admin_Requests_App from './pages/Requests_App';
import Request_ID_5 from './pages/Request_ID_5';
import Complete_Request from './pages/Complete_Request';
import Payment from './pages/Payment';
import Add_Worker from './pages/Add_Worker';
import View_Worker from './pages/View_Worker';
import Edit_Worker from './pages/Edit_Worker';
import Create_Request from './pages/Request';
import About from './pages/About';
import Confirm from './pages/Confirmation'
import Price  from './pages/Price'

import * as ROUTES from './constants/routes';
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
					<Route path={ROUTES.WELCOME} component={After_Login_Page_App} />
					<Route path={ROUTES.ADMIN_REQUESTS} component={Admin_Requests_App} />
					<Route path={ROUTES.ID5} component={Request_ID_5} />
					<Route path={ROUTES.COMPLETE_REQUEST} component={Complete_Request} />
				    <Route path={ROUTES.PAYMENT} component={Payment} />
				    <Route path={ROUTES.VIEWWORKER} component={View_Worker} />
				    <Route path={ROUTES.ADDWORKER} component={Add_Worker} />
				    <Route path={ROUTES.EDITWORKER} component={Edit_Worker} />
				    <Route path={ROUTES.CREATE_REQUEST} component={Create_Request} />
						<Route path={ROUTES.ABOUT} component={About} />
						<Route path={ROUTES.CONFIRMATION} component={Confirm} />
						<Route path={ROUTES.SERVICECHARGES} component={Price} />

				</Switch>


			</BrowserRouter>
	
   	 
    );
  }
}

export default App;
