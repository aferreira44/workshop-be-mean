'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'modules'));
app.set('view engine', 'pug');

app.get('/users', (req, res) => {
  const users = [
    {
      name: 'Suissa'
    }, {
      name: 'André'
    }, {
      name: 'Grá'
    }
  ];

  res.render('users/views/list', {users});
});

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});