import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss'

import { Logo } from '../Logo';

const countries = ['India', 'US', 'UK', 'China'];

class Register extends Component {
  render() {
    return (
      <section className="hero is-fullheight landing">
        <div className="hero-body">
          <div className="container has-text-centered" id="login-form">
            <div className="box">
            <div>
                <Logo />
              </div>
              <h3 className="title">Register</h3>
              <form>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      name="username"
                      placeholder="Username"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      name="firstname"
                      placeholder="firstname"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      name="lastname"
                      placeholder="lastname"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </p>
                </div>
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
                  </p>
                </div>
                <div class="field is-horizontal is-pulled-left">
                  <div class="field-label is-normal">
                    <label class="label">Gender</label>
                  </div>
                  <div class="field-body">
                    <div class="field radio-field">
                      <div class="control">
                        <label class="radio">
                          <input type="radio" name="gender"/>
                          Male
                        </label>
                        <label class="radio">
                          <input type="radio" name="gender"/>
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field is-horizontal is-pulled-right">
                  <div class="field-label is-normal">
                    <label class="label">Country</label>
                  </div>
                  <div class="field-body">
                    <div class="field is-narrow">
                      <div class="control">
                        <div class="select is-fullwidth">
                          <select>
                            {
                              countries.map((country) => {
                                return <option>{country}</option>
                              })
                            }
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <Link to="/login">Login</Link> &nbsp;·&nbsp;
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
    
export default Register;