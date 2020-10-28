const { schema } = require('../services/userSchema');
const { validEmail } = require('../services/userValid');

const registerValid = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    await schema.validate({ name, email, password });
  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ message: err.message });
  }

  next();
}

const emailAvailable = async (req, res, next) => {
  const { email } = req.body;

  if (await validEmail(email)) return res.status(409).json({ message: 'Email already registered' });

  return next();
}

module.exports = { registerValid, emailAvailable };
