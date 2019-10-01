var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', function() {
  console.log('Unable to connect to database');
});

db.once('open', function() {
  console.log('Database Connected');
});

var userSchema = new mongoose.Schema({
  email: String,
  password: String,
  userHistory: Array
});

var User = mongoose.model('User', userSchema);

module.exports = User;