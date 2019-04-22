import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Signup from '../Components/Signup'
import { FirebaseContext } from '../Components/Firebase'



class Sign_Up_App extends Component {
    render() {
      return (
      <div className="Sign_Up_App">
            <Header/>
            <FirebaseContext.Consumer>
            
            
            {firebase => <Signup firebase={firebase} />}
            </FirebaseContext.Consumer>   
            <Footer />
        
        </div>
      );
    }
  }
  
  
  export default Sign_Up_App;