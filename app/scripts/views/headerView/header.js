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
          <Link to="/login"><button id="login">Login</button></Link>
          <Link to="/signup"><button id="signup">Signup</button></Link>
          <button id="logout" onClick={this.logout}>Logout</button>
        </nav>
      </header>
    );
  }
})

export default Header;
