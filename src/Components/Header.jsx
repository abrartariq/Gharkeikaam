import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../constants/routes'
import './header.css';
import './images.css'


class Header extends Component{
	render(){
		return (
		<nav className="navbar navbar-expand-sm bg-light navbar-light">
		<img className = "logo" src = {require('./GKK.png')}/>
		  <ul className="navbar-nav  ml-auto">
		    <li className="nav-item active">
			    <NavLink to={ROUTES.LANDING} className="nav-link">Home</NavLink>
		    </li>
		    <li className="nav-item">
		      <NavLink to={ROUTES.LANDING} className="nav-link">About Us</NavLink>
		    </li>
		    <li className="nav-item">
		      <NavLink to= {ROUTES.LANDING} className="nav-link">Our Services</NavLink>
				</li>

				<li className="nav-item">
		      <NavLink to={ROUTES.LANDING} className="nav-link">Service Charges</NavLink>
		    </li>
		    <li className="nav-item">
		      <NavLink to ={ROUTES.CONTACT} className="nav-link">Contact Us</NavLink>
		    </li>
		  </ul>
		</nav>


				
		)	
	}

}
export default Header; 
