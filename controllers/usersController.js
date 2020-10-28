const { Router } = require('express');

const userValidations = require('../middlewares/userValidations');
const userModel = require('../models/userModel');

const router = Router();

router.post('/', 
  userValidations.validateNameIsPresent,
  userValidations.validateEmailIsPresent,
  userValidations.validatePasswordIsPresent,
  userValidations.validateEmailFormat,
  userValidations.validateEmailIsUnique,
  async (req, res) => {
    const { name, email, password } = req.body;

    const user = await userModel.add(name, email, password);
    res.status(201).json({ user });
  });

module.exports = router;