import React from 'react'
import {Link} from 'react-router'

import store from '../../store'

import Header from '../headerView/header'
import User from './components/userCom'

const UsersView = React.createClass({
  getInitialState: function() {
    return {users:[]}
  },
  componentDidMount: function() {
    store.users.on('update', () => {
      this.setState({users: store.users.toJSON()})
    })
    store.users.fetch({success:() => console.log('FETCHED USERS')})
  },
  componentWillUnmount: function() {
    store.users.off()
  },
  render: function() {
    console.log(store.users);
    let AllUsers = store.users.map((user) => {
      return (
        <Link to={`/users/${user.get('userId')}`} key={user.get('userId')}>
          <User className="card" username={user.get('username')}/>
        </Link>
      )
    })
    return (
      <div>
        <Header/>
        <h1>All Users</h1>
        <ul id="users-list">
          {AllUsers}
        </ul>
      </div>
    )
  }
})

export default UsersView
