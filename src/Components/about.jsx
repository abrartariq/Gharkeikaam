import React, { Component } from 'react';
import './about.css'

class About extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <br></br><br></br>
            <div className="about">
            <div className = "row">
            <div class="col-12 col-md-8">
            <h2>About Us</h2>
            <p align = "left" margin-left="20px">GharKeKaam is a web application that will cater to the regular domestic needs of the residents of Model Town Society, Lahore by providing fully-equipped, 
            professional handy workers like Plumbers, Electricians, Gardeners and Cleaners. It provides a convenient and reliable platform to the society residents to 
            request services from the comfort of their homes at a click. Users will be required to create an account in order to request a service. They will have the 
            option to choose from one of the services provided and will be required to submit a request at least an hour in advance. The company will send a worker to 
            the residence in question, where the individual will complete the required task.</p>
            
            <p>Our prime objective is to provide 
             a hassle-free way for the residents of Model Town Society to obtain handy services. Instead of having to look around for reliable handy workers, users can simply 
             request the required service and let GharKeKaam take care of the rest.</p>
             </div>
             <div class="col-6 col-md-4">
             <img src={require('./about.jpg')} className = "img-fluid"></img>
             </div> </div></div>
            </React.Fragment>
        );
    }
}
 
export default About;