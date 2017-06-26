'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.set({'Content-Type' : 'application/json; charset=utf-8'})
  res.set({'Auth' : '234gfg23'})
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});