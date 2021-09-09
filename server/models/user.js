const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: String,
  password: String,
  todos: [{
    type: Schema.Types.ObjectId,
    ref: "Todo"
  }]
});

module.exports = mongoose.model('User', userSchema);