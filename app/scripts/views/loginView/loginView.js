import React from 'react';

const Login = React.createClass({
  submitFunction: function(e){
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    store.session.login(username, password)
  },
  render: function() {
    return (
      <form onSubmit={this.submitFunction}>
        <input type="text" placeholder="Username" ref="username"/>
        <input type="password" placeholder="Password"  ref="password"/>
        <input type="submit" value="Login"/>
      </form>
    );
  }
})

export default Login;
