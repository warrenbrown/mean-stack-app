const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Champion = new Schema({
   name: {
      type: String
   },
   maddenVersion: {
      type: String
   },
   season: {
      type: String
   },
}, {
   collection: 'champions'
})

module.exports = mongoose.model('Champion', Champion)