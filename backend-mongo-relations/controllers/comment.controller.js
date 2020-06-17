const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const CommentModel = require('../models/comment.model');
const ArticleModel = require('../models/article.model');

exports.createComment = async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const comment = new CommentModel(req.body);

  try {
    await comment.save();

    const article = await ArticleModel.findById(req.body.articleRef);
    article.commentsRef.push(comment._id);
    await article.save();

    // const article = await ArticleModel.findByIdAndUpdate(
    //   req.body.articleRef,
    //   { $push: { commentsRef: comment._id } });

    res.send(comment);
  } catch (err) {
    res.status(500).send(err);
  }

};

exports.getComment = async (req, res) => {

  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
      return res.status(404).json({ message: 'Comment not found.'});
    }

    let comment = await CommentModel.findById(req.params.id).populate('articleRef');
    // .sort('<field>')

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found.'});
    }

    res.send(comment);

  } catch (err) {
    res.status(500).send(err);
  }

};
