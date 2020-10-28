const { registerUser, findByEmail } = require('../models/UserModel');

const validEmail = async (email) => {
  const emailValid = await findByEmail(email);
  return emailValid;
}

module.exports = {
  validEmail,
};
