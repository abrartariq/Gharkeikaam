import React, { Component } from 'react';
import './confirmation.css'

class Confirmation extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="confirmation-form">
            <form action="" method="post">
            <div className="form-group">
            <p><b>Your account has been created successfully.</b></p>
            <p><b>A confirmation emaill has been sent to you.</b></p>
            <p><b>Please click the link in the email to activate your account.</b></p>
            </div>
            </form>
            </div>
         );
    }
}
 
export default Confirmation ;
