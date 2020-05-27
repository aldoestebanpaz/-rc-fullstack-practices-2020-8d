const { articleModel } = require('../model');

exports.create = async (req, res) => {
  try {
    var doc = new articleModel(req.body);
    const article = await doc.save();
    return res.send(article);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

exports.getAll = async (req, res) => {
  try {
    const articles = await articleModel.find({});
    return res.send(articles);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
}
