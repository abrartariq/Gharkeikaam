import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../constants/routes'
import './header_admin.css';
import './images.css'


class Header extends Component{
	render(){
		return (
		<nav className="navbar navbar-expand-sm bg-light navbar-light">
		<img className = "logo" src = {require('./GKK.png')}/>
		  <ul className="navbar-nav  ml-auto">
		    <li className="nav-item active">
			    <NavLink to={ROUTES.ADMIN_REQUESTS} className="nav-link">Customer Requests</NavLink>
		    </li>
		    <li className="nav-item">
		      <NavLink to={ROUTES.WORKERSMAIN} className="nav-link">Workers</NavLink>
		    </li>
				<li className="nav-item">
		      <NavLink to={ROUTES.LANDING} className="nav-link">Logout</NavLink>
		    </li>
				
		  </ul>
		</nav>
		)	
	}

}
export default Header; 
