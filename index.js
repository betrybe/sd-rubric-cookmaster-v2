const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const userRouter = require('./controllers/userController')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/images', express.static(path.resolve(__dirname, 'uploads')));

app.use('/users', userRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => response.send());

app.listen(port, () => console.log(`Esta rodando na porta ${port}`));

