const db = require('../models/databaseModel');

const signupController = {};

const createErr = (method) => {
  return ({
    log: `This error occured in ${method} method inside signupController`,
    message: `This error occured in ${method} method inside signupController, check terminal for error info`
  });
};

signupController.createUser = (req, res, next) => {
  // get credentials from req.body and destructure them
  const { username, password: pw } = req.body;
  // query db to add user to users table
  const query = 'INSERT INTO users (username, password) VALUES ($1, $2);';
  db.query(query, [username, pw])
    .then(dbResponse => {
      console.log('created user');
      console.log(dbResponse);
      return next();
    })
    .catch(err => next(createErr(err)));
};

module.exports = signupController;