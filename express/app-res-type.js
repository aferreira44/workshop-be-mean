'use strict';

const express = require('express');
const app = express();

app.get('/html', (req, res) => {
  // res.type('.html');
  res.type('html');
  res.send('<h1>Hello World!</h1>');
});

app.get('/json', (req, res) => {
  // res.type('application/json');
  res.type('json');
  res.send({message: 'Hello World!'});
});

app.listen(3000, () => {
  console.log('Servidor rodando em localhos:3000');
});
