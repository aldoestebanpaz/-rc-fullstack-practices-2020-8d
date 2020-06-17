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
  commentsRef: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comments' }]
}, { versionKey: false });

const ArticleModel = mongoose.model("articles", ArticleSchema);

module.exports = ArticleModel;
