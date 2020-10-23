var url = require('url');
var http = require('http');
var server = http.createServer(onRequest).listen(8080);
console.log('Server is up and running');

function onRequest(req, res){
    var path = url.parse(req.url).pathname;
    console.log('Server parsed path: ' + path);
    switch (path){
        case '/':
            res.writeHead(200, {'Content-type': 'text/html'});
            var fs = require('fs');
            fs.readFile(__dirname + '/Principale.html', function(err, content){
                if(err){
                    res.writeHead(500);
                    return res.end('Error loading file');
                }
                res.writeHead(200);
                res.end(content);
            });
        break;
        case '/Studenti':
                res.writeHead(200, {'Content-type': 'text/html'});
                var fs = require('fs');
                fs.readFile(__dirname + '/Studenti.html', function(err, content){
                    if(err){
                        res.writeHead(500);
                        return res.end('Error loading file');
                    }
                    res.writeHead(200);
                    res.end(content);
                });
        break;
        case '/Professori':
                res.writeHead(200, {'Content-type': 'text/html'});
                var fs = require('fs');
                fs.readFile(__dirname + '/Professori.html', function(err, content){
                    if(err){
                        res.writeHead(500);
                        return res.end('Error loading file');
                    }
                    res.writeHead(200);
                    res.end(content);
                });
        break;
        case '/Genitori':
                res.writeHead(200, {'Content-type': 'text/html'});
                var fs = require('fs');
                fs.readFile(__dirname + '/Genitori.html', function(err, content){
                    if(err){
                        res.writeHead(500);
                        return res.end('Error loading file');
                    }
                    res.writeHead(200);
                    res.end(content);
                });
        break;
        default: pageNotFound(res);
    }
}

function pageNotFound(res){
    res.writeHead(404);
    res.end('404 - Not Found');
}