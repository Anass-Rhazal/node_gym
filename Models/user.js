var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  firstName: String,
  lastName:String,
  email: String,
  login : String,
  password: String
});
module.exports = mongoose.model('User', UserSchema);
