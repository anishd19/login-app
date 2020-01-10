import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Login } from './components/Login'
import { Register } from './components/Register'
import { Home } from './components/Home'
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
      );
  }
}

export default App;