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
        <Link to="/"><h2 id="logo">Trading Cards</h2></Link>
        <nav>
          <Link to="/login"><button className="nav-button" id="goto-login">Login</button></Link>
          <Link to="/signup"><button className="nav-button" id="goto-signup-btn">Signup</button></Link>
          <button id="logout" className="nav-button" onClick={this.logout}>Logout</button>
          <Link to={`/users/${store.session.get('userId')}`}><button id="profile-btn" className="nav-button">Profile</button></Link>
          <Link to={`/users`}><button id="users-btn" className="nav-button">All users</button></Link>
        </nav>
      </header>
    );
  }
})

export default Header;
