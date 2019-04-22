import React from 'react';
import './SignIn.css';

function SignIn(props) {
  const { classes } = props;

	return (
		<div className="signup-form">
		<form action="" method="post">
			<h2> Login  </h2>
			<div className="form-group">
				<input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
			</div>
			
			<div className="form-group">
				<input type="password" className="form-control" name="password" placeholder="Password" required="Password"/>
			</div>
			<div className="form-group">
            		<button type="submit" className="button">Login</button>
		</div>
		
		<div className="text-center"> Forgot Password? <a href="#">Click Here</a></div>
		<div className ="text-center">Don't have an account? <a href='#'>Sign Up</a></div>
		</form>


		</div>
	
	
	);
}


export default SignIn;
