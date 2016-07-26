import React from 'react';
import { Link } from 'react-router'

import store from '../../store'
import Header from '../headerView/header'

const Profile = React.createClass({
  getInitialState: function() {
    return {user:{}}
  },
  componentDidMount: function() {
    if (!store.users.get(this.props.routeParams.id)) {
      store.users.add({_id: this.props.routeParams.id})
    }
    let user = store.users.get(this.props.routeParams.id);
    if (user.username) {
      this.setState({user: model.toJSON()});
    }
    user.fetch({success:(model) => {
        this.setState({user: model.toJSON()});
      }
    })
  },
  render: function() {
    return (
      <div>
        <Header/>
        <h2>{this.state.user.username}</h2>
      </div>
    );
  }
})

export default Profile;
