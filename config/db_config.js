var mongoose=require('mongoose');
var dbName = 'expCrud';

var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);