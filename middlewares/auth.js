const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');

const secret = 'trybe2020';

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];

  console.log(token);
  
  if (!token)
    return res.status(400).json({ message: 'invalid token'});
  
  console.log(secret);

  try {
    const decoded = jwt.verify(token, secret);
    
    const user = await userModel.findByEmail(decoded.data.email);
    
    if (!user)
      return res.status(401).json({ message: 'invalid token'})

    req.user = user;

    next();
  } catch {
    return res.status(401).json({ message: 'jwt malformed'})
  }
}