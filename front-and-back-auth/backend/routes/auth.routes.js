

const express = require('express');
const { body } = require('express-validator');
const authorize = require('../middlewares/authorize');
const router = express.Router();

const authController = require('../controllers/auth.controller');

router.post('/', [
  body('username', 'Username cannot be null').notEmpty(),
  body('password', 'Password cannot be null').notEmpty(),
  body('password', 'Allowed characters range from 8 to 32 chars').isLength({ min: 8, max: 32 })
  ], authController.createUser);
router.post('/login', [
  body('username', 'Username cannot be null').notEmpty(),
  body('password', 'Password cannot be null').notEmpty()
  ], authController.login);
router.get('/logout', authorize, authController.logout);

module.exports = router;
