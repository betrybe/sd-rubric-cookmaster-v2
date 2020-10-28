const userModel = require('../models/userModel');


const validateEmailIsPresent = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(401).json({message: 'All fields must be filled'})
  }
  next();
}

const validatePasswordIsPresent = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(401).json({message: 'All fields must be filled'})
  }

  next();
}

const validateEmail = (email) => {
  const regex = /^[\w+.]+@\w{2,}\.\w{2,}(?:\.\w{2})?$/;
  return regex.test(email);
};

const validateEmailFormat = (req, res, next) => {
  const { email } = req.body;

  if (!validateEmail(email)) {
    return res.status(401).json({message: 'Incorrect username or password'})
  }

  next();
}

const validatePasswordLength = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 8) {
    return res.status(401).json({message: 'Incorrect username or password'})
  }

  next();
}

module.exports = {
  validateEmailIsPresent,
  validatePasswordIsPresent,
  validateEmailFormat,
  validatePasswordLength
}