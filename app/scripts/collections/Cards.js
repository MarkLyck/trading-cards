import Backbone from 'backbone'

import Card from '../models/Card'

const Cards = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/kid_H1bf3MH_/cards`,
  idAttribute: '_id',
  model: Card
})

export default Cards
