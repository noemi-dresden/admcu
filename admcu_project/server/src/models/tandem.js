import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId();

var Tandem = new Schema({
   user: {type: Schema.Types.ObjectId},
   languages: {
        offer: [String],
        receive: [String]
   },
   location: {
       latitude: String,
       longitude: String
   }
});

module.exports = mongoose.model('Tandem', Tandem);