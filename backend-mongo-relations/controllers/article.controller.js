const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const ArticleModel = require('../models/article.model');

exports.createArticle = async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const article = new ArticleModel(req.body);

  try {
    await article.save();
    res.send(article);
  } catch (err) {
    res.status(500).send(err);
  }

};

exports.getArticle = async (req, res) => {

  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
      return res.status(404).json({ message: 'Article not found.'});
    }

    const article = await ArticleModel.findById(req.params.id).populate('commentsRef', 'description -_id');
    // .sort('<field>')

    if (!article) {
      return res.status(404).json({ message: 'Article not found.'});
    }

    res.send(article);

  } catch (err) {
    res.status(500).send(err);
  }

};

exports.getAllArticles = async (req, res) => {

  try {
    const articles = await ArticleModel.find({});
    res.send(articles);
  } catch (err) {
    res.status(500).send(err);
  }

};

exports.updateArticle = async (req, res) => {

  try {
    
    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
      return res.status(404).json({ message: 'Article not found.'});
    }

    const article = await ArticleModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // .sort('<field>')

    if (!article) {
      return res.status(404).json({ message: 'Article not found.'});
    }

    res.send(article);
  } catch (err) {
    res.status(500).send(err);
  }

};

exports.deleteArticle = async (req, res) => {

  try {
    
    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
      return res.status(404).json({ message: 'Article not found.'});
    }

    const article = await ArticleModel.findByIdAndDelete(req.params.id);
    
    if (!article) {
      return res.status(404).json({ message: 'Article not found.'});
    }

    return res.status(200).send({ message: "The article has been successfully deleted" });
  } catch (err) {
    res.status(500).send(err)
  }

};
