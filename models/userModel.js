const connection = require('./connection');

const findByEmail = (email) =>
  connection().then((db) => db.collection('users').findOne({ email }))

const add = async (name, email, password, role) => {
  const result = await connection().then((db) => db.collection('users').insertOne({ name, email, password, role: 'user' }));
  return result.ops[0];
}
  

module.exports = {
  findByEmail,
  add
}