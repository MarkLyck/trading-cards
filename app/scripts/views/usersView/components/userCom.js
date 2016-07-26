import React from 'react'

const User = React.createClass({
  render: function() {
    return (
      <li>
        <h3>{this.props.username}</h3>
      </li>
    )
  }
})

export default User
