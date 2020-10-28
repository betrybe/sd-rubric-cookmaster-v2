const { Router } = require('express');
const validateJwt = require('../middlewares/auth');
const { validateFieldsPresent } = require('../middlewares/recipeValidations');
const recipeModel = require('../models/recipeModel');

const router = Router();


router.post('/', 
  validateJwt,
  validateFieldsPresent,
  async (req, res) => {
    const { name, ingredients, preparation } = req.body;

    console.log(req.user);
    
    const recipe = await recipeModel.add(name, ingredients, preparation, req.user._id);

    res.status(201).json({ recipe })
  });


router.get('/', async (req, res) => {
  const recipes = await recipeModel.findAll();

  res.status(200).json(recipes)
});

router.get('/:id', async (req, res) => {
  const recipe = await recipeModel.findById(req.params.id);

  if (!recipe)
    return res.status(404).json({message: 'recipe not found'})

  res.status(200).json(recipe)
});

module.exports = router;