'use strict';

const express = require('express');
const app = express();

app.get('/file/:name', (req, res, next) => {
  let options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
      'webschool.io': 'FODA'
    }
  };

  let fileName = req.params.name;
  res.sendFile(fileName, options, (err) => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else{
      console.log('Sent:', fileName);
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});