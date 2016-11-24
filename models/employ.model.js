var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var employSchema = new Schema({
  name: String,
  email: String,
  address: String,
  age: String
});

module.exports = mongoose.model('Employ', employSchema);