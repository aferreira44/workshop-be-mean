'use strict';

module.exports = (req, res) => {
  const options = {
    root: __dirname + '/../../public/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
      'webschool.io': 'FODA'
    }
  };

  const fileName = req.params.name;
  res.sendFile(fileName, options, (err) => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else{
      console.log('Sent:', fileName);
    }
  });
};