import React from 'react'

const Card = React.createClass({
  render: function() {
    return (
      <li>
        <h3>{this.props.cardname}</h3>
        <p>HP: {this.props.hp}</p>
        <p>Height: {this.props.height}</p>
        <p>Weight: {this.props.weight}</p>
        <p>Attack: {this.props.attack}</p>
      </li>
    )
  }
})

export default Card
