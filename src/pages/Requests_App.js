import React, { Component } from 'react';
import Header_Admin from '../Components/Header_Admin';
import Footer from '../Components/Footer_admin';
import Request_list from '../Components/Request_list';
import { FirebaseContext } from '../Components/Firebase'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header_Admin/>
        <FirebaseContext.Consumer>
            {firebase => <Request_list firebase={firebase} /> }
            </FirebaseContext.Consumer>  
            <br/>
        <Footer />
      </div>
    );
  }
}


export default App;