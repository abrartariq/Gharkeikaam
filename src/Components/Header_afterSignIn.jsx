import React, { Component } from 'react';
import './header_afterSignIn.css';
import './images.css'


class Header extends Component{
	render(){
		return (
		<nav className="navbar navbar-expand-sm bg-light navbar-light">
		<br/>
		<img className = "logo" src = {require('./GKK.png')}/>
		  <ul className="navbar-nav  ml-auto">
		    <li className="nav-item active">
			    <a className="nav-link" href="#">Home</a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href="#">About Us</a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href="#">Our Services</a>
				</li>

				<li className="nav-item">
		      <a className="nav-link" href="#">Service Charges</a>
		    </li>
				<li className="nav-item">
		      <a className="nav-link" href="#">Request Service</a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href="#">Contact Us</a>
		    </li>
		  </ul>
		</nav>


				
		)	
	}

}
export default Header; 
