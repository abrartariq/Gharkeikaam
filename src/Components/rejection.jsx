import React, { Component } from 'react';
import './rejection.css'

class Rejection extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="confirmation-form">
            <form action="" method="post">
            <div className="form-group">
            <p><b>Your Request has been canceled by our admin.</b></p>
            <p><b>If this is done without your consent kindly contact us at 042 36812569.</b></p>
            <p><b>You can also contact us at gherkekaam@gmail.com.</b></p>
            </div>
            </form>
            </div>
         );
    }
}
 
export default Rejection ;
