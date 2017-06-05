'use strict';

const http = require('http');
const queryString = require('querystring');
const postData = queryString.stringify({
    name: 'André'
});

const options = {
    host: 'webschool-io.herokuapp.com',
    method: 'PUT',
    path: '/api/pokemons/5934d8eac1aab30012cbc640',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};

function callback(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS ' + JSON.stringify(res.headers));
    let data = '';

    res.setEncoding('utf8');
    res.on('data', chunk => data += chunk);

    res.on('end', () => {
        console.log('Dados finalizados: ' + data);
    });
};

const req = http.request(options, callback);

req.on('error', error => console.log('Erro: ' + error.message));
req.write(postData);
req.end();