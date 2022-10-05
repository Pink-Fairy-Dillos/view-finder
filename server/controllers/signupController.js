const db = require('../models/databaseModel');
const bcrypt = require('bcrypt');

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
  console.log(pw);
  // hash password asynchronously before storing in db
  const saltRounds = 10;
  bcrypt.hash(pw, saltRounds, (err, hash) => {
    if (err) {
      return next({
        log: `userController.createUser: ERROR: Error hashing password: ${err}`,
        message: { err: 'Error hashing password' },
      });
    }

    if (typeof hash === 'string') {console.log('hash is a string')}

  // query db to add user to users table
  const query = 'INSERT INTO users (username, password) VALUES ($1, $2);';
  db.query(query, [username, hash])
    .then(dbResponse => {
      console.log('created user');
      res.locals.username = username;
      return next();
    })
    .catch(err => {
      console.log(err);
      return next(createErr(err));
    })
});
};

signupController.createSession = (req, res, next) => {
  const add = 'INSERT INTO sessions (session, username) VALUES ($1, $2);'
  db.query(add, [req.body.username, req.body.username])
  .then(res => {
    console.log('created session');
    return next();
  })
  .catch(err => next(createErr(err)));
};

module.exports = signupController;