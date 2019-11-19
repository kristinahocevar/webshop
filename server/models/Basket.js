const { model, Schema } = require('mongoose');

const basketSchema = new Schema({
  title: String, 
  price: Number,
  description: String,
  createdAt: Date,
  itemCount: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Basket', basketSchema);
