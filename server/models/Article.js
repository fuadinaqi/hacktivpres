var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  authorId: {
    type: Schema.Types.ObjectId, ref: 'Author'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Article', articleSchema);
