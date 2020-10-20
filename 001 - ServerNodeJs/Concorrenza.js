var http = require('http');
console.log('Server is up and running');

setInterval(function(){
    console.log('Slow cycle');
}, 3000);

setInterval(function(){
    http.get({host:'www.vallauri.edu'}, function(res){
        console.log('HT connection: ' + res.headers.connection);
    });
}, 1000);

var server = http.createServer(function(req, res){
    res.writeHead(200);
    res.end('Ciao Mondo');
    console.log('--> Handled HTTP Request');
});
server.listen(8080);