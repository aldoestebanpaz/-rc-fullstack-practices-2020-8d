const mongoose = require('mongoose');

const articleschema = new mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
}, { versionKey: false });

module.exports = mongoose.model('articles', articleschema);
