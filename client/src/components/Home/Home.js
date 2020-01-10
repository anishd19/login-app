import React, { Component } from 'react';
import { Navbar } from '../Navbar';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="container is-two-quarters">
        <Navbar />
        <div className="card">
          <div className="card-content">
            <p className="title">
              Welcome to Home Page
            </p>
            <p className="subtitle">
              Coded by Anish Dhamodaran
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;