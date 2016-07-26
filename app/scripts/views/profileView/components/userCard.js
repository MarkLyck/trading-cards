import React from 'react'

const UserCard = React.createClass({
  render: function() {
    return (
      <li>
        <h3>{this.props.cardname}</h3>
      </li>
    )
  }
})

export default UserCard
