var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Author', authorSchema);
