'use strict';

const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.links({
    next: 'http://api.example.com/users?page=2',
    last: 'http://api.example.com/users?page5'
  });
  res.send('Listagem dos usuários da página 1');
});

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
})