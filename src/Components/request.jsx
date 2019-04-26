import React, { Component } from 'react';
import './request.css'

class Request extends Component {
    state = {  }
    render() { 
        return (
            <div className="request-form">
            <form action="" method="post">
                <h2 color = "#242487">Request Service</h2><br></br>

                <div className="form-group"><br></br>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>Select Service...</option>
                    <option>Plumber</option>
                    <option>Gardener</option>
                    <option>Electrician</option>
                    <option>Cleaner</option>
                    </select><br></br>
                 <div className="form-group"><br></br>
                    <textarea type="text" className="form-control" rows = "6" name="message" placeholder="Message" required="required"/><br></br>
                <button type="submit" className="button-worker">Submit</button>
                </div> 
                </div>
                </form>
                </div>
         );
    }
}
export default Request;