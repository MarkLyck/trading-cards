import React from 'react'

const Card = React.createClass({
  render: function() {
    console.log(this.props.url);
    return (
      <li>
        {this.props.children}
        <h3>{this.props.cardname}</h3>
      </li>
    )
    // return (
    //   <li className="card" style={{background: `url(${this.props.url}`}}>
    //     {this.props.children}
    //     <h3>{this.props.cardname}</h3>
    //   </li>
    // )
  }
})

export default Card
