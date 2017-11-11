import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var User = new Schema({
   username: String,
   password: String
});

module.exports = mongoose.model('User', User);