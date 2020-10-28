const express = require('express');
const { registerValid, emailAvailable } = require('../middlewares/userRegisterValid');
const { registerUser } = require('../models/UserModel');

const userRouter = express.Router();

const createUser = async (req, res, _next) => {
  const { name, email, password } = req.body;

  const createUser = await registerUser(name, email, password);

  res.status(201).json({ user: createUser })
};

userRouter.post('/', registerValid, emailAvailable, createUser);

module.exports = userRouter;
