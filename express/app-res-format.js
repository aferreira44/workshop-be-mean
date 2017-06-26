'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.format({
    'text/plain': () => {
      res.send(hey);
    },
    'text/html': () => {
      res.send('<p>hey</p>');
    },
    'application/json': () => {
      res.send({message: 'hey'});
    },
    'default': () => {
      res.status(406).send('Not Acceptable');
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em localhos:3000');
});
