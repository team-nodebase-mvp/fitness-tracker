var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', function() {
  console.log('Unable to connect to database');
});

db.once('open', function() {
  console.log('Database Connected');
});

var userSchema = new mongoose.Schema({
  email: {type: String, index: { unique: true }},
  password: String,
  userHistory: [
    { 
      date: Date,
      timestamp: String,
      exerciseCategory: String,
      custom: String,
      sets: Number,
      reps: Number,
      weight: Number,
      time: Number,
      distance: Number,
      speed: Number,
      incline: Number,
      resistance: Number,
      laps: Number,
      weightSelect: String,
      distanceSelect: String,
      timeSelect: String,
      speedSelect: String
    }
  ]
});

var User = mongoose.model('User', userSchema);

module.exports = User