'use strict';

const http = require('http');
const https = require('https');

const address = '13ecJsZm8XAUiSpuTw5ADKSU6N9hbNDHbR';

const options = {
    host: 'blockchain.info',
    method: 'GET',
    path: '/q/addressbalance/' + address + '?confirmations=6',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

http.createServer(function (req, res) {

    const clientRequest = https.request(options, clientResponse => {
        console.log('STATUS: ' + res.statusCode);

        clientResponse.on('data', data => {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write('<h3>Endereço: ' + address);
            res.write('<h3>Total em BTC: ' + data / 100000000 + '</h3>');
            res.end();
        });
    });

    clientRequest.end();

    clientRequest.on('error', error => {
        console.log('Error: ' + error.message);
    });
})
    .listen(3000, function () {
        console.log('Servidor rodando em http://localhost:3000');
    });;