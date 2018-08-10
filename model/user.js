var mongoose= require('mongoose');

var User = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})
module.exports = mongoose.model('User', User);
