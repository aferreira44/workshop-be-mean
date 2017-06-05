'use strict';

var http = require('http'),
    url = require('url');

http.createServer(function (req, res) {
    var result = url.parse(req.url, true);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body>');
    res.write('<h1>Be Mean</h1>');
    res.write('<h2>Query String</h2>');
    res.write('<ul>');

    console.log(result.query);
    for (var key in result.query) {
        res.write('<li>' + key + ' : ' + result.query[key] + '</li>');
    }

    res.write('</ul>');
    res.write('</body></html>');
    res.end();

}).listen(3000, function(){
    console.log('Servidor rodando em http://localhost:3000');
});