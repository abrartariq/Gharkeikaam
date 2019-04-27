import React, { Component } from 'react';
import './pricelist.css'

class Prices extends Component {
    state = {  }
    render() { 
        return (
            <div className="price">
            <div className = "row">
            <div class="col-6 col-md-6">
            <br></br><h2>Electrical Charges</h2>
            <img src={require('./electrical.png')} className = "img-fluid-small1"></img>
            </div>
            <div class="col-6 col-md-6">
            <br></br><h2>Plumbing Charges</h2>
            <img src={require('./plumbing.png')} className = "img-fluid-small1"></img>
            </div>
            </div>

            <div className = "row">
            <div class="col-6 col-md-6">
            <br></br><h2>Cleaning Charges</h2>
            <img src={require('./cleaning.png')} className = "img-fluid-small1"></img>
            </div>
            <div class="col-6 col-md-6">
            <br></br><h2>Gardening Charges</h2>
            <img src={require('./gardening.png')} className = "img-fluid-small1"></img>
            </div>
            </div><br></br>
            </div>
         );
    }
}
 
export default Prices;