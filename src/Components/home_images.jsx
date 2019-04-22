import React, { Component } from 'react';
import './images.css'

class Images extends Component {
    //state = {  }
    render() { 
        return ( 
            <div>
            <img src={require('./services.png')} className = "img-fluid" ></img><br></br>
            <img src={require('./howwework.png')} className = "img-fluid-small"></img><br></br>

            </div>
         );
    }
}
 
export default Images;