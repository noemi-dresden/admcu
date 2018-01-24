import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId();

var Tandem = new Schema({
   user: String,
   languages: {
        offer: [String],
        search: [String]
   }
});

module.exports = mongoose.model('Tandem', Tandem);