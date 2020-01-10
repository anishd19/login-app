import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import { Login } from './components/Login'
import { Register } from './components/Register'
import { Home } from './components/Home'
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route exact path="/" component={Home}/>
          </div>
        </Router>
      </Provider>
      );
  }
}

export default App;