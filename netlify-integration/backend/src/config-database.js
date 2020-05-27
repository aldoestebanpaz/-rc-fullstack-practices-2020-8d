const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://' +
    process.env.MONGO_USER_NAME +
    ':' +
    process.env.MONGO_USER_PASS +
    '@' +
    process.env.MONGO_DB_URL +
    '/' +
    process.env.MONGO_DB_NAME +
    '?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true });
