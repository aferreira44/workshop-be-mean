'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain').send('Hello World');
  console.log('Content-Type', res.get('Content-Type'));
});

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});