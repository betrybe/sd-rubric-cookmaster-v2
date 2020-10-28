const connection = require('./connection');

const registerUser = async (name, email, password) => {
  const db = await connection('users');
  const createUser = await db.insertOne({ name, email, password, role: 'user' });
  return createUser.ops[0];
}

const findByEmail = async (email) => {
  const db = await connection('users');
  return db.findOne({ email });
}

module.exports = {
  registerUser,
  findByEmail,
};
