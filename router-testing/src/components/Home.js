import React, { Component } from 'react';
import logo from '../logo.svg';

class Home extends Component {
  render() {
    return (
        <div>
          <h2>Home</h2>
          <img src={logo} alt='react logo' />
        </div>
    );
  }
}

export default Home;