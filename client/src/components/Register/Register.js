import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import ListErrors from "../common/ListErrors";
import "./Register.scss";

import { Logo } from "../Logo";

const countries = ["India", "US", "UK", "China"];

class Register extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
      username: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      gender: "male",
      country: countries[0],
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

    let {
      username,
      email,
      password,
      firstname,
      lastname,
      gender,
      country
    } = this.state;

    const userData = {
      user: {
        username,
        email,
        password,
        firstname,
        lastname,
        gender,
        country
      }
    };

    this.props.registerUser(userData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    let {
      username,
      email,
      password,
      firstname,
      lastname,
      gender,
      country
    } = this.state;

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
              <h3 className="title">Register</h3>
              <ListErrors errors={this.props.errors} />
              <form>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.onChange}
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
                      value={firstname}
                      onChange={this.onChange}
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
                      value={lastname}
                      onChange={this.onChange}
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
                      value={email}
                      onChange={this.onChange}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div className="field is-horizontal is-pulled-left">
                  <div className="field-label is-normal">
                    <label className="label">Gender</label>
                  </div>
                  <div className="field-body">
                    <div className="field radio-field">
                      <div className="control">
                        <label className="radio">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={this.onChange}
                          />
                          Male
                        </label>
                        <label className="radio">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={this.onChange}
                          />
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal is-pulled-right">
                  <div className="field-label is-normal">
                    <label className="label">Country</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-narrow">
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select value={country} name="country" onChange={this.onChange}>
                            {countries.map(country => {
                              return <option
                                        value={country}
                                        key={country}>
                                        {country}
                                        </option>;
                            })}
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
                      value={password}
                      onChange={this.onChange}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <button className="button is-block is-info is-large is-fullwidth" onClick={this.onSubmit}>
                  Submit
                </button>
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

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(Register);
