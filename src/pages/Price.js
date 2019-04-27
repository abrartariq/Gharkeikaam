import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Price from '../Components/pricelist';


class Prices extends Component {
render() {
  return (
    <div className="App">
      <Header />
      <Price />
      <Footer />
    </div>
  );
}

}

export default Prices;

