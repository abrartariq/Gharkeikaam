import React, { Component } from 'react';
import './edit_worker.css'

class EditWorker extends Component {
    state = {  }
    render() { 
        return (
            <div className="addworker-form">
            <form action="" method="post">
                <h2 color = "#242487">Edit Worker Details</h2><br></br>
                <div className="form-group">
                <div className="file-field">
                <div className="z-depth-1-half mb-4">
                 <img src= {require('./worker.png')} className="img-fluid-worker" alt="example placeholder"/><br></br>
                </div>
                <div className="d-flex justify-content-center">
                <div className="btn btn-mdb-color btn-rounded float-left">
                <input type="file"/>
            </div>
            </div>
            </div>
            </div>
                <div className="form-group">
                <input type="fullname" className="form-control" name="fullname" placeholder="Full Name" id="name" required="required"/><br></br>
                <div className="form-group">
                <select className="form-control" id="exampleFormControlSelect1">
                <option>Select Gender...</option>
                 <option>Male</option>
                 <option>Female</option>
                 </select><br></br>

           <input type="text" className="form-control" name="cnic" placeholder="CNIC" required="required"/>
                    <div className="form-group"><br></br>
                    <input type="text" className="form-control" name="address" placeholder="Address" required="required"/>
                    <div className="form-group"><br></br>
                    <input type="text" className="form-control" name="contact" placeholder="Contact No." required="required"/>
                    <div className="form-group"><br></br>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>Select Service...</option>
                 <option>Plumber</option>
                 <option>Gardener</option>
                 <option>Electrician</option>
                 <option>Cleaner</option>
                 </select><br></br>
                <button type="submit" className="button-worker">Update Record</button>
                </div> 
                </div>
                </div>
                </div>
                </div>
                </form>
                </div>
         );
    }
}
export default EditWorker;