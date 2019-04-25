import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import WorkersMain from '../Components/WorkersMain'
import { FirebaseContext } from '../Components/Firebase'

class WorkersMain_Page_App extends Component {
    render() {
      
      return (
        <div className="WorkersMain_Page_App">
        <Header />
        <FirebaseContext.Consumer>
        {firebase => <WorkersMain firebase={firebase} />}
        </FirebaseContext.Consumer>
        <Footer />
    
    </div>
      );
    }
  }
  
  
  export default WorkersMain_Page_App;