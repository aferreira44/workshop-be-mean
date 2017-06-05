'use strict';

var https = require('https');

const options = {
    host: 'api.redtube.com',
    path: '/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'
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

const req = https.request(options, callback);

req.on('error', error => console.log('Erro: ' + error.message));
req.end();