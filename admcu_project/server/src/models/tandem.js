import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId();

var Tandem = new Schema({
   user: String,
   languages: {
        offer: [String],
        search: [String]
   },
   location: {
    type: [Number], 
    index: '2d'
   }
});

module.exports = mongoose.model('Tandem', Tandem);