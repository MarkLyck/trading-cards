import React from 'react';
import store from '../../store'
import Header from '../headerView/header'

const Signup = React.createClass({
  submitFunction: function(e){
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    store.session.signup(username, password)
  },
  render: function() {
    return (
      <div>
        <Header/>
        <form onSubmit={this.submitFunction}>
          <input type="text" placeholder="Username" ref="username"/>
          <input type="password" placeholder="Password"  ref="password"/>
          <input type="submit" value="Signup"/>
        </form>
      </div>
    );
  }
})

export default Signup;
