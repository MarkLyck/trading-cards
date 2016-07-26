import Backbone from 'backbone'

import Card from '../models/Card'

const Cards = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/kid_H1bf3MH_/cards`,
  model: Card
})

export default Cards
