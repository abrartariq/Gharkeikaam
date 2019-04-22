import React, { Component } from 'react';
import './forgotpass.css';

class ForgotPass extends Component {
    //state = {  }
    render() { 
        return ( 
        <div className="forgot-form">
		<form action="" method="post">
			<h2 color = "#242487"> Forgot Password? </h2><br></br>
            <p align = "left">Enter your email address to receive your password</p>
			<div className="form-group">
				<input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
                <div className="form-group"><br></br>
            		<button type="submit" className="button">Submit</button>
        		</div>
			</div>
        </form>
        </div>
         );
    }
}
export default ForgotPass;
        
 