var mongoose = require('mongoose');

const user = mongoose.model('User', {
  url: String,
});

module.exports = user
