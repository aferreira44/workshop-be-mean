'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // res.send(new Buffer('Buffer'));
  // res.send({ algum: 'json' });
  // res.send('<h1>algum html</h1>');
  // res.status(404).send('não achei');
  // res.status(500).send({error: 'FUUUUUU'});
  // res.status(200).send();
});

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});