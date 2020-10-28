const { Router } = require('express');
const jwt = require('jsonwebtoken');
const loginValidations = require('../middlewares/loginValidations');
const userModel = require('../models/userModel');

const secret = 'trybe2020';

const router = Router();

const buildToken = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  
  return jwt.sign({ data: user }, secret, jwtConfig);
}

router.post('/', 
  loginValidations.validateEmailIsPresent,
  loginValidations.validateEmailFormat,
  loginValidations.validatePasswordIsPresent,
  loginValidations.validatePasswordLength,
  async (req, res) => {
    const { email } = req.body;

    const user = await userModel.findByEmail(email);
    
    const token = buildToken(user);
    
    res.status(200).json({ token });
  });

module.exports = router;