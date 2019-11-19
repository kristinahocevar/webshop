const { model, Schema } = require('mongoose');

const orderSchema = new Schema({
  email: String,
  address: String,
  creditCard: String,
  createdAt: String,
  basket: {
    type: Schema.Types.ObjectId,
    ref: 'basket'
  }
});

module.exports = model('Order', orderSchema);
