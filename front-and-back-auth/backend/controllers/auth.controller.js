const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const UserModel = require('../models/user.model');

exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { body } = req;

  let user_exists = await UserModel.findOne({ username: body.username });
  if (user_exists) {
    return res.status(400).json({ message: 'User already exists.'});
  }

  const userData = {
    username: body.username,
    token: []
  };

  const salt = await bcryptjs.genSalt(10);
  userData.password = await bcryptjs.hash(body.password, salt);

  const user = new UserModel(userData);

  try {
    await user.save();
    res.send({ message: 'User successfully registered' });
  } catch (err) {
    res.status(500).send(err);
  }

}

exports.login = async (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  
  const { body } = req;
  
  let user_in_db = await UserModel.findOne({ username: body.username });
  if (!user_in_db) {
    return res.status(400).json({ message: 'Invalid credentials.'});
  }
  
  const passCheck = await bcryptjs.compare(body.password, user_in_db.password);
  if (!passCheck) {
    return res.status(400).json({ message: 'Invalid credentials.'});
  }

  const jwt_payload = {
    user: {
      id: user_in_db.id,
      username: user_in_db.username
    }
  };
  
  try {
    const token = jsonwebtoken.sign(jwt_payload, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXP_TIME });
    user_in_db.token = [ token ];
    await UserModel.update({ username: user_in_db.username }, user_in_db);
    res.send({ message: 'User logged in succesfully', token });
  } catch (error) {
    return res.status(500).json({ message: 'ERROR.', error });
  }
}

exports.logout = async (req, res) => {

  try {

    await UserModel.updateOne({ _id: res.locals.user.id }, { $set: { token: [] } });

    res.json({ message: 'User logged out succesfully' });

  } catch (error) {
    res.status(500).send({ message: 'ERROR.', error });
  }

}
