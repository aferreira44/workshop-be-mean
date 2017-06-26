'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // res.redirect('http://google.com');
  res.redirect('login');
});

app.get('/login', (req, res) => {
  res.send('login route');
});

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});