const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  articleRef: { type: mongoose.Schema.Types.ObjectId, ref: 'articles' }
}, { versionKey: false });

const CommentModel = mongoose.model("comments", CommentSchema);

module.exports = CommentModel;
