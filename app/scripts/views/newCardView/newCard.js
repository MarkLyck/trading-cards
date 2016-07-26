import React from 'react';
import Backbone from 'backbone'
import Cards from '../../collections/Cards'

import store from '../../store'

const NewCard = React.createClass({
  submit: function(e){
    e.preventDefault();
    let imageURL = this.refs.imageURL.value;
    let cardname = this.refs.cardname.value;
    let hp = this.refs.hp.value;
    let height = this.refs.height.value;
    let weight = this.refs.weight.value;
    let attack = this.refs.attack.value;

    console.log(Cards);

    store.cards.create({
      imageURL: imageURL,
      cardname: cardname,
      hp: hp,
      height: height,
      weight: weight,
      attack: attack
    })
  },
  render: function() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" placeholder="image URL" ref="imageURL"/>
        <input type="text" placeholder="Card name" ref="cardname"/>
        <input type="text" placeholder="HP" ref="hp"/>
        <input type="text" placeholder="Height" ref="height"/>
        <input type="text" placeholder="Weight" ref="weight"/>
        <input type="text" placeholder="Attack" ref="attack"/>

        <input type="submit" value="Create Card"/>
      </form>
    );
  }
})

export default NewCard;
