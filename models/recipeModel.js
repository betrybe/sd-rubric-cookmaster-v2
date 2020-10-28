const { ObjectId } = require('mongodb');
const connection = require('./connection');

const findByEmail = (email) =>
  connection().then((db) => db.collection('recipes').findOne({ email }))

const add = async (name, ingredients, preparation, userId) => {
  const result = await connection().then((db) => db.collection('recipes').insertOne({ name, ingredients, preparation, userId }));
  return result.ops[0];
}

const findAll = () => 
  connection().then((db) => db.collection('recipes').find().toArray())

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return await connection().then((db) => db.collection('recipes').findOne(ObjectId(id)))
}
  
  

module.exports = {
  findByEmail,
  add,
  findAll,
  findById
}