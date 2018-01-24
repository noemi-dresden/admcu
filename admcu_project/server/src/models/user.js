import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

var Schema = mongoose.Schema;

var User = new Schema({
    id: String,
   username: String,
   password: String,
   email: String,
   jwt: String
});

module.exports = mongoose.model('User', User);