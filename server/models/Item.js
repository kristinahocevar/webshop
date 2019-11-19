const { model, Schema } = require('mongoose');

const itemSchema = new Schema({
  title: String, 
  price: Number,
  description: String,
  createdAt: Date,
  boughtTime: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
});

module.exports = model('Item', itemSchema);
