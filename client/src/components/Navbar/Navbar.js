import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import './Navbar.scss';

class Navbar extends Component {

  onLogoutClick = () => {
    this.props.logoutUser();
  }

  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <div className="logo">Login App</div>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item" onClick={this.onLogoutClick}>
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { logoutUser })(Navbar);