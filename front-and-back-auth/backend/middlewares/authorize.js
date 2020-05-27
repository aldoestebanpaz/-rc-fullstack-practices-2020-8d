const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const UserModel = require('../models/user.model');

module.exports = async (req, res, next) => {
  console.log('Authorization...');
  try {
    const authHeader = req.header('Authorization');
    const token = authHeader.replace('Bearer ', '');
    
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    
    console.log('decoded payload');
    console.log(decoded);

    const user_in_db = await UserModel.findOne({ _id: decoded.user.id, token: token });
    console.log(user_in_db);
    if (!user_in_db) {
      return res.status(401).json({ message: 'Unauthorized.'});
    }
    
    res.locals.user = user_in_db;
    res.locals.token = token;
    
    next();

  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Unauthorized.', error: error.message });
  }
};
