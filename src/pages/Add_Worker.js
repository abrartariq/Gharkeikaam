import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from '../Components/Header_Admin'
import Footer from '../Components/Footer_admin'
import Addworker from '../Components/add_worker'
import { FirebaseContext } from '../Components/Firebase'


class Addworker_Worker_Page extends Component {
    render() {
      return (
      <div className="Addworker_Worker_Page">

          <Header />
          <FirebaseContext.Consumer>
            {firebase => <Addworker firebase={firebase} />}
          </FirebaseContext.Consumer>

          <Footer />
        
        </div>
      );
    }
  }
  
  
  export default Addworker_Worker_Page;