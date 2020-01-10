import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import ListErrors from '../common/ListErrors';
import './Login.scss'

import { Logo } from '../Logo';


class Login extends Component {

  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth && this.props.auth.isAuthenticated) {
      this.setState({ redirectToReferrer: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.setState({ redirectToReferrer: true });
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    let { email, password } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <section className="hero is-fullheight landing">
        <div className="hero-body">
          <div className="container has-text-centered" id="login-form">
            <div className="box">
              <div>
                <Logo />
              </div>
              <h3 className="title">Login</h3>
              <ListErrors errors={this.props.errors} />
              <form>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.onChange}
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
                      value={password}
                      onChange={this.onChange}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <button className="button is-block is-info is-large is-fullwidth" onClick={this.onSubmit}>Submit</button>
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

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);