var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tandem',{useMongoClient: true});
mongoose.Promise = global.Promise;