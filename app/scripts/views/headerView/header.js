import React from 'react';
import { Link } from 'react-router'

import store from '../../store'

const Header = React.createClass({
  logout: function() {
    localStorage.removeItem('authtoken')
    console.log(store);
    store.session.clear()
  },
  render: function() {
    return (
      <header>
        <h2>Trading Cards</h2>
        <nav>
          <Link to="/login"><button className="nav-button" id="goto-login">Login</button></Link>
          <Link to="/signup"><button className="nav-button" id="goto-signup-btn">Signup</button></Link>
          <button id="logout" className="nav-button" onClick={this.logout}>Logout</button>
          <Link to="/user"><button id="profile-btn" className="nav-button">Profile</button></Link>
        </nav>
      </header>
    );
  }
})

export default Header;
