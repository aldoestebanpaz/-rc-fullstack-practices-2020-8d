const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  body: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String
  }
}, { versionKey: false });

const ArticleModel = mongoose.model("articles", ArticleSchema);

module.exports = ArticleModel;
