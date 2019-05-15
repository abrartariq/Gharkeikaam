import React, { Component } from 'react';
import Header from '../Components/Header_Admin'
import Footer from '../Components/Footer_admin'
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