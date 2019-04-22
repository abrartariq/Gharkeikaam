import React, { Component } from 'react';
import './contactus.css'

class ContactUs extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contact-form">
                <form action="" method="post">
                    <h2 color = "#242487"> Contact Us </h2><br></br>
                    <div className="form-group">
                        <input type="fullname" className="form-control" name="fullname" placeholder="Full Name" required="required"/><br></br>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
                            <div className="form-group"><br></br>
                                <textarea type="text" className="form-control" rows = "5" name="message" placeholder="Message" required="required"/>
                                <div className="form-group"><br></br>
                                    <button type="submit" className="button">Submit</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
         );
    }
}
 
export default ContactUs ;