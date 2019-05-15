import React, { Component } from 'react';
import logo from '../logo.svg';
import Header_Admin from '../Components/Header_Admin';
import Footer from '../Components/Footer_admin';
import Approve_Request from '../Components/Approve_Request';
import { FirebaseContext } from '../Components/Firebase'

class App extends Component {
  render() {
    {
      console.log('here')
      console.log(this.props.location.state.details)}
      let id=this.props.location.state.details
    return (
      <div className="App">
        <Header_Admin/>
        <FirebaseContext.Consumer>
            {firebase => <Approve_Request firebase={firebase} requestid={id} /> }
            </FirebaseContext.Consumer>  
        <Footer />
      </div>
    );
  }
}


export default App;