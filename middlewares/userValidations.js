const userModel = require('../models/userModel');

const validateNameIsPresent = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({message: 'Invalid entries. Try again.'})
  }

  next();
}

const validateEmailIsPresent = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({message: 'Invalid entries. Try again.'})
  }
  next();
}

const validatePasswordIsPresent = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({message: 'Invalid entries. Try again.'})
  }

  next();
}

const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const validateEmailFormat = (req, res, next) => {
  const { email } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json({message: 'Invalid entries. Try again.'})
  }

  next();
}

const validateEmailIsUnique = async (req, res, next) => {
  const { email } = req.body;

  if ((await userModel.findByEmail(email))) {
    return res.status(409).json({message: 'Email already registered'})
  }
  
  next();
}

module.exports = {
  validateNameIsPresent,
  validateEmailIsPresent,
  validatePasswordIsPresent,
  validateEmailFormat,
  validateEmailIsUnique
}