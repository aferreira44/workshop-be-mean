'use strict';

const http = require('http');

http.get({
    hostname: 'localhost',
    path: '/user?name=Suissa&teacher=true&age=31',
    port: 3000,
    agent: false
}, res => {
    let body = "";
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.on('data', data => body += data);

    res.on('end', () => {
        console.log('Resposta: ', body);
    });
});