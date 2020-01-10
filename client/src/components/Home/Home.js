import React, { Component } from 'react';
import { Navbar } from '../Navbar';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="container is-two-quarters">
        <Navbar />
        <div class="card">
          <div class="card-content">
            <p class="title">
              Welcome to Home Page
            </p>
            <p class="subtitle">
              Coded by Anish Dhamodaran
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;