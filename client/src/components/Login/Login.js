import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss'

import { Logo } from '../Logo';


class Login extends Component {
  render() {
    return (
      <section className="hero is-fullheight landing">
        <div className="hero-body">
          <div className="container has-text-centered" id="login-form">
            <div className="box">
              <div>
                <Logo />
              </div>
              <h3 className="title">Login</h3>
              <form>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <button className="button is-block is-info is-large is-fullwidth">Submit</button>
              </form>
              <div>
                <p className="has-text-grey sub-menu">
                  <Link to="/register">Sign Up</Link> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                <a href="../">Need Help?</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;