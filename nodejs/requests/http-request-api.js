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

function callback(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS ' + JSON.stringify(res.headers));
    let data = '';

    res.setEncoding('utf8');
    res.on('data', chunk => data += chunk);

    console.log('data:' + data);

    res.on('end', () => { return data });
};

http.createServer(function (req, res) {
    req = https.request(options, callback);
    res.write('Endereço: ' + address);
    res.write('Total de BTC: ' + res.data);
    req.on('error', error => console.log('Erro: ' + error.message));
    req.end();
}).listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000');
});;