'use strict';

const express = require('express');
const app = express();

const arr = [
  {
    name: 'Paulo'
  }, {
    name: 'João'
  }
];

app.get('/', (req, res) => {
  // res.json(null);
  // res.json({name:'André'});
  // res.json({arr: [1, 2, 3]});
  res.json(arr);
});

app
.listen(3000, () => {
console.log('Servidor rodando em localhost:3000');
});