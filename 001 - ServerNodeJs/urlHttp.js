var url = require('url');
var http = require("http");
var server = http.createServer(onRequest).listen(8080);
console.log("server is up and running");

function onRequest(req, res){
    var path = url.parse(req.url).pathname;
    console.log("server parsed path: " + path);
    switch(path){
        case '/':
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end('Hello World!!');
            break;
            default: pageNotFound(res);
    }
}

function pageNotFound(res){
    res.writeHead(404);
    res.end('404 - Not Found');
}