const express = require('express');
const usersController = require('./controllers/usersController');
const loginController = require('./controllers/loginController');
const recipesController = require('./controllers/recipesController');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (req, res) => {
  res.send();
});

app.use(express.json());

app.use('/users', usersController);
app.use('/login', loginController);
app.use('/recipes', recipesController);

app.listen(3000);
