import React from 'react'

const Card = React.createClass({
  render: function() {
    return (
      <li>
        <h3>{this.props.name}</h3>
      </li>
    )
  }
})

export default Card
